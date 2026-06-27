const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const portfolioData = window.SOLVERTO_PORTFOLIO;

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

    if (countOutput) countOutput.textContent = `${visibleCount} ${visibleCount === 1 ? "project" : "projects"}`;
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
    if (status) status.textContent = "This is a static demo form. Please contact us by email or WhatsApp.";
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
