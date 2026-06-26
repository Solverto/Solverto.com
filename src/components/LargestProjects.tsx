import type { LargestReference } from "@/data/projects";
import type { Language } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

const descriptionKey = {
  pl: "descriptionPL",
  en: "descriptionEN",
  de: "descriptionDE",
  es: "descriptionES"
} as const;

export function LargestProjects({
  references,
  language
}: {
  references: LargestReference[];
  language: Language;
}) {
  const { t } = useLanguage();

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {references.map((reference) => (
        <article className="glass-panel reveal rounded-2xl p-6" key={reference.title}>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-gold">
            {reference.client}
          </p>
          <h3 className="mb-3 text-2xl font-black text-bone">{reference.title}</h3>
          <p className="leading-7 text-muted">{reference[descriptionKey[language]]}</p>
        </article>
      ))}
      <p className="reveal rounded-2xl border border-gold/25 bg-gold/10 p-5 text-sm leading-7 text-bone/82 lg:col-span-3">
        {t.largest.disclaimer}
      </p>
    </div>
  );
}
