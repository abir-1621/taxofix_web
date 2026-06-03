"use client";

import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { VATPeriodCard } from "@/components/VATPeriodCard";
import { vatPeriods } from "@/lib/mock-data";

export default function VatPage() {
  const { t } = useI18n();

  return (
    <FirmPortalShell>
      <h1 className="mb-4 text-3xl font-bold text-[#0F172A]">{t("vatReturn")}</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {vatPeriods.map((period) => (
          <VATPeriodCard key={period.month} period={period} />
        ))}
      </div>
    </FirmPortalShell>
  );
}
