"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { type Language, translations } from "@/lib/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const isLanguage = (value: string | null): value is Language =>
  value === "pl" || value === "en" || value === "de" || value === "es";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pl");

  useEffect(() => {
    const saved = window.localStorage.getItem("solverto-language");
    if (isLanguage(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("solverto-language", nextLanguage);
  };

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.seo.title;

    const description = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (description) {
      description.content = t.seo.description;
    }
  }, [language, t.seo.description, t.seo.title]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t
    }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
