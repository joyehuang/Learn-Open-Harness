import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "@/components/layout/Sidebar";
import { Providers } from "@/components/providers";
import { Geist, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMonoHeading = JetBrains_Mono({subsets:['latin'],variable:'--font-heading'});
const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const notoSansSC = Noto_Sans_SC({subsets:['latin'],weight:['400','500','600','700'],variable:'--font-chinese',display:'swap'});

export const metadata: Metadata = {
  title: "Learn OpenHarness — Official Interactive AI Agent Tutorial | 学习 OpenHarness",
  description:
    "Official Interactive Tutorial for OpenHarness – Zero to Hero in 12 Chapters. Learn OpenHarness like Claude Code: Agent Loop, Tools, Memory, Multi-Agent. 面向零基础的 AI Agent 交互式教程。",
  keywords: [
    "OpenHarness", "AI Agent", "Agent Loop", "Claude Code", "Harness",
    "AI infrastructure", "LLM tools", "multi-agent", "MCP",
    "interactive tutorial", "zero to hero", "AI 教程", "Agent 架构",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={cn("h-full", "font-sans", geist.variable, jetbrainsMonoHeading.variable, notoSansSC.variable)}>
      <body className="h-full flex">
        <Providers>
          <Sidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
