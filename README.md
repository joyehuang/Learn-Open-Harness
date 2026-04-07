<div align="center">

# 🤖 Learn OpenHarness

**Official Interactive Tutorial for OpenHarness – Zero to Hero in 12 Chapters**

*Learn OpenHarness like Claude Code: Agent Loop, Tools, Memory, Multi-Agent & more*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-radix--luma-black?style=flat-square)](https://ui.shadcn.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[**Live Demo →**](https://learn-openharness.vercel.app) &nbsp;·&nbsp; [Issues](https://github.com/joyehuang/Learn-Open-Harness/issues) &nbsp;·&nbsp; [Contributing](#contributing) &nbsp;·&nbsp; [中文版](./README.zh-CN.md)

---

**Author**: [joyehuang.me](https://joyehuang.me) &nbsp;·&nbsp; [Xiaohongshu (32k likes) →](https://xhslink.com/m/AesdUI88Jar)

</div>

> **If this zero-to-hero tutorial helps you understand AI Agents, give us a ⭐ — Goal: 10k stars!**

---

## What is this?

**OpenHarness** is the infrastructure that turns LLMs from "can only talk" into "can actually do things" — it powers AI coding assistants like **Claude Code** and **Cursor**.

But with **~11,700 lines** of source code, the learning curve is steep.

This project breaks it down into **12 interactive chapters across 4 phases** — real-world analogies, live code, animated diagrams, and hands-on simulators. **No AI or programming experience required.**

## Features

- **📖 12 Chapters** — From "What is an AI Agent" to "Multi-Agent Collaboration", step by step
- **🎮 Interactive Components** — Agent Loop animation, Tool Explorer, Permission Sandbox, Architecture Diagram
- **🧠 Instant Quizzes** — Embedded quizzes in every chapter with real-time feedback
- **📊 Progress Tracking** — Auto-saves completed chapters, pick up anytime
- **🌙 Dark Mode** — Deep navy palette, easy on the eyes
- **📱 Fully Responsive** — Mobile, tablet, desktop

## Curriculum

```
Harness = Tools + Knowledge + Observation + Action + Permissions
```

### Phase A · Fundamentals
| # | Chapter | Key Concepts |
|---|---------|-------------|
| 01 | What is AI Agent | LLM vs Agent — from "talking" to "doing" |
| 02 | What is Harness | The Agent's equipment system |
| 03 | The Harness Equation | Tools + Knowledge + Observation + Action + Permissions |

### Phase B · Core Mechanisms
| # | Chapter | Key Concepts |
|---|---------|-------------|
| 04 | Agent Loop | Think → Act → Observe, the infinite loop |
| 05 | Tool System | 43+ built-in tools, unified interface + registry pattern |
| 06 | Permission System | Three-tier security guardrails |
| 07 | Hook System | Lifecycle events, inject custom logic at critical moments |

### Phase C · Intelligence Layer
| # | Chapter | Key Concepts |
|---|---------|-------------|
| 08 | Skills | On-demand knowledge loading |
| 09 | Memory | Cross-session persistence, 4 memory types |
| 10 | MCP Integration | Standardized external world connection (like USB) |

### Phase D · Advanced
| # | Chapter | Key Concepts |
|---|---------|-------------|
| 11 | Multi-Agent | Parallel sub-agents, divide and conquer |
| 12 | Full Flow | Complete journey from user input to Agent response |

## Quick Start

```bash
git clone https://github.com/joyehuang/Learn-Open-Harness.git
cd Learn-Open-Harness
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start learning.

## Tech Stack

| Tech | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org) | App Router, SSR |
| [TypeScript 5](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [shadcn/ui](https://ui.shadcn.com) (radix-luma) | UI components |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark mode |
| [Prism](https://prismjs.com) | Code highlighting |
| [HugeIcons](https://hugeicons.com) | Icons |

## Contributing

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

## License

MIT License — free to use, modify, and distribute.

---

<div align="center">

**⭐ If this tutorial helped you understand AI Agents, star the repo — Goal: 10k stars! ⭐**

<br/>

<sub>Built with Next.js, shadcn/ui & lots of ☕ — by <a href="https://github.com/joyehuang">@joyehuang</a></sub>
<br/>
<sub>
  <a href="https://joyehuang.me">joyehuang.me</a> &nbsp;·&nbsp;
  <a href="https://xhslink.com/m/AesdUI88Jar">Xiaohongshu (32k likes) →</a>
</sub>

</div>
