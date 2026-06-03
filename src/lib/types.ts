export type Language = "en" | "bn";

export type Role =
  | "FIRM_OWNER"
  | "FIRM_ADMIN"
  | "TAX_MANAGER"
  | "ACCOUNTANT"
  | "DOCUMENT_CHECKER"
  | "CLIENT_SUPPORT"
  | "PARTNER_USER"
  | "CLIENT_ADMIN"
  | "CLIENT_UPLOADER"
  | "CLIENT_VIEWER";

export type Permission =
  | "clients.read"
  | "clients.write"
  | "cases.read"
  | "cases.write"
  | "files.review"
  | "partners.assign"
  | "vat.manage"
  | "reports.read"
  | "tasks.read"
  | "files.upload";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  permissions: Permission[];
  organizationType: "PRIMARY_FIRM" | "PARTNER_FIRM" | "CLIENT_COMPANY" | "INDIVIDUAL_CLIENT";
  assignedClients: string[];
}

export interface Client {
  id: string;
  name: string;
  type: "company" | "individual";
  status: "active" | "pending" | "review";
  assignedTo: string;
}

export interface TaxCase {
  id: string;
  clientId: string;
  title: string;
  titleBn?: string;
  taxYear: string;
  status: "draft" | "in_review" | "filed";
}

export interface VatPeriod {
  month: string;
  monthBn?: string;
  status: "open" | "ready" | "submitted";
  dueDate: string;
}

export interface ReviewFile {
  id: string;
  name: string;
  nameBn?: string;
  status: "uploaded" | "checking" | "approved" | "rejected";
}
