const page = window.solvertoPage;

if (!page?.translations || !page?.projects) {
  throw new Error("Missing Solverto subpage configuration.");
}

const supportedLanguages = Object.keys(page.translations);

function readLanguage() {
  try {
    const saved = localStorage.getItem("solverto-language");
    return supportedLanguages.includes(saved) ? saved : "pl";
  } catch {
    return "pl";
  }
}

let language = readLanguage();
let activeFilter = "all";
let searchValue = "";

const t = (path) => path.split(".").reduce((value, key) => value?.[key], page.translations[language]);
const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function applyTranslations() {
  document.documentElement.lang = language;
  document.title = t("seo.title");

  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = t("seo.description");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (typeof value === "string") node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderScope() {
  document.querySelector("[data-scope]").innerHTML = t("scope.items").map(([code, title, text]) => `
    <article class="architecture-scope-card reveal">
      <span class="architecture-scope-code">${code}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderSelected() {
  document.querySelector("[data-largest]").innerHTML = t("selected.records").map(([title, label, text], index) => `
    <article class="architecture-large-card reveal">
      <span class="architecture-index">${String(index + 1).padStart(2, "0")}</span>
      <p class="eyebrow">${label}</p>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderQuality() {
  document.querySelector("[data-quality]").innerHTML = t("quality.items")
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderFilters() {
  document.querySelector("[data-project-filters]").innerHTML = Object.entries(t("filters"))
    .map(([id, label]) => `<button type="button" data-project-filter="${id}" class="${activeFilter === id ? "is-active" : ""}">${label}</button>`)
    .join("");
}

function renderProjects() {
  const query = normalize(searchValue);
  const projects = page.projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter || (activeFilter === "featured" && project.featured);
    const categoryLabel = t(`filters.${project.category}`) || project.category;
    const matchesSearch = normalize(`${project.title} ${project.client || ""} ${categoryLabel}`).includes(query);
    return matchesFilter && matchesSearch;
  });

  document.querySelector("[data-project-count]").textContent = `${projects.length} ${t("projects.count")}`;
  document.querySelector("[data-architecture-projects]").innerHTML = projects.length
    ? projects.map((project) => `
      <article class="architecture-project-card reveal">
        <div class="project-meta">
          <span class="badge">${t(`filters.${project.category}`)}</span>
          ${project.featured ? `<span class="badge largest">${t("filters.featured")}</span>` : ""}
        </div>
        <h3>${project.title}</h3>
        ${project.client ? `<p class="architecture-client">${project.client}</p>` : ""}
        <p>${t(`projects.services.${project.serviceKey}`)}</p>
      </article>
    `).join("")
    : `<p class="notice">${t("projects.empty")}</p>`;
}

function renderProcess() {
  document.querySelector("[data-process]").innerHTML = t("process.items").map(([title, text], index) => `
    <li class="architecture-process-step reveal">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div><h3>${title}</h3><p>${text}</p></div>
    </li>
  `).join("");
}

function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -48px" });

  items.forEach((item) => observer.observe(item));
}

function renderAll() {
  applyTranslations();
  renderScope();
  renderSelected();
  renderQuality();
  renderFilters();
  renderProjects();
  renderProcess();
  observeReveals();
}

document.querySelector("[data-nav-toggle]").addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  document.querySelector("[data-nav-toggle]").setAttribute("aria-expanded", String(isOpen));
});

document.querySelector("[data-nav-menu]").addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    document.body.classList.remove("nav-open");
    document.querySelector("[data-nav-toggle]").setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = button.dataset.lang;
    if (!supportedLanguages.includes(nextLanguage)) return;
    language = nextLanguage;
    try { localStorage.setItem("solverto-language", language); } catch {}
    document.body.classList.remove("nav-open");
    document.querySelector("[data-nav-toggle]").setAttribute("aria-expanded", "false");
    renderAll();
  });
});

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-project-filter]");
  if (!filter) return;
  activeFilter = filter.dataset.projectFilter;
  renderFilters();
  renderProjects();
  observeReveals();
});

document.querySelector("[data-project-search]").addEventListener("input", (event) => {
  searchValue = event.target.value;
  renderProjects();
  observeReveals();
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelector("[data-header]").classList.toggle("is-scrolled", scrollY > 14);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelector("[data-parallax]").style.transform = `translate3d(0, ${Math.min(scrollY * 0.16, 90)}px, 0) scale(1.08)`;
  }
}, { passive: true });

renderAll();
