"use client";

import { CalendarDays, Users } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui/table";
import type { TaxCase } from "@/lib/types";

export function TaxCaseTable({ rows }: { rows: TaxCase[] }) {
  const { language, t } = useI18n();

  return (
    <Card className="overflow-hidden p-0">
      <div className="grid gap-3 border-b border-slate-100 px-5 py-4 md:grid-cols-[1fr_auto] md:items-center">
        <CardTitle>{t("taxCases")}</CardTitle>
        <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-600">
          <span className="rounded-full bg-[#006A4E]/10 px-3 py-1 text-[#006A4E]">{rows.length} {t("activeCases")}</span>
          <span className="rounded-full bg-[#E11D48]/10 px-3 py-1 text-[#E11D48]">2 {t("deadline")}</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>{t("case")}</TableHeaderCell>
              <TableHeaderCell>{t("caseType")}</TableHeaderCell>
              <TableHeaderCell>{t("assessmentYear")}</TableHeaderCell>
              <TableHeaderCell>{t("taxPeriod")}</TableHeaderCell>
              <TableHeaderCell>{t("client")}</TableHeaderCell>
              <TableHeaderCell>{t("accountant")}</TableHeaderCell>
              <TableHeaderCell>{t("reviewer")}</TableHeaderCell>
              <TableHeaderCell>{t("partnerFirm")}</TableHeaderCell>
              <TableHeaderCell>{t("status")}</TableHeaderCell>
              <TableHeaderCell>{t("deadline")}</TableHeaderCell>
              <TableHeaderCell>{t("action")}</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((taxCase) => (
              <TableRow key={taxCase.id}>
                <TableCell className="min-w-56 font-semibold">{language === "bn" && taxCase.titleBn ? taxCase.titleBn : taxCase.title}</TableCell>
                <TableCell>{t(taxCase.caseType)}</TableCell>
                <TableCell>{taxCase.assessmentYear}</TableCell>
                <TableCell>{taxCase.taxPeriod}</TableCell>
                <TableCell>{taxCase.clientName}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-[#006A4E]" />
                    {taxCase.assignedAccountant}
                  </span>
                </TableCell>
                <TableCell>{taxCase.reviewer}</TableCell>
                <TableCell>{taxCase.partnerFirm ?? "-"}</TableCell>
                <TableCell>
                  <StatusBadge status={taxCase.status} />
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1 whitespace-nowrap">
                    <CalendarDays className="h-3.5 w-3.5 text-[#E11D48]" />
                    {taxCase.deadline}
                  </span>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">{taxCase.status === "in_review" ? t("reviewAction") : t("prepare")}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
