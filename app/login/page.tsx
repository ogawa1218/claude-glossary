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
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">🔐</div>
        <h1 className="text-3xl font-black mb-2">プレミアム用語集</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Brain購入者限定コンテンツです。<br />
          パスワードを入力してログインしてください。
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          className="rounded-2xl p-6 mb-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <label className="block text-xs font-bold mb-2 uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            パスワード
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワードを入力..."
            className="w-full rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition mb-4"
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
            autoFocus
          />
          {error && (
            <p className="text-sm mb-4 fade-in" style={{ color: "var(--red)" }}>
              パスワードが正しくありません。もう一度お試しください。
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full px-8 py-3.5 rounded-2xl font-bold text-white text-base transition-all hover:opacity-90 hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:hover:scale-100"
            style={{ background: "var(--accent)" }}
          >
            {loading ? "確認中..." : "ログイン"}
          </button>
        </div>
      </form>

      <div className="text-center">
        <Link href="/" className="text-sm hover:underline" style={{ color: "var(--muted)" }}>
          ← 無料版を見る（10語限定）
        </Link>
      </div>

      <div
        className="rounded-2xl p-5 mt-8 text-sm"
        style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--muted)" }}
      >
        <p className="font-bold mb-2" style={{ color: "var(--foreground)" }}>
          🎁 Brain特典について
        </p>
        <ul className="space-y-1.5">
          <li>✅ AI・IT用語 500語の完全解説</li>
          <li>✅ 中学生でもわかる丁寧な説明</li>
          <li>✅ 4択クイズで理解度チェック</li>
          <li>✅ クイズ成績記録・ランキング</li>
          <li>✅ PDF用語カードダウンロード</li>
          <li>✅ 毎月新用語を追加更新</li>
        </ul>
      </div>
    </div>
  );
}
