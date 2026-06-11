"use client";

import { ClipboardCheck, FileText, FolderCheck, Users } from "lucide-react";

import { ClientPortalShell } from "@/components/ClientPortalShell";
import { FileReviewPanel } from "@/components/FileReviewPanel";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { MetricCard } from "@/components/MetricCard";
import { useMockAuth } from "@/components/MockAuthProvider";
import { PageHeader, PageHeaderPill } from "@/components/PageHeader";
import { PartnerAssignmentPanel } from "@/components/PartnerAssignmentPanel";
import { PermissionGate } from "@/components/PermissionGate";
import { RoleGuard } from "@/components/RoleGuard";
import { Card, CardTitle } from "@/components/ui/card";
import { clientRoles, dashboardActivityByRole, dashboardByRole, reviewFiles, roleLabelKeys } from "@/lib/mock-data";

const metricIcons = [Users, FileText, ClipboardCheck, FolderCheck];

export default function DashboardPage() {
  const { t } = useI18n();
  const { currentRole, currentUser } = useMockAuth();
  const Shell = clientRoles.includes(currentRole) ? ClientPortalShell : FirmPortalShell;
  const metrics = dashboardByRole[currentRole];

  return (
    <Shell>
      <PageHeader
        eyebrow={t("overview")}
        title={`${t(roleLabelKeys[currentRole])} ${t("dashboard")}`}
        description={`${t("signedInAs")} ${currentUser.name}. ${t("pageDashboardDescription")}`}
      >
        <PageHeaderPill className="border-[#006A4E]/20 bg-[#006A4E]/10 text-[#006A4E]">{t("mockMode")}</PageHeaderPill>
        <PageHeaderPill>{t("primaryFirmControlled")}</PageHeaderPill>
      </PageHeader>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.titleKey} title={t(metric.titleKey)} value={metric.value} trend={t(metric.trendKey)} icon={metricIcons[index]} />
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle className="mb-4">{t("recentActivity")}</CardTitle>
          <div className="space-y-3">
            {dashboardActivityByRole[currentRole].map((item) => (
              <div key={item} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Card>

        <PermissionGate permissions={currentUser.permissions} needs="files.review" fallback={<div />}>
          <FileReviewPanel files={reviewFiles} />
        </PermissionGate>

        <RoleGuard role={currentRole} allow={["FIRM_OWNER", "FIRM_ADMIN", "TAX_MANAGER"]} fallback={<div />}>
          <PartnerAssignmentPanel />
        </RoleGuard>
      </div>
    </Shell>
  );
}
