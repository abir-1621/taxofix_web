"use client";

import { FileUp, UploadCloud } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";

const documentCategories = ["TIN Certificate", "Bank Statement", "Sales Register", "Purchase Register", "VAT Challan", "AIT/TDS Certificate"];
const workflowTargets = ["FY 2024 Corporate Return", "VAT Reconciliation - March 2026", "Individual Return"];

export function FileUploadCard() {
  const { t } = useI18n();

  return (
    <Card>
      <CardTitle className="mb-1">{t("uploadDocuments")}</CardTitle>
      <CardDescription className="mb-4">{t("uploadDocumentsCopy")}</CardDescription>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-xs font-bold uppercase text-slate-500">
          {t("documentCategory")}
          <Select className="mt-1 normal-case">
            {documentCategories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
        </label>
        <label className="text-xs font-bold uppercase text-slate-500">
          {t("selectCaseOrPeriod")}
          <Select className="mt-1 normal-case">
            {workflowTargets.map((target) => (
              <option key={target}>{target}</option>
            ))}
          </Select>
        </label>
      </div>
      <div className="mt-4 rounded-lg border border-dashed border-[#006A4E]/30 bg-[#006A4E]/5 p-6 text-center transition hover:border-[#006A4E]/50 hover:bg-[#006A4E]/10">
        <UploadCloud className="mx-auto h-8 w-8 text-[#006A4E]" />
        <p className="mt-3 text-sm font-bold text-[#0F172A]">{t("dragDropCopy")}</p>
        <Button className="mt-4">
          <FileUp className="h-4 w-4" /> {t("uploadFile")}
        </Button>
      </div>
      <div className="mt-4">
        <div className="mb-2 flex justify-between text-xs font-bold text-slate-500">
          <span>{t("uploadProgress")}</span>
          <span>64%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100">
          <div className="h-2 w-[64%] rounded-full bg-gradient-to-r from-[#006A4E] to-emerald-500" />
        </div>
      </div>
    </Card>
  );
}
