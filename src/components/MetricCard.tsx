"use client";

import type { LucideIcon } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function MetricCard({ title, value, trend, icon: Icon }: { title: string; value: string; trend: string; icon?: LucideIcon }) {
  return (
    <div className="transition duration-200 hover:-translate-y-0.5">
      <Card className="relative overflow-hidden">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>{title}</CardDescription>
            <CardTitle className="mt-2 text-3xl">{value}</CardTitle>
          </div>
          {Icon ? (
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006A4E]/10 text-[#006A4E]">
              <Icon className="h-5 w-5" />
            </span>
          ) : null}
        </div>
        <p className="mt-3 text-xs font-semibold text-[#006A4E]">{trend}</p>
      </Card>
    </div>
  );
}
