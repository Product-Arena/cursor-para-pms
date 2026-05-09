(function () {
  const STORAGE_KEY = "cursor-pms-guia-progress-v1";

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function apply() {
    const data = load();
    document.querySelectorAll('[data-progress-id]').forEach(function (el) {
      const id = el.getAttribute("data-progress-id");
      if (!id) return;
      if (el.type === "checkbox") {
        el.checked = Boolean(data[id]);
        el.addEventListener("change", function () {
          const next = load();
          next[id] = el.checked;
          save(next);
        });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();
