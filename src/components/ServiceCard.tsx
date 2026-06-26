import type { IconName } from "./Icons";
import { Icon } from "./Icons";

export function ServiceCard({
  title,
  text,
  icon
}: {
  title: string;
  text: string;
  icon: IconName;
}) {
  return (
    <article className="glass-panel reveal group grid min-h-64 gap-5 rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-glow">
      <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-obsidian">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <div className="grid gap-3">
        <h3 className="text-xl font-black text-bone">{title}</h3>
        <p className="leading-7 text-muted">{text}</p>
      </div>
    </article>
  );
}
