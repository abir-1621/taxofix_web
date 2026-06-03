"use client";

import { FileUp, UploadCloud } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

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
          <select className="mt-1 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold normal-case text-slate-700">
            {documentCategories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-bold uppercase text-slate-500">
          {t("selectCaseOrPeriod")}
          <select className="mt-1 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold normal-case text-slate-700">
            {workflowTargets.map((target) => (
              <option key={target}>{target}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-4 rounded-2xl border border-dashed border-[#006A4E]/30 bg-[#006A4E]/5 p-6 text-center">
        <UploadCloud className="mx-auto h-8 w-8 text-[#006A4E]" />
        <p className="mt-3 text-sm font-bold text-[#0F172A]">{t("dragDropCopy")}</p>
        <Button className="mt-4">
          <FileUp className="mr-2 h-4 w-4" /> {t("uploadFile")}
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
