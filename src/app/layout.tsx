import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Geist, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import { cn } from "@/lib/utils";
import { defaultLocale } from "@/i18n/config";

const jetbrainsMonoHeading = JetBrains_Mono({subsets:['latin'],variable:'--font-heading'});
const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const notoSansSC = Noto_Sans_SC({subsets:['latin'],weight:['400','500','600','700'],variable:'--font-chinese',display:'swap'});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://learn.openharness.dev");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Learn OpenHarness — Official Interactive AI Agent Tutorial",
    template: "%s | Learn OpenHarness",
  },
  description:
    "Official Interactive Tutorial for OpenHarness – Zero to Hero in 12 Chapters. Learn the architecture behind Claude Code: Agent Loop, Tools, Memory, Multi-Agent.",
  keywords: [
    "OpenHarness", "AI Agent", "Agent Loop", "Claude Code", "Harness",
    "AI infrastructure", "LLM tools", "multi-agent", "MCP",
    "interactive tutorial", "zero to hero",
  ],
  openGraph: {
    type: "website",
    siteName: "Learn OpenHarness",
    title: "Learn OpenHarness — Official Interactive AI Agent Tutorial",
    description:
      "Official Interactive Tutorial for OpenHarness – Zero to Hero in 12 Chapters. Learn the architecture behind Claude Code: Agent Loop, Tools, Memory, Multi-Agent.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn OpenHarness — Official Interactive AI Agent Tutorial",
    description:
      "Official Interactive Tutorial for OpenHarness – Zero to Hero in 12 Chapters.",
  },
  verification: {
    google: "89bb8d3c80fa0fd7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang is set to defaultLocale here; locale-specific layouts set it via hreflang alternates in metadata
    <html lang={defaultLocale} suppressHydrationWarning className={cn("h-full", "font-sans", geist.variable, jetbrainsMonoHeading.variable, notoSansSC.variable)}>
      <body className="h-full flex">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
