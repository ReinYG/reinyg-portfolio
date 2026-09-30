import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reinyg.dev"),
  title: {
    default: "REINYG — Systems, Automation & Technology",
    template: "%s | REINYG",
  },
  description:
    "Portfolio of Reinniel Exciya Yalong — systems developer, automation specialist, banking technology professional, and business process problem solver.",
  keywords: [
    "REINYG",
    "Reinniel Yalong",
    "systems developer",
    "automation specialist",
    "business process automation",
    "Next.js",
    "Python",
    "Google Apps Script",
    "Excel VBA",
    "Finacle",
  ],
  openGraph: {
    title: "REINYG — Systems, Automation & Technology",
    description:
      "Building practical systems that turn complex processes into simpler digital workflows.",
    url: "https://reinyg.dev",
    siteName: "REINYG",
    type: "website",
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
