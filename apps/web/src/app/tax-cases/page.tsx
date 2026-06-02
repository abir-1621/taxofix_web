import { FirmPortalShell } from "@/components/FirmPortalShell";
import { TaxCaseTable } from "@/components/TaxCaseTable";
import { taxCases } from "@/lib/mock-data";

export default function TaxCasesPage() {
  return (
    <FirmPortalShell>
      <h1 className="mb-4 text-2xl font-semibold text-[#0F172A]">Tax Cases</h1>
      <TaxCaseTable rows={taxCases} />
    </FirmPortalShell>
  );
}
