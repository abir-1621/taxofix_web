"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { useI18n } from "@/components/I18nProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui/table";
import type { Client } from "@/lib/types";

export function ClientTable({ rows }: { rows: Client[] }) {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("all");

  const filteredRows = useMemo(
    () =>
      rows.filter((client) => {
        const matchesQuery = `${client.name} ${client.tin} ${client.bin ?? ""} ${client.assignedTo}`.toLowerCase().includes(query.toLowerCase());
        const matchesStatus = status === "all" || client.status === status;
        const matchesType = type === "all" || client.type === type;
        return matchesQuery && matchesStatus && matchesType;
      }),
    [query, rows, status, type],
  );

  return (
    <Card className="overflow-hidden p-0">
      <div className="space-y-4 border-b border-slate-100 px-5 py-4">
        <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-center">
          <CardTitle>{t("clientPortfolio")}</CardTitle>
          <div className="grid gap-2 sm:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input className="min-w-64 pl-9" placeholder={t("searchClients")} value={query} onChange={(event) => setQuery(event.target.value)} />
            </div>
            <select className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700" value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="all">{t("allStatuses")}</option>
              <option value="active">{t("active")}</option>
              <option value="pending">{t("pending")}</option>
              <option value="review">{t("review")}</option>
            </select>
            <select className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700" value={type} onChange={(event) => setType(event.target.value)}>
              <option value="all">{t("allTypes")}</option>
              <option value="company">{t("company")}</option>
              <option value="group_company">{t("group_company")}</option>
              <option value="sme">{t("sme")}</option>
              <option value="individual">{t("individual")}</option>
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>{t("client")}</TableHeaderCell>
              <TableHeaderCell>{t("type")}</TableHeaderCell>
              <TableHeaderCell>{t("tin")}</TableHeaderCell>
              <TableHeaderCell>{t("bin")}</TableHeaderCell>
              <TableHeaderCell>{t("status")}</TableHeaderCell>
              <TableHeaderCell>{t("assigned")}</TableHeaderCell>
              <TableHeaderCell>{t("activeCases")}</TableHeaderCell>
              <TableHeaderCell>{t("pendingDocuments")}</TableHeaderCell>
              <TableHeaderCell>{t("action")}</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((client) => (
              <TableRow key={client.id}>
                <TableCell>
                  <Link href={`/clients/${client.id}`} className="font-semibold text-[#0F172A] hover:text-[#006A4E]">
                    {client.name}
                  </Link>
                  <p className="mt-1 text-xs text-slate-500">{client.contactEmail}</p>
                </TableCell>
                <TableCell>{t(client.type)}</TableCell>
                <TableCell className="font-mono text-xs">{client.tin}</TableCell>
                <TableCell className="font-mono text-xs">{client.bin ?? "-"}</TableCell>
                <TableCell>
                  <StatusBadge status={client.status} />
                </TableCell>
                <TableCell>{client.assignedTo}</TableCell>
                <TableCell>{client.activeCasesCount}</TableCell>
                <TableCell>{client.pendingDocumentsCount}</TableCell>
                <TableCell>
                  <Link href={`/clients/${client.id}`}>
                    <Button size="sm" variant="outline">{t("viewProfile")}</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
