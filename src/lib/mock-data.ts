import type { TranslationKey } from "@/lib/i18n";
import type { Client, PartnerFirm, Permission, ReviewFile, Role, TaxCase, User, VatPeriod } from "@/lib/types";

export type NavItem = {
  href: string;
  labelKey: TranslationKey;
  roles: Role[];
};

export const firmControlRoles: Role[] = ["FIRM_OWNER", "FIRM_ADMIN"];
export const firmStaffRoles: Role[] = ["TAX_MANAGER", "ACCOUNTANT", "DOCUMENT_CHECKER", "CLIENT_SUPPORT"];
export const clientRoles: Role[] = ["CLIENT_ADMIN", "CLIENT_UPLOADER", "CLIENT_VIEWER"];

export const navItems: NavItem[] = [
  { href: "/dashboard", labelKey: "dashboard", roles: ["FIRM_OWNER", "FIRM_ADMIN", "TAX_MANAGER", "ACCOUNTANT", "DOCUMENT_CHECKER", "CLIENT_SUPPORT", "PARTNER_USER", "CLIENT_ADMIN", "CLIENT_UPLOADER", "CLIENT_VIEWER"] },
  { href: "/clients", labelKey: "clients", roles: ["FIRM_OWNER", "FIRM_ADMIN", "TAX_MANAGER", "ACCOUNTANT", "DOCUMENT_CHECKER", "CLIENT_SUPPORT"] },
  { href: "/tax-cases", labelKey: "taxCases", roles: ["FIRM_OWNER", "FIRM_ADMIN", "TAX_MANAGER", "ACCOUNTANT", "PARTNER_USER", "CLIENT_ADMIN", "CLIENT_VIEWER"] },
  { href: "/vat", labelKey: "vat", roles: ["FIRM_OWNER", "FIRM_ADMIN", "TAX_MANAGER", "ACCOUNTANT", "CLIENT_ADMIN", "CLIENT_VIEWER"] },
  { href: "/files", labelKey: "files", roles: ["FIRM_OWNER", "FIRM_ADMIN", "TAX_MANAGER", "ACCOUNTANT", "DOCUMENT_CHECKER", "PARTNER_USER", "CLIENT_ADMIN", "CLIENT_UPLOADER", "CLIENT_VIEWER"] },
  { href: "/partner-firms", labelKey: "partnerFirms", roles: ["FIRM_OWNER", "FIRM_ADMIN", "TAX_MANAGER"] },
  { href: "/settings", labelKey: "settings", roles: ["FIRM_OWNER", "FIRM_ADMIN", "CLIENT_ADMIN"] },
];

export const roleLabelKeys: Record<Role, TranslationKey> = {
  FIRM_OWNER: "roleFirmOwner",
  FIRM_ADMIN: "roleFirmAdmin",
  TAX_MANAGER: "roleTaxManager",
  ACCOUNTANT: "roleAccountant",
  DOCUMENT_CHECKER: "roleDocumentChecker",
  CLIENT_SUPPORT: "roleClientSupport",
  PARTNER_USER: "rolePartnerUser",
  CLIENT_ADMIN: "roleClientAdmin",
  CLIENT_UPLOADER: "roleClientUploader",
  CLIENT_VIEWER: "roleClientViewer",
};

const allFirmPermissions: Permission[] = [
  "clients.read",
  "clients.write",
  "cases.read",
  "cases.write",
  "files.review",
  "files.upload",
  "partners.assign",
  "vat.manage",
  "reports.read",
  "tasks.read",
];

export const usersByRole: Record<Role, User> = {
  FIRM_OWNER: {
    id: "u-owner",
    name: "Farzana Rahman",
    email: "farzana@taxofix.bd",
    role: "FIRM_OWNER",
    organizationType: "PRIMARY_FIRM",
    permissions: allFirmPermissions,
    assignedClients: ["c1", "c2", "c3"],
  },
  FIRM_ADMIN: {
    id: "u-admin",
    name: "Mahmud Karim",
    email: "admin@taxofix.bd",
    role: "FIRM_ADMIN",
    organizationType: "PRIMARY_FIRM",
    permissions: allFirmPermissions,
    assignedClients: ["c1", "c2", "c3"],
  },
  TAX_MANAGER: {
    id: "u-tax-manager",
    name: "Nadia Islam",
    email: "nadia@taxofix.bd",
    role: "TAX_MANAGER",
    organizationType: "PRIMARY_FIRM",
    permissions: ["clients.read", "cases.read", "cases.write", "files.review", "partners.assign", "vat.manage", "reports.read", "tasks.read"],
    assignedClients: ["c1", "c2"],
  },
  ACCOUNTANT: {
    id: "u-accountant",
    name: "Arif Hasan",
    email: "arif@taxofix.bd",
    role: "ACCOUNTANT",
    organizationType: "PRIMARY_FIRM",
    permissions: ["clients.read", "cases.read", "cases.write", "files.upload", "vat.manage", "tasks.read"],
    assignedClients: ["c1"],
  },
  DOCUMENT_CHECKER: {
    id: "u-doc-checker",
    name: "Nabila Sultana",
    email: "nabila@taxofix.bd",
    role: "DOCUMENT_CHECKER",
    organizationType: "PRIMARY_FIRM",
    permissions: ["clients.read", "cases.read", "files.review", "tasks.read"],
    assignedClients: ["c1", "c3"],
  },
  CLIENT_SUPPORT: {
    id: "u-client-support",
    name: "Rafi Ahmed",
    email: "support@taxofix.bd",
    role: "CLIENT_SUPPORT",
    organizationType: "PRIMARY_FIRM",
    permissions: ["clients.read", "cases.read", "files.upload", "tasks.read"],
    assignedClients: ["c2", "c3"],
  },
  PARTNER_USER: {
    id: "u-partner",
    name: "Partner Ops Team",
    email: "ops@deltaadvisory.bd",
    role: "PARTNER_USER",
    organizationType: "PARTNER_FIRM",
    permissions: ["cases.read", "files.upload", "tasks.read"],
    assignedClients: ["c2"],
  },
  CLIENT_ADMIN: {
    id: "u-client-admin",
    name: "Rahim Uddin",
    email: "rahim@dhakatextiles.com",
    role: "CLIENT_ADMIN",
    organizationType: "CLIENT_COMPANY",
    permissions: ["cases.read", "files.upload", "vat.manage", "tasks.read"],
    assignedClients: ["c1"],
  },
  CLIENT_UPLOADER: {
    id: "u-client-uploader",
    name: "Sadia Akter",
    email: "sadia@dhakatextiles.com",
    role: "CLIENT_UPLOADER",
    organizationType: "CLIENT_COMPANY",
    permissions: ["files.upload", "tasks.read"],
    assignedClients: ["c1"],
  },
  CLIENT_VIEWER: {
    id: "u-client-viewer",
    name: "Tanvir Chowdhury",
    email: "viewer@dhakatextiles.com",
    role: "CLIENT_VIEWER",
    organizationType: "CLIENT_COMPANY",
    permissions: ["cases.read", "tasks.read"],
    assignedClients: ["c1"],
  },
};

export const clients: Client[] = [
  {
    id: "c1",
    name: "Dhaka Textiles Ltd.",
    type: "company",
    status: "active",
    assignedTo: "Arif Hasan",
    tin: "TIN-3029-1147",
    bin: "BIN-000839214",
    taxCircle: "Circle 112",
    taxZone: "Dhaka Zone 6",
    vatCircle: "VAT Circle Motijheel",
    contactEmail: "finance@dhakatextiles.com",
    contactPhone: "+8801711002200",
    activeCasesCount: 4,
    pendingDocumentsCount: 7,
    assignedStaff: ["Arif Hasan", "Nadia Islam", "Nabila Sultana"],
    clientUsers: ["Rahim Uddin", "Sadia Akter"],
  },
  {
    id: "c2",
    name: "Nafisa Foods PLC",
    type: "group_company",
    status: "review",
    assignedTo: "Nadia Islam",
    tin: "TIN-4410-9921",
    bin: "BIN-001184520",
    taxCircle: "Circle 088",
    taxZone: "Dhaka Zone 4",
    vatCircle: "VAT Circle Gulshan",
    contactEmail: "tax@nafisafoods.com",
    contactPhone: "+8801811223344",
    activeCasesCount: 6,
    pendingDocumentsCount: 12,
    assignedStaff: ["Nadia Islam", "Mahmud Karim"],
    clientUsers: ["Fahmida Karim", "Javed Hossain"],
  },
  {
    id: "c3",
    name: "Sadia Akter",
    type: "individual",
    status: "pending",
    assignedTo: "Nabila Sultana",
    tin: "TIN-7710-5529",
    taxCircle: "Circle 044",
    taxZone: "Dhaka Zone 2",
    contactEmail: "sadia@example.com",
    contactPhone: "+8801911223344",
    activeCasesCount: 1,
    pendingDocumentsCount: 5,
    assignedStaff: ["Nabila Sultana", "Rafi Ahmed"],
    clientUsers: ["Sadia Akter"],
  },
];

export const taxCases: TaxCase[] = [
  {
    id: "t1",
    clientId: "c1",
    title: "FY 2024 Corporate Return",
    titleBn: "অর্থবছর ২০২৪ কোম্পানি রিটার্ন",
    caseType: "company_income_tax",
    assessmentYear: "2024-25",
    taxPeriod: "Jul 2024-Jun 2025",
    clientName: "Dhaka Textiles Ltd.",
    assignedAccountant: "Arif Hasan",
    reviewer: "Nadia Islam",
    deadline: "2026-06-12",
    taxYear: "2024-25",
    status: "in_review",
  },
  {
    id: "t2",
    clientId: "c2",
    title: "VAT Reconciliation",
    titleBn: "ভ্যাট রিকনসিলিয়েশন",
    caseType: "vat_return",
    assessmentYear: "2025-26",
    taxPeriod: "March 2026",
    clientName: "Nafisa Foods PLC",
    assignedAccountant: "Arif Hasan",
    reviewer: "Mahmud Karim",
    partnerFirm: "Delta Advisory Partners",
    deadline: "2026-04-15",
    taxYear: "2025-26",
    status: "under_preparation",
  },
  {
    id: "t3",
    clientId: "c3",
    title: "Individual Return",
    titleBn: "ব্যক্তিগত রিটার্ন",
    caseType: "individual_income_tax",
    assessmentYear: "2024-25",
    taxPeriod: "Jul 2024-Jun 2025",
    clientName: "Sadia Akter",
    assignedAccountant: "Nabila Sultana",
    reviewer: "Nadia Islam",
    deadline: "2026-06-30",
    taxYear: "2024-25",
    status: "submitted",
  },
];

export const vatPeriods: VatPeriod[] = [
  { month: "January 2026", monthBn: "জানুয়ারি ২০২৬", clientName: "Dhaka Textiles Ltd.", year: "2026", sales: "BDT 12.4M", purchases: "BDT 8.1M", outputVat: "BDT 1.86M", inputVat: "BDT 1.21M", netPayable: "BDT 650K", missingDocuments: 0, status: "submitted", dueDate: "2026-02-15" },
  { month: "February 2026", monthBn: "ফেব্রুয়ারি ২০২৬", clientName: "Dhaka Textiles Ltd.", year: "2026", sales: "BDT 10.8M", purchases: "BDT 7.9M", outputVat: "BDT 1.62M", inputVat: "BDT 1.18M", netPayable: "BDT 440K", missingDocuments: 2, status: "ready", dueDate: "2026-03-15" },
  { month: "March 2026", monthBn: "মার্চ ২০২৬", clientName: "Nafisa Foods PLC", year: "2026", sales: "BDT 18.2M", purchases: "BDT 13.6M", outputVat: "BDT 2.73M", inputVat: "BDT 2.04M", netPayable: "BDT 690K", missingDocuments: 5, status: "open", dueDate: "2026-04-15" },
];

export const reviewFiles: ReviewFile[] = [
  { id: "f1", name: "Bank Statement - Jan.pdf", nameBn: "ব্যাংক স্টেটমেন্ট - জানুয়ারি.pdf", category: "Bank Statement", caseTitle: "FY 2024 Corporate Return", uploadedBy: "Rahim Uddin", internalNote: "Matched with ledger opening balance.", clientNote: "Accepted for January.", status: "approved" },
  { id: "f2", name: "Sales Ledger.xlsx", nameBn: "সেলস লেজার.xlsx", category: "Sales Register", caseTitle: "VAT Reconciliation", uploadedBy: "Fahmida Karim", internalNote: "Needs challan cross-check.", status: "pending_check" },
  { id: "f3", name: "Withholding Tax Docs.zip", nameBn: "উৎসে কর ডকুমেন্ট.zip", category: "AIT/TDS Certificate", caseTitle: "FY 2024 Corporate Return", uploadedBy: "Arif Hasan", internalNote: "One certificate missing vendor TIN.", clientNote: "Please replace rejected file.", status: "needs_clarification" },
];

export const dashboardByRole: Record<Role, { titleKey: TranslationKey; value: string; trendKey: TranslationKey }[]> = {
  FIRM_OWNER: [
    { titleKey: "activeClients", value: "248", trendKey: "activeClientsTrend" },
    { titleKey: "filesWaitingReview", value: "37", trendKey: "filesWaitingReviewTrend" },
    { titleKey: "readyForSubmission", value: "11", trendKey: "readyForSubmissionTrend" },
    { titleKey: "partnerDelegatedCases", value: "8", trendKey: "partnerDelegatedCasesTrend" },
  ],
  FIRM_ADMIN: [
    { titleKey: "activeClients", value: "248", trendKey: "activeClientsTrend" },
    { titleKey: "taxCaseMetric", value: "64", trendKey: "taxCasesTrend" },
    { titleKey: "vatCycles", value: "32", trendKey: "vatCyclesTrend" },
    { titleKey: "documents", value: "1,245", trendKey: "documentsTrend" },
  ],
  TAX_MANAGER: [
    { titleKey: "casesUnderReview", value: "19", trendKey: "casesUnderReviewTrend" },
    { titleKey: "pendingApprovals", value: "7", trendKey: "pendingApprovalsTrend" },
    { titleKey: "revisionRequests", value: "4", trendKey: "revisionRequestsTrend" },
    { titleKey: "assignedClients", value: "86", trendKey: "assignedClientsTrend" },
  ],
  ACCOUNTANT: [
    { titleKey: "assignedClients", value: "42", trendKey: "assignedClientsTrend" },
    { titleKey: "underPreparation", value: "16", trendKey: "underPreparationTrend" },
    { titleKey: "missingDocuments", value: "23", trendKey: "missingDocumentsTrend" },
    { titleKey: "tasksDueToday", value: "9", trendKey: "tasksDueTodayTrend" },
  ],
  DOCUMENT_CHECKER: [
    { titleKey: "filesWaitingReview", value: "37", trendKey: "filesWaitingReviewTrend" },
    { titleKey: "rejectedFiles", value: "6", trendKey: "rejectedFilesTrend" },
    { titleKey: "missingDocuments", value: "23", trendKey: "missingDocumentsTrend" },
    { titleKey: "reviewHistory", value: "118", trendKey: "reviewHistoryTrend" },
  ],
  CLIENT_SUPPORT: [
    { titleKey: "clarificationRequests", value: "14", trendKey: "clarificationRequestsTrend" },
    { titleKey: "assignedClients", value: "73", trendKey: "assignedClientsTrend" },
    { titleKey: "uploadedFiles", value: "92", trendKey: "uploadedFilesTrend" },
    { titleKey: "tasksDueToday", value: "12", trendKey: "tasksDueTodayTrend" },
  ],
  PARTNER_USER: [
    { titleKey: "assignedCases", value: "8", trendKey: "assignedCasesTrend" },
    { titleKey: "dueDates", value: "3", trendKey: "dueDatesTrend" },
    { titleKey: "revisionRequests", value: "2", trendKey: "revisionRequestsTrend" },
    { titleKey: "sharedFiles", value: "41", trendKey: "sharedFilesTrend" },
  ],
  CLIENT_ADMIN: [
    { titleKey: "requiredDocuments", value: "12", trendKey: "requiredDocumentsTrend" },
    { titleKey: "uploadedFiles", value: "28", trendKey: "uploadedFilesTrend" },
    { titleKey: "vatCycles", value: "3", trendKey: "vatCyclesTrend" },
    { titleKey: "finalFiles", value: "5", trendKey: "finalFilesTrend" },
  ],
  CLIENT_UPLOADER: [
    { titleKey: "requiredDocuments", value: "12", trendKey: "requiredDocumentsTrend" },
    { titleKey: "uploadedFiles", value: "28", trendKey: "uploadedFilesTrend" },
    { titleKey: "clarificationRequests", value: "3", trendKey: "clarificationRequestsTrend" },
    { titleKey: "rejectedFiles", value: "1", trendKey: "rejectedFilesTrend" },
  ],
  CLIENT_VIEWER: [
    { titleKey: "taxCaseMetric", value: "3", trendKey: "clientCasesTrend" },
    { titleKey: "vatCycles", value: "3", trendKey: "vatCyclesTrend" },
    { titleKey: "finalFiles", value: "5", trendKey: "finalFilesTrend" },
    { titleKey: "submissionTracking", value: "2", trendKey: "submissionTrackingTrend" },
  ],
};

export const dashboardActivityByRole: Record<Role, string[]> = {
  FIRM_OWNER: ["Nafisa Foods VAT pack moved to review", "Delta Advisory submitted partner work", "11 returns are ready for submission"],
  FIRM_ADMIN: ["New files uploaded for Dhaka Textiles", "March VAT period opened", "Partner assignment due tomorrow"],
  TAX_MANAGER: ["7 cases need final approval", "Accountant workload updated", "Revision requested for VAT reconciliation"],
  ACCOUNTANT: ["Missing bank statement requested", "Corporate return draft updated", "VAT challan matched for February"],
  DOCUMENT_CHECKER: ["Sales ledger accepted", "One bank statement rejected", "TIN certificate marked duplicate"],
  CLIENT_SUPPORT: ["Client clarification answered", "Upload reminder sent", "Final package shared with client"],
  PARTNER_USER: ["Assigned case due in 3 days", "Revision note received", "Shared file pack downloaded"],
  CLIENT_ADMIN: ["VAT return awaiting review", "Required document checklist updated", "Final acknowledgement archived"],
  CLIENT_UPLOADER: ["Bank statement uploaded", "One file needs replacement", "Clarification response pending"],
  CLIENT_VIEWER: ["Corporate return under review", "Final package available", "VAT acknowledgement archived"],
};

export const partnerFirms: PartnerFirm[] = [
  { id: "p1", name: "Delta Advisory Partners", status: "approved", contactPerson: "Imran Hossain", serviceScope: "VAT reconciliation and document checks", assignedCasesCount: 8, revisionRate: "6%", workload: "Medium" },
  { id: "p2", name: "Gulshan Compliance Services", status: "approved", contactPerson: "Tania Rahman", serviceScope: "Company return preparation", assignedCasesCount: 4, revisionRate: "3%", workload: "Low" },
  { id: "p3", name: "Chattogram Tax Associates", status: "pending", contactPerson: "Rashed Karim", serviceScope: "Regional VAT support", assignedCasesCount: 0, revisionRate: "N/A", workload: "Onboarding" },
];

export const approvedPartners = partnerFirms.filter((partner) => partner.status === "approved").map((partner) => partner.name);
