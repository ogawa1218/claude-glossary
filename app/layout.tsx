import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Claude Glossary — AI Terms Explained",
  description:
    "30+ essential AI and machine learning terms explained clearly. Test your knowledge with our interactive quiz.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.className} h-full`}>
      <body className="min-h-full flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <header className="border-b" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight" style={{ color: "var(--accent)" }}>
              <span className="text-2xl">⚡</span>
              Claude Glossary
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="hover:opacity-80 transition-opacity" style={{ color: "var(--foreground)" }}>
                Terms
              </Link>
              <Link
                href="/quiz"
                className="px-4 py-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Take Quiz
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
          Claude Glossary · Built with Next.js &amp; Tailwind CSS
        </footer>
      </body>
    </html>
  );
}
