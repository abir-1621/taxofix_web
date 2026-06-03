"use client";

import { CalendarDays, CheckCircle2, Clock3, FileCheck2, FileText, Hash, ShieldCheck } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";

const chips = [
  { key: "heroChipVatPeriod", icon: CalendarDays, className: "left-2 top-12 md:left-4", transform: "translateZ(82px)", duration: "5.8s" },
  { key: "heroChipDeadline", icon: Clock3, className: "right-0 top-28 md:right-4", transform: "translateZ(64px)", duration: "6.4s" },
  { key: "heroChipCase", icon: Hash, className: "bottom-16 left-0 md:left-8", transform: "translateZ(92px)", duration: "5.5s" },
  { key: "heroChipPartner", icon: ShieldCheck, className: "bottom-6 right-2 md:right-12", transform: "translateZ(56px)", duration: "6.8s" },
] as const;

export function TaxHero3D() {
  const { t } = useI18n();

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/70 bg-white/55 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur md:min-h-[520px] md:p-8">
      <div className="absolute -left-12 top-8 h-56 w-56 rounded-full bg-[#006A4E]/20 blur-3xl" style={{ animation: "tf-blob 12s ease-in-out infinite" }} />
      <div className="absolute -right-14 bottom-8 h-64 w-64 rounded-full bg-[#0F172A]/15 blur-3xl" style={{ animation: "tf-blob 14s ease-in-out infinite reverse" }} />
      <div className="absolute right-8 top-8 rounded-full border border-[#006A4E]/15 px-6 py-5 text-center text-xs font-black uppercase tracking-[0.24em] text-[#006A4E]/20">
        {t("heroSeal")}
      </div>

      <div className="relative flex h-full min-h-[390px] items-center justify-center" style={{ perspective: "1400px" }}>
        <div className="relative h-[360px] w-full max-w-[460px] md:h-[430px]" style={{ transformStyle: "preserve-3d", transform: "rotateX(12deg) rotateY(-16deg)" }}>
          <div className="absolute left-[11%] top-14 w-[78%] max-w-[360px] rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl md:left-[10%] md:top-16 md:p-6" style={{ animation: "tf-float-slow 7s ease-in-out infinite" }}>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#006A4E]/10 text-[#006A4E]">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black tracking-tight text-[#0F172A]">{t("heroDocTitle")}</h3>
                <p className="text-xs font-semibold text-slate-500">{t("heroDocSubtitle")}</p>
              </div>
              <div className="relative h-8 w-32">
                <span className="absolute inset-0 inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-3 text-xs font-bold text-slate-600" style={{ animation: "tf-doc-cycle 9s linear infinite" }}>
                  {t("heroStatusDraft")}
                </span>
                <span className="absolute inset-0 inline-flex items-center justify-center rounded-full border border-amber-200 bg-amber-50 px-3 text-xs font-bold text-amber-700 opacity-0" style={{ animation: "tf-doc-cycle 9s linear infinite", animationDelay: "3s" }}>
                  {t("heroStatusReview")}
                </span>
                <span className="absolute inset-0 inline-flex items-center justify-center gap-1 rounded-full border border-[#006A4E]/20 bg-[#006A4E]/10 px-3 text-xs font-bold text-[#006A4E] opacity-0" style={{ animation: "tf-doc-cycle 9s linear infinite", animationDelay: "6s" }}>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {t("heroStatusSubmitted")}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {[
                [t("heroDocTaxPeriod"), t("heroDocTaxPeriodValue")],
                [t("heroDocNetPayable"), t("heroDocNetPayableValue")],
                [t("heroDocReviewer"), t("heroDocReviewerValue")],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">
                  <span className="text-xs font-semibold text-slate-500">{label}</span>
                  <span className="text-sm font-black text-[#0F172A]">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-5 gap-2" aria-hidden="true">
              {[72, 54, 88, 64, 78].map((height, index) => (
                <div key={height} className="flex h-16 items-end rounded-lg bg-[#006A4E]/5 p-1">
                  <div className="w-full rounded-md bg-gradient-to-t from-[#006A4E] to-emerald-400" style={{ height: `${height}%`, opacity: 0.78 + index * 0.03 }} />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 top-[48%] h-40 w-40 -translate-x-1/2 rounded-full border border-[#006A4E]/10 bg-[#006A4E]/5" style={{ transform: "translate3d(-50%, 0, -80px)" }} aria-hidden="true" />

          {chips.map((chip, index) => {
            const Icon = chip.icon;
            return (
              <div key={chip.key} className={`absolute ${chip.className}`} style={{ transform: chip.transform }}>
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 px-3 py-2 text-xs font-bold text-slate-700 shadow-lg backdrop-blur" style={{ animation: `tf-float ${chip.duration} ease-in-out ${index * 0.3}s infinite` }}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#006A4E]/10 text-[#006A4E]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="max-w-[9rem] leading-4">{t(chip.key)}</span>
                </div>
              </div>
            );
          })}

          <div className="absolute bottom-8 left-1/2 w-[68%] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur" style={{ transform: "translate3d(-50%, 0, 36px)" }}>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E11D48]/10 text-[#E11D48]">
                <FileCheck2 className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="h-2 w-2/3 rounded-full bg-slate-200" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-[#006A4E]/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
