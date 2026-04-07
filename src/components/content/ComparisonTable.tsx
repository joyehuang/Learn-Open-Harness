import type { ComparisonItem } from "@/content/types";

interface ComparisonTableProps {
  leftTitle: string;
  rightTitle: string;
  items: ComparisonItem[];
}

export default function ComparisonTable({
  leftTitle,
  rightTitle,
  items,
}: ComparisonTableProps) {
  return (
    <div className="my-4 overflow-hidden rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-left font-semibold text-gray-500 w-1/4">
              对比项
            </th>
            <th className="px-4 py-3 text-left font-semibold text-indigo-600">
              {leftTitle}
            </th>
            <th className="px-4 py-3 text-left font-semibold text-emerald-600">
              {rightTitle}
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
            >
              <td className="px-4 py-3 font-medium text-gray-700">
                {item.label}
              </td>
              <td className="px-4 py-3 text-gray-600">{item.left}</td>
              <td className="px-4 py-3 text-gray-600">{item.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
