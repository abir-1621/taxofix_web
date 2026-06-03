"use client";

import { useI18n } from "@/components/I18nProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { VatPeriod } from "@/lib/types";

export function VATPeriodCard({ period }: { period: VatPeriod }) {
  const { language, t } = useI18n();

  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <div>
          <CardTitle>{language === "bn" && period.monthBn ? period.monthBn : period.month}</CardTitle>
          <CardDescription>{period.clientName} · {t("due")}: {period.dueDate}</CardDescription>
        </div>
        <StatusBadge status={period.status} />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        {[
          [t("sales"), period.sales],
          [t("purchases"), period.purchases],
          [t("outputVat"), period.outputVat],
          [t("inputVat"), period.inputVat],
          [t("netPayable"), period.netPayable],
          [t("missingDocs"), String(period.missingDocuments)],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
            <p className="text-xs font-semibold text-slate-500">{label}</p>
            <p className="mt-1 font-bold text-[#0F172A]">{value}</p>
          </div>
        ))}
      </div>
      <Button className="mt-4 w-full" variant="outline">{t("viewDetails")}</Button>
    </Card>
  );
}
