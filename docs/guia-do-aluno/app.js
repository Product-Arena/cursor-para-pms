(() => {
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

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length <= 1) return;
      const id = href.slice(1);
      const target = openDetailsIfTarget(id);
      if (target) {
        e.preventDefault();
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    });
  });

  // Também verificar anchor no load inicial (ex: abrir link com #bloco-3)
  if (location.hash.length > 1) {
    setTimeout(() => openDetailsIfTarget(location.hash.slice(1)), 0);
  }

  // Agenda items: pular para o bloco correspondente
  document.querySelectorAll('.agenda-item[data-target]').forEach(item => {
    item.addEventListener('click', () => {
      const target = openDetailsIfTarget(item.dataset.target);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    });
  });

  // Sidebar: highlight do bloco visível
  const sideLinks = document.querySelectorAll('.side-list a');
  const blocks = Array.from(document.querySelectorAll('.block, .sub-block'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        sideLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  blocks.forEach(b => b.id && observer.observe(b));

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

  const exercises = document.querySelectorAll('.exercise');
  exercises.forEach(ex => {
    const numEl = ex.querySelector('.ex-num');
    if (!numEl) return;
    const exNum = numEl.textContent.trim();

    // Injetar checkbox em cada step-block
    const steps = ex.querySelectorAll('.step-block');
    steps.forEach((step, i) => {
      const head = step.querySelector('.step-block-head');
      if (!head) return;
      const stepId = `ex-${exNum}/step-${i + 1}`;
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
      // Inserir como primeiro filho do head
      head.insertBefore(label, head.firstChild);

      // Stop propagation pra não abrir/fechar o accordion ao clicar
      label.addEventListener('click', e => e.stopPropagation());

      input.addEventListener('change', () => {
        if (input.checked) state[stepId] = true;
        else delete state[stepId];
        saveState();
        step.classList.toggle('step-done', input.checked);
        updateExerciseProgress(ex);
      });

      // Estado inicial visual
      step.classList.toggle('step-done', input.checked);
    });

    // Se o exercício tem steps, injetar barra de progresso na summary
    if (steps.length > 0) {
      const summary = ex.querySelector('summary');
      const time = summary.querySelector('.ex-time');
      const progress = document.createElement('span');
      progress.className = 'ex-progress';
      progress.innerHTML = `
        <span class="progress-bar"><span class="progress-fill"></span></span>
        <span class="progress-text">0/${steps.length}</span>
      `;
      // Inserir antes do ex-time
      summary.insertBefore(progress, time);
      updateExerciseProgress(ex);
    }
  });

  function updateExerciseProgress(ex) {
    const checks = ex.querySelectorAll('.step-check input[type="checkbox"]');
    if (!checks.length) return;
    const done = Array.from(checks).filter(c => c.checked).length;
    const total = checks.length;
    const pct = Math.round((done / total) * 100);
    const fill = ex.querySelector('.progress-fill');
    const text = ex.querySelector('.progress-text');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `${done}/${total}`;
    ex.classList.toggle('ex-complete', done === total && total > 0);
    updateDayProgress();
  }

  // Progresso global do dia — exibido no topbar
  function updateDayProgress() {
    const allChecks = document.querySelectorAll('.exercise .step-check input[type="checkbox"]');
    if (!allChecks.length) return;
    const done = Array.from(allChecks).filter(c => c.checked).length;
    const total = allChecks.length;
    const pct = Math.round((done / total) * 100);
    const dayBar = document.getElementById('day-progress');
    if (dayBar) {
      dayBar.querySelector('.day-fill').style.width = pct + '%';
      dayBar.querySelector('.day-text').textContent = `${done}/${total} passos · ${pct}%`;
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
        document.querySelectorAll('.exercise').forEach(ex => {
          ex.classList.remove('ex-complete');
          updateExerciseProgress(ex);
        });
      }
    });
  }

  updateDayProgress();
})();


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
(() => {
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
})();

(() => {
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
})();
