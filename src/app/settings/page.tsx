"use client";

import { AppShell } from "@/components/AppShell";
import { useI18n } from "@/components/I18nProvider";
import { LanguageToggle } from "@/components/LanguageToggle";
import { PageHeader, PageHeaderPill } from "@/components/PageHeader";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  const { t } = useI18n();

  return (
    <AppShell>
      <PageHeader eyebrow={t("workspaceControls")} title={t("settings")} description={t("pageSettingsDescription")}>
        <PageHeaderPill>{t("firebaseLater")}</PageHeaderPill>
        <PageHeaderPill className="border-[#006A4E]/20 bg-[#006A4E]/10 text-[#006A4E]">{t("languageMenu")}</PageHeaderPill>
      </PageHeader>
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
