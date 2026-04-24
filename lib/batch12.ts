import { Term } from "./glossary";

/**
 * batch12 — 追加補強 (70+ terms)
 * 1,000語超えを確実にするための「最後の痒いところ」。AIコーディングエコシステム、
 * 日本の制度・ビジネス用語、フロント実装の小道具など。
 */
export const batch12: Term[] = [
  // ─── AIコーディング エコシステム ─────────────────────────
  { id: "cursor-ide", name: "Cursor", englishName: "Cursor", category: "Claude・ChatGPT", description: "VS Codeをフォークして作られたAI統合エディタ。Claude/GPTを選んで使えるチャットとTab補完、Cmd+Kでの編集、Composerによるマルチファイル編集が特徴。", example: "CursorでCmd+Kを押し「この関数を非同期化して」と指示すれば、その場で差分プレビュー付きで書き換わる。" },
  { id: "windsurf-ide", name: "Windsurf", englishName: "Windsurf", category: "Claude・ChatGPT", description: "Codeium社が提供するAI統合IDE。「Cascade」エージェント機能でClaude Code並みの自律コーディングが可能。CursorとClaude Codeの中間的立ち位置。", example: "Windsurfのエージェントモードなら、複数ファイル横断のリファクタを対話型で進められる。" },
  { id: "zed-editor", name: "Zed", englishName: "Zed", category: "プログラミング", description: "Rust製の超高速エディタ。元Atom開発者が作り、GPUレンダリングで入力遅延がほぼゼロ。Anthropic連携のAIチャットも搭載。", example: "大規模TSリポでVSCodeが重くなる場面でも、Zedなら1000行ファイルでも瞬時にスクロールできる。" },
  { id: "aider-cli", name: "Aider", englishName: "Aider", category: "Claude・ChatGPT", description: "オープンソースのAIペアプログラマCLI。gitリポを直接編集し、コミットメッセージも自動で書く。Claude Codeに比べて軽量でカスタム性が高い。", example: "`aider` と打って「ユーザー登録機能を追加して」と頼むだけで、複数ファイル編集→自動コミットまで進む。" },
  { id: "continue-dev", name: "Continue", englishName: "Continue.dev", category: "Claude・ChatGPT", description: "VS CodeとJetBrains向けのOSS AIコーディング拡張。ローカルLLM（Ollama等）との接続も容易で、クラウドLLMを使えない組織で重宝される。", example: "Continueをローカルのllama3.1に繋げば、社外にコードを送らずに補完と会話が使える。" },
  { id: "github-copilot", name: "GitHub Copilot", englishName: "GitHub Copilot", category: "Claude・ChatGPT", description: "GitHubとOpenAIが開発したAIコード補完サービス。VSCodeに統合され、入力中のコメントやコードから続きを提案する。AI補完の先駆け。", example: "関数名を書くだけで、Copilotが本体コードを自動生成してくれる体験が、2021年以降の開発スタンダードを変えた。" },
  { id: "copilot-workspace", name: "Copilot Workspace", englishName: "GitHub Copilot Workspace", category: "Claude・ChatGPT", description: "GitHub Copilotの拡張で、Issue→計画→実装→PRまでをAIが自走する機能。Claude Codeと同方向の「自律コーディング」サービス。", example: "Issueに「ログイン機能を追加」と書いてCopilot Workspaceで起動すると、計画とPR草案まで自動生成される。" },
  { id: "devin-ai", name: "Devin", englishName: "Devin", category: "Claude・ChatGPT", description: "Cognition Labs社の完全自律型AIソフトウェアエンジニア。タスクを渡すとブラウザ・ターミナル・エディタを自分で操作して完成させる。", example: "Devinに「Stripe決済を組み込んで」と依頼すると、ドキュメントを読み、コードを書き、PRを立てるところまで自走する。" },
  { id: "perplexity-ai", name: "Perplexity", englishName: "Perplexity", category: "AI基礎", description: "AI検索エンジンの代表。質問に対してWebを検索し、引用付きで回答する。リアルタイム情報が要る場面でLLM単体より信頼できる。", example: "「2026年最新のGDPR改定は？」のような時事質問はChatGPTより Perplexityが得意分野。" },

  // ─── プロンプト応用・評価 ──────────────────────────────
  { id: "system-prompt-advanced", name: "システムプロンプト設計", englishName: "System Prompt Design", category: "Claude・ChatGPT", description: "AIアプリの骨格となる「役割・制約・トーン」の指示文の設計技法。良いシステムプロンプトは数百行になることも。プロンプトキャッシュと相性が良い。", example: "Claude CodeのCLAUDE.mdも本質的にはシステムプロンプトの一部で、プロジェクト固有の規範が詰まる。" },
  { id: "chain-of-thought-advanced", name: "ステップバイステップ", englishName: "Step-by-Step Reasoning", category: "Claude・ChatGPT", description: "Chain of Thoughtの具体指示形。「まず〇〇を考えて、次に…」と誘導するだけで、LLMの推論精度が大きく上がる実践的テクニック。", example: "複雑な数式を「ステップバイステップで計算して」と添えるだけで正答率が3倍になる研究報告がある。" },
  { id: "tree-of-thoughts", name: "Tree of Thoughts", englishName: "Tree of Thoughts", category: "AI基礎", description: "Chain of Thoughtを拡張し、複数の思考パスを木状に探索する推論手法。難問での正解率を大幅に引き上げる研究発表がある。", example: "詰将棋のような分岐探索が必要な問題で、ToTは単純CoTより精度が上がる。" },
  { id: "self-consistency", name: "Self-Consistency", englishName: "Self-Consistency", category: "AI基礎", description: "同じ問題を複数回LLMに解かせ、多数決で答えを決める技法。シンプルだが精度向上が大きく、評価コストとトレードオフ。", example: "数学問題で同じプロンプトを10回流し、最多回答を採用するだけで正答率が15pt上がる。" },
  { id: "constitutional-ai", name: "Constitutional AI", englishName: "Constitutional AI (CAI)", category: "AI基礎", description: "Anthropic独自の安全性訓練手法。人間評価の代わりに「原則（Constitution）」を書き、AI自身に評価させて応答を改善する。", example: "CAIのおかげでClaudeは「親切・無害・正直」の原則に沿った応答を自然に選ぶ傾向がある。" },
  { id: "in-context-few-shot", name: "インコンテキスト少数例", englishName: "In-Context Few-Shot", category: "AI基礎", description: "プロンプト内に「入力→出力」の例を2〜5個入れるだけでタスクを教え込む方法。ファインチューニング不要でタスク適応できる強力な手法。", example: "分類タスクで5件の例を入れるだけで、ゼロショットより精度が20pt以上上がることがある。" },
  { id: "react-agent-pattern", name: "ReActエージェント", englishName: "ReAct Agent", category: "AI基礎", description: "Reason（推論）とAct（行動）を交互に回すエージェント実装の基本型。LangChainやClaude Codeの内部設計もReAct派生。", example: "「情報検索→要約→質問回答」を1ループで済ませず、ReActでツールを呼び続ければ深く探索できる。" },
  { id: "tool-calling-parallel", name: "並列ツール呼び出し", englishName: "Parallel Tool Calling", category: "Claude・ChatGPT", description: "1ターンで複数のツールを同時に呼べるLLM機能。独立した情報取得を直列より高速化できる。Claude 3.5以降で標準。", example: "「天気と株価を両方調べて」と言ったとき、AIが並列に2つのツールを呼ぶので待ち時間が半分になる。" },

  // ─── Supabase / DB 追加 ────────────────────────────────
  { id: "postgrest", name: "PostgREST", englishName: "PostgREST", category: "プログラミング", description: "PostgreSQLのスキーマから自動でREST APIを生成するOSSツール。Supabaseのデータ層の裏側はこれ。テーブル作成＝API公開。", example: "PostgRESTがあれば、`GET /rest/v1/users?age=gte.20` のような絞り込みAPIがテーブル作成直後に使える。" },
  { id: "gotrue", name: "GoTrue", englishName: "GoTrue (supabase-auth)", category: "データ・セキュリティ", description: "SupabaseのAuth機能の裏で動くNetlify製OSS認証サーバー。JWT発行・OAuth・Magic Link・MFAなど基本を網羅。", example: "`supabase.auth.signIn(...)`の裏側ではGoTrueがトークン発行・検証をしている。" },
  { id: "realtime-channel", name: "Realtime Channel", englishName: "Supabase Realtime Channel", category: "プログラミング", description: "Supabase Realtimeで購読する単位。テーブルの変更、プレゼンス（誰がオンラインか）、ブロードキャストを選べる。", example: "チャットアプリなら `channel('room:1')` にjoinし、メッセージ挿入を全員にリアルタイム配信する。" },
  { id: "supabase-presence", name: "Presence", englishName: "Supabase Presence", category: "プログラミング", description: "Realtimeに組み込まれた「誰がいま接続中か」を追跡する機能。Google Docsのアバター表示のような同時編集UIが作れる。", example: "Presenceを使えば、「今この文書を編集中: @mash」をリアルタイム表示するコラボ機能が10行で実装できる。" },
  { id: "pg-trgm", name: "pg_trgm", englishName: "pg_trgm", category: "データ・セキュリティ", description: "PostgreSQLに「類似度検索」機能を追加する拡張。タイプミスを許容する検索（ファジー検索）や日本語の表記ゆれ対応に使える。", example: "商品名に `similarity('クロード', name) > 0.3` を使えば、「クロード」「Claude」「クロウド」も同じに拾える。" },
  { id: "full-text-search-pg", name: "全文検索（Postgres）", englishName: "PostgreSQL Full-Text Search", category: "データ・セキュリティ", description: "PostgreSQL組み込みの全文検索。`tsvector` と `tsquery` で、Elasticsearchを立てずに日本語検索ができる（要MeCab拡張）。", example: "ブログ本文にGINインデックス付きのtsvector列を作れば、万件規模なら十分高速な日本語検索が実装できる。" },

  // ─── フロントエンド 小道具 ─────────────────────────────
  { id: "web-vitals", name: "Core Web Vitals", englishName: "Core Web Vitals", category: "Web・インターネット", description: "Googleが定めた「体感速度」の指標群。LCP（表示速度）、CLS（レイアウト安定性）、INP（応答性）の3つがメイン。SEOにも影響。", example: "LCPを2.5秒以内に収めるため、画像のlazy loadとフォント最適化をセットで対策するのが定石。" },
  { id: "lcp", name: "LCP", englishName: "Largest Contentful Paint", category: "Web・インターネット", description: "ページの「最大コンテンツ」が表示されるまでの時間。2.5秒以下が「良好」。ヒーロー画像やフォントが主な遅延要因。", example: "LCPが悪い場合、ヒーロー画像に `priority` と `preload` を付けるだけで大幅改善することが多い。" },
  { id: "cls", name: "CLS", englishName: "Cumulative Layout Shift", category: "Web・インターネット", description: "ページ表示中に起きる「レイアウトのガクン」を累計で評価する指標。広告や画像のサイズ未指定で悪化する。0.1以下が良好。", example: "画像に `width`・`height` を明記するだけでCLSが劇的に改善し、UX評価が上がる。" },
  { id: "inp", name: "INP", englishName: "Interaction to Next Paint", category: "Web・インターネット", description: "ユーザー操作から次の描画までのレスポンス指標。FIDに代わって2024年から主要指標に。重いJS処理が遅延の主因。", example: "JSの重い計算を`useTransition`やWeb Workerに逃がすと、INPが200ms以下に収まりやすい。" },
  { id: "hydration-mismatch", name: "Hydrationミスマッチ", englishName: "Hydration Mismatch", category: "Web・インターネット", description: "SSRサーバー側とクライアント側のHTMLが違うときに出るReactエラー。時刻表示や条件分岐で起きやすい。", example: "サーバーで`new Date()`をレンダし、クライアントで再度描画するとHydrationミスマッチになるため、`useEffect`内に逃す。" },
  { id: "intersection-observer", name: "Intersection Observer", englishName: "Intersection Observer API", category: "Web・インターネット", description: "要素が画面内に入ったことを検知するブラウザAPI。無限スクロール、遅延読み込み、スクロール連動アニメで使う。", example: "IntersectionObserverで画像がビューに入ったときだけロードすれば、初期表示が爆速になる。" },
  { id: "resize-observer", name: "ResizeObserver", englishName: "ResizeObserver", category: "Web・インターネット", description: "要素のサイズ変化を検知するブラウザAPI。`window.resize` と違い、個別要素のサイズを監視できる。レスポンシブUIの定番。", example: "ResizeObserverでサイドバーの幅を監視し、狭くなったときだけメニューを折りたたむUIが作れる。" },
  { id: "web-worker", name: "Web Worker", englishName: "Web Worker", category: "Web・インターネット", description: "ブラウザの別スレッドでJSを走らせる仕組み。重い計算をメインスレッドから逃して、UIフリーズを防ぐ。", example: "画像処理や暗号化計算をWeb Workerに移せば、操作中もUIがぬるぬる動く。" },
  { id: "service-worker", name: "Service Worker", englishName: "Service Worker", category: "Web・インターネット", description: "ブラウザのバックグラウンドで動くJSで、キャッシュ制御・プッシュ通知・オフライン動作を実現する。PWAの心臓。", example: "Service Workerで記事HTMLをキャッシュしておけば、電波圏外でも一度読んだページが読める。" },
  { id: "pwa", name: "PWA", englishName: "Progressive Web App", category: "Web・インターネット", description: "Webサイトをインストール可能なアプリのように動かす技術群。iOS/Androidのストア審査を回避しつつ、プッシュ通知やオフライン動作も可能。", example: "TwitterやStarbucksのPWAは、ホーム画面追加とプッシュ通知でネイティブアプリ並みの体験を提供する。" },
  { id: "shadow-dom", name: "Shadow DOM", englishName: "Shadow DOM", category: "Web・インターネット", description: "Web Componentsの機能の一つで、要素の内部DOMを外部スタイルから隔離する仕組み。埋め込みウィジェットでCSS衝突を防ぐ。", example: "サードパーティのチャットウィジェットはShadow DOM内で動くため、ホスト側のCSSに汚染されずに表示される。" },

  // ─── ネットワーク / セキュリティ 追加 ─────────────────────
  { id: "http2", name: "HTTP/2", englishName: "HTTP/2", category: "Web・インターネット", description: "2015年標準化。1つのTCP接続で複数リクエストを多重化でき、HTTP/1.1より大幅に高速。モダンブラウザは全対応。", example: "HTTP/2対応のサーバーなら、100個の画像を1つの接続で並列取得でき、ページ読み込みが劇的に速い。" },
  { id: "http3", name: "HTTP/3", englishName: "HTTP/3", category: "Web・インターネット", description: "UDPベースのQUICプロトコルを使う次世代HTTP。接続確立が高速で、パケットロスに強い。モバイル環境で特に恩恵が大きい。", example: "Cloudflare経由のサイトは自動でHTTP/3が有効になり、モバイル回線での体感速度が上がる。" },
  { id: "quic", name: "QUIC", englishName: "QUIC", category: "Web・インターネット", description: "Googleが開発したUDPベースの通信プロトコル。TLS暗号化が標準、接続確立が1RTTで済むなどHTTP/3の基盤。", example: "YouTubeやGoogle検索はQUICで配信されていて、モバイルの切り替え時にも接続が維持されやすい。" },
  { id: "cdn-cache", name: "CDNキャッシュ", englishName: "CDN Cache", category: "Web・インターネット", description: "CDNのエッジサーバーに静的ファイルを一時保存する仕組み。オリジンサーバーへのアクセスを減らし、世界中で高速配信を実現する。", example: "`Cache-Control: s-maxage=3600` をつければ、CDNで1時間キャッシュされオリジン負荷が激減する。" },
  { id: "etag", name: "ETag", englishName: "ETag", category: "Web・インターネット", description: "ファイルの内容が変わったかを示すハッシュ値的な識別子。If-None-Matchヘッダで送ると、変わっていなければ304 Not Modifiedで返される。", example: "画像のETagで304が返ると、ブラウザは再ダウンロードせずキャッシュから表示し、帯域を節約できる。" },
  { id: "cache-control", name: "Cache-Control", englishName: "Cache-Control Header", category: "Web・インターネット", description: "HTTPレスポンスでキャッシュ動作を細かく制御するヘッダー。`max-age`、`s-maxage`、`stale-while-revalidate`、`private`などがある。", example: "`Cache-Control: public, s-maxage=86400, stale-while-revalidate=3600` はCDNで1日強く、1時間の軽い再検証を行う設定。" },
  { id: "same-origin-policy", name: "同一オリジンポリシー", englishName: "Same-Origin Policy", category: "データ・セキュリティ", description: "ブラウザが「異なるオリジン同士のJSアクセスを基本禁止する」セキュリティの土台。CORSはこれを緩める仕組み。", example: "`a.com` のJSから `b.com/api` を普通には呼べないのが同一オリジンポリシー。CORSヘッダで許可して初めて通る。" },
  { id: "samesite-cookie", name: "SameSiteクッキー", englishName: "SameSite Cookie", category: "データ・セキュリティ", description: "他サイトからのクッキー送信を制限する属性。`Lax`／`Strict`／`None`がある。CSRF対策の中核。現代は `Lax` がデフォルト。", example: "`SameSite=Lax; Secure; HttpOnly` を付けたセッションクッキーは、外部サイトからの偽装フォームで送られない。" },
  { id: "subresource-integrity", name: "SRI（サブリソース整合性）", englishName: "Subresource Integrity", category: "データ・セキュリティ", description: "CDNから読み込むJSやCSSにハッシュを付けて、改ざんされたら実行させない機能。`<script integrity=\"sha384-…\" />` と書く。", example: "CDNがハックされた場合でも、SRIのハッシュが合わなければブラウザがスクリプト実行を拒否して被害を防ぐ。" },
  { id: "content-security-policy", name: "CSP", englishName: "Content Security Policy", category: "データ・セキュリティ", description: "Webページで読み込めるスクリプト・画像・フォントのドメインを宣言して、XSS対策を強化するHTTPヘッダー。", example: "`Content-Security-Policy: script-src 'self' https://cdn.example.com` で、社外ドメインのスクリプト注入を防げる。" },

  // ─── データ / 分析 ＋α ───────────────────────────────
  { id: "data-contract", name: "データ契約", englishName: "Data Contract", category: "データ・セキュリティ", description: "アプリチームとデータチームの間で「どのカラムが、どの型で、いつ変更するか」を明示する仕様書。破壊的変更を事前に把握できる。", example: "注文イベントのデータ契約を結ぶと、突然 `user_id` が null になってBIが壊れる事故が防げる。" },
  { id: "data-mesh", name: "データメッシュ", englishName: "Data Mesh", category: "データ・セキュリティ", description: "データ基盤を中央集権にせず「各ドメインチームが自分のデータを製品として提供する」考え方。大企業のデータ組織論として流行。", example: "営業・物流・会計がそれぞれデータプロダクトを公開し、他部門はカタログから購読する、というのがData Meshの理想像。" },
  { id: "event-sourcing", name: "イベントソーシング", englishName: "Event Sourcing", category: "プログラミング", description: "状態ではなく「起きたイベントの履歴」を記録する設計。現在値は必要なときに再計算する。会計や監査が厳しい領域で強い。", example: "銀行口座をイベントソーシングで実装すれば、過去のあらゆる取引が追跡可能で、巻き戻しも可能。" },
  { id: "cqrs", name: "CQRS", englishName: "Command Query Responsibility Segregation", category: "プログラミング", description: "書き込み系（Command）と読み取り系（Query）のモデルを分離する設計。複雑なドメインで整合性と読みやすさを両立。", example: "注文登録はRDBに書き、一覧表示は検索特化のElasticsearchから読む、というCQRS構成が大規模ECで見られる。" },
  { id: "ddd", name: "ドメイン駆動設計", englishName: "Domain-Driven Design (DDD)", category: "プログラミング", description: "業務ドメイン（領域）を中心にコード設計を組み立てる方法論。ユビキタス言語・集約・バウンデッドコンテキストなどの概念を使う。", example: "DDDで実装されたECなら、業務用語（「在庫引当」など）がそのままコードのクラス名として現れる。" },
  { id: "hexagonal-architecture", name: "ヘキサゴナルアーキテクチャ", englishName: "Hexagonal Architecture", category: "プログラミング", description: "ドメインロジックを中心に据え、DBやUIなどの外部依存をポート＆アダプタで分離するアーキテクチャ。テスタビリティが高い。", example: "ヘキサゴナル設計ならDBをPostgresからSQLiteに変えても、ドメイン層は一切修正不要で済む。" },
  { id: "clean-architecture", name: "クリーンアーキテクチャ", englishName: "Clean Architecture", category: "プログラミング", description: "Uncle Bobが提唱した同心円のアーキテクチャ図。依存は外から内向きだけ。ヘキサゴナルと思想は同じで、図の描き方が違うだけ。", example: "クリーンアーキテクチャのdomain層にはフレームワーク依存を一切書かないので、将来のNext.js→Remix移行も恐くない。" },

  // ─── ビジネス・制度 ───────────────────────────────────
  { id: "saas-metrics", name: "SaaS指標", englishName: "SaaS Metrics", category: "ビジネス・DX", description: "MRR（月次経常収益）・ARR・Churn（解約率）・LTV・CACなどSaaSの健全性を測るKPI群。投資家との会話にも必須。", example: "Churn率が月3%ならLTVは33ヶ月分、CACを回収できるかがSaaS事業の生死を分ける。" },
  { id: "product-led-growth", name: "PLG（プロダクト主導成長）", englishName: "Product-Led Growth", category: "ビジネス・DX", description: "製品そのものがマーケティング・営業・オンボーディングを兼ねる成長戦略。Notion、Figma、Linearなどが代表。", example: "PLG企業は無料枠で価値を実感してもらい、チーム導入時に有料化、という自然な流れを作る。" },
  { id: "dau-mau", name: "DAU／MAU", englishName: "Daily / Monthly Active Users", category: "ビジネス・DX", description: "1日/1ヶ月ごとのアクティブユーザー数。DAU/MAU比率（Stickiness）が高いほど日常的に使われているサービス。", example: "DAU/MAU = 0.5 なら「月利用者の半分が毎日使う」レベルの粘着性で、SNSや金融アプリで目指す水準。" },
  { id: "nps", name: "NPS", englishName: "Net Promoter Score", category: "ビジネス・DX", description: "「このサービスを友達に勧める度合いを0-10で」という1問で測る顧客満足度指標。推奨者-批判者の差で算出。", example: "NPS 50以上なら業界トップクラス。0〜30が平均的、マイナスなら深刻な改善が必要。" },
  { id: "aarrr", name: "AARRR（海賊指標）", englishName: "AARRR", category: "ビジネス・DX", description: "Acquisition（獲得）、Activation（活性化）、Retention（定着）、Revenue（収益）、Referral（紹介）の5段階ファネル。スタートアップ定番KPI。", example: "AARRRで段階ごとにボトルネックを特定すれば、「獲得はOKだが活性化で落ちる」と具体改善点が見える。" },
  { id: "unit-economics", name: "ユニットエコノミクス", englishName: "Unit Economics", category: "ビジネス・DX", description: "顧客1人あたりの収支の健全性。LTV > CAC の3倍が目安。これが成り立たないと規模拡大で赤字が増える。", example: "LTV 30000円 / CAC 8000円 ならユニットエコノミクスは健全（3.75倍）。次は獲得を増やす段階。" },
  { id: "cohort-analysis", name: "コホート分析", englishName: "Cohort Analysis", category: "データ・セキュリティ", description: "「同時期に獲得したユーザー群（コホート）」ごとの行動を時系列で追う分析。継続率の改善や機能追加の効果測定に必須。", example: "1月コホート・2月コホートの継続率を比べれば、新機能追加後にChurnが下がったかが客観的にわかる。" },
  { id: "ab-test-stats", name: "A/Bテストの統計", englishName: "A/B Test Statistics", category: "ビジネス・DX", description: "A/Bテストで「差が偶然でないか」を判定する統計手法。p値・信頼区間・ベイジアン推定などを使う。", example: "p < 0.05 だけでGoサインを出すと偽陽性が増えるため、実運用では最小検出効果量（MDE）とサンプル数設計が重要。" },

  // ─── その他ユニーク用語 ──────────────────────────────
  { id: "feature-envy", name: "機能の横恋慕", englishName: "Feature Envy", category: "プログラミング", description: "「自分のクラスより他クラスのデータを多く参照している」コードスメル。メソッドを別クラスに移すリファクタリング対象。", example: "ユーザーの年齢計算をUtilクラスではなく User.getAge() に移すのがFeature Envyの解消。" },
  { id: "god-object", name: "神クラス", englishName: "God Object", category: "プログラミング", description: "あまりに多くの責務を持ちすぎた巨大なクラス。アンチパターンの代表例で、テストもメンテもできなくなる。", example: "`UserManager` が認証・決済・メール送信すべてを持っていたら、それはGod Object。責務分割を検討すべき。" },
  { id: "dry-principle", name: "DRY原則", englishName: "Don't Repeat Yourself", category: "プログラミング", description: "「同じ情報や知識を二重に書かない」プログラミング原則。ただし早すぎる抽象化は逆に悪化するので、3回重複してからリファクタが目安。", example: "似たような関数が2つあっても慌てて共通化せず、3度目が出てから DRY 化するのが現代的な運用。" },
  { id: "kiss-principle", name: "KISS原則", englishName: "Keep It Simple, Stupid", category: "プログラミング", description: "「とにかくシンプルに保て」の格言。過剰な抽象化・柔軟性より、素直な書き方を優先する。", example: "「将来こう変わるかも」と設計を複雑化する前に、KISSで直書きして、本当に必要になってから抽象化する。" },
  { id: "yagni", name: "YAGNI", englishName: "You Aren't Gonna Need It", category: "プログラミング", description: "「きっと必要になる」と予防的機能を作らない原則。実際に必要になった瞬間だけ実装する。", example: "「将来多言語対応するかも」と今i18n基盤を作るのはYAGNI違反。英語版リリース後に必要になってから入れる。" },
  { id: "boy-scout-rule", name: "ボーイスカウトの原則", englishName: "Boy Scout Rule", category: "プログラミング", description: "「触ったファイルは、来たときより少しだけきれいにして去れ」の教え。大掃除を特別にやらず、日々の作業で少しずつリファクタ。", example: "バグ修正ついでに変数名を分かりやすく直すなど、小さな改善を積み上げるのがボーイスカウトの原則。" },
  { id: "chesterton-fence", name: "チェスタトンの柵", englishName: "Chesterton's Fence", category: "プログラミング", description: "「なぜそのコード/柵が存在するのか理解するまでは撤去するな」の格言。古いコメントや書き方を軽々しく消すなという戒め。", example: "「この古い`if`文は不要に見えるから消そう」と思ったら、gitの歴史を調べて理由を確認する—それがチェスタトンの柵。" },
  { id: "shebang", name: "シバン", englishName: "Shebang", category: "プログラミング", description: "スクリプトの1行目に書く `#!/usr/bin/env python3` のような記述。OSにどのインタプリタで実行するかを教える。", example: "シェルスクリプトの先頭 `#!/bin/bash` を忘れると、実行時にどのシェルで動くかがOSによってバラつく。" },
  { id: "symlink", name: "シンボリックリンク", englishName: "Symbolic Link (Symlink)", category: "プログラミング", description: "別ファイル/ディレクトリを指すショートカット的なファイル。`ln -s` で作る。設定ファイルを共通化したりパス切替に使う。", example: "`ln -s /opt/app/config /home/user/.app-config` で、ホームディレクトリから共通設定が透過的に読める。" },
  { id: "crlf-lf", name: "CRLF / LF", englishName: "CRLF / LF", category: "プログラミング", description: "改行コードの違い。Windowsは `\\r\\n`（CRLF）、macOS/Linuxは `\\n`（LF）。gitで `core.autocrlf` 設定を誤ると、差分がぐちゃぐちゃに見える。", example: "gitで「ファイル全体が差分になっている」ときの9割はCRLF/LFの問題。`.gitattributes`で統一する。" },
  { id: "utf8-bom", name: "UTF-8 BOM", englishName: "UTF-8 Byte Order Mark", category: "プログラミング", description: "UTF-8ファイルの先頭に付く「このファイルはUTF-8」を示す3バイト。CSVなどで付けるとExcelが文字化けしない。", example: "日本語CSVをExcel向けに出す場合、BOM付きUTF-8で出力すると文字化けせずに開ける。" },
  { id: "tmp-fs", name: "tmpfs", englishName: "tmpfs", category: "プログラミング", description: "メモリ上にマウントされる一時ファイルシステム。再起動で消える。`/tmp` に使われ、I/Oが爆速。", example: "重いビルドの中間ファイルをtmpfsに置けば、ディスクI/Oがゼロでビルド時間が大幅短縮する。" },
  { id: "ascii", name: "ASCII", englishName: "ASCII", category: "プログラミング", description: "英数字と記号を7bitで表す最古の文字コード。日本語は表現できないが、プロトコルや英語のみのテキストで現役。", example: "HTTPヘッダはASCIIで書かれるため、日本語を入れるときはURLエンコードなどの変換が必要。" },
  { id: "unicode", name: "Unicode", englishName: "Unicode", category: "プログラミング", description: "世界中の文字を一つのコードで扱う国際規格。UTF-8/UTF-16などの形式でエンコードされる。絵文字もUnicode。", example: "「あ」も「🙂」もUnicodeで定義されたコードポイントを持つので、統一して扱える。" },
];
