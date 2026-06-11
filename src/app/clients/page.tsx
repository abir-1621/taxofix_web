"use client";

import { Plus } from "lucide-react";

import { ClientTable } from "@/components/ClientTable";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { PageHeader, PageHeaderPill } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/mock-data";

export default function ClientsPage() {
  const { t } = useI18n();

  return (
    <FirmPortalShell>
      <PageHeader
        eyebrow={t("clientPortfolio")}
        title={t("clients")}
        description={t("pageClientsDescription")}
        actions={
          <Button type="button">
            <Plus className="h-4 w-4" />
            {t("addClient")}
          </Button>
        }
      >
        <PageHeaderPill>{clients.length} {t("clients")}</PageHeaderPill>
        <PageHeaderPill className="border-[#006A4E]/20 bg-[#006A4E]/10 text-[#006A4E]">{t("primaryFirmControlled")}</PageHeaderPill>
      </PageHeader>
      <ClientTable rows={clients} />
    </FirmPortalShell>
  );
}
