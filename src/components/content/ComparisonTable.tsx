import type { ComparisonItem } from "@/content/types";

interface ComparisonTableProps {
  leftTitle: string;
  rightTitle: string;
  items: ComparisonItem[];
  label?: string;
}

export default function ComparisonTable({ leftTitle, rightTitle, items, label }: ComparisonTableProps) {
  return (
    <div className="my-4 overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground w-1/4">
              {label || "Comparison"}
            </th>
            <th className="px-4 py-3 text-left font-semibold text-primary">
              {leftTitle}
            </th>
            <th className="px-4 py-3 text-left font-semibold text-emerald-600 dark:text-emerald-400">
              {rightTitle}
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}
            >
              <td className="px-4 py-3 font-medium text-foreground">
                {item.label}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{item.left}</td>
              <td className="px-4 py-3 text-muted-foreground">{item.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
