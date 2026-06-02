import { FirmPortalShell } from "@/components/FirmPortalShell";
import { VATPeriodCard } from "@/components/VATPeriodCard";
import { vatPeriods } from "@/lib/mock-data";

export default function VatPage() {
  return (
    <FirmPortalShell>
      <h1 className="mb-4 text-2xl font-semibold text-[#0F172A]">VAT Return</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {vatPeriods.map((period) => (
          <VATPeriodCard key={period.month} period={period} />
        ))}
      </div>
    </FirmPortalShell>
  );
}
