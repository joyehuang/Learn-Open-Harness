import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "skills",
  phase: "C",
  phaseLabel: "智能层",
  title: "Skills 技能系统",
  subtitle: "按需加载的知识库",
  sections: [
    {
      type: "analogy",
      title: "像图书馆里借书",
      content:
        "你不可能把图书馆的所有书都背下来。但你知道需要什么主题时，可以去借对应的书。Agent 的技能系统也是这样 —— 它不会把所有知识都塞进提示词里，而是在需要时「借」一本对应主题的技能手册。",
    },
    {
      type: "text",
      title: "为什么需要技能系统？",
      content:
        "LLM 的知识是有限的 —— 它可能不了解你项目的特定规范、工作流程或最佳实践。\n\n同时，提示词（System Prompt）的长度也是有限的。如果把所有知识都放进去，会导致：\n• 消耗大量 Token（费用增加）\n• 关键信息被淹没\n• 响应速度变慢\n\n技能系统的解决方案是：平时只加载核心提示词，当 Agent 遇到特定任务时，动态加载对应的技能知识。",
    },
    {
      type: "text",
      title: "技能长什么样？",
      content:
        "每个技能就是一个 Markdown 文件，包含元信息和具体知识：",
    },
    {
      type: "code",
      title: "技能文件示例",
      code: {
        language: "markdown",
        filename: "skills/commit.md",
        source: `---
name: commit
description: 帮助用户创建规范的 Git 提交
---

# Git 提交规范

## 使用时机
当用户要求提交代码时使用此技能。

## 工作流程
1. 运行 git status 查看变更
2. 运行 git diff 查看具体改动
3. 分析变更内容，生成提交信息
4. 提交信息格式：类型(范围): 描述

## 注意事项
- 不要使用 git add -A，要逐个添加文件
- 提交信息要简洁，说明"为什么"而不是"改了什么"
- 不要提交包含密钥的文件`,
        highlights: [1, 2, 3],
      },
    },
    {
      type: "text",
      title: "技能的发现和加载",
      content:
        "OpenHarness 会从以下位置发现技能：\n\n1. 内置技能 —— OpenHarness 自带的（如 commit、review-pr）\n2. 用户目录 —— ~/.openharness/skills/ 中的自定义技能\n3. 插件提供 —— 通过插件系统注册的技能\n\n当 Agent 执行到相关任务时，它会通过 Skill 工具来加载对应的技能。加载后，技能的内容会被注入到当前对话的上下文中。",
    },
    {
      type: "text",
      title: "技能的设计哲学",
      content:
        "好的技能应该：\n\n✅ 专注单一领域 —— 一个技能解决一类问题\n✅ 包含具体的工作流程 —— 不只是知识，还有步骤\n✅ 说明「何时使用」—— 让 Agent 知道什么时候该加载\n✅ 提供注意事项 —— 防止常见错误\n\n差的技能：\n❌ 内容太宽泛，什么都想覆盖\n❌ 只有抽象概念，没有具体步骤\n❌ 缺少使用条件的描述",
    },
    {
      type: "key-concept",
      title: "按需加载 = 高效 + 精准",
      content:
        "技能系统的核心理念是「按需加载」。它解决了「知识太多放不下」的问题，让 Agent 在需要的时候才获取特定领域的知识。每个技能就是一个 Markdown 文件，简单却强大。",
    },
    {
      type: "quiz",
      quiz: {
        question: "为什么不把所有知识都放在系统提示词里？",
        options: [
          "技术上做不到",
          "LLM 看不懂太长的提示词",
          "会浪费 Token、关键信息被淹没、响应变慢",
          "安全原因",
        ],
        correctIndex: 2,
        explanation:
          "把所有知识塞进提示词会消耗大量 Token（增加费用），关键信息容易被海量文本淹没（降低质量），同时处理长提示词会拖慢响应速度。按需加载是更高效的方式。",
      },
    },
  ],
};

export default chapter;
