(() => {
  const storageKey = "trevvy-theme";
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  const getPreferred = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "light" || saved === "dark") return saved;
    } catch {}

    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    try {
      localStorage.setItem(storageKey, theme);
    } catch {}

    if (!toggle) return;
    toggle.textContent = theme === "light" ? "Dark" : "Light";
    toggle.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark theme" : "Switch to light theme",
    );
  };

  applyTheme(getPreferred());

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.dataset.theme === "light" ? "light" : "dark";
      applyTheme(current === "light" ? "dark" : "light");
    });
  }
})();

