"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Building2, Mail, Phone } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const { t } = useI18n();
  const router = useRouter();
  const goToDashboard = () => router.push("/dashboard");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-8">
      <Card className="w-full max-w-md">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#006A4E] text-white">
            <Building2 className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-[#006A4E]">{t("brand")}</p>
            <CardTitle>{t("loginTitle")}</CardTitle>
          </div>
        </div>
        <CardDescription className="mt-1">{t("loginCopy")}</CardDescription>

        <div className="mt-5 space-y-3">
          <Button className="w-full bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50" type="button" onClick={goToDashboard}>
            <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-bold text-[#E11D48]">
              G
            </span>
            {t("continueWithGoogle")}
          </Button>
          <div className="relative py-1">
            <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
            <span className="relative mx-auto block w-fit bg-white px-3 text-xs font-semibold uppercase text-slate-400">{t("or")}</span>
          </div>
        </div>

        <form className="mt-2 space-y-3">
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input className="pl-9" placeholder={t("phoneNumber")} type="tel" />
          </div>
          <Button className="w-full" type="button" onClick={goToDashboard}>
            <Phone className="mr-2 h-4 w-4" />
            {t("sendMockOtp")}
          </Button>
          <Button className="w-full" variant="outline" type="button" onClick={goToDashboard}>
            <Mail className="mr-2 h-4 w-4" />
            {t("useEmailMock")}
          </Button>
        </form>
        <p className="mt-4 rounded-lg border border-[#006A4E]/20 bg-[#006A4E]/5 px-3 py-2 text-xs leading-5 text-slate-600">
          {t("firebaseMockNote")}
        </p>
        <p className="mt-4 text-sm text-slate-600">
          {t("newHere")}{" "}
          <Link className="font-medium text-[#006A4E]" href="/register">
            {t("createAccount")}
          </Link>
        </p>
      </Card>
    </main>
  );
}
