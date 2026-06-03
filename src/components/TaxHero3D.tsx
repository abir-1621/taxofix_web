import { Box } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function TaxHero3D() {
  return (
    <Card className="relative h-80 overflow-hidden border-[#006A4E]/20 bg-gradient-to-br from-white to-[#006A4E]/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,106,78,0.12),transparent_45%),radial-gradient(circle_at_90%_70%,rgba(225,29,72,0.12),transparent_50%)]" />
      <div className="relative flex h-full flex-col items-center justify-center gap-4 text-center">
        <Box className="h-10 w-10 text-[#006A4E]" />
        <CardTitle>Spline / R3F Placeholder</CardTitle>
        <CardDescription>
          Ready for immersive tax workflow visualization with Spline or React Three Fiber.
        </CardDescription>
      </div>
    </Card>
  );
}
