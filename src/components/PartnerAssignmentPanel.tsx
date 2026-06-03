"use client";

import { Handshake } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { approvedPartners, taxCases } from "@/lib/mock-data";

const accessLevels = ["view_only", "document_check_only", "preparation_only", "preparation_and_review", "full_case_work"] as const;

export function PartnerAssignmentPanel() {
  const { t } = useI18n();

  return (
    <Card>
      <CardTitle className="mb-2">{t("partnerAssignment")}</CardTitle>
      <CardDescription className="mb-4">{t("partnerAssignmentCopy")}</CardDescription>
      <div className="grid gap-3">
        <label className="text-xs font-bold uppercase text-slate-500">
          {t("case")}
          <select className="mt-1 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold normal-case text-slate-700">
            {taxCases.map((taxCase) => (
              <option key={taxCase.id}>{taxCase.title}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-bold uppercase text-slate-500">
          {t("partnerFirm")}
          <select className="mt-1 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold normal-case text-slate-700">
            {approvedPartners.map((partner) => (
              <option key={partner}>{partner}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-bold uppercase text-slate-500">
          {t("accessLevel")}
          <select className="mt-1 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold normal-case text-slate-700">
            {accessLevels.map((level) => (
              <option key={level}>{t(level)}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-bold uppercase text-slate-500">
          {t("scopeOfWork")}
          <textarea className="mt-1 min-h-24 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm normal-case text-slate-700" defaultValue="Prepare VAT reconciliation schedules and submit work back for primary firm review." />
        </label>
        <Button>
          <Handshake className="mr-2 h-4 w-4" /> {t("assignCase")}
        </Button>
      </div>
    </Card>
  );
}
