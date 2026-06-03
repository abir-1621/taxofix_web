import { ClientTable } from "@/components/ClientTable";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { clients } from "@/lib/mock-data";

export default function ClientsPage() {
  return (
    <FirmPortalShell>
      <h1 className="mb-4 text-2xl font-semibold text-[#0F172A]">Clients</h1>
      <ClientTable rows={clients} />
    </FirmPortalShell>
  );
}
