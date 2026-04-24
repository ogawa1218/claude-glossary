import { Term } from "./glossary";

/**
 * batch11 — LLM応用 / データ分析 / MLOps / Python / ベクトルDB (100 terms)
 * Claude Code・Codex 時代の開発で「知らないと詰まる」周辺語の締めくくり。
 */
export const batch11: Term[] = [
  // ─── LLMOps / AI アプリ開発 ────────────────────────────
  { id: "langchain", name: "LangChain", englishName: "LangChain", category: "AI基礎", description: "LLMアプリを部品化して組み立てるフレームワーク。プロンプト・RAG・エージェント・メモリなどを共通IFで扱える。賑やかな反面、薄く抽象化された層が多い。", example: "LangChainでRetriever→LLM→出力パーサの組み立てを数十行書けば、RAGの最小構成が動く。" },
  { id: "llamaindex", name: "LlamaIndex", englishName: "LlamaIndex", category: "AI基礎", description: "ドキュメント検索・インデックス構築に強いLLMフレームワーク。PDF・Notion・DBなど多数のコネクタと、階層インデックス／再質問などRAG特化の機能が豊富。", example: "社内Wikiを丸ごとLlamaIndexに食わせれば、複雑なRAG Botが1日で立ち上がる。" },
  { id: "litellm", name: "LiteLLM", englishName: "LiteLLM", category: "AI基礎", description: "OpenAI・Anthropic・Gemini・ローカルLLMを同じインターフェイスで呼べるプロキシ/SDK。モデルを差し替えやすく、コスト比較・A/Bが楽になる。", example: "`litellm.completion(model='claude-opus-4-7', …)` と `model='gpt-4o'` を切り替えるだけで横比較ができる。" },
  { id: "ollama", name: "Ollama", englishName: "Ollama", category: "AI基礎", description: "ローカルPCでLLMを動かすランタイム。`ollama run llama3` でモデルをダウンロード→即起動。Claude APIを叩けない環境や機密データ対応に便利。", example: "機密データを外に出せない部門では、Ollamaでローカル80Bモデルを回して社内だけで推論する構成が増えている。" },
  { id: "vllm", name: "vLLM", englishName: "vLLM", category: "AI基礎", description: "LLM推論を高速化するOSSエンジン。PagedAttentionで同時リクエスト多数でもスループットが落ちにくく、自社ホスティングの定番。", example: "自前GPUサーバーでLLaMA 70BをvLLMで動かすと、連続バッチ処理で原始Pythonより数倍速くなる。" },
  { id: "inference-server", name: "推論サーバー", englishName: "Inference Server", category: "AI基礎", description: "学習済みモデルをAPI化して提供するサーバー。Triton Inference Server、TorchServe、vLLMなどがある。HTTPやgRPCで呼ばれる。", example: "Tritonサーバー1台で、画像認識モデル・音声認識モデル・埋め込みモデルを同時にホスト可能。" },
  { id: "prompt-versioning", name: "プロンプトバージョニング", englishName: "Prompt Versioning", category: "AI基礎", description: "プロンプトをgitやPromptLayerなどでバージョン管理する考え方。リグレッションや改善効果を追跡できる。LLMOpsの基本。", example: "システムプロンプトを変えたらバージョンを上げ、評価スコアとセットで保存すると改悪を防げる。" },
  { id: "prompt-flow", name: "Prompt Flow", englishName: "Prompt Flow", category: "AI基礎", description: "MicrosoftのLLMワークフロー可視化ツール。ノード単位でプロンプト・ツール・PythonをつなぎA/Bテスト・評価を回せる。", example: "RAG→要約→校正の3段階をPrompt Flowで作り、各ノードの出力を比較しながら改善する。" },
  { id: "langsmith", name: "LangSmith", englishName: "LangSmith", category: "AI基礎", description: "LangChain開発元が提供するLLM監視・評価SaaS。本番の会話ログとトレースを集約し、プロンプトと出力をセットで分析できる。", example: "本番でユーザーがClaudeにどんな質問をしたか、LangSmithのダッシュボードで失敗例を毎週レビューする。" },
  { id: "helicone", name: "Helicone", englishName: "Helicone", category: "AI基礎", description: "OpenAI/AnthropicのAPI呼び出しを1行で計装できるLLM監視SaaS。コスト・失敗率・レイテンシの可視化が数分で始まる。", example: "ベースURLをHeliconeのプロキシに差し替えるだけで、Claude API全呼び出しの詳細レポートが見られるようになる。" },

  // ─── ベクトルDB ──────────────────────────────────────────
  { id: "vector-db", name: "ベクトルDB", englishName: "Vector Database", category: "AI基礎", description: "埋め込みベクトルを保存し、類似度検索に特化したDB。RAGやレコメンドの基盤。pgvector、Pinecone、Weaviate、Qdrant、Chromaなど。", example: "記事の埋め込みをベクトルDBに保存すれば「この記事に似ている記事」の推薦が1クエリでできる。" },
  { id: "pinecone", name: "Pinecone", englishName: "Pinecone", category: "AI基礎", description: "フルマネージドなSaaSベクトルDB。1億件超のベクトルでも数十msで返す。面倒なインフラを抱えたくない場合の第一選択。", example: "Pineconeにドキュメントの埋め込みを入れて、`vectorstore.query(…)`で類似記事検索が即できる。" },
  { id: "weaviate", name: "Weaviate", englishName: "Weaviate", category: "AI基礎", description: "OSSのベクトルDB。自前ホストとクラウド両方で使え、ハイブリッド検索・GraphQL APIを標準装備。スキーマベースの設計が特徴。", example: "自社クラウドにWeaviateを立て、社内文書検索をキーワード＋ベクトルのハイブリッドで運用する。" },
  { id: "qdrant", name: "Qdrant", englishName: "Qdrant", category: "AI基礎", description: "Rust製の高速ベクトルDB。フィルタ付き検索が強く、軽量セルフホストから大規模SaaSまで広く使われる。", example: "Qdrantは「タグで絞り込んでから類似度検索」のような複合検索が得意で、ECの推薦基盤で採用が多い。" },
  { id: "chroma-db", name: "Chroma", englishName: "Chroma", category: "AI基礎", description: "小規模・ローカルに強いOSSベクトルDB。Pythonから数行でセットアップでき、プロトタイピングやノートブックワークに最適。", example: "Jupyter Notebookの中で `chromadb.Client()` と書くだけで、即座にベクトル検索の実験ができる。" },
  { id: "faiss", name: "FAISS", englishName: "FAISS", category: "AI基礎", description: "Meta製の類似度検索ライブラリ。DBというより「配列の中で近いベクトルを高速に探すCPU/GPUライブラリ」。学術系で根強い人気。", example: "1000万件のベクトル検索をGPU FAISSで数msに短縮する、という研究ベンチマークで定番。" },
  { id: "cosine-similarity", name: "コサイン類似度", englishName: "Cosine Similarity", category: "AI基礎", description: "2つのベクトルの「向き」の近さで類似度を測る指標。−1〜1の値を取り、1に近いほど意味が近い。pgvectorの `<=>` 演算子もこれ。", example: "文章Aと文章Bの埋め込みのコサイン類似度が0.92なら「ほぼ同じ意味」と判断できる。" },
  { id: "dot-product-similarity", name: "内積類似度", englishName: "Dot Product Similarity", category: "AI基礎", description: "ベクトルの内積を直接類似度として使う。OpenAIの埋め込みは正規化済みなので、コサイン類似度と実質同じになる。", example: "ベクトルが正規化済みと分かっている場合、`A · B`で類似度計算すると最小コストで済む。" },
  { id: "euclidean-distance", name: "ユークリッド距離", englishName: "Euclidean Distance (L2)", category: "AI基礎", description: "ベクトル空間上の2点間の直線距離。画像特徴量の比較などで使われる。小さいほど似ている。", example: "顔認識モデルの埋め込みは「ユークリッド距離が0.6未満なら同一人物」と閾値で判定するのが一般的。" },
  { id: "hnsw", name: "HNSW", englishName: "Hierarchical Navigable Small World", category: "AI基礎", description: "ベクトルDBで最もよく使われる近似近傍探索アルゴリズム。グラフ構造で階層化し、数百万件から瞬時に近い点を拾える。", example: "pgvector・Qdrant・Weaviateがデフォルトで採用しているインデックスがHNSW。" },
  { id: "ann", name: "近似近傍探索（ANN）", englishName: "Approximate Nearest Neighbor", category: "AI基礎", description: "完全正解ではなく「ほぼ最も近いもの」を高速に探す手法の総称。完全探索は大規模では現実的でなく、ANNが事実上標準。", example: "1億件から「ほぼ最近傍100件」をANNで数msで返す、のがRAGのSLAを支えている。" },

  // ─── モデルチューニング ─────────────────────────────────
  { id: "lora", name: "LoRA", englishName: "Low-Rank Adaptation", category: "AI基礎", description: "大規模モデルを低コストで追加学習する手法。全パラメータを更新せず「小さな追加行列」だけ学習することでメモリも時間も大幅削減。", example: "LLaMA 70Bに社内文体を覚えさせる場合、LoRAなら1枚のGPUと数時間で個別チューニングが可能。" },
  { id: "qlora", name: "QLoRA", englishName: "Quantized LoRA", category: "AI基礎", description: "LoRAを量子化（4bit）と組み合わせて、さらに省メモリ化した手法。単体GPUでも大きなモデルをチューニング可能に。", example: "QLoRAなら、個人のRTX 4090でLlama 70BをFine-tuneすることすら現実的になる。" },
  { id: "rlhf", name: "RLHF", englishName: "Reinforcement Learning from Human Feedback", category: "AI基礎", description: "人間の評価をもとに強化学習でモデルの出力傾向を調整する手法。ChatGPT・Claudeの初期調律の中核技術。", example: "RLHFを適用していないLLMは「それっぽいが不快な答え」を返しがち。人間フィードバックで有用性と安全性が上がる。" },
  { id: "dpo", name: "DPO", englishName: "Direct Preference Optimization", category: "AI基礎", description: "RLHFより単純に「良い出力／悪い出力」ペアから直接調整する手法。報酬モデルが不要で実装が軽く、最近の主流。", example: "LLaMA 3を社内データでDPOすれば、「丁寧な回答／素っ気ない回答」を好みに揃えられる。" },
  { id: "sft", name: "SFT", englishName: "Supervised Fine-Tuning", category: "AI基礎", description: "正解データ（入力と理想出力のペア）を使って普通に教師あり学習でLLMを追加訓練する手法。RLHFの前段で必ず行う基礎工程。", example: "SFTで自社FAQ対応を学習させたあと、DPOで丁寧度の好みを反映する、という2段構えが実務で定番。" },
  { id: "quantization", name: "量子化", englishName: "Quantization", category: "AI基礎", description: "モデルの数値精度をFP32→FP16→INT8→INT4と落として、メモリ・計算を削減する技術。精度は若干犠牲になるがスピードが跳ね上がる。", example: "70B INT4量子化モデルなら、24GBのGPUメモリで動作する。フル精度では80GB以上必要だったものが個人PCで動くレベルに。" },
  { id: "distillation", name: "蒸留", englishName: "Knowledge Distillation", category: "AI基礎", description: "大きなモデル（教師）の出力を使って小さなモデル（生徒）を訓練する手法。軽くて速いが、そこそこ賢いモデルを作れる。", example: "GPT-4の出力を教師にしてLlama 3 8Bを蒸留すれば、自分の用途に特化した小型高性能モデルが作れる。" },
  { id: "moe", name: "MoE", englishName: "Mixture of Experts", category: "AI基礎", description: "複数の専門ネットワーク（エキスパート）を用意し、入力ごとに一部だけ発火させるアーキテクチャ。計算コストを抑えつつ巨大モデルを実現。", example: "Mixtral、DeepSeek、Claude、GPT-4などモダンLLMの多くはMoE構造で効率化されている。" },
  { id: "attention-head", name: "アテンションヘッド", englishName: "Attention Head", category: "AI基礎", description: "Transformerの注意機構を並列化した単位。1つのレイヤーに多数のヘッドがあり、それぞれ違う観点で単語同士の関係を学ぶ。", example: "マルチヘッドアテンションのヘッド数は、GPT-2で12、GPT-3で96など大きくなるほど表現力が増す。" },
  { id: "context-length", name: "コンテキスト長", englishName: "Context Length", category: "AI基礎", description: "モデルが一度に扱えるトークン数。Claude Opus 4.7は200K、Sonnetも1Mの試験拡張があり、大きな文書を丸ごと処理できる。", example: "200Kコンテキストがあれば、書籍一冊を一度に読ませて要約・質問まで処理できる。" },

  // ─── データパイプライン ─────────────────────────────────
  { id: "etl", name: "ETL", englishName: "Extract / Transform / Load", category: "データ・セキュリティ", description: "データ統合の古典パターン。抽出→変換→投入の順。Talend、Informatica、Pentahoなど古参ツールが有名。", example: "社内の10個のシステムから売上データをETLで吸い上げ、BIツール用のDWHへ投入する。" },
  { id: "elt", name: "ELT", englishName: "Extract / Load / Transform", category: "データ・セキュリティ", description: "ETLの現代版。まずDWHに生データを入れてから、DWHの中で変換する。Snowflake・BigQueryの高性能を活かせる。", example: "生ログをそのままBigQueryに流し込み、dbtでSQL変換するELT構成が2020年代の主流。" },
  { id: "dbt", name: "dbt", englishName: "dbt (Data Build Tool)", category: "データ・セキュリティ", description: "DWH内のSQL変換をgit管理＆テスト＆モジュール化するツール。データ分析のソフトウェアエンジニアリング化を進めた立役者。", example: "dbtで`models/fact_sales.sql`を書くと、変換SQLがDAGで管理され、依存関係とスキーマ変更が追跡できる。" },
  { id: "airflow", name: "Airflow", englishName: "Apache Airflow", category: "データ・セキュリティ", description: "バッチジョブを有向グラフ（DAG）で管理するOSSスケジューラ。「毎日3時にジョブA→終わったらB」を宣言的に書ける。", example: "毎晩の売上集計・請求書生成・Slack通知の連続処理をAirflow DAGで自動化。" },
  { id: "prefect", name: "Prefect", englishName: "Prefect", category: "データ・セキュリティ", description: "Airflowの後継を狙うモダンなデータワークフローツール。Pythonの関数デコレータだけでDAGが書けるのが特徴。", example: "`@flow` `@task` デコレータで普通のPython関数をワークフロー化できるので、Airflowより書き始めが圧倒的に軽い。" },
  { id: "dagster", name: "Dagster", englishName: "Dagster", category: "データ・セキュリティ", description: "データアセット（生成物）を中心に設計するデータワークフローOSS。資産の系譜・再実行・テストに強い。", example: "「この売上テーブルはどのログから生成されたか」をDagsterが自動で系譜として可視化してくれる。" },
  { id: "airbyte", name: "Airbyte", englishName: "Airbyte", category: "データ・セキュリティ", description: "300以上のSaaSからデータを吸い出す抜き出し（Extract）特化のOSS。Stripe・Salesforce・HubSpotなどを数分で接続できる。", example: "Stripeの決済データをAirbyteで毎時BigQueryに同期すれば、経理ダッシュボードが常に最新になる。" },
  { id: "fivetran", name: "Fivetran", englishName: "Fivetran", category: "データ・セキュリティ", description: "Airbyteと並ぶSaaSデータ抽出ツール。こちらは商用で堅牢、スキーマ自動追従が強く大企業で採用。", example: "SalesforceのAPI仕様変更があっても、Fivetranが自動追従してスキーマをDWHに反映してくれる。" },

  // ─── DWH・BI ────────────────────────────────────────────
  { id: "dwh", name: "データウェアハウス", englishName: "Data Warehouse", category: "データ・セキュリティ", description: "分析専用の大規模列指向DB。本番OLTPと分離して、集計・BIに耐える設計。BigQuery・Snowflake・Redshiftが代表。", example: "本番PostgresはOLTP、週次のBIクエリはDWH（BigQuery）で、という役割分担が一般的。" },
  { id: "bigquery", name: "BigQuery", englishName: "Google BigQuery", category: "データ・セキュリティ", description: "Googleのフルマネージドサーバーレス列指向DWH。TB級のクエリも数秒で返す。料金はスキャンしたデータ量に従量課金。", example: "Firebase Analyticsのデータは自動でBigQueryに流れ、SQLで行動分析できるのが定番。" },
  { id: "snowflake", name: "Snowflake", englishName: "Snowflake", category: "データ・セキュリティ", description: "クラウド横断のDWH。AWS/GCP/Azureどこでも動き、計算とストレージが分離している。データ共有機能が特徴。", example: "取引先と売上データをSnowflakeの「Data Share」機能で共有すれば、CSV送信より安全かつリアルタイムになる。" },
  { id: "databricks", name: "Databricks", englishName: "Databricks", category: "データ・セキュリティ", description: "データエンジニアリングとML基盤を統合したプラットフォーム。Apache Sparkの開発元が運営。DWHとレイクハウスの両立を提唱。", example: "データエンジニア・アナリスト・機械学習エンジニアが同じDatabricks上でノートブックを共同編集する。" },
  { id: "redshift", name: "Amazon Redshift", englishName: "Amazon Redshift", category: "データ・セキュリティ", description: "AWSのDWH。PostgreSQL互換の列指向DB。近年はServerless版が登場し、使った分だけの料金で始められる。", example: "S3のParquetファイルをRedshift Spectrumで直接クエリし、ロード不要で分析する運用がある。" },
  { id: "duckdb", name: "DuckDB", englishName: "DuckDB", category: "データ・セキュリティ", description: "「DWHのSQLite」と呼ばれる単体バイナリの列指向DB。Parquetを直接クエリでき、ノートパソコンでも数億行のデータを扱える。", example: "`duckdb -c \"SELECT * FROM 'sales.parquet' LIMIT 10\"` だけでParquetファイルに直接SQL可能。" },
  { id: "olap", name: "OLAP", englishName: "OLAP", category: "データ・セキュリティ", description: "Online Analytical Processing。分析向けの集計処理の総称。OLTPの対語で「読みに最適化されたクエリ」を指す。", example: "「店舗別・月別・商品カテゴリ別の売上合計」のような多次元集計は、OLAP向けワークロードの典型。" },
  { id: "oltp", name: "OLTP", englishName: "OLTP", category: "データ・セキュリティ", description: "Online Transaction Processing。日々の業務トランザクション（注文登録・在庫更新等）を高速に裁くDBワークロード。", example: "ECサイトの商品購入処理はOLTP、その翌日の売上レポート集計はOLAP、と別DBに分けるのが定石。" },
  { id: "metabase", name: "Metabase", englishName: "Metabase", category: "データ・セキュリティ", description: "非エンジニアでも使えるOSSのBIツール。GUIポチポチだけでダッシュボードが作れる。中小企業・スタートアップ人気。", example: "Metabaseで「週次売上」「会員獲得数」のダッシュボードを作れば、SQLが書けない役員も自分で数字が見られる。" },
  { id: "looker", name: "Looker", englishName: "Looker", category: "データ・セキュリティ", description: "Google配下のBIツール。LookMLという独自DSLでデータモデルを定義し、ガバナンス付きで全社分析基盤を作れる。", example: "Lookerの`view.lookml`でKPI定義を一元化すれば、部署ごとのバラバラ指標が統一できる。" },
  { id: "tableau", name: "Tableau", englishName: "Tableau", category: "データ・セキュリティ", description: "商用BIの王者。ドラッグ&ドロップで美麗ダッシュボードが作れる。Salesforce傘下。大企業導入が圧倒的。", example: "Tableauなら営業部長が数字を切り替えるだけで、地域・商品・期間の切り口を瞬時に組み替えできる。" },
  { id: "powerbi", name: "Power BI", englishName: "Microsoft Power BI", category: "データ・セキュリティ", description: "Microsoft製のBIツール。Excelユーザーに馴染みやすく、Teams連携が強い。企業内BI市場で最大シェア級。", example: "Power BIダッシュボードをTeamsに埋め込めば、会議中にその場で数字を切り替えて議論できる。" },

  // ─── Python データ分析 ─────────────────────────────────
  { id: "pandas", name: "pandas", englishName: "pandas", category: "データ・セキュリティ", description: "Pythonのデータ分析ライブラリの代表。`DataFrame`で表形式データを扱える。ExcelのPython版のような存在で、分析系の共通言語。", example: "`pd.read_csv('sales.csv').groupby('store').sum()` のように、1行で店舗別集計ができる。" },
  { id: "numpy", name: "NumPy", englishName: "NumPy", category: "データ・セキュリティ", description: "Pythonの数値計算ライブラリ。多次元配列（ndarray）と行列演算、高速なC/C++実装で、データ分析や機械学習の基盤。", example: "NumPy配列でベクトル計算すれば、純Pythonのループより100倍以上速くなるのが普通。" },
  { id: "polars", name: "Polars", englishName: "Polars", category: "データ・セキュリティ", description: "Rust製の高速データフレームライブラリ。pandasの後継候補として急成長。メモリ効率と速度で大きく上回り、大規模CSV/Parquet分析に強い。", example: "pandasで10分かかる5GBの集計が、Polarsなら数十秒で終わる。" },
  { id: "pyarrow", name: "PyArrow", englishName: "Apache Arrow / PyArrow", category: "データ・セキュリティ", description: "メモリ上の列指向データ表現の標準仕様と実装。pandas・Polars・DuckDB等の内部で共通基盤として使われる。ゼロコピーのデータ交換が可能。", example: "pandasのDataFrameを `df.to_arrow()` でArrow化し、DuckDBに渡せばコピーなしでSQL実行できる。" },
  { id: "parquet", name: "Parquet", englishName: "Apache Parquet", category: "データ・セキュリティ", description: "列指向のファイル形式。圧縮率と分析クエリ速度が高い。データレイクの事実上の標準フォーマット。", example: "CSVで10GBのログがParquetにすると1GB以下になり、BigQueryクエリも大幅に安くなる。" },
  { id: "jupyter", name: "Jupyter Notebook", englishName: "Jupyter Notebook", category: "データ・セキュリティ", description: "コード・実行結果・文章・グラフを1つのファイル（.ipynb）に並べるインタラクティブ環境。データ分析の標準ツール。", example: "データクレンジング→可視化→結論まで、Jupyterノートブック1冊で共有できるのがアナリストの標準的な成果物。" },
  { id: "streamlit", name: "Streamlit", englishName: "Streamlit", category: "Web・インターネット", description: "PythonだけでWebアプリを作れるフレームワーク。データ分析成果物を数十行で社内向けダッシュボードに仕立てられる。", example: "`st.dataframe(df)` `st.line_chart(df)` だけで、pandasの分析結果を即Web化できる。" },
  { id: "gradio", name: "Gradio", englishName: "Gradio", category: "AI基礎", description: "機械学習モデルのデモUIを即作るPythonライブラリ。テキスト・画像・音声入力のフォームを3行で生成できる。Hugging Faceの標準。", example: "画像分類モデルを `gr.Interface(fn=classify, inputs='image', outputs='label').launch()` で公開できる。" },
  { id: "plotly", name: "Plotly", englishName: "Plotly", category: "データ・セキュリティ", description: "インタラクティブなグラフを作れるPython/JSライブラリ。ズーム・ホバー・時系列操作が標準装備。", example: "Plotlyで作ったグラフはHTMLにエクスポートでき、メール送付も簡単。" },
  { id: "matplotlib", name: "Matplotlib", englishName: "Matplotlib", category: "データ・セキュリティ", description: "Pythonの老舗グラフ描画ライブラリ。pandasの `.plot()` の裏にもいる。論文や静的レポート向け。", example: "`df.plot(x='date', y='sales', title='月次売上')` で、スライド用のグラフが一瞬で出る。" },
  { id: "scikit-learn", name: "scikit-learn", englishName: "scikit-learn", category: "AI基礎", description: "Pythonの汎用機械学習ライブラリ。線形回帰・決定木・クラスタリング・前処理など、「LLM以外」の古典機械学習の標準。", example: "顧客離脱予測などの分類問題は、LLMではなくscikit-learnのRandomForestの方が簡単で精度も高いことが多い。" },

  // ─── MLOps ─────────────────────────────────────────────
  { id: "mlflow", name: "MLflow", englishName: "MLflow", category: "AI基礎", description: "機械学習の実験管理OSS。パラメータ・メトリクス・学習済みモデルをまとめて記録し、比較・再現を可能にする。", example: "ハイパーパラメータを変えて100回学習しても、MLflowに全部ログが残り、最良モデルをクリック一つで選べる。" },
  { id: "weights-and-biases", name: "Weights & Biases", englishName: "Weights & Biases (W&B)", category: "AI基礎", description: "機械学習用のSaaS実験管理・可視化ツール。チームでの実験共有・レポート・モデルレジストリに強い。", example: "Kaggleなどの上位陣はW&Bで数百の実験を視覚的に管理しているのが珍しくない。" },
  { id: "feature-store", name: "Feature Store", englishName: "Feature Store", category: "AI基礎", description: "機械学習用の特徴量を一元管理するストア。学習時と推論時で同じ特徴量を使える（訓練／本番の不整合を防ぐ）。FeastやTectonが代表。", example: "「ユーザーの過去30日間の購入回数」をFeature Storeに置いておけば、学習時も本番推論時も同じ定義で参照できる。" },
  { id: "model-registry", name: "モデルレジストリ", englishName: "Model Registry", category: "AI基礎", description: "学習済みモデルのバージョン管理システム。ステージ（dev/staging/prod）付きで管理し、ロールバックもできる。", example: "Staging環境で検証したv2.3.0モデルを、レジストリ上でprodに昇格させる1クリックリリース。" },
  { id: "ab-test-ml", name: "オンラインA/Bテスト（ML）", englishName: "Online A/B Test", category: "AI基礎", description: "新モデル（B）と既存モデル（A）を本番トラフィックの一部で比較し、KPIで良い方を採用する運用パターン。", example: "検索モデル v1 vs v2 をA/Bに分けて1週間動かし、CTRが統計的有意に改善したv2を採用する。" },
  { id: "shadow-deploy", name: "シャドウデプロイ", englishName: "Shadow Deployment", category: "AI基礎", description: "新モデルに本番トラフィックを流すが、結果はユーザーに返さず裏でログだけ取る手法。リスクなしで本番負荷の影響を確認できる。", example: "新検索モデルをシャドウで1週間動かし、CPU負荷やレスポンス時間を本番同等環境で事前確認する。" },
  { id: "canary-release", name: "カナリアリリース", englishName: "Canary Release", category: "プログラミング", description: "新バージョンを一部ユーザーだけに少しずつ出していくデプロイ手法。問題があれば影響範囲が小さくて済む。", example: "新Opusモデルを1%→10%→50%→100%と段階的に投入し、途中でエラー率が上がったら即ロールバック。" },
  { id: "feature-flag", name: "フィーチャーフラグ", englishName: "Feature Flag", category: "プログラミング", description: "コードに埋め込んだフラグで機能のON/OFFを管理する仕組み。LaunchDarkly、GrowthBookが代表。", example: "新UIをフラグで5%ユーザーだけに有効化し、問題なければ段階的に全体公開する。" },
  { id: "growthbook", name: "GrowthBook", englishName: "GrowthBook", category: "プログラミング", description: "A/BテストとフィーチャーフラグをOSSで提供するツール。Bayesian分析を組み込み、中小企業でも本格的な実験運用ができる。", example: "GrowthBookのダッシュボードで実験のCVR・有意差を確認し、勝ちパターンを全体にロールアウトする。" },

  // ─── ストリーミング・分散 ───────────────────────────────
  { id: "kafka", name: "Apache Kafka", englishName: "Apache Kafka", category: "プログラミング", description: "LinkedIn発のイベントストリーミング基盤。1秒に100万件の書き込みを捌ける。イベント駆動アーキテクチャの代名詞。", example: "Netflixは視聴ログをKafkaで全世界から収集し、推薦モデルへリアルタイム投入している。" },
  { id: "kinesis", name: "AWS Kinesis", englishName: "Amazon Kinesis", category: "プログラミング", description: "AWS版のマネージドストリーミング。KafkaをAWSで動かしたい場合の選択肢。Data Streams/Firehoseなど用途別に分かれる。", example: "IoT機器の温度データをKinesis Firehoseで受けて、自動でS3に貯めるパイプラインが数分で組める。" },
  { id: "pubsub", name: "Google Pub/Sub", englishName: "Google Cloud Pub/Sub", category: "プログラミング", description: "GCPのマネージドメッセージング。グローバル分散で、Pub/Subパターンを数秒で構築できる。", example: "GA4のイベントデータはPub/Sub→BigQueryの流れで格納され、ほぼリアルタイムに分析可能。" },
  { id: "redis", name: "Redis", englishName: "Redis", category: "データ・セキュリティ", description: "インメモリのキーバリューストア。キャッシュ、セッション、レート制限、Pub/Sub、ランキングなど何でも使える万能選手。", example: "セッションIDをキーにユーザー情報をRedisに入れれば、1msでログイン状態を取得できる。" },
  { id: "memcached", name: "Memcached", englishName: "Memcached", category: "データ・セキュリティ", description: "Redisより古いインメモリキャッシュ。シンプルで軽量。Redisに比べて機能は限られるが、単純キャッシュなら十分な選択肢。", example: "ウェブページのHTMLキャッシュにMemcachedを使って、同じページへの大量アクセスをDBまで届かせないようにする。" },

  // ─── 暗号・認証方式 ────────────────────────────────────
  { id: "bcrypt", name: "bcrypt", englishName: "bcrypt", category: "データ・セキュリティ", description: "パスワードハッシュ化アルゴリズムの定番。総当たりを遅くする「コストパラメータ」を持ち、年々マシンが速くなっても耐性を保てる。", example: "`bcrypt.hash(pw, 12)` で、将来的にも何年も安全なパスワード保存が可能。" },
  { id: "argon2", name: "Argon2", englishName: "Argon2", category: "データ・セキュリティ", description: "2015年のPassword Hashing Competition優勝のハッシュ関数。bcryptより新しく、メモリ攻撃耐性も持つ。新規実装では第一候補。", example: "Node.jsでは `argon2-cli` で `argon2.hash(pw)` と書くだけで、SOTAのパスワード保存が実装できる。" },
  { id: "aes", name: "AES", englishName: "Advanced Encryption Standard", category: "データ・セキュリティ", description: "対称鍵暗号の事実上の世界標準。AES-256-GCMがよく使われる。ファイル・通信・クッキーの暗号化で定番。", example: "セッションクッキーをAES-256-GCMで暗号化すると、漏洩してもサーバー鍵なしでは復号できない。" },
  { id: "rsa", name: "RSA", englishName: "RSA", category: "データ・セキュリティ", description: "代表的な公開鍵暗号方式。鍵交換や署名で使われる。最近はECDSAなど楕円曲線系に徐々に置き換わりつつある。", example: "SSH鍵はRSAでもよいが、新規はEd25519（楕円曲線）が推奨されている。" },
  { id: "ecdsa", name: "ECDSA", englishName: "Elliptic Curve Digital Signature Algorithm", category: "データ・セキュリティ", description: "楕円曲線を使った署名方式。RSAより短い鍵で同等の強度が得られ、TLS証明書やJWTで採用が増えている。", example: "Let's Encryptの証明書もECDSAが選べ、RSAより応答が速くハンドシェイクが軽い。" },

  // ─── その他痒いところ ──────────────────────────────────
  { id: "lsp", name: "LSP（言語サーバー）", englishName: "Language Server Protocol", category: "プログラミング", description: "エディタとプログラミング言語の解析器を繋ぐ共通プロトコル。VS Codeの補完・エラー表示の仕組みの裏側。", example: "`typescript-language-server`はLSPを話すので、VSCodeでもVimでもNeovimでも同じTS補完が得られる。" },
  { id: "treesitter", name: "Tree-sitter", englishName: "Tree-sitter", category: "プログラミング", description: "増分解析に特化したソースコードパーサジェネレータ。Neovim・GitHub・Cursorのシンタックスハイライトの基盤。", example: "Tree-sitterで関数の範囲を正確に取得できるから、Cursorのピンポイント編集が高精度で動く。" },
  { id: "devcontainer", name: "Dev Container", englishName: "Dev Container", category: "プログラミング", description: "VS CodeがDockerで再現可能な開発環境を立ち上げる仕組み。`.devcontainer/devcontainer.json`でチーム全員の環境を揃えられる。", example: "新人が `Reopen in Container` を押すだけで、Postgres・Node・pnpmが揃った環境が10秒で立ち上がる。" },
  { id: "codespaces", name: "GitHub Codespaces", englishName: "GitHub Codespaces", category: "プログラミング", description: "GitHub上でクラウドの開発環境を起動し、ブラウザでVS Codeが使えるサービス。Dev Containerをクラウド版にしたもの。", example: "リポを開いて `Open in Codespace` を押すだけで、会社PCでもiPadでもすぐ開発を続けられる。" },
  { id: "codeowners", name: "CODEOWNERS", englishName: "GitHub CODEOWNERS", category: "プログラミング", description: "ファイルパスごとに「このコードの責任者は誰か」を定義するGitHubの仕組み。PRに自動でレビュアーが割り当てられる。", example: "`/frontend/ @front-team` と書けば、フロントのPRはフロントチームが自動でレビュアーに入る。" },
  { id: "branch-protection", name: "ブランチ保護", englishName: "Branch Protection", category: "プログラミング", description: "GitHubでmainなど重要ブランチへの直pushやforce-pushを禁じるルール。PR経由＆CI成功＆承認必須を強制できる。", example: "main branchを保護し「2人以上のapproveとCI成功なしにマージ不可」に設定するのが基本。" },
  { id: "pre-commit", name: "pre-commit", englishName: "pre-commit", category: "プログラミング", description: "gitコミット直前にlintやフォーマッタを自動実行するフック管理ツール。`.pre-commit-config.yaml`で定義。", example: "コミット時にESLint・Prettier・Biome・Mypyなどを自動実行して、汚いコードがリポに入らないよう防ぐ。" },
  { id: "husky", name: "Husky", englishName: "Husky", category: "プログラミング", description: "Node.js生態系でgitフックを手軽に設定するライブラリ。pre-commit、commit-msgなどを`package.json`ベースで管理できる。", example: "HuskyとLint-stagedを組み合わせ、変更ファイルだけを対象にESLint / Prettierを走らせる運用が定番。" },
  { id: "lint-staged", name: "lint-staged", englishName: "lint-staged", category: "プログラミング", description: "git stageされたファイルだけにlint/formatを適用するツール。リポ全体にかけるより高速で、CIと役割分担しやすい。", example: "ステージに入ったTSファイルだけESLintが走るので、コミット速度がほぼ落ちない。" },
  { id: "commitlint", name: "commitlint", englishName: "commitlint", category: "プログラミング", description: "コミットメッセージが規約（Conventional Commits等）に沿っているかをチェックするツール。自動リリースの前提として使う。", example: "`feat: 新機能` 以外の形式でコミットしようとすると、commitlintが止めてくれる。" },
  { id: "semantic-release", name: "semantic-release", englishName: "semantic-release", category: "プログラミング", description: "Conventional Commitsを読み取って、自動でsemverバージョンを決めてリリースノートとgit tagを発行するツール。", example: "feat: 〇〇 のコミットがあればminor、fix: はpatchと解釈して、人手ゼロでリリース完了。" },
  { id: "nvm", name: "nvm", englishName: "Node Version Manager", category: "プログラミング", description: "Node.jsのバージョンをプロジェクト単位で切り替えるCLI。`.nvmrc`に書いたバージョンに`nvm use`で一発切替。", example: "プロジェクトAはNode 18、プロジェクトBはNode 22、をnvmで自動切替して開発できる。" },
  { id: "pnpm", name: "pnpm", englishName: "pnpm", category: "プログラミング", description: "npmより高速・ディスク効率の良いパッケージマネージャ。ハードリンクで依存を共有し、モノレポとの親和性も高い。", example: "10個のNext.jsリポを持っていても、pnpmならnode_modulesの実体は共有され、ディスクが90%節約される。" },
  { id: "bun", name: "Bun", englishName: "Bun", category: "プログラミング", description: "JavaScriptのランタイム＋パッケージマネージャ＋バンドラ＋テストランナーを兼ねるZig製の高速ツール。Node代替として急成長。", example: "`bun install` はnpmより数倍〜数十倍速く、テストも `bun test` で完結する。" },
  { id: "npx", name: "npx", englishName: "npx", category: "プログラミング", description: "npmに付属するパッケージ実行ツール。`npx create-next-app`のように、インストールせずに一時実行できる。", example: "`npx shadcn add button` でパッケージをグローバルインストールせずに1コマンド実行が可能。" },
  { id: "dotenv", name: "dotenv", englishName: "dotenv", category: "データ・セキュリティ", description: "`.env`ファイルから環境変数を読み込むライブラリ／慣習。APIキーやDB接続情報をコードに直書きしないための定番手法。", example: "`.env.local`に`DATABASE_URL=…`と書き、`.gitignore`に加えれば、秘密情報が誤って公開されない。" },
  { id: "env-var", name: "環境変数", englishName: "Environment Variable", category: "プログラミング", description: "OSやプロセスに紐づく設定値。APIキー・DB接続文字列・モード切替などに使う。本番と開発で値を変える定番手法。", example: "`process.env.SUPABASE_URL` のように読み取ると、環境に応じて接続先DBを切り替えられる。" },
];
