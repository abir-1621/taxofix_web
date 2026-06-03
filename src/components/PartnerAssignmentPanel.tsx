import { Handshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function PartnerAssignmentPanel() {
  return (
    <Card>
      <CardTitle className="mb-2">Partner Firm Assignment</CardTitle>
      <CardDescription className="mb-4">Assign overflow and specialist work to approved partner firms.</CardDescription>
      <Button variant="outline">
        <Handshake className="mr-2 h-4 w-4" /> Assign Case
      </Button>
    </Card>
  );
}
