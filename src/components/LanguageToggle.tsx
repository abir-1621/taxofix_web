"use client";

import { Check, ChevronDown, Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useI18n } from "@/components/I18nProvider";
import type { Language } from "@/lib/types";

const languageOptions: { value: Language; labelKey: "languageEnglish" | "languageBangla" }[] = [
  { value: "en", labelKey: "languageEnglish" },
  { value: "bn", labelKey: "languageBangla" },
];

export function LanguageToggle() {
  const { language, setLanguage, t } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const chooseLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        aria-label={t("languageMenu")}
        aria-expanded={open}
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-black text-slate-700 shadow-sm outline-none ring-[#006A4E] transition hover:bg-slate-50 focus-visible:ring-2"
        onClick={() => setOpen((value) => !value)}
      >
        <Languages className="h-4 w-4 text-[#006A4E]" />
        <span>{language === "en" ? t("languageEnglish") : t("languageBangla")}</span>
        <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
      </button>

      {open ? (
        <div className="absolute right-0 z-40 mt-2 min-w-36 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
          {languageOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-700 outline-none hover:bg-[#006A4E]/10 hover:text-[#006A4E] focus-visible:bg-[#006A4E]/10"
              onClick={() => chooseLanguage(option.value)}
            >
              {t(option.labelKey)}
              {language === option.value ? <Check className="h-4 w-4 text-[#006A4E]" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
