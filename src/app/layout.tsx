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
  title: "学习 OpenHarness — AI Agent 基础设施入门",
  description:
    "面向零基础学习者的 OpenHarness 交互式教程，了解 AI Agent Harness 的核心概念与架构",
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
