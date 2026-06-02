import Link from "next/link";
import { Building2 } from "lucide-react";

import { LanguageToggle } from "@/components/LanguageToggle";
import { navItems } from "@/lib/mock-data";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-[#0F172A]">
            <Building2 className="h-5 w-5 text-[#006A4E]" /> TaxoFix BD
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-[#006A4E]">
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageToggle />
        </div>
      </header>
      <main className="mx-auto max-w-7xl p-4 md:p-6">{children}</main>
    </div>
  );
}
