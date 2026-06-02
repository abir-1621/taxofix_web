import { UploadCloud } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function FileUploadCard() {
  return (
    <Card>
      <CardTitle className="mb-1">Upload Documents</CardTitle>
      <CardDescription className="mb-4">Secure upload for tax and VAT files.</CardDescription>
      <Button>
        <UploadCloud className="mr-2 h-4 w-4" /> Upload File
      </Button>
    </Card>
  );
}
