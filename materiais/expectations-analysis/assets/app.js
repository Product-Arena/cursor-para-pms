(function () {
  'use strict';

  const LABELS = {
    ai_usage_level: {
      Basic: 'Básico',
      Intermediary: 'Intermediário',
      Routine: 'Rotineiro',
      Advanced: 'Avançado',
      Other: 'Outro'
    },
    api_knowledge: {
      dayToDay: 'Já no dia a dia',
      knowButNotConcrete: 'Sei o que é, mas não tangibilizo',
      pandorasBox: '"Caixa de pandora"',
      other: 'Outro'
    }
  };

  let processed = null;
  let textThemes = null;
  let chartInstances = {};

  async function loadJSON(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(path + ' ' + res.status);
    return res.json();
  }

  async function loadData() {
    const base = new URL('data/', document.baseURI || window.location.href).href;
    const [p, t] = await Promise.all([
      loadJSON(base + 'processed.json'),
      loadJSON(base + 'text-themes.json')
    ]);
    processed = p;
    textThemes = t;
  }

  function filteredRows() {
    if (!processed?.rows) return [];
    const ai = document.getElementById('filter-ai')?.value || '';
    const api = document.getElementById('filter-api')?.value || '';
    const tshirt = document.getElementById('filter-tshirt')?.value || '';
    return processed.rows.filter(function (r) {
      if (ai && r.ai_usage_level !== ai) return false;
      if (api && r.api_knowledge !== api) return false;
      if (tshirt && r.tshirt_size !== tshirt) return false;
      return true;
    });
  }

  function distributionFromRows(rows, key) {
    const dist = {};
    rows.forEach(function (r) {
      const v = r[key];
      dist[v] = (dist[v] || 0) + 1;
    });
    return dist;
  }

  function topToolsFromRows(rows, limit) {
    const count = {};
    rows.forEach(function (r) {
      (r.tools || []).forEach(function (t) {
        count[t] = (count[t] || 0) + 1;
      });
    });
    return Object.entries(count)
      .sort(function (a, b) { return b[1] - a[1]; })
      .slice(0, limit || 10)
      .map(function (e) { return { name: e[0], count: e[1] }; });
  }

  function barOption(title, dist, labelMap) {
    const names = Object.keys(dist);
    const values = names.map(function (k) { return dist[k]; });
    const labels = labelMap ? names.map(function (k) { return labelMap[k] || k; }) : names;
    return {
      tooltip: { trigger: 'axis' },
      grid: { left: '12%', right: '8%', top: '8%', bottom: '12%' },
      xAxis: { type: 'category', data: labels, axisLabel: { rotate: names.length > 5 ? 25 : 0 } },
      yAxis: { type: 'value', minInterval: 1 },
      series: [{ type: 'bar', data: values, itemStyle: { color: '#FF5757' } }]
    };
  }

  function renderCharts() {
    const rows = filteredRows();
    const distAI = distributionFromRows(rows, 'ai_usage_level');
    const distAPI = distributionFromRows(rows, 'api_knowledge');
    const distTshirt = distributionFromRows(rows, 'tshirt_size');
    const tools = topToolsFromRows(rows, 10);

    function initOrUpdate(id, option) {
      const el = document.getElementById(id);
      if (!el) return;
      if (!chartInstances[id]) {
        chartInstances[id] = echarts.init(el);
        window.addEventListener('resize', function () { chartInstances[id]?.resize(); });
      }
      chartInstances[id].setOption(option, { notMerge: true });
    }

    initOrUpdate('chart-ai-usage', barOption('', distAI, LABELS.ai_usage_level));
    initOrUpdate('chart-api', barOption('', distAPI, LABELS.api_knowledge));
    initOrUpdate('chart-tshirt', barOption('', distTshirt, null));
    initOrUpdate('chart-tools', barOption('', Object.fromEntries(tools.map(function (t) { return [t.name, t.count]; })), null));
  }

  function fillFilters() {
    if (!processed?.rows) return;
    const aiOpts = [...new Set(processed.rows.map(function (r) { return r.ai_usage_level; }))].sort();
    const apiOpts = [...new Set(processed.rows.map(function (r) { return r.api_knowledge; }))].sort();
    const tshirtOpts = [...new Set(processed.rows.map(function (r) { return r.tshirt_size; }))].sort();

    function addOptions(selId, opts, labelMap) {
      const sel = document.getElementById(selId);
      if (!sel) return;
      sel.innerHTML = '<option value="">Todos</option>';
      opts.forEach(function (v) {
        const o = document.createElement('option');
        o.value = v;
        o.textContent = labelMap ? (labelMap[v] || v) : v;
        sel.appendChild(o);
      });
    }
    addOptions('filter-ai', aiOpts, LABELS.ai_usage_level);
    addOptions('filter-api', apiOpts, LABELS.api_knowledge);
    addOptions('filter-tshirt', tshirtOpts, null);
  }

  function renderThemes() {
    function themeCards(containerId, themes) {
    const container = document.getElementById(containerId);
    if (!container || !themes?.length) return;
    container.innerHTML = themes.map(function (t) {
      const quotes = (t.quotes || []).slice(0, 4).map(function (q) { return '<li>' + escapeHtml(q) + '</li>'; }).join('');
      return '<div class="theme-card"><h3>' + escapeHtml(t.label_pt) + '</h3>' +
        '<p class="meta">' + (t.count != null ? t.count + ' resposta(s)' : '') + '</p>' +
        '<ul class="quotes">' + quotes + '</ul></div>';
    }).join('');
    }
    themeCards('themes-expectations', textThemes?.expectations || []);
    themeCards('themes-flow', textThemes?.flow_to_improve || []);
  }

  function escapeHtml(s) {
    if (!s) return '';
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderAdjustments() {
    const list = document.getElementById('adjustments-list');
    if (!list) return;
    const items = [
      'Reforçar rampa de APIs/WebHooks para PMs: muitos estão em "sei o que é, mas não tangibilizo" ou "caixa de pandora". Incluir 20–30 min com 1–2 exemplos concretos.',
      'Trilha de prototipação: expectativa forte em autonomia e protótipos (fluxos de onboarding, UI sobre API). Incluir mini-projeto guiado.',
      'Automação e relatórios: vários citam dashboards, CSAT, reports executivos. Incluir demo dados → dashboard e template reutilizável.',
      'Diferenciação por nível: maioria Básico e pelo menos um Avançado. Sugerir trilha core + desafios opcionais (MCPs, automações) para não perder nenhum grupo.'
    ];
    list.innerHTML = items.map(function (i) { return '<li>' + escapeHtml(i) + '</li>'; }).join('');
  }

  function showError(msg) {
    const main = document.querySelector('main');
    if (main) {
      main.innerHTML = '<p class="error">' + escapeHtml(msg) +
        '. Se estiver abrindo por file://, use um servidor local (ex.: python3 -m http.server 8080) e acesse http://localhost:8080.</p>';
    }
  }

  function init() {
    ['filter-ai', 'filter-api', 'filter-tshirt'].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) el.addEventListener('change', renderCharts);
    });
  }

  loadData()
    .then(function () {
      fillFilters();
      renderCharts();
      renderThemes();
      renderAdjustments();
      init();
    })
    .catch(function (err) {
      showError('Não foi possível carregar os dados: ' + (err.message || err));
    });
})();
