import { notFound } from "next/navigation";
import { locales, isValidLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Providers } from "@/components/providers";
import Sidebar from "@/components/layout/Sidebar";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <Providers>
      <Sidebar locale={locale as Locale} dict={dict} />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </Providers>
  );
}
