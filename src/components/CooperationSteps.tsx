import { useLanguage } from "./LanguageProvider";

export function CooperationSteps() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-5 lg:grid-cols-6">
      {t.cooperation.steps.map(([title, text], index) => (
        <article className="glass-panel reveal rounded-2xl p-5" key={title}>
          <span className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-gold text-sm font-black text-obsidian">
            {index + 1}
          </span>
          <h3 className="mb-3 text-lg font-black text-bone">{title}</h3>
          <p className="text-sm leading-7 text-muted">{text}</p>
        </article>
      ))}
    </div>
  );
}
