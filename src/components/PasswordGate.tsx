"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "mash-glossary-auth";
// パスワードはBrain購入者に共有する
const VALID_PASSWORD = "mash2026";

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === VALID_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (checking) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#1e1f22" }}
      >
        <div className="text-sm" style={{ color: "#80848e" }}>
          読み込み中...
        </div>
      </div>
    );
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#1e1f22" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8 text-center"
        style={{ backgroundColor: "#313338", border: "1px solid #383a40" }}
      >
        {/* Logo */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4"
          style={{ backgroundColor: "#f97316", color: "#fff" }}
        >
          M
        </div>

        <h1 className="text-xl font-bold mb-1" style={{ color: "#f2f3f5" }}>
          MASH Claude & IT用語辞典
        </h1>
        <p className="text-sm mb-6" style={{ color: "#80848e" }}>
          この辞典はBrain教材の購入特典です。
          <br />
          購入時にお伝えしたパスワードを入力してください。
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="パスワードを入力"
            className="w-full px-4 py-3 rounded-xl text-sm mb-3 outline-none transition-all"
            style={{
              backgroundColor: "#1e1f22",
              border: `1px solid ${error ? "#f87171" : "#383a40"}`,
              color: "#f2f3f5",
            }}
            onFocus={(e) => {
              if (!error) e.currentTarget.style.borderColor = "#f97316";
            }}
            onBlur={(e) => {
              if (!error) e.currentTarget.style.borderColor = "#383a40";
            }}
            autoFocus
          />

          {error && (
            <p className="text-xs mb-3" style={{ color: "#f87171" }}>
              パスワードが正しくありません。購入確認メールをご確認ください。
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-sm font-bold transition-all"
            style={{
              backgroundColor: "#f97316",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ea580c";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f97316";
            }}
          >
            辞典を開く
          </button>
        </form>

        <p className="text-xs mt-6" style={{ color: "#4e5058" }}>
          Brain教材をまだお持ちでない方は
          <br />
          <a
            href="#"
            style={{ color: "#f97316" }}
            className="underline"
          >
            こちらから購入できます
          </a>
        </p>
      </div>
    </div>
  );
}
