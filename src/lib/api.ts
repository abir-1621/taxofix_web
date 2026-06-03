const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

export type MockApiUser = {
  id: string;
  display_name: string;
  email: string;
  organization_type: string;
  role: string;
  permissions: string[];
};

export type MockSession = {
  access_token: string;
  token_type: "mock";
  user: MockApiUser;
};

export type DashboardSummary = {
  role_context: string;
  metrics: { label: string; value: number; trend?: string | null }[];
  deadline_alerts: { label: string; due_date: string; severity: string }[];
  recent_activity: string[];
  workload_summary: string[];
};

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function loginMock() {
  return apiFetch<MockSession>("/api/auth/login", { method: "POST" });
}

export function getCurrentProfile() {
  return apiFetch<MockApiUser>("/api/auth/me");
}

export const getCurrentMockUser = getCurrentProfile;

export function getFirmDashboardSummary() {
  return apiFetch<DashboardSummary>("/api/dashboard/firm-summary");
}

export function getAccountantDashboardSummary() {
  return apiFetch<DashboardSummary>("/api/dashboard/accountant-summary");
}

export function getDocumentCheckerDashboardSummary() {
  return apiFetch<DashboardSummary>("/api/dashboard/document-checker-summary");
}

export function getClientDashboardSummary() {
  return apiFetch<DashboardSummary>("/api/dashboard/client-summary");
}

export function getPartnerDashboardSummary() {
  return apiFetch<DashboardSummary>("/api/dashboard/partner-summary");
}

export function getClients() {
  return apiFetch<unknown[]>("/api/clients");
}

export function getClientById(clientId: string) {
  return apiFetch<unknown>(`/api/clients/${clientId}`);
}

export function getTaxCases() {
  return apiFetch<unknown[]>("/api/tax-cases");
}

export function getVATPeriods() {
  return apiFetch<unknown[]>("/api/vat-periods");
}

export function getFiles() {
  return apiFetch<unknown[]>("/api/files");
}

export function getPartnerFirms() {
  return apiFetch<unknown[]>("/api/partner-firms");
}

export function getTasks() {
  return apiFetch<unknown[]>("/api/tasks");
}

export function getAuditLogs() {
  return apiFetch<unknown[]>("/api/audit-logs");
}

export { API_BASE_URL };
