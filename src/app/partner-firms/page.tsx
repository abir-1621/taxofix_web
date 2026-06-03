import { PartnerAssignmentPanel } from "@/components/PartnerAssignmentPanel";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { Card, CardTitle } from "@/components/ui/card";

export default function PartnerFirmsPage() {
  return (
    <FirmPortalShell>
      <h1 className="mb-4 text-2xl font-semibold text-[#0F172A]">Partner Firms</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle className="mb-3">Approved Partners</CardTitle>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>Delta Advisory Partners</li>
            <li>Gulshan Compliance Services</li>
            <li>Chattogram Tax Associates</li>
          </ul>
        </Card>
        <PartnerAssignmentPanel />
      </div>
    </FirmPortalShell>
  );
}
