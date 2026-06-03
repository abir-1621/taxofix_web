import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4">
      <Card className="w-full max-w-md">
        <CardTitle>Login to TaxoFix BD</CardTitle>
        <CardDescription className="mt-1">Secure sign-in for firm, partner, and client users.</CardDescription>
        <form className="mt-5 space-y-3">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full">Login</Button>
        </form>
        <p className="mt-4 text-sm text-slate-600">
          New here?{" "}
          <Link className="font-medium text-[#006A4E]" href="/register">
            Create an account
          </Link>
        </p>
      </Card>
    </main>
  );
}
