# AI用語集 by MASH

Claude・AI関連の必須用語30語以上を収録した日本語用語集サイト。4択クイズで理解度をチェックできます。

**URL:** https://claude-glossary.vercel.app

## 機能

### 用語集
- Claude/AI関連用語 32語収録
- カテゴリ別フィルター（Claude製品 / 基本概念 / テクニック / 開発者向け）
- キーワード検索（用語名・英語名・説明文から検索）
- クリックで詳細と使用例を表示
- レスポンシブ対応（スマホファースト）

### 4択クイズ
- 全10問、ランダム出題
- 説明文を読んで正しい用語名を4択から選ぶ形式
- 回答後に正解/不正解 + 解説を即時表示
- 正解で緑、不正解で赤のフラッシュアニメーション
- 10問終了後にスコアとランク判定
  - 🏆 9〜10問：AIマスター
  - 🎉 7〜8問：上級者
  - 👍 5〜6問：中級者
  - 📚 0〜4問：入門者

## 収録用語カテゴリ

| カテゴリ | 用語例 |
|---------|--------|
| Claude製品 | Claude Cowork, Dispatch, Claude Code, Claude Pro, Claude Max, Artifacts, Projects |
| 基本概念 | LLM, トークン, コンテキストウィンドウ, ハルシネーション, エージェント, プロンプト |
| テクニック | RAG, ファインチューニング, 埋め込み, プロンプトエンジニアリング, バイブコーディング |
| 開発者向け | API, SDK, Webhook, MCP, Function Calling, ストリーミング, ツール |

## 技術スタック

- **Next.js 16** (App Router, SSG)
- **TypeScript**
- **Tailwind CSS v4**
- **Noto Sans JP** (Google Fonts)
- **Vercel** (ホスティング)

## ローカル開発

```bash
npm install
npm run dev
```

## デプロイ

Vercel にGitHub連携でデプロイされています。

---

**MASH** | [@mashknowledgeengineer](https://substack.com/@mashknowledgeengineer)
