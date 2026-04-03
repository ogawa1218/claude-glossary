"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import TermCard from "@/components/TermCard";
import { terms, categories, searchTerms, Category, Difficulty } from "@/data/terms";

const categoryColorMap: Record<string, { border: string; text: string }> = {
  "ai-basics": { border: "#38bdf8", text: "#38bdf8" },
  "claude-specific": { border: "#f97316", text: "#f97316" },
  "api-dev": { border: "#a78bfa", text: "#a78bfa" },
  "prompt-tech": { border: "#34d399", text: "#34d399" },
  "pricing": { border: "#fbbf24", text: "#fbbf24" },
  "automation": { border: "#f472b6", text: "#f472b6" },
};

const difficultyConfig: Record<Difficulty, { label: string; color: string; bg: string; emoji: string }> = {
  beginner:     { label: "初級", color: "#4ade80", bg: "rgba(74,222,128,0.15)",   emoji: "🟢" },
  intermediate: { label: "中級", color: "#facc15", bg: "rgba(250,204,21,0.15)",   emoji: "🟡" },
  advanced:     { label: "上級", color: "#f87171", bg: "rgba(248,113,113,0.15)",  emoji: "🔴" },
};

// Deterministic "today's term" based on date (stable across SSR/client hydration)
function getTodaysTerm() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return terms[dayOfYear % terms.length];
}

type SortMode = "default" | "kana" | "en";

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const todaysTerm = useMemo(() => getTodaysTerm(), []);

  const filtered = useMemo(() => {
    let result = query ? searchTerms(query) : terms;
    if (activeCategory !== "all") {
      result = result.filter((t) => t.category === activeCategory);
    }
    if (sortMode === "kana") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name, "ja"));
    } else if (sortMode === "en") {
      result = [...result].sort((a, b) => a.nameEn.localeCompare(b.nameEn, "en"));
    }
    return result;
  }, [query, activeCategory, sortMode]);

  const counts = useMemo(() => {
    const base = query ? searchTerms(query) : terms;
    const c: Record<string, number> = { all: base.length };
    for (const cat of Object.keys(categories)) {
      c[cat] = base.filter((t) => t.category === cat).length;
    }
    return c;
  }, [query]);

  // Group by category for display (only when no query & default sort)
  const groupedByCategory = useMemo(() => {
    if (query || activeCategory !== "all" || sortMode !== "default") return null;
    const groups: Record<string, typeof terms> = {};
    for (const cat of Object.keys(categories)) {
      groups[cat] = terms.filter((t) => t.category === cat);
    }
    return groups;
  }, [query, activeCategory, sortMode]);

  const isFiltered = query || activeCategory !== "all" || sortMode !== "default";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1e1f22" }}>
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Mascot Banner */}
        <div
          className="rounded-2xl p-4 mb-6 flex items-center gap-4"
          style={{ backgroundColor: "#2b2d31", border: "1px solid rgba(249,115,22,0.3)" }}
        >
          <div className="text-4xl flex-shrink-0">🍄</div>
          <div>
            <p className="font-bold text-sm" style={{ color: "#f97316" }}>
              MASHの"第二の脳"
            </p>
            <p className="text-sm mt-0.5" style={{ color: "#b5bac1" }}>
              IT・AI用語を中学生でもわかるように解説。田中健二さん（42歳・管理職・IT苦手）が読んで「なるほど！」となるレベルを目指しています。
            </p>
          </div>
        </div>

        {/* Today's Term */}
        <div
          className="rounded-2xl p-4 mb-6"
          style={{ backgroundColor: "#2b2d31", border: "1px solid #383a40" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">✨</span>
            <span className="text-sm font-bold" style={{ color: "#f2f3f5" }}>今日の1用語</span>
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#383a40", color: "#80848e" }}>
              デイリーピックアップ
            </span>
          </div>
          <a href={`/terms/${todaysTerm.slug}`} className="block group">
            <div
              className="rounded-xl p-4 transition-all duration-200"
              style={{ backgroundColor: "#313338", border: "1px solid #383a40" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = categoryColorMap[todaysTerm.category].border;
                el.style.backgroundColor = "#383a40";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#383a40";
                el.style.backgroundColor = "#313338";
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: `${categoryColorMap[todaysTerm.category].border}25`,
                        color: categoryColorMap[todaysTerm.category].text,
                      }}
                    >
                      {categories[todaysTerm.category].icon} {categories[todaysTerm.category].label}
                    </span>
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: difficultyConfig[todaysTerm.difficulty].bg,
                        color: difficultyConfig[todaysTerm.difficulty].color,
                      }}
                    >
                      {difficultyConfig[todaysTerm.difficulty].emoji} {difficultyConfig[todaysTerm.difficulty].label}
                    </span>
                  </div>
                  <h3 className="font-bold text-base mb-0.5" style={{ color: "#f2f3f5" }}>
                    {todaysTerm.name}
                  </h3>
                  <p className="text-xs mb-2" style={{ color: "#80848e" }}>{todaysTerm.nameEn}</p>
                  <p className="text-sm font-medium" style={{ color: categoryColorMap[todaysTerm.category].text }}>
                    「{todaysTerm.tagline}」
                  </p>
                </div>
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-0.5"
                  style={{ color: "#80848e" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* Hero */}
        <section className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-4"
            style={{ backgroundColor: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.3)", color: "#f97316" }}>
            <span>🤖</span>
            <span>ChatGPT経験者のためのAI用語辞典</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "#f2f3f5" }}>
            Claude &amp; IT用語、<br className="sm:hidden" />
            <span style={{ color: "#f97316" }}>やさしく解説</span>
          </h1>
          <p className="text-sm max-w-md mx-auto" style={{ color: "#80848e" }}>
            「APIキーって食べ物？」レベルから始めよう。
            <br />
            30〜40代のビジネスパーソンが仕事でAIを使いこなすための辞典です。
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 mt-5">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: "#f97316" }}>全{terms.length}用語</div>
              <div className="text-xs" style={{ color: "#80848e" }}>収録</div>
            </div>
            <div className="w-px h-8" style={{ backgroundColor: "#383a40" }} />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: "#38bdf8" }}>{Object.keys(categories).length}</div>
              <div className="text-xs" style={{ color: "#80848e" }}>カテゴリ</div>
            </div>
            <div className="w-px h-8" style={{ backgroundColor: "#383a40" }} />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: "#34d399" }}>0円</div>
              <div className="text-xs" style={{ color: "#80848e" }}>無料</div>
            </div>
          </div>
        </section>

        {/* Search + Filter + Sort */}
        <div
          className="rounded-2xl p-4 mb-8"
          style={{ backgroundColor: "#2b2d31", border: "1px solid #383a40" }}
        >
          <div className="mb-3">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <CategoryFilter
            selected={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
          {/* Sort buttons */}
          <div className="flex items-center gap-2 mt-3 pt-3" style={{ borderTop: "1px solid #383a40" }}>
            <span className="text-xs" style={{ color: "#80848e" }}>並び順：</span>
            {(["default", "kana", "en"] as SortMode[]).map((mode) => {
              const labels: Record<SortMode, string> = { default: "カテゴリ別", kana: "50音順", en: "アルファベット順" };
              return (
                <button
                  key={mode}
                  onClick={() => setSortMode(mode)}
                  className="text-xs px-3 py-1 rounded-full transition-all font-medium"
                  style={
                    sortMode === mode
                      ? { backgroundColor: "rgba(249,115,22,0.15)", border: "1px solid #f97316", color: "#f97316" }
                      : { backgroundColor: "#313338", border: "1px solid #383a40", color: "#80848e" }
                  }
                >
                  {labels[mode]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        {isFiltered ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm" style={{ color: "#b5bac1" }}>
                {filtered.length > 0 ? (
                  <>
                    <span style={{ color: "#f97316", fontWeight: "bold" }}>{filtered.length}件</span>
                    の用語が見つかりました
                    {query && (
                      <> 「<span style={{ color: "#38bdf8" }}>{query}</span>」</>
                    )}
                  </>
                ) : (
                  "用語が見つかりませんでした"
                )}
              </p>
              {isFiltered && (
                <button
                  onClick={() => { setQuery(""); setActiveCategory("all"); setSortMode("default"); }}
                  className="text-xs px-2 py-1 rounded-md transition-colors"
                  style={{ color: "#80848e", backgroundColor: "#383a40" }}
                >
                  リセット
                </button>
              )}
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filtered.map((term) => (
                  <TermCard key={term.slug} term={term} searchQuery={query} />
                ))}
              </div>
            ) : (
              <div
                className="rounded-2xl p-12 text-center"
                style={{ backgroundColor: "#313338", border: "1px solid #383a40" }}
              >
                <div className="text-4xl mb-3">🔍</div>
                <p className="font-medium mb-1" style={{ color: "#f2f3f5" }}>
                  「{query}」は見つかりませんでした
                </p>
                <p className="text-sm" style={{ color: "#80848e" }}>
                  別のキーワードで検索してみてください
                </p>
              </div>
            )}
          </>
        ) : (
          /* Grouped view */
          <div className="space-y-10">
            {Object.entries(categories).map(([catKey, catMeta]) => {
              const catTerms = groupedByCategory?.[catKey] ?? [];
              if (catTerms.length === 0) return null;
              const colors = categoryColorMap[catKey];
              return (
                <section key={catKey}>
                  {/* Category heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: colors.border }}
                    />
                    <h2 className="text-lg font-bold" style={{ color: colors.text }}>
                      {catMeta.icon} {catMeta.label}
                    </h2>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#383a40", color: "#80848e" }}
                    >
                      {catTerms.length}用語
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {catTerms.map((term) => (
                      <TermCard key={term.slug} term={term} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 text-center" style={{ borderTop: "1px solid #383a40" }}>
          <p className="text-sm" style={{ color: "#80848e" }}>
            <span style={{ color: "#f97316", fontWeight: "bold" }}>MASH</span> — AI活用を加速するブランド
          </p>
          <p className="text-xs mt-1" style={{ color: "#4e5058" }}>
            ※ 本サイトの情報は執筆時点のものです。AIサービスは頻繁にアップデートされるため、最新情報は公式サイトを確認してください。
          </p>
        </footer>
      </main>
    </div>
  );
}
