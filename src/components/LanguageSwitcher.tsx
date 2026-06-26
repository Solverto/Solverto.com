"use client";

import { languages } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex rounded-lg border border-white/10 bg-white/[0.04] p-1"
      aria-label="Language switcher"
    >
      {languages.map((item) => (
        <button
          className={`min-h-9 rounded-md px-2.5 text-xs font-black transition ${
            language === item.code
              ? "bg-gold text-obsidian"
              : "text-muted hover:bg-white/10 hover:text-bone"
          }`}
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code)}
          aria-pressed={language === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
