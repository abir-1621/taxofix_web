import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardTitle } from "@/components/ui/card";
import type { ReviewFile } from "@/lib/types";

export function FileReviewPanel({ files }: { files: ReviewFile[] }) {
  return (
    <Card>
      <CardTitle className="mb-4">File Review Queue</CardTitle>
      <div className="space-y-3">
        {files.map((file) => (
          <div key={file.id} className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 p-3">
            <p className="text-sm font-medium text-slate-800">{file.name}</p>
            <StatusBadge status={file.status} />
          </div>
        ))}
      </div>
    </Card>
  );
}
