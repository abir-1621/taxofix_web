"use client";

import { ClientTable } from "@/components/ClientTable";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { clients } from "@/lib/mock-data";

export default function ClientsPage() {
  const { t } = useI18n();

  return (
    <FirmPortalShell>
      <h1 className="mb-4 text-3xl font-bold text-[#0F172A]">{t("clients")}</h1>
      <ClientTable rows={clients} />
    </FirmPortalShell>
  );
}
