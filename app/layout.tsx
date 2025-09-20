import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "FUTUREDGE HOMES LTD. - Professional Construction Services",
  description:
    "Trusted construction experts since 2005. Specializing in residential, commercial, renovation, and architectural design services.",
  keywords:
    "construction, building, residential, commercial, renovation, architecture, contractors",
  authors: [{ name: "FUTUREDGE HOMES LTD." }],
  openGraph: {
    title:
      "FUTUREDGE HOMES LTD. - Professional Construction Services",
    description:
      "Building the future with precision. Trusted construction experts since 2005.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FUTUREDGE HOMES LTD. - Professional Construction Services",
    description:
      "Building the future with precision. Trusted construction experts since 2005.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
