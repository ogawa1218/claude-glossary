import type { Metadata } from "next";
import "./globals.css";
import { LayoutShell } from "./LayoutShell";

export const metadata: Metadata = {
  title: "IT用語辞典 by MASH — Claude／AI時代の必読1000語",
  description:
    "Claude・AI時代の必須IT用語1000語を、中学生でもわかる言葉で。クリーム基調のエディトリアルUIと4択クイズで「使える知識」に変えるBrain購入者特典。",
  openGraph: {
    title: "IT用語辞典 by MASH",
    description: "Claude／AI時代の必読IT用語1000語辞典＋クイズ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      {/* Theme resolution before paint — avoids flash */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('glossary_theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var useDark = t === 'dark' || (!t && prefersDark);
                  if (useDark) document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
