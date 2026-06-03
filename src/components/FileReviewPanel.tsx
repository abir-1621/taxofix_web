"use client";

import { useI18n } from "@/components/I18nProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardTitle } from "@/components/ui/card";
import type { ReviewFile } from "@/lib/types";

export function FileReviewPanel({ files }: { files: ReviewFile[] }) {
  const { language, t } = useI18n();

  return (
    <Card>
      <CardTitle className="mb-4">{t("fileReviewQueue")}</CardTitle>
      <div className="space-y-3">
        {files.map((file) => (
          <div key={file.id} className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3">
            <p className="min-w-0 truncate text-sm font-medium text-slate-800">{language === "bn" && file.nameBn ? file.nameBn : file.name}</p>
            <StatusBadge status={file.status} />
          </div>
        ))}
      </div>
    </Card>
  );
}
