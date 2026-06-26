import { useLanguage } from "./LanguageProvider";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-obsidian py-10">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr]">
        <div className="grid gap-4">
          <Logo />
          <p className="max-w-sm leading-7 text-muted">{t.footer.description}</p>
        </div>
        <FooterList
          title="Menu"
          items={[
            ["Services", "#services"],
            ["Architecture", "#architecture"],
            ["Games", "#games"],
            ["Portfolio", "#portfolio"]
          ]}
        />
        <FooterList
          title="Services"
          items={[
            ["3D production", "#services"],
            ["Realtime / VR / AR", "#services"],
            ["Metaverse", "#metaverse"],
            ["Animation", "#services"]
          ]}
        />
        <div className="grid gap-4">
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">
            {t.footer.ecosystem}
          </h2>
          <p className="text-sm leading-7 text-muted">
            Solverto Studio · Solverto Games · Solverto Group · realtime 3D · IP development
          </p>
          <p className="text-xs leading-6 text-muted">{t.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: Array<[string, string]> }) {
  return (
    <div className="grid content-start gap-3">
      <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">{title}</h2>
      {items.map(([label, href]) => (
        <a className="text-sm font-semibold text-muted transition hover:text-bone" href={href} key={label}>
          {label}
        </a>
      ))}
    </div>
  );
}
