import type { Language } from "@/lib/types";

type LandingCopy = {
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export const landingCopy: Record<Language, LandingCopy> = {
  en: {
    heroTitle: "Tax and VAT return preparation, organized for Bangladesh.",
    heroSubtitle:
      "TaxoFix BD helps one core tax practice team run compliant, fast, and secure workflows.",
    ctaPrimary: "Start with TaxoFix",
    ctaSecondary: "Explore Dashboard",
  },
  bn: {
    heroTitle: "বাংলাদেশের আয়কর ও ভ্যাট রিটার্ন প্রস্তুতি এখন আরও সহজ।",
    heroSubtitle:
      "TaxoFix BD কর ও ভ্যাট ফার্মের টিমকে দ্রুত, সুশৃঙ্খল এবং নিরাপদভাবে কাজ করতে সাহায্য করে।",
    ctaPrimary: "TaxoFix শুরু করুন",
    ctaSecondary: "ড্যাশবোর্ড দেখুন",
  },
};
