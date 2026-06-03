import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxoFix BD",
  description: "Bangladesh-focused tax and VAT workflow SaaS frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-taxofix">{children}</body>
    </html>
  );
}
