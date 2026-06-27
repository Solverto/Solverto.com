"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

const navItems = [
  ["home", "#home"],
  ["services", "#services"],
  ["architecture", "#architecture"],
  ["games", "#games"],
  ["metaverse", "#metaverse"],
  ["portfolio", "#portfolio"],
  ["about", "#about"],
  ["contact", "#contact"]
] as const;

export function Header() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        isScrolled || isOpen
          ? "border-white/10 bg-obsidian/90 shadow-2xl backdrop-blur-xl"
          : "border-white/5 bg-obsidian/60 backdrop-blur-lg"
      }`}
    >
      <nav className="section-shell flex min-h-20 items-center justify-between gap-4">
        <a href="#home" aria-label="Solverto home" onClick={() => setIsOpen(false)}>
          <Logo />
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map(([key, href]) => (
            <a
              className="rounded-lg px-3 py-2 text-sm font-bold text-muted transition hover:bg-white/10 hover:text-bone"
              href={href}
              key={key}
            >
              {t.nav[key]}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            className="rounded-lg bg-gold px-4 py-3 text-sm font-black text-obsidian transition hover:bg-amber"
            href="#contact"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-bone xl:hidden"
          type="button"
          aria-label={isOpen ? t.nav.close : t.nav.open}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="grid gap-1.5" aria-hidden="true">
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div
        className={`xl:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="section-shell grid gap-2 pb-5">
          <div className="flex justify-between gap-3 md:hidden">
            <LanguageSwitcher />
            <a
              className="rounded-lg bg-gold px-4 py-3 text-sm font-black text-obsidian"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.cta}
            </a>
          </div>
          {navItems.map(([key, href]) => (
            <a
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-base font-bold text-bone"
              href={href}
              key={key}
              onClick={() => setIsOpen(false)}
            >
              {t.nav[key]}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
