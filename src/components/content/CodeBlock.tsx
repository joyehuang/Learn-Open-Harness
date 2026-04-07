"use client";

import { Highlight, themes } from "prism-react-renderer";
import type { CodeContent } from "@/content/types";

interface CodeBlockProps {
  code: CodeContent;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="my-4 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-sm">
      {code.filename && (
        <div className="border-b border-zinc-800 bg-zinc-900 px-4 py-2 font-mono text-xs text-zinc-400">
          {code.filename}
        </div>
      )}
      <Highlight
        theme={themes.vsDark}
        code={code.source.trim()}
        language={code.language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="overflow-x-auto bg-zinc-950 p-4 text-sm leading-6"
            style={{ ...style, margin: 0, background: "transparent" }}
          >
            {tokens.map((line, i) => {
              const isHighlighted = code.highlights?.includes(i + 1);
              return (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  className={`${isHighlighted ? "-mx-4 border-l-2 border-zinc-400 bg-zinc-800/80 px-4" : ""}`}
                >
                  <span className="mr-4 inline-block w-8 select-none text-right text-xs text-zinc-500">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
