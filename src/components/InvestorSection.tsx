import { useLanguage } from "./LanguageProvider";
import { ImageCard } from "./ImageCard";

export function InvestorSection() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <ImageCard
        src="/graphics/investor-orbits.svg"
        alt="Orbiting Solverto Group business pillars"
        icon="nodes"
        label="Solverto Group ecosystem"
      />
      <div className="reveal grid gap-5">
        <h2 className="text-3xl font-black leading-tight text-bone sm:text-5xl">
          {t.investor.title}
        </h2>
        <p className="text-lg leading-8 text-muted">{t.investor.text}</p>
        <ul className="grid gap-3">
          {t.investor.points.map((point) => (
            <li className="flex gap-3 text-bone/88" key={point}>
              <span className="mt-2 h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
              <span className="leading-7">{point}</span>
            </li>
          ))}
        </ul>
        <a
          className="w-fit rounded-xl bg-gold px-5 py-4 text-sm font-black text-obsidian transition hover:bg-amber"
          href="#contact"
        >
          {t.investor.cta}
        </a>
      </div>
    </div>
  );
}
