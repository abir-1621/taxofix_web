"use client";

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/I18nProvider";

const variants = {
  active: "success",
  pending: "warning",
  review: "danger",
  draft: "default",
  in_review: "warning",
  filed: "success",
  open: "default",
  ready: "brand",
  submitted: "success",
  uploaded: "default",
  checking: "warning",
  approved: "success",
  rejected: "danger",
} as const;

export function StatusBadge({ status }: { status: keyof typeof variants }) {
  const { t } = useI18n();

  return <Badge variant={variants[status]}>{t(status)}</Badge>;
}
