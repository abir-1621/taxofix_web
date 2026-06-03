import { FileReviewPanel } from "@/components/FileReviewPanel";
import { FileUploadCard } from "@/components/FileUploadCard";
import { FirmPortalShell } from "@/components/FirmPortalShell";
import { reviewFiles } from "@/lib/mock-data";

export default function FilesPage() {
  return (
    <FirmPortalShell>
      <h1 className="mb-4 text-2xl font-semibold text-[#0F172A]">Files</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <FileUploadCard />
        <FileReviewPanel files={reviewFiles} />
      </div>
    </FirmPortalShell>
  );
}
