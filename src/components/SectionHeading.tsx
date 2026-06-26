export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`reveal mb-9 grid gap-4 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-black leading-tight text-bone sm:text-5xl">
        {title}
      </h2>
      {text ? <p className="text-pretty text-base leading-8 text-muted sm:text-lg">{text}</p> : null}
    </div>
  );
}
