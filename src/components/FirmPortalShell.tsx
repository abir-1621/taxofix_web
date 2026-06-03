import { ShieldCheck } from "lucide-react";

import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/ui/card";

export function FirmPortalShell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <Card className="mb-5 border-[#006A4E]/20 bg-[#006A4E]/5">
        <div className="flex items-center gap-2 text-sm font-medium text-[#006A4E]">
          <ShieldCheck className="h-4 w-4" /> Firm Portal
        </div>
      </Card>
      {children}
    </AppShell>
  );
}
