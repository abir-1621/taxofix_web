"use client";

import { FilePlus2 } from "lucide-react";

import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { PageHeader, PageHeaderPill } from "@/components/PageHeader";
import { TaxCaseTable } from "@/components/TaxCaseTable";
import { Button } from "@/components/ui/button";
import { taxCases } from "@/lib/mock-data";

export default function TaxCasesPage() {
  const { t } = useI18n();

  return (
    <FirmPortalShell>
      <PageHeader
        eyebrow={t("caseQueue")}
        title={t("taxCases")}
        description={t("pageTaxCasesDescription")}
        actions={
          <Button type="button">
            <FilePlus2 className="h-4 w-4" />
            {t("createTaxCase")}
          </Button>
        }
      >
        <PageHeaderPill>{taxCases.length} {t("activeCases")}</PageHeaderPill>
        <PageHeaderPill className="border-[#E11D48]/20 bg-[#E11D48]/10 text-[#E11D48]">2 {t("deadline")}</PageHeaderPill>
      </PageHeader>
      <TaxCaseTable rows={taxCases} />
    </FirmPortalShell>
  );
}
