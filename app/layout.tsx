import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://reinyg-portfolio-8e4e.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "REINYG — Systems, Automation & Technology",
    template: "%s | REINYG",
  },
  description:
    "Portfolio of Reinniel Exciya Yalong — systems developer and automation specialist focused on practical web applications, business process automation, spreadsheet engineering, and enterprise technology.",
  keywords: [
    "REINYG",
    "Reinniel Yalong",
    "systems developer",
    "automation specialist",
    "business process automation",
    "web application development",
    "Next.js",
    "Python",
    "Google Apps Script",
    "Excel VBA",
    "Finacle",
  ],
  authors: [{ name: "Reinniel Exciya Yalong" }],
  creator: "Reinniel Exciya Yalong",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "REINYG — Systems, Automation & Technology",
    description:
      "Building practical systems that turn complex processes into simpler digital workflows.",
    url: siteUrl,
    siteName: "REINYG",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "REINYG — Systems, Automation & Technology",
    description:
      "Systems development, automation, web applications, spreadsheet engineering, and enterprise technology.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
