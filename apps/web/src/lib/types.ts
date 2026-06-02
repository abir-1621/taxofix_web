export type Language = "en" | "bn";

export type Role =
  | "firm_admin"
  | "accountant"
  | "document_checker"
  | "partner_firm"
  | "client";

export type Permission =
  | "clients.read"
  | "clients.write"
  | "cases.read"
  | "cases.write"
  | "files.review"
  | "partners.assign"
  | "vat.manage";

export interface User {
  id: string;
  name: string;
  role: Role;
  permissions: Permission[];
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
  taxYear: string;
  status: "draft" | "in_review" | "filed";
}

export interface VatPeriod {
  month: string;
  status: "open" | "ready" | "submitted";
  dueDate: string;
}

export interface ReviewFile {
  id: string;
  name: string;
  status: "uploaded" | "checking" | "approved" | "rejected";
}
