"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/AuthContext";
import { glossary, CATEGORIES } from "@/lib/glossary";

function generateCSV(): string {
  const BOM = "﻿";
  const header = "用語名,英語名,カテゴリ,説明,使用例";
  const rows = glossary.map(
    (t) =>
      `"${t.name}","${t.englishName}","${t.category}","${t.description.replace(/"/g, '""')}","${t.example.replace(/"/g, '""')}"`
  );
  return BOM + header + "\n" + rows.join("\n");
}

/* Printable HTML — Claude editorial style for PDF export */
function generateHTML(): string {
  const catColors: Record<string, string> = {
    "AI基礎":              "#5A7C55",
    "Claude・ChatGPT":      "#C15F3C",
    "プログラミング":         "#7A5B9E",
    "Web・インターネット":     "#3F6B8A",
    "データ・セキュリティ":    "#8C3E3E",
    "ビジネス・DX":          "#B08538",
  };

  const cards = glossary
    .map((t, i) => {
      const color = catColors[t.category] || "#C15F3C";
      return `
    <article class="card">
      <div class="card-head">
        <span class="cat" style="color:${color};border-color:${color}55;background:${color}12;">${t.category}</span>
        <span class="num">№${String(i + 1).padStart(3, "0")}</span>
      </div>
      <h2 class="name">${t.name}</h2>
      <p class="en">${t.englishName}</p>
      <p class="desc">${t.description}</p>
      <div class="example" style="border-left-color:${color};">
        <span class="ex-label" style="color:${color};">EXAMPLE</span>
        <span class="ex-body">${t.example}</span>
      </div>
    </article>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>IT用語辞典 ${glossary.length}語 — Brain Edition</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@500;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Noto Sans JP', sans-serif;
    background: #FAF7F0;
    color: #1F1D18;
    padding: 24px;
  }
  .cover {
    text-align: center;
    padding: 48px 16px 40px;
    border-bottom: 1px solid #D9CEB4;
    margin-bottom: 32px;
    page-break-after: always;
  }
  .cover .mark {
    display: inline-block;
    width: 48px; height: 48px;
    line-height: 48px;
    border-radius: 10px;
    background: #C15F3C;
    color: #fff;
    font-family: 'Fraunces', serif;
    font-weight: 700;
    letter-spacing: -0.05em;
    margin-bottom: 16px;
  }
  .cover h1 {
    font-family: 'Fraunces', 'Noto Serif JP', serif;
    font-weight: 500;
    letter-spacing: -0.02em;
    font-size: 52px;
    line-height: 1.05;
    margin: 0 0 8px;
  }
  .cover .accent { color: #C15F3C; }
  .cover .sub {
    font-size: 13px;
    color: #7A7367;
    margin: 12px 0 0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .cover .meta {
    margin-top: 28px;
    font-size: 12px;
    color: #403C34;
  }
  .controls {
    text-align: center;
    margin-bottom: 24px;
  }
  .controls button {
    background: #C15F3C; color: #fff; border: none;
    padding: 12px 28px; border-radius: 12px; cursor: pointer;
    font-size: 14px; font-weight: 700; font-family: inherit;
    box-shadow: 0 10px 24px -10px rgba(193,95,60,0.45);
  }
  .controls button:hover { background: #A84A29; }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .card {
    border: 1px solid #E8DFCC;
    border-radius: 12px;
    padding: 14px 16px;
    page-break-inside: avoid;
    background: #fff;
  }
  .card-head {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 8px;
  }
  .cat {
    display: inline-block;
    font-size: 9px; font-weight: 700;
    padding: 3px 8px;
    border-radius: 999px;
    letter-spacing: 0.05em;
    border: 1px solid;
  }
  .num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px; color: #A29A8B;
    letter-spacing: 0.15em;
  }
  .name {
    font-family: 'Fraunces', 'Noto Serif JP', serif;
    font-weight: 600;
    font-size: 17px; margin: 0 0 2px;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }
  .en {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; color: #7A7367;
    margin: 0 0 8px;
  }
  .desc {
    line-height: 1.65;
    font-size: 11.5px;
    margin: 0 0 10px;
    color: #403C34;
  }
  .example {
    background: #FBF8F1;
    border-left: 3px solid;
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 10.5px;
    line-height: 1.6;
  }
  .ex-label {
    display: block;
    font-size: 8.5px;
    font-weight: 700;
    letter-spacing: 0.2em;
    margin-bottom: 3px;
  }
  .ex-body {
    color: #403C34;
    font-style: italic;
  }
  @media print {
    body { background: #fff; padding: 12px; }
    .no-print { display: none !important; }
    .cover { padding: 24px 0; border-color: #ccc; }
    @page { margin: 12mm; }
  }
</style>
</head>
<body>
  <div class="cover">
    <div class="mark">IT</div>
    <h1>IT用語辞典<br><span class="accent">${glossary.length}語</span></h1>
    <p class="sub">by MASH · Brain Edition</p>
    <p class="meta">Claude／AI時代の必読IT用語を、中学生でもわかる言葉で。</p>
  </div>
  <div class="no-print controls">
    <button onclick="window.print()">印刷 / PDF保存</button>
  </div>
  <div class="grid">${cards}</div>
</body>
</html>`;
}

export default function DownloadPage() {
  const { authed, loading } = useAuth();
  const [downloading, setDownloading] = useState("");

  if (loading) return null;

  if (!authed) {
    return (
      <div className="max-w-md mx-auto px-4 sm:px-6 pt-14 pb-20 text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
          style={{ background: "var(--accent-wash)", color: "var(--accent)" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>
        <h1 className="display text-3xl mb-3">プレミアム限定</h1>
        <p className="text-sm mb-6" style={{ color: "var(--text-soft)" }}>
          PDF・CSVダウンロードはBrain購入者限定です。
        </p>
        <Link
          href="/login"
          className="btn-accent inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold"
        >
          ログイン
        </Link>
      </div>
    );
  }

  const downloadCSV = () => {
    setDownloading("csv");
    const csv = generateCSV();
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `IT用語辞典${glossary.length}語.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloading(""), 1000);
  };

  const downloadPrintable = () => {
    setDownloading("html");
    const html = generateHTML();
    const blob = new Blob([html], { type: "text/html;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
    setTimeout(() => {
      URL.revokeObjectURL(url);
      setDownloading("");
    }, 2000);
  };

  const catCounts = CATEGORIES.map((cat) => ({
    cat,
    count: glossary.filter((t) => t.category === cat).length,
  }));

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-14 pb-20">
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
          style={{ background: "var(--accent-wash)", color: "var(--accent)" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
        </div>
        <h1 className="display text-4xl sm:text-5xl mb-3">
          <span style={{ color: "var(--text)" }}>持ち歩ける</span>
          <br />
          <span style={{ color: "var(--accent)" }}>用語カード。</span>
        </h1>
        <p className="text-sm" style={{ color: "var(--text-soft)" }}>
          全{glossary.length}語をCSV／印刷用カードとしてダウンロードできます。
        </p>
      </div>

      <div className="grid gap-3 mb-8">
        <button
          onClick={downloadPrintable}
          disabled={downloading === "html"}
          className="rounded-2xl p-6 text-left card-lift"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--hairline)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--accent-wash)", color: "var(--accent)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"/>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-lg font-semibold mb-1" style={{ color: "var(--text)" }}>
                印刷用カード（HTML/PDF）
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                ブラウザの印刷機能でPDF保存。エディトリアル調の2列レイアウト、表紙付き。
              </p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--muted)" }}>
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </button>

        <button
          onClick={downloadCSV}
          disabled={downloading === "csv"}
          className="rounded-2xl p-6 text-left card-lift"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--hairline)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--green-wash)", color: "var(--green)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="8" y1="13" x2="16" y2="13"/>
                <line x1="8" y1="17" x2="16" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-lg font-semibold mb-1" style={{ color: "var(--text)" }}>
                CSV（Excel対応）
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                Excel / Google スプレッドシートで開けるCSV。用語・英名・カテゴリ・説明・使用例。
              </p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--muted)" }}>
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </button>
      </div>

      <div
        className="rounded-2xl p-6"
        style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
            Table of Contents
          </span>
          <div className="hairline-divider flex-1" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
          {catCounts.map(({ cat, count }) => (
            <div key={cat} className="flex items-center justify-between text-sm" style={{ borderBottom: "1px dotted var(--hairline-strong)" }}>
              <span className="font-medium py-1.5" style={{ color: "var(--text-soft)" }}>{cat}</span>
              <span className="font-mono text-xs py-1.5" style={{ color: "var(--muted)" }}>{count}語</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 flex justify-between items-baseline font-bold" style={{ borderTop: "2px solid var(--hairline-strong)" }}>
          <span className="font-serif text-base" style={{ color: "var(--text)" }}>合計</span>
          <span className="font-serif text-2xl" style={{ color: "var(--accent)" }}>{glossary.length}語</span>
        </div>
      </div>
    </div>
  );
}
