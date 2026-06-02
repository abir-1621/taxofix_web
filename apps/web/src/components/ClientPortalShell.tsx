import { UserCircle2 } from "lucide-react";

import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/ui/card";

export function ClientPortalShell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <Card className="mb-5 border-[#E11D48]/20 bg-[#E11D48]/5">
        <div className="flex items-center gap-2 text-sm font-medium text-[#E11D48]">
          <UserCircle2 className="h-4 w-4" /> Client Portal
        </div>
      </Card>
      {children}
    </AppShell>
  );
}
