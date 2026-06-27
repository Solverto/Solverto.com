import type { IconName } from "./Icons";
import { Icon } from "./Icons";

export function ImageCard({
  src,
  alt,
  icon = "cube",
  label
}: {
  src?: string;
  alt: string;
  icon?: IconName;
  label: string;
}) {
  return (
    <figure className="glass-panel reveal overflow-hidden rounded-2xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-panel">
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition duration-500 hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(246,157,9,0.3),transparent_32%),linear-gradient(135deg,#1b2129,#090909)]">
            <Icon name={icon} className="h-16 w-16 text-gold" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/72 via-transparent to-transparent" />
      </div>
      <figcaption className="px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-gold">
        {label}
      </figcaption>
    </figure>
  );
}
