"use client";

import { useI18n } from "@/components/I18nProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { VatPeriod } from "@/lib/types";

export function VATPeriodCard({ period }: { period: VatPeriod }) {
  const { language, t } = useI18n();

  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <div>
          <CardTitle>{language === "bn" && period.monthBn ? period.monthBn : period.month}</CardTitle>
          <CardDescription>{t("due")}: {period.dueDate}</CardDescription>
        </div>
        <StatusBadge status={period.status} />
      </div>
    </Card>
  );
}
