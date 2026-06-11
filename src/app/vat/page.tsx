"use client";

import { CalendarPlus } from "lucide-react";

import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { PageHeader, PageHeaderPill } from "@/components/PageHeader";
import { VATPeriodCard } from "@/components/VATPeriodCard";
import { Button } from "@/components/ui/button";
import { vatPeriods } from "@/lib/mock-data";

export default function VatPage() {
  const { t } = useI18n();

  return (
    <FirmPortalShell>
      <PageHeader
        eyebrow={t("vatPeriodQueue")}
        title={t("vatReturn")}
        description={t("pageVatDescription")}
        actions={
          <Button type="button">
            <CalendarPlus className="h-4 w-4" />
            {t("newVatPeriod")}
          </Button>
        }
      >
        <PageHeaderPill>{vatPeriods.length} {t("vatCycles")}</PageHeaderPill>
        <PageHeaderPill className="border-[#006A4E]/20 bg-[#006A4E]/10 text-[#006A4E]">Mushak 9.1</PageHeaderPill>
      </PageHeader>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {vatPeriods.map((period) => (
          <VATPeriodCard key={period.month} period={period} />
        ))}
      </div>
    </FirmPortalShell>
  );
}
