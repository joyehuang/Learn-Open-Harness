import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "what-is-harness",
  phase: "A",
  phaseLabel: "基础认知",
  title: "什么是 Harness",
  subtitle: "Agent 的装备系统",
  sections: [
    {
      type: "analogy",
      title: "RPG 游戏类比",
      content:
        "想象你在玩一款 RPG 游戏。你的角色（LLM）天赋很高、智力满点，但如果不给他装备武器、盔甲、药水、地图，他就只能站在原地。Harness 就是这套装备系统 —— 它给 LLM 装上了工具（武器）、知识（地图）、权限（规则）、记忆（日记本），让它变成一个真正能冒险的勇者。",
    },
    {
      type: "text",
      title: "Harness 到底是什么？",
      content:
        '在英文里，Harness 的意思是「马具」—— 就是套在马身上的那套装备，让骑手能控制和引导马匹。\n\n在 AI 领域，Harness（也叫 Agent Harness）是指 LLM 和真实世界之间的「中间层」。它不是 AI 本身，而是 AI 的「基础设施」。\n\nHarness 解决的核心问题是：如何让一个「只会思考」的大脑，变成一个「能行动」的人？\n\n答案是：给它提供五种核心能力。',
    },
    {
      type: "text",
      title: "Harness 的五大核心能力",
      content:
        '1. 🔧 工具（Tools）—— Agent 的双手\n   让 AI 能读写文件、执行命令、搜索网页等\n\n2. 📚 知识（Knowledge）—— Agent 的大脑补充\n   按需加载特定领域的知识和指导\n\n3. 👀 观察（Observation）—— Agent 的眼睛\n   实时获取工具执行结果、感知环境变化\n\n4. ⚡ 行动（Action）—— Agent 的执行力\n   真正执行决策，把想法变成现实\n\n5. 🛡️ 权限（Permissions）—— Agent 的规则\n   确保 AI 在安全边界内行动，不会做危险操作',
    },
    {
      type: "text",
      title: "为什么需要 OpenHarness？",
      content:
        "市面上已经有一些商业化的 Agent 产品（比如 Claude Code、Cursor），但它们的内部实现是封闭的，你无法了解它们是怎么工作的。\n\nOpenHarness 是一个开源项目，它用约 11,700 行 Python 代码实现了一个完整的 Agent Harness。它的目的是：\n\n• 让开发者理解 Agent 的底层原理\n• 提供一个可以学习、实验、扩展的参考实现\n• 与 Claude Code 的工具和插件生态兼容\n\n如果说 Claude Code 是一辆完整的汽车，那 OpenHarness 就是一辆透明的教学车 —— 你能看到每个零件是怎么工作的。",
    },
    {
      type: "key-concept",
      title: "Harness 是 LLM 和真实世界之间的桥梁",
      content:
        "Harness 不是 AI 本身，而是让 AI 能力落地的基础设施。它包含五大核心：工具、知识、观察、行动、权限。OpenHarness 是这套基础设施的开源实现，让你能看到 Agent 内部是怎么运转的。",
    },
    {
      type: "quiz",
      quiz: {
        question: "Harness 在 AI Agent 架构中的角色是什么？",
        options: [
          "它就是大语言模型本身",
          "它是 LLM 和真实世界之间的中间层基础设施",
          "它是一个数据库",
          "它是用户界面",
        ],
        correctIndex: 1,
        explanation:
          "Harness 是中间层基础设施，负责给 LLM 提供工具、知识、权限等能力，让它能与真实世界交互。",
      },
    },
    {
      type: "quiz",
      quiz: {
        question: "OpenHarness 相比 Claude Code 的独特价值是什么？",
        options: [
          "功能更强大",
          "速度更快",
          "开源透明，可以学习内部原理",
          "不需要 API Key",
        ],
        correctIndex: 2,
        explanation:
          "OpenHarness 用约 11,700 行代码实现了完整的 Harness 架构，代码透明可读，是学习 Agent 底层原理的最佳材料。",
      },
    },
  ],
};

export default chapter;
