const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");

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
    if (status) {
      status.textContent = "This is a static demo form. Please contact us by email or WhatsApp.";
    }
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-pressed", String(item === button));
    });

    document.querySelectorAll("[data-project-category]").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.projectCategory !== filter;
    });
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
