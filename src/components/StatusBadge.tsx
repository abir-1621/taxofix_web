"use client";

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/I18nProvider";

const variants = {
  active: "success",
  pending: "warning",
  review: "danger",
  draft: "default",
  waiting_for_documents: "warning",
  documents_uploaded: "brand",
  document_checking: "warning",
  under_preparation: "brand",
  needs_client_clarification: "danger",
  in_review: "warning",
  approved: "success",
  ready_for_submission: "brand",
  submitted: "success",
  acknowledged: "success",
  archived: "default",
  filed: "success",
  open: "default",
  ready: "brand",
  uploaded: "default",
  pending_check: "warning",
  checking: "warning",
  accepted: "success",
  rejected: "danger",
  needs_clarification: "danger",
  duplicate: "warning",
  suspended: "danger",
  terminated: "danger",
} as const;

export function StatusBadge({ status }: { status: keyof typeof variants }) {
  const { t } = useI18n();

  return <Badge variant={variants[status]}>{t(status)}</Badge>;
}
