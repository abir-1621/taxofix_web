"use client";

import Link from "next/link";

import { useI18n } from "@/components/I18nProvider";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const { t } = useI18n();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-8">
      <Card className="w-full max-w-md">
        <CardTitle>{t("registerTitle")}</CardTitle>
        <CardDescription className="mt-1">{t("registerCopy")}</CardDescription>
        <form className="mt-5 space-y-3">
          <Input placeholder={t("fullName")} />
          <Input placeholder={t("email")} type="email" />
          <Input placeholder={t("companyFirm")} />
          <Input placeholder={t("password")} type="password" />
          <Button className="w-full">{t("createAccount")}</Button>
        </form>
        <p className="mt-4 text-sm text-slate-600">
          {t("alreadyHaveAccount")}{" "}
          <Link className="font-medium text-[#006A4E]" href="/dashboard">
            {t("login")}
          </Link>
        </p>
      </Card>
    </main>
  );
}
