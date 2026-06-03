"use client";

import { Languages } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { Language } from "@/lib/types";

const STORAGE_KEY = "taxofix-lang";

const getSavedLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "bn" ? "bn" : "en";
};

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>(getSavedLanguage);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new CustomEvent("taxofix-language-change", { detail: nextLanguage }));
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white p-1">
      <Languages className="ml-1 h-4 w-4 text-slate-500" />
      <Button size="sm" variant={language === "en" ? "default" : "ghost"} onClick={() => changeLanguage("en")}>
        EN
      </Button>
      <Button size="sm" variant={language === "bn" ? "default" : "ghost"} onClick={() => changeLanguage("bn")}>
        বাংলা
      </Button>
    </div>
  );
}
