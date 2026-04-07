import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "mcp",
  phase: "C",
  phaseLabel: "智能层",
  title: "MCP 集成",
  subtitle: "标准化连接外部世界",
  sections: [
    {
      type: "analogy",
      title: "像 USB 接口",
      content:
        "还记得以前每个品牌的手机都有不同的充电线吗？后来 USB-C 统一了接口标准，任何设备都能用同一条线连接。MCP（Model Context Protocol）就是 AI Agent 世界的「USB-C」—— 一个统一的协议标准，让 Agent 可以用相同的方式连接各种外部服务。",
    },
    {
      type: "text",
      title: "什么是 MCP？",
      content:
        "MCP 是 Model Context Protocol（模型上下文协议）的缩写，由 Anthropic 提出。\n\n它解决的问题是：如何让不同的 Agent 和不同的外部服务之间实现标准化通信？\n\n在 MCP 出现之前，每个 Agent 要接入外部服务（比如 GitHub、Slack、数据库）都需要写定制代码。有了 MCP，只要外部服务提供一个 MCP Server，任何支持 MCP 的 Agent 都能立即使用它。",
    },
    {
      type: "comparison",
      comparison: {
        leftTitle: "没有 MCP",
        rightTitle: "有 MCP",
        items: [
          {
            label: "接入新服务",
            left: "每个 Agent 写定制代码",
            right: "服务提供 MCP Server，所有 Agent 直接用",
          },
          {
            label: "接口格式",
            left: "每个服务格式不同",
            right: "统一的 JSON-RPC 协议",
          },
          {
            label: "工具发现",
            left: "硬编码",
            right: "动态发现，运行时注册",
          },
          {
            label: "生态复用",
            left: "各自开发，重复劳动",
            right: "社区共建，一次开发处处使用",
          },
        ],
      },
    },
    {
      type: "text",
      title: "MCP 的三个核心概念",
      content:
        "1. MCP Server（服务端）\n提供工具和资源的外部服务。比如一个 GitHub MCP Server 可以提供「创建 PR」「查看 Issue」等工具。\n\n2. MCP Client（客户端）\nAgent 侧的连接器，负责与 MCP Server 通信。OpenHarness 内置了 MCP Client。\n\n3. MCP Tool（工具）\nMCP Server 暴露的工具。这些工具会被动态注册到 Agent 的工具列表中，LLM 可以像使用内置工具一样使用它们。",
    },
    {
      type: "code",
      title: "配置 MCP Server",
      content: "在 settings.json 中配置要连接的 MCP Server：",
      code: {
        language: "json",
        filename: "settings.json",
        source: `{
  "mcp_servers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-token"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
    }
  }
}`,
        highlights: [3, 4, 10, 11],
      },
    },
    {
      type: "text",
      title: "MCP 在 OpenHarness 中的工作流程",
      content:
        "1. 启动时，OpenHarness 读取配置中的 MCP Server 列表\n2. 为每个 Server 启动连接（通过 MCPClientManager）\n3. 查询每个 Server 提供了哪些工具\n4. 将这些工具动态注册到工具注册表中\n5. LLM 在工具列表中看到这些 MCP 工具，可以正常调用\n6. 调用时，请求通过 MCP Client 转发到对应的 Server\n\n整个过程对 LLM 是透明的 —— 它不区分内置工具和 MCP 工具。",
    },
    {
      type: "key-concept",
      title: "MCP = 标准化的扩展接口",
      content:
        "MCP 让 Agent 的能力不再局限于内置工具。通过这个标准协议，Agent 可以连接任意外部服务。这是 Agent 生态发展的关键 —— 社区可以共建 MCP Server，所有支持 MCP 的 Agent 都能受益。",
    },
    {
      type: "quiz",
      quiz: {
        question: "MCP 解决的核心问题是什么？",
        options: [
          "让 AI 模型运行更快",
          "让不同 Agent 和外部服务之间有统一的通信标准",
          "替代 HTTP 协议",
          "存储 Agent 的对话数据",
        ],
        correctIndex: 1,
        explanation:
          "MCP 是一个通信协议标准。它让外部服务只需实现一次 MCP Server，就能被所有支持 MCP 的 Agent 使用，避免了重复开发定制集成代码。",
      },
    },
  ],
};

export default chapter;
