"use client";

import { AppShell } from "@/components/AppShell";
import { useI18n } from "@/components/I18nProvider";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  const { t } = useI18n();

  return (
    <AppShell>
      <h1 className="mb-4 text-3xl font-bold text-[#0F172A]">{t("settings")}</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle>{t("workspaceSettings")}</CardTitle>
          <CardDescription className="mt-1">{t("workspaceSettingsCopy")}</CardDescription>
        </Card>
        <Card>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <CardTitle>{t("localizationSettings")}</CardTitle>
              <CardDescription className="mt-1">{t("localizationSettingsCopy")}</CardDescription>
            </div>
            <LanguageToggle />
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
