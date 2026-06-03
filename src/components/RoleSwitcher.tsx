"use client";

import { roleLabelKeys, usersByRole } from "@/lib/mock-data";
import type { Role } from "@/lib/types";
import { useI18n } from "@/components/I18nProvider";
import { useMockAuth } from "@/components/MockAuthProvider";

export function RoleSwitcher() {
  const { t } = useI18n();
  const { currentRole, switchRole } = useMockAuth();

  return (
    <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
      {t("developmentRole")}
      <select
        className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-800 shadow-sm outline-none ring-[#006A4E] focus:ring-2"
        value={currentRole}
        onChange={(event) => switchRole(event.target.value as Role)}
        aria-label={t("switchRole")}
      >
        {(Object.keys(usersByRole) as Role[]).map((role) => (
          <option key={role} value={role}>
            {t(roleLabelKeys[role])}
          </option>
        ))}
      </select>
    </label>
  );
}
