"use client";

import Link from "next/link";

import { useI18n } from "@/components/I18nProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui/table";
import type { Client } from "@/lib/types";

export function ClientTable({ rows }: { rows: Client[] }) {
  const { t } = useI18n();

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-slate-100 px-5 py-4">
        <CardTitle>{t("clientPortfolio")}</CardTitle>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>{t("client")}</TableHeaderCell>
            <TableHeaderCell>{t("type")}</TableHeaderCell>
            <TableHeaderCell>{t("status")}</TableHeaderCell>
            <TableHeaderCell>{t("assigned")}</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((client) => (
            <TableRow key={client.id}>
              <TableCell>
                <Link href={`/clients/${client.id}`} className="font-medium text-[#0F172A] hover:text-[#006A4E]">
                  {client.name}
                </Link>
              </TableCell>
              <TableCell>{t(client.type)}</TableCell>
              <TableCell>
                <StatusBadge status={client.status} />
              </TableCell>
              <TableCell>{client.assignedTo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
