"use client";

import { AppShell } from "@/components/AppShell";
import { useI18n } from "@/components/I18nProvider";

export function ClientPortalShell({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();

  return <AppShell portalLabel={t("clientPortal")}>{children}</AppShell>;
}
