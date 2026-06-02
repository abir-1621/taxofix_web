import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui/table";
import type { TaxCase } from "@/lib/types";

export function TaxCaseTable({ rows }: { rows: TaxCase[] }) {
  return (
    <Card>
      <CardTitle className="mb-4">Tax Cases</CardTitle>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Case</TableHeaderCell>
            <TableHeaderCell>Tax Year</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((taxCase) => (
            <TableRow key={taxCase.id}>
              <TableCell className="font-medium">{taxCase.title}</TableCell>
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
