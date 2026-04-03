import { notFound } from "next/navigation";
import { terms, getTermBySlug, categories } from "@/data/terms";
import Header from "@/components/Header";
import TermDetail from "@/components/TermDetail";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return terms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const term = getTermBySlug(params.slug);
  if (!term) return { title: "用語が見つかりません | MASH" };
  const cat = categories[term.category];
  return {
    title: `${term.name}とは？ | MASH Claude & IT用語辞典`,
    description: `${term.name}（${term.nameEn}）— ${term.tagline}。${cat.label}カテゴリの用語をわかりやすく解説。`,
  };
}

export default function TermPage({ params }: Props) {
  const term = getTermBySlug(params.slug);
  if (!term) notFound();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1e1f22" }}>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <TermDetail term={term} />
      </main>
    </div>
  );
}
