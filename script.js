const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const portfolioData = window.SOLVERTO_PORTFOLIO;

const languageOptions = [
  ["en", "English"],
  ["pl", "Polski"],
  ["de", "Deutsch"],
  ["es", "Español"],
  ["pt", "Português"],
  ["it", "Italiano"]
];

const translations = {
  pl: {
    "Home": "Strona główna", "Game Production": "Produkcja gier", "Realtime 3D": "3D czasu rzeczywistego", "XR & Digital Twin": "XR i cyfrowy bliźniak", "AI & Pipeline": "AI i proces produkcyjny", "Contact": "Kontakt", "Start a project": "Rozpocznij projekt",
    "View portfolio": "Zobacz portfolio", "Explore projects": "Zobacz projekty", "View full portfolio": "Pełne portfolio", "More": "Więcej", "View examples": "Zobacz przykłady", "Email us": "Napisz e-mail", "Start a conversation": "Rozpocznij rozmowę", "Back to portfolio": "Powrót do portfolio", "View model on Sketchfab": "Zobacz model w Sketchfab",
    "All": "Wszystkie", "Architecture / Realtime Real Estate": "Architektura / nieruchomości realtime", "Game Development": "Tworzenie gier", "Animations / Support / Analysis": "Animacje / wsparcie / analiza", "Search portfolio": "Przeszukaj portfolio",
    "Project facts": "Informacje o projekcie", "Client / Partner": "Klient / Partner", "Role": "Rola", "Scope": "Zakres", "Industry": "Branża", "Technologies": "Technologie", "Year": "Rok", "Challenge": "Wyzwanie", "Solverto contribution": "Wkład Solverto", "Gallery": "Galeria", "Interactive model": "Model interaktywny",
    "Realtime 3D, games, XR simulations and interactive product experiences for business.": "3D czasu rzeczywistego, gry, symulacje XR i interaktywne doświadczenia produktowe dla biznesu.",
    "Game Production & Demo Support": "Produkcja gier i wsparcie wersji demo", "Realtime 3D for Business": "3D czasu rzeczywistego dla biznesu", "XR Training, Simulations & Digital Twin": "Szkolenia XR, symulacje i cyfrowy bliźniak", "AI-Assisted Creative Pipeline & Realtime Production": "Proces kreatywny wspierany przez AI i produkcja realtime", "Portfolio of realtime 3D, architecture, games and metaverse production": "Portfolio produkcji 3D realtime, architektury, gier i metaverse", "Tell us what you want to build.": "Opowiedz nam, co chcesz stworzyć."
  },
  de: {
    "Home": "Startseite", "Game Production": "Spieleproduktion", "Realtime 3D": "Echtzeit-3D", "XR & Digital Twin": "XR & Digitaler Zwilling", "AI & Pipeline": "KI & Produktionsprozess", "Portfolio": "Portfolio", "Contact": "Kontakt", "Start a project": "Projekt starten",
    "View portfolio": "Portfolio ansehen", "Explore projects": "Projekte entdecken", "View full portfolio": "Gesamtes Portfolio", "More": "Mehr", "View examples": "Beispiele ansehen", "Email us": "E-Mail senden", "Start a conversation": "Gespräch beginnen", "Back to portfolio": "Zurück zum Portfolio", "View model on Sketchfab": "Modell auf Sketchfab ansehen",
    "All": "Alle", "Architecture / Realtime Real Estate": "Architektur / Echtzeit-Immobilien", "Game Development": "Spieleentwicklung", "Metaverse": "Metaverse", "Solverto Games": "Solverto Games", "Animations / Support / Analysis": "Animation / Support / Analyse", "Search portfolio": "Portfolio durchsuchen",
    "Project facts": "Projektdaten", "Client / Partner": "Kunde / Partner", "Role": "Rolle", "Scope": "Umfang", "Industry": "Branche", "Technologies": "Technologien", "Year": "Jahr", "Challenge": "Herausforderung", "Solverto contribution": "Beitrag von Solverto", "Gallery": "Galerie", "Interactive model": "Interaktives Modell",
    "Realtime 3D, games, XR simulations and interactive product experiences for business.": "Echtzeit-3D, Spiele, XR-Simulationen und interaktive Produkterlebnisse für Unternehmen.",
    "Game Production & Demo Support": "Spieleproduktion & Demo-Support", "Realtime 3D for Business": "Echtzeit-3D für Unternehmen", "XR Training, Simulations & Digital Twin": "XR-Training, Simulationen & Digitaler Zwilling", "AI-Assisted Creative Pipeline & Realtime Production": "KI-gestützter Kreativprozess & Echtzeitproduktion", "Portfolio of realtime 3D, architecture, games and metaverse production": "Portfolio für Echtzeit-3D, Architektur, Spiele und Metaverse-Produktion", "Tell us what you want to build.": "Erzählen Sie uns, was Sie entwickeln möchten."
  },
  es: {
    "Home": "Inicio", "Game Production": "Producción de juegos", "Realtime 3D": "3D en tiempo real", "XR & Digital Twin": "XR y gemelo digital", "AI & Pipeline": "IA y proceso de producción", "Portfolio": "Portafolio", "Contact": "Contacto", "Start a project": "Iniciar un proyecto",
    "View portfolio": "Ver portafolio", "Explore projects": "Explorar proyectos", "View full portfolio": "Ver portafolio completo", "More": "Más", "View examples": "Ver ejemplos", "Email us": "Enviar correo", "Start a conversation": "Iniciar una conversación", "Back to portfolio": "Volver al portafolio", "View model on Sketchfab": "Ver modelo en Sketchfab",
    "All": "Todos", "Architecture / Realtime Real Estate": "Arquitectura / inmobiliario en tiempo real", "Game Development": "Desarrollo de juegos", "Metaverse": "Metaverso", "Solverto Games": "Solverto Games", "Animations / Support / Analysis": "Animación / soporte / análisis", "Search portfolio": "Buscar en el portafolio",
    "Project facts": "Datos del proyecto", "Client / Partner": "Cliente / socio", "Role": "Función", "Scope": "Alcance", "Industry": "Sector", "Technologies": "Tecnologías", "Year": "Año", "Challenge": "Desafío", "Solverto contribution": "Contribución de Solverto", "Gallery": "Galería", "Interactive model": "Modelo interactivo",
    "Realtime 3D, games, XR simulations and interactive product experiences for business.": "3D en tiempo real, juegos, simulaciones XR y experiencias interactivas de producto para empresas.",
    "Game Production & Demo Support": "Producción de juegos y soporte de demos", "Realtime 3D for Business": "3D en tiempo real para empresas", "XR Training, Simulations & Digital Twin": "Formación XR, simulaciones y gemelo digital", "AI-Assisted Creative Pipeline & Realtime Production": "Proceso creativo asistido por IA y producción en tiempo real", "Portfolio of realtime 3D, architecture, games and metaverse production": "Portafolio de 3D en tiempo real, arquitectura, juegos y producción metaverso", "Tell us what you want to build.": "Cuéntenos qué quiere crear."
  },
  pt: {
    "Home": "Início", "Game Production": "Produção de jogos", "Realtime 3D": "3D em tempo real", "XR & Digital Twin": "XR e gémeo digital", "AI & Pipeline": "IA e processo de produção", "Portfolio": "Portfólio", "Contact": "Contacto", "Start a project": "Iniciar um projeto",
    "View portfolio": "Ver portfólio", "Explore projects": "Explorar projetos", "View full portfolio": "Ver portfólio completo", "More": "Mais", "View examples": "Ver exemplos", "Email us": "Enviar e-mail", "Start a conversation": "Iniciar conversa", "Back to portfolio": "Voltar ao portfólio", "View model on Sketchfab": "Ver modelo no Sketchfab",
    "All": "Todos", "Architecture / Realtime Real Estate": "Arquitetura / imobiliário em tempo real", "Game Development": "Desenvolvimento de jogos", "Metaverse": "Metaverso", "Solverto Games": "Solverto Games", "Animations / Support / Analysis": "Animação / suporte / análise", "Search portfolio": "Pesquisar no portfólio",
    "Project facts": "Dados do projeto", "Client / Partner": "Cliente / parceiro", "Role": "Função", "Scope": "Âmbito", "Industry": "Setor", "Technologies": "Tecnologias", "Year": "Ano", "Challenge": "Desafio", "Solverto contribution": "Contribuição da Solverto", "Gallery": "Galeria", "Interactive model": "Modelo interativo",
    "Realtime 3D, games, XR simulations and interactive product experiences for business.": "3D em tempo real, jogos, simulações XR e experiências interativas de produto para empresas.",
    "Game Production & Demo Support": "Produção de jogos e suporte de demos", "Realtime 3D for Business": "3D em tempo real para empresas", "XR Training, Simulations & Digital Twin": "Formação XR, simulações e gémeo digital", "AI-Assisted Creative Pipeline & Realtime Production": "Processo criativo assistido por IA e produção em tempo real", "Portfolio of realtime 3D, architecture, games and metaverse production": "Portfólio de 3D em tempo real, arquitetura, jogos e produção metaverso", "Tell us what you want to build.": "Conte-nos o que pretende criar."
  },
  it: {
    "Home": "Home", "Game Production": "Produzione videogiochi", "Realtime 3D": "3D in tempo reale", "XR & Digital Twin": "XR e gemello digitale", "AI & Pipeline": "IA e processo produttivo", "Portfolio": "Portfolio", "Contact": "Contatti", "Start a project": "Avvia un progetto",
    "View portfolio": "Vedi portfolio", "Explore projects": "Esplora i progetti", "View full portfolio": "Portfolio completo", "More": "Altro", "View examples": "Vedi esempi", "Email us": "Invia un'e-mail", "Start a conversation": "Inizia una conversazione", "Back to portfolio": "Torna al portfolio", "View model on Sketchfab": "Vedi il modello su Sketchfab",
    "All": "Tutti", "Architecture / Realtime Real Estate": "Architettura / immobiliare in tempo reale", "Game Development": "Sviluppo videogiochi", "Metaverse": "Metaverso", "Solverto Games": "Solverto Games", "Animations / Support / Analysis": "Animazione / supporto / analisi", "Search portfolio": "Cerca nel portfolio",
    "Project facts": "Dati del progetto", "Client / Partner": "Cliente / partner", "Role": "Ruolo", "Scope": "Ambito", "Industry": "Settore", "Technologies": "Tecnologie", "Year": "Anno", "Challenge": "Sfida", "Solverto contribution": "Contributo di Solverto", "Gallery": "Galleria", "Interactive model": "Modello interattivo",
    "Realtime 3D, games, XR simulations and interactive product experiences for business.": "3D in tempo reale, videogiochi, simulazioni XR ed esperienze interattive di prodotto per le aziende.",
    "Game Production & Demo Support": "Produzione videogiochi e supporto demo", "Realtime 3D for Business": "3D in tempo reale per le aziende", "XR Training, Simulations & Digital Twin": "Formazione XR, simulazioni e gemello digitale", "AI-Assisted Creative Pipeline & Realtime Production": "Processo creativo assistito dall'IA e produzione in tempo reale", "Portfolio of realtime 3D, architecture, games and metaverse production": "Portfolio di 3D in tempo reale, architettura, videogiochi e produzione metaverso", "Tell us what you want to build.": "Raccontaci cosa vuoi realizzare."
  }
};

function storedLanguage() {
  try {
    const value = localStorage.getItem("solverto-language");
    return languageOptions.some(([code]) => code === value) ? value : "en";
  } catch {
    return "en";
  }
}

let selectedLanguage = storedLanguage();

function translatedText(source, language = selectedLanguage) {
  return language === "en" ? source : translations[language]?.[source] || source;
}

function projectCountLabel(count) {
  const labels = {
    en: count === 1 ? "project" : "projects",
    pl: count === 1 ? "projekt" : "projektów",
    de: count === 1 ? "Projekt" : "Projekte",
    es: count === 1 ? "proyecto" : "proyectos",
    pt: count === 1 ? "projeto" : "projetos",
    it: count === 1 ? "progetto" : "progetti"
  };
  return `${count} ${labels[selectedLanguage]}`;
}

function addLanguageSelector() {
  const projectButton = navMenu?.querySelector(".nav-cta");
  if (!projectButton || navMenu.querySelector("[data-language-select]")) return;

  const control = document.createElement("label");
  control.className = "language-control";
  control.innerHTML = `<span class="visually-hidden">Language</span><select data-language-select aria-label="Language">${languageOptions.map(([code, label]) => `<option value="${code}">${label}</option>`).join("")}</select>`;
  projectButton.insertAdjacentElement("afterend", control);

  const select = control.querySelector("select");
  select.value = selectedLanguage;
  select.addEventListener("change", () => {
    selectedLanguage = select.value;
    try { localStorage.setItem("solverto-language", selectedLanguage); } catch { /* Storage may be unavailable in private contexts. */ }
    applyLanguage();
  });
}

function applyLanguage() {
  document.documentElement.lang = selectedLanguage;
  document.querySelectorAll("a, button, h1, h2, h3, h4, p, span").forEach((element) => {
    if (element.children.length > 0) return;
    const source = element.dataset.languageSource || element.textContent.trim();
    if (!source) return;
    element.dataset.languageSource = source;
    element.textContent = translatedText(source);
  });

  document.querySelectorAll("label.portfolio-search").forEach((label) => {
    const textNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim());
    if (!textNode) return;
    const source = label.dataset.languageSource || textNode.nodeValue.trim();
    label.dataset.languageSource = source;
    textNode.nodeValue = `${translatedText(source)} `;
  });

  const search = document.querySelector("[data-portfolio-search]");
  if (search) search.placeholder = translatedText("Search portfolio");
  const count = document.querySelector("[data-portfolio-count]");
  if (count?.dataset.projectCount) count.textContent = projectCountLabel(Number(count.dataset.projectCount));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function projectUrl(project) {
  return `project-template.html?project=${encodeURIComponent(project.id)}`;
}

function projectCardMarkup(project, headingLevel = 3) {
  const partner = project.partner || "Solverto project";
  const tags = project.tags.slice(0, 4).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  return `
    <article class="project-card reveal" data-project-card data-project-category="${escapeHtml(project.filter || "")}" data-project-search="${escapeHtml(`${project.name} ${project.category} ${partner} ${project.role} ${project.country}`.toLowerCase())}">
      <div class="media-placeholder" role="img">${escapeHtml(project.placeholder)}</div>
      <div class="project-card-body">
        <p class="project-badge">${escapeHtml(project.category)}</p>
        <h${headingLevel}>${escapeHtml(project.name)}</h${headingLevel}>
        <p class="project-meta"><span>Client / Partner</span>${escapeHtml(partner)}${project.country ? ` · ${escapeHtml(project.country)}` : ""}</p>
        <p class="project-meta"><span>Role</span>${escapeHtml(project.role)}</p>
        <p>${escapeHtml(project.description || "Production support within a realtime 3D or interactive project workflow.")}</p>
        <div class="tag-row">${tags}</div>
        <a class="button button-secondary button-small" href="${projectUrl(project)}">More</a>
      </div>
    </article>`;
}

function renderStats() {
  if (!portfolioData) return;
  document.querySelectorAll("[data-portfolio-stats]").forEach((container) => {
    container.innerHTML = portfolioData.stats.map((stat) => `
      <article class="stat-item reveal"><p class="stat-value">${escapeHtml(stat.value)}</p><p>${escapeHtml(stat.label)}</p></article>
    `).join("");
  });
}

function renderFeaturedProjects() {
  const container = document.querySelector("[data-featured-projects]");
  if (!container || !portfolioData) return;
  container.innerHTML = portfolioData.featured.map((project) => projectCardMarkup(project)).join("");
}

function renderPortfolio() {
  const groupsContainer = document.querySelector("[data-portfolio-groups]");
  if (!groupsContainer || !portfolioData) return;

  const largeScaleContainer = document.querySelector("[data-large-scale-projects]");
  if (largeScaleContainer) {
    largeScaleContainer.innerHTML = portfolioData.largeScale.map((project) => projectCardMarkup(project)).join("");
  }

  groupsContainer.innerHTML = portfolioData.groups.map((group) => `
    <section class="portfolio-group" id="${escapeHtml(group.id)}" data-portfolio-group data-group-category="${escapeHtml(group.filter)}">
      <div class="portfolio-group-heading reveal">
        <p class="eyebrow">${escapeHtml(group.subtitle || group.title)}</p>
        <h3>${escapeHtml(group.title)}</h3>
        ${group.intro ? `<p>${escapeHtml(group.intro)}</p>` : ""}
      </div>
      <div class="portfolio-grid">${group.projects.map((project) => projectCardMarkup(project, 4)).join("")}</div>
      ${group.id === "wild-rush" ? '<p class="portfolio-note reveal">3D models were created or supported for the above metaverse projects.</p>' : ""}
    </section>
  `).join("");

  const searchInput = document.querySelector("[data-portfolio-search]");
  const countOutput = document.querySelector("[data-portfolio-count]");
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  let activeFilter = "all";

  function updatePortfolio() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    let visibleCount = 0;

    groupsContainer.querySelectorAll("[data-project-card]").forEach((card) => {
      const matchesFilter = activeFilter === "all" || card.dataset.projectCategory === activeFilter;
      const matchesSearch = !query || card.dataset.projectSearch.includes(query);
      const visible = matchesFilter && matchesSearch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    document.querySelectorAll("[data-portfolio-group]").forEach((group) => {
      group.hidden = !group.querySelector("[data-project-card]:not([hidden])");
    });

    if (countOutput) {
      countOutput.dataset.projectCount = String(visibleCount);
      countOutput.textContent = projectCountLabel(visibleCount);
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      updatePortfolio();
    });
  });

  searchInput?.addEventListener("input", updatePortfolio);
  updatePortfolio();
}

function allPortfolioProjects() {
  if (!portfolioData) return [];
  return [
    ...portfolioData.featured,
    ...portfolioData.largeScale,
    ...portfolioData.groups.flatMap((group) => group.projects)
  ];
}

function detailCopy(project) {
  const category = project.category.toLowerCase();
  if (category.includes("architecture") || category.includes("real estate")) {
    return {
      challenge: "Realtime architecture production requires technically consistent 3D assets, careful preparation and clear coordination with the source documentation. The exact confidential requirements of this project are not disclosed.",
      contribution: `Solverto's documented contribution covered ${project.role.toLowerCase()}. The work was delivered as realtime architecture or 3D modelling support within the stated partner workflow.`
    };
  }
  if (category.includes("metaverse")) {
    return {
      challenge: "Metaverse spaces need recognizable visual themes, efficient realtime geometry and environments that support navigation or gameplay. Project-specific confidential constraints are not disclosed.",
      contribution: `Solverto's documented contribution covered ${project.role.toLowerCase()}, including 3D production support appropriate to this type of interactive environment.`
    };
  }
  if (category.includes("game")) {
    return {
      challenge: "Game production connects visual quality, level readability and technical performance with the intended player experience. The page does not disclose confidential production details.",
      contribution: `Solverto's documented contribution covered ${project.role.toLowerCase()}, based only on the available project information.`
    };
  }
  return {
    challenge: "The assignment required focused production support within an existing 3D workflow. Confidential project details and unapproved materials are not presented here.",
    contribution: `Solverto's documented contribution covered ${project.role.toLowerCase()}, based only on the available project information.`
  };
}

function renderProjectDetail() {
  const root = document.querySelector("[data-project-detail]");
  if (!root || !portfolioData) return;

  const projectId = new URLSearchParams(window.location.search).get("project");
  const project = allPortfolioProjects().find((item) => item.id === projectId) || portfolioData.featured[0];
  const copy = detailCopy(project);
  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  document.title = `${project.name} — Solverto Portfolio`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", `${project.name}: ${project.description}`);
  setText("[data-detail-category]", project.category);
  setText("[data-detail-name]", project.name);
  setText("[data-detail-intro]", project.description);
  setText("[data-detail-hero]", project.placeholder.replace("[Project thumbnail:", "[Project hero:").replace("[Featured project visual:", "[Project hero:"));
  setText("[data-detail-partner]", project.partner || "Solverto project");
  setText("[data-detail-role]", project.role);
  setText("[data-detail-scope]", project.scope);
  setText("[data-detail-industry]", project.industry);
  setText("[data-detail-technology]", project.technology);
  setText("[data-detail-year]", project.year);
  setText("[data-detail-challenge]", copy.challenge);
  setText("[data-detail-contribution]", copy.contribution);

  const tags = document.querySelector("[data-detail-tags]");
  if (tags) tags.innerHTML = project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");

  const extraFacts = document.querySelector("[data-detail-extra-facts]");
  if (extraFacts) {
    const facts = [
      project.game ? ["Game", project.game] : null,
      project.country ? ["Country", project.country] : null,
      project.status ? ["Status", project.status] : null,
      project.previousTitle ? ["Previous title", project.previousTitle] : null,
      project.note ? ["Portfolio note", project.note] : null
    ].filter(Boolean);
    extraFacts.innerHTML = facts.map(([label, value]) => `<div class="project-fact"><span>${escapeHtml(label)}</span><p>${escapeHtml(value)}</p></div>`).join("");
    extraFacts.hidden = facts.length === 0;
  }

  const gallery = document.querySelector("[data-detail-gallery]");
  if (gallery) {
    const labels = [
      "[Gallery image: exterior realtime model view]",
      "[Gallery image: environment art detail]",
      "[Gallery image: technical model preparation]",
      "[Gallery image: before/after optimization]",
      "[Gallery image: production workflow view]",
      "[Gallery image: final realtime presentation detail]"
    ];
    gallery.innerHTML = labels.map((label) => `<div class="media-placeholder reveal" role="img">${label}</div>`).join("");
  }
}

renderStats();
renderFeaturedProjects();
renderPortfolio();
renderProjectDetail();
addLanguageSelector();
applyLanguage();

function closeNavigation() {
  document.body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNavigation();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 960) closeNavigation();
});

function updateScrollEffects() {
  const scrollY = window.scrollY;
  header?.classList.toggle("is-scrolled", scrollY > 12);
  if (!reducedMotion.matches) {
    document.querySelectorAll("[data-parallax]").forEach((element) => {
      element.style.transform = `translate3d(0, ${Math.min(scrollY * 0.12, 72)}px, 0)`;
    });
  }
}

window.addEventListener("scroll", updateScrollEffects, { passive: true });
updateScrollEffects();

const revealItems = document.querySelectorAll(".reveal");
if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -48px" });
  revealItems.forEach((item) => observer.observe(item));
}

document.querySelectorAll("[data-static-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    const recipient = form.dataset.contactEmail || "contact@solverto.com";
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const projectType = String(formData.get("projectType") || "General inquiry");
    const message = String(formData.get("message") || "");
    const subject = `Solverto project inquiry: ${projectType}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Project type: ${projectType}`,
      "",
      message
    ].join("\n");

    if (status) status.textContent = `Opening your email application. Recipient: ${recipient}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
