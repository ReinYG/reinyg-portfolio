import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://reinyg-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Reinniel Yalong — Systems Developer & Automation Specialist", template: "%s | Reinniel Yalong" },
  description:
    "Professional portfolio of Reinniel Exciya Yalong — a senior manager with a foundation in accounting and auditing who builds business systems, workflow applications, automation tools, and practical software solutions.",
  keywords: [
    "Reinniel Exciya Yalong",
    "systems developer",
    "automation specialist",
    "business systems",
    "accounting automation",
    "workflow applications",
    "web applications",
    "Python",
    "Next.js",
    "Google Apps Script",
    "Excel VBA",
    "PostgreSQL"
  ],
  authors: [{ name: "Reinniel Exciya Yalong" }],
  creator: "Reinniel Exciya Yalong",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Reinniel Yalong — Systems Development & Automation",
    description: "Accounting foundation. Audit discipline. Developer mindset.",
    url: siteUrl,
    siteName: "Reinniel Yalong Portfolio",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
