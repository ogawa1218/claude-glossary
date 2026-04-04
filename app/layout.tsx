import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI用語集 by MASH — Claude/AI用語を学ぼう",
  description:
    "Claude・AI関連の必須用語30語以上をわかりやすく解説。4択クイズで理解度をチェック！",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)", background: "rgba(26,26,46,0.9)", backdropFilter: "blur(12px)" }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
              <span className="text-2xl">🤖</span>
              <span>
                AI用語集 <span style={{ color: "var(--accent)" }}>by MASH</span>
              </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium">
              <Link href="/" className="hover:opacity-80 transition-opacity hidden sm:block" style={{ color: "var(--foreground)" }}>
                用語集
              </Link>
              <Link
                href="/quiz"
                className="px-4 py-2 rounded-lg font-semibold transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                クイズに挑戦
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-8 text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
          <div className="max-w-5xl mx-auto px-4">
            <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>MASH</p>
            <p className="mb-3">
              <a href="https://twitter.com/mash_cowork" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                @mash_cowork
              </a>
            </p>
            <a
              href="https://github.com/ogawa1218/claude-glossary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
