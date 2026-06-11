"use client";

import { roleLabelKeys, usersByRole } from "@/lib/mock-data";
import type { Role } from "@/lib/types";
import { useI18n } from "@/components/I18nProvider";
import { useMockAuth } from "@/components/MockAuthProvider";
import { Select } from "@/components/ui/select";

export function RoleSwitcher() {
  const { t } = useI18n();
  const { currentRole, switchRole } = useMockAuth();

  return (
    <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
      {t("developmentRole")}
      <Select
        className="h-10 min-w-44"
        value={currentRole}
        onChange={(event) => switchRole(event.target.value as Role)}
        aria-label={t("switchRole")}
      >
        {(Object.keys(usersByRole) as Role[]).map((role) => (
          <option key={role} value={role}>
            {t(roleLabelKeys[role])}
          </option>
        ))}
      </Select>
    </label>
  );
}
