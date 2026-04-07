import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "what-is-agent",
  phase: "A",
  phaseLabel: "基础认知",
  title: "什么是 AI Agent",
  subtitle: "从「只会说话」到「能做事」",
  sections: [
    {
      type: "analogy",
      title: "想象一下...",
      content:
        "你去餐厅点了一份牛排。如果服务员只是站在那里跟你聊天，告诉你牛排应该怎么做，但从不去厨房下单 —— 这就是普通的大语言模型（LLM）。而如果服务员不仅能跟你交流，还能走进厨房、下单、端菜、结账 —— 这就是 AI Agent。",
    },
    {
      type: "text",
      title: "大语言模型 vs AI Agent",
      content:
        '你可能已经用过 ChatGPT、Claude 这样的 AI 工具。它们背后的核心是「大语言模型」（Large Language Model，简称 LLM）。\n\nLLM 非常聪明，能理解你的问题，能写文章、写代码、分析数据。但它有一个根本的局限：它只能「说」，不能「做」。\n\n比如你问 LLM：「帮我把这个文件的第 10 行改成 hello」，LLM 能告诉你应该怎么改，但它无法真正打开文件、修改内容、保存文件。\n\nAI Agent 就是为了解决这个问题而存在的。它在 LLM 的基础上，加上了一套「基础设施」，让 AI 真正能够：\n\n• 读写文件\n• 执行命令\n• 搜索信息\n• 与外部工具交互\n• 协调多个子任务',
    },
    {
      type: "comparison",
      comparison: {
        leftTitle: "普通 LLM",
        rightTitle: "AI Agent",
        items: [
          { label: "核心能力", left: "理解和生成文本", right: "理解、决策、执行" },
          { label: "能否操作文件", left: "❌ 不能", right: "✅ 可以" },
          { label: "能否运行代码", left: "❌ 不能", right: "✅ 可以" },
          { label: "能否搜索网页", left: "❌ 不能", right: "✅ 可以" },
          { label: "工作方式", left: "一问一答", right: "循环：思考 → 行动 → 观察 → 再思考" },
          { label: "比喻", left: "一个聪明的大脑", right: "一个有手有脚的聪明人" },
        ],
      },
    },
    {
      type: "text",
      title: "为什么 AI Agent 如此重要？",
      content:
        "想象一下这个场景：\n\n你对 AI 说：「帮我创建一个新的 React 项目，安装依赖，写一个登录页面，然后运行测试。」\n\n如果是普通 LLM，它只能给你一步步的文字指导。\n\n但如果是 AI Agent，它会真正地：\n1. 执行 npx create-react-app 创建项目\n2. 运行 npm install 安装依赖\n3. 创建文件、写入代码\n4. 运行 npm test 检查结果\n5. 如果测试失败，自动修复并重试\n\n这就是 AI Agent 的威力 —— 它不只是给建议，而是真正完成任务。",
    },
    {
      type: "key-concept",
      title: "AI Agent = LLM + 基础设施",
      content:
        "AI Agent 的核心公式很简单：在大语言模型的智能之上，叠加一层「基础设施」（也叫 Harness），让它能够感知环境、使用工具、采取行动。下一章我们就来详细了解这个「基础设施」到底是什么。",
    },
    {
      type: "quiz",
      quiz: {
        question: "以下哪个描述最准确地区分了 LLM 和 AI Agent？",
        options: [
          "LLM 更聪明，Agent 更笨",
          "LLM 只能生成文本，Agent 可以执行实际操作",
          "Agent 不需要 LLM，它们是完全不同的东西",
          "LLM 和 Agent 没有本质区别",
        ],
        correctIndex: 1,
        explanation:
          "AI Agent 是在 LLM 的基础上增加了工具使用能力。LLM 提供智能（思考和决策），Agent 的基础设施提供行动能力（使用工具和执行操作）。",
      },
    },
    {
      type: "quiz",
      quiz: {
        question:
          "当你对 AI Agent 说「帮我在 config.json 里添加一个字段」，Agent 会怎么做？",
        options: [
          "告诉你应该怎么手动添加",
          "生成修改后的完整文件内容",
          "实际读取文件 → 修改内容 → 写回文件",
          "什么都不做，因为它不理解文件操作",
        ],
        correctIndex: 2,
        explanation:
          "这正是 Agent 和普通 LLM 的区别。Agent 会通过工具（如 Read、Edit）来实际执行文件操作，而不只是告诉你怎么做。",
      },
    },
  ],
};

export default chapter;
