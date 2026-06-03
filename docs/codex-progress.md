# TaxoFix Web Codex Progress

## 2026-06-03

### Current Audit
- Frontend repo detected at `D:\TaxoFix\taxofix_web`.
- Framework: Next.js App Router, TypeScript, Tailwind CSS v4, React 19, lucide-react, framer-motion.
- Existing work includes premium landing page, shared UI primitives, centralized i18n, major routes, role guards, permission gates, mock data, and API base client.

### Completed Before This Session
- Milestone 1: Design foundation mostly complete.
- Milestone 2: Centralized language system exists and selected language persists in `localStorage`.
- Milestone 3: Premium landing page and `TaxHero3D` exist.
- Partial Milestone 4: App shell, role guards, permissions, and mock users exist.
- Partial Milestone 10/11: Mock Firebase-ready login UI and API base client exist.

### Active Milestone
- Milestone 4 and 5: normalize mock roles, add mock auth provider, add role switcher, filter navigation by role, and improve role dashboard content.

### Completed This Session
- Added full milestone role set: `FIRM_OWNER`, `FIRM_ADMIN`, `TAX_MANAGER`, `ACCOUNTANT`, `DOCUMENT_CHECKER`, `CLIENT_SUPPORT`, `PARTNER_USER`, `CLIENT_ADMIN`, `CLIENT_UPLOADER`, `CLIENT_VIEWER`.
- Added `MockAuthProvider` with persisted development role selection and Firebase ID token placeholder.
- Added `RoleSwitcher` for development-only role simulation.
- Updated `AppShell` to filter navigation by selected role.
- Updated dashboard to use mock auth context and show role-specific metrics/recent activity.
- Expanded API client contract with dashboard, profile, clients, cases, VAT, files, partners, tasks, and audit-log functions.
- Ran `npm.cmd run lint` successfully.
- Ran `npm.cmd run build` successfully.

### Completed Follow-up Milestone Pass
- Upgraded Clients page with search, status/type filters, TIN/BIN, assigned staff, active cases, pending documents, and quick profile actions.
- Upgraded Client Detail page with profile summary, tax/VAT identifiers, contact data, assigned staff, client users, related cases, VAT periods, files, missing-document checklist, activity timeline, and notes.
- Upgraded Tax Cases page/table with case type, assessment year, tax period, client, accountant, reviewer, partner assignment indicator, status, deadline, and actions.
- Upgraded VAT Period cards with client, year/month, sales, purchases, output/input VAT, net payable, missing document indicators, status, and details action.
- Upgraded Files page components with document category selection, case/VAT target selection, drag/drop placeholder, progress, file preview, review actions, replacement/clarification flow, and review notes.
- Upgraded Partner Firms page with partner status, contact person, service scope, assigned cases, revision rate, workload, approve/suspend actions, and partner assignment form with access levels.
- Browser sanity checked `/clients`, `/clients/c1`, `/tax-cases`, `/vat`, `/files`, and `/partner-firms`.
- Re-ran `npm.cmd run lint` and `npm.cmd run build` successfully.

### Remaining TODOs
- Add real data-loading states once backend integration begins.
- Add deeper mobile visual QA and empty states for all table/list combinations.
- Replace mock-only form actions with API calls when auth/API integration starts.
