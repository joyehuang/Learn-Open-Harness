"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";

const localeLabels: Record<Locale, string> = {
  "zh-CN": "中文",
  en: "EN",
};

export default function TopBar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);

  useEffect(() => {
    if (!pendingLocale) return;

    document.cookie = `locale=${pendingLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
    const newPath = pathname.replace(`/${locale}`, `/${pendingLocale}`);
    router.push(newPath);
  }, [locale, pathname, pendingLocale, router]);

  function switchLocale(newLocale: Locale) {
    if (newLocale === locale) return;
    setPendingLocale(newLocale);
  }

  const nextLocale = locales.find((l) => l !== locale) || locales[0];

  return (
    <div className="fixed top-3 right-3 z-50 flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        className="size-8 text-muted-foreground hover:text-foreground"
        onClick={() => switchLocale(nextLocale)}
        title={localeLabels[nextLocale]}
      >
        <Globe className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="size-8 text-muted-foreground hover:text-foreground"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}
