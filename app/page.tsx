"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { glossary, CATEGORIES, type Term, type Category } from "@/lib/glossary";
import { useAuth } from "@/lib/AuthContext";

const FREE_LIMIT = 10;

const CATEGORY_COLORS: Record<Category, string> = {
  "AI基礎": "#3b82f6",
  "Claude・ChatGPT": "#8b5cf6",
  "プログラミング": "#F97316",
  "Web・インターネット": "#10b981",
  "データ・セキュリティ": "#ef4444",
  "ビジネス・DX": "#f59e0b",
};

function TermCard({ term }: { term: Term }) {
  const [open, setOpen] = useState(false);
  const color = CATEGORY_COLORS[term.category];

  return (
    <div
      className="rounded-2xl border cursor-pointer transition-all duration-200 hover:scale-[1.01] group"
      style={{
        background: "var(--card)",
        borderColor: open ? color : "var(--border)",
      }}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <span
              className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{
                background: `${color}20`,
                color: color,
                border: `1px solid ${color}40`,
              }}
            >
              {term.category}
            </span>
            <h3 className="font-bold text-base leading-snug mb-0.5 group-hover:text-orange-400 transition-colors">
              {term.name}
            </h3>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              {term.englishName}
            </p>
          </div>
          <span
            className="mt-1 text-lg select-none transition-transform duration-300 flex-shrink-0"
            style={{
              color: "var(--muted)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▾
          </span>
        </div>

        {!open && (
          <p className="mt-3 text-sm leading-relaxed line-clamp-2" style={{ color: "var(--muted)" }}>
            {term.description}
          </p>
        )}
      </div>

      {open && (
        <div className="px-5 pb-5 fade-in">
          <div className="border-t pt-4" style={{ borderColor: "var(--border)" }}>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#d1d5db" }}>
              {term.description}
            </p>
            <div
              className="text-sm rounded-xl p-4 italic"
              style={{
                background: "#ffffff06",
                color: "var(--muted)",
                borderLeft: `3px solid ${color}`,
              }}
            >
              <span className="text-xs font-semibold not-italic block mb-1" style={{ color: color }}>
                使用例
              </span>
              {term.example}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const { authed, loading } = useAuth();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "すべて">("すべて");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return glossary.filter((t) => {
      const matchesSearch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.englishName.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      const matchesCat = activeCategory === "すべて" || t.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  const displayTerms = authed ? filtered : filtered.slice(0, FREE_LIMIT);
  const isGated = !authed && filtered.length > FREE_LIMIT;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "#F9731620", color: "var(--accent)", border: "1px solid #F9731640" }}>
          🚀 Claude / AI用語集
        </div>
        <h1 className="text-4xl sm:text-6xl font-black mb-4 tracking-tight leading-tight">
          AI用語を
          <br />
          <span style={{ color: "var(--accent)" }}>マスターしよう</span>
        </h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto mb-8" style={{ color: "var(--muted)" }}>
          Claude・AI関連の必須用語{glossary.length}語を収録。<br className="hidden sm:block" />
          用語をクリックして詳細を確認、クイズで理解を深めよう。
        </p>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white text-base transition-all hover:opacity-90 hover:scale-105 shadow-lg"
          style={{ background: "var(--accent)" }}
        >
          <span>🎯</span> クイズに挑戦する
        </Link>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {CATEGORIES.map((cat) => {
          const count = glossary.filter((t) => t.category === cat).length;
          const color = CATEGORY_COLORS[cat];
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? "すべて" : cat)}
              className="rounded-xl p-3 text-left transition-all hover:scale-[1.02]"
              style={{
                background: activeCategory === cat ? `${color}20` : "var(--card)",
                border: `1px solid ${activeCategory === cat ? color : "var(--border)"}`,
              }}
            >
              <div className="text-xl font-black mb-0.5" style={{ color }}>
                {count}
              </div>
              <div className="text-xs font-medium" style={{ color: activeCategory === cat ? color : "var(--muted)" }}>
                {cat}
              </div>
            </button>
          );
        })}
      </div>

      {/* Search & filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base" style={{ color: "var(--muted)" }}>
            🔍
          </span>
          <input
            type="text"
            placeholder="用語を検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 transition"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
          />
        </div>
        <div className="flex gap-2 flex-wrap items-center">
          <button
            onClick={() => setActiveCategory("すべて")}
            className="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
            style={
              activeCategory === "すべて"
                ? { background: "var(--accent)", color: "#fff" }
                : { background: "var(--card)", color: "var(--muted)", border: "1px solid var(--border)" }
            }
          >
            すべて ({glossary.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? "すべて" : cat)}
              className="px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap"
              style={
                activeCategory === cat
                  ? { background: CATEGORY_COLORS[cat], color: "#fff" }
                  : { background: "var(--card)", color: "var(--muted)", border: "1px solid var(--border)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs mb-6" style={{ color: "var(--muted)" }}>
        {authed ? `${filtered.length}件表示` : `${displayTerms.length}件表示（無料版）`} / 全{glossary.length}語
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 rounded-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <div className="text-4xl mb-3">🔎</div>
          <p style={{ color: "var(--muted)" }}>「{search}」に一致する用語が見つかりませんでした</p>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            {displayTerms.map((term) => (
              <TermCard key={term.id} term={term} />
            ))}
          </div>

          {/* Gate banner for non-authenticated users */}
          {isGated && (
            <div className="relative mt-8">
              <div className="absolute inset-x-0 -top-32 h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
              <div
                className="rounded-2xl p-8 text-center fade-in"
                style={{ background: "var(--card)", border: "2px solid var(--accent)" }}
              >
                <div className="text-5xl mb-4">🔒</div>
                <h2 className="text-2xl font-black mb-2">
                  残り <span style={{ color: "var(--accent)" }}>{filtered.length - FREE_LIMIT}語</span> はプレミアム限定
                </h2>
                <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                  Brain購入者はパスワードを入力して全500語にアクセスできます。<br />
                  クイズ成績記録・PDF用語カードのダウンロードも利用可能！
                </p>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white text-base transition-all hover:opacity-90 hover:scale-105 shadow-lg"
                  style={{ background: "var(--accent)" }}
                >
                  🔐 ログインして全用語を見る
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
