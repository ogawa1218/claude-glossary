"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/AuthContext";
import { glossary, CATEGORIES, type Category } from "@/lib/glossary";

function generateCSV(): string {
  const BOM = "\uFEFF";
  const header = "用語名,英語名,カテゴリ,説明,使用例";
  const rows = glossary.map(
    (t) =>
      `"${t.name}","${t.englishName}","${t.category}","${t.description.replace(/"/g, '""')}","${t.example.replace(/"/g, '""')}"`
  );
  return BOM + header + "\n" + rows.join("\n");
}

function generateHTML(): string {
  const cards = glossary
    .map(
      (t) => `
    <div class="card">
      <div class="cat">${t.category}</div>
      <h2>${t.name}</h2>
      <p class="en">${t.englishName}</p>
      <p class="desc">${t.description}</p>
      <div class="example"><strong>例:</strong> ${t.example}</div>
    </div>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>AI用語集 500語 - 印刷用カード</title>
<style>
@media print { body { margin: 0; } .no-print { display: none; } }
body { font-family: 'Noto Sans JP', sans-serif; background: #fff; color: #333; margin: 20px; }
h1 { text-align: center; margin-bottom: 8px; }
.subtitle { text-align: center; color: #888; margin-bottom: 24px; font-size: 14px; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.card { border: 1px solid #ddd; border-radius: 8px; padding: 12px; page-break-inside: avoid; font-size: 12px; }
.cat { font-size: 10px; font-weight: bold; color: #F97316; margin-bottom: 4px; text-transform: uppercase; }
h2 { font-size: 14px; margin: 0 0 2px; }
.en { font-size: 11px; color: #888; margin-bottom: 6px; }
.desc { line-height: 1.5; margin-bottom: 6px; }
.example { font-size: 11px; color: #666; border-left: 3px solid #F97316; padding-left: 8px; font-style: italic; }
.no-print { text-align: center; margin: 20px 0; }
.no-print button { background: #F97316; color: #fff; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: bold; }
</style>
</head>
<body>
<h1>AI用語集 500語カード</h1>
<p class="subtitle">by MASH - Brain購入者限定特典</p>
<div class="no-print"><button onclick="window.print()">印刷 / PDF保存</button></div>
<div class="grid">${cards}</div>
</body></html>`;
}

export default function DownloadPage() {
  const { authed, loading } = useAuth();
  const [downloading, setDownloading] = useState("");

  if (loading) return null;

  if (!authed) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🔒</div>
        <h1 className="text-2xl font-black mb-4">プレミアム限定</h1>
        <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
          PDF・CSVダウンロードはBrain購入者限定です。
        </p>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white transition-all hover:opacity-90"
          style={{ background: "var(--accent)" }}
        >
          🔐 ログイン
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
    a.download = "AI用語集500語.csv";
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
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">📥</div>
        <h1 className="text-3xl font-black mb-2">用語カードダウンロード</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          全{glossary.length}語をCSVまたは印刷用カードとしてダウンロードできます。
        </p>
      </div>

      <div className="grid gap-4 mb-8">
        <button
          onClick={downloadPrintable}
          disabled={downloading === "html"}
          className="rounded-2xl p-6 text-left transition-all hover:scale-[1.01]"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">🖨️</span>
            <div>
              <h3 className="font-bold text-base mb-1">印刷用カード（HTML/PDF）</h3>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                ブラウザの印刷機能でPDF保存できます。2列レイアウトの用語カード形式。
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={downloadCSV}
          disabled={downloading === "csv"}
          className="rounded-2xl p-6 text-left transition-all hover:scale-[1.01]"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">📊</span>
            <div>
              <h3 className="font-bold text-base mb-1">CSV（Excel対応）</h3>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                ExcelやGoogleスプレッドシートで開けるCSV形式。用語名・英語名・カテゴリ・説明・使用例。
              </p>
            </div>
          </div>
        </button>
      </div>

      <div
        className="rounded-2xl p-5"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <h3 className="font-bold text-sm mb-3" style={{ color: "var(--accent)" }}>
          収録カテゴリ
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {catCounts.map(({ cat, count }) => (
            <div key={cat} className="flex justify-between text-sm">
              <span>{cat}</span>
              <span style={{ color: "var(--muted)" }}>{count}語</span>
            </div>
          ))}
        </div>
        <div className="border-t mt-3 pt-3 flex justify-between font-bold text-sm" style={{ borderColor: "var(--border)" }}>
          <span>合計</span>
          <span style={{ color: "var(--accent)" }}>{glossary.length}語</span>
        </div>
      </div>
    </div>
  );
}
