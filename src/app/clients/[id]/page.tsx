"use client";

import { notFound, useParams } from "next/navigation";
import { Building2, FileText, Mail, Phone, Users } from "lucide-react";

import { ChecklistCard } from "@/components/ChecklistCard";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui/table";
import { clients, reviewFiles, taxCases, vatPeriods } from "@/lib/mock-data";

export default function ClientDetailPage() {
  const params = useParams<{ id: string }>();
  const { language, t } = useI18n();
  const client = clients.find((entry) => entry.id === params.id);

  if (!client) {
    notFound();
  }

  const relatedCases = taxCases.filter((taxCase) => taxCase.clientId === client.id);
  const relatedFiles = reviewFiles.filter((file) => relatedCases.some((taxCase) => file.caseTitle === taxCase.title));

  return (
    <FirmPortalShell>
      <div className="mb-5 grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
        <Card>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006A4E]/10 text-[#006A4E]">
                <Building2 className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">{client.name}</CardTitle>
              <CardDescription className="mt-1">
                {t(client.type)} {t("clientProfile")}
              </CardDescription>
            </div>
            <StatusBadge status={client.status} />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              [t("tin"), client.tin],
              [t("bin"), client.bin ?? "-"],
              [t("taxCircle"), client.taxCircle],
              [t("taxZone"), client.taxZone],
              [t("vatCircle"), client.vatCircle ?? "-"],
              [t("assigned"), client.assignedTo],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-500">{label}</p>
                <p className="mt-1 text-sm font-bold text-[#0F172A]">{value}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle className="mb-4">{t("contact")}</CardTitle>
          <div className="space-y-3 text-sm text-slate-700">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#006A4E]" /> {client.contactEmail}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#006A4E]" /> {client.contactPhone}
            </p>
            <p className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-[#006A4E]" /> {client.pendingDocumentsCount} {t("pendingDocuments")}
            </p>
            <p className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[#006A4E]" /> {client.activeCasesCount} {t("activeCases")}
            </p>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardTitle className="mb-3">{t("assignedStaff")}</CardTitle>
          <div className="flex flex-wrap gap-2">
            {client.assignedStaff.map((staff) => (
              <span key={staff} className="rounded-full bg-[#006A4E]/10 px-3 py-1 text-xs font-bold text-[#006A4E]">
                {staff}
              </span>
            ))}
          </div>
        </Card>
        <Card>
          <CardTitle className="mb-3">{t("clientUsers")}</CardTitle>
          <div className="flex flex-wrap gap-2">
            {client.clientUsers.map((user) => (
              <span key={user} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                {user}
              </span>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Card className="overflow-hidden p-0">
          <div className="border-b border-slate-100 px-5 py-4">
            <CardTitle>{t("relatedTaxCases")}</CardTitle>
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>{t("case")}</TableHeaderCell>
                <TableHeaderCell>{t("caseType")}</TableHeaderCell>
                <TableHeaderCell>{t("status")}</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {relatedCases.map((taxCase) => (
                <TableRow key={taxCase.id}>
                  <TableCell className="font-semibold">{language === "bn" && taxCase.titleBn ? taxCase.titleBn : taxCase.title}</TableCell>
                  <TableCell>{t(taxCase.caseType)}</TableCell>
                  <TableCell>
                    <StatusBadge status={taxCase.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card>
          <CardTitle className="mb-3">{t("vatReturn")}</CardTitle>
          <div className="space-y-2">
            {vatPeriods.slice(0, 3).map((period) => (
              <div key={period.month} className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3">
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">{language === "bn" && period.monthBn ? period.monthBn : period.month}</p>
                  <p className="text-xs text-slate-500">{period.netPayable}</p>
                </div>
                <StatusBadge status={period.status} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <ChecklistCard title={t("missingDocumentChecklist")} items={[t("collectDocs"), "BIN certificate", "Mushak challan copy", t("clientSignOff")]} />
        <Card>
          <CardTitle className="mb-3">{t("recentTimeline")}</CardTitle>
          <div className="space-y-3 text-sm text-slate-700">
            {["File review completed", "Client clarification requested", "VAT period marked ready"].map((item) => (
              <div key={item} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">{item}</div>
            ))}
          </div>
        </Card>
        <Card>
          <CardTitle className="mb-3">{t("files")}</CardTitle>
          <div className="space-y-2">
            {relatedFiles.map((file) => (
              <div key={file.id} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm">
                <p className="font-semibold text-[#0F172A]">{language === "bn" && file.nameBn ? file.nameBn : file.name}</p>
                <p className="text-xs text-slate-500">{file.category}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Card>
          <CardTitle>{t("internalNotes")}</CardTitle>
          <CardDescription className="mt-2">Review risk: verify AIT/TDS certificates before final approval. Partner details remain internal.</CardDescription>
        </Card>
        <Card>
          <CardTitle>{t("clientVisibleNotes")}</CardTitle>
          <CardDescription className="mt-2">Please upload the latest bank statement and missing VAT challan copy for the active period.</CardDescription>
        </Card>
      </div>
    </FirmPortalShell>
  );
}
