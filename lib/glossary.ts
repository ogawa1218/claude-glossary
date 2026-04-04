export type Category = "Claude製品" | "基本概念" | "テクニック" | "開発者向け";

export interface Term {
  id: string;
  name: string;
  category: Category;
  description: string;
  detail: string;
}

export const CATEGORIES: Category[] = ["Claude製品", "基本概念", "テクニック", "開発者向け"];

export const terms: Term[] = [
  // Claude製品
  {
    id: "claude-cowork",
    name: "Claude Cowork",
    category: "Claude製品",
    description: "MASHが提供するClaude活用支援コミュニティ・サービス。",
    detail: "Claude Coworkは、AIツールの使い方を学び合うコミュニティ・プロダクト群の総称。MASHが運営し、Claude活用のノウハウ共有やワークショップを提供している。",
  },
  {
    id: "dispatch",
    name: "Dispatch",
    category: "Claude製品",
    description: "Claude Coworkが提供するAIニュースレター・情報配信サービス。",
    detail: "DispatchはMASHが発行するAI関連の最新情報をまとめたニュースレター。Claude活用事例やAI業界の動向を分かりやすく解説する。",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    category: "Claude製品",
    description: "Anthropicが提供するターミナル/IDE統合のAIコーディングアシスタント。",
    detail: "Claude Codeはコマンドラインやエディタ拡張として動作するAIエージェント。コードの生成・編集・デバッグ・リファクタリングを自律的に行い、大規模なコードベースも理解できる。",
  },
  {
    id: "claude-pro",
    name: "Claude Pro",
    category: "Claude製品",
    description: "Anthropicが提供するClaudeの有料サブスクリプションプラン（月額$20）。",
    detail: "Claude Proは無料版より5倍以上の使用量と、最新モデルへの優先アクセス、Projects機能などが利用できる個人向け有料プラン。",
  },
  {
    id: "claude-max",
    name: "Claude Max",
    category: "Claude製品",
    description: "Claude Proの上位プラン。さらに大きな使用量とClaude Codeが使い放題。",
    detail: "Claude MaxはProの5倍（$100プラン）または20倍（$200プラン）の使用量を提供するプラン。Claude Codeを含む高度な機能を制限なく利用したいヘビーユーザー向け。",
  },
  {
    id: "claude-api",
    name: "Claude API",
    category: "Claude製品",
    description: "開発者がアプリやサービスにClaudeを組み込むためのAnthropicのAPI。",
    detail: "Claude APIを使えば、チャットボットやドキュメント処理・コード生成など独自アプリケーションにClaudeを統合できる。従量課金制でトークン数に応じて課金される。",
  },
  {
    id: "claude-artifacts",
    name: "Artifacts",
    category: "Claude製品",
    description: "Claudeがコード・HTML・SVGなどのコンテンツをプレビュー付きで生成する機能。",
    detail: "ArtifactsはClaudeがテキスト以外のリッチコンテンツ（Webページ・ゲーム・可視化など）をリアルタイムプレビュー付きで生成・表示できるUI機能。",
  },

  // 基本概念
  {
    id: "llm",
    name: "LLM",
    category: "基本概念",
    description: "大規模言語モデル（Large Language Model）。大量テキストで学習したAIモデル。",
    detail: "LLM（大規模言語モデル）は数千億規模のパラメータを持ち、テキストの生成・翻訳・要約・質問応答など多様なタスクをこなすAIモデル。GPT-4・Claude・Geminiなどが代表例。",
  },
  {
    id: "token",
    name: "トークン",
    category: "基本概念",
    description: "LLMがテキストを処理する際の基本単位。単語や文字の断片。",
    detail: "トークンはLLMがテキストを扱う際の基本単位。英語では約4文字=1トークン、日本語では1〜2文字=1トークン程度。APIの料金はトークン数で計算される。",
  },
  {
    id: "context-window",
    name: "コンテキストウィンドウ",
    category: "基本概念",
    description: "LLMが一度に読み込み処理できるテキスト量の上限（トークン数）。",
    detail: "コンテキストウィンドウはLLMが1回の推論で参照できるテキストの最大量。Claude 3.7 Sonnetは200,000トークン（約15万字）のコンテキストウィンドウを持つ。",
  },
  {
    id: "hallucination",
    name: "ハルシネーション",
    category: "基本概念",
    description: "LLMが事実と異なる情報を、あたかも正しいように生成してしまう現象。",
    detail: "ハルシネーション（幻覚）はAIが存在しない参考文献・間違った数値・虚偽の事実を自信を持って出力する問題。重要な情報は必ず一次ソースで確認が必要。",
  },
  {
    id: "multimodal",
    name: "マルチモーダル",
    category: "基本概念",
    description: "テキスト以外に画像・音声・動画などを入出力できるAIの能力。",
    detail: "マルチモーダルAIは複数の情報形式（モダリティ）を処理できる。ClaudeはテキストだけでなくPDF・画像・スプレッドシートなども理解し、回答を生成できる。",
  },
  {
    id: "rag",
    name: "RAG",
    category: "基本概念",
    description: "Retrieval-Augmented Generation。外部知識を検索してAIの回答精度を高める技術。",
    detail: "RAGは社内ドキュメントやウェブなど外部データをリアルタイムに検索し、その情報をコンテキストとしてLLMに渡すことでハルシネーションを減らし最新情報に対応する手法。",
  },
  {
    id: "prompt",
    name: "プロンプト",
    category: "基本概念",
    description: "AIに与える入力テキスト（指示・質問・文脈など）の総称。",
    detail: "プロンプトはLLMへの指示書。ユーザーの質問だけでなく、システムメッセージ・役割設定・例示・制約なども含む。プロンプトの書き方でAIの出力品質が大きく変わる。",
  },
  {
    id: "agent",
    name: "エージェント",
    category: "基本概念",
    description: "目標に向かって自律的にツール使用・推論・行動を繰り返すAIシステム。",
    detail: "AIエージェントはユーザーの指示を受け取り、ツール呼び出し・計画立案・フィードバック反映を繰り返して目標を達成する自律的なシステム。Claude Codeはエージェントの典型例。",
  },
  {
    id: "vibe-coding",
    name: "バイブコーディング",
    category: "基本概念",
    description: "AIと会話しながら直感的にコードを生成・構築するコーディングスタイル。",
    detail: "バイブコーディングはAnthropicのKarpathyが提唱した概念。細かい仕様書を書かず、AIとの対話を通じて雰囲気（バイブ）を伝えながらプロダクトを構築する開発スタイル。",
  },
  {
    id: "temperature",
    name: "Temperature",
    category: "基本概念",
    description: "LLMの出力のランダム性・創造性を制御するパラメータ（0〜1または0〜2）。",
    detail: "Temperatureは0に近いほど決定論的・正確な出力、1以上になるほど多様で創造的な出力になる。事実確認タスクは低く、クリエイティブ生成は高く設定するのが基本。",
  },

  // テクニック
  {
    id: "prompt-engineering",
    name: "プロンプトエンジニアリング",
    category: "テクニック",
    description: "AIから望む出力を引き出すためのプロンプト設計・最適化の技術体系。",
    detail: "プロンプトエンジニアリングは指示の構造・文脈・例示・制約を工夫してAIの精度を最大化する技術。Few-shot・Chain of Thought・Role Playなど多様な手法がある。",
  },
  {
    id: "few-shot",
    name: "Few-shot",
    category: "テクニック",
    description: "プロンプトに数例のサンプルを示してAIに出力パターンを学習させる手法。",
    detail: "Few-shotはプロンプト内に入出力の例を2〜5件ほど含める手法。モデルのファインチューニングなしに特定フォーマットや文体で出力させることができる。",
  },
  {
    id: "zero-shot",
    name: "Zero-shot",
    category: "テクニック",
    description: "例示なしにAIに直接タスクを指示する手法。LLMの汎化能力に依存する。",
    detail: "Zero-shotは例を示さず直接「〜してください」と指示するシンプルな手法。高性能なLLMほど例なしでも意図を理解し適切に動作する傾向がある。",
  },
  {
    id: "chain-of-thought",
    name: "Chain of Thought",
    category: "テクニック",
    description: "「ステップごとに考えてください」と指示し、推論プロセスを可視化する手法。",
    detail: "Chain of Thought（CoT）はAIに思考過程を逐次出力させることで複雑な推論や計算の精度を高める手法。「段階的に考えてください」の一言で効果が出ることも多い。",
  },
  {
    id: "system-prompt",
    name: "システムプロンプト",
    category: "テクニック",
    description: "AIの役割・制約・振る舞いをユーザー入力前に定義する設定指示。",
    detail: "システムプロンプトはAIに「あなたはXXです」「常にYYのように返答してください」など役割と制約を与える事前設定。APIやClaude.aiのProjectsで設定できる。",
  },
  {
    id: "role-playing",
    name: "ロールプレイ",
    category: "テクニック",
    description: "AIに特定の役割や人格を与えて出力の質やスタイルを制御するテクニック。",
    detail: "「あなたはシニアエンジニアです」「マーケターの視点で答えてください」のように役割を与えることで、専門的・視点特化した回答を引き出せる。",
  },
  {
    id: "extended-thinking",
    name: "拡張思考（Extended Thinking）",
    category: "テクニック",
    description: "Claudeが回答前に内部で深く推論するモード。複雑な問題に有効。",
    detail: "拡張思考はClaude 3.7 Sonnetで導入された機能。回答生成前に長い「思考プロセス」を経ることで、数学・コーディング・論理問題での精度を大幅に向上させる。",
  },

  // 開発者向け
  {
    id: "mcp",
    name: "MCP",
    category: "開発者向け",
    description: "Model Context Protocol。AIモデルが外部ツールやデータソースと連携する標準仕様。",
    detail: "MCP（Model Context Protocol）はAnthropicが策定したオープン規格。AIモデルがファイルシステム・DB・Web検索・カスタムツールに標準的な方法でアクセスできるようにする。",
  },
  {
    id: "api",
    name: "API",
    category: "開発者向け",
    description: "Application Programming Interface。ソフトウェア間の連携窓口となる接続仕様。",
    detail: "APIはアプリケーション同士が通信するための規約。Claude APIを使えばHTTPリクエストを送るだけでClaudeの機能をあらゆるシステムに組み込める。",
  },
  {
    id: "function-calling",
    name: "Function Calling",
    category: "開発者向け",
    description: "LLMが外部関数・ツールを呼び出す能力。エージェント構築の核心技術。",
    detail: "Function Calling（Tool Use）はLLMが会話中に「この情報は外部APIで取得すべき」と判断し、定義済み関数を呼び出してその結果を統合して回答する仕組み。",
  },
  {
    id: "fine-tuning",
    name: "ファインチューニング",
    category: "開発者向け",
    description: "事前学習済みモデルを特定タスク・ドメインのデータで追加学習させる手法。",
    detail: "ファインチューニングは汎用LLMに専門データを追加学習させてタスク特化型モデルを作る手法。Few-shotより高精度だが、学習データ準備とコストが必要。",
  },
  {
    id: "embedding",
    name: "エンベディング",
    category: "開発者向け",
    description: "テキストを数値ベクトルに変換し意味的な類似度計算を可能にする技術。",
    detail: "エンベディングはテキストを高次元の数値ベクトルに変換する技術。意味が近いテキストは距離が近くなる。RAGや検索システムの基盤技術として広く使われる。",
  },
  {
    id: "vector-db",
    name: "ベクトルDB",
    category: "開発者向け",
    description: "エンベディングベクトルを格納し高速類似検索を行うデータベース。",
    detail: "ベクトルDBはエンベディングを保存し、クエリに意味的に近いドキュメントを高速に検索できる専用DB。RAGシステムの記憶装置として使われる。Pinecone・Weaviateなどが有名。",
  },
  {
    id: "inference",
    name: "推論（Inference）",
    category: "開発者向け",
    description: "学習済みモデルが入力を受け取り出力を生成する処理のこと。",
    detail: "推論（Inference）は学習済みLLMがプロンプトを受け取りレスポンスを生成するプロセス。学習（Training）とは異なりモデルのパラメータは更新されない。",
  },
  {
    id: "latency",
    name: "レイテンシ",
    category: "開発者向け",
    description: "APIリクエスト送信から最初のトークンが返るまでの応答時間。",
    detail: "レイテンシはAIシステムの応答速度指標。TTFT（Time to First Token）が重要で、ストリーミング出力を使うことで体体的な待ち時間を短縮できる。",
  },
  {
    id: "streaming",
    name: "ストリーミング",
    category: "開発者向け",
    description: "LLMの出力をトークン単位でリアルタイムに受け取る方式。",
    detail: "ストリーミングは生成が完了するまで待たず、トークンが生成されるたびに逐次受け取る方式。ChatGPT/Claudeのタイピング風表示はストリーミングで実現されている。",
  },
  {
    id: "grounding",
    name: "グラウンディング",
    category: "開発者向け",
    description: "AIの出力を検索・DB・文書などの事実情報に根拠づける技術。",
    detail: "グラウンディングはLLMの回答を外部の信頼できるデータソースに紐付け、ハルシネーションを防ぐ手法。RAGやFunction Callingで実現される。",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    category: "開発者向け",
    description: "Claudeを開発するAI安全研究企業。元OpenAIメンバーが2021年に設立。",
    detail: "AnthropicはAI安全性を最優先にした企業文化を持つ。Constitutional AIなど独自の安全手法を採用し、Claude（クロード）シリーズを開発・提供している。",
  },
];

export const CATEGORY_COLORS: Record<Category, string> = {
  "Claude製品": "#F97316",
  "基本概念": "#3b82f6",
  "テクニック": "#8b5cf6",
  "開発者向け": "#10b981",
};
