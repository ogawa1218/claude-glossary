import type { Metadata } from "next";
import "./globals.css";
import { LayoutShell } from "./LayoutShell";

export const metadata: Metadata = {
  title: "AI用語集 by MASH — Claude/AI用語500語を学ぼう",
  description:
    "Claude・AI関連の必須用語500語を中学生でもわかるように解説。4択クイズで理解度をチェック！Brain購入者限定の完全版。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
