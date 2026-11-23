/**
 * All client-side behaviour for the site. Dependency-free and progressive:
 * every section is fully readable without JavaScript.
 */

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function onReveal(selector: string, cb: (el: HTMLElement) => void, rootMargin = "0px 0px -12% 0px") {
  const els = document.querySelectorAll<HTMLElement>(selector);
  if (!("IntersectionObserver" in window)) {
    els.forEach(cb);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        cb(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    },
    { rootMargin, threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));
}

/* Reveal ------------------------------------------------------------------- */
function initReveal() {
  onReveal("[data-reveal], [data-reveal-group]", (el) => el.classList.add("is-in"));
}

/* Count-up numbers --------------------------------------------------------- */
function format(n: number, decimals: number) {
  return n.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function initCounters() {
  // Server HTML holds the final value (no-JS / reduced motion). Rewind it before counting up.
  if (!reduceMotion()) {
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      el.textContent = format(Number(el.dataset.from ?? 0), Number(el.dataset.decimals ?? 0));
    });
  }
  onReveal(
    "[data-count]",
    (el) => {
      const to = Number(el.dataset.to);
      const from = Number(el.dataset.from ?? 0);
      const decimals = Number(el.dataset.decimals ?? 0);
      if (reduceMotion()) {
        el.textContent = format(to, decimals);
        return;
      }
      const duration = 1600;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 4);
        el.textContent = format(from + (to - from) * eased, decimals);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    },
    "0px 0px -20% 0px",
  );
}

/* Local time --------------------------------------------------------------- */
function initClock() {
  const els = document.querySelectorAll<HTMLElement>("[data-clock]");
  if (!els.length) return;
  const update = () => {
    els.forEach((el) => {
      const tz = el.dataset.clock || "UTC";
      el.textContent = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: tz,
      }).format(new Date());
    });
  };
  update();
  window.setInterval(update, 15_000);
}

/* Header: hide on scroll down, active section, progress -------------------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  const progress = document.querySelector<HTMLElement>("[data-progress]");
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    if (header) {
      header.dataset.scrolled = String(y > 24);
      const menuOpen = document.documentElement.classList.contains("menu-open");
      const goingDown = y > lastY && y > 320;
      header.dataset.hidden = String(goingDown && !menuOpen && !header.contains(document.activeElement));
    }
    lastY = y;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  update();

  // Active section highlighting.
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
  const sections = links
    .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href") ?? ""))
    .filter((s): s is HTMLElement => Boolean(s));
  // Sections without a nav link (hero, contact) clear the active state when they take over.
  document.querySelectorAll<HTMLElement>("#top, #contact").forEach((s) => sections.push(s));
  if (!("IntersectionObserver" in window) || !sections.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = `#${entry.target.id}`;
        links.forEach((a) => {
          if (a.getAttribute("href") === id) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((s) => io.observe(s));
}

/* Mobile menu -------------------------------------------------------------- */
function initMenu() {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-menu]");
  if (!toggle || !panel) return;
  const root = document.documentElement;

  const set = (open: boolean) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    root.classList.toggle("menu-open", open);
    panel.toggleAttribute("inert", !open);
    if (open) panel.querySelector<HTMLElement>("a")?.focus();
  };

  set(false);
  toggle.addEventListener("click", () => set(toggle.getAttribute("aria-expanded") !== "true"));
  panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => set(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && root.classList.contains("menu-open")) {
      set(false);
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => e.matches && set(false));
}

/* Theme toggle ------------------------------------------------------------- */
function initTheme() {
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");
  const root = document.documentElement;
  const current = () =>
    (root.dataset.theme as "light" | "dark" | undefined) ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const sync = () =>
    buttons.forEach((b) => {
      const next = current() === "dark" ? "light" : "dark";
      b.setAttribute("aria-label", `Mudar para o tema ${next === "dark" ? "escuro" : "claro"}`);
      b.dataset.current = current();
    });

  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* storage unavailable: theme still applies for this visit */
      }
      sync();
    }),
  );
  sync();
}

/* Copy e-mail -------------------------------------------------------------- */
function initCopy() {
  document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((btn) => {
    const status = btn.querySelector<HTMLElement>("[data-copy-status]");
    const original = status?.textContent ?? "";
    let timer: number | undefined;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy ?? "");
        if (status) status.textContent = "Copiado";
        btn.dataset.copied = "true";
      } catch {
        window.location.href = `mailto:${btn.dataset.copy}`;
        return;
      }
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (status) status.textContent = original;
        btn.dataset.copied = "false";
      }, 2200);
    });
  });
}

/* Tabs (Approach section) -------------------------------------------------- */
function initTabs() {
  document.querySelectorAll<HTMLElement>("[data-tabs]").forEach((root) => {
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const panels = Array.from(root.querySelectorAll<HTMLElement>('[role="tabpanel"]'));
    const select = (i: number, focus = false) => {
      tabs.forEach((t, j) => {
        const on = i === j;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        panels[j].hidden = !on;
      });
      if (focus) tabs[i].focus();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(i));
      tab.addEventListener("mouseenter", () => {
        if (window.matchMedia("(hover: hover)").matches) select(i);
      });
      tab.addEventListener("keydown", (e) => {
        const keys: Record<string, number> = {
          ArrowDown: (i + 1) % tabs.length,
          ArrowRight: (i + 1) % tabs.length,
          ArrowUp: (i - 1 + tabs.length) % tabs.length,
          ArrowLeft: (i - 1 + tabs.length) % tabs.length,
          Home: 0,
          End: tabs.length - 1,
        };
        if (e.key in keys) {
          e.preventDefault();
          select(keys[e.key], true);
        }
      });
    });
  });
}

/* Subtle pointer parallax for the hero portrait ---------------------------- */
function initParallax() {
  if (reduceMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
  if (!els.length) return;
  window.addEventListener(
    "pointermove",
    (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      els.forEach((el) => {
        const k = Number(el.dataset.parallax || 10);
        el.style.setProperty("--px", `${(x * k).toFixed(2)}px`);
        el.style.setProperty("--py", `${(y * k).toFixed(2)}px`);
      });
    },
    { passive: true },
  );
}

export function initMotion() {
  initReveal();
  initCounters();
  initClock();
  initHeader();
  initMenu();
  initTheme();
  initCopy();
  initTabs();
  initParallax();
}
