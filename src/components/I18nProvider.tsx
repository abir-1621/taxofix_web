"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

import { STORAGE_KEY, translations, type TranslationKey } from "@/lib/i18n";
import type { Language } from "@/lib/types";

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const LANGUAGE_EVENT = "taxofix-language-change";

const getSavedLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "bn" ? "bn" : "en";
};

const getDefaultLanguage = (): Language => "en";

const subscribeToLanguage = (callback: () => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", callback);
  window.addEventListener(LANGUAGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANGUAGE_EVENT, callback);
  };
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore<Language>(subscribeToLanguage, getSavedLanguage, getDefaultLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<I18nContextValue>(() => {
    const setLanguage = (nextLanguage: Language) => {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      window.dispatchEvent(new Event(LANGUAGE_EVENT));
      document.documentElement.lang = nextLanguage;
    };

    return {
      language,
      setLanguage,
      t: (key) => translations[language][key] ?? translations.en[key],
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
