"use client";

import { notFound, useParams } from "next/navigation";

import { ChecklistCard } from "@/components/ChecklistCard";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { clients, taxCases } from "@/lib/mock-data";

export default function ClientDetailPage() {
  const params = useParams<{ id: string }>();
  const { language, t } = useI18n();
  const client = clients.find((entry) => entry.id === params.id);

  if (!client) {
    notFound();
  }

  const relatedCases = taxCases.filter((taxCase) => taxCase.clientId === client.id);

  return (
    <FirmPortalShell>
      <Card>
        <CardTitle>{client.name}</CardTitle>
        <CardDescription className="mt-1">
          {t(client.type)} {t("clientProfile")}
        </CardDescription>
        <div className="mt-3">
          <StatusBadge status={client.status} />
        </div>
      </Card>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle className="mb-3">{t("relatedTaxCases")}</CardTitle>
          <ul className="space-y-2 text-sm text-slate-700">
            {relatedCases.map((taxCase) => (
              <li key={taxCase.id} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                {language === "bn" && taxCase.titleBn ? taxCase.titleBn : taxCase.title}
              </li>
            ))}
          </ul>
        </Card>
        <ChecklistCard title={t("preparationChecklist")} items={[t("collectDocs"), t("runReconciliation"), t("internalReview"), t("clientSignOff")]} />
      </div>
    </FirmPortalShell>
  );
}
