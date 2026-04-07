import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import { Geist, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMonoHeading = JetBrains_Mono({subsets:['latin'],variable:'--font-heading'});

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="zh-CN" className={cn("h-full", "font-sans", geist.variable, jetbrainsMonoHeading.variable)}>
      <body className="h-full flex">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
