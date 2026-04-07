import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "memory",
  phase: "C",
  phaseLabel: "智能层",
  title: "Memory 记忆系统",
  subtitle: "让 Agent 在不同对话间记住你",
  sections: [
    {
      type: "analogy",
      title: "像你的私人笔记本",
      content:
        "想象你有一个助理，但他每天早上都会失忆。你必须每天重新告诉他你的喜好、项目背景和工作习惯。如果给他一个笔记本，让他把重要信息记下来，第二天翻开就知道了 —— 这就是 Agent 的记忆系统。",
    },
    {
      type: "text",
      title: "LLM 的「失忆」问题",
      content:
        "大语言模型有一个根本局限：每次新对话，它都从零开始。它不记得昨天你跟它说了什么，不知道你的偏好，不了解你的项目背景。\n\n这意味着你可能需要反复解释：\n• 你的项目用什么技术栈\n• 你喜欢什么编码风格\n• 上次对话修了什么 Bug\n• 你的角色和工作重点\n\n记忆系统就是为了解决这个问题。",
    },
    {
      type: "text",
      title: "OpenHarness 的记忆机制",
      content:
        "OpenHarness 使用基于文件的记忆系统，核心组件包括：\n\n📄 MEMORY.md\n记忆的索引文件，列出所有记忆条目的标题和链接。每次对话开始时会被加载到上下文中。\n\n📁 记忆目录\n每条记忆存储为一个独立的 Markdown 文件，按主题组织。\n\n记忆系统的设计非常巧妙：MEMORY.md 作为索引始终在上下文中，Agent 可以快速知道有哪些记忆可用，需要时再读取具体文件。",
    },
    {
      type: "text",
      title: "四种记忆类型",
      content:
        "OpenHarness 定义了四种记忆类型：\n\n👤 用户记忆（User）\n关于用户的信息：角色、偏好、专业水平等。\n例如：「用户是高级 Go 开发者，但刚接触 React」\n\n💬 反馈记忆（Feedback）\n用户对 Agent 行为的纠正和肯定。\n例如：「不要在每次回复末尾做总结」\n\n📋 项目记忆（Project）\n项目相关的信息：目标、截止日期、特殊约定。\n例如：「3 月 5 日后有代码冻结期」\n\n🔗 参考记忆（Reference）\n外部资源的位置信息。\n例如：「Bug 追踪在 Linear 的 INGEST 项目中」",
    },
    {
      type: "code",
      title: "一条记忆长什么样",
      code: {
        language: "markdown",
        filename: "memory/feedback_testing.md",
        source: `---
name: 测试偏好
description: 用户对测试方式的偏好
type: feedback
---

集成测试必须使用真实数据库，不要 Mock。

**Why:** 上季度 Mock 测试全部通过，但真实数据库
迁移失败，导致了生产事故。

**How to apply:** 所有涉及数据库的测试都使用
测试数据库实例，不使用任何 Mock。`,
        highlights: [1, 2, 3, 4, 7],
      },
    },
    {
      type: "text",
      title: "记忆的生命周期",
      content:
        "1. 创建：Agent 在对话中发现值得记住的信息时，自动写入记忆文件\n2. 索引：将记忆条目添加到 MEMORY.md 索引\n3. 加载：每次新对话开始时，MEMORY.md 被加载到上下文\n4. 使用：Agent 根据记忆调整自己的行为\n5. 更新：如果信息过时，Agent 会更新或删除记忆\n\n重要的是，Agent 在使用记忆前会验证信息是否仍然准确。记忆可能过时，所以 Agent 会将记忆与当前代码状态对照。",
    },
    {
      type: "key-concept",
      title: "文件 = 持久化，索引 = 高效访问",
      content:
        "OpenHarness 的记忆系统设计巧妙：用简单的 Markdown 文件存储记忆（易读、易编辑），用 MEMORY.md 作为索引（快速定位）。不需要数据库，不需要复杂的向量存储，文件系统就是最好的持久化方案。",
    },
    {
      type: "quiz",
      quiz: {
        question: "MEMORY.md 在记忆系统中的角色是什么？",
        options: [
          "存储所有记忆的完整内容",
          "作为索引，列出所有记忆条目的标题和链接",
          "配置记忆系统的参数",
          "记录 Agent 的对话历史",
        ],
        correctIndex: 1,
        explanation:
          "MEMORY.md 是记忆的索引文件。每条记忆的完整内容存储在独立的 Markdown 文件中，MEMORY.md 只列出标题和链接，方便 Agent 快速了解有哪些记忆可用。",
      },
    },
  ],
};

export default chapter;
