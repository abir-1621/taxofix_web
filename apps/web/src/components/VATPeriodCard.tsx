import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { VatPeriod } from "@/lib/types";

export function VATPeriodCard({ period }: { period: VatPeriod }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <div>
          <CardTitle>{period.month}</CardTitle>
          <CardDescription>Due: {period.dueDate}</CardDescription>
        </div>
        <StatusBadge status={period.status} />
      </div>
    </Card>
  );
}
