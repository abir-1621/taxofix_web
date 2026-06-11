"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, ChevronDown, LayoutDashboard, Users, FileText, ReceiptText, FolderCheck, Handshake, Settings } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";
import { useMockAuth } from "@/components/MockAuthProvider";
import { RoleSwitcher } from "@/components/RoleSwitcher";
import { Badge } from "@/components/ui/badge";
import { navItems, roleLabelKeys } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const navIcons = {
  "/dashboard": LayoutDashboard,
  "/clients": Users,
  "/tax-cases": FileText,
  "/vat": ReceiptText,
  "/files": FolderCheck,
  "/partner-firms": Handshake,
  "/settings": Settings,
};

export function AppShell({ children, portalLabel }: { children: React.ReactNode; portalLabel?: string }) {
  const pathname = usePathname();
  const { t } = useI18n();
  const { currentRole, currentUser } = useMockAuth();
  const visibleNavItems = navItems.filter((item) => item.roles.includes(currentRole));

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <div className="mx-auto flex min-h-screen max-w-[1520px]">
        <aside className="hidden w-72 shrink-0 bg-[#0F172A] px-5 py-6 text-white lg:block">
          <Link href="/" className="flex items-center gap-3 rounded-lg outline-none ring-emerald-300 focus-visible:ring-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#006A4E] text-white shadow-sm shadow-emerald-950/20">
              <Building2 className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-base font-bold">{t("brand")}</span>
              <span className="text-xs font-medium text-slate-400">{portalLabel ?? t("firmPortal")}</span>
            </span>
          </Link>

          <nav className="mt-8 space-y-1">
            {visibleNavItems.map((item) => {
              const Icon = navIcons[item.href as keyof typeof navIcons];
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-300 outline-none ring-emerald-300 transition",
                    active && "bg-white/10 text-white shadow-sm ring-1 ring-white/10",
                    !active && "hover:bg-white/5 hover:text-white focus-visible:ring-2",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
              <Link href="/" className="flex items-center gap-2 rounded-lg font-bold outline-none ring-[#006A4E] focus-visible:ring-2 lg:hidden">
                <Building2 className="h-5 w-5 text-[#006A4E]" />
                {t("brand")}
              </Link>
              <div className="hidden min-w-0 lg:block">
                <p className="text-xs font-semibold uppercase text-[#006A4E]">{portalLabel ?? t("firmPortal")}</p>
                <p className="truncate text-sm text-slate-500">{t("workloadBrief")}</p>
              </div>
              <div className="flex items-center gap-2">
                <RoleSwitcher />
                <Badge variant="brand" className="hidden sm:inline-flex">
                  {currentUser.name} · {t(roleLabelKeys[currentRole])} <ChevronDown className="ml-1 h-3 w-3" />
                </Badge>
              </div>
            </div>
            <nav className="flex gap-2 overflow-x-auto border-t border-slate-100 px-4 py-2 lg:hidden" aria-label="Mobile workspace navigation">
              {visibleNavItems.map((item) => {
                const Icon = navIcons[item.href as keyof typeof navIcons];
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 outline-none ring-[#006A4E] transition hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2",
                      active && "bg-[#006A4E]/10 text-[#006A4E]",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {t(item.labelKey)}
                  </Link>
                );
              })}
            </nav>
          </header>
          <main className="flex-1 p-4 md:p-6 xl:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
