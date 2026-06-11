"use client";

import { Eye, MessageSquareText, RotateCcw, ThumbsDown, ThumbsUp } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { ReviewFile } from "@/lib/types";

export function FileReviewPanel({ files }: { files: ReviewFile[] }) {
  const { language, t } = useI18n();
  const activeFile = files[0];

  return (
    <Card>
      <CardTitle className="mb-4">{t("fileReviewQueue")}</CardTitle>
      <div className="grid gap-4 xl:grid-cols-[1fr_0.85fr]">
        <div className="space-y-3">
          {files.map((file) => (
            <div key={file.id} className="rounded-lg border border-slate-200 bg-slate-50/60 p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-800">{language === "bn" && file.nameBn ? file.nameBn : file.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{file.category} · {file.caseTitle}</p>
                  <p className="mt-1 text-xs text-slate-500">{t("uploadedBy")}: {file.uploadedBy}</p>
                </div>
                <StatusBadge status={file.status} />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button size="sm" variant="outline"><Eye className="h-3.5 w-3.5" />{t("viewDetails")}</Button>
                {file.status === "rejected" || file.status === "needs_clarification" ? (
                  <Button size="sm" variant="outline"><RotateCcw className="h-3.5 w-3.5" />{t("replaceFile")}</Button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <CardTitle className="text-sm">{t("filePreview")}</CardTitle>
          <div className="mt-3 flex h-40 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-sm font-bold text-slate-400">
            {activeFile.name}
          </div>
          <CardDescription className="mt-3">{activeFile.internalNote ?? t("reviewHistoryTimeline")}</CardDescription>
          <div className="mt-4 grid gap-2">
            <Button><ThumbsUp className="h-4 w-4" />{t("acceptFile")}</Button>
            <Button variant="outline"><ThumbsDown className="h-4 w-4" />{t("rejectFile")}</Button>
            <Button variant="outline"><MessageSquareText className="h-4 w-4" />{t("requestClarification")}</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
