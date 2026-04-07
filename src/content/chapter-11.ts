import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "multi-agent",
  phase: "D",
  phaseLabel: "进阶",
  title: "多 Agent 协作",
  subtitle: "让多个 Agent 像团队一样合作",
  sections: [
    {
      type: "analogy",
      title: "像一个项目团队",
      content:
        "想象一个软件项目，项目经理负责协调，前端开发写界面，后端开发写 API，测试工程师做测试。每个人各有专长，项目经理把任务分配给合适的人。多 Agent 协作也是这样 —— 一个主 Agent 协调全局，根据需要启动专门的子 Agent 来处理不同的子任务。",
    },
    {
      type: "text",
      title: "为什么需要多 Agent？",
      content:
        "单个 Agent 在处理复杂任务时会遇到几个问题：\n\n• 上下文窗口有限 —— 一个 Agent 能记住的信息量是有限的\n• 任务太复杂 —— 需要同时关注多个方面（代码、测试、文档）\n• 并行处理 —— 多个独立子任务可以同时进行\n• 专业化 —— 不同子任务可能需要不同的提示词和工具配置\n\n多 Agent 协作让你能把大任务分解为小任务，分配给专门的 Agent 处理。",
    },
    {
      type: "text",
      title: "OpenHarness 的多 Agent 架构",
      content:
        "OpenHarness 通过以下组件实现多 Agent 协作：\n\n🤖 Agent 工具\n主 Agent 通过 Agent 工具启动子 Agent。每个子 Agent 有自己独立的对话上下文和工具集。\n\n📨 SendMessage 工具\n向已启动的子 Agent 发送消息，继续之前的对话。\n\n👥 TeamRegistry\n团队注册表，管理所有活跃的子 Agent 及其状态。\n\n📋 TaskManager\n任务管理器，协调子 Agent 的任务分配和生命周期。",
    },
    {
      type: "code",
      title: "启动子 Agent 的方式",
      content: "主 Agent 可以这样启动子 Agent：",
      code: {
        language: "python",
        filename: "系统提示词中的 Agent 工具描述",
        source: `# Agent 工具的使用方式

# 启动一个专门做代码搜索的子 Agent
Agent(
    description="搜索认证相关代码",
    prompt="在项目中找到所有与用户认证相关的文件和函数",
    subagent_type="Explore"  # 探索型 Agent
)

# 启动一个做规划的子 Agent
Agent(
    description="设计重构方案",
    prompt="分析当前认证模块的架构，设计重构方案",
    subagent_type="Plan"  # 规划型 Agent
)

# 在后台启动（不阻塞主 Agent）
Agent(
    description="运行测试套件",
    prompt="运行所有测试并报告结果",
    run_in_background=True
)`,
        highlights: [4, 11, 18],
      },
    },
    {
      type: "text",
      title: "子 Agent 的类型",
      content:
        "OpenHarness 预定义了几种子 Agent 类型：\n\n🔍 Explore Agent\n专门用于代码搜索和探索。拥有搜索相关的工具，但没有编辑权限。速度快、安全。\n\n📐 Plan Agent\n专门用于设计方案。可以搜索和阅读代码，但不能修改。适合在实施前做规划。\n\n🔧 General Purpose Agent\n通用 Agent，拥有完整工具集。适合需要执行操作的子任务。\n\n每种类型的 Agent 有不同的工具集和权限，确保子 Agent 只做它应该做的事。",
    },
    {
      type: "text",
      title: "并行 vs 串行",
      content:
        "多 Agent 的一个核心优势是并行处理。比如：\n\n串行（慢）：\n搜索前端代码 → 搜索后端代码 → 搜索测试代码\n\n并行（快）：\n同时启动 3 个 Explore Agent，分别搜索前端、后端、测试代码\n\n主 Agent 可以通过 run_in_background=True 让子 Agent 在后台运行，自己继续做其他事情。子 Agent 完成后会自动通知主 Agent。",
    },
    {
      type: "key-concept",
      title: "分而治之，各司其职",
      content:
        "多 Agent 协作的核心理念是「分而治之」。主 Agent 负责理解任务和协调，子 Agent 负责执行具体工作。每个子 Agent 有独立的上下文和工具集，互不干扰。这种模式让 Agent 系统能处理远超单个 Agent 能力范围的复杂任务。",
    },
    {
      type: "quiz",
      quiz: {
        question: "为什么不让一个 Agent 独自完成所有任务？",
        options: [
          "因为一个 Agent 的智商不够",
          "因为上下文有限、任务可并行、需要专业化分工",
          "因为多 Agent 更便宜",
          "因为技术限制，单 Agent 做不到",
        ],
        correctIndex: 1,
        explanation:
          "多 Agent 的主要动机是：单 Agent 的上下文窗口有限（记不住太多信息）、独立子任务可以并行处理（更快）、不同子任务可能需要不同的工具和配置（专业化）。",
      },
    },
  ],
};

export default chapter;
