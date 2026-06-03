"use client";

import { useI18n } from "@/components/I18nProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui/table";
import type { TaxCase } from "@/lib/types";

export function TaxCaseTable({ rows }: { rows: TaxCase[] }) {
  const { language, t } = useI18n();

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-slate-100 px-5 py-4">
        <CardTitle>{t("taxCases")}</CardTitle>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>{t("case")}</TableHeaderCell>
            <TableHeaderCell>{t("taxYear")}</TableHeaderCell>
            <TableHeaderCell>{t("status")}</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((taxCase) => (
            <TableRow key={taxCase.id}>
              <TableCell className="font-medium">{language === "bn" && taxCase.titleBn ? taxCase.titleBn : taxCase.title}</TableCell>
              <TableCell>{taxCase.taxYear}</TableCell>
              <TableCell>
                <StatusBadge status={taxCase.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
