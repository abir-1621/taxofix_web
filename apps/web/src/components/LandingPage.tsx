"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building,
  CircleCheck,
  FileLock2,
  FileSpreadsheet,
  Languages,
  Landmark,
  ReceiptText,
} from "lucide-react";
import { useEffect, useState } from "react";

import { LanguageToggle } from "@/components/LanguageToggle";
import { TaxHero3D } from "@/components/TaxHero3D";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { landingCopy } from "@/lib/i18n";
import type { Language } from "@/lib/types";

const sections = [
  { title: "How it works", icon: CircleCheck, description: "Intake, assignment, preparation, review, and filing in one workflow." },
  { title: "Income Tax", icon: Landmark, description: "Track individual and corporate return readiness with structured checklists." },
  { title: "VAT Return", icon: ReceiptText, description: "Monthly VAT periods, reconciliations, and due-date visibility." },
  { title: "Company Return", icon: Building, description: "Company-level filing packs with controlled review stages." },
  { title: "Partner Firm Support", icon: Briefcase, description: "Securely route tasks to approved partner firms when capacity spikes." },
  { title: "Security", icon: FileLock2, description: "Role-aware access and file handling built for sensitive financial records." },
  { title: "Bilingual Support", icon: Languages, description: "Localization-ready UI for English and Bangla experiences." },
  { title: "Pricing Placeholder", icon: FileSpreadsheet, description: "Tiered SaaS pricing model placeholder for future package definition." },
];

const getSavedLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem("taxofix-lang");
  return saved === "bn" ? "bn" : "en";
};

export function LandingPage() {
  const [language, setLanguage] = useState<Language>(getSavedLanguage);

  useEffect(() => {
    const onChange = (event: Event) => {
      const nextLanguage = (event as CustomEvent<Language>).detail;
      if (nextLanguage === "en" || nextLanguage === "bn") {
        setLanguage(nextLanguage);
      }
    };

    window.addEventListener("taxofix-language-change", onChange);
    return () => window.removeEventListener("taxofix-language-change", onChange);
  }, []);

  const copy = landingCopy[language];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <p className="text-lg font-semibold text-[#0F172A]">TaxoFix BD</p>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-12 px-4 py-10 md:px-6">
        <section className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h1 className="text-4xl font-bold leading-tight text-[#0F172A]">{copy.heroTitle}</h1>
            <p className="mt-3 text-lg text-slate-600">{copy.heroSubtitle}</p>
            <p className="mt-3 text-lg text-[#006A4E]">বাংলাদেশের আয়কর ও ভ্যাট রিটার্ন প্রস্তুতি এখন আরও সহজ।</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/register">
                <Button size="lg">{copy.ctaPrimary}</Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline">
                  {copy.ctaSecondary}
                </Button>
              </Link>
            </div>
          </motion.div>
          <TaxHero3D />
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Card key={section.title}>
                <Icon className="mb-2 h-5 w-5 text-[#006A4E]" />
                <CardTitle>{section.title}</CardTitle>
                <CardDescription className="mt-1">{section.description}</CardDescription>
              </Card>
            );
          })}
        </section>

        <section className="rounded-xl bg-[#0F172A] p-8 text-white">
          <h2 className="text-2xl font-semibold">CTA</h2>
          <p className="mt-2 text-slate-300">Move your Bangladesh tax and VAT practice to a modern operating workflow.</p>
          <Link href="/register" className="mt-5 inline-block">
            <Button variant="default">Get Started</Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
