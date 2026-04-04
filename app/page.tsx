"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { glossaryTerms, categories, type Term } from "@/lib/glossary";

function TermCard({ term }: { term: Term }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border p-5 cursor-pointer transition-all hover:border-orange-500/50 group"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <span
            className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2"
            style={{ background: "#F97316/15", color: "var(--accent)", border: "1px solid #F9731640" }}
          >
            {term.category}
          </span>
          <h3 className="font-semibold text-base leading-snug group-hover:text-orange-400 transition-colors">
            {term.term}
          </h3>
        </div>
        <span
          className="mt-1 text-lg select-none transition-transform duration-200"
          style={{ color: "var(--muted)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </div>
      {open && (
        <div className="mt-4 border-t pt-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
            {term.definition}
          </p>
          {term.example && (
            <div
              className="mt-3 text-sm rounded-lg p-3 italic"
              style={{ background: "#ffffff08", color: "var(--muted)", borderLeft: "3px solid var(--accent)" }}
            >
              {term.example}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return glossaryTerms.filter((t) => {
      const matchesSearch =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      const matchesCat = activeCategory === "All" || t.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          AI{" "}
          <span style={{ color: "var(--accent)" }}>Glossary</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          {glossaryTerms.length}+ essential terms explained clearly — from transformers to RLHF.
        </p>
        <Link
          href="/quiz"
          className="inline-block mt-6 px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--accent)" }}
        >
          Test your knowledge →
        </Link>
      </div>

      {/* Search & filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/50 transition"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--foreground)" }}
        />
        <div className="flex gap-2 flex-wrap">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap"
              style={
                activeCategory === cat
                  ? { background: "var(--accent)", color: "#fff" }
                  : { background: "var(--card)", color: "var(--muted)", border: "1px solid var(--border)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <p className="text-xs mb-5" style={{ color: "var(--muted)" }}>
        Showing {filtered.length} of {glossaryTerms.length} terms
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20" style={{ color: "var(--muted)" }}>
          No terms found for &ldquo;{search}&rdquo;
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>
      )}
    </div>
  );
}
