"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{ backgroundColor: "#2b2d31", borderBottom: "1px solid #383a40" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: "#f97316", color: "#fff" }}
          >
            M
          </div>
          <div>
            <span className="font-bold text-white text-sm leading-none block">MASH</span>
            <span style={{ color: "#b5bac1", fontSize: "0.65rem" }} className="leading-none block">
              Claude &amp; IT用語辞典
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            style={{ color: "#b5bac1", fontSize: "0.875rem" }}
            className="hover:text-white transition-colors hidden sm:block"
          >
            用語一覧
          </Link>
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-1.5 rounded-md font-medium transition-all"
            style={{
              backgroundColor: "#f97316",
              color: "#fff",
              fontSize: "0.8rem",
            }}
          >
            Claudeを使う →
          </a>
        </nav>
      </div>
    </header>
  );
}
