import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://reinyg-portfolio-8e4e.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "REINYG — Systems Developer & Automation Specialist", template: "%s | REINYG" },
  description: "Portfolio of Reinniel Exciya Yalong — systems developer and automation specialist building practical web applications, workflow systems, spreadsheet automation, and business technology solutions.",
  keywords: ["REINYG","Reinniel Exciya Yalong","systems developer","automation specialist","web applications","Google Apps Script","Excel VBA","Next.js","Finacle"],
  authors: [{ name: "Reinniel Exciya Yalong" }],
  creator: "Reinniel Exciya Yalong",
  alternates: { canonical: siteUrl },
  openGraph: { title: "REINYG — Systems Developer & Automation Specialist", description: "Business understanding. Technical execution. Practical automation.", url: siteUrl, siteName: "REINYG", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}