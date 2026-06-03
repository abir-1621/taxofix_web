"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building,
  CheckCircle2,
  CircleCheck,
  FileLock2,
  FileSpreadsheet,
  Languages,
  Landmark,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";

import { LanguageToggle } from "@/components/LanguageToggle";
import { Reveal } from "@/components/Reveal";
import { TaxHero3D } from "@/components/TaxHero3D";
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/components/I18nProvider";
import type { TranslationKey } from "@/lib/i18n";

const sections: { titleKey: TranslationKey; icon: typeof CircleCheck; descriptionKey: TranslationKey }[] = [
  { titleKey: "howItWorks", icon: CircleCheck, descriptionKey: "howItWorksCopy" },
  { titleKey: "incomeTax", icon: Landmark, descriptionKey: "incomeTaxCopy" },
  { titleKey: "vatReturnCard", icon: ReceiptText, descriptionKey: "vatReturnCopy" },
  { titleKey: "companyReturn", icon: Building, descriptionKey: "companyReturnCopy" },
  { titleKey: "partnerSupport", icon: Briefcase, descriptionKey: "partnerSupportCopy" },
  { titleKey: "security", icon: FileLock2, descriptionKey: "securityCopy" },
  { titleKey: "bilingualSupport", icon: Languages, descriptionKey: "bilingualSupportCopy" },
  { titleKey: "pricingPlaceholder", icon: FileSpreadsheet, descriptionKey: "pricingPlaceholderCopy" },
];

const workflowSteps: TranslationKey[] = [
  "workflowStepUpload",
  "workflowStepReview",
  "workflowStepPrepare",
  "workflowStepSubmit",
  "workflowStepArchive",
];

const trustStats: TranslationKey[] = ["trustStatClients", "trustStatReviews", "trustStatSubmissions"];

export function LandingPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FAFC] text-[#0F172A]">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-2 rounded-lg text-lg font-black tracking-tight text-[#0F172A] outline-none ring-[#006A4E] focus-visible:ring-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#006A4E] to-emerald-600 text-white shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </span>
            {t("brand")}
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex" aria-label="Landing page">
            <a className="rounded-md outline-none hover:text-[#006A4E] focus-visible:ring-2 focus-visible:ring-[#006A4E]" href="#workflow">
              {t("landingNavWorkflow")}
            </a>
            <a className="rounded-md outline-none hover:text-[#006A4E] focus-visible:ring-2 focus-visible:ring-[#006A4E]" href="#modules">
              {t("landingNavModules")}
            </a>
            <a className="rounded-md outline-none hover:text-[#006A4E] focus-visible:ring-2 focus-visible:ring-[#006A4E]" href="#security">
              {t("landingNavSecurity")}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Link href="/dashboard" className="hidden sm:block">
              <Button variant="outline">{t("login")}</Button>
            </Link>
            <Link href="/register" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-[#006A4E] to-emerald-600">{t("register")}</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(0,106,78,0.16),transparent_36%),radial-gradient(circle_at_84%_10%,rgba(15,23,42,0.12),transparent_34%),linear-gradient(180deg,#F8FAFC_0%,#ffffff_58%,#F8FAFC_100%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 md:px-6 md:py-16 lg:min-h-[720px] lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <p className="mb-5 inline-flex rounded-full border border-[#006A4E]/20 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-wide text-[#006A4E] shadow-sm">
                {t("heroKicker")}
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-[#0F172A] md:text-6xl lg:text-7xl">
                {t("heroTitleLead")}{" "}
                <span className="bg-gradient-to-r from-[#006A4E] to-emerald-600 bg-clip-text text-transparent">
                  {t("heroTitleHighlight")}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">{t("heroSubtitle")}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-[#006A4E] to-emerald-600 shadow-md shadow-[#006A4E]/20">
                    {t("ctaPrimary")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline" className="border-[#E11D48]/30 text-[#0F172A] hover:bg-[#E11D48]/5">
                    {t("ctaSecondary")}
                  </Button>
                </Link>
              </div>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {trustStats.map((stat) => (
                  <div key={stat} className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm backdrop-blur">
                    <CheckCircle2 className="mb-2 h-4 w-4 text-[#006A4E]" />
                    {t(stat)}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <TaxHero3D />
            </Reveal>
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
              <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-black uppercase text-[#006A4E]">{t("landingNavWorkflow")}</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0F172A] md:text-3xl">{t("howItWorks")}</h2>
                </div>
                <CardDescription className="max-w-2xl">{t("howItWorksCopy")}</CardDescription>
              </div>
              <div className="grid gap-3 md:grid-cols-5">
                {workflowSteps.map((step, index) => (
                  <Reveal key={step} delayMs={index * 70}>
                    <div className="h-full rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4">
                      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#006A4E] to-emerald-600 text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <p className="text-sm font-black text-[#0F172A]">{t(step)}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="modules" className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Reveal key={section.titleKey} delayMs={index * 55}>
                  <article
                    id={section.titleKey === "security" ? "security" : undefined}
                    className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#006A4E]/10 text-[#006A4E] transition group-hover:bg-[#006A4E] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <CardTitle>{t(section.titleKey)}</CardTitle>
                    <CardDescription className="mt-2">{t(section.descriptionKey)}</CardDescription>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#006A4E] via-emerald-700 to-[#0F172A] p-6 text-white shadow-[0_22px_70px_rgba(15,23,42,0.28)] md:p-10">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-24 left-12 h-72 w-72 rounded-full bg-[#E11D48]/20 blur-3xl" aria-hidden="true" />
              <div className="relative max-w-3xl">
                <h2 className="text-3xl font-black tracking-tight md:text-5xl">{t("ctaTitle")}</h2>
                <p className="mt-4 text-base leading-7 text-emerald-50">{t("ctaCopy")}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/register">
                    <Button className="bg-white text-[#006A4E] hover:bg-emerald-50">{t("getStarted")}</Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/15">
                      {t("login")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <Link href="/" className="flex items-center gap-2 font-black text-[#0F172A]">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#006A4E] text-white">
              <ShieldCheck className="h-4 w-4" />
            </span>
            {t("brand")}
          </Link>
          <p>{t("footerCopyright")}</p>
          <div className="flex gap-4 font-semibold">
            <a href="#modules" className="hover:text-[#006A4E]">
              {t("footerProduct")}
            </a>
            <a href="#security" className="hover:text-[#006A4E]">
              {t("footerSecurity")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
