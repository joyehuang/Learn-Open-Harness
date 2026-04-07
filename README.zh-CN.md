<div align="center">

# 🤖 学习 OpenHarness

**OpenHarness 官方交互式教程 — 12 章从零到精通**

*像理解 Claude Code 一样学习 OpenHarness：Agent Loop、工具系统、记忆、多 Agent 协作……*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-radix--luma-black?style=flat-square)](https://ui.shadcn.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[**在线体验 →**](https://learn-openharness.vercel.app) &nbsp;·&nbsp; [提 Issue](https://github.com/joyehuang/Learn-Open-Harness/issues) &nbsp;·&nbsp; [参与贡献](#贡献) &nbsp;·&nbsp; [English](./README.md)

---

**作者**：[joyehuang.me](https://joyehuang.me) &nbsp;·&nbsp; [小红书（3.2万赞藏）→ 来看看我的主页](https://xhslink.com/m/AesdUI88Jar)

</div>

> **如果这个零基础教程帮到你，点个 ⭐ 支持一下开源 AI 教育项目～ 目标 10k stars！**

---

## 🌟 这是什么？

**OpenHarness** 是让大语言模型从「只会说话」变成「能做事」的关键基础设施 —— 它是 **Claude Code**、**Cursor** 等 AI 编程助手背后的架构模式。

但源码有 **~11,700 行**，概念繁多，门槛不低。

这个项目把它拆解成 **12 个章节、4 个阶段**，用通俗类比 + 真实代码 + 交互演示，带你从零理解每一个核心概念。**不需要任何 AI 或编程基础。**

## ✨ 特性

- **📖 12 章系统课程** — 从「什么是 AI Agent」到「多 Agent 协作」，循序渐进
- **🎮 交互式组件** — Agent Loop 动画、工具模拟器、权限沙盒、架构图，边玩边学
- **🧠 即时测验** — 每章内嵌小测验，实时检验理解程度
- **📊 学习进度追踪** — 自动记录完成章节，随时继续
- **🌙 深色模式** — 精心设计的深海蓝配色，护眼友好
- **📱 移动端适配** — 手机、平板、桌面全平台可用

## 📚 课程大纲

```
Harness = Tools + Knowledge + Observation + Action + Permissions
```

### 阶段 A · 基础认知
| # | 章节 | 核心概念 |
|---|------|---------|
| 01 | 什么是 AI Agent | LLM vs Agent，从「说话」到「做事」 |
| 02 | 什么是 Harness | Agent 的装备系统 |
| 03 | Harness 公式 | Tools + Knowledge + Observation + Action + Permissions |

### 阶段 B · 核心机制
| # | 章节 | 核心概念 |
|---|------|---------|
| 04 | Agent Loop | 思考→行动→观察的无限循环 |
| 05 | 工具系统 | 43+ 内置工具，统一接口 + 注册表模式 |
| 06 | 权限系统 | 三级安全护栏，让 Agent 安全执行 |
| 07 | Hook 系统 | 生命周期事件，在关键时刻插入自定义逻辑 |

### 阶段 C · 智能层
| # | 章节 | 核心概念 |
|---|------|---------|
| 08 | Skills 技能系统 | 按需加载的知识库 |
| 09 | Memory 记忆系统 | 跨对话持久化记忆，四种记忆类型 |
| 10 | MCP 集成 | 标准化连接外部世界的 USB 接口 |

### 阶段 D · 进阶
| # | 章节 | 核心概念 |
|---|------|---------|
| 11 | 多 Agent 协作 | 并行子 Agent，分而治之 |
| 12 | 全流程串联 | 从用户输入到响应的完整旅程 |

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/joyehuang/Learn-Open-Harness.git
cd Learn-Open-Harness

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 即可开始学习。

### 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/joyehuang/Learn-Open-Harness)

## 🛠 技术栈

| 技术 | 用途 |
|------|------|
| [Next.js 16](https://nextjs.org) | App Router，服务端渲染 |
| [TypeScript 5](https://www.typescriptlang.org) | 类型安全 |
| [Tailwind CSS v4](https://tailwindcss.com) | 样式系统 |
| [shadcn/ui](https://ui.shadcn.com) (radix-luma) | UI 组件库 |
| [next-themes](https://github.com/pacocoursey/next-themes) | 深色模式 |
| [Prism](https://prismjs.com) | 代码高亮 |
| [HugeIcons](https://hugeicons.com) | 图标系统 |

## 🤝 贡献

非常欢迎任何形式的贡献！

- **修正内容错误**：直接提 PR 修改 `src/content/chapter-XX.ts`
- **新增章节**：参考现有章节格式，在 `src/content/` 下新建文件
- **改进交互组件**：`src/components/interactive/` 目录下
- **翻译**：欢迎将内容翻译为其他语言

```
src/content/
├── types.ts          # 内容类型定义
├── chapters.ts       # 章节注册
├── chapter-01.ts     # 第 1 章内容
└── ...
```

每个章节由若干 `section` 组成，支持 `text`、`analogy`、`code`、`quiz`、`key-concept`、`comparison`、`diagram` 等类型，结构清晰，修改门槛极低。

## 📄 许可证

MIT License — 自由使用、修改、分发。

---

<div align="center">

**⭐ 如果这个零基础教程帮到你，点个 Star 支持一下开源 AI 教育项目～ 目标 10k stars！⭐**

<br/>

<sub>
  作者：<a href="https://joyehuang.me">joyehuang.me</a> &nbsp;·&nbsp;
  我在小红书收获了 3.2 万次赞与收藏，<a href="https://xhslink.com/m/AesdUI88Jar">来看看我的主页 →</a>
</sub>

</div>
