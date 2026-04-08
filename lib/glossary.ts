export type Category = "AI基礎" | "Claude・ChatGPT" | "プログラミング" | "Web・インターネット" | "データ・セキュリティ" | "ビジネス・DX";

export interface Term {
  id: string;
  name: string;
  englishName: string;
  category: Category;
  description: string;
  example: string;
}

export const CATEGORIES: Category[] = ["AI基礎", "Claude・ChatGPT", "プログラミング", "Web・インターネット", "データ・セキュリティ", "ビジネス・DX"];

// 元の33語（カテゴリを新6カテゴリにマッピング）
const originalTerms: Term[] = [
  { id: "claude-cowork", name: "Claude Cowork", englishName: "Claude Cowork", category: "Claude・ChatGPT", description: "AnthropicのAIアシスタントClaudeを使って、チームで一緒に作業できるサービスのこと。AIを使った文書作成や情報整理をみんなで一緒にできる「AIの共同作業場」。学校のグループワークをAIが手伝ってくれるイメージ。", example: "チームでClaudeを使ったドキュメント作成や情報整理をClaude Coworkで一元管理する。" },
  { id: "dispatch", name: "Dispatch", englishName: "Dispatch", category: "Claude・ChatGPT", description: "Claude Coworkの機能の一つで、AIに「この仕事をやって」とタスクを振り分ける仕組み。先生が生徒に宿題を配るように、複数のAIタスクを効率よく割り当てて自動でこなしてくれる。", example: "Dispatchを使って複数のAIタスクを並行処理し、作業効率を大幅に向上させる。" },
  { id: "claude-code", name: "Claude Code", englishName: "Claude Code", category: "Claude・ChatGPT", description: "Anthropicが作ったAIプログラミングアシスタント。ターミナルやエディタの中でClaudeと話しながらプログラムを書いたり、バグを直したりできる。まるで隣にすごいプログラマーがいるみたい。", example: "「このバグを修正して」と指示するだけでClaude Codeがコードを読み、原因を特定し、修正まで完了する。" },
  { id: "claude-pro", name: "Claude Pro", englishName: "Claude Pro", category: "Claude・ChatGPT", description: "Claudeの有料プラン。無料版よりたくさんメッセージが送れて、新しいAIモデルも使える。スマホゲームの「課金プラン」のように、もっと便利に使いたい人向けのサービス。", example: "Claude Proに加入することで、月間メッセージ数の上限が増え、混雑時でも優先的に使用できる。" },
  { id: "claude-max", name: "Claude Max", englishName: "Claude Max", category: "Claude・ChatGPT", description: "Claudeの最上位プラン。Claude Proよりもっとたくさん使えて、一番賢いAIモデルにアクセスできる。ゲームでいう「プレミアム会員」のようなもの。", example: "ヘビーユーザーやビジネス利用ではClaude Maxが最も多くのAI処理能力を提供する。" },
  { id: "artifacts", name: "Artifacts", englishName: "Artifacts", category: "Claude・ChatGPT", description: "Claude.aiの画面でコードやHTML、図表を別パネルでプレビューできる機能。作文と清書を同時に見られるように、AIが作ったものをすぐ確認できる便利な仕組み。", example: "Claudeにウェブアプリを作らせると、Artifactsパネルに動作するHTMLが表示され、そのままブラウザで確認できる。" },
  { id: "projects", name: "Projects", englishName: "Projects", category: "Claude・ChatGPT", description: "Claude.aiで関連する会話やドキュメントをプロジェクトごとにまとめて管理できる機能。教科ごとにノートを分けるように、テーマ別にAIとの会話を整理できる。", example: "「マーケティング戦略」プロジェクトを作成し、関連する会話とドキュメントを一箇所に集めて継続的に作業する。" },
  { id: "prompt", name: "プロンプト", englishName: "Prompt", category: "AI基礎", description: "AIへの指示や質問のこと。AIに「こうしてほしい」と伝える文章全体を指す。上手なプロンプトを書くと、AIからいい答えが返ってくる。先生への質問の仕方と同じで、聞き方が大事。", example: "「日本の歴史を5歳児にもわかるように説明して」というテキスト全体がプロンプトにあたる。" },
  { id: "agent", name: "エージェント", englishName: "Agent", category: "AI基礎", description: "自分で考えて行動できるAIのこと。道具を使ったり、計画を立てたりしながら、人間に言われなくても目標に向かって動く。ロボット掃除機が自分で部屋を回るように、AIが自律的に仕事をする。", example: "エージェントに「この会社のWebサイトを分析してレポートを作成して」と指示すると、自動でデータ収集から分析まで行う。" },
  { id: "llm", name: "LLM", englishName: "Large Language Model", category: "AI基礎", description: "大規模言語モデル。膨大な量の文章を読んで学んだ超賢いAIプログラム。人間の言葉を理解して、まるで人間のように文章を書ける。Claude、ChatGPT、Geminiなどがこれにあたる。", example: "ClaudeはAnthropicが開発したLLMで、日本語を含む多言語での会話や文章生成、コード作成が可能。" },
  { id: "token", name: "トークン", englishName: "Token", category: "AI基礎", description: "AIが文章を処理するときの最小の区切り。言葉を小さなピースに分けたもので、AIはこのピースの並びとして文章を理解する。料金の計算にも使われる単位。", example: "「こんにちは」は日本語で約3〜4トークン、「Hello」は英語で約1〜2トークンとしてカウントされる。" },
  { id: "context-window", name: "コンテキストウィンドウ", englishName: "Context Window", category: "AI基礎", description: "AIが一度に読める文章の最大量のこと。ノートのページ数に例えられ、このページ数の中に会話の履歴や資料を全部収める必要がある。大きいほどたくさんの情報を覚えていられる。", example: "200,000トークンのコンテキストウィンドウは、約150,000単語の英語文書（本1冊分）を一度に処理できる容量。" },
  { id: "hallucination", name: "ハルシネーション", englishName: "Hallucination", category: "AI基礎", description: "AIがウソの情報をまるで本当のことのように言ってしまう現象。存在しない本の名前を出したり、でたらめな数字を言ったりする。AIを使うときに一番気をつけるべきこと。", example: "「量子力学に関する最新論文を教えて」と聞いたら、AIが実在しない論文タイトルと著者名を返してきた。" },
  { id: "multimodal", name: "マルチモーダル", englishName: "Multimodal", category: "AI基礎", description: "文章だけでなく、写真や音声、動画なども理解できるAIの能力のこと。目と耳の両方を使えるようなもので、画像を見せて「これ何？」と聞くと答えてくれる。", example: "商品写真を送って「この商品の特徴を説明して」と聞くと、マルチモーダルAIが画像を解析して回答する。" },
  { id: "vibe-coding", name: "バイブコーディング", englishName: "Vibe Coding", category: "Claude・ChatGPT", description: "AIにプログラムを書かせながら、細かいコードより「こんな感じ（バイブ）」の雰囲気で開発する方法。「カッコいいサイト作って」と言うだけで、AIが作ったものを見て調整していくスタイル。", example: "「ダークテーマのカッコいいダッシュボードを作って」とだけ指示し、AIの出力を見ながら調整する。" },
  { id: "prompt-engineering", name: "プロンプトエンジニアリング", englishName: "Prompt Engineering", category: "Claude・ChatGPT", description: "AIにうまく指示を出すための技術。質問の仕方を工夫することで、AIからもっと良い答えを引き出せる。料理のレシピのように、いい「聞き方のレシピ」を設計する仕事。", example: "「あなたは優秀なPythonエンジニアです。以下のコードをレビューしてください」のように役割を与えてから依頼する。" },
  { id: "rag", name: "RAG", englishName: "Retrieval-Augmented Generation", category: "AI基礎", description: "AIが答える前に、まず関連する資料を検索してから回答する技術。テスト中に教科書を見ながら答えるようなもので、AIの回答が正確になる。ハルシネーション対策として有効。", example: "社内ドキュメントをベクターDBに格納し、質問時に関連文書を検索してClaudeに渡すことで、社内情報に基づいた正確な回答を得る。" },
  { id: "fine-tuning", name: "ファインチューニング", englishName: "Fine-tuning", category: "AI基礎", description: "すでに学習済みのAIに、特定の分野のデータで追加勉強させること。「数学が得意なAI」「医療に詳しいAI」のように、専門家に育てるための追加トレーニング。", example: "医療用語が多い診断支援AIを作るため、医療文書データセットでLLMをファインチューニングして専門性を高める。" },
  { id: "embedding", name: "埋め込み", englishName: "Embedding", category: "AI基礎", description: "文章や画像を数字の列（ベクトル）に変換すること。似ている意味のものは近い数字になるので、「この文章と似ている文章を探す」ことができる。AIの検索機能の裏側で使われている。", example: "「犬」と「猫」の埋め込みベクトルは近く、「犬」と「量子力学」の埋め込みベクトルは遠い位置に配置される。" },
  { id: "system-prompt", name: "システムプロンプト", englishName: "System Prompt", category: "Claude・ChatGPT", description: "AIに事前に設定する「ルールブック」のようなもの。「あなたは○○の専門家です」と事前に指示しておくと、その設定に従って回答してくれる。AIの性格や役割を決める設定文。", example: "「あなたは日本語専門の法律アドバイザーです。専門用語をわかりやすく説明してください」のような事前指示がシステムプロンプト。" },
  { id: "temperature", name: "Temperature", englishName: "Temperature", category: "Claude・ChatGPT", description: "AIの回答のバラつきを調整するつまみ。0に近いと毎回同じような答え、1に近いとランダムで創造的な答えになる。正確さが必要なときは低く、面白い文章を書かせたいときは高くする。", example: "Temperature=0でコードを生成すると毎回同じ結果が出やすく、Temperature=0.9で詩を書かせると多様な表現が得られる。" },
  { id: "top-p", name: "Top-P", englishName: "Top-P (Nucleus Sampling)", category: "Claude・ChatGPT", description: "AIが次の言葉を選ぶとき、上位何パーセントの候補から選ぶかを決める設定。Temperatureと似ていて、出力のバリエーションを調整する。0.9なら上位90%の候補から選ぶ。", example: "Top-P=0.9に設定すると、確率上位90%のトークン群の中からランダムに次の単語を選ぶ動作になる。" },
  { id: "chain-of-thought", name: "Chain of Thought", englishName: "Chain of Thought (CoT)", category: "Claude・ChatGPT", description: "AIに「順番に考えて」と指示するテクニック。数学のテストで途中式を書くように、AIにも考えるプロセスを見せてもらうと、より正確な答えが出る。", example: "「3人が1本ずつ持っていたら全部で何本？ステップバイステップで考えて」と言うと、推論過程を示しながら回答する。" },
  { id: "few-shot", name: "Few-shot", englishName: "Few-shot Learning", category: "Claude・ChatGPT", description: "AIに「こういう感じで答えてね」とお手本を数個見せてから質問するテクニック。先生が例題を解いて見せてから問題を出すのと同じで、AIの答えの精度がぐんと上がる。", example: "「ポジティブ→良い、ネガティブ→悪い」の例を2つ示した後に「最高！→？」と聞くと「良い」と答える。" },
  { id: "zero-shot", name: "Zero-shot", englishName: "Zero-shot Learning", category: "Claude・ChatGPT", description: "お手本を一つも見せずに、説明だけでAIにタスクをやらせる方法。AIが学習で得た知識だけで対応する。Few-shotより手軽だけど、難しいタスクだと精度が下がることもある。", example: "例示なしに「このレビューの感情分析をしてください」と指示するだけで、AIがタスクを理解して実行する。" },
  { id: "in-context-learning", name: "In-context Learning", englishName: "In-context Learning", category: "AI基礎", description: "AIが会話の中で新しいことを学ぶ能力のこと。「このプロジェクトではAをBと呼ぶよ」と教えると、その後の会話ではちゃんとBという名前を使ってくれる。その場で適応する力。", example: "会話の中で「このプロジェクトではXをYと呼ぶ」と伝えると、以降の会話でAIがその定義に従って応答する。" },
  { id: "mcp", name: "MCP", englishName: "Model Context Protocol", category: "プログラミング", description: "AIと外部ツールを繋ぐための共通ルール（プロトコル）。USBケーブルのように、いろんなツールを統一された方法でAIに接続できる。Anthropicが作ったオープンソースの規格。", example: "MCPサーバーを設定することで、ClaudeがGitHubやSlack、データベースと直接やりとりできるようになる。" },
  { id: "tool", name: "ツール", englishName: "Tool / Function", category: "プログラミング", description: "AIが使える道具のこと。検索、計算、メール送信など、AI単体ではできないことを「ツール」として用意しておくと、AIが必要に応じて自分で使ってくれる。", example: "天気APIを「ツール」として定義することで、AIが「東京の今日の天気は？」という質問に実データで答えられる。" },
  { id: "api", name: "API", englishName: "Application Programming Interface", category: "プログラミング", description: "プログラム同士が会話するための「窓口」。レストランの注文カウンターのように、決まったルールで注文（リクエスト）すると料理（データ）が返ってくる仕組み。", example: "自社のチャットボットにClaudeを組み込むため、Anthropic APIにHTTPリクエストを送りAIの回答を表示する。" },
  { id: "sdk", name: "SDK", englishName: "Software Development Kit", category: "プログラミング", description: "プログラムを作るときに使う便利な道具セットのこと。一からコードを書かなくても、SDKを使えば複雑な機能を簡単に追加できる。工作で言う「便利工具セット」のようなもの。", example: "Python用Anthropic SDKをインストールし、数行のコードでClaudeとの会話機能をアプリに追加できる。" },
  { id: "webhook", name: "Webhook", englishName: "Webhook", category: "プログラミング", description: "何かが起きたとき、自動で通知を送る仕組み。配達員が「届きましたよ」と連絡してくれるように、イベントが発生したら指定した場所にお知らせが届く。「逆API」とも呼ばれる。", example: "AIが文書分析を完了したときに、Webhookで結果をSlackに自動送信する仕組みを構築する。" },
  { id: "function-calling", name: "Function Calling", englishName: "Function Calling", category: "プログラミング", description: "AIが自分で必要な機能を呼び出す仕組み。「天気を知りたい」と聞くと、AIが天気予報の機能を自分で呼び出して、最新の情報を教えてくれる。ツール使用とも呼ばれる。", example: "「東京の天気は？」と聞くと、AIがweather_api関数を自動で呼び出し、リアルタイム気象データを取得して回答する。" },
  { id: "streaming", name: "ストリーミング", englishName: "Streaming", category: "プログラミング", description: "AIの回答が全部出来上がるのを待たずに、書いている途中から順次表示する方式。手紙を最後まで書いてから渡すのではなく、一文ずつリアルタイムで見せてくれるイメージ。", example: "ChatGPTやClaudeでチャットをすると、回答が一文字ずつ表示されていくのがストリーミングの動作。" },
];

import { batch1 } from "./batch1";
import { batch2 } from "./batch2";
import { batch3 } from "./batch3";
import { batch4 } from "./batch4";
import { batch5 } from "./batch5";

// 全用語を統合（重複IDを除外）
function mergeTerms(...arrays: Term[][]): Term[] {
  const seen = new Set<string>();
  const result: Term[] = [];
  for (const arr of arrays) {
    for (const term of arr) {
      if (!seen.has(term.id)) {
        seen.add(term.id);
        result.push(term);
      }
    }
  }
  return result;
}

export const glossary: Term[] = mergeTerms(originalTerms, batch1, batch2, batch3, batch4, batch5);

export function getTermsByCategory(category: Category): Term[] {
  return glossary.filter((term) => term.category === category);
}

export function searchTerms(query: string): Term[] {
  const q = query.toLowerCase();
  return glossary.filter(
    (term) =>
      term.name.toLowerCase().includes(q) ||
      term.englishName.toLowerCase().includes(q) ||
      term.description.toLowerCase().includes(q) ||
      term.category.toLowerCase().includes(q)
  );
}
