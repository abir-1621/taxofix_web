# TaxoFix BD — Codex Prompts for Frontend Development

Use this file inside the **`taxofix-web`** repository. Run the prompts **one milestone at a time**. After each milestone, let Codex summarize changed files, then run `npm run lint` and `npm run build` and fix errors before continuing.

Current decision: **no real authentication yet**, **no Firebase integration yet**, use **mock users/roles/permissions**. Prepare the structure so Firebase Authentication can be added later.

---

## Global Frontend Instruction

```text
You are working on the frontend repository for TaxoFix BD.

This repository is frontend only. Do not create backend files inside this repository.

TaxoFix BD is a Bangladesh-focused tax and VAT workflow platform. It is primarily operated by one main tax/VAT service firm. The platform manages clients, company clients, individual clients, VAT periods, income tax cases, uploaded tax/VAT documents, document review, submission tracking, audit history, and optional approved partner firms. Partner firms can receive selected cases only when the primary firm has workload pressure.

Current rule:
Do not implement real authentication yet.
Do not integrate Firebase yet.
Use mock users, mock roles, and mock permissions for now.
However, structure the app so Firebase Authentication can be added later.

Frontend technology target:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui if already installed or easy to add
- Lucide icons
- Framer Motion if already available or useful
- English/Bangla-ready localization structure

Design requirements:
- Premium SaaS interface.
- Bangladesh-inspired but not government-looking.
- Primary green: #006A4E
- Navy: #0F172A
- Accent red: #E11D48
- Background: #F8FAFC
- Border: #E2E8F0
- Muted text: #64748B
- White cards with soft shadows and rounded corners.
- Use Inter for English.
- Use Noto Sans Bengali or Hind Siliguri for Bangla.
- Responsive layout for desktop, tablet, and mobile.
- Avoid a basic skeleton look. The UI should feel polished enough to show to a real client.

Language requirements:
- English/Bangla language switch must work consistently.
- Centralize translation strings.
- Every major page, sidebar item, table label, button, card label, and status should be translatable.
- Store selected language in localStorage.
- Do not partially translate only a few labels.

Before editing:
1. Inspect the project structure.
2. Identify framework, routing structure, styling setup, and current components.
3. Explain what you will change.
4. Then implement.
5. Do not delete existing work unless it is clearly broken or duplicated.
6. After changes, run lint/build and fix issues.
```

---

## Milestone 1 — Stabilize Project and Design System

```text
You are inside the taxofix-web frontend repository.

Milestone 1 goal:
Stabilize the frontend skeleton and create a professional design foundation.

Tasks:
1. Inspect the current project structure.
2. Confirm whether this uses Next.js App Router.
3. Confirm Tailwind CSS setup.
4. Identify existing components, pages, and layout files.
5. Do not rewrite the whole app unless necessary.
6. Create or improve a central design system:
   - brand colors
   - typography
   - reusable cards
   - buttons
   - badges
   - table styles
   - form styles
   - page headers
   - dashboard metric cards
7. Configure fonts:
   - Inter for English
   - Noto Sans Bengali or Hind Siliguri for Bangla
8. Apply the TaxoFix BD color system:
   - primary green #006A4E
   - navy #0F172A
   - accent red #E11D48
   - background #F8FAFC
   - border #E2E8F0
   - muted text #64748B
9. Create reusable components if missing:
   - Button or StyledButton
   - Card
   - PageHeader
   - SectionHeader
   - StatusBadge
   - MetricCard
   - EmptyState
   - LoadingState
10. Keep existing routes working.
11. Run lint/build and fix issues.

Expected result:
The app should no longer look like a raw skeleton. It should have a professional visual foundation and reusable components.
```

---

## Milestone 2 — Fix English/Bangla Language System

```text
You are inside the taxofix-web frontend repository.

Milestone 2 goal:
Build a consistent English/Bangla language system.

Tasks:
1. Inspect the current language switch implementation.
2. Replace inconsistent or page-specific translation logic with a centralized dictionary or i18n utility.
3. Create a clean language utility such as:
   - useI18n()
   - t(key)
   - LanguageProvider
   - LanguageToggle
4. Store selected language in localStorage.
5. Support at least English and Bangla.
6. Translate the main UI areas:
   - Navbar
   - Landing page
   - Sidebar
   - Dashboard
   - Clients page
   - Tax cases
   - VAT periods
   - Files
   - Partner firms
   - Settings
   - Buttons
   - Statuses
   - Table headers
7. Ensure Bangla font is applied correctly when Bangla is selected.
8. Avoid mixed English/Bangla unless the term is normally used that way in Bangladesh.
9. Add fallback behavior if a translation key is missing.
10. Run lint/build and fix issues.

Expected result:
The language switch should feel complete and consistent, not average or partial.
```

---

## Milestone 3 — Premium Landing Page With 3D-Ready Hero

```text
You are inside the taxofix-web frontend repository.

Milestone 3 goal:
Redesign the landing page into a premium SaaS landing page for TaxoFix BD.

Current issue:
The skeleton landing page looks basic. It must become professional enough to show to clients or investors.

Landing page requirements:

1. Navbar:
   - TaxoFix BD logo text or simple logo mark
   - Navigation links
   - Language toggle
   - Login button
   - Get Started button
   - Mobile menu

2. Hero section:
   English headline:
   "Tax and VAT return preparation, organized for Bangladesh."

   Bangla headline:
   "বাংলাদেশের আয়কর ও ভ্যাট রিটার্ন প্রস্তুতি এখন আরও সহজ।"

   Supporting text should explain:
   - secure tax/VAT document upload
   - client collaboration
   - VAT and income tax workflow
   - review and approval
   - submission tracking
   - secure archive

3. Add a premium 3D-ready component:
   Component name: TaxHero3D

   It can be created using CSS, SVG, Framer Motion, or simple layered cards for now.
   It should visually show:
   - floating tax documents
   - VAT/Mushak-style forms
   - TIN/BIN cards
   - checklist
   - secure archive/vault
   - dashboard preview
   - upload-to-review-to-submit workflow

   Do not depend on paid external assets.
   Keep it easy to replace later with Spline or React Three Fiber.

4. Landing page sections:
   - Trusted workflow for Bangladesh tax and VAT service firms
   - How it works: Upload Documents → Review Checklist → Prepare Return → Track Submission → Archive Receipt
   - Product modules: Income Tax, VAT Return, Company Return, Client Portal, Partner Firm Delegation, Secure Archive
   - Role-based workflow: CEO/Admin, Tax Manager, Accountant, Document Checker, Client Uploader, Partner Firm
   - Security and audit trail
   - English/Bangla support
   - Final CTA

5. Visual style:
   - premium SaaS feel
   - soft gradients
   - glass cards in hero only
   - clean cards elsewhere
   - strong spacing
   - subtle animation if available
   - responsive mobile layout

6. Keep language switching fully working.
7. Do not implement real auth yet.
8. Login/Get Started buttons can go to placeholder routes.
9. Run lint/build and fix issues.

Expected result:
The landing page should feel modern, polished, and aligned with the Bangladesh tax/VAT product.
```

---

## Milestone 4 — Mock Auth, Role Simulation, and App Shell

```text
You are inside the taxofix-web frontend repository.

Milestone 4 goal:
Create the main application shell with mock authentication and role-based navigation.

Important:
Real Firebase Auth will be added later.
For now, use mock user and role switching.

Create mock roles:
- FIRM_OWNER
- FIRM_ADMIN
- TAX_MANAGER
- ACCOUNTANT
- DOCUMENT_CHECKER
- CLIENT_SUPPORT
- PARTNER_USER
- CLIENT_ADMIN
- CLIENT_UPLOADER
- CLIENT_VIEWER

Create a mock auth/user context:
- currentUser
- currentRole
- currentLanguage
- switchRole()
- switchLanguage()
- permissions
- assignedClients

Create or improve these components:
1. AppShell
2. FirmPortalShell
3. ClientPortalShell
4. Sidebar
5. Topbar
6. RoleSwitcher for development only
7. LanguageToggle
8. UserMenu placeholder
9. Breadcrumb or PageHeader
10. RoleGuard
11. PermissionGate

Navigation by role:
Firm Owner/Admin:
- Dashboard
- Clients
- Employees
- Tax Cases
- VAT Periods
- Files
- Partner Firms
- Reports
- Settings

Tax Manager:
- Dashboard
- Review Queue
- Clients
- Tax Cases
- VAT Periods
- Files
- Reports

Accountant:
- Dashboard
- Assigned Clients
- Tax Cases
- VAT Periods
- Files
- Tasks

Document Checker:
- Dashboard
- Files to Check
- Assigned Clients
- Review Logs

Partner User:
- Partner Dashboard
- Assigned Cases
- Files
- Revision Requests

Client Admin:
- Client Dashboard
- Upload Documents
- VAT Periods
- Tax Cases
- Clarifications
- Final Files

Client Uploader:
- Upload Documents
- My Files
- Clarifications

Requirements:
- Hide navigation items the current role cannot access.
- Show role-based dashboard content.
- Add clear TODO comments where Firebase Auth will later replace mock auth.
- Keep the UI professional and responsive.
- Keep English/Bangla translations complete.
- Do not add Firebase yet.
- Run lint/build and fix issues.

Expected result:
The no-auth UI should allow development role switching and role-based navigation.
```

---

## Milestone 5 — Role-Based Dashboards

```text
You are inside the taxofix-web frontend repository.

Milestone 5 goal:
Build realistic dashboard pages using mock data.

Create role-based dashboards:

1. Firm Admin Dashboard:
   - Total clients
   - Active VAT periods
   - Active tax cases
   - Pending documents
   - Files waiting for review
   - Cases under review
   - Ready for submission
   - Partner delegated cases
   - Deadline alerts
   - Employee workload preview
   - Recent activity

2. Tax Manager Dashboard:
   - Cases under review
   - Assigned clients
   - Pending approvals
   - Accountant workload
   - High priority cases
   - Revision requests

3. Accountant Dashboard:
   - Assigned clients
   - Tax/VAT cases under preparation
   - Missing documents
   - Tasks due today
   - Client clarification requests

4. Document Checker Dashboard:
   - Files pending check
   - Rejected files
   - Missing document checklist
   - Assigned client files
   - Review history

5. Partner User Dashboard:
   - Assigned cases
   - Due dates
   - Required files
   - Revision requests
   - Submit for review status

6. Client Dashboard:
   - Required documents
   - Uploaded files
   - Clarification requests
   - VAT/tax case status
   - Final package or acknowledgement status

Requirements:
- Use mock data.
- Use professional cards, tables, timelines, status badges, and alerts.
- All labels must support English/Bangla.
- Role switcher should change dashboard content.
- Keep responsive layout.
- Run lint/build and fix issues.

Expected result:
The dashboard area should look like a real SaaS product, not a placeholder.
```

---

## Milestone 6 — Clients and Client Details UI

```text
You are inside the taxofix-web frontend repository.

Milestone 6 goal:
Build professional client management pages.

Create or improve:

1. Clients page:
   - searchable client table
   - filters by client type and status
   - client type badges: Individual, SME, Company, Group Company
   - status badges
   - TIN column
   - BIN column where relevant
   - assigned staff preview
   - active cases count
   - pending documents count
   - quick action buttons

2. Client Details page:
   - client profile summary
   - TIN, BIN, tax circle, tax zone, VAT circle
   - contact information
   - assigned internal staff
   - client-side users
   - active tax cases
   - VAT periods
   - uploaded files
   - missing document checklist
   - recent activity timeline
   - internal notes area visible only for firm roles
   - client-visible notes area

3. Permissions:
   - Firm admin can see all client information.
   - Accountant sees assigned client information.
   - Document checker sees document-related sections.
   - Client user sees only their own company/client data.
   - Partner user sees only assigned case/client context.

4. Use mock data only for now.
5. Keep all labels translatable.
6. Run lint/build and fix issues.

Expected result:
Client pages should feel ready for real workflow integration.
```

---

## Milestone 7 — Tax Cases and VAT Periods UI

```text
You are inside the taxofix-web frontend repository.

Milestone 7 goal:
Build realistic Tax Cases and VAT Periods pages.

Tax Cases page requirements:
- case list table
- case type: Individual Income Tax, Company Income Tax, VAT Return, Withholding Tax
- assessment year
- tax period
- client
- assigned accountant
- reviewer
- partner firm assignment indicator
- status workflow
- deadline
- action buttons based on role

Tax case statuses:
- Draft
- Waiting for Documents
- Documents Uploaded
- Document Checking
- Under Preparation
- Needs Client Clarification
- Under Review
- Approved
- Ready for Submission
- Submitted
- Acknowledged
- Archived

VAT Periods page requirements:
- monthly VAT cards/table
- client
- year
- month
- sales placeholder
- purchases placeholder
- output VAT placeholder
- input VAT placeholder
- net payable placeholder
- status
- missing document indicator
- view details action

VAT workflow should support:
- document upload
- document checking
- preparation
- review
- ready for submission
- submitted
- acknowledgement archived

Permissions:
- Admin/manager can see broad status.
- Accountant can prepare assigned cases.
- Document checker can review documents.
- Partner user can work only on assigned cases.
- Client user can view status and upload required files.

Use mock data.
Keep English/Bangla translations.
Run lint/build and fix issues.

Expected result:
Tax and VAT workflow screens should look practical for Bangladesh firm operations.
```

---

## Milestone 8 — File Upload and Document Review UI

```text
You are inside the taxofix-web frontend repository.

Milestone 8 goal:
Build a strong document upload and file review UI using mock data and local UI state.

Client upload UI:
- Drag-and-drop upload card
- Select document category
- Select case or VAT period
- Upload progress placeholder
- Uploaded file list
- Replace rejected file action
- Clarification response area

File statuses:
- UPLOADED
- PENDING_CHECK
- ACCEPTED
- REJECTED
- NEEDS_CLARIFICATION
- DUPLICATE
- ARCHIVED

Document categories:
Income Tax:
- TIN Certificate
- Salary Certificate
- Bank Statement
- Investment Documents
- Asset Documents
- Previous Return

Company Tax:
- Audited Financial Statement
- Trial Balance
- Ledger
- AIT/TDS Certificate
- Fixed Asset Schedule
- Loan Schedule

VAT:
- Sales Register
- Purchase Register
- VAT Challan
- Mushak Form
- BIN Certificate
- Input VAT Documents
- Output VAT Documents

Internal file review UI:
- Files pending check
- File preview placeholder
- Accept file
- Reject file
- Request clarification
- Add comment
- Review history timeline
- Missing document checklist

Visibility rules:
- Client users should not see internal firm notes.
- Firm staff should see internal review notes.
- Partner users should only see files shared for assigned cases.
- Document checker should have review actions.
- Client uploader should have upload/replace actions only.

Keep English/Bangla translations.
Run lint/build and fix issues.

Expected result:
The document workflow should look realistic and useful before backend integration.
```

---

## Milestone 9 — Partner Firm Delegation UI

```text
You are inside the taxofix-web frontend repository.

Milestone 9 goal:
Build the partner firm delegation UI.

Business rule:
The primary firm owns all clients and final approval. Partner firms are approved firms that can receive selected cases during workload pressure. Partner firms can only access assigned cases.

Create or improve Partner Firms page:
- partner firm list
- status: Pending, Approved, Suspended, Terminated
- contact person
- service scope
- assigned cases count
- revision rate placeholder
- current workload placeholder
- action buttons: approve, suspend, view assigned cases, assign case

Create Partner Assignment UI:
- select tax/VAT case
- select partner firm
- scope of work
- access level: View Only, Document Check Only, Preparation Only, Preparation and Review, Full Case Work
- due date
- notes
- assign button

Create Partner User Dashboard:
- assigned cases only
- files shared with partner
- due date
- revision requests
- submit work for review
- status timeline

Visibility:
- Firm admin/tax manager can assign cases to partner firms.
- Partner user sees only assigned cases.
- Client users should not see outsourcing details unless a setting later allows transparency.
- Main firm remains final approver.

Use mock data.
Keep labels translated.
Run lint/build and fix issues.

Expected result:
The UI should support future partner-firm outsourcing without making the product a marketplace.
```

---

## Milestone 10 — Firebase-Ready Auth Structure Without Firebase

```text
You are inside the taxofix-web frontend repository.

Milestone 10 goal:
Prepare the frontend for Firebase Auth later without enabling Firebase now.

Do not install or integrate Firebase yet unless already installed.
Keep mock auth working.

Tasks:
1. Create or improve auth structure:
   - auth provider
   - mock auth adapter
   - future firebase auth adapter placeholder
2. Define expected user profile shape:
   - id
   - email
   - fullName
   - userType
   - activeOrganizationId
   - organizationType
   - role
   - preferredLanguage
3. Define expected backend profile endpoint:
   GET /auth/me
4. Create placeholder functions:
   - login()
   - logout()
   - getCurrentUser()
   - refreshProfile()
   - getIdTokenPlaceholder()
5. Add TODO comments explaining:
   - Firebase will handle login/registration.
   - Firebase ID token will be sent as Authorization: Bearer <token>.
   - Backend will verify token and return platform profile.
6. Ensure protected dashboard pages still work using mock auth.
7. Do not break role switcher.
8. Run lint/build and fix issues.

Expected result:
The frontend remains no-auth for UI development, but Firebase integration later will be easy.
```

---

## Milestone 11 — API Client Contract Preparation

```text
You are inside the taxofix-web frontend repository.

Milestone 11 goal:
Prepare the frontend API client so mock data can later be replaced by backend calls.

Tasks:
1. Create or improve src/lib/api.ts.
2. Use environment variable:
   NEXT_PUBLIC_API_BASE_URL
3. Create typed API functions for:
   - getCurrentProfile
   - getFirmDashboardSummary
   - getClients
   - getClientById
   - getTaxCases
   - getVATPeriods
   - getFiles
   - getPartnerFirms
   - getTasks
   - getAuditLogs
4. For now, keep pages using mock data unless a backend is running.
5. Add a clean data layer where mock data and real API data can be swapped.
6. Add error and loading states.
7. Do not integrate real auth yet.
8. Run lint/build and fix issues.

Expected result:
The frontend should be ready to connect to FastAPI later without major UI rewrite.
```

---

## Milestone 12 — Frontend QA and Polish

```text
You are inside the taxofix-web frontend repository.

Milestone 12 goal:
Perform frontend QA and polish.

Tasks:
1. Inspect all pages visually through code structure.
2. Fix inconsistent spacing, typography, card styles, colors, and responsive behavior.
3. Ensure language switch works across all important pages.
4. Ensure role switcher changes dashboard/navigation correctly.
5. Ensure no backend or Firebase dependency blocks the UI.
6. Ensure every major empty state looks professional.
7. Ensure tables are readable on smaller screens.
8. Ensure buttons and status badges are consistent.
9. Run:
   npm run lint
   npm run build
10. Fix all errors.
11. Summarize:
   - completed features
   - changed files
   - remaining TODOs
   - next recommended milestone

Expected result:
The frontend should be clean, professional, and ready for backend integration later.
```
