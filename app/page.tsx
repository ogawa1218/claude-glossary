"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { glossary, CATEGORIES, type Term, type Category } from "@/lib/glossary";
import { useAuth } from "@/lib/AuthContext";

const FREE_LIMIT = 10;

const CATEGORY_TOKEN: Record<Category, { color: string; label: string; initial: string }> = {
  "AI基礎":              { color: "var(--cat-ai)",      label: "AI基礎",             initial: "AI" },
  "Claude・ChatGPT":      { color: "var(--cat-claude)",  label: "Claude・ChatGPT",    initial: "CL" },
  "プログラミング":         { color: "var(--cat-program)", label: "プログラミング",      initial: "PG" },
  "Web・インターネット":     { color: "var(--cat-web)",     label: "Web・インターネット",  initial: "WB" },
  "データ・セキュリティ":    { color: "var(--cat-data)",    label: "データ・セキュリティ",  initial: "DS" },
  "ビジネス・DX":          { color: "var(--cat-biz)",     label: "ビジネス・DX",        initial: "BZ" },
};

/* ---------- Premium Term Card ---------- */
function TermCard({ term, index }: { term: Term; index: number }) {
  const [open, setOpen] = useState(false);
  const tok = CATEGORY_TOKEN[term.category];

  return (
    <article
      className="rounded-2xl card-lift cursor-pointer relative overflow-hidden slide-up"
      style={{
        background: "var(--surface)",
        border: `1px solid ${open ? tok.color : "var(--hairline)"}`,
        boxShadow: "var(--shadow-sm)",
        animationDelay: `${Math.min(index * 30, 400)}ms`,
        animationFillMode: "backwards",
      }}
      onClick={() => setOpen((o) => !o)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
    >
      {/* subtle left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 transition-all"
        style={{
          background: tok.color,
          opacity: open ? 1 : 0.3,
        }}
      />

      <div className="p-5 pl-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2.5">
              <span
                className="pill"
                style={{
                  background: `color-mix(in srgb, ${tok.color} 14%, transparent)`,
                  color: tok.color,
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: tok.color }}
                />
                {tok.label}
              </span>
              <span
                className="text-[10px] font-mono tracking-widest uppercase"
                style={{ color: "var(--muted-soft)" }}
              >
                №{String(index + 1).padStart(3, "0")}
              </span>
            </div>
            <h3 className="font-serif text-xl font-semibold leading-tight tracking-tight" style={{ color: "var(--text)" }}>
              {term.name}
            </h3>
            <p className="text-xs font-mono mt-0.5" style={{ color: "var(--muted)" }}>
              {term.englishName}
            </p>
          </div>
          <span
            aria-hidden
            className="mt-0.5 transition-transform duration-300 flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full"
            style={{
              background: open ? tok.color : "var(--surface-2)",
              color: open ? "#fff" : "var(--muted)",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </div>

        {!open && (
          <p className="mt-3 text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-soft)" }}>
            {term.description}
          </p>
        )}
      </div>

      {open && (
        <div className="px-5 pl-6 pb-5 fade-in">
          <div className="pt-4" style={{ borderTop: "1px dashed var(--hairline-strong)" }}>
            <p className="text-[15px] leading-[1.8]" style={{ color: "var(--text-soft)" }}>
              {term.description}
            </p>
            <div
              className="mt-4 rounded-xl p-4"
              style={{
                background: `color-mix(in srgb, ${tok.color} 6%, var(--surface-2))`,
                borderLeft: `3px solid ${tok.color}`,
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={tok.color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: tok.color }}>
                  Example
                </span>
              </div>
              <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-soft)" }}>
                {term.example}
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

/* ---------- Main Page ---------- */
export default function HomePage() {
  const { authed } = useAuth();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "すべて">("すべて");
  const searchRef = useRef<HTMLInputElement>(null);

  // "/" to focus search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === "Escape") {
        setSearch("");
        searchRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* ========================= HERO ========================= */}
      <section className="relative pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 pill mb-7 confetti-pop"
            style={{
              background: "var(--accent-wash)",
              color: "var(--accent-ink)",
              border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
            }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full pulse-accent" style={{ background: "var(--accent)" }} />
            <span className="text-[11px] tracking-[0.18em] uppercase font-bold">
              Brain特典限定 — Claude Edition
            </span>
          </div>

          <h1 className="display text-5xl sm:text-7xl lg:text-[5.25rem] mb-6" style={{ color: "var(--text)" }}>
            AI時代を
            <br className="sm:hidden" />
            <span className="ink-underline">言語化</span>する、
            <br />
            <span style={{ color: "var(--accent)" }}>IT用語辞典。</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: "var(--text-soft)" }}>
            Claude・AI時代の必読{glossary.length}語を、中学生でもわかる言葉で。<br className="hidden sm:block" />
            クリック一つで詳細、4択クイズで定着。日々の会議や発信にそのまま使える実用辞典。
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/quiz"
              className="btn-accent inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold"
            >
              <span>◉</span> クイズに挑戦
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <button
              onClick={() => {
                document.getElementById("glossary-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                setTimeout(() => searchRef.current?.focus(), 400);
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-base font-semibold transition-all hover:scale-[1.02]"
              style={{
                background: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--hairline-strong)",
              }}
            >
              用語を探す
              <kbd>/</kbd>
            </button>
          </div>

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { n: glossary.length, l: "収録用語", s: "語" },
              { n: CATEGORIES.length, l: "カテゴリ", s: "分野" },
              { n: 10, l: "クイズ", s: "問／回" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl py-5 px-3 text-center"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="font-serif text-3xl sm:text-4xl font-semibold" style={{ color: "var(--accent)" }}>
                  {s.n}
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                  <span className="font-semibold">{s.l}</span>
                  <span className="mx-1">·</span>
                  <span>{s.s}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= CATEGORY SPINE ========================= */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="hairline-divider flex-1" />
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase" style={{ color: "var(--muted)" }}>
            Categories
          </span>
          <div className="hairline-divider flex-1" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.map((cat) => {
            const count = glossary.filter((t) => t.category === cat).length;
            const tok = CATEGORY_TOKEN[cat];
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(active ? "すべて" : cat)}
                className="group rounded-2xl p-4 text-left transition-all hover:-translate-y-0.5"
                style={{
                  background: active ? `color-mix(in srgb, ${tok.color} 10%, var(--surface))` : "var(--surface)",
                  border: `1px solid ${active ? tok.color : "var(--hairline)"}`,
                  boxShadow: active ? `0 10px 24px -14px ${tok.color}` : "var(--shadow-sm)",
                }}
              >
                <div className="flex items-start justify-between mb-1.5">
                  <span
                    className="font-mono text-[10px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-md"
                    style={{
                      background: `color-mix(in srgb, ${tok.color} 16%, transparent)`,
                      color: tok.color,
                    }}
                  >
                    {tok.initial}
                  </span>
                  <span
                    className="font-serif text-2xl font-semibold leading-none"
                    style={{ color: active ? tok.color : "var(--text)" }}
                  >
                    {count}
                  </span>
                </div>
                <div className="text-xs font-semibold leading-tight" style={{ color: active ? tok.color : "var(--text-soft)" }}>
                  {cat}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================= SEARCH ========================= */}
      <section id="glossary-grid" className="mb-6">
        <div
          className="rounded-2xl p-2 flex items-center gap-2"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--hairline)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="pl-3 pr-1 text-lg" style={{ color: "var(--muted)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <input
            ref={searchRef}
            type="text"
            placeholder="用語・英語名・説明文を検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:opacity-70"
            style={{ color: "var(--text)" }}
            aria-label="用語を検索"
          />
          {search ? (
            <button
              onClick={() => setSearch("")}
              className="text-xs px-2 py-1 rounded-md transition-all hover:opacity-80"
              style={{ color: "var(--muted)" }}
              aria-label="検索クリア"
            >
              ✕
            </button>
          ) : (
            <span className="hidden sm:inline-flex items-center gap-1 pr-3 text-xs" style={{ color: "var(--muted)" }}>
              <kbd>/</kbd>
              <span>でフォーカス</span>
            </span>
          )}
        </div>

        <div className="flex gap-2 flex-wrap items-center mt-3">
          <button
            onClick={() => setActiveCategory("すべて")}
            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={
              activeCategory === "すべて"
                ? { background: "var(--text)", color: "var(--bg)" }
                : { background: "var(--surface)", color: "var(--text-soft)", border: "1px solid var(--hairline)" }
            }
          >
            すべて <span className="font-mono opacity-70">{glossary.length}</span>
          </button>
          {CATEGORIES.map((cat) => {
            const tok = CATEGORY_TOKEN[cat];
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(active ? "すべて" : cat)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap"
                style={
                  active
                    ? { background: tok.color, color: "#fff" }
                    : { background: "var(--surface)", color: "var(--text-soft)", border: "1px solid var(--hairline)" }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
          {authed
            ? <><span className="font-mono font-semibold" style={{ color: "var(--text)" }}>{filtered.length}</span> 件表示</>
            : <><span className="font-mono font-semibold" style={{ color: "var(--text)" }}>{displayTerms.length}</span> 件（無料版）</>
          }
          <span className="mx-2 opacity-40">/</span>
          全<span className="font-mono font-semibold" style={{ color: "var(--text)" }}>{glossary.length}</span>語
        </p>
      </section>

      {/* ========================= GRID ========================= */}
      {filtered.length === 0 ? (
        <div
          className="text-center py-20 rounded-2xl"
          style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
        >
          <div className="text-5xl mb-3 opacity-50">∅</div>
          <p className="font-semibold" style={{ color: "var(--text)" }}>
            「{search}」に一致する用語が見つかりませんでした
          </p>
          <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
            スペルやカタカナ／ひらがなを試してみてください
          </p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-4 pb-10">
            {displayTerms.map((term, idx) => (
              <TermCard key={term.id} term={term} index={idx} />
            ))}
          </div>

          {/* ========================= GATE ========================= */}
          {isGated && (
            <div className="relative pb-16">
              <div
                className="pointer-events-none absolute inset-x-0 -top-48 h-48"
                style={{
                  background: "linear-gradient(to bottom, transparent, var(--bg))",
                }}
              />
              <div
                className="relative rounded-3xl p-10 sm:p-12 text-center slide-up noise-grain overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)",
                  border: "2px solid var(--accent)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                {/* Decorative ribbon */}
                <div className="absolute top-5 right-5">
                  <span
                    className="pill"
                    style={{
                      background: "var(--accent)",
                      color: "#fff",
                    }}
                  >
                    PREMIUM
                  </span>
                </div>

                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
                  style={{
                    background: "var(--accent-wash)",
                    color: "var(--accent)",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-3 tracking-tight">
                  残り<span style={{ color: "var(--accent)" }}> {filtered.length - FREE_LIMIT}語 </span>は
                  <br className="sm:hidden" />
                  Brain購入者限定
                </h2>
                <p className="text-sm sm:text-base max-w-md mx-auto mb-7 leading-relaxed" style={{ color: "var(--text-soft)" }}>
                  Brain購入時に付与されるパスワードで、<br />
                  全{glossary.length}語・PDFダウンロード・クイズ記録が解放されます。
                </p>
                <div className="flex items-center gap-3 justify-center flex-wrap">
                  <Link
                    href="/login"
                    className="btn-accent inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-base"
                  >
                    ログインして全用語を見る
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </Link>
                </div>

                {/* Benefits grid */}
                <div className="mt-9 grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
                  {[
                    { icon: "📚", t: `全${glossary.length}語`, d: "毎月新用語追加" },
                    { icon: "📄", t: "PDF／CSV", d: "印刷カードDL可" },
                    { icon: "🏆", t: "成績記録", d: "ベスト／平均を追跡" },
                  ].map((b) => (
                    <div
                      key={b.t}
                      className="rounded-xl p-4"
                      style={{
                        background: "var(--surface-2)",
                        border: "1px solid var(--hairline)",
                      }}
                    >
                      <div className="text-2xl mb-1.5">{b.icon}</div>
                      <div className="font-semibold text-sm mb-0.5">{b.t}</div>
                      <div className="text-xs" style={{ color: "var(--muted)" }}>{b.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
