"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TranslationSchema } from "./types";
import { translations } from "./translations";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "maison_de_vi_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (savedLang && (savedLang === "en" || savedLang === "fr" || savedLang === "vi")) {
          return savedLang;
        }
      } catch {
        // ignore
      }
    }
    return "en";
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const t = translations[language] || translations.en;

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: translations.en,
    };
  }
  return context;
}
