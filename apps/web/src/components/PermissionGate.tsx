import type { Permission } from "@/lib/types";

export function PermissionGate({
  permissions,
  needs,
  fallback,
  children,
}: {
  permissions: Permission[];
  needs: Permission;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}) {
  return permissions.includes(needs) ? <>{children}</> : <>{fallback ?? null}</>;
}
