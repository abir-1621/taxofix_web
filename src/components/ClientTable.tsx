import Link from "next/link";

import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui/table";
import type { Client } from "@/lib/types";

export function ClientTable({ rows }: { rows: Client[] }) {
  return (
    <Card>
      <CardTitle className="mb-4">Client Portfolio</CardTitle>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Client</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Assigned</TableHeaderCell>
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
              <TableCell className="capitalize">{client.type}</TableCell>
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
