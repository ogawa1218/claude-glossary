import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MASH | Claude & IT用語辞典",
  description:
    "ChatGPTを触ったことがある30-40代のビジネスパーソン向け。APIキーって何？トークンって？Claudeの使い方まで、やさしく解説するIT＆Claude用語辞典。",
  keywords: ["Claude", "ChatGPT", "AI用語", "IT用語辞典", "APIキー", "プロンプト", "LLM"],
  openGraph: {
    title: "MASH | Claude & IT用語辞典",
    description: "難しいAI用語を、田中健二さんでもわかるやさしい言葉で解説",
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
      <body className="min-h-screen" style={{ backgroundColor: "#1e1f22" }}>
        {children}
      </body>
    </html>
  );
}
