<div align="center">

# 🤖 Learn OpenHarness | 学习 OpenHarness

**Official Interactive Tutorial for OpenHarness – Zero to Hero in 12 Chapters**

**OpenHarness 官方交互式教程 — 12 章从零到精通**

*Learn OpenHarness like Claude Code: Agent Loop, Tools, Memory, Multi-Agent & more*

*像理解 Claude Code 一样学习 OpenHarness：Agent Loop、工具系统、记忆、多 Agent 协作……*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-radix--luma-black?style=flat-square)](https://ui.shadcn.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[**在线体验 Live Demo →**](https://learn-openharness.vercel.app) &nbsp;·&nbsp; [提 Issue](https://github.com/joyehuang/Learn-Open-Harness/issues) &nbsp;·&nbsp; [贡献 Contribute](#贡献--contributing)

---

**作者**：[joyehuang.me](https://joyehuang.me) &nbsp;·&nbsp; [小红书（3.2万赞藏）→ 来看看我的主页](https://xhslink.com/m/AesdUI88Jar)

</div>

> **如果这个零基础教程帮到你，点个 ⭐ 支持一下开源 AI 教育项目～ 目标 10k stars！**
>
> **If this zero-to-hero tutorial helps you understand AI Agents, give us a ⭐ — Goal: 10k stars!**

---

## 🌟 What is this? | 这是什么？

<table>
<tr>
<td width="50%">

### English

**OpenHarness** is the infrastructure that turns LLMs from "can only talk" into "can actually do things" — it powers AI coding assistants like **Claude Code** and **Cursor**.

But with **~11,700 lines** of source code, the learning curve is steep.

This project breaks it down into **12 interactive chapters across 4 phases** — real-world analogies, live code, animated diagrams, and hands-on simulators. **No AI or programming experience required.**

</td>
<td width="50%">

### 中文

**OpenHarness** 是让大语言模型从「只会说话」变成「能做事」的关键基础设施 —— 它是 **Claude Code**、**Cursor** 等 AI 编程助手背后的架构模式。

但源码有 **~11,700 行**，概念繁多，门槛不低。

这个项目把它拆解成 **12 个章节、4 个阶段**，用通俗类比 + 真实代码 + 交互演示，带你从零理解每一个核心概念。**不需要任何 AI 或编程基础。**

</td>
</tr>
</table>

## ✨ Features | 特性

- **📖 12 Chapters / 12 章系统课程** — From "What is an AI Agent" to "Multi-Agent Collaboration", step by step
- **🎮 Interactive Components / 交互式组件** — Agent Loop animation, Tool Explorer, Permission Sandbox, Architecture Diagram
- **🧠 Instant Quizzes / 即时测验** — Embedded quizzes in every chapter with real-time feedback
- **📊 Progress Tracking / 学习进度追踪** — Auto-saves completed chapters, pick up anytime
- **🌙 Dark Mode / 深色模式** — Deep navy palette, easy on the eyes
- **📱 Fully Responsive / 全平台适配** — Mobile, tablet, desktop

## 📚 Curriculum | 课程大纲

```
Harness = Tools + Knowledge + Observation + Action + Permissions
```

### Phase A · Fundamentals | 基础认知
| # | Chapter | Key Concepts |
|---|---------|-------------|
| 01 | What is AI Agent / 什么是 AI Agent | LLM vs Agent — from "talking" to "doing" |
| 02 | What is Harness / 什么是 Harness | The Agent's equipment system |
| 03 | The Harness Equation / Harness 公式 | Tools + Knowledge + Observation + Action + Permissions |

### Phase B · Core Mechanisms | 核心机制
| # | Chapter | Key Concepts |
|---|---------|-------------|
| 04 | Agent Loop | Think → Act → Observe, the infinite loop |
| 05 | Tool System / 工具系统 | 43+ built-in tools, unified interface + registry pattern |
| 06 | Permission System / 权限系统 | Three-tier security guardrails |
| 07 | Hook System | Lifecycle events, inject custom logic at critical moments |

### Phase C · Intelligence Layer | 智能层
| # | Chapter | Key Concepts |
|---|---------|-------------|
| 08 | Skills / 技能系统 | On-demand knowledge loading |
| 09 | Memory / 记忆系统 | Cross-session persistence, 4 memory types |
| 10 | MCP Integration / MCP 集成 | Standardized external world connection (like USB) |

### Phase D · Advanced | 进阶
| # | Chapter | Key Concepts |
|---|---------|-------------|
| 11 | Multi-Agent / 多 Agent 协作 | Parallel sub-agents, divide and conquer |
| 12 | Full Flow / 全流程串联 | Complete journey from user input to Agent response |

## 🚀 Quick Start | 快速开始

```bash
git clone https://github.com/joyehuang/Learn-Open-Harness.git
cd Learn-Open-Harness
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start learning.

### One-Click Deploy | 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/joyehuang/Learn-Open-Harness)

## 🛠 Tech Stack | 技术栈

| Tech | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org) | App Router, SSR |
| [TypeScript 5](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [shadcn/ui](https://ui.shadcn.com) (radix-luma) | UI components |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark mode |
| [Prism](https://prismjs.com) | Code highlighting |
| [HugeIcons](https://hugeicons.com) | Icons |

## 🤝 Contribute | 贡献 {#贡献--contributing}

Contributions welcome in any form!

- **Fix content errors**: PR to `src/content/chapter-XX.ts`
- **Add chapters**: Follow the existing format in `src/content/`
- **Improve interactive components**: `src/components/interactive/`
- **Translate**: Help bring this tutorial to more languages

```
src/content/
├── types.ts          # Content type definitions
├── chapters.ts       # Chapter registry
├── chapter-01.ts     # Chapter 1 content
└── ...
```

Each chapter consists of `section` blocks: `text`, `analogy`, `code`, `quiz`, `key-concept`, `comparison`, `diagram` — easy to modify, zero barrier to contribute.

## 📄 License

MIT License — free to use, modify, and distribute.

---

<div align="center">

**⭐ 如果这个零基础教程帮到你，点个 Star 支持一下开源 AI 教育项目～ 目标 10k stars！⭐**

**⭐ If this tutorial helped you understand AI Agents, star the repo — Goal: 10k stars! ⭐**

<br/>

<sub>Built with Next.js, shadcn/ui & lots of ☕ — by <a href="https://github.com/joyehuang">@joyehuang</a></sub>
<br/>
<sub>
  作者：<a href="https://joyehuang.me">joyehuang.me</a> &nbsp;·&nbsp;
  我在小红书收获了 3.2 万次赞与收藏，<a href="https://xhslink.com/m/AesdUI88Jar">来看看我的主页 →</a>
</sub>

</div>
