<div align="center">

# 🤖 Learn OpenHarness

**The interactive companion to [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) — built the day after OpenHarness launched.**

Zero to Hero in 12 chapters. Learn the architecture behind Claude Code: Agent Loop, Tools, Memory, Permissions, Multi-Agent & more.

[**Live Demo →**](https://learn-openharness.vercel.app) &nbsp;·&nbsp; [Issues](https://github.com/joyehuang/Learn-Open-Harness/issues) &nbsp;·&nbsp; [Contributing](#contributing) &nbsp;·&nbsp; [中文版](./README.zh-CN.md)

**Author**: [joyehuang.me](https://joyehuang.me) &nbsp;·&nbsp; [Xiaohongshu (32k likes) →](https://xhslink.com/m/AesdUI88Jar)

</div>

> **⭐ If this tutorial helps you understand AI Agents, star the repo — Goal: 10k stars!**

---

### 🎬 Demo

<table>
<tr>
<td align="center"><strong>中文版</strong></td>
<td align="center"><strong>English</strong></td>
</tr>
<tr>
<td>

https://ryzb8hnodzvfwtos.public.blob.vercel-storage.com/demo.mp4

</td>
<td>

https://ryzb8hnodzvfwtos.public.blob.vercel-storage.com/demo_en.mp4

</td>
</tr>
</table>

## Why this exists

[OpenHarness](https://github.com/HKUDS/OpenHarness) dropped and immediately blew up — the first open-source implementation of the AI Agent Harness pattern that powers **Claude Code**, **Cursor**, and the next generation of AI coding tools.

But ~11,700 lines of infrastructure code is a lot to digest. Concepts like Agent Loop, tool registries, permission tiers, and MCP aren't obvious from reading source alone.

So I built this the next day: **12 interactive chapters** that break down every core concept with real-world analogies, animated diagrams, hands-on simulators, and quizzes — so you can actually *understand* what OpenHarness does before diving into the code.

**No AI or programming experience required.**

## Features

| | |
|---|---|
| **📖 12 Chapters** | From "What is an AI Agent" to "Multi-Agent Collaboration" |
| **🎮 Interactive** | Agent Loop animation, Tool Explorer, Permission Sandbox, Architecture Diagram |
| **🧠 Quizzes** | Embedded in every chapter with instant feedback |
| **📊 Progress** | Auto-tracks completed chapters |
| **🌙 Dark Mode** | Deep navy palette, easy on the eyes |
| **📱 Responsive** | Mobile, tablet, desktop |

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
| [shadcn/ui](https://ui.shadcn.com) | UI components |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark mode |

## Contributing

Contributions welcome!

- **Fix content**: PR to `src/content/chapter-XX.ts`
- **Add chapters**: Follow existing format in `src/content/`
- **Improve interactive components**: `src/components/interactive/`
- **Translate**: Help bring this to more languages

Each chapter is a TypeScript file with `section` blocks (`text`, `analogy`, `code`, `quiz`, `key-concept`, `comparison`, `diagram`) — easy to modify, zero barrier to contribute.

## License

[MIT](LICENSE)

---

<div align="center">

**⭐ Star this repo if it helped you — Goal: 10k! ⭐**

<sub>Built by <a href="https://joyehuang.me">@joyehuang</a> &nbsp;·&nbsp; <a href="https://xhslink.com/m/AesdUI88Jar">Xiaohongshu (32k likes) →</a></sub>

</div>
