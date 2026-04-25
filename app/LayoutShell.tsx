"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { AuthProvider, useAuth } from "@/lib/AuthContext";

/* ---------- Theme toggle (useSyncExternalStore pattern) ---------- */
function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
function getThemeSnapshot(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function getServerThemeSnapshot(): "light" | "dark" {
  return "light";
}

function useTheme() {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const toggle = useCallback(() => {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("glossary_theme", next);
    } catch {}
  }, []);
  return { theme, toggle };
}

function ThemeButton() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--hairline)",
        color: "var(--text-soft)",
      }}
      suppressHydrationWarning
    >
      <span suppressHydrationWarning>
        {isDark ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </span>
    </button>
  );
}

/* ---------- Logo mark ---------- */
function LogoMark() {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 font-serif font-bold text-lg"
      style={{
        background: "var(--accent)",
        color: "#fff",
        boxShadow: "var(--shadow-accent)",
        letterSpacing: "-0.05em",
      }}
    >
      IT
    </span>
  );
}

/* ---------- Header ---------- */
function Header() {
  const { authed, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`,
        background: scrolled ? "var(--surface-elevated)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(120%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(120%)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark />
          <div className="leading-tight">
            <div className="font-serif text-lg font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              IT用語辞典
            </div>
            <div className="text-[10px] tracking-[0.18em] uppercase font-medium" style={{ color: "var(--muted)" }}>
              by MASH · Claude Edition
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="hidden sm:block px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--text-soft)" }}
          >
            辞典
          </Link>
          <Link
            href="/quiz"
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-[1.03] btn-accent"
          >
            <span className="mr-1">◉</span>クイズ
          </Link>
          {authed ? (
            <>
              <Link
                href="/download"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
                style={{
                  background: "var(--surface)",
                  color: "var(--text)",
                  border: "1px solid var(--hairline-strong)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                PDF
              </Link>
              <button
                onClick={logout}
                className="px-2 py-2 rounded-lg text-xs transition-all hover:opacity-80"
                style={{ color: "var(--muted)" }}
                aria-label="ログアウト"
              >
                ログアウト
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-3 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-[1.03] inline-flex items-center gap-1.5"
              style={{
                background: "var(--surface)",
                color: "var(--accent)",
                border: "1px solid var(--accent)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span className="hidden sm:inline">ログイン</span>
            </Link>
          )}
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="mt-20" style={{ borderTop: "1px solid var(--hairline)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <LogoMark />
              <div className="font-serif text-base font-semibold">IT用語辞典</div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Claude／AI時代を生き抜くための必須IT用語を、<br />
              中学生でもわかる言葉で。
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold mb-3 tracking-widest uppercase" style={{ color: "var(--muted)" }}>
              コンテンツ
            </div>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-soft)" }}>
              <li><Link href="/" className="hover:text-[var(--accent)] transition-colors">用語辞典</Link></li>
              <li><Link href="/quiz" className="hover:text-[var(--accent)] transition-colors">4択クイズ</Link></li>
              <li><Link href="/download" className="hover:text-[var(--accent)] transition-colors">PDF／CSVダウンロード</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold mb-3 tracking-widest uppercase" style={{ color: "var(--muted)" }}>
              運営者
            </div>
            <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>MASH</p>
            <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
              海外11カ国253店舗FC本部のビジネスデータアナリスト
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://substack.com/@mashknowledgeengineer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
                style={{ color: "var(--text-soft)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
                @mashknowledgeengineer
              </a>
            </div>
          </div>
        </div>
        <div className="hairline-divider mb-5" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "var(--muted)" }}>
          <p>© {new Date().getFullYear()} MASH. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with
            <span style={{ color: "var(--accent)" }}>●</span>
            Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
}

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </AuthProvider>
  );
}
