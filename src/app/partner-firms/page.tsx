"use client";

import { UserPlus } from "lucide-react";

import { PartnerAssignmentPanel } from "@/components/PartnerAssignmentPanel";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { PageHeader, PageHeaderPill } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui/table";
import { partnerFirms } from "@/lib/mock-data";

export default function PartnerFirmsPage() {
  const { t } = useI18n();

  return (
    <FirmPortalShell>
      <PageHeader
        eyebrow={t("partnerCapacity")}
        title={t("partnerFirms")}
        description={t("pagePartnersDescription")}
        actions={
          <Button type="button">
            <UserPlus className="h-4 w-4" />
            {t("invitePartner")}
          </Button>
        }
      >
        <PageHeaderPill>{partnerFirms.length} {t("partnerFirms")}</PageHeaderPill>
        <PageHeaderPill className="border-[#006A4E]/20 bg-[#006A4E]/10 text-[#006A4E]">{t("limitedPartnerAccess")}</PageHeaderPill>
      </PageHeader>
      <div className="grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="overflow-hidden p-0">
          <div className="border-b border-slate-100 px-5 py-4">
            <CardTitle>{t("approvedPartners")}</CardTitle>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>{t("partnerFirm")}</TableHeaderCell>
                  <TableHeaderCell>{t("partnerStatus")}</TableHeaderCell>
                  <TableHeaderCell>{t("contactPerson")}</TableHeaderCell>
                  <TableHeaderCell>{t("serviceScope")}</TableHeaderCell>
                  <TableHeaderCell>{t("assignedCasesCount")}</TableHeaderCell>
                  <TableHeaderCell>{t("revisionRate")}</TableHeaderCell>
                  <TableHeaderCell>{t("workload")}</TableHeaderCell>
                  <TableHeaderCell>{t("action")}</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {partnerFirms.map((partner) => (
                  <TableRow key={partner.id}>
                    <TableCell className="font-semibold">{partner.name}</TableCell>
                    <TableCell><StatusBadge status={partner.status} /></TableCell>
                    <TableCell>{partner.contactPerson}</TableCell>
                    <TableCell className="min-w-60">{partner.serviceScope}</TableCell>
                    <TableCell>{partner.assignedCasesCount}</TableCell>
                    <TableCell>{partner.revisionRate}</TableCell>
                    <TableCell>{partner.workload}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">{t("viewDetails")}</Button>
                        {partner.status === "pending" ? <Button size="sm">{t("approve")}</Button> : <Button size="sm" variant="outline">{t("suspend")}</Button>}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
        <div className="space-y-4">
          <PartnerAssignmentPanel />
          <Card>
          <CardTitle className="mb-3">{t("approvedPartners")}</CardTitle>
          <ul className="space-y-2 text-sm text-slate-700">
            {partnerFirms.filter((partner) => partner.status === "approved").map((partner) => (
              <li key={partner.id} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                {partner.name}
              </li>
            ))}
          </ul>
          </Card>
        </div>
      </div>
    </FirmPortalShell>
  );
}
