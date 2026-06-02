import type { Role } from "@/lib/types";

export function RoleGuard({
  role,
  allow,
  fallback,
  children,
}: {
  role: Role;
  allow: Role[];
  fallback?: React.ReactNode;
  children: React.ReactNode;
}) {
  return allow.includes(role) ? <>{children}</> : <>{fallback ?? null}</>;
}
