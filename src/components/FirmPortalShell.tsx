"use client";

import { AppShell } from "@/components/AppShell";
import { useI18n } from "@/components/I18nProvider";

export function FirmPortalShell({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();

  return (
    <AppShell portalLabel={t("firmPortal")}>{children}</AppShell>
  );
}
