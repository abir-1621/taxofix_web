"use client";

import { Handshake } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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
          <Select className="mt-1 normal-case">
            {taxCases.map((taxCase) => (
              <option key={taxCase.id}>{taxCase.title}</option>
            ))}
          </Select>
        </label>
        <label className="text-xs font-bold uppercase text-slate-500">
          {t("partnerFirm")}
          <Select className="mt-1 normal-case">
            {approvedPartners.map((partner) => (
              <option key={partner}>{partner}</option>
            ))}
          </Select>
        </label>
        <label className="text-xs font-bold uppercase text-slate-500">
          {t("accessLevel")}
          <Select className="mt-1 normal-case">
            {accessLevels.map((level) => (
              <option key={level}>{t(level)}</option>
            ))}
          </Select>
        </label>
        <label className="text-xs font-bold uppercase text-slate-500">
          {t("scopeOfWork")}
          <Textarea className="mt-1 normal-case" defaultValue="Prepare VAT reconciliation schedules and submit work back for primary firm review." />
        </label>
        <Button>
          <Handshake className="h-4 w-4" /> {t("assignCase")}
        </Button>
      </div>
    </Card>
  );
}
