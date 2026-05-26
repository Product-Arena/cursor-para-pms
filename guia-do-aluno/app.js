async function loadPartials() {
  const slots = Array.from(document.querySelectorAll('[data-include]'));
  await Promise.all(slots.map(async (slot) => {
    const src = slot.getAttribute('data-include');
    if (!src) return;
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error(`Falha ao carregar ${src}: ${response.status}`);
    }
    slot.outerHTML = await response.text();
  }));
}

async function initGuideApp() {
  try {
    await loadPartials();
  } catch (error) {
    console.error(error);
    document.body.insertAdjacentHTML(
      'afterbegin',
      '<div class="partial-load-error">Não foi possível carregar o guia. Abra pelo servidor local do projeto, não diretamente pelo arquivo.</div>'
    );
    return;
  }

  initGuideInteractions();
  initGuideAnalytics();
  initCopyReferences();
  initCopyPrompts();
  initAutoplayVideos();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGuideApp);
} else {
  initGuideApp();
}

function initGuideInteractions() {
  // =========================================================
  // Navegação / Scroll / Atalhos
  // =========================================================

  // Se o alvo de um link âncora for um <details class="section-collapse">
  // fechado, abra-o antes de rolar
  function openDetailsIfTarget(id) {
    const target = document.getElementById(id);
    if (!target) return null;
    // Se for details colapsável ou estiver dentro de um, abre
    let el = target;
    while (el) {
      if (el.tagName === 'DETAILS' && !el.open) {
        el.open = true;
      }
      el = el.parentElement;
    }
    return target;
  }

  /** Altura do topbar fixo + folga para o título da seção ficar visível. */
  function getScrollOffset() {
    const topbar = document.querySelector('.topbar');
    return (topbar ? topbar.offsetHeight : 80) + 16;
  }

  /** Rola até o elemento respeitando topbar (scrollIntoView ignora scroll-margin em alguns casos). */
  function scrollToEl(target) {
    const y =
      window.scrollY + target.getBoundingClientRect().top - getScrollOffset();
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }

  const DAY_GROUPS = [
    {
      scope: 'conteudo',
      id: 'side-nav-dia-1',
      targets: ['bloco-intro'],
      prefixes: ['intro-', 'bloco-1', 'bloco-3', 'bloco-4'],
    },
    {
      scope: 'conteudo',
      id: 'side-nav-dia-2',
      targets: [],
      prefixes: ['bloco-5'],
    },
    {
      scope: 'conteudo',
      id: 'side-nav-dia-3',
      targets: [],
      prefixes: ['bloco-7', 'bloco-8'],
    },
  ];

  const NAV_GROUPS = [
    {
      scope: 'conteudo',
      id: 'side-nav-intro-subs',
      targets: ['bloco-intro'],
      prefixes: ['intro-'],
    },
    {
      scope: 'conteudo',
      id: 'side-nav-bloco-1-subs',
      targets: ['bloco-1'],
      prefixes: ['bloco-1-'],
    },
    {
      scope: 'conteudo',
      id: 'side-nav-bloco-3-subs',
      targets: ['bloco-3'],
      prefixes: ['bloco-3-'],
    },
    {
      scope: 'conteudo',
      id: 'side-nav-bloco-4-subs',
      targets: ['bloco-4'],
      prefixes: ['bloco-4-'],
    },
    {
      scope: 'conteudo',
      id: 'side-nav-bloco-5-subs',
      targets: ['bloco-5'],
      prefixes: ['bloco-5-'],
    },
    {
      scope: 'apendice',
      id: 'side-nav-apendice-config-subs',
      targets: ['apendice-configuracoes-extras', 'apendice-github-ssh'],
      prefixes: [],
    },
  ];

  function targetMatchesGroup(targetId, group) {
    return (
      group.targets.includes(targetId) ||
      group.prefixes.some(prefix => targetId.startsWith(prefix))
    );
  }

  /** Fecha exercícios abertos; recolhe subtópicos na lateral fora do bloco correspondente. */
  function collapseDetailsForSideNav(targetId, scope = 'conteudo') {
    document.querySelectorAll('details.exercise[open]').forEach((d) => {
      d.open = false;
    });

    DAY_GROUPS.forEach(group => {
      const el = document.getElementById(group.id);
      if (!el) return;
      el.open = group.scope === scope && targetMatchesGroup(targetId, group);
    });

    NAV_GROUPS.forEach(group => {
      const el = document.getElementById(group.id);
      if (!el) return;
      el.open = group.scope === scope && targetMatchesGroup(targetId, group);
    });
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href.length <= 1) return;
    const id = href.slice(1);
    if (
      a.closest('#conteudo .side-nav') ||
      a.closest('#conteudo .side-nav-sub-list')
    ) {
      collapseDetailsForSideNav(id, 'conteudo');
    }
    if (
      a.closest('#apendice .side-nav') ||
      a.closest('#apendice .side-nav-sub-list')
    ) {
      collapseDetailsForSideNav(id, 'apendice');
    }
    if (a.classList.contains('exercise-guide-link')) {
      collapseDetailsForSideNav(id, 'conteudo');
    }
    const target = openDetailsIfTarget(id);
    if (target) {
      if (target.tagName === 'DETAILS' && target.classList.contains('exercise')) {
        target.open = true;
      }
      e.preventDefault();
      const afterLayout = () => {
        scrollToEl(target);
        history.replaceState(null, '', `#${id}`);
      };
      // Dois frames após abrir <details> para o layout estabilizar antes de rolar
      requestAnimationFrame(() => requestAnimationFrame(afterLayout));
    }
  });

  // Também verificar anchor no load inicial (ex: abrir link com #bloco-3)
  if (location.hash.length > 1) {
    const hashId = location.hash.slice(1);
    requestAnimationFrame(() => {
      const target = openDetailsIfTarget(hashId);
      const hashScope = document.getElementById(hashId)?.closest('#apendice')
        ? 'apendice'
        : 'conteudo';
      collapseDetailsForSideNav(hashId, hashScope);
      if (target) {
        requestAnimationFrame(() => scrollToEl(target));
      }
    });
  }

  // Agenda items: pular para o bloco correspondente
  document.querySelectorAll('.agenda-item[data-target]').forEach(item => {
    item.addEventListener('click', () => {
      const target = openDetailsIfTarget(item.dataset.target);
      if (target) {
        const scope = target.closest('#apendice') || target.id === 'apendice'
          ? 'apendice'
          : 'conteudo';
        collapseDetailsForSideNav(target.id, scope);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          scrollToEl(target);
          history.replaceState(null, '', `#${target.id}`);
        }));
      }
    });
  });

  // Sidebar: highlight do bloco visível
  const sideLinks = document.querySelectorAll('.side-list a, .side-nav-sub-list a');
  // Não observar blocos-pai quando há subseções — senão o spy “ganha” do subtópico
  const blocks = Array.from(
    document.querySelectorAll(
      '.block, .sub-block, .intro-section, .bloco-subsection, .appendix-section, .apendice-block'
    )
  ).filter(
    (b) =>
      b.id !== 'bloco-intro' &&
      b.id !== 'bloco-1' &&
      b.id !== 'bloco-3' &&
      b.id !== 'bloco-4'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;

      const id = visible[0].target.id;
      sideLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
      const scope = visible[0].target.closest('#apendice') ? 'apendice' : 'conteudo';
      DAY_GROUPS.forEach(group => {
        const el = document.getElementById(group.id);
        if (!el) return;
        el.open = group.scope === scope && targetMatchesGroup(id, group);
      });
      NAV_GROUPS.forEach(group => {
        const el = document.getElementById(group.id);
        if (!el) return;
        el.open = group.scope === scope && targetMatchesGroup(id, group);
      });
    },
    { rootMargin: `-${getScrollOffset()}px 0px -55% 0px`, threshold: 0 }
  );

  blocks.forEach((b) => b.id && observer.observe(b));

  // Scroll to top
  const topBtn = document.getElementById('scroll-top');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('visible', window.scrollY > 600);
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Abrir todos os exercises com keyboard shortcut "e"
  let allOpen = false;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'e' && !e.ctrlKey && !e.metaKey && !e.altKey &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA') {
      allOpen = !allOpen;
      document.querySelectorAll('.exercise').forEach(ex => {
        if (allOpen) ex.setAttribute('open', '');
        else ex.removeAttribute('open');
      });
    }
  });

  // =========================================================
  // Tracking de progresso — checkbox em cada passo + barra por exercício
  // =========================================================

  const STATE_KEY = 'curso-cursor-pms-ed3/progress/v1';
  const state = loadState();

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STATE_KEY) || '{}'); }
    catch { return {}; }
  }
  function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  }

  function createProgressMeter(total, className = '') {
    const progress = document.createElement('span');
    progress.className = className;
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', String(total));
    progress.setAttribute('aria-valuenow', '0');
    progress.setAttribute('aria-label', 'Progresso');
    progress.innerHTML = `
      <span class="progress-bar"><span class="progress-fill"></span></span>
      <span class="progress-text">0/${total}</span>
    `;
    return progress;
  }

  function updateProgressMeter(host, done, total, label = 'Progresso') {
    if (!host || !total) return;
    const pct = Math.round((done / total) * 100);
    const fill = host.querySelector('.progress-fill');
    const text = host.querySelector('.progress-text');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `${done}/${total}`;
    host.setAttribute('role', 'progressbar');
    host.setAttribute('aria-label', label);
    host.setAttribute('aria-valuemin', '0');
    host.setAttribute('aria-valuemax', String(total));
    host.setAttribute('aria-valuenow', String(done));
    host.setAttribute('aria-valuetext', `${done} de ${total} passos`);
  }

  function attachStepCheckboxes(container, idPrefix, onStepChange) {
    const steps = container.querySelectorAll('.step-block');
    steps.forEach((step, i) => {
      const head = step.querySelector('.step-block-head');
      if (!head || head.querySelector('.step-check')) return;
      const stepId = `${idPrefix}/step-${i + 1}`;
      const label = document.createElement('label');
      label.className = 'step-check';
      label.setAttribute('title', 'Marcar passo como concluído');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.dataset.stepId = stepId;
      input.checked = !!state[stepId];
      const tick = document.createElement('span');
      tick.className = 'step-check-tick';
      tick.setAttribute('aria-hidden', 'true');
      label.appendChild(input);
      label.appendChild(tick);
      head.insertBefore(label, head.firstChild);

      label.addEventListener('click', e => e.stopPropagation());

      input.addEventListener('change', () => {
        if (input.checked) state[stepId] = true;
        else delete state[stepId];
        saveState();
        step.classList.toggle('step-done', input.checked);
        if (onStepChange) onStepChange();
        updateDayProgress();
      });

      step.classList.toggle('step-done', input.checked);
    });
    return steps;
  }

  const exercises = document.querySelectorAll('.exercise, .exercise-flat');
  exercises.forEach(ex => {
    const numEl = ex.querySelector('.ex-num');
    if (!numEl) return;
    const exNum = numEl.textContent.trim();

    const steps = attachStepCheckboxes(ex, `ex-${exNum}`, () => updateExerciseProgress(ex));

    if (!steps.length) return;

    const progress = createProgressMeter(steps.length, 'ex-progress');

    const summary = ex.querySelector('summary');
    if (summary) {
      const time = summary.querySelector('.ex-time');
      summary.insertBefore(progress, time);
    } else {
      const meta = ex.querySelector('.exercise-flat__meta');
      if (meta) meta.appendChild(progress);
    }
    updateExerciseProgress(ex);
  });

  buildExerciseGuide();

  document.querySelectorAll('.setup-track').forEach(track => {
    const trackId = track.dataset.trackId || 'setup';
    const progressHost =
      track.parentElement?.querySelector('.setup-track-progress') || null;
    const steps = attachStepCheckboxes(track, trackId, () =>
      updateSetupTrackProgress(track, progressHost)
    );
    if (steps.length) updateSetupTrackProgress(track, progressHost);
  });

  function updateSetupTrackProgress(track, progressHost) {
    const checks = track.querySelectorAll('.step-check input[type="checkbox"]');
    if (!checks.length) return;
    const done = Array.from(checks).filter(c => c.checked).length;
    const total = checks.length;
    if (progressHost) {
      updateProgressMeter(progressHost, done, total, 'Progresso do roteiro workspace');
    }
    track.classList.toggle('setup-track--complete', done === total && total > 0);
  }

  function updateExerciseProgress(ex) {
    const checks = ex.querySelectorAll('.step-check input[type="checkbox"]');
    if (!checks.length) return;
    const done = Array.from(checks).filter(c => c.checked).length;
    const total = checks.length;
    updateProgressMeter(
      ex.querySelector('.ex-progress'),
      done,
      total,
      `Progresso do exercício ${getExerciseLabel(ex)}`
    );
    ex.classList.toggle('ex-complete', done === total && total > 0);
    updateDayProgress();
    updateExerciseGuide();
  }

  function getExerciseLabel(ex) {
    const title = ex.querySelector('.ex-title');
    if (title) return title.textContent.replace(/\s+/g, ' ').trim();
    const h3 = ex.closest('.bloco-subsection')?.querySelector('h3');
    if (h3) return h3.textContent.replace(/^\d+\.\s*/, '').trim();
    return ex.id;
  }

  function getExerciseStepCounts(ex) {
    const checks = ex.querySelectorAll('.step-check input[type="checkbox"]');
    if (!checks.length) return { done: 0, total: 0 };
    const done = Array.from(checks).filter(c => c.checked).length;
    return { done, total: checks.length };
  }

  function exerciseGuideStatusClass(done, total) {
    if (!total || done === 0) return 'pending';
    if (done === total) return 'done';
    return 'partial';
  }

  function exerciseGuideStatusSymbol(status) {
    if (status === 'done') return '✓';
    if (status === 'partial') return '◐';
    return '○';
  }

  function buildExerciseGuide() {
    const list = document.getElementById('exercise-guide-list');
    if (!list) return;

    const items = Array.from(
      document.querySelectorAll('.exercise, .exercise-flat')
    )
      .filter((ex) => ex.id && ex.querySelector('.ex-num'))
      .sort((a, b) => {
        const na = parseInt(a.querySelector('.ex-num').textContent, 10);
        const nb = parseInt(b.querySelector('.ex-num').textContent, 10);
        return na - nb;
      });

    list.innerHTML = '';
    items.forEach((ex) => {
      const num = ex.querySelector('.ex-num').textContent.trim();
      const label = getExerciseLabel(ex);
      const li = document.createElement('li');
      li.className = 'exercise-guide-item';
      li.dataset.exerciseId = ex.id;
      li.innerHTML = `
        <span class="exercise-guide-status exercise-guide-status--pending" aria-hidden="true">○</span>
        <span class="exercise-guide-num">${num}</span>
        <a class="exercise-guide-link" href="#${ex.id}">${label}</a>
        <span class="exercise-guide-progress">0/0</span>
      `;
      list.appendChild(li);
    });

    updateExerciseGuide();
  }

  function updateExerciseGuide() {
    const list = document.getElementById('exercise-guide-list');
    if (!list) return;

    list.querySelectorAll('.exercise-guide-item').forEach((li) => {
      const ex = document.getElementById(li.dataset.exerciseId);
      if (!ex) return;

      const { done, total } = getExerciseStepCounts(ex);
      const status = exerciseGuideStatusClass(done, total);
      const statusEl = li.querySelector('.exercise-guide-status');
      const progressEl = li.querySelector('.exercise-guide-progress');

      if (statusEl) {
        statusEl.className = `exercise-guide-status exercise-guide-status--${status}`;
        statusEl.textContent = exerciseGuideStatusSymbol(status);
        statusEl.setAttribute(
          'aria-label',
          status === 'done'
            ? 'Concluído'
            : status === 'partial'
              ? 'Em andamento'
              : 'Não iniciado'
        );
        statusEl.removeAttribute('aria-hidden');
      }

      if (progressEl) {
        progressEl.textContent = total ? `${done}/${total}` : '—';
      }

      li.classList.toggle('exercise-guide-item--complete', status === 'done');
    });
  }

  // Progresso global do dia — exibido no topbar
  function updateDayProgress() {
    const allChecks = document.querySelectorAll(
      '.exercise .step-check input[type="checkbox"], .exercise-flat .step-check input[type="checkbox"], .setup-track .step-check input[type="checkbox"]'
    );
    if (!allChecks.length) return;
    const done = Array.from(allChecks).filter(c => c.checked).length;
    const total = allChecks.length;
    const pct = Math.round((done / total) * 100);
    const dayBar = document.getElementById('day-progress');
    if (dayBar) {
      dayBar.querySelector('.day-fill').style.width = pct + '%';
      dayBar.querySelector('.day-text').textContent = `${done}/${total} passos · ${pct}%`;
      dayBar.setAttribute('role', 'progressbar');
      dayBar.setAttribute('aria-label', 'Progresso do dia');
      dayBar.setAttribute('aria-valuemin', '0');
      dayBar.setAttribute('aria-valuemax', String(total));
      dayBar.setAttribute('aria-valuenow', String(done));
      dayBar.setAttribute('aria-valuetext', `${done} de ${total} passos, ${pct}%`);
    }
  }

  // Injetar barra global no topbar (se tiver slot)
  const topbar = document.querySelector('.topbar-inner');
  if (topbar) {
    const dayEl = document.createElement('div');
    dayEl.id = 'day-progress';
    dayEl.setAttribute('title', 'Progresso do dia · clique duplo pra resetar');
    dayEl.innerHTML = `
      <span class="day-label">P R O G R E S S O</span>
      <span class="day-bar"><span class="day-fill"></span></span>
      <span class="day-text">0/0 passos · 0%</span>
    `;
    // Inserir antes da nav
    const nav = topbar.querySelector('.top-nav');
    if (nav) topbar.insertBefore(dayEl, nav);
    else topbar.appendChild(dayEl);

    // Duplo clique pra resetar
    dayEl.addEventListener('dblclick', () => {
      if (confirm('Resetar todo o progresso dos exercícios?')) {
        for (const k in state) delete state[k];
        saveState();
        document.querySelectorAll('.step-check input[type="checkbox"]').forEach(c => c.checked = false);
        document.querySelectorAll('.step-block').forEach(s => s.classList.remove('step-done'));
        document.querySelectorAll('.exercise, .exercise-flat').forEach(ex => {
          ex.classList.remove('ex-complete');
          updateExerciseProgress(ex);
        });
        updateExerciseGuide();
      }
    });
  }

  updateDayProgress();
}


// =========================================================
// Analytics ao vivo — exemplo do Bloco 7 / Ex 15
//
// Cada clique relevante na página dispara um console.log() seguindo
// a convenção do Guia de Eventos da ArenaCash (snake_case, padrão
// tela_acao, propriedades em objeto). Abra o DevTools (Cmd+Option+I
// no Mac, F12 no Windows), vá na aba Console e clique pelo site —
// você vai ver os eventos disparando ao vivo, igualzinho ao que os
// alunos vão ver no protótipo deles.
// =========================================================
function initGuideAnalytics() {
  const PRODUTO = 'curso_cursor_pms';

  const norm = s => (s || '')
    .toString()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 60);

  const findScreen = el => {
    const article = el.closest && el.closest('article.block');
    if (article && article.id) return norm(article.id);
    const section = el.closest && el.closest('details.section[id], section[id]');
    if (section && section.id) return norm(section.id);
    if (el.closest && el.closest('.hero')) return 'hero';
    if (el.closest && el.closest('.topbar')) return 'topbar';
    return 'pagina';
  };

  const emit = (name, props) => {
    console.log(name, { produto: PRODUTO, ...props });
  };

  // Page view ao carregar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => emit('site_pageview', { url: location.pathname }));
  } else {
    emit('site_pageview', { url: location.pathname });
  }

  // Cliques
  document.addEventListener('click', e => {
    const el = e.target.closest(
      'a, button, summary, .kit-item, [data-target]'
    );
    if (!el) return;

    const tela = findScreen(el);
    const txt = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);

    // Top nav
    if (el.closest('.top-nav')) {
      return emit(`topnav_${norm(txt)}_click`, { tela, destino: el.getAttribute('href') });
    }
    // Hero CTA
    if (el.closest('.hero-cta')) {
      return emit(`hero_cta_${norm(txt)}_click`, { tela: 'hero', destino: el.getAttribute('href') });
    }
    // Brand logo no topbar
    if (el.classList && (el.classList.contains('brand') || el.closest('.brand'))) {
      return emit('topbar_brand_click', { tela });
    }
    // Botão "Começar aula" e outros .btn--primary no topbar
    if (el.tagName === 'BUTTON' && el.classList.contains('btn--primary') && el.closest('.topbar')) {
      return emit('topbar_cta_comecar_aula_click', { tela: 'topbar', label: txt });
    }
    // Kit download
    if (el.classList && el.classList.contains('kit-item')) {
      const arquivo = (el.getAttribute('href') || '').split('/').pop();
      return emit('kit_download_click', { tela: 'kit', arquivo });
    }
    // Botões em geral (.btn) — ex: "Baixar tudo em zip", "Começar pelos pré-requisitos"
    if (el.classList && (el.classList.contains('btn') || el.closest('.btn'))) {
      const acao = norm(txt) || 'click';
      return emit(`${tela}_botao_${acao}_click`, { tela, label: txt });
    }
    // Toggle de details (summary)
    if (el.tagName === 'SUMMARY') {
      const details = el.closest('details');
      if (!details) return;
      const acao = details.open ? 'fechar' : 'abrir';
      // Exercício
      if (details.classList.contains('exercise')) {
        const num = (details.querySelector('.ex-num') || {}).textContent || 'x';
        const titulo = (details.querySelector('.ex-title') || {}).textContent || '';
        return emit(`exercicio_${norm(num)}_${acao}`, {
          tela, exercicio: norm(num), titulo
        });
      }
      // Setup-step (pré-requisitos)
      if (details.classList.contains('setup-step')) {
        const passo = (details.querySelector('.step-num') || {}).textContent || 'x';
        return emit(`prereq_passo_${norm(passo)}_${acao}`, {
          tela: 'pre_requisitos', passo: norm(passo)
        });
      }
      // Section colapsável (bem-vindo, kit, etc.)
      if (details.classList.contains('section-collapse')) {
        return emit(`secao_${norm(details.id || 'x')}_${acao}`, {
          tela, secao: details.id || ''
        });
      }
      return emit(`${tela}_toggle_${acao}`, { tela, label: txt });
    }
    // Agenda items (data-target)
    if (el.hasAttribute && el.hasAttribute('data-target')) {
      return emit('agenda_item_click', { tela: 'agenda', destino: el.getAttribute('data-target') });
    }
    // Links genéricos
    if (el.tagName === 'A') {
      const href = el.getAttribute('href') || '';
      const externo = el.hostname && el.hostname !== location.hostname;
      return emit(`${tela}_link_${norm(txt) || 'click'}_click`, {
        tela, destino: href, externo
      });
    }
    // Fallback genérico
    emit(`${tela}_clique_${norm(txt) || el.tagName.toLowerCase()}`, { tela, label: txt });
  }, { capture: true });

  // Tracking checkboxes (marcar exercício/passo como concluído)
  document.addEventListener('change', e => {
    const t = e.target;
    if (t && t.type === 'checkbox') {
      const ex = t.closest('details.exercise, .step-block');
      const num = ex && ((ex.querySelector('.ex-num') || ex.querySelector('.step-block-num')) || {}).textContent;
      emit('tracking_check_change', {
        tela: findScreen(t),
        elemento: num ? norm(num) : 'desconhecido',
        marcado: t.checked
      });
    }
  }, { capture: true });
}

function initCopyReferences() {
  document.querySelectorAll('.js-copy-reference').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-copy-target');
      if (!id) return;
      const el = document.getElementById(id);
      if (!el || (el.tagName !== 'TEXTAREA' && el.tagName !== 'PRE')) return;
      const text = el.tagName === 'TEXTAREA' ? el.value : el.textContent;
      const original = btn.textContent;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copiado!';
      } catch {
        if (el.tagName === 'TEXTAREA') {
          el.focus();
          el.select();
        }
        btn.textContent = 'Selecione na caixa';
      }
      window.setTimeout(() => {
        btn.textContent = original;
      }, 2000);
    });
  });
}

function getPromptBlockText(pre) {
  const code = pre.querySelector('code');
  return (code ? code.textContent : pre.textContent).trim();
}

function initCopyPrompts() {
  document.querySelectorAll('.prompt-stack pre.code-block--prompt').forEach((pre) => {
    if (pre.nextElementSibling?.classList.contains('prompt-copy-actions')) return;

    const actions = document.createElement('div');
    actions.className = 'prompt-copy-actions';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'prompt-copy-btn';
    btn.setAttribute('aria-label', 'Copiar prompt');
    btn.innerHTML =
      '<span class="prompt-copy-btn__icon" aria-hidden="true">📋</span>' +
      '<span class="prompt-copy-btn__label">Copiar</span>';

    const label = btn.querySelector('.prompt-copy-btn__label');
    const defaultLabel = label.textContent;

    btn.addEventListener('click', async () => {
      const text = getPromptBlockText(pre);
      btn.classList.remove('prompt-copy-btn--copied', 'prompt-copy-btn--error');
      void btn.offsetWidth;
      btn.classList.add('prompt-copy-btn--animating');

      try {
        await navigator.clipboard.writeText(text);
        btn.classList.add('prompt-copy-btn--copied');
        label.textContent = 'Copiado!';
      } catch {
        btn.classList.add('prompt-copy-btn--error');
        label.textContent = 'Não copiou';
      }

      window.setTimeout(() => {
        btn.classList.remove(
          'prompt-copy-btn--animating',
          'prompt-copy-btn--copied',
          'prompt-copy-btn--error'
        );
        label.textContent = defaultLabel;
      }, 2000);
    });

    actions.appendChild(btn);
    pre.insertAdjacentElement('afterend', actions);
  });
}

function initAutoplayVideos() {
  const videos = document.querySelectorAll('.media-gif-slot video, .media-gif-slot__video');
  videos.forEach((video) => {
    video.controls = false;
    video.muted = true;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    };

    tryPlay();
    video.addEventListener('loadeddata', tryPlay, { once: true });

    let parent = video.parentElement;
    while (parent) {
      if (parent.tagName === 'DETAILS') {
        parent.addEventListener('toggle', () => {
          if (parent.open) tryPlay();
        });
      }
      parent = parent.parentElement;
    }
  });
}
