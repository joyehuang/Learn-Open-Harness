"use client";

import { Highlight, themes } from "prism-react-renderer";
import type { CodeContent } from "@/content/types";

interface CodeBlockProps {
  code: CodeContent;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-200">
      {code.filename && (
        <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 font-mono border-b border-gray-700">
          {code.filename}
        </div>
      )}
      <Highlight
        theme={themes.nightOwl}
        code={code.source.trim()}
        language={code.language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="p-4 text-sm overflow-x-auto"
            style={{ ...style, margin: 0 }}
          >
            {tokens.map((line, i) => {
              const isHighlighted = code.highlights?.includes(i + 1);
              return (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  className={`${isHighlighted ? "bg-primary/20 -mx-4 px-4 border-l-2 border-primary" : ""}`}
                >
                  <span className="inline-block w-8 text-right mr-4 text-gray-500 select-none text-xs">
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
