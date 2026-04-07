import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "harness-equation",
  phase: "A",
  phaseLabel: "基础认知",
  title: "Harness 公式",
  subtitle: "Tools + Knowledge + Observation + Action + Permissions",
  sections: [
    {
      type: "analogy",
      title: "像组装一个机器人",
      content:
        "想象你要造一个能帮你干活的机器人。光有一个聪明的大脑（LLM）还不够，你还需要给它装上：手臂（Tools）、知识库（Knowledge）、摄像头（Observation）、执行器（Action）、安全锁（Permissions）。这五样东西组合在一起，才是一个完整的 Harness。",
    },
    {
      type: "text",
      title: "核心公式",
      content:
        "OpenHarness 的整体架构可以用一个简单的公式概括：\n\nHarness = Tools + Knowledge + Observation + Action + Permissions\n\n让我们逐一拆解每个部分：",
    },
    {
      type: "text",
      title: "🔧 Tools（工具）— 43+ 个内置工具",
      content:
        "工具是 Agent 与外部世界交互的接口。OpenHarness 内置了 43+ 个工具，覆盖了：\n\n• 文件操作：Read、Write、Edit、Glob、Grep\n• Shell 命令：Bash\n• 搜索：WebFetch、WebSearch\n• Agent 协作：Agent、SendMessage\n• 任务管理：TaskCreate、TaskUpdate\n• MCP 集成：MCPTool\n• 工作流控制：EnterPlanMode、EnterWorktree\n\n每个工具都有统一的接口：接收参数 → 执行操作 → 返回结果。",
    },
    {
      type: "text",
      title: "📚 Knowledge（知识）— 按需加载",
      content:
        "Agent 不可能把所有知识都放在一个巨大的提示词里。OpenHarness 的 Skills 系统允许按需加载特定领域的知识，就像一个图书馆 —— 需要什么主题的书就去取什么。",
    },
    {
      type: "text",
      title: "👀 Observation（观察）— 实时反馈",
      content:
        "每次工具执行完毕，结果会被反馈给 LLM。这就是「观察」—— Agent 能看到自己的行动产生了什么效果，然后决定下一步怎么做。",
    },
    {
      type: "text",
      title: "⚡ Action（行动）— 循环执行",
      content:
        "Agent 不是一次性完成任务的。它通过一个循环（Agent Loop）不断地：思考 → 调用工具 → 观察结果 → 再思考。这个循环是 Agent 的心跳，我们在第 4 章会详细讲解。",
    },
    {
      type: "text",
      title: "🛡️ Permissions（权限）— 安全护栏",
      content:
        "让 AI 自由操作是危险的。OpenHarness 提供了三级权限模式，确保 Agent 不会执行不当操作。这是 Harness 最重要的设计之一。",
    },
    {
      type: "diagram",
      diagram: "ArchitectureDiagram",
    },
    {
      type: "text",
      title: "OpenHarness 的 10 大子系统",
      content:
        "在代码层面，OpenHarness 把上述五大能力拆分成了 10 个子系统：\n\n1. Engine（引擎）— Agent Loop 核心循环\n2. Tools（工具）— 43+ 个内置工具\n3. Skills（技能）— 知识按需加载\n4. Plugins（插件）— 扩展机制\n5. Permissions（权限）— 安全检查\n6. Hooks（钩子）— 生命周期事件\n7. Commands（命令）— 54 个用户交互命令\n8. MCP（模型上下文协议）— 外部集成\n9. Memory（记忆）— 跨会话持久化\n10. Tasks（任务）— 后台任务管理\n\n接下来的章节，我们会逐一深入每个子系统。",
    },
    {
      type: "key-concept",
      title: "五大能力，十大子系统",
      content:
        "记住这个公式：Harness = Tools + Knowledge + Observation + Action + Permissions。OpenHarness 在代码层面将其实现为 10 个清晰分离的子系统，每个子系统负责单一职责，通过注册表模式组合在一起。",
    },
    {
      type: "quiz",
      quiz: {
        question: "Harness 公式中的「Observation」指的是什么？",
        options: [
          "用户观察 Agent 的行为",
          "Agent 观察工具执行的结果并据此决策",
          "系统监控和日志",
          "数据可视化",
        ],
        correctIndex: 1,
        explanation:
          "Observation 是指 Agent 能感知到工具执行的结果。比如读取文件后，Agent 能看到文件内容，然后根据内容决定下一步操作。",
      },
    },
  ],
};

export default chapter;
