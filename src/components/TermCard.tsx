"use client";

import Link from "next/link";
import { Term, categories, Difficulty } from "@/data/terms";

interface TermCardProps {
  term: Term;
  searchQuery?: string;
}

const categoryColorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  "ai-basics": { border: "#38bdf8", bg: "rgba(56,189,248,0.06)", text: "#38bdf8", badge: "rgba(56,189,248,0.15)" },
  "claude-specific": { border: "#f97316", bg: "rgba(249,115,22,0.06)", text: "#f97316", badge: "rgba(249,115,22,0.15)" },
  "api-dev": { border: "#a78bfa", bg: "rgba(167,139,250,0.06)", text: "#a78bfa", badge: "rgba(167,139,250,0.15)" },
  "prompt-tech": { border: "#34d399", bg: "rgba(52,211,153,0.06)", text: "#34d399", badge: "rgba(52,211,153,0.15)" },
  "pricing": { border: "#fbbf24", bg: "rgba(251,191,36,0.06)", text: "#fbbf24", badge: "rgba(251,191,36,0.15)" },
  "automation": { border: "#f472b6", bg: "rgba(244,114,182,0.06)", text: "#f472b6", badge: "rgba(244,114,182,0.15)" },
};

const difficultyConfig: Record<Difficulty, { label: string; color: string; bg: string }> = {
  beginner:     { label: "初級", color: "#4ade80", bg: "rgba(74,222,128,0.15)" },
  intermediate: { label: "中級", color: "#facc15", bg: "rgba(250,204,21,0.15)" },
  advanced:     { label: "上級", color: "#f87171", bg: "rgba(248,113,113,0.15)" },
};

const difficultyEmoji: Record<Difficulty, string> = {
  beginner: "🟢",
  intermediate: "🟡",
  advanced: "🔴",
};

function highlight(text: string, query: string) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={i}
        style={{ backgroundColor: "rgba(249,115,22,0.3)", color: "#f97316", borderRadius: "2px" }}
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function TermCard({ term, searchQuery }: TermCardProps) {
  const colors = categoryColorMap[term.category];
  const cat = categories[term.category];
  const diff = difficultyConfig[term.difficulty];

  return (
    <Link href={`/terms/${term.slug}`} className="block group">
      <div
        className="rounded-xl p-4 transition-all duration-200 h-full"
        style={{
          backgroundColor: "#313338",
          border: `1px solid #383a40`,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = colors.border;
          el.style.backgroundColor = "#383a40";
          el.style.transform = "translateY(-2px)";
          el.style.boxShadow = `0 4px 20px rgba(0,0,0,0.3)`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "#383a40";
          el.style.backgroundColor = "#313338";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Top row: category badge + difficulty + arrow */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: colors.badge, color: colors.text }}
            >
              {cat.icon} {cat.label}
            </span>
            <span
              className="text-xs px-1.5 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: diff.bg, color: diff.color }}
            >
              {difficultyEmoji[term.difficulty]} {diff.label}
            </span>
          </div>
          <svg
            className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5"
            style={{ color: "#80848e" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Term name */}
        <h3 className="font-bold text-sm mb-0.5" style={{ color: "#f2f3f5" }}>
          {searchQuery ? highlight(term.name, searchQuery) : term.name}
        </h3>
        <p className="text-xs mb-2" style={{ color: "#80848e" }}>
          {term.nameEn}
        </p>

        {/* Tagline */}
        <p
          className="text-sm font-medium"
          style={{ color: colors.text }}
        >
          「{searchQuery ? highlight(term.tagline, searchQuery) : term.tagline}」
        </p>
      </div>
    </Link>
  );
}
