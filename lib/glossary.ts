export type Category = "Claude製品" | "基本概念" | "テクニック" | "開発者向け";

export interface Term {
  id: string;
  name: string;
  englishName: string;
  category: Category;
  description: string;
  example: string;
}

export const CATEGORIES: Category[] = ["Claude製品", "基本概念", "テクニック", "開発者向け"];

export const glossary: Term[] = [
  { id: "claude-cowork", name: "Claude Cowork", englishName: "Claude Cowork", category: "Claude製品", description: "AnthropicのAIアシスタントClaudeを活用したコラボレーションプラットフォーム。チームでAIを使った作業を効率化し、プロジェクト管理やナレッジ共有を支援する統合型ワークスペースサービス。", example: "チームでClaudeを使ったドキュメント作成や情報整理をClaude Coworkで一元管理する。" },
  { id: "dispatch", name: "Dispatch", englishName: "Dispatch", category: "Claude製品", description: "Claude Coworkのサービスの一つで、AIエージェントへのタスク振り分け・管理を行う機能。複数のAIタスクを効率的にルーティングし、ワークフローの自動化を実現する。", example: "Dispatchを使って複数のAIタスクを並行処理し、作業効率を大幅に向上させる。" },
  { id: "claude-code", name: "Claude Code", englishName: "Claude Code", category: "Claude製品", description: "Anthropicが提供するAIペアプログラミングツール。ターミナルやIDE上でClaudeと対話しながらコーディング、デバッグ、リファクタリングなどの開発作業をエージェント的に実行できる。", example: "「このバグを修正して」と指示するだけでClaude Codeがコードを読み、原因を特定し、修正まで完了する。" },
  { id: "claude-pro", name: "Claude Pro", englishName: "Claude Pro", category: "Claude製品", description: "Anthropicが提供するClaudeの有料プラン。無料版より多くのメッセージ数と優先アクセス、最新モデルへのアクセスが可能。個人の高度な利用に最適なサブスクリプション。", example: "Claude Proに加入することで、月間メッセージ数の上限が増え、混雑時でも優先的に使用できる。" },
  { id: "claude-max", name: "Claude Max", englishName: "Claude Max", category: "Claude製品", description: "Anthropicが提供する最上位のClaudeサブスクリプションプラン。Claude Proより大幅に高いメッセージ制限と、最新・最高性能モデルへの優先アクセス、特別機能が含まれる。", example: "ヘビーユーザーやビジネス利用ではClaude Maxが最も多くのAI処理能力を提供する。" },
  { id: "artifacts", name: "Artifacts", englishName: "Artifacts", category: "Claude製品", description: "Claude.aiのインターフェース機能で、コード・SVG・HTML・マークダウンなどを専用パネルでプレビュー表示できる仕組み。生成物を会話とは別に管理でき、インタラクティブなコンテンツも表示可能。", example: "Claudeにウェブアプリを作らせると、Artifactsパネルに動作するHTMLが表示され、そのままブラウザで確認できる。" },
  { id: "projects", name: "Projects", englishName: "Projects", category: "Claude製品", description: "Claude.aiの機能で、関連する会話やドキュメントをプロジェクト単位でまとめて管理できる仕組み。プロジェクト専用のシステムプロンプト設定や、複数の会話にまたがる文脈の共有が可能。", example: "「マーケティング戦略」プロジェクトを作成し、関連する会話とドキュメントを一箇所に集めて継続的に作業する。" },
  { id: "prompt", name: "プロンプト", englishName: "Prompt", category: "基本概念", description: "AIモデルへの入力テキスト全体を指す。ユーザーの質問や指示、文脈情報などが含まれる。プロンプトの質がAIの出力品質を大きく左右するため、適切な設計が重要。", example: "「日本の歴史を5歳児にもわかるように説明して」というテキスト全体がプロンプトにあたる。" },
  { id: "agent", name: "エージェント", englishName: "Agent", category: "基本概念", description: "自律的にタスクを実行できるAIシステム。ツールを使ったり、複数のステップを計画・実行したりしながら、人間の介入なしに目標を達成する。Claude Codeなどがエージェントの代表例。", example: "エージェントに「この会社のWebサイトを分析してレポートを作成して」と指示すると、自動でデータ収集から分析まで行う。" },
  { id: "llm", name: "LLM", englishName: "Large Language Model", category: "基本概念", description: "大規模言語モデル。大量のテキストデータで学習した、自然言語を理解・生成する大規模なAIモデル。Claude、GPT-4、Geminiなどがこれにあたる。テキストの予測・補完を繰り返すことで会話や文章生成を行う。", example: "ClaudeはAnthropicが開発したLLMで、日本語を含む多言語での会話や文章生成、コード作成が可能。" },
  { id: "token", name: "トークン", englishName: "Token", category: "基本概念", description: "LLMがテキストを処理する際の最小単位。単語や文字の断片で、AIはテキストをトークン列として処理する。料金計算の基本単位でもあり、英語は約4文字で1トークン、日本語は1〜2文字で1トークン程度。", example: "「こんにちは」は日本語で約3〜4トークン、「Hello」は英語で約1〜2トークンとしてカウントされる。" },
  { id: "context-window", name: "コンテキストウィンドウ", englishName: "Context Window", category: "基本概念", description: "AIが一度に処理・参照できるテキストの最大量（トークン数）。会話履歴、システムプロンプト、ドキュメントなど、すべてがこの枠内に収まる必要がある。Claude 3.5では最大200,000トークン。", example: "200,000トークンのコンテキストウィンドウは、約150,000単語の英語文書（本1冊分）を一度に処理できる容量。" },
  { id: "hallucination", name: "ハルシネーション", englishName: "Hallucination", category: "基本概念", description: "AIが事実ではない情報を、あたかも正確であるかのように自信を持って生成してしまう現象。存在しない論文の引用や、誤った数値の提示などが典型例。AI利用時の最大リスクの一つ。", example: "「量子力学に関する最新論文を教えて」と聞いたら、AIが実在しない論文タイトルと著者名を返してきた。" },
  { id: "multimodal", name: "マルチモーダル", englishName: "Multimodal", category: "基本概念", description: "テキストだけでなく、画像、音声、動画など複数の種類のデータを処理・理解できるAIの能力。Claude 3以降は画像入力に対応しており、スクリーンショットや図の内容を理解して回答できる。", example: "商品写真を送って「この商品の特徴を説明して」と聞くと、マルチモーダルAIが画像を解析して回答する。" },
  { id: "vibe-coding", name: "バイブコーディング", englishName: "Vibe Coding", category: "テクニック", description: "AIにコードを書かせながら、細かい実装より「雰囲気（バイブ）」や結果に集中して開発する手法。プロンプトで要望を伝え、AIが生成したコードを確認・修正しながら快速に開発を進めるスタイル。", example: "「ダークテーマのカッコいいダッシュボードを作って」とだけ指示し、AIの出力を見ながら調整する。" },
  { id: "prompt-engineering", name: "プロンプトエンジニアリング", englishName: "Prompt Engineering", category: "テクニック", description: "AIが望ましい出力を生成するように、入力文（プロンプト）を設計・最適化する技術。明確な指示、具体例の提示、役割付与など、様々なテクニックを組み合わせてAIの性能を最大化する。", example: "「あなたは優秀なPythonエンジニアです。以下のコードをレビューしてください」のように役割を与えてから依頼する。" },
  { id: "rag", name: "RAG", englishName: "Retrieval-Augmented Generation", category: "テクニック", description: "検索拡張生成。AIが回答を生成する前に、外部知識ベースから関連情報を検索し、その情報をコンテキストとして加えることで、より正確で最新の回答を生成する技術。ハルシネーション軽減に有効。", example: "社内ドキュメントをベクターDBに格納し、質問時に関連文書を検索してClaudeに渡すことで、社内情報に基づいた正確な回答を得る。" },
  { id: "fine-tuning", name: "ファインチューニング", englishName: "Fine-tuning", category: "テクニック", description: "事前学習済みのLLMを、特定のタスクやドメインのデータで追加学習させる技術。汎用モデルを特定用途に最適化できる反面、コストと時間がかかる。少量の高品質データでも効果的な場合がある。", example: "医療用語が多い診断支援AIを作るため、医療文書データセットでLLMをファインチューニングして専門性を高める。" },
  { id: "embedding", name: "埋め込み", englishName: "Embedding", category: "テクニック", description: "テキストや画像などを数値ベクトルに変換したもの。意味的に近いコンテンツは近いベクトル値を持ち、類似検索や推薦システム、RAGのベースとなる。意味を数値空間に「埋め込む」ことからこの名称。", example: "「犬」と「猫」の埋め込みベクトルは近く、「犬」と「量子力学」の埋め込みベクトルは遠い位置に配置される。" },
  { id: "system-prompt", name: "システムプロンプト", englishName: "System Prompt", category: "テクニック", description: "AIとの会話開始前に設定する、AIの動作・役割・制約を定義する特別な指示文。ユーザーのメッセージより高い優先度を持ち、AIの人格設定やタスク特化、応答スタイルの統一などに使われる。", example: "「あなたは日本語専門の法律アドバイザーです。専門用語をわかりやすく説明してください」のような事前指示がシステムプロンプト。" },
  { id: "temperature", name: "Temperature", englishName: "Temperature", category: "テクニック", description: "AIの出力のランダム性・創造性を制御するパラメータ。0に近いほど確定的で安定した出力、1に近いほど多様で創造的な出力になる。コード生成など精度重視の作業では低く、創作では高く設定する。", example: "Temperature=0でコードを生成すると毎回同じ結果が出やすく、Temperature=0.9で詩を書かせると多様な表現が得られる。" },
  { id: "top-p", name: "Top-P", englishName: "Top-P (Nucleus Sampling)", category: "テクニック", description: "AIが次のトークンを選ぶ際、累積確率がP以上になるまでの候補トークンのみを対象とするサンプリング手法。Temperatureと組み合わせて出力の多様性と質をコントロールする。核サンプリングとも呼ばれる。", example: "Top-P=0.9に設定すると、確率上位90%のトークン群の中からランダムに次の単語を選ぶ動作になる。" },
  { id: "chain-of-thought", name: "Chain of Thought", englishName: "Chain of Thought (CoT)", category: "テクニック", description: "AIが最終回答を出す前に、中間的な思考ステップを順番に生成させるプロンプト技術。「ステップバイステップで考えて」と指示することで、複雑な推論・数学的問題での精度が大幅に向上する。", example: "「3人が1本ずつ持っていたら全部で何本？ステップバイステップで考えて」と言うと、推論過程を示しながら回答する。" },
  { id: "few-shot", name: "Few-shot", englishName: "Few-shot Learning", category: "テクニック", description: "プロンプト内に少数の入出力例（通常2〜10例）を示すことで、AIに望ましい形式・スタイルを学習させる手法。例を見せることで、特定タスクの精度が大幅に向上する。", example: "「ポジティブ→良い、ネガティブ→悪い」の例を2つ示した後に「最高！→？」と聞くと「良い」と答える。" },
  { id: "zero-shot", name: "Zero-shot", englishName: "Zero-shot Learning", category: "テクニック", description: "具体的な例を一切示さず、タスクの説明だけでAIに推論・実行させる手法。LLMが事前学習で獲得した汎用的な知識を活用する。Few-shotより簡潔だが、複雑なタスクでは精度が劣ることがある。", example: "例示なしに「このレビューの感情分析をしてください」と指示するだけで、AIがタスクを理解して実行する。" },
  { id: "in-context-learning", name: "In-context Learning", englishName: "In-context Learning", category: "テクニック", description: "モデルの重みを更新せず、プロンプト内に含まれる情報・例示からLLMが動的に学習・適応する能力。Few-shotもZero-shotもこれに含まれる。LLMの最大の特徴の一つで、フレキシブルな対応を可能にする。", example: "会話の中で「このプロジェクトではXをYと呼ぶ」と伝えると、以降の会話でAIがその定義に従って応答する。" },
  { id: "mcp", name: "MCP", englishName: "Model Context Protocol", category: "開発者向け", description: "AnthropicがオープンソースとしてリリースしたAIとツールを繋ぐ標準プロトコル。MCPを使うことで、AIが外部システム（データベース、API、ファイルシステム等）と標準化された方法で連携できる。", example: "MCPサーバーを設定することで、ClaudeがGitHubやSlack、データベースと直接やりとりできるようになる。" },
  { id: "tool", name: "ツール", englishName: "Tool / Function", category: "開発者向け", description: "AIが呼び出せる外部機能の定義。検索、計算、API呼び出し、ファイル操作など、LLM単体では実行できない処理をツールとして定義することで、AIの能力を拡張できる。", example: "天気APIを「ツール」として定義することで、AIが「東京の今日の天気は？」という質問に実データで答えられる。" },
  { id: "api", name: "API", englishName: "Application Programming Interface", category: "開発者向け", description: "ソフトウェア同士が通信するための接続口。Anthropic APIを使うことで、開発者は自分のアプリにClaudeの機能を組み込める。HTTPリクエストでプロンプトを送り、レスポンスとして生成テキストを受け取る。", example: "自社のチャットボットにClaudeを組み込むため、Anthropic APIにHTTPリクエストを送りAIの回答を表示する。" },
  { id: "sdk", name: "SDK", englishName: "Software Development Kit", category: "開発者向け", description: "特定のAPIやサービスを簡単に利用するためのライブラリ・ツールセット。AnthropicはPython、TypeScript向けのSDKを提供しており、これを使うことでAPIの直接呼び出しより簡単にClaudeを統合できる。", example: "Python用Anthropic SDKをインストールし、数行のコードでClaudeとの会話機能をアプリに追加できる。" },
  { id: "webhook", name: "Webhook", englishName: "Webhook", category: "開発者向け", description: "イベント発生時に指定したURLへ自動的にHTTPリクエストを送る仕組み。AIワークフローでは、タスク完了時や特定条件達成時に次の処理をトリガーするために使われる。「逆API」とも呼ばれる。", example: "AIが文書分析を完了したときに、Webhookで結果をSlackに自動送信する仕組みを構築する。" },
  { id: "function-calling", name: "Function Calling", englishName: "Function Calling", category: "開発者向け", description: "AIが会話の中で外部関数・APIを呼び出す機能。開発者があらかじめ関数の定義を渡しておくと、AIがユーザーの意図に応じて適切な関数を選択・実行し、結果を会話に組み込む。ツール使用とも呼ばれる。", example: "「東京の天気は？」と聞くと、AIがweather_api関数を自動で呼び出し、リアルタイム気象データを取得して回答する。" },
  { id: "streaming", name: "ストリーミング", englishName: "Streaming", category: "開発者向け", description: "AIの回答を一括でなく、生成されるごとに逐次送信する方式。ユーザーは生成が完了するのを待たずに、リアルタイムでテキストが流れるように表示されるのを見られる。UXの向上に効果的。", example: "ChatGPTやClaudeでチャットをすると、回答が一文字ずつ表示されていくのがストリーミングの動作。" },
];

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
