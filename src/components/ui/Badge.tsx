interface BadgeProps {
  color?: "indigo" | "emerald" | "amber" | "red" | "gray" | "blue" | "purple";
  children: React.ReactNode;
}

const colorMap = {
  indigo: "bg-indigo-100 text-indigo-700",
  emerald: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  red: "bg-red-100 text-red-700",
  gray: "bg-gray-100 text-gray-700",
  blue: "bg-blue-100 text-blue-700",
  purple: "bg-purple-100 text-purple-700",
};

export default function Badge({ color = "indigo", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${colorMap[color]}`}
    >
      {children}
    </span>
  );
}
