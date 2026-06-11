"use client";

import { UploadCloud } from "lucide-react";

import { FileReviewPanel } from "@/components/FileReviewPanel";
import { FileUploadCard } from "@/components/FileUploadCard";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { PageHeader, PageHeaderPill } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { reviewFiles } from "@/lib/mock-data";

export default function FilesPage() {
  const { t } = useI18n();

  return (
    <FirmPortalShell>
      <PageHeader
        eyebrow={t("documentQueue")}
        title={t("files")}
        description={t("pageFilesDescription")}
        actions={
          <Button type="button">
            <UploadCloud className="h-4 w-4" />
            {t("uploadFile")}
          </Button>
        }
      >
        <PageHeaderPill>{reviewFiles.length} {t("reviewQueue")}</PageHeaderPill>
        <PageHeaderPill className="border-[#006A4E]/20 bg-[#006A4E]/10 text-[#006A4E]">{t("submissionTracking")}</PageHeaderPill>
      </PageHeader>
      <div className="grid gap-4 lg:grid-cols-2">
        <FileUploadCard />
        <FileReviewPanel files={reviewFiles} />
      </div>
    </FirmPortalShell>
  );
}
