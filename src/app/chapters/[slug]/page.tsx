import { notFound } from "next/navigation";
import { chapters } from "@/content/chapters";
import ChapterRenderer from "@/components/content/ChapterRenderer";

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = chapters.find((c) => c.slug === slug);
  if (!chapter) return { title: "未找到" };
  return {
    title: `${chapter.title} — 学习 OpenHarness`,
    description: chapter.subtitle,
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = chapters.find((c) => c.slug === slug);
  if (!chapter) notFound();
  return <ChapterRenderer chapter={chapter} />;
}
