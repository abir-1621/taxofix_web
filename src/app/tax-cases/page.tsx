"use client";

import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { TaxCaseTable } from "@/components/TaxCaseTable";
import { taxCases } from "@/lib/mock-data";

export default function TaxCasesPage() {
  const { t } = useI18n();

  return (
    <FirmPortalShell>
      <h1 className="mb-4 text-3xl font-bold text-[#0F172A]">{t("taxCases")}</h1>
      <TaxCaseTable rows={taxCases} />
    </FirmPortalShell>
  );
}
