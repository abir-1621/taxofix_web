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
  type: "company" | "individual" | "sme" | "group_company";
  status: "active" | "pending" | "review";
  assignedTo: string;
  tin: string;
  bin?: string;
  taxCircle: string;
  taxZone: string;
  vatCircle?: string;
  contactEmail: string;
  contactPhone: string;
  activeCasesCount: number;
  pendingDocumentsCount: number;
  assignedStaff: string[];
  clientUsers: string[];
}

export interface TaxCase {
  id: string;
  clientId: string;
  title: string;
  titleBn?: string;
  caseType: "individual_income_tax" | "company_income_tax" | "vat_return" | "withholding_tax";
  assessmentYear: string;
  taxPeriod: string;
  clientName: string;
  assignedAccountant: string;
  reviewer: string;
  partnerFirm?: string;
  deadline: string;
  taxYear: string;
  status:
    | "draft"
    | "waiting_for_documents"
    | "documents_uploaded"
    | "document_checking"
    | "under_preparation"
    | "needs_client_clarification"
    | "in_review"
    | "approved"
    | "ready_for_submission"
    | "submitted"
    | "acknowledged"
    | "archived"
    | "filed";
}

export interface VatPeriod {
  month: string;
  monthBn?: string;
  clientName: string;
  year: string;
  sales: string;
  purchases: string;
  outputVat: string;
  inputVat: string;
  netPayable: string;
  missingDocuments: number;
  status: "open" | "ready" | "submitted";
  dueDate: string;
}

export interface ReviewFile {
  id: string;
  name: string;
  nameBn?: string;
  category: string;
  caseTitle: string;
  uploadedBy: string;
  internalNote?: string;
  clientNote?: string;
  status: "uploaded" | "pending_check" | "checking" | "approved" | "accepted" | "rejected" | "needs_clarification" | "duplicate" | "archived";
}

export interface PartnerFirm {
  id: string;
  name: string;
  status: "pending" | "approved" | "suspended" | "terminated";
  contactPerson: string;
  serviceScope: string;
  assignedCasesCount: number;
  revisionRate: string;
  workload: string;
}
