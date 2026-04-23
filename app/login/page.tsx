"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    const ok = await login(password);
    setLoading(false);
    if (ok) {
      router.push("/");
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 pt-14 pb-20">
      <div className="text-center mb-8">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
          style={{
            background: "var(--accent-wash)",
            color: "var(--accent)",
            boxShadow: "var(--shadow-accent)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h1 className="display text-4xl sm:text-5xl mb-3">
          <span style={{ color: "var(--text)" }}>プレミアム</span>
          <br />
          <span style={{ color: "var(--accent)" }}>特典辞典</span>
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>
          Brain購入者限定コンテンツです。<br />
          お送りしたパスワードを入力してください。
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "var(--surface)", border: "1px solid var(--hairline)", boxShadow: "var(--shadow-sm)" }}
        >
          <label className="block text-[10px] font-bold mb-2 tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
            Password
          </label>
          <div className="relative mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワードを入力..."
              className="w-full rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--accent)] transition bg-transparent"
              style={{
                border: "1px solid var(--hairline-strong)",
                color: "var(--text)",
              }}
              autoFocus
            />
          </div>
          {error && (
            <p className="text-sm mb-4 fade-in flex items-center gap-1.5" style={{ color: "var(--red)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              パスワードが正しくありません。もう一度お試しください。
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="btn-accent w-full px-8 py-3.5 rounded-2xl font-bold text-base disabled:opacity-40 disabled:hover:translate-y-0"
          >
            {loading ? "確認中..." : "ログイン"}
          </button>
        </div>
      </form>

      <div className="text-center mb-8">
        <Link href="/" className="text-sm hover:underline inline-flex items-center gap-1" style={{ color: "var(--muted)" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          無料版を見る（10語限定）
        </Link>
      </div>

      <div
        className="rounded-2xl p-6 text-sm noise-grain"
        style={{
          background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)",
          border: "1px solid var(--hairline)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span
            className="pill"
            style={{
              background: "var(--accent)",
              color: "#fff",
            }}
          >
            PREMIUM BONUS
          </span>
        </div>
        <p className="font-serif text-xl font-semibold mb-3" style={{ color: "var(--text)" }}>
          Brain特典の中身
        </p>
        <ul className="space-y-2.5">
          {[
            "IT用語 500語の完全解説",
            "中学生でも理解できる丁寧な説明",
            "4択クイズで理解度を即時チェック",
            "クイズ成績記録・ベスト／平均スコア追跡",
            "PDF用語カードのダウンロード",
            "毎月新用語を追加更新",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5" style={{ color: "var(--text-soft)" }}>
              <span
                className="inline-flex items-center justify-center w-4 h-4 rounded-full flex-shrink-0 mt-0.5"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
