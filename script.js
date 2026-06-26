const header = document.querySelector("[data-nav]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const hero = document.querySelector("[data-parallax]");
const currentYear = document.querySelector("#current-year");
const revealItems = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const closeNav = () => {
  if (!header || !navToggle) return;

  header.classList.remove("nav-open");
  document.body.classList.remove("nav-lock");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
};

const toggleNav = () => {
  if (!header || !navToggle) return;

  const isOpen = header.classList.toggle("nav-open");
  document.body.classList.toggle("nav-lock", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
};

if (navToggle) {
  navToggle.addEventListener("click", toggleNav);
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
  }
});

const updateNavState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const updateHeroParallax = () => {
  if (!hero || reducedMotion.matches) return;
  const offset = Math.min(window.scrollY * 0.16, 92);
  hero.style.setProperty("--hero-offset", `${offset}px`);
};

let ticking = false;

const handleScroll = () => {
  if (ticking) return;

  window.requestAnimationFrame(() => {
    updateNavState();
    updateHeroParallax();
    ticking = false;
  });

  ticking = true;
};

window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", updateHeroParallax);

updateNavState();
updateHeroParallax();

const revealAll = () => {
  revealItems.forEach((item) => item.classList.add("is-visible"));
};

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealAll();
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -60px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

const handleMotionPreferenceChange = () => {
  if (reducedMotion.matches) {
    revealAll();
    if (hero) {
      hero.style.setProperty("--hero-offset", "0px");
    }
  }
};

if (typeof reducedMotion.addEventListener === "function") {
  reducedMotion.addEventListener("change", handleMotionPreferenceChange);
} else if (typeof reducedMotion.addListener === "function") {
  reducedMotion.addListener(handleMotionPreferenceChange);
}
