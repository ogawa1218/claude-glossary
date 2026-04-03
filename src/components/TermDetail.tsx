"use client";

import Link from "next/link";
import { Term, Difficulty, categories, getTermBySlug } from "@/data/terms";

interface TermDetailProps {
  term: Term;
}

const categoryColorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  "ai-basics": { border: "#38bdf8", bg: "rgba(56,189,248,0.08)", text: "#38bdf8", badge: "rgba(56,189,248,0.15)" },
  "claude-specific": { border: "#f97316", bg: "rgba(249,115,22,0.08)", text: "#f97316", badge: "rgba(249,115,22,0.15)" },
  "api-dev": { border: "#a78bfa", bg: "rgba(167,139,250,0.08)", text: "#a78bfa", badge: "rgba(167,139,250,0.15)" },
  "prompt-tech": { border: "#34d399", bg: "rgba(52,211,153,0.08)", text: "#34d399", badge: "rgba(52,211,153,0.15)" },
  "pricing": { border: "#fbbf24", bg: "rgba(251,191,36,0.08)", text: "#fbbf24", badge: "rgba(251,191,36,0.15)" },
  "automation": { border: "#f472b6", bg: "rgba(244,114,182,0.08)", text: "#f472b6", badge: "rgba(244,114,182,0.15)" },
};

const difficultyConfig: Record<Difficulty, { label: string; color: string; bg: string; emoji: string }> = {
  beginner:     { label: "初級", color: "#4ade80", bg: "rgba(74,222,128,0.15)", emoji: "🟢" },
  intermediate: { label: "中級", color: "#facc15", bg: "rgba(250,204,21,0.15)",  emoji: "🟡" },
  advanced:     { label: "上級", color: "#f87171", bg: "rgba(248,113,113,0.15)", emoji: "🔴" },
};

function formatDescription(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("**") && line.endsWith("**")) {
      return (
        <p key={i} className="font-bold mt-3 mb-1" style={{ color: "#f2f3f5" }}>
          {line.replace(/\*\*/g, "")}
        </p>
      );
    }
    if (line.startsWith("```") || line.endsWith("```")) {
      return null;
    }
    if (line.includes("`")) {
      const parts = line.split(/(`[^`]+`)/g);
      return (
        <p key={i} className="mb-1" style={{ color: "#b5bac1" }}>
          {parts.map((p, j) =>
            p.startsWith("`") && p.endsWith("`") ? (
              <code
                key={j}
                className="px-1.5 py-0.5 rounded text-xs font-mono"
                style={{ backgroundColor: "#1e1f22", color: "#38bdf8", border: "1px solid #383a40" }}
              >
                {p.replace(/`/g, "")}
              </code>
            ) : (
              p
            )
          )}
        </p>
      );
    }
    if (line.trim() === "") return <br key={i} />;
    return (
      <p key={i} className="mb-1" style={{ color: "#b5bac1" }}>
        {line}
      </p>
    );
  });
}

function formatExample(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.trim() === "") return <br key={i} />;
    if (line.startsWith("・") || line.startsWith("→")) {
      return (
        <p key={i} className="text-sm pl-2 border-l-2" style={{ color: "#b5bac1", borderColor: "#383a40" }}>
          {line}
        </p>
      );
    }
    return (
      <p key={i} className="text-sm" style={{ color: "#b5bac1" }}>
        {line}
      </p>
    );
  });
}

export default function TermDetail({ term }: TermDetailProps) {
  const colors = categoryColorMap[term.category];
  const cat = categories[term.category];
  const diff = difficultyConfig[term.difficulty];
  const relatedTermObjects = term.relatedTerms
    .map((slug) => getTermBySlug(slug))
    .filter(Boolean) as Term[];

  return (
    <article className="max-w-2xl mx-auto">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm mb-6 transition-colors"
        style={{ color: "#80848e" }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        用語一覧に戻る
      </Link>

      {/* Header card */}
      <div
        className="rounded-2xl p-6 mb-6"
        style={{
          backgroundColor: "#313338",
          border: `1px solid ${colors.border}`,
        }}
      >
        {/* Category + Difficulty */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span
            className="inline-block text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ backgroundColor: colors.badge, color: colors.text }}
          >
            {cat.icon} {cat.label}
          </span>
          <span
            className="inline-block text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ backgroundColor: diff.bg, color: diff.color }}
          >
            {diff.emoji} {diff.label}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-1" style={{ color: "#f2f3f5" }}>
          {term.name}
        </h1>
        <p className="text-sm mb-4" style={{ color: "#80848e" }}>
          {term.nameEn}
        </p>

        {/* Tagline */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
          style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}
        >
          <span className="text-lg">💡</span>
          <span className="font-semibold" style={{ color: colors.text }}>
            一言でいうと：「{term.tagline}」
          </span>
        </div>
      </div>

      {/* Description */}
      <section
        className="rounded-2xl p-6 mb-4"
        style={{ backgroundColor: "#313338", border: "1px solid #383a40" }}
      >
        <h2 className="text-sm font-bold mb-4 flex items-center gap-2" style={{ color: "#f97316" }}>
          <span
            className="w-5 h-5 rounded flex items-center justify-center text-xs"
            style={{ backgroundColor: "rgba(249,115,22,0.15)" }}
          >
            📖
          </span>
          田中健二さん向け解説
        </h2>
        <div className="space-y-1 leading-relaxed text-sm">
          {formatDescription(term.description)}
        </div>
      </section>

      {/* Example */}
      <section
        className="rounded-2xl p-6 mb-4"
        style={{ backgroundColor: "#313338", border: "1px solid #383a40" }}
      >
        <h2 className="text-sm font-bold mb-4 flex items-center gap-2" style={{ color: "#38bdf8" }}>
          <span
            className="w-5 h-5 rounded flex items-center justify-center text-xs"
            style={{ backgroundColor: "rgba(56,189,248,0.15)" }}
          >
            🔍
          </span>
          具体例・使用シーン
        </h2>
        <div
          className="rounded-xl p-4 space-y-1"
          style={{ backgroundColor: "#1e1f22", border: "1px solid #383a40" }}
        >
          {formatExample(term.example)}
        </div>
      </section>

      {/* Related terms */}
      {relatedTermObjects.length > 0 && (
        <section
          className="rounded-2xl p-6"
          style={{ backgroundColor: "#313338", border: "1px solid #383a40" }}
        >
          <h2 className="text-sm font-bold mb-4 flex items-center gap-2" style={{ color: "#b5bac1" }}>
            <span
              className="w-5 h-5 rounded flex items-center justify-center text-xs"
              style={{ backgroundColor: "#383a40" }}
            >
              🔗
            </span>
            関連用語
          </h2>
          <div className="flex flex-wrap gap-2">
            {relatedTermObjects.map((related) => {
              const rc = categoryColorMap[related.category];
              return (
                <Link
                  key={related.slug}
                  href={`/terms/${related.slug}`}
                  className="flex flex-col px-3 py-2 rounded-lg transition-all text-sm"
                  style={{
                    backgroundColor: "#2b2d31",
                    border: `1px solid #383a40`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = rc.border;
                    el.style.backgroundColor = rc.bg;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "#383a40";
                    el.style.backgroundColor = "#2b2d31";
                  }}
                >
                  <span className="font-medium" style={{ color: "#f2f3f5" }}>
                    {related.name}
                  </span>
                  <span className="text-xs" style={{ color: rc.text }}>
                    「{related.tagline}」
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </article>
  );
}
