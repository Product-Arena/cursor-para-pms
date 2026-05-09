/**
 * Loads local Markdown files from ./content/ and renders with marked (CDN).
 * Requires HTTP(S) origin — open via docs/ server, not file://
 */
(function () {
  function run() {
    if (typeof marked === "undefined") {
      console.error("marked.js not loaded");
      return;
    }
    marked.setOptions({ gfm: true, breaks: true });

    var embeds = Array.prototype.slice.call(document.querySelectorAll(".md-embed"));
    Promise.all(
      embeds.map(function (el) {
        var src = el.getAttribute("data-src");
        if (!src) return Promise.resolve();
        el.setAttribute("aria-busy", "true");
        return fetch(src)
          .then(function (res) {
            if (!res.ok) throw new Error(String(res.status));
            return res.text();
          })
          .then(function (text) {
            el.innerHTML = marked.parse(text);
            el.classList.add("md-body");
          })
          .catch(function () {
            el.innerHTML =
              "<p class=\"md-error\">Não foi possível carregar <code>" +
              src +
              "</code>. Abra este guia via servidor HTTP a partir da pasta <code>docs</code> " +
              "(ex.: <code>python3 -m http.server 5050 --bind 127.0.0.1</code> e use " +
              "<code>/guia/</code>).</p>";
          })
          .finally(function () {
            el.removeAttribute("aria-busy");
          });
      })
    ).then(function () {
      document.body.classList.add("guia-ready");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
