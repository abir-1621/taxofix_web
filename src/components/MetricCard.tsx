"use client";

import { TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function MetricCard({ title, value, trend, icon: Icon }: { title: string; value: string; trend: string; icon?: LucideIcon }) {
  return (
    <div className="group transition duration-200 hover:-translate-y-0.5">
      <Card className="relative min-h-36 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#006A4E] via-emerald-500 to-transparent opacity-80" />
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>{title}</CardDescription>
            <CardTitle className="mt-2 text-3xl">{value}</CardTitle>
          </div>
          {Icon ? (
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#006A4E]/10 text-[#006A4E] transition group-hover:bg-[#006A4E] group-hover:text-white">
              <Icon className="h-5 w-5" />
            </span>
          ) : null}
        </div>
        <p className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#006A4E]/10 px-2.5 py-1 text-xs font-bold text-[#006A4E]">
          <TrendingUp className="h-3.5 w-3.5" />
          {trend}
        </p>
      </Card>
    </div>
  );
}
