"use client";

import { PartnerAssignmentPanel } from "@/components/PartnerAssignmentPanel";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { Card, CardTitle } from "@/components/ui/card";
import { approvedPartners } from "@/lib/mock-data";

export default function PartnerFirmsPage() {
  const { t } = useI18n();

  return (
    <FirmPortalShell>
      <h1 className="mb-4 text-3xl font-bold text-[#0F172A]">{t("partnerFirms")}</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle className="mb-3">{t("approvedPartners")}</CardTitle>
          <ul className="space-y-2 text-sm text-slate-700">
            {approvedPartners.map((partner) => (
              <li key={partner} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                {partner}
              </li>
            ))}
          </ul>
        </Card>
        <PartnerAssignmentPanel />
      </div>
    </FirmPortalShell>
  );
}
