"use client";

import { useState, useMemo } from "react";
import { terms, CATEGORIES, CATEGORY_COLORS, type Category } from "@/lib/glossary";

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "すべて">("すべて");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return terms.filter((term) => {
      const matchCategory =
        activeCategory === "すべて" || term.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        term.name.toLowerCase().includes(q) ||
        term.description.toLowerCase().includes(q) ||
        term.detail.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          <span style={{ color: "var(--orange)" }}>AI</span>用語集
        </h1>
        <p style={{ color: "var(--text-secondary)" }} className="text-base sm:text-lg">
          Claude・生成AIの重要キーワードを分かりやすく解説
        </p>
        <p style={{ color: "var(--text-secondary)" }} className="text-sm mt-1">
          全 {terms.length} 語収録
        </p>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="用語を検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-base outline-none"
          style={{
            background: "var(--navy-light)",
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
          }}
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("すべて")}
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
          style={{
            background: activeCategory === "すべて" ? "var(--orange)" : "var(--navy-light)",
            color: activeCategory === "すべて" ? "#fff" : "var(--text-secondary)",
            border: "1px solid var(--border)",
          }}
        >
          すべて
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            style={{
              background:
                activeCategory === cat ? CATEGORY_COLORS[cat] : "var(--navy-light)",
              color: activeCategory === cat ? "#fff" : "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      {search && (
        <p style={{ color: "var(--text-secondary)" }} className="text-sm mb-4">
          {filtered.length} 件ヒット
        </p>
      )}

      {/* Term Cards */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <div className="text-center py-16" style={{ color: "var(--text-secondary)" }}>
            <p className="text-lg">該当する用語が見つかりませんでした</p>
          </div>
        ) : (
          filtered.map((term) => {
            const isOpen = expandedId === term.id;
            return (
              <div
                key={term.id}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "var(--navy-light)",
                  border: isOpen
                    ? `1px solid ${CATEGORY_COLORS[term.category]}`
                    : "1px solid var(--border)",
                }}
              >
                <button
                  className="w-full text-left px-5 py-4 flex items-start gap-3"
                  onClick={() => setExpandedId(isOpen ? null : term.id)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        {term.name}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: `${CATEGORY_COLORS[term.category]}22`,
                          color: CATEGORY_COLORS[term.category],
                        }}
                      >
                        {term.category}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {term.description}
                    </p>
                  </div>
                  <span
                    className="text-lg flex-shrink-0 mt-1"
                    style={{
                      color: "var(--orange)",
                      display: "inline-block",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div
                    className="px-5 pb-4 text-sm leading-relaxed"
                    style={{
                      color: "var(--text-secondary)",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <p className="pt-3">{term.detail}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
