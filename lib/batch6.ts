import { Term } from "./glossary";

export const batch6: Term[] = [
  // ─── AI基礎 追加 (6 terms) ─────────────────────────────────────────
  { id: "synthetic-data", name: "合成データ", englishName: "Synthetic Data", category: "AI基礎", description: "AIが作り出した「ニセモノだけど本物そっくり」のデータのこと。本物のデータが少ないときや、個人情報を使えないときに、AIの学習用データとして活用する。テスト勉強で先生が作ったオリジナル問題みたいなもの。", example: "病院の患者データは個人情報で使えないので、合成データで似たパターンを作ってAIに学習させる。" },
  { id: "federated-learning", name: "連合学習", englishName: "Federated Learning", category: "AI基礎", description: "データを一か所に集めずに、それぞれの場所でAIを学習させて、学んだ結果だけを共有する仕組み。みんなが自分の家で勉強して、テスト結果だけクラスで共有するイメージ。プライバシーを守りながらAIを賢くできる。", example: "スマホのキーボード予測は、各ユーザーのスマホで学習した結果だけをGoogleに送って改善している。" },
  { id: "model-distillation", name: "モデル蒸留", englishName: "Model Distillation", category: "AI基礎", description: "大きくて賢いAIの知識を、小さくて軽いAIに移す技術のこと。先生（大きいAI）が生徒（小さいAI）に教えるように、性能をなるべく保ったまま小型化する。スマホでも動くAIを作るのに使われる。", example: "GPT-4クラスの大きなモデルの知識を蒸留して、スマホで動く軽量モデルを作る。" },
  { id: "reward-model", name: "報酬モデル", englishName: "Reward Model", category: "AI基礎", description: "AIの回答が「良い回答」か「悪い回答」かを判定するAIのこと。人間が「この回答は良い、こっちは悪い」と評価したデータで学習する。AIの先生役のAIで、ChatGPTやClaudeの品質向上に使われている。", example: "報酬モデルが「丁寧で正確な回答」に高い点数をつけるので、AIはそういう回答を出すように学習する。" },
  { id: "knowledge-graph", name: "ナレッジグラフ", englishName: "Knowledge Graph", category: "AI基礎", description: "物事の関係性を網の目のように整理したデータベース。「東京は日本の首都」「日本はアジアにある」のように、知識をつなげて管理する。Googleの検索結果の右側に出る情報はナレッジグラフが元になっている。", example: "Googleで「富士山」を検索すると、高さ・場所・関連する山の情報がまとめて表示されるのはナレッジグラフのおかげ。" },
  { id: "ai-ethics", name: "AI倫理", englishName: "AI Ethics", category: "AI基礎", description: "AIを正しく安全に使うためのルールや考え方のこと。「AIが差別をしないか」「プライバシーを守っているか」「責任は誰が取るのか」など、AIと社会の関係を考える大切な分野。", example: "AIが採用面接の合否を判断するとき、性別や人種で不公平な判断をしないようにAI倫理の観点でチェックする。" },

  // ─── Claude・ChatGPT 追加 (6 terms) ────────────────────────────────
  { id: "claude-sonnet", name: "Claude Sonnet", englishName: "Claude Sonnet", category: "Claude・ChatGPT", description: "Anthropicが開発したClaudeのモデルの一つ。速さと賢さのバランスが良い「中間グレード」のモデル。普段使いに最適で、コストパフォーマンスに優れている。", example: "日常的な質問やちょっとしたコード作成にはClaude Sonnetが速くて十分な性能を発揮する。" },
  { id: "claude-haiku", name: "Claude Haiku", englishName: "Claude Haiku", category: "Claude・ChatGPT", description: "Anthropicが開発した最速・最安のClaudeモデル。俳句のように短くてシンプルな処理が得意。大量のデータを素早く処理したいときや、チャットボットの裏側で使うのに最適。", example: "カスタマーサポートのチャットボットにはClaude Haikuを使って、素早い応答と低コストを実現する。" },
  { id: "claude-opus", name: "Claude Opus", englishName: "Claude Opus", category: "Claude・ChatGPT", description: "Anthropicが開発した最高性能のClaudeモデル。最も賢く、複雑な問題の分析や長文の作成に力を発揮する。オーケストラの大曲（オーパス）のように壮大な仕事をこなせる。", example: "複雑な法律文書の分析や、大規模なプログラムの設計にはClaude Opusが最も正確な結果を出す。" },
  { id: "gpt-4o", name: "GPT-4o", englishName: "GPT-4o", category: "Claude・ChatGPT", description: "OpenAIが開発したGPT-4の改良版で「o」はomni（全方位）の意味。テキスト・画像・音声を全部扱えるマルチモーダルモデル。GPT-4より速くて安く、同じくらい賢い。", example: "GPT-4oに写真を見せながら「この料理のレシピを教えて」と音声で話しかけると、写真を見て回答してくれる。" },
  { id: "llama", name: "Llama", englishName: "Llama", category: "Claude・ChatGPT", description: "Meta（Facebook）が開発したオープンソースの大規模言語モデル。無料で公開されていて、誰でも自分のサーバーで動かせる。企業が自社専用のAIを作るときのベースとしてよく使われる。", example: "Llamaを自社サーバーにインストールして、社内情報を学習させた独自のAIチャットボットを作る。" },
  { id: "perplexity", name: "Perplexity", englishName: "Perplexity", category: "Claude・ChatGPT", description: "AIを使った新しいタイプの検索エンジン。質問すると、ネット上の情報を調べて、出典付きでわかりやすくまとめて回答してくれる。Google検索とChatGPTを組み合わせたようなサービス。", example: "「2024年のノーベル物理学賞は誰？」と聞くと、最新の情報を調べて出典リンク付きで回答してくれる。" },

  // ─── プログラミング 追加 (7 terms) ─────────────────────────────────
  { id: "rust", name: "Rust", englishName: "Rust", category: "プログラミング", description: "安全性と速度を両立したプログラミング言語。C言語と同じくらい速いのに、メモリ関連のバグが起きにくい設計になっている。最近とても人気が上がっていて、LinuxやWindowsの一部にも使われ始めている。", example: "Rustで書かれたプログラムはとても高速で安全なので、ブラウザのFirefoxの一部もRustで作り直された。" },
  { id: "go", name: "Go", englishName: "Go", category: "プログラミング", description: "Googleが作ったプログラミング言語で、シンプルで速いのが特徴。サーバーを作るのに向いていて、Docker、KubernetesなどもGoで書かれている。学びやすくて実用的な言語。", example: "大量のアクセスを同時に処理するWebサーバーをGoで作ると、少ないリソースで高速に動く。" },
  { id: "c-language", name: "C言語", englishName: "C Language", category: "プログラミング", description: "1970年代に作られた歴史あるプログラミング言語で、今でもたくさん使われている。コンピュータの仕組みに近いところを直接操作でき、OSやゲームエンジンなどの基盤で活躍する。プログラミングの基礎を学ぶのに最適。", example: "Windows、Linux、macOSなどのOS自体がC言語で書かれていて、コンピュータの世界の土台になっている。" },
  { id: "java", name: "Java", englishName: "Java", category: "プログラミング", description: "企業のシステムで最も広く使われているプログラミング言語の一つ。「一度書けばどこでも動く」が特徴で、Androidアプリの開発にも使われる。世界中のプログラマーに愛用されている定番言語。", example: "銀行のATMシステムやAndroidアプリの多くがJavaで作られている。" },
  { id: "csharp", name: "C#", englishName: "C Sharp", category: "プログラミング", description: "Microsoftが作ったプログラミング言語。Windowsアプリやゲーム開発に強く、Unity（ゲームエンジン）で使われていることでも有名。Javaに似た書き方で、企業向けシステムにも使われる。", example: "UnityでスマホゲームやVRアプリを作るときのプログラミング言語として、C#が標準で使われている。" },
  { id: "php", name: "PHP", englishName: "PHP", category: "プログラミング", description: "Webサイトの裏側（サーバーサイド）で動くプログラミング言語。WordPressというブログシステムがPHPで作られていて、世界のWebサイトの約40%がPHPで動いている。初心者にも学びやすい。", example: "WordPressでブログを作ると、その裏側ではPHPがデータベースから記事を取り出して画面に表示している。" },
  { id: "ruby", name: "Ruby", englishName: "Ruby", category: "プログラミング", description: "日本人のまつもとゆきひろさんが作ったプログラミング言語。「プログラマーが楽しくコードを書ける」ことを大事にしていて、読みやすくて書きやすい。Ruby on Railsと組み合わせてWebアプリ開発に使われる。", example: "Rubyは日本生まれの言語で、クックパッドやGitHubの初期バージョンがRubyで作られた。" },

  // ─── Web・インターネット 追加 (6 terms) ─────────────────────────────
  { id: "service-worker", name: "Service Worker", englishName: "Service Worker", category: "Web・インターネット", description: "ブラウザの裏側で動くプログラムで、オフラインでもWebサイトを使えるようにする技術。一度見たページをキャッシュ（保存）しておいて、ネットがなくても表示できる。PWAの核となる技術。", example: "電波が悪い場所でもニュースアプリが読めるのは、Service Workerが以前のデータを保存しているから。" },
  { id: "local-storage", name: "ローカルストレージ", englishName: "Local Storage", category: "Web・インターネット", description: "ブラウザにデータを保存できる仕組みで、Cookieより大きなデータを保存できる。サイトの設定（ダークモードのON/OFFなど）をブラウザに覚えさせるのに使う。", example: "Webアプリでダークモードに切り替えると、ローカルストレージに設定が保存され、次回も同じ表示になる。" },
  { id: "web-accessibility", name: "Webアクセシビリティ", englishName: "Web Accessibility", category: "Web・インターネット", description: "障がいのある人や高齢者も含め、すべての人がWebサイトを使えるようにすること。目が不自由な人のための音声読み上げ対応や、色覚多様性への配慮などが含まれる。みんなに優しいWebサイト作り。", example: "画像にalt属性（説明文）を付けておくと、目が不自由な人も音声読み上げソフトで内容がわかる。" },
  { id: "websocket-api", name: "Server-Sent Events", englishName: "Server-Sent Events", category: "Web・インターネット", description: "サーバーからブラウザに向かって一方的にデータを送り続ける技術。株価の更新やニュース速報のように、サーバー側に新しい情報があるとリアルタイムでブラウザに届く。WebSocketより簡単に使える。", example: "SNSの通知がリアルタイムで画面に表示されるのは、Server-Sent Eventsの仕組みを使っていることがある。" },
  { id: "web-api", name: "Web API", englishName: "Web API", category: "Web・インターネット", description: "インターネットを通じて、あるサービスの機能を別のプログラムから利用できる仕組み。天気予報や地図情報など、他社のサービスを自分のアプリに組み込める。レゴブロックを組み合わせるように機能を追加できる。", example: "GoogleマップのWeb APIを使えば、自分のWebサイトに地図を埋め込んでお店の場所を表示できる。" },
  { id: "jamstack", name: "Jamstack", englishName: "Jamstack", category: "Web・インターネット", description: "JavaScript、API、Markupの頭文字を取ったWeb開発手法。ページをあらかじめ作っておいて、必要なときだけAPIでデータを取りに行く。表示が超高速で、セキュリティも高い。", example: "ブログをJamstackで作ると、記事は事前に生成されたHTMLなので、アクセスした瞬間に表示される。" },

  // ─── データ・セキュリティ 追加 (6 terms) ─────────────────────────────
  { id: "data-warehouse", name: "データウェアハウス", englishName: "Data Warehouse", category: "データ・セキュリティ", description: "分析用に整理整頓されたデータの倉庫。データレイクが「とりあえず何でも放り込む湖」なら、データウェアハウスは「きちんと整理された図書館」。ビジネスの意思決定に使うデータを効率よく分析できる。", example: "全店舗の売上データをデータウェアハウスに整理して格納し、地域別・商品別の分析を素早く行う。" },
  { id: "data-pipeline", name: "データパイプライン", englishName: "Data Pipeline", category: "データ・セキュリティ", description: "データをある場所から別の場所へ、自動的に流して処理する仕組み。水道管（パイプライン）のように、データが自動で収集→加工→保存と流れていく。手作業なしで常に最新データが使える状態にする。", example: "Webサイトのアクセスログが自動でデータパイプラインを通って、毎朝ダッシュボードに最新グラフが表示される。" },
  { id: "api-key", name: "APIキー", englishName: "API Key", category: "データ・セキュリティ", description: "APIを使うときの「合言葉」のようなもの。このキーを持っている人だけがAPIを利用できる。マンションのオートロックの暗証番号のように、正しいキーがないとサービスにアクセスできない。絶対に他人に見せてはいけない。", example: "OpenAIやAnthropicのAPIを使うには、まず公式サイトでAPIキーを発行して、プログラムに設定する。" },
  { id: "encryption-at-rest", name: "保存時暗号化", englishName: "Encryption at Rest", category: "データ・セキュリティ", description: "データベースやストレージに保存されているデータを暗号化すること。通信中だけでなく、保存されている状態でも暗号化しておけば、ハードディスクが盗まれてもデータを読み取れない。", example: "クラウドのデータベースで保存時暗号化が有効なら、物理的にサーバーが盗まれてもデータは安全。" },
  { id: "secret-management", name: "シークレット管理", englishName: "Secret Management", category: "データ・セキュリティ", description: "APIキーやパスワードなどの機密情報を安全に管理する仕組み。プログラムのコードに直接パスワードを書くのは超危険なので、専用の金庫（管理ツール）に保存してそこから読み取る。", example: "GitHubにAPIキーをうっかり公開してしまう事故を防ぐため、シークレット管理ツールで安全に保管する。" },
  { id: "rate-limiting", name: "レートリミット", englishName: "Rate Limiting", category: "データ・セキュリティ", description: "APIやサービスへのアクセス回数に上限を設ける仕組み。一人のユーザーが短時間に大量のリクエストを送ってサーバーをパンクさせないようにする。遊園地のアトラクションの「1時間に3回まで」のような制限。", example: "Claude APIは1分間に送れるリクエスト数に上限があるので、プログラムで適切に間隔を空ける必要がある。" },

  // ─── ビジネス・DX 追加 (6 terms) ────────────────────────────────────
  { id: "design-thinking", name: "デザイン思考", englishName: "Design Thinking", category: "ビジネス・DX", description: "ユーザーの気持ちに寄り添って問題を解決する考え方。「こんな機能を作ろう」ではなく「ユーザーは何に困っているか」から始める。共感→定義→発想→試作→テストの5ステップで進める。", example: "デザイン思考で「学生が教科書を重く感じている」という悩みから、電子教科書アプリのアイデアが生まれた。" },
  { id: "product-hunt", name: "Product Hunt", englishName: "Product Hunt", category: "ビジネス・DX", description: "新しいWebサービスやアプリを紹介・投票するサイト。スタートアップが自分の製品を世界に知ってもらう場所として有名。毎日新しいプロダクトが投稿され、ユーザーが投票してランキングが決まる。", example: "新しいAIツールをProduct Huntで公開したら、1日で1000票以上もらって注目を集めた。" },
  { id: "affiliate", name: "アフィリエイト", englishName: "Affiliate", category: "ビジネス・DX", description: "他社の商品やサービスを自分のサイトやSNSで紹介し、そこから購入や登録が発生したら報酬がもらえる仕組み。成果報酬型の広告で、ブログやYouTubeの収益化方法として広く使われている。", example: "ブログでおすすめのプログラミング教材を紹介し、読者がそのリンクから購入すると報酬が発生する。" },
  { id: "lead-generation", name: "リードジェネレーション", englishName: "Lead Generation", category: "ビジネス・DX", description: "見込み客（リード）を集める活動のこと。無料の資料やセミナーを提供して、興味のある人の連絡先を集める。集めたリードに営業やメールでアプローチして、お客さんになってもらう。", example: "「AI活用ガイド無料ダウンロード」でメールアドレスを集め、後日サービスの案内メールを送る。" },
  { id: "conversion-rate", name: "コンバージョン率", englishName: "Conversion Rate", category: "ビジネス・DX", description: "サイトに来た人のうち、実際に購入や登録をした人の割合のこと。100人が見て3人が購入したらコンバージョン率は3%。この数字を上げることがWebマーケティングの最重要テーマ。", example: "ランディングページのデザインを改善したら、コンバージョン率が2%から5%に上がって売上が倍増した。" },
  { id: "funnel", name: "ファネル", englishName: "Funnel", category: "ビジネス・DX", description: "お客さんが商品を知ってから購入するまでの流れを「漏斗（じょうご）」に例えたもの。認知→興味→検討→購入と進むにつれて人数が減っていく形がファネル（漏斗）に似ている。", example: "1000人がサイトを訪問→100人が資料請求→30人が問い合わせ→10人が契約、というのが典型的なファネル。" },
];
