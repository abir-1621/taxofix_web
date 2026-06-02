import { AppShell } from "@/components/AppShell";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <AppShell>
      <h1 className="mb-4 text-2xl font-semibold text-[#0F172A]">Settings</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle>Workspace Settings</CardTitle>
          <CardDescription className="mt-1">Firm profile, filing defaults, and compliance preferences.</CardDescription>
        </Card>
        <Card>
          <CardTitle>Localization Settings</CardTitle>
          <CardDescription className="mt-1">Prepare English and Bangla labels/content from a shared dictionary source.</CardDescription>
        </Card>
      </div>
    </AppShell>
  );
}
