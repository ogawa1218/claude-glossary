import { Term } from "./terms";

export const dbTerms: Term[] = [
  // ─── データベース・ナレッジ ─────────────────────────────────────────
  {
    slug: "supabase",
    name: "Supabase（スーパーベース）",
    nameEn: "Supabase",
    category: "database",
    tagline: "無料から使えるオープンソースのFirebase代替",
    description: `PostgreSQLベースのオープンソースBaaS（Backend as a Service）です。

Firebaseの代替として2020年に登場し、2026年現在700万人以上の開発者が利用。GitHub Stars 10万超えの超人気プロジェクトです。

最大の魅力は「無料枠の充実」と「PostgreSQLの本物のパワー」。無料で500MBのデータベースが使えて、SQLも使える。Firebaseと違って「データの所有権」が完全にあなたにあるのがポイント。

非エンジニアにとっても、Claude CoworkのMCP接続を使えば日本語で「先月の売上トップ5を出して」と聞くだけでSQLを自動生成してくれる。ExcelからSupabaseに移行するだけで世界が変わります。`,
    example: `・Excelに散らばった売上データをSupabaseに集約して一元管理\n・為替レートテーブルを作って自動換算ビューを構築\n・RLS（行レベルセキュリティ）で部門ごとのアクセス制御\n・pgvectorで社内ドキュメントのAI検索を構築`,
    relatedTerms: ["postgresql", "rls", "pgvector", "edge-functions", "mcp", "database"],
    difficulty: "beginner",
    quiz: {
      question: "Supabaseの基盤となっているデータベースは？",
      choices: ["MySQL", "MongoDB", "PostgreSQL"],
      answer: 2,
      explanation: "SupabaseはPostgreSQLベースのBaaSです。SQLが使え、RLS・pgvectorなどPostgreSQLの強力な機能をフル活用できます。"
    }
  },
  {
    slug: "postgresql",
    name: "PostgreSQL（ポスグレ）",
    nameEn: "PostgreSQL",
    category: "database",
    tagline: "世界で最も先進的なオープンソースDB",
    description: `1986年に誕生した歴史あるオープンソースのリレーショナルデータベースです。

「ポスグレ」の愛称で呼ばれ、MySQLと並ぶ二大OSSデータベースのひとつ。特徴は「拡張性」で、pgvector（ベクトル検索）、pg_duckdb（分析高速化）、PostGIS（地理データ）など、プラグインで機能を無限に拡張できます。

SupabaseもNeonもPostgreSQLがベース。AI時代のデータベースとして再注目されています。特にNUMERIC型の精度が高く、金融・会計データの管理に最適。`,
    example: `・Supabase / Neon / Render などのクラウドDBサービスの基盤\n・為替レート計算でNUMERIC型を使い小数点以下の精度を保証\n・pg_duckdbプラグインで大量データの分析クエリを高速化`,
    relatedTerms: ["supabase", "neon", "sql", "database", "pgvector"],
    difficulty: "intermediate",
    quiz: {
      question: "PostgreSQLの最大の特徴は？",
      choices: ["最も速いDB", "拡張性が高い（プラグインで機能追加）", "NoSQLに特化している"],
      answer: 1,
      explanation: "PostgreSQLはpgvector、pg_duckdb、PostGISなどの拡張機能で自在に機能を追加できる高い拡張性が特徴です。"
    }
  },
  {
    slug: "rls",
    name: "RLS（行レベルセキュリティ）",
    nameEn: "Row Level Security",
    category: "database",
    tagline: "行単位でデータのアクセスを制御する仕組み",
    description: `データベースのテーブルの中で「この行はAさんだけ見える」「この行はBチームだけ編集できる」といった、行単位のアクセス制御を実現する機能です。

Excelで言うと「シートの保護」の超強化版。SupabaseではRLSがデフォルトで有効になっており、セキュリティのベストプラクティスとして推奨されています。

例えば多店舗運営で「各店長は自分の店のデータだけ見える」という制御をRLSポリシー1行で実装できます。アプリ側でフィルタリングする必要がなく、DB層で確実にガードするのでセキュリティが格段に向上します。`,
    example: `・各国のマネージャーが自国の売上データだけ閲覧できるようにする\n・監査データに「閲覧のみ」ポリシーを設定して改ざん防止\n・Supabaseのダッシュボードで視覚的にRLSポリシーを設定`,
    relatedTerms: ["supabase", "postgresql", "sql", "database"],
    difficulty: "intermediate",
    quiz: {
      question: "RLSとは何の略ですか？",
      choices: ["Real-time Log System", "Row Level Security", "Remote Login Service"],
      answer: 1,
      explanation: "RLSはRow Level Securityの略で、データベースの行単位でアクセス制御を行う仕組みです。"
    }
  },
  {
    slug: "pgvector",
    name: "pgvector（ピージーベクター）",
    nameEn: "pgvector",
    category: "database",
    tagline: "PostgreSQLでベクトル検索を実現する拡張機能",
    description: `PostgreSQLにベクトル検索機能を追加する拡張機能（Extension）です。

「ベクトル」とは、テキストや画像を数値の配列（例：[0.12, -0.34, 0.56, ...]）に変換したもの。この数値配列の「近さ」を計算することで、意味的に似たコンテンツを検索できます。

通常の検索が「完全一致」なら、ベクトル検索は「意味が近い」を見つけられる。「売上が伸びた理由」で検索したら「増収の要因分析」も引っかかる、というイメージ。

Supabaseにはpgvectorがプリインストールされており、RAG（検索拡張生成）の基盤として使えます。専用のベクトルDBを別途契約せずに、Supabase一つでAI検索が構築できるのが強みです。`,
    example: `・社内ドキュメントをベクトル化してAI検索を構築\n・過去の監査レポートから類似事例を自動検索\n・FAQの意味検索（「返品したい」→「返金ポリシー」をヒット）`,
    relatedTerms: ["supabase", "postgresql", "rag", "embedding", "vector-db"],
    difficulty: "advanced",
    quiz: {
      question: "pgvectorの「ベクトル検索」でできることは？",
      choices: ["完全一致のキーワード検索", "意味的に近いコンテンツの検索", "画像の自動生成"],
      answer: 1,
      explanation: "ベクトル検索はテキストを数値配列に変換し、意味的な「近さ」を計算することで、キーワードが一致しなくても関連性の高い結果を返せます。"
    }
  },
  {
    slug: "edge-functions",
    name: "Edge Functions（エッジファンクション）",
    nameEn: "Edge Functions",
    category: "database",
    tagline: "サーバーなしでバックエンド処理を実行する仕組み",
    description: `Supabaseが提供するサーバーレス関数の実行環境です。Deno（TypeScript/JavaScript）で書いた関数をデプロイすると、世界中のエッジサーバーで実行されます。

「サーバーを借りなくてもバックエンド処理ができる」のがポイント。例えば：
・外部APIからデータを取得してDBに保存する定期処理
・Webhookを受け取って処理するエンドポイント
・データの加工・変換ロジック

AWSのLambdaやCloudflare Workersに近い概念ですが、Supabaseのデータベースと直結しているので、DB操作が簡単にできるのが特徴です。`,
    example: `・毎朝為替レートAPIからデータを取得してexchange_ratesテーブルに自動保存\n・Slackから送られたメッセージをパースしてDBに記録\n・外部フォームの送信データを受け取ってバリデーション後にDB保存`,
    relatedTerms: ["supabase", "serverless", "api", "webhook", "postgresql"],
    difficulty: "advanced",
    quiz: {
      question: "Supabase Edge Functionsのランタイムは？",
      choices: ["Node.js", "Python", "Deno（TypeScript/JavaScript）"],
      answer: 2,
      explanation: "Supabase Edge FunctionsはDenoランタイムで動作し、TypeScript/JavaScriptで記述します。"
    }
  },
  {
    slug: "vector-db",
    name: "ベクトルデータベース",
    nameEn: "Vector Database",
    category: "database",
    tagline: "AIの「意味検索」を支える専用DB",
    description: `テキスト・画像・音声などを数値ベクトル（数値の配列）として保存し、「意味の近さ」で検索できる専用データベースです。

代表的なサービス：
・Pinecone — マネージドで最も有名。スケーラビリティが強み
・Weaviate — オープンソース。ハイブリッド検索が得意
・Qdrant — Rust製で高速。オープンソース
・Chroma — Python/JS向け。軽量で開発しやすい

ただし、Supabaseのpgvectorを使えば専用ベクトルDBなしでもベクトル検索ができます。小〜中規模ならpgvectorで十分。大規模になったらPineconeやWeaviateの検討を。`,
    example: `・100万件の社内ドキュメントから「似た内容」を瞬時に検索\n・商品画像のベクトル化で「見た目が似た商品」をレコメンド\n・RAGシステムのバックエンドとして大規模ナレッジベースを構築`,
    relatedTerms: ["pgvector", "embedding", "rag", "supabase", "database"],
    difficulty: "advanced",
    quiz: {
      question: "ベクトルデータベースの主な特徴は？",
      choices: ["SQLで操作する表形式DB", "意味的な類似性でデータを検索できる", "ファイルを保存する専用ストレージ"],
      answer: 1,
      explanation: "ベクトルデータベースはデータを数値ベクトルとして保存し、意味的な類似性に基づく検索が可能です。"
    }
  },
  {
    slug: "neon",
    name: "Neon（ネオン）",
    nameEn: "Neon",
    category: "database",
    tagline: "サーバーレスPostgreSQL。Supabaseの対抗馬",
    description: `サーバーレスPostgreSQLを提供するクラウドサービスです。

Supabaseとの違いは「DBに特化」していること。Supabaseが認証・ストレージ・Edge Functionsなど「フルスタック」を目指すのに対し、NeonはPostgreSQLのパフォーマンスと使いやすさに全振りしています。

特徴的なのは「ブランチ機能」。Gitのブランチのように、データベースのコピーを一瞬で作れます。本番DBを壊さずにテストできる。

公式MCPサーバーもあり、AI連携の親和性も高い。Supabase一択で困らないですが、「DBの純粋な性能」を追求するならNeonも要チェック。`,
    example: `・開発用ブランチDBを作って安全にスキーマ変更をテスト\n・使わない間は自動スケールダウンしてコスト0に\n・Vercel・Cloudflare Workers等と公式統合`,
    relatedTerms: ["supabase", "postgresql", "serverless", "database"],
    difficulty: "intermediate",
    quiz: {
      question: "NeonのSupabaseとの最大の違いは？",
      choices: ["MongoDBベースである", "データベースに特化している", "無料プランがない"],
      answer: 1,
      explanation: "NeonはサーバーレスPostgreSQLに特化しており、フルスタックBaaSのSupabaseとは異なるアプローチです。"
    }
  },
  {
    slug: "nocodb",
    name: "NocoDB（ノーコードDB）",
    nameEn: "NocoDB",
    category: "database",
    tagline: "Airtableの代替。DBをスプレッドシートのように操作",
    description: `既存のデータベース（MySQL, PostgreSQL, SQLiteなど）にスプレッドシート風のUIを被せるオープンソースツールです。

「Airtableのオープンソース版」として人気。データベースの中身をExcelやGoogleスプレッドシートのように見て・編集できます。SQLを書けなくても、ドラッグ&ドロップでフィルター・ソート・集計ができる。

Supabase + NocoDBの組み合わせがおすすめ。SupabaseでDB設計・MCP接続・RLSを管理し、NocoDBで日常的なデータの閲覧・編集をする。技術の力と使いやすさの両立です。`,
    example: `・Supabaseのテーブルに接続して、スプレッドシートUIで売上データを閲覧・編集\n・非エンジニアの同僚にもDBを安全に操作させる\n・カンバンビュー、ガレリービュー、フォームビューなど多彩な表示`,
    relatedTerms: ["supabase", "database", "no-code", "sql"],
    difficulty: "beginner",
    quiz: {
      question: "NocoDBの主な役割は？",
      choices: ["新しいデータベースを作る", "既存のDBにスプレッドシートUIを提供する", "AIモデルをトレーニングする"],
      answer: 1,
      explanation: "NocoDBは既存のデータベースにスプレッドシート風のインターフェースを提供するオープンソースツールです。"
    }
  },
  {
    slug: "migration",
    name: "マイグレーション",
    nameEn: "Migration",
    category: "database",
    tagline: "DBの設計変更を安全に管理する仕組み",
    description: `データベースのテーブル構造（スキーマ）の変更を、バージョン管理しながら安全に適用する仕組みです。

Gitが「コードの変更履歴」を管理するように、マイグレーションは「DBの構造変更の履歴」を管理します。

Supabaseではダッシュボードの「Migrations」タブから実行でき、「テーブルにカラムを追加」「インデックスを作成」「ビューを更新」といった変更を順番に適用・取り消しできます。

これにより「本番DBを壊さずに安全に構造変更できる」ようになります。`,
    example: `・新しいカラム「通貨コード」をstoresテーブルに追加するマイグレーション\n・exchange_ratesテーブルを新規作成するマイグレーション\n・予実対比ビュー（v_budget_vs_actual）を作成するマイグレーション`,
    relatedTerms: ["supabase", "postgresql", "sql", "schema", "database"],
    difficulty: "intermediate",
    quiz: {
      question: "マイグレーションの主な目的は？",
      choices: ["データのバックアップ", "DBの構造変更を安全にバージョン管理する", "データを別のDBに移動する"],
      answer: 1,
      explanation: "マイグレーションはデータベースのスキーマ変更を順番に適用・取り消しでき、安全な構造変更を実現します。"
    }
  },
  {
    slug: "schema",
    name: "スキーマ",
    nameEn: "Schema",
    category: "database",
    tagline: "データベースの「設計図」",
    description: `データベースの構造を定義する設計図です。「どんなテーブルがあるか」「各テーブルにどんなカラムがあるか」「型は何か」「制約は何か」をまとめたもの。

建築に例えると、スキーマは「建物の図面」。図面なしにビルを建てないように、スキーマなしにDBは作りません。

Supabaseでは「public」スキーマがデフォルトで使われます。テーブル設計をClaude Coworkに「こういうデータを管理したい」と伝えるだけで、適切なスキーマ（CREATE TABLE文）を自動生成してくれます。`,
    example: `・storesテーブルのスキーマ：store_id, name, country, currency_code, opened_date\n・「予算管理がしたい」→ Claudeがbudgetsテーブルのスキーマを自動設計\n・Supabaseダッシュボードでスキーマを視覚的に確認`,
    relatedTerms: ["database", "sql", "migration", "supabase"],
    difficulty: "beginner",
    quiz: {
      question: "スキーマとは何ですか？",
      choices: ["データそのもの", "データベースの構造（設計図）", "データのバックアップファイル"],
      answer: 1,
      explanation: "スキーマはデータベースのテーブル構造・カラム・型・制約を定義する設計図です。"
    }
  },
  {
    slug: "view-db",
    name: "ビュー（データベース）",
    nameEn: "View",
    category: "database",
    tagline: "保存されたクエリ結果を仮想テーブルとして扱う",
    description: `SQLクエリの結果を「仮想テーブル」として保存する仕組みです。データは実際には保存されず、アクセスするたびにクエリが実行されます。

例えるなら、Excelの「ピボットテーブル」に近い概念。元データが変わると自動的に結果も変わる。

ビューの最大のメリットは「複雑なクエリを毎回書かなくて済む」こと。予実対比の計算+為替換算+前年比較という複雑なクエリも、一度ビューにすれば「SELECT * FROM v_budget_vs_actual」の一行で結果が出ます。`,
    example: `・v_sushi_comparison：回転寿司4社の売上・利益率・店舗あたり売上を一覧表示\n・v_budget_vs_actual：予算と実績の差異を為替換算込みで自動計算\n・Claude Coworkに「ビューの結果を見せて」と聞くだけで分析完了`,
    relatedTerms: ["sql", "database", "supabase", "schema"],
    difficulty: "intermediate",
    quiz: {
      question: "データベースのビューの特徴は？",
      choices: ["データを物理的に複製する", "クエリ結果を仮想テーブルとして参照できる", "データを暗号化する"],
      answer: 1,
      explanation: "ビューはSQLクエリの結果を仮想テーブルとして扱い、アクセスのたびにクエリが実行されます。"
    }
  },
  {
    slug: "crud",
    name: "CRUD（クラッド）",
    nameEn: "Create, Read, Update, Delete",
    category: "database",
    tagline: "データ操作の4つの基本動作",
    description: `データベース操作の基本4動作の頭文字です。

・Create（作成）— 新しいデータを追加する（INSERT）
・Read（読み取り）— データを検索・取得する（SELECT）
・Update（更新）— 既存データを修正する（UPDATE）
・Delete（削除）— データを消す（DELETE）

すべてのアプリやシステムは、突き詰めるとこの4つの組み合わせでできています。Excelで言えば「行を追加」「セルを見る」「値を書き換える」「行を削除」。シンプルですが、これがデータベースの根幹です。`,
    example: `・新しい店舗データを登録する → Create（INSERT INTO stores ...）\n・先月の売上を一覧表示する → Read（SELECT * FROM actuals WHERE ...）\n・為替レートを最新値に更新する → Update（UPDATE exchange_rates SET ...）\n・テスト用のダミーデータを削除する → Delete（DELETE FROM ...）`,
    relatedTerms: ["sql", "database", "api", "rest-api"],
    difficulty: "beginner",
    quiz: {
      question: "CRUDの「U」は何を意味する？",
      choices: ["Upload", "Update", "Undo"],
      answer: 1,
      explanation: "CRUDのUはUpdate（更新）で、既存のデータを修正する操作を意味します。"
    }
  },
  {
    slug: "foreign-key",
    name: "外部キー（Foreign Key）",
    nameEn: "Foreign Key",
    category: "database",
    tagline: "テーブル同士を関連づけるリンク",
    description: `あるテーブルのカラムが、別のテーブルの主キー（Primary Key）を参照する仕組みです。

例えるなら、Excelの「VLOOKUP先のシート」との紐付け。storesテーブルのstore_idを、actualsテーブルのstore_idカラムが参照することで「この売上データはどの店舗のものか」がわかります。

外部キーを設定すると「存在しない店舗IDの売上データは登録できない」という制約がかかり、データの整合性が保たれます。壊れたリンクを防ぐ安全装置です。`,
    example: `・actuals.store_id → stores.store_id：売上データと店舗を紐付け\n・budgets.store_id → stores.store_id：予算データと店舗を紐付け\n・audits.store_id → stores.store_id：監査結果と店舗を紐付け`,
    relatedTerms: ["database", "schema", "sql", "supabase"],
    difficulty: "intermediate",
    quiz: {
      question: "外部キーの主な目的は？",
      choices: ["テーブルのパフォーマンスを向上させる", "テーブル間のデータ整合性を保つ", "データを暗号化する"],
      answer: 1,
      explanation: "外部キーは別テーブルの主キーを参照し、存在しないデータへの参照を防いでデータの整合性を保ちます。"
    }
  },
  {
    slug: "index-db",
    name: "インデックス（データベース）",
    nameEn: "Database Index",
    category: "database",
    tagline: "検索を高速化する目次",
    description: `データベースの検索を高速にするための「目次」です。

本の索引と同じ原理。1000ページの本で「Supabase」を探すとき、索引がなければ全ページをめくる必要がありますが、索引があれば「Supabase → p.42」と一発で見つかる。

データベースも同じで、100万行のテーブルでインデックスなしに検索すると全行を走査する（フルスキャン）。インデックスがあれば一瞬。

ただしインデックスは「挿入・更新が少し遅くなる」トレードオフがあります。よく検索するカラムにだけ付けるのがベストプラクティス。`,
    example: `・stores.country_codeにインデックスを作成 → 国別の店舗検索が高速化\n・actuals.monthにインデックス → 月別売上集計が高速化\n・CREATE INDEX idx_stores_country ON stores(country_code);`,
    relatedTerms: ["database", "sql", "postgresql", "supabase"],
    difficulty: "intermediate",
    quiz: {
      question: "データベースのインデックスのデメリットは？",
      choices: ["検索が遅くなる", "データの挿入・更新が少し遅くなる", "データが消える"],
      answer: 1,
      explanation: "インデックスは検索を高速化しますが、データ追加・更新時にインデックスの更新も必要になるため、書き込みが少し遅くなるトレードオフがあります。"
    }
  },
  {
    slug: "baas",
    name: "BaaS（Backend as a Service）",
    nameEn: "Backend as a Service",
    category: "database",
    tagline: "バックエンドを丸ごとおまかせできるサービス",
    description: `Webアプリやモバイアプリの「裏側の仕組み」を丸ごと提供するクラウドサービスです。

通常アプリを作るには「サーバー」「データベース」「認証」「ファイル保存」「API」を全部自分で用意する必要がありますが、BaaSなら全部揃っています。

代表例：
・Firebase（Google）— 最も有名だがベンダーロックインが強い
・Supabase — オープンソースのFirebase代替。PostgreSQL
・Appwrite — オープンソース。Docker自前運用も可能

非エンジニアがAI×データでプロダクトを作るなら、BaaSは最強の味方です。`,
    example: `・Supabase = DB + 認証 + ストレージ + Edge Functions + リアルタイム\n・Firebase = DB + 認証 + ストレージ + Cloud Functions + ホスティング\n・コードを書かずにダッシュボードからDB操作・ユーザー管理が可能`,
    relatedTerms: ["supabase", "cloud", "serverless", "api", "database"],
    difficulty: "beginner",
    quiz: {
      question: "BaaSが提供するものは？",
      choices: ["フロントエンドのデザイン", "バックエンドの機能一式（DB・認証・API等）", "PCのハードウェア"],
      answer: 1,
      explanation: "BaaSはデータベース・認証・ストレージ・APIなど、バックエンドに必要な機能をまとめて提供するクラウドサービスです。"
    }
  },
  {
    slug: "pg-duckdb",
    name: "pg_duckdb",
    nameEn: "pg_duckdb",
    category: "database",
    tagline: "PostgreSQLで分析クエリを超高速化する拡張",
    description: `PostgreSQLの中でDuckDB（高速分析エンジン）を動かす拡張機能です。

通常のPostgreSQLは行指向（1行ずつ処理）ですが、分析クエリ（「全店舗の月別売上合計」など）では列指向（カラム単位で一括処理）の方が圧倒的に速い。pg_duckdbはその列指向処理をPostgreSQLの中で実現します。

データを別の分析用DBに移す必要がなく、既存のテーブルやビューをそのまま高速に分析できるのが革新的。Supabaseでも対応が進んでおり、AI時代の分析基盤として注目されています。`,
    example: `・100万行の売上データを国別・月別に集計 → 通常10秒 → pg_duckdbで0.5秒\n・過去3年分の予実データを一括で比較分析\n・大量データのJOIN+GROUP BY+ORDER BYが劇的に高速化`,
    relatedTerms: ["postgresql", "supabase", "sql", "database", "etl"],
    difficulty: "advanced",
    quiz: {
      question: "pg_duckdbが分析クエリを速くできる理由は？",
      choices: ["データを圧縮するから", "列指向処理で大量データを一括処理するから", "インデックスを自動作成するから"],
      answer: 1,
      explanation: "pg_duckdbはDuckDBの列指向処理をPostgreSQL内で実現し、大量データの集計・分析クエリを劇的に高速化します。"
    }
  },
  {
    slug: "knowledge-base",
    name: "ナレッジベース",
    nameEn: "Knowledge Base",
    category: "database",
    tagline: "組織の知識を集約したデータベース",
    description: `組織や個人の知識・ノウハウ・手順・FAQを構造化して一箇所に集めたデータベースです。

従来は「社内Wiki」「マニュアルフォルダ」「先輩の頭の中」にバラバラだった知識を、検索可能な形でまとめたもの。AI時代ではベクトル検索と組み合わせることで、「意味で探せるナレッジベース」が実現可能に。

「ナレッジデータを制する者はAI時代を制す」— これは単なるデータ管理ではなく、AIの回答品質を左右する「知識の基盤」を誰が持つかの戦いです。`,
    example: `・過去の監査レポートをベクトル化してAI検索可能なナレッジベースに\n・Supabase + pgvectorで社内FAQの意味検索を構築\n・RAGの「R（Retrieval）」のデータソースがナレッジベース`,
    relatedTerms: ["rag", "pgvector", "vector-db", "embedding", "supabase"],
    difficulty: "beginner",
    quiz: {
      question: "AI時代のナレッジベースの最大の特徴は？",
      choices: ["紙の書類を保管する", "ベクトル検索で意味的に知識を検索できる", "データを暗号化する"],
      answer: 1,
      explanation: "AI時代のナレッジベースはベクトル検索を活用し、キーワード一致ではなく意味的な類似性で知識を検索できます。"
    }
  },
  {
    slug: "semantic-search",
    name: "セマンティック検索",
    nameEn: "Semantic Search",
    category: "database",
    tagline: "「意味」で検索する次世代の検索技術",
    description: `従来のキーワード検索が「文字の一致」で探すのに対し、セマンティック検索は「意味の近さ」で探す技術です。

「売上が下がった原因」で検索したら「減収要因の分析レポート」「業績悪化の背景」もヒットする。これがセマンティック検索の力です。

仕組みはシンプル：テキストをAIでベクトル（数値配列）に変換し、ベクトル間の距離（コサイン類似度など）で近いものを返す。Supabaseのpgvector + OpenAI/Claudeの Embedding APIで構築可能。`,
    example: `・「お客様が怒っている事例」で検索 →「クレーム対応報告」「満足度低下の分析」がヒット\n・英語で検索しても日本語の関連文書がヒット（多言語ベクトルの場合）\n・Googleの検索結果もセマンティック検索が活用されている`,
    relatedTerms: ["pgvector", "embedding", "vector-db", "rag", "knowledge-base"],
    difficulty: "intermediate",
    quiz: {
      question: "セマンティック検索とキーワード検索の違いは？",
      choices: ["速度が違う", "文字の一致ではなく意味の近さで検索する", "画像だけを検索する"],
      answer: 1,
      explanation: "セマンティック検索はテキストを数値ベクトルに変換し、意味的な類似度で検索する技術です。"
    }
  },
  {
    slug: "realtime-db",
    name: "リアルタイムDB",
    nameEn: "Realtime Database",
    category: "database",
    tagline: "データの変更が瞬時に全端末に反映される",
    description: `データベースの変更がリアルタイムで全クライアントに通知される仕組みです。

チャットアプリで「相手がメッセージを送った瞬間に表示される」のがリアルタイムDBの典型。Supabaseにはリアルタイム機能が組み込まれており、テーブルのINSERT/UPDATE/DELETEをWebSocket経由で即座に購読（サブスクライブ）できます。

ダッシュボードの自動更新、在庫数のリアルタイム表示、店舗の売上速報など、ビジネスでの活用場面は多いです。`,
    example: `・売上データが登録された瞬間にダッシュボードが自動更新\n・監査の完了通知が関係者全員にリアルタイムで届く\n・在庫数の変動をリアルタイムでモニタリング`,
    relatedTerms: ["supabase", "webhook", "database", "api"],
    difficulty: "intermediate",
    quiz: {
      question: "Supabaseのリアルタイム機能は何の技術を使っている？",
      choices: ["メール通知", "WebSocket", "RSS"],
      answer: 1,
      explanation: "SupabaseはWebSocket経由でテーブルの変更をリアルタイムにクライアントへ通知します。"
    }
  },
  {
    slug: "agent-skills",
    name: "Agent Skills（エージェントスキル）",
    nameEn: "Agent Skills",
    category: "database",
    tagline: "SupabaseのAIエージェント向け新機能",
    description: `2026年にSupabaseが発表した、AIエージェントがデータベースを直接操作するための機能セットです。

従来はAIがDBを使うにはMCPやAPI経由で接続する必要がありましたが、Agent SkillsはAIエージェントに「データベース操作のスキル」を直接付与する発想。CRUD操作、クエリ実行、スキーマ管理がエージェント向けに最適化されています。

Claude CoworkやDispatchからSupabaseを操作する際、Agent Skillsを活用することでより高度なデータ操作が可能になります。`,
    example: `・AIエージェントが自律的に新しいテーブルを設計・作成\n・定期的なデータクリーニングをエージェントに任せる\n・複数テーブルにまたがる複雑な分析をエージェントが自動実行`,
    relatedTerms: ["supabase", "ai-agent", "mcp", "skill", "database"],
    difficulty: "advanced",
    quiz: {
      question: "Supabase Agent Skillsの目的は？",
      choices: ["人間がSQLを書きやすくする", "AIエージェントがDB操作を直接実行できるようにする", "データをバックアップする"],
      answer: 1,
      explanation: "Agent SkillsはAIエージェントにデータベース操作能力を直接付与し、自律的なデータ管理を可能にする機能です。"
    }
  },
  {
    slug: "langgraph",
    name: "LangGraph（ランググラフ）",
    nameEn: "LangGraph",
    category: "database",
    tagline: "AIエージェントのワークフローを設計するフレームワーク",
    description: `LangChainチームが開発した、AIエージェントの複雑なワークフローをグラフ（有向グラフ）で設計・実行するフレームワークです。

「状態を持つマルチステップのAIエージェント」を構築できるのが特徴。単純な質問→回答だけでなく、「調査→分析→レポート作成→レビュー→修正」といった複数ステップのワークフローをコードで表現できます。

Supabaseと組み合わせると、エージェントの「メモリ」（過去の会話・学習結果）をDBに永続化でき、セッションをまたいで知識を蓄積するエージェントが作れます。`,
    example: `・監査データを取得→異常値を検出→レポートを生成→Slackに通知するワークフロー\n・エージェントの会話履歴をSupabaseに保存して文脈を維持\n・複数のAIモデルを切り替えながら最適な回答を生成`,
    relatedTerms: ["ai-agent", "rag", "supabase", "knowledge-base", "workflow-automation"],
    difficulty: "advanced",
    quiz: {
      question: "LangGraphの「グラフ」とは何を表す？",
      choices: ["チャートやグラフ", "AIワークフローの状態遷移", "データベースのER図"],
      answer: 1,
      explanation: "LangGraphの「グラフ」はAIエージェントのワークフローを有向グラフとして表現し、複雑な状態遷移を管理します。"
    }
  },

  // ─── データ分析基礎 ─────────────────────────────────────────────────
  {
    slug: "kpi",
    name: "KPI（重要業績評価指標）",
    nameEn: "Key Performance Indicator",
    category: "database",
    tagline: "目標達成度を測る「ものさし」",
    description: `ビジネスの目標に対して「どれくらい達成できているか」を数値で測る指標です。

例えば飲食店なら「客単価」「リピート率」「原価率」がKPI。ECサイトなら「コンバージョン率」「カート放棄率」「LTV」。

大事なのは「測れること」と「行動に繋がること」。「売上を上げたい」は目標であってKPIではない。「月間新規客数を前月比+10%」がKPIです。

Supabaseにデータを集約すれば、KPIの自動計算ビューを作れる。Claude Coworkに「今月のKPIを出して」と聞くだけで、リアルタイムに数字が返ってくる環境が構築できます。`,
    example: `・飲食チェーンのKPI：客単価、回転率、食材原価率、人件費率\n・ECサイトのKPI：CVR、AOV（平均注文額）、カート放棄率\n・SupabaseにKPIダッシュボード用ビューを作成して自動追跡`,
    relatedTerms: ["dashboard", "view-db", "supabase", "sql"],
    difficulty: "beginner",
    quiz: {
      question: "良いKPIの条件は？",
      choices: ["曖昧で大きな目標であること", "数値で測れて行動に繋がること", "できるだけ多く設定すること"],
      answer: 1,
      explanation: "KPIは数値で測定可能で、具体的な行動改善に繋がる指標であることが重要です。"
    }
  },
  {
    slug: "dashboard",
    name: "ダッシュボード",
    nameEn: "Dashboard",
    category: "database",
    tagline: "データを一目で把握できる「計器盤」",
    description: `複数のKPIやデータをグラフ・チャート・数値で一画面にまとめた可視化ツールです。

車のダッシュボード（速度計・燃料計・回転計）と同じ発想。ビジネスの「速度」「燃料」「エンジン回転」を一目で確認できる。

代表的なツール：Tableau、Looker、Metabase、Grafana。でもClaude Coworkの build-dashboard スキルを使えば、HTMLベースのインタラクティブなダッシュボードを20分で作れます。データソースがSupabaseにあれば、SQL一発で最新データを可視化。`,
    example: `・店舗別の売上・客数・客単価を地図上に表示\n・前年同月比をバーチャートで比較\n・Claude Coworkで「今月の売上ダッシュボードを作って」と指示`,
    relatedTerms: ["kpi", "view-db", "supabase", "data-visualization"],
    difficulty: "beginner",
    quiz: {
      question: "ダッシュボードの最大の価値は？",
      choices: ["データを保存すること", "複数のデータを一目で把握できること", "データを暗号化すること"],
      answer: 1,
      explanation: "ダッシュボードは複数のKPIやデータをグラフ・チャートで一画面にまとめ、瞬時に状況を把握できます。"
    }
  },
  {
    slug: "budget-vs-actual",
    name: "予実管理（予算vs実績）",
    nameEn: "Budget vs Actual Analysis",
    category: "database",
    tagline: "計画と現実のギャップを可視化する",
    description: `予算（Budget）と実績（Actual）を比較して、差異（Variance）を分析する管理手法です。

「予算1,000万円に対して実績が850万円。差異-150万円（達成率85%）。原因は○○」というのが予実管理の基本フォーマット。

Excelでやると地獄です。複数国・複数通貨・複数店舗の予実を毎月手動で突き合わせると2日かかる。

Supabaseなら、budgetsテーブルとactualsテーブルをJOINしたビュー（v_budget_vs_actual）を作るだけ。為替換算も自動。Claude Coworkに「予実差異が大きい国はどこ？」と聞けば10秒で答えが返ります。`,
    example: `・月次の予算vs実績レポートを自動生成\n・国別・店舗別の達成率をヒートマップで可視化\n・差異が±10%を超えたらアラートを出すクエリ`,
    relatedTerms: ["kpi", "view-db", "supabase", "sql", "exchange-rate"],
    difficulty: "intermediate",
    quiz: {
      question: "予実管理で分析する「差異」とは？",
      choices: ["予算と前年の差", "予算と実績の差", "実績と目標の差"],
      answer: 1,
      explanation: "予実管理は予算（Budget）と実績（Actual）の差異（Variance）を分析し、計画と現実のギャップを可視化します。"
    }
  },
  {
    slug: "exchange-rate",
    name: "為替レート管理",
    nameEn: "Exchange Rate Management",
    category: "database",
    tagline: "多通貨データを正しく比較するための基盤",
    description: `グローバルビジネスでは、異なる通貨のデータを同一基準で比較する必要があります。そのための為替レートの管理手法です。

為替レートには複数の種類があり、用途によって使い分けます：
・スポットレート（spot）— その日のリアルタイム為替
・月次平均レート（monthly_avg）— P/L（損益計算書）の換算に使用
・予算レート（budget）— 予算策定時に固定した為替
・期末レート（closing）— B/S（貸借対照表）の換算に使用

Supabaseにexchange_ratesテーブルを作り、通貨ペア×レートタイプ×日付で管理すれば、ビューで自動換算が実現できます。`,
    example: `・USD/JPY, GBP/JPY, AUD/JPY等の月次平均レートを管理\n・予算レートと実績レートの差（為替差異）を自動算出\n・Edge Functionsで為替APIから最新レートを自動取得`,
    relatedTerms: ["budget-vs-actual", "supabase", "view-db", "edge-functions"],
    difficulty: "intermediate",
    quiz: {
      question: "損益計算書（P/L）の換算に通常使われる為替レートは？",
      choices: ["スポットレート", "月次平均レート", "予算レート"],
      answer: 1,
      explanation: "損益計算書の外貨換算には月次平均レートを使用するのが一般的な会計基準です。"
    }
  },
  {
    slug: "data-visualization",
    name: "データビジュアライゼーション",
    nameEn: "Data Visualization",
    category: "database",
    tagline: "データを「見える化」して直感的に伝える技術",
    description: `数値データをグラフ・チャート・マップなどの視覚的な形式に変換して、パターンやトレンドを直感的に理解できるようにする技術です。

人間の脳は表の数字100行を読むより、棒グラフ1枚を見る方が100倍速く理解できます。

主なチャートタイプと使い分け：
・棒グラフ — カテゴリ間の比較（店舗別売上）
・折れ線グラフ — 時系列の変化（月別推移）
・円グラフ — 構成比（売上の国別シェア）
・散布図 — 2変数の関係（客数vs売上）
・ヒートマップ — 密度・強度（曜日×時間帯の来客数）

Claude Coworkのcreate-vizスキルで、Pythonを書かずにプロ品質の可視化が作れます。`,
    example: `・回転寿司4社の売上推移を折れ線グラフで比較\n・国別の営業利益率をヒートマップで表示\n・Claude Coworkに「この売上データをグラフにして」と指示するだけ`,
    relatedTerms: ["dashboard", "kpi", "supabase", "database"],
    difficulty: "beginner",
    quiz: {
      question: "時系列データの推移を見るのに最適なチャートは？",
      choices: ["円グラフ", "折れ線グラフ", "散布図"],
      answer: 1,
      explanation: "時系列データの推移（月別売上など）の可視化には折れ線グラフが最も適しています。"
    }
  },
  {
    slug: "pivot-table",
    name: "ピボットテーブル",
    nameEn: "Pivot Table",
    category: "database",
    tagline: "データを自在に切り口を変えて集計する機能",
    description: `大量のデータを「行」と「列」の軸を自由に入れ替えながら集計・分析できる機能です。Excelのピボットテーブルが最も有名。

「国別×月別の売上」を見たい→ドラッグで軸を変えて「店舗別×四半期別」に切り替え→さらに「商品カテゴリ別×年別」に…。これがピボットの力。

SQLでは GROUP BY + CASE WHEN でピボットに相当する集計ができます。Supabaseにデータがあれば、Claude Coworkに「国別月別の売上をピボットで見せて」と頼むだけ。`,
    example: `・Excelのピボットテーブルで売上の多角的分析\n・SQLのGROUP BYで国別×月別の売上集計\n・NocoDBのピボットビューで視覚的にデータを整理`,
    relatedTerms: ["sql", "view-db", "nocodb", "dashboard"],
    difficulty: "beginner",
    quiz: {
      question: "ピボットテーブルの最大の特徴は？",
      choices: ["データを削除できること", "集計の軸を自由に入れ替えられること", "グラフを自動生成すること"],
      answer: 1,
      explanation: "ピボットテーブルは行・列の軸を自由に切り替えながら、同じデータを様々な角度から集計・分析できます。"
    }
  },
  {
    slug: "join-sql",
    name: "JOIN（テーブル結合）",
    nameEn: "SQL JOIN",
    category: "database",
    tagline: "複数のテーブルを「つなげる」SQL操作",
    description: `2つ以上のテーブルを共通のカラム（キー）で結合して、1つの結果セットとして取得するSQL操作です。

リレーショナルデータベースの真骨頂。「店舗テーブル」と「売上テーブル」をstore_idでJOINすれば「店舗名つきの売上データ」が手に入る。

主なJOINの種類：
・INNER JOIN — 両方にあるデータだけ（交差部分）
・LEFT JOIN — 左テーブルは全部残す（売上がない店舗も表示）
・RIGHT JOIN — 右テーブルは全部残す
・FULL OUTER JOIN — 両方全部残す
・CROSS JOIN — すべての組み合わせ

Claude Coworkに「storesとactualsを結合して国別売上を出して」と言えば、適切なJOINを自動生成します。`,
    example: `・SELECT s.name, a.revenue FROM stores s JOIN actuals a ON s.store_id = a.store_id\n・3テーブル結合：stores + actuals + exchange_rates で為替換算済み売上\n・LEFT JOINで「売上データがまだない新規店舗」も含めて一覧表示`,
    relatedTerms: ["sql", "foreign-key", "view-db", "database"],
    difficulty: "intermediate",
    quiz: {
      question: "LEFT JOINの特徴は？",
      choices: ["両方のテーブルの共通部分だけ返す", "左テーブルのデータを全て残す", "右テーブルのデータを全て残す"],
      answer: 1,
      explanation: "LEFT JOINは左テーブルの全行を保持し、右テーブルに一致するデータがない場合はNULLで埋めます。"
    }
  },
  {
    slug: "group-by",
    name: "GROUP BY（グループ集計）",
    nameEn: "SQL GROUP BY",
    category: "database",
    tagline: "データを「まとめて」集計するSQLの基本",
    description: `SQLでデータをグループ化して集計関数（SUM, AVG, COUNT, MAX, MIN）と組み合わせる構文です。

Excelの「小計」や「SUMIF」に相当する操作をSQLで行います。

例：「国別の売上合計」
SELECT country, SUM(revenue) FROM actuals GROUP BY country

これだけで全店舗のデータが国別にまとまります。ORDER BY を付ければ売上順にソート。HAVING を付ければ「売上1億円以上の国だけ」にフィルタ。

GROUP BYはデータ分析の基本中の基本。これが書けるだけで、Excelの手作業の80%は不要になります。`,
    example: `・国別売上合計：GROUP BY country\n・月別×店舗別の客数：GROUP BY month, store_id\n・売上1億円以上の国だけ：HAVING SUM(revenue) > 100000000`,
    relatedTerms: ["sql", "join-sql", "view-db", "pivot-table"],
    difficulty: "beginner",
    quiz: {
      question: "GROUP BYと一緒に使う「HAVING」の役割は？",
      choices: ["グループ化する前にフィルタする", "グループ化した後の集計結果をフィルタする", "ソート順を決める"],
      answer: 1,
      explanation: "HAVINGはGROUP BYで集計した後の結果に対してフィルタ条件を指定します。WHEREはグループ化前のフィルタです。"
    }
  },
  {
    slug: "window-function",
    name: "ウィンドウ関数",
    nameEn: "Window Function",
    category: "database",
    tagline: "行を集約せずに集計値を使える上級SQL",
    description: `GROUP BYと違い、行を集約（まとめ）ることなく、各行に集計結果を付加できるSQLの上級機能です。

例えば「各店舗の売上」と「国全体の売上平均」を同じ行に並べたい場合：
SELECT store_name, revenue, AVG(revenue) OVER (PARTITION BY country) as country_avg
FROM actuals

これで各行に「その店舗の売上」と「その国の平均売上」が両方表示される。GROUP BYでは不可能な芸当です。

代表的なウィンドウ関数：
・ROW_NUMBER() — 連番を振る
・RANK() — 順位付け
・LAG() / LEAD() — 前後の行の値を取得（前月比に便利）
・SUM() OVER — 累計`,
    example: `・店舗の売上ランキング：ROW_NUMBER() OVER (ORDER BY revenue DESC)\n・前月比計算：LAG(revenue) OVER (ORDER BY month)\n・国内での売上シェア：revenue / SUM(revenue) OVER (PARTITION BY country)`,
    relatedTerms: ["sql", "group-by", "view-db", "database"],
    difficulty: "advanced",
    quiz: {
      question: "ウィンドウ関数とGROUP BYの最大の違いは？",
      choices: ["速度が違う", "行を集約せずに集計値を使える", "使えるデータ型が違う"],
      answer: 1,
      explanation: "ウィンドウ関数は行をグループ化（集約）せず、各行に対して集計結果を付加できるのが最大の特徴です。"
    }
  },
  {
    slug: "cte",
    name: "CTE（共通テーブル式）",
    nameEn: "Common Table Expression",
    category: "database",
    tagline: "SQLの「中間計算」を読みやすく書く技法",
    description: `WITH句を使って、SQLクエリの中に名前付きの中間結果（サブクエリ）を定義する書き方です。

複雑なSQLを書くとき、サブクエリをネスト（入れ子）にすると読めなくなります。CTEなら「ステップ1の結果→ステップ2で使う→ステップ3で最終結果」と、上から下に読める。

WITH monthly_totals AS (
  SELECT month, SUM(revenue) as total FROM actuals GROUP BY month
),
budget_data AS (
  SELECT month, SUM(amount) as budget FROM budgets GROUP BY month
)
SELECT m.month, m.total, b.budget, m.total - b.budget as variance
FROM monthly_totals m JOIN budget_data b ON m.month = b.month

Claude Coworkに複雑な分析を頼むと、CTEを使った読みやすいSQLを自動生成してくれます。`,
    example: `・予実比較をCTEで段階的に計算\n・複数テーブルの集計結果をCTEで整理してからJOIN\n・再帰CTE（WITH RECURSIVE）で組織階層を展開`,
    relatedTerms: ["sql", "join-sql", "group-by", "view-db"],
    difficulty: "advanced",
    quiz: {
      question: "CTEの最大のメリットは？",
      choices: ["クエリの実行速度が上がる", "複雑なクエリを読みやすく段階的に書ける", "データを永続的に保存できる"],
      answer: 1,
      explanation: "CTEはWITH句で中間結果に名前を付け、複雑なクエリを上から下に読める段階的な構造で書けるようにします。"
    }
  },
  {
    slug: "aggregation",
    name: "集計関数（Aggregate Functions）",
    nameEn: "Aggregate Functions",
    category: "database",
    tagline: "SUM, AVG, COUNT — データをまとめて計算する関数群",
    description: `複数の行を1つの値にまとめる（集約する）SQLの関数です。

基本の5大関数：
・SUM() — 合計（売上合計）
・AVG() — 平均（平均客単価）
・COUNT() — 件数（店舗数）
・MAX() — 最大値（最高売上）
・MIN() — 最小値（最低評価スコア）

GROUP BYと組み合わせれば「国別の売上合計」「月別の平均客単価」「カテゴリ別の店舗数」が一行のSQLで出せます。

Excelの SUMIF, AVERAGEIF, COUNTIF に相当しますが、SQLの方がはるかに高速で大量データを扱えます。`,
    example: `・SELECT COUNT(*) FROM stores WHERE country = 'JP' → 日本の店舗数\n・SELECT AVG(revenue) FROM actuals WHERE month = '2026-03' → 3月の平均売上\n・SELECT country, SUM(revenue), AVG(revenue) FROM actuals GROUP BY country`,
    relatedTerms: ["sql", "group-by", "window-function", "view-db"],
    difficulty: "beginner",
    quiz: {
      question: "SQLで「平均値」を求める関数は？",
      choices: ["SUM()", "AVG()", "COUNT()"],
      answer: 1,
      explanation: "AVG()は対象カラムの平均値を計算する集計関数です。"
    }
  },
  {
    slug: "yoy-comparison",
    name: "前年同月比（YoY）",
    nameEn: "Year-over-Year Comparison",
    category: "database",
    tagline: "去年の同じ月と比べてどうか？を測る指標",
    description: `今年の数値を去年の同じ月の数値と比較する分析手法です。YoY = Year over Year。

季節変動がある業種（飲食、小売、観光など）では月次比較（前月比）より前年同月比の方が正確にトレンドを把握できます。12月は忘年会で売上が上がるのは当然。問題は「去年の12月と比べてどうか」。

SQLではLAG()ウィンドウ関数やサブクエリで計算できます：
(今月の売上 - 去年同月の売上) / 去年同月の売上 × 100 = YoY成長率%

Supabaseのビューに組み込めば、毎月自動でYoY比較が更新されます。`,
    example: `・売上YoY: (2026年3月 - 2025年3月) / 2025年3月 × 100\n・「スシローの売上は前年同月比+5.2%」のような分析\n・LAG(revenue, 12) OVER (ORDER BY month) で12ヶ月前の値を取得`,
    relatedTerms: ["kpi", "budget-vs-actual", "window-function", "sql"],
    difficulty: "intermediate",
    quiz: {
      question: "飲食業界で前月比より前年同月比が重要な理由は？",
      choices: ["計算が簡単だから", "季節変動を排除して正確にトレンドを把握できるから", "税務上の要件だから"],
      answer: 1,
      explanation: "飲食業は季節変動が大きいため、前月比では正確なトレンドが見えません。前年同月比なら季節要因を排除して純粋な成長を測れます。"
    }
  },
  {
    slug: "fiscal-year",
    name: "決算期（Fiscal Year）",
    nameEn: "Fiscal Year",
    category: "database",
    tagline: "会社の「1年」は1月始まりとは限らない",
    description: `企業が財務報告のために定める会計年度の区切りです。日本では3月決算（4月〜3月）が最も多いですが、企業によって異なります。

回転寿司業界の例：
・元気寿司 → 3月決算（4月〜翌3月）
・スシロー → 9月決算（10月〜翌9月）
・くら寿司 → 10月決算（11月〜翌10月）
・はま寿司（ゼンショー）→ 3月決算

異なる決算期の企業を比較するには「暦年（Calendar Year）」への変換が必要。これがデータベース設計で重要になるポイントです。Supabaseでは変換ロジックをビューに組み込むことで、自動的に暦年ベースで比較可能になります。`,
    example: `・3月決算のFY2025 → CY2024（暦年2024相当）に変換\n・9月決算のFY2025 → CY2025（暦年2025相当）に変換\n・v_sushi_comparisonビューで決算期の違いを吸収して比較`,
    relatedTerms: ["budget-vs-actual", "yoy-comparison", "view-db", "supabase"],
    difficulty: "intermediate",
    quiz: {
      question: "異なる決算期の企業を正しく比較するには？",
      choices: ["決算期の数字をそのまま比較する", "暦年（Calendar Year）に変換して比較する", "比較しない"],
      answer: 1,
      explanation: "決算期が異なる企業の財務データは暦年（Calendar Year）ベースに変換することで、同一期間での正確な比較が可能になります。"
    }
  },
  {
    slug: "normalization",
    name: "正規化",
    nameEn: "Database Normalization",
    category: "database",
    tagline: "データの重複をなくして矛盾を防ぐ設計原則",
    description: `データベースのテーブル設計で、データの重複（冗長性）をなくし、矛盾（不整合）を防ぐための設計原則です。

悪い例：売上テーブルに「店舗名」「住所」「電話番号」を毎行入れる → 店舗が移転したら全行を修正する必要がある（更新異常）。

良い例：店舗情報は「storesテーブル」に1回だけ保存。売上テーブルはstore_id（外部キー）で参照 → 店舗情報の変更は1箇所でOK。

正規化の段階：
・第1正規形（1NF）— 繰り返しグループをなくす
・第2正規形（2NF）— 部分関数従属を除去
・第3正規形（3NF）— 推移的関数従属を除去

実務では第3正規形まで意識すれば十分です。`,
    example: `・stores, budgets, actuals, auditsを分離して外部キーで結合\n・為替レートを別テーブル（exchange_rates）に正規化\n・「店舗名」は stores テーブルに1回だけ保存し、他テーブルは store_id で参照`,
    relatedTerms: ["schema", "foreign-key", "database", "supabase"],
    difficulty: "intermediate",
    quiz: {
      question: "正規化の主な目的は？",
      choices: ["クエリを高速化する", "データの重複をなくし矛盾を防ぐ", "テーブル数を減らす"],
      answer: 1,
      explanation: "正規化はデータの重複（冗長性）を排除し、更新時の矛盾（不整合）を防ぐための設計原則です。"
    }
  },
  {
    slug: "data-type",
    name: "データ型",
    nameEn: "Data Type",
    category: "database",
    tagline: "「この列には数字しか入れない」を決めるルール",
    description: `データベースの各カラム（列）に保存できるデータの種類を定義するルールです。

Excelでは同じセルに数字も文字も入りますが、データベースでは型を厳密に決めます。これにより「売上の列に文字が紛れ込む」事故を防げます。

PostgreSQL/Supabaseの主要データ型：
・TEXT / VARCHAR — 文字列（店舗名、国コード）
・INTEGER / BIGINT — 整数（店舗数、客数）
・NUMERIC(p,s) — 精密小数（金額、為替レート）← 金融データはこれ必須
・BOOLEAN — true/false（フラグ）
・DATE / TIMESTAMP — 日付・日時
・UUID — ユニークID（主キーに推奨）
・JSONB — JSON形式のデータ（柔軟な構造データ）

特にNUMERIC型は金融データに必須。FLOAT型だと0.1+0.2=0.30000000000000004になる浮動小数点誤差が出ます。`,
    example: `・revenue NUMERIC(15,2) → 最大13桁の整数部+小数2桁（9,999,999,999,999.99まで）\n・store_id UUID → 重複のない一意ID\n・is_active BOOLEAN → 営業中/休止中のフラグ`,
    relatedTerms: ["schema", "sql", "postgresql", "supabase"],
    difficulty: "beginner",
    quiz: {
      question: "金融データ（売上、為替レート等）に最適なデータ型は？",
      choices: ["FLOAT", "INTEGER", "NUMERIC"],
      answer: 2,
      explanation: "NUMERIC型は精度が保証される固定小数点型で、浮動小数点誤差のないFLOATと違い金融データに最適です。"
    }
  },
  {
    slug: "null-handling",
    name: "NULL処理",
    nameEn: "NULL Handling",
    category: "database",
    tagline: "「データがない」を正しく扱う技術",
    description: `NULLは「値が存在しない」「不明」を表すデータベースの特別な値です。0でも空文字でもない。「わからない」です。

NULL処理を間違えると分析結果がおかしくなります：
・SUM()にNULLが混じると → NULLの行は無視される（意図通り？）
・AVG()にNULLが混じると → 件数から除外される（分母が変わる！）
・NULL = NULL は FALSE → 比較にはIS NULLを使う

対処法：
・COALESCE(value, 0) — NULLなら0に置換
・NULLIF(a, b) — aとbが同じならNULLにする
・WHERE column IS NOT NULL — NULLを除外

データ品質の根幹に関わる重要トピックです。`,
    example: `・COALESCE(revenue, 0) で売上NULLを0として集計\n・AVG(NULLIF(score, 0)) で0点をNULLに変換してから平均計算\n・WHERE audit_date IS NOT NULL で未監査店舗を除外`,
    relatedTerms: ["sql", "data-type", "aggregation", "database"],
    difficulty: "intermediate",
    quiz: {
      question: "SQLでNULLかどうかを判定するには？",
      choices: ["column = NULL", "column IS NULL", "column == NULL"],
      answer: 1,
      explanation: "SQLではNULLの判定にIS NULLを使います。= NULLは常にFALSE（NULLとの比較はすべてNULL）になるため正しく動きません。"
    }
  },
  {
    slug: "data-quality",
    name: "データ品質",
    nameEn: "Data Quality",
    category: "database",
    tagline: "ゴミを入れたらゴミが出る（GIGO）",
    description: `データの正確性・完全性・一貫性・鮮度を指す概念です。GIGO（Garbage In, Garbage Out）— 質の低いデータからは質の低い分析しか出ません。

データ品質の5つの軸：
・正確性（Accuracy）— データが事実と一致しているか
・完全性（Completeness）— 欠損データがないか
・一貫性（Consistency）— 同じものが同じ表記か（「東京」と「Tokyo」の混在等）
・適時性（Timeliness）— データが最新か
・一意性（Uniqueness）— 重複がないか

Supabaseではチェック制約（CHECK）、NOT NULL制約、UNIQUE制約、外部キー制約でデータ品質をDB層で担保できます。アプリ側で防ぐよりDB側で防ぐ方が確実。`,
    example: `・CHECK (revenue >= 0) で売上にマイナスが入るのを防ぐ\n・NOT NULL制約で必須項目の入力漏れを防ぐ\n・UNIQUE制約で同じ店舗IDの重複登録を防ぐ`,
    relatedTerms: ["null-handling", "normalization", "schema", "supabase"],
    difficulty: "intermediate",
    quiz: {
      question: "GIGOとは何の略？",
      choices: ["Global Input Global Output", "Garbage In Garbage Out", "Great Input Great Output"],
      answer: 1,
      explanation: "GIGO（Garbage In, Garbage Out）は「ゴミを入れたらゴミが出る」の意味。データ品質の重要性を表す格言です。"
    }
  },
  {
    slug: "stored-procedure",
    name: "ストアドプロシージャ",
    nameEn: "Stored Procedure",
    category: "database",
    tagline: "DB内に保存して繰り返し実行できるプログラム",
    description: `データベースの中に保存された、繰り返し実行可能なSQL処理のまとまりです。

通常のSQLが「命令を1回送る」なら、ストアドプロシージャは「一連の命令をまとめてDB内に保存し、名前で呼び出す」仕組み。

PostgreSQL/Supabaseでは「関数（Function）」として実装します：
CREATE FUNCTION calculate_royalty(store_id UUID, month DATE)
RETURNS NUMERIC AS $$ ... $$ LANGUAGE plpgsql;

メリット：
・複雑な計算ロジックをDB側に集約
・アプリから1回の呼び出しで済む
・ネットワーク往復が減って高速
・権限管理がしやすい`,
    example: `・ロイヤリティ計算関数：売上×料率を自動計算\n・月次決算バッチ：為替レート取得→換算→集計を一括実行\n・Claude Coworkから「先月のロイヤリティを計算して」で関数を呼び出し`,
    relatedTerms: ["sql", "postgresql", "supabase", "edge-functions"],
    difficulty: "advanced",
    quiz: {
      question: "ストアドプロシージャのメリットは？",
      choices: ["データを暗号化できる", "複雑な処理をDB側に集約して高速実行できる", "テーブルを自動作成できる"],
      answer: 1,
      explanation: "ストアドプロシージャは複雑な処理をDB側にまとめることで、ネットワーク往復を減らし高速に実行できます。"
    }
  },
  {
    slug: "trigger-db",
    name: "トリガー（データベース）",
    nameEn: "Database Trigger",
    category: "database",
    tagline: "データ変更時に自動実行される処理",
    description: `テーブルのデータがINSERT/UPDATE/DELETEされたとき、自動的に実行されるプログラムです。

「監視カメラ」のようなもの。データに変化があったら自動で反応する。

使用例：
・売上データが追加されたら → 自動でKPI集計テーブルを更新
・監査スコアが基準値以下なら → アラートテーブルにレコード追加
・為替レートが更新されたら → 関連するビューのキャッシュを無効化

PostgreSQL/Supabaseでは CREATE TRIGGER + 関数で実装。ただし多用するとデバッグが難しくなるので、本当に必要な場面でだけ使うのがベストプラクティス。`,
    example: `・AFTER INSERT ON actuals → KPIサマリーテーブルを自動更新\n・BEFORE UPDATE ON audits → 変更前の値を監査ログテーブルに保存\n・AFTER UPDATE ON exchange_rates → 為替変更通知をリアルタイムDBで配信`,
    relatedTerms: ["stored-procedure", "postgresql", "supabase", "realtime-db"],
    difficulty: "advanced",
    quiz: {
      question: "データベーストリガーはいつ実行される？",
      choices: ["手動で呼び出した時", "データがINSERT/UPDATE/DELETEされた時", "毎日決まった時間に"],
      answer: 1,
      explanation: "トリガーはテーブルのデータが変更（INSERT/UPDATE/DELETE）されたタイミングで自動的に実行されます。"
    }
  },
  {
    slug: "transaction",
    name: "トランザクション",
    nameEn: "Transaction",
    category: "database",
    tagline: "「全部成功か全部取消か」を保証する仕組み",
    description: `複数のDB操作を「一つのまとまり」として実行し、すべて成功するか、すべて取り消すかを保証する仕組みです。

銀行の送金で例えると：
1. Aさんの口座から-10万円
2. Bさんの口座に+10万円

もし(1)だけ成功して(2)が失敗したら、10万円が消える。トランザクションがあれば、(2)が失敗した場合(1)も自動的に取り消されて安全。

BEGIN;
  UPDATE accounts SET balance = balance - 100000 WHERE id = 'A';
  UPDATE accounts SET balance = balance + 100000 WHERE id = 'B';
COMMIT;  -- 全部成功 or ROLLBACK; で全取消

ACID特性（Atomicity, Consistency, Isolation, Durability）がトランザクションの4つの保証です。`,
    example: `・ロイヤリティ計算：売上確定→ロイヤリティ計算→請求書作成を一括処理\n・月次データ更新：古いデータ削除→新データ挿入をトランザクションで安全に\n・PostgreSQL/Supabaseは完全なACIDトランザクションをサポート`,
    relatedTerms: ["sql", "postgresql", "database", "stored-procedure"],
    difficulty: "advanced",
    quiz: {
      question: "トランザクションのACIDの「A」は何を意味する？",
      choices: ["Availability（可用性）", "Atomicity（原子性 = 全部成功か全部取消）", "Authentication（認証）"],
      answer: 1,
      explanation: "Atomicity（原子性）はトランザクション内の操作が「全部成功するか全部取り消されるか」のどちらかであることを保証します。"
    }
  },
];
