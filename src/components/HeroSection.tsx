import { useLanguage } from "./LanguageProvider";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28" id="home">
      <div className="absolute inset-0 -z-10 bg-[url('/graphics/hero-world.svg')] bg-cover bg-center opacity-[0.48]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-obsidian/35 via-obsidian/82 to-obsidian" />

      <div className="section-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="reveal grid gap-7">
          <p className="w-fit rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-gold">
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.95] text-bone sm:text-7xl lg:text-8xl">
            {t.hero.title}
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-bone/78 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-gold px-5 py-4 text-sm font-black text-obsidian transition hover:-translate-y-0.5 hover:bg-amber"
              href="#contact"
            >
              {t.hero.primary}
            </a>
            <a
              className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-4 text-sm font-black text-bone transition hover:-translate-y-0.5 hover:border-cyan/45"
              href="#portfolio"
            >
              {t.hero.secondary}
            </a>
          </div>
          <p className="border-l-2 border-gold pl-4 text-sm font-semibold leading-7 text-muted">
            {t.hero.trust}
          </p>
        </div>

        <div className="glass-panel reveal rounded-3xl p-4">
          <img
            src="/graphics/hero-world.svg"
            alt="Abstract 3D grid, node network and urban blocks"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
