"use client";

import { useEffect, useMemo, useState } from "react";
import {
  featuredProjects,
  largestReferences,
  projects,
  type Project
} from "@/data/projects";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { StatStrip } from "./StatStrip";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { ImageCard } from "./ImageCard";
import { FeaturedProjects } from "./FeaturedProjects";
import { LargestProjects } from "./LargestProjects";
import { PortfolioFilters, type PortfolioFilter } from "./PortfolioFilters";
import { ProjectCard } from "./ProjectCard";
import { InvestorSection } from "./InvestorSection";
import { CooperationSteps } from "./CooperationSteps";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";
import { LanguageProvider, useLanguage } from "./LanguageProvider";
import type { IconName } from "./Icons";

const serviceIcons: IconName[] = ["cube", "building", "gamepad", "vr", "film"];

const descriptionKey = {
  pl: "descriptionPL",
  en: "descriptionEN",
  de: "descriptionDE",
  es: "descriptionES"
} as const;

export function SitePage({ initialSection }: { initialSection?: string } = {}) {
  return (
    <LanguageProvider>
      <SiteContent initialSection={initialSection} />
    </LanguageProvider>
  );
}

function SiteContent({ initialSection }: { initialSection?: string }) {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");
  const [search, setSearch] = useState("");

  useReveal();

  useEffect(() => {
    if (!initialSection || initialSection === "home") {
      return;
    }

    const timeout = window.setTimeout(() => {
      document.getElementById(initialSection)?.scrollIntoView({ block: "start" });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [initialSection]);

  const filteredProjects = useMemo(
    () => filterProjects(projects, activeFilter, search),
    [activeFilter, search]
  );

  const architectureProjects = projects
    .filter((project) => project.category === "architecture")
    .slice(0, 6);
  const gameProjects = projects
    .filter((project) => project.category === "gamedev")
    .slice(0, 6);
  const metaverseProjects = projects
    .filter((project) => project.category === "metaverse" || project.category === "animation")
    .slice(0, 8);

  return (
    <>
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <StatStrip stats={t.stats} />

        <section className="py-16 sm:py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={t.sections.overviewEyebrow}
                title={t.sections.overviewTitle}
                text={t.sections.overviewText}
              />
              <div className="reveal grid gap-3 sm:grid-cols-2">
                {["Game production", "3D services", "Realtime architecture", "Metaverse / VR / AR"].map(
                  (item) => (
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 font-bold text-bone" key={item}>
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
            <ImageCard
              src="/graphics/hero-world.svg"
              alt="Abstract production pipeline world"
              icon="nodes"
              label="Realtime production map"
            />
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] py-16 sm:py-24" id="services">
          <div className="section-shell">
            <SectionHeading
              eyebrow={t.sections.servicesEyebrow}
              title={t.sections.servicesTitle}
              text={t.sections.servicesIntro}
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {t.services.map((service, index) => (
                <ServiceCard
                  icon={serviceIcons[index]}
                  key={service.title}
                  text={service.text}
                  title={service.title}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow={t.sections.featuredEyebrow}
              title={t.sections.featuredTitle}
            />
            <FeaturedProjects language={language} projects={featuredProjects} />
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] py-16 sm:py-24" id="architecture">
          <div className="section-shell grid gap-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow={t.sections.architectureEyebrow}
                  title={t.sections.architectureTitle}
                  text={t.sections.architectureIntro}
                />
                <div className="reveal flex flex-wrap gap-2 text-sm font-bold text-muted">
                  {["Vinci", "Atal", "Dom Development", "Echo", "Murapol", "SQUAREBYTES GmbH", "Matexi"].map(
                    (name) => (
                      <span className="rounded-full border border-white/10 px-3 py-2" key={name}>
                        {name}
                      </span>
                    )
                  )}
                </div>
              </div>
              <ImageCard
                src="/graphics/architecture-grid.svg"
                alt="Urban model grid visual"
                icon="building"
                label="PZT / PTT urban model"
              />
            </div>
            <LargestProjects language={language} references={largestReferences} />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {architectureProjects.map((project) => (
                <ProjectCard key={project.id} language={language} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24" id="games">
          <div className="section-shell grid gap-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
              <ImageCard
                src="/graphics/game-greybox.svg"
                alt="Greybox level design scene"
                icon="gamepad"
                label="Selected game production work"
              />
              <SectionHeading
                eyebrow={t.sections.gamesEyebrow}
                title={t.sections.gamesTitle}
                text={t.sections.gamesIntro}
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {gameProjects.map((project) => (
                <ProjectCard key={project.id} language={language} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] py-16 sm:py-24" id="metaverse">
          <div className="section-shell grid gap-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <SectionHeading
                eyebrow={t.sections.metaverseEyebrow}
                title={t.sections.metaverseTitle}
                text={t.sections.metaverseIntro}
              />
              <ImageCard
                src="/graphics/metaverse-portals.svg"
                alt="Metaverse portals and event rooms visual"
                icon="vr"
                label="Rooms · mazes · avatars"
              />
            </div>
            <p className="reveal rounded-2xl border border-cyan/20 bg-cyan/10 p-5 leading-7 text-bone/82">
              {t.sections.metaverseNote}
            </p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {metaverseProjects.map((project) => (
                <ProjectCard compact key={project.id} language={language} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24" id="portfolio">
          <div className="section-shell">
            <SectionHeading
              eyebrow={t.sections.portfolioEyebrow}
              title={t.sections.portfolioTitle}
              text={t.sections.portfolioIntro}
            />
            <PortfolioFilters
              active={activeFilter}
              count={`${filteredProjects.length} ${t.portfolio.count}`}
              labels={{
                all: t.portfolio.all,
                search: t.portfolio.search,
                architecture: t.portfolio.filters.architecture,
                gamedev: t.portfolio.filters.gamedev,
                metaverse: t.portfolio.filters.metaverse,
                analysis: t.portfolio.filters.analysis,
                support: t.portfolio.filters.support,
                austria: t.portfolio.filters.austria,
                canada: t.portfolio.filters.canada,
                uae: t.portfolio.filters.uae,
                largest: t.portfolio.filters.largest
              }}
              onChange={setActiveFilter}
              onSearch={setSearch}
              search={search}
            />
            {filteredProjects.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} language={language} project={project} />
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-white/10 p-6 text-muted">{t.portfolio.empty}</p>
            )}
            <p className="mt-6 rounded-2xl border border-gold/25 bg-gold/10 p-5 text-sm leading-7 text-bone/82">
              {t.portfolio.legal}
            </p>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] py-16 sm:py-24" id="investors">
          <div className="section-shell">
            <p className="reveal mb-4 text-xs font-black uppercase tracking-[0.18em] text-gold">
              {t.sections.investorsEyebrow}
            </p>
            <InvestorSection />
          </div>
        </section>

        <section className="py-16 sm:py-24" id="about">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow={t.sections.aboutEyebrow}
              title={t.sections.aboutTitle}
              text={t.sections.aboutText}
            />
            <div className="grid gap-5 md:grid-cols-3">
              {["Solverto Studio", "Solverto Games", "Solverto Group"].map((name) => (
                <article className="glass-panel reveal rounded-2xl p-6" key={name}>
                  <h3 className="mb-3 text-xl font-black text-bone">{name}</h3>
                  <p className="text-sm leading-7 text-muted">
                    3D · realtime · Unity · Unreal · production pipeline · B2B technology
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] py-16 sm:py-24" id="cooperation">
          <div className="section-shell">
            <SectionHeading
              eyebrow={t.sections.cooperationEyebrow}
              title={t.cooperation.title}
              text={t.cooperation.text}
            />
            <CooperationSteps />
          </div>
        </section>

        <section className="py-16 sm:py-24" id="contact">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow={t.sections.contactEyebrow}
              title={t.contact.title}
              text={t.contact.intro}
            />
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function filterProjects(projectList: Project[], activeFilter: PortfolioFilter, search: string) {
  const searchValue = search.trim().toLowerCase();

  return projectList.filter((project) => {
    const matchesFilter =
      activeFilter === "all" ||
      project.category === activeFilter ||
      (activeFilter === "austria" && project.country?.toLowerCase() === "austria") ||
      (activeFilter === "canada" && project.country?.toLowerCase() === "canada") ||
      (activeFilter === "uae" && project.country?.toLowerCase() === "uae") ||
      (activeFilter === "largest" && project.isLargest);

    if (!matchesFilter) {
      return false;
    }

    if (!searchValue) {
      return true;
    }

    const searchable = [
      project.title,
      project.client,
      project.partner,
      project.country,
      project.region,
      project.serviceType,
      project[descriptionKey.pl],
      project[descriptionKey.en],
      project[descriptionKey.de],
      project[descriptionKey.es],
      ...project.tags
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchable.includes(searchValue);
  });
}

function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}
