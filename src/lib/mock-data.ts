import type { Client, ReviewFile, Role, TaxCase, User, VatPeriod } from "@/lib/types";

export const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/clients", label: "Clients" },
  { href: "/tax-cases", label: "Tax Cases" },
  { href: "/vat", label: "VAT" },
  { href: "/files", label: "Files" },
  { href: "/partner-firms", label: "Partner Firms" },
  { href: "/settings", label: "Settings" },
];

export const usersByRole: Record<Role, User> = {
  firm_admin: {
    id: "u1",
    name: "Farzana Rahman",
    role: "firm_admin",
    permissions: ["clients.read", "clients.write", "cases.read", "cases.write", "files.review", "partners.assign", "vat.manage"],
  },
  accountant: {
    id: "u2",
    name: "Arif Hasan",
    role: "accountant",
    permissions: ["clients.read", "cases.read", "cases.write", "vat.manage"],
  },
  document_checker: {
    id: "u3",
    name: "Nabila Sultana",
    role: "document_checker",
    permissions: ["clients.read", "cases.read", "files.review"],
  },
  partner_firm: {
    id: "u4",
    name: "Partner Ops Team",
    role: "partner_firm",
    permissions: ["clients.read", "cases.read"],
  },
  client: {
    id: "u5",
    name: "Rahim Uddin",
    role: "client",
    permissions: ["cases.read"],
  },
};

export const clients: Client[] = [
  { id: "c1", name: "Dhaka Textiles Ltd.", type: "company", status: "active", assignedTo: "Arif Hasan" },
  { id: "c2", name: "Nafisa Foods PLC", type: "company", status: "review", assignedTo: "Farzana Rahman" },
  { id: "c3", name: "Sadia Akter", type: "individual", status: "pending", assignedTo: "Nabila Sultana" },
];

export const taxCases: TaxCase[] = [
  { id: "t1", clientId: "c1", title: "FY 2024 Corporate Return", taxYear: "2024-25", status: "in_review" },
  { id: "t2", clientId: "c2", title: "VAT Reconciliation", taxYear: "2024-25", status: "draft" },
  { id: "t3", clientId: "c3", title: "Individual Return", taxYear: "2024-25", status: "filed" },
];

export const vatPeriods: VatPeriod[] = [
  { month: "January 2026", status: "submitted", dueDate: "2026-02-15" },
  { month: "February 2026", status: "ready", dueDate: "2026-03-15" },
  { month: "March 2026", status: "open", dueDate: "2026-04-15" },
];

export const reviewFiles: ReviewFile[] = [
  { id: "f1", name: "Bank Statement - Jan.pdf", status: "approved" },
  { id: "f2", name: "Sales Ledger.xlsx", status: "checking" },
  { id: "f3", name: "Withholding Tax Docs.zip", status: "uploaded" },
];

export const dashboardMetrics = [
  { title: "Active Clients", value: "248", trend: "+12 this month" },
  { title: "Tax Cases", value: "64", trend: "18 due this week" },
  { title: "VAT Cycles", value: "32", trend: "5 awaiting review" },
  { title: "Documents", value: "1,245", trend: "97 uploaded today" },
];
