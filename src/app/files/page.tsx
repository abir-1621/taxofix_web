"use client";

import { FileReviewPanel } from "@/components/FileReviewPanel";
import { FileUploadCard } from "@/components/FileUploadCard";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { useI18n } from "@/components/I18nProvider";
import { reviewFiles } from "@/lib/mock-data";

export default function FilesPage() {
  const { t } = useI18n();

  return (
    <FirmPortalShell>
      <h1 className="mb-4 text-3xl font-bold text-[#0F172A]">{t("files")}</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <FileUploadCard />
        <FileReviewPanel files={reviewFiles} />
      </div>
    </FirmPortalShell>
  );
}
