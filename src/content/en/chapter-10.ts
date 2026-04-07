import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "mcp",
  phase: "C",
  phaseLabel: "Intelligence Layer",
  title: "MCP Integration",
  subtitle: "A standardized connection to the outside world",
  sections: [
    {
      type: "analogy",
      title: "Like the USB Port",
      content:
        "Remember when every phone brand had a different charging cable? Then USB-C unified the standard, and any device could connect with the same cable. MCP (Model Context Protocol) is the \"USB-C\" of the AI Agent world — a unified protocol standard that lets Agents connect to various external services the same way.",
    },
    {
      type: "text",
      title: "What Is MCP?",
      content:
        "MCP stands for Model Context Protocol, proposed by Anthropic.\n\nThe problem it solves: how do you enable standardized communication between different Agents and different external services?\n\nBefore MCP, every Agent needed custom code to connect to external services (like GitHub, Slack, databases). With MCP, as long as an external service provides an MCP Server, any MCP-compatible Agent can immediately use it.",
    },
    {
      type: "comparison",
      comparison: {
        leftTitle: "Without MCP",
        rightTitle: "With MCP",
        items: [
          {
            label: "Adding a new service",
            left: "Each Agent writes custom integration code",
            right: "Service provides an MCP Server, all Agents use it directly",
          },
          {
            label: "Interface format",
            left: "Different format for every service",
            right: "Unified JSON-RPC protocol",
          },
          {
            label: "Tool discovery",
            left: "Hardcoded",
            right: "Dynamic discovery, runtime registration",
          },
          {
            label: "Ecosystem reuse",
            left: "Everyone builds their own, duplicated effort",
            right: "Community-built, develop once use everywhere",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Three Core MCP Concepts",
      content:
        "1. MCP Server\nThe external service that provides tools and resources. For example, a GitHub MCP Server can provide tools like \"create PR\" and \"view issue.\"\n\n2. MCP Client\nThe connector on the Agent side, responsible for communicating with MCP Servers. OpenHarness has a built-in MCP Client.\n\n3. MCP Tool\nTools exposed by an MCP Server. These tools are dynamically registered into the Agent's tool list, and the LLM can use them just like built-in tools.",
    },
    {
      type: "code",
      title: "Configuring MCP Servers",
      content: "Configure the MCP Servers you want to connect to in settings.json:",
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
      title: "How MCP Works in OpenHarness",
      content:
        "1. At startup, OpenHarness reads the MCP Server list from configuration\n2. Establishes a connection to each Server (via MCPClientManager)\n3. Queries each Server for the tools it provides\n4. Dynamically registers those tools into the tool registry\n5. The LLM sees these MCP tools in its tool list and can call them normally\n6. When called, the request is forwarded through the MCP Client to the corresponding Server\n\nThe entire process is transparent to the LLM — it doesn't distinguish between built-in tools and MCP tools.",
    },
    {
      type: "key-concept",
      title: "MCP = A Standardized Extension Interface",
      content:
        "MCP means Agent capabilities are no longer limited to built-in tools. Through this standard protocol, an Agent can connect to any external service. This is the key to Agent ecosystem growth — the community can collaboratively build MCP Servers, and every MCP-compatible Agent benefits.",
    },
    {
      type: "quiz",
      quiz: {
        question: "What core problem does MCP solve?",
        options: [
          "Making AI models run faster",
          "Providing a unified communication standard between Agents and external services",
          "Replacing the HTTP protocol",
          "Storing Agent conversation data",
        ],
        correctIndex: 1,
        explanation:
          "MCP is a communication protocol standard. It lets external services implement an MCP Server once, and then every MCP-compatible Agent can use it — avoiding duplicated custom integration code.",
      },
    },
  ],
};

export default chapter;
