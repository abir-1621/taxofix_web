import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4">
      <Card className="w-full max-w-md">
        <CardTitle>Register for TaxoFix BD</CardTitle>
        <CardDescription className="mt-1">Onboard firm staff, clients, and partner firms.</CardDescription>
        <form className="mt-5 space-y-3">
          <Input placeholder="Full Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Company / Firm" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full">Create Account</Button>
        </form>
        <p className="mt-4 text-sm text-slate-600">
          Already have an account?{" "}
          <Link className="font-medium text-[#006A4E]" href="/login">
            Login
          </Link>
        </p>
      </Card>
    </main>
  );
}
