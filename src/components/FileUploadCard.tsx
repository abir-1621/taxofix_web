"use client";

import { UploadCloud } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function FileUploadCard() {
  const { t } = useI18n();

  return (
    <Card>
      <CardTitle className="mb-1">{t("uploadDocuments")}</CardTitle>
      <CardDescription className="mb-4">{t("uploadDocumentsCopy")}</CardDescription>
      <Button>
        <UploadCloud className="mr-2 h-4 w-4" /> {t("uploadFile")}
      </Button>
    </Card>
  );
}
