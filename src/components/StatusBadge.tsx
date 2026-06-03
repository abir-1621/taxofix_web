import { Badge } from "@/components/ui/badge";

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
  return <Badge variant={variants[status]}>{status.replaceAll("_", " ")}</Badge>;
}
