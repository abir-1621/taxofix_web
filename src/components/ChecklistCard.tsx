import { CheckSquare2 } from "lucide-react";

import { Card, CardTitle } from "@/components/ui/card";

export function ChecklistCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardTitle className="mb-4">{title}</CardTitle>
      <ul className="space-y-2 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckSquare2 className="h-4 w-4 text-[#006A4E]" /> {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
