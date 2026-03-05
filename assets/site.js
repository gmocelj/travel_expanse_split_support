(() => {
  const storageKey = "trevvy-theme";
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const repoBase = "/travel_expanse_split_support";

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

  const applyBasePath = () => {
    const base =
      window.location && window.location.pathname.startsWith(repoBase + "/")
        ? repoBase
        : "";

    document.querySelectorAll("[data-base-href]").forEach((element) => {
      const href = element.getAttribute("data-base-href");
      if (!href) return;
      element.setAttribute("href", `${base}${href}`);
    });

    document.querySelectorAll("[data-base-src]").forEach((element) => {
      const src = element.getAttribute("data-base-src");
      if (!src) return;
      element.setAttribute("src", `${base}${src}`);
    });
  };

  applyBasePath();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.dataset.theme === "light" ? "light" : "dark";
      applyTheme(current === "light" ? "dark" : "light");
    });
  }
})();
