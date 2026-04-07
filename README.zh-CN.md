<div align="center">

# 🤖 学习 OpenHarness

**[HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) 的交互式学习教程 — OpenHarness 发布次日即上线。**

12 章从零到精通。像理解 Claude Code 一样学习 Agent Loop、工具系统、记忆、权限、多 Agent 协作。

[**在线体验 →**](https://learn-openharness.vercel.app) &nbsp;·&nbsp; [提 Issue](https://github.com/joyehuang/Learn-Open-Harness/issues) &nbsp;·&nbsp; [参与贡献](#贡献) &nbsp;·&nbsp; [English](./README.md)

**作者**：[joyehuang.me](https://joyehuang.me) &nbsp;·&nbsp; [小红书（3.2万赞藏）→ 来看看我的主页](https://xhslink.com/m/AesdUI88Jar)

</div>

> **⭐ 如果这个零基础教程帮到你，点个 Star 支持一下开源 AI 教育项目～ 目标 10k stars！**

---

https://github.com/user-attachments/assets/a0fe6e34-71b6-400b-9a96-e5203d8c9a5c

## 为什么做这个？

[OpenHarness](https://github.com/HKUDS/OpenHarness) 一发布就炸了 —— 第一个开源实现 AI Agent Harness 模式的项目，**Claude Code**、**Cursor** 等下一代 AI 编程工具背后的核心架构。

但 ~11,700 行基础设施代码不是随便能消化的。Agent Loop、工具注册表、三级权限、MCP…… 光看源码很难搞懂。

所以我在它发布的第二天就做了这个：**12 个交互式章节**，用生活类比、动画演示、实操模拟器和即时测验，把每个核心概念拆解到你真正能*理解* OpenHarness 在做什么 —— 然后再去看代码。

**不需要任何 AI 或编程基础。**

## ✨ 特性

| | |
|---|---|
| **📖 12 章系统课程** | 从「什么是 AI Agent」到「多 Agent 协作」，循序渐进 |
| **🎮 交互式组件** | Agent Loop 动画、工具模拟器、权限沙盒、架构图 |
| **🧠 即时测验** | 每章内嵌小测验，实时反馈 |
| **📊 进度追踪** | 自动记录完成章节 |
| **🌙 深色模式** | 深海蓝配色，护眼友好 |
| **📱 全平台适配** | 手机、平板、桌面 |

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
git clone https://github.com/joyehuang/Learn-Open-Harness.git
cd Learn-Open-Harness
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 即可开始学习。

## 🛠 技术栈

| 技术 | 用途 |
|------|------|
| [Next.js 16](https://nextjs.org) | App Router，服务端渲染 |
| [TypeScript 5](https://www.typescriptlang.org) | 类型安全 |
| [Tailwind CSS v4](https://tailwindcss.com) | 样式系统 |
| [shadcn/ui](https://ui.shadcn.com) | UI 组件库 |
| [next-themes](https://github.com/pacocoursey/next-themes) | 深色模式 |

## 🤝 贡献

欢迎任何形式的贡献！

- **修正内容**：PR 修改 `src/content/chapter-XX.ts`
- **新增章节**：参考现有格式，在 `src/content/` 下新建文件
- **改进交互组件**：`src/components/interactive/`
- **翻译**：欢迎将内容翻译为其他语言

每个章节是一个 TypeScript 文件，由 `section` 块组成（`text`、`analogy`、`code`、`quiz`、`key-concept`、`comparison`、`diagram`），结构清晰，修改门槛极低。

## 📄 许可证

[MIT](LICENSE)

---

<div align="center">

**⭐ 点个 Star 支持一下～ 目标 10k！⭐**

<sub>
  作者：<a href="https://joyehuang.me">@joyehuang</a> &nbsp;·&nbsp;
  <a href="https://xhslink.com/m/AesdUI88Jar">小红书（3.2万赞藏）→</a>
</sub>

</div>
