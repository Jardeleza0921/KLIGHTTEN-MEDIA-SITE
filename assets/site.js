(() => {
  "use strict";

  const cfg = window.KLIGHTTEN_SITE || {};
  const root = document.documentElement;
  const body = document.body;
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-nav-links]");
  const themeButton = document.querySelector("[data-theme-button]");
  const themeMenu = document.querySelector("[data-theme-menu]");
  const themeLabel = document.querySelector("[data-theme-label]");
  const themeOptions = [...document.querySelectorAll("[data-theme-option]")];

  const themes = {
    "neon-arcade": {label:"Neon Arcade", color:"#00e7ff"},
    "classic-green": {label:"Classic Green", color:"#7dff6b"},
    "black-white": {label:"Black + White", color:"#f5f5f5"},
    "redhat": {label:"Redhat", color:"#ff4d59"}
  };

  const icons = {
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    palette:'<path d="M12 3a9 9 0 1 0 0 18h1.5a2 2 0 0 0 0-4H12a1.5 1.5 0 0 1 0-3h3a6 6 0 0 0 0-12z"/><circle cx="7.5" cy="10" r=".8" fill="currentColor" stroke="none"/><circle cx="9.5" cy="6.8" r=".8" fill="currentColor" stroke="none"/><circle cx="14" cy="6.5" r=".8" fill="currentColor" stroke="none"/><circle cx="17" cy="9" r=".8" fill="currentColor" stroke="none"/>',
    github:'<path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.6-.2.6-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .4.2.6.7.5A9.2 9.2 0 0 0 12 2.8z"/>',
    download:'<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 19h16"/>',
    shield:'<path d="M12 3 5 6v5c0 4.7 2.9 8 7 10 4.1-2 7-5.3 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
    play:'<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z" fill="currentColor" stroke="none"/>',
    music:'<path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
    film:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4"/>',
    terminal:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M12 15h5"/>',
    convert:'<path d="M7 7h11l-3-3M17 17H6l3 3"/><path d="M18 7l-3 3M6 17l3-3"/>',
    keyboard:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h.01M10 10h.01M13 10h.01M16 10h.01M7 13h.01M10 13h.01M13 13h.01M16 13h.01M8 16h8"/>',
    layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v7H4V6h7"/>',
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
    x:'<path d="m6 6 12 12M18 6 6 18"/>',
    chevron:'<path d="m9 6 6 6-6 6"/>',
    copy:'<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'
  };

  function icon(name) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.chevron}</svg>`;
  }

  document.querySelectorAll("[data-icon]").forEach(el => {
    el.innerHTML = icon(el.dataset.icon);
  });

  function setTheme(name, persist=true) {
    if (!themes[name]) name = "neon-arcade";
    root.dataset.theme = name;
    if (persist) {
      try { localStorage.setItem("klightten-site-theme", name); } catch (_) {}
    }
    if (themeLabel) themeLabel.textContent = themes[name].label;
    themeOptions.forEach(btn => {
      const on = btn.dataset.themeOption === name;
      btn.classList.toggle("selected", on);
      btn.setAttribute("aria-checked", on ? "true" : "false");
    });
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", themes[name].color);
  }

  let saved = "neon-arcade";
  try { saved = localStorage.getItem("klightten-site-theme") || saved; } catch (_) {}
  setTheme(saved, false);

  if (themeButton && themeMenu) {
    themeButton.addEventListener("click", e => {
      e.stopPropagation();
      const open = themeMenu.classList.toggle("open");
      themeButton.setAttribute("aria-expanded", open ? "true" : "false");
    });
    themeOptions.forEach(btn => btn.addEventListener("click", () => {
      setTheme(btn.dataset.themeOption);
      themeMenu.classList.remove("open");
      themeButton.setAttribute("aria-expanded", "false");
    }));
    document.addEventListener("click", e => {
      if (!themeMenu.contains(e.target) && e.target !== themeButton) {
        themeMenu.classList.remove("open");
        themeButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
      menuButton.innerHTML = icon(open ? "x" : "menu");
    });
  }

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (nav) nav.classList.remove("open");
      if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = icon("menu");
      }
      if (themeMenu) themeMenu.classList.remove("open");
      if (themeButton) themeButton.setAttribute("aria-expanded", "false");
    }
  });

  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-version]").forEach(el => {
    el.textContent = cfg.version || "2.7.0";
  });

  document.querySelectorAll("[data-support]").forEach(el => {
    if (cfg.supportEmail) {
      el.textContent = cfg.supportEmail;
      if (el.tagName === "A") el.href = `mailto:${cfg.supportEmail}`;
    } else {
      el.textContent = "Support contact will be configured before production verification.";
      if (el.tagName === "A") {
        el.removeAttribute("href");
        el.setAttribute("aria-disabled", "true");
      }
    }
  });

  document.querySelectorAll("[data-github]").forEach(el => {
    if (cfg.githubRepository) {
      el.href = cfg.githubRepository;
      el.classList.remove("disabled");
      el.removeAttribute("aria-disabled");
    } else {
      el.removeAttribute("href");
      el.classList.add("disabled");
      el.setAttribute("aria-disabled", "true");
      if (el.dataset.githubLabel) el.textContent = el.dataset.githubLabel;
    }
  });

  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const value = btn.dataset.copy || "";
      try {
        await navigator.clipboard.writeText(value);
        const old = btn.innerHTML;
        btn.innerHTML = `${icon("check")}<span>Copied</span>`;
        setTimeout(() => btn.innerHTML = old, 1500);
      } catch (_) {
        const input = document.createElement("textarea");
        input.value = value;
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
    });
  });

  const reveal = [...document.querySelectorAll("[data-reveal]")];
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08});
    reveal.forEach(el => observer.observe(el));
  } else {
    reveal.forEach(el => el.classList.add("revealed"));
  }
})();
