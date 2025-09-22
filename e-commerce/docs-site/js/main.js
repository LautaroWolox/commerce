document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  const html = document.documentElement;
  const stored = localStorage.getItem("theme") || "dark";
  setTheme(stored);

  btn?.addEventListener("click", () => {
    const current = html.dataset.theme === "dark" ? "light" : "dark";
    setTheme(current);
    localStorage.setItem("theme", current);
  });

  function setTheme(mode) {
    html.dataset.theme = mode;
    btn.textContent = mode === "dark" ? "🌙" : "☀️";
    if (window.mermaid) {
      mermaid.initialize({ startOnLoad: true, theme: mode === "dark" ? "dark" : "default" });
      mermaid.init(undefined, document.querySelectorAll(".mermaid"));
    }
  }

  // Ctrl/Cmd+S: enfocar contenido
  document.addEventListener("keydown", (e) => {
    if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
      document.getElementById("content")?.focus();
      e.preventDefault();
    }
  });
});

// Auto-insert 'Documentación' link in .main-nav if missing
(function(){
  try{
    var nav = document.querySelector('.main-nav');
    if(!nav) return;
    if(nav.querySelector('a[href$="DOCUMENTACION.html"]')) return;
    var a = document.createElement('a');
    a.href = (location.pathname.includes('/docs-site/') ? '../DOCUMENTACION.html' : './DOCUMENTACION.html');
    a.textContent = 'Documentación';
    nav.appendChild(a);
  }catch(e){}
})();

