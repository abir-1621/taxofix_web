import { notFound } from "next/navigation";

import { ChecklistCard } from "@/components/ChecklistCard";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { clients, taxCases } from "@/lib/mock-data";

export default async function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const client = clients.find((entry) => entry.id === id);

  if (!client) {
    notFound();
  }

  const relatedCases = taxCases.filter((taxCase) => taxCase.clientId === client.id);

  return (
    <FirmPortalShell>
      <Card>
        <CardTitle>{client.name}</CardTitle>
        <CardDescription className="mt-1">{client.type} client profile</CardDescription>
        <div className="mt-3">
          <StatusBadge status={client.status} />
        </div>
      </Card>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle className="mb-3">Related Tax Cases</CardTitle>
          <ul className="space-y-2 text-sm text-slate-700">
            {relatedCases.map((taxCase) => (
              <li key={taxCase.id}>{taxCase.title}</li>
            ))}
          </ul>
        </Card>
        <ChecklistCard
          title="Preparation Checklist"
          items={["Collect source documents", "Run reconciliation", "Internal review", "Client sign-off"]}
        />
      </div>
    </FirmPortalShell>
  );
}
