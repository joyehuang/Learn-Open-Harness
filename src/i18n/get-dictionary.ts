import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  "zh-CN": () => import("./dictionaries/zh-CN"),
  en: () => import("./dictionaries/en"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const mod = await dictionaries[locale]();
  return mod.default;
}

export type { Dictionary };
