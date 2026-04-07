"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/types";

type PermissionMode = "default" | "plan" | "full-auto";

interface ActionExample {
  name: string;
  icon: string;
  isRead: boolean;
  isWrite: boolean;
  isDangerous: boolean;
}

// Action flags: index matches dict.permissionSim.actions order
const actionFlags = [
  { isRead: true, isWrite: false, isDangerous: false },
  { isRead: true, isWrite: false, isDangerous: false },
  { isRead: false, isWrite: true, isDangerous: false },
  { isRead: false, isWrite: true, isDangerous: false },
  { isRead: false, isWrite: true, isDangerous: false },
  { isRead: false, isWrite: true, isDangerous: true },
  { isRead: false, isWrite: true, isDangerous: false },
  { isRead: false, isWrite: true, isDangerous: true },
  { isRead: true, isWrite: false, isDangerous: false },
  { isRead: false, isWrite: true, isDangerous: false },
];

function getStatus(
  action: ActionExample,
  mode: PermissionMode,
  statuses: Dictionary["permissionSim"]["statuses"]
) {
  if (mode === "full-auto") {
    return { label: statuses.autoPass, color: "text-emerald-600 bg-emerald-50" };
  }
  if (mode === "plan") {
    if (action.isRead) return { label: statuses.allowed, color: "text-emerald-600 bg-emerald-50" };
    return { label: statuses.blocked, color: "text-red-600 bg-red-50" };
  }
  if (action.isRead) return { label: statuses.autoPass, color: "text-emerald-600 bg-emerald-50" };
  if (action.isDangerous) return { label: statuses.needConfirmWarn, color: "text-amber-600 bg-amber-50" };
  return { label: statuses.needConfirm, color: "text-amber-600 bg-amber-50" };
}

export default function PermissionSimulator({
  dict,
}: {
  dict: Dictionary["permissionSim"];
}) {
  const [mode, setMode] = useState<PermissionMode>("default");

  const actions: ActionExample[] = dict.actions.map((a, i) => ({
    ...a,
    ...actionFlags[i],
  }));

  return (
    <div className="my-6 bg-white rounded-xl border border-gray-200 p-5">
      <div className="text-xs font-semibold text-indigo-500 mb-3">
        {dict.title}
      </div>

      {/* Mode toggles */}
      <div className="flex gap-2 mb-3">
        {(["default", "plan", "full-auto"] as PermissionMode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === m
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {dict.modes[m]}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-4">{dict.modeDescriptions[mode]}</p>

      {/* Actions */}
      <div className="space-y-1.5">
        {actions.map((action) => {
          const status = getStatus(action, mode, dict.statuses);
          return (
            <div
              key={action.name}
              className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm">
                <span>{action.icon}</span>
                <span className="text-gray-700">{action.name}</span>
              </div>
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}
              >
                {status.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
