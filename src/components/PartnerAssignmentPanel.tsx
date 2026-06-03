"use client";

import { Handshake } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function PartnerAssignmentPanel() {
  const { t } = useI18n();

  return (
    <Card>
      <CardTitle className="mb-2">{t("partnerAssignment")}</CardTitle>
      <CardDescription className="mb-4">{t("partnerAssignmentCopy")}</CardDescription>
      <Button variant="outline">
        <Handshake className="mr-2 h-4 w-4" /> {t("assignCase")}
      </Button>
    </Card>
  );
}
