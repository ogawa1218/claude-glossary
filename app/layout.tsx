import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI用語集 by MASH",
  description: "Claude・AIの重要用語を分かりやすく解説。4択クイズで理解度チェック！",
  openGraph: {
    title: "AI用語集 by MASH",
    description: "Claude・AIの重要用語を分かりやすく解説。4択クイズで理解度チェック！",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen flex flex-col">
          <header style={{ background: "var(--navy)", borderBottom: "1px solid var(--border)" }}>
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
                <span className="text-xl font-bold" style={{ color: "var(--orange)" }}>
                  AI用語集
                </span>
                <span style={{ color: "var(--text-secondary)" }} className="text-sm hidden sm:inline">
                  by MASH
                </span>
              </Link>
              <nav className="flex gap-4 items-center">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  用語集
                </Link>
                <Link
                  href="/quiz"
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{ background: "var(--orange)", color: "#fff" }}
                >
                  クイズ
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer style={{ background: "var(--navy)", borderTop: "1px solid var(--border)" }}>
            <div className="max-w-4xl mx-auto px-4 py-6 text-center">
              <p style={{ color: "var(--text-secondary)" }} className="text-sm">
                MASH |{" "}
                <a
                  href="https://twitter.com/mash_cowork"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--orange)" }}
                  className="hover:underline"
                >
                  @mash_cowork
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
