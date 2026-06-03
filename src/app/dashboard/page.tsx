import { ClientPortalShell } from "@/components/ClientPortalShell";
import { FileReviewPanel } from "@/components/FileReviewPanel";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { MetricCard } from "@/components/MetricCard";
import { PartnerAssignmentPanel } from "@/components/PartnerAssignmentPanel";
import { PermissionGate } from "@/components/PermissionGate";
import { RoleGuard } from "@/components/RoleGuard";
import { dashboardMetrics, reviewFiles, usersByRole } from "@/lib/mock-data";
import type { Role } from "@/lib/types";

const roleLabel: Record<Role, string> = {
  firm_admin: "Firm Admin Dashboard",
  accountant: "Accountant Dashboard",
  document_checker: "Document Checker Dashboard",
  partner_firm: "Partner Firm Dashboard",
  client: "Client Dashboard",
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const query = await searchParams;
  const role = (query.role as Role) || "firm_admin";
  const user = usersByRole[role] ?? usersByRole.firm_admin;

  const shell = user.role === "client" ? ClientPortalShell : FirmPortalShell;
  const Shell = shell;

  return (
    <Shell>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#0F172A]">{roleLabel[user.role]}</h1>
        <p className="text-sm text-slate-600">Signed in as {user.name}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <PermissionGate permissions={user.permissions} needs="files.review" fallback={<div />}>
          <FileReviewPanel files={reviewFiles} />
        </PermissionGate>

        <RoleGuard role={user.role} allow={["firm_admin", "partner_firm"]} fallback={<div />}>
          <PartnerAssignmentPanel />
        </RoleGuard>
      </div>
    </Shell>
  );
}
