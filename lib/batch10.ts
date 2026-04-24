import { Term } from "./glossary";

/**
 * batch10 — DevOps / クラウド / インフラ 実務 (100 terms)
 * Vercel / Cloudflare / AWS / GitHub Actions / Docker / Kubernetes 周辺の
 * 「ここで止まる」用語を日本語化。
 */
export const batch10: Term[] = [
  // ─── Git 応用 ────────────────────────────────────────────
  { id: "git-worktree", name: "git worktree", englishName: "git worktree", category: "プログラミング", description: "1つのリポジトリから複数の作業ディレクトリを同時に作るgitの機能。並行で別ブランチを編集でき、stashを多用せずに済む。AIエージェントの並列作業と相性抜群。", example: "`git worktree add ../feat-login feature/login` で、メインと別ディレクトリに同リポの別ブランチを展開。" },
  { id: "git-cherry-pick", name: "cherry-pick", englishName: "git cherry-pick", category: "プログラミング", description: "特定のコミットだけを別ブランチに取り込むgitコマンド。ホットフィックスを開発ブランチから本番ブランチへ単独で運ぶときなどに使う。", example: "`git cherry-pick abc1234` で、そのコミットの変更内容だけを今のブランチに取り込める。" },
  { id: "git-rebase", name: "rebase", englishName: "git rebase", category: "プログラミング", description: "ブランチの根元を別のコミットに付け替えてコミット履歴を直線的に整える操作。mergeより履歴がきれいだが、push済みブランチには危険。", example: "`git rebase main` で、mainの最新を自ブランチの土台に入れ替えて、綺麗な一本線の履歴にできる。" },
  { id: "git-interactive-rebase", name: "インタラクティブリベース", englishName: "Interactive Rebase", category: "プログラミング", description: "`git rebase -i` で過去コミットをまとめる（squash）・順番変更・メッセージ編集ができる機能。PR前の履歴整理の定番。", example: "PR前に `git rebase -i HEAD~5` でWIPコミット5個を1つのキレイなコミットに統合する。" },
  { id: "git-squash", name: "squash", englishName: "squash", category: "プログラミング", description: "複数の小さなコミットを1つにまとめる操作。マージ時に`Squash and merge`で使うと、mainの履歴が読みやすくなる。", example: "GitHubの「Squash and merge」ボタンで、PR内の30個のWIPコミットがmainでは1コミットに集約される。" },
  { id: "git-reflog", name: "reflog", englishName: "git reflog", category: "プログラミング", description: "gitのHEADの移動履歴。`reset --hard`や`rebase`で失った変更もここから拾い直せる命綱。", example: "誤って `reset --hard` したときも、`git reflog`→`git reset --hard HEAD@{5}` で以前の状態に復帰できる。" },
  { id: "git-stash", name: "stash", englishName: "git stash", category: "プログラミング", description: "作業中の変更を「未コミットのまま退避」するコマンド。別ブランチに切り替えたいが今のコミットはまだ汚い、というときに使う。", example: "`git stash` → `git checkout main` → `git stash pop` で一時退避と復元ができる。" },
  { id: "git-submodule", name: "submodule", englishName: "git submodule", category: "プログラミング", description: "別のgitリポジトリをフォルダとして取り込む仕組み。共通ライブラリの運用に使うが、近年はmonorepoやpackage managerに押され減少傾向。", example: "共通のデザインシステムをsubmoduleで取り込めば、本体リポのコミットが清潔に保てる。" },
  { id: "monorepo", name: "モノレポ", englishName: "Monorepo", category: "プログラミング", description: "複数のプロジェクト（フロント・バックエンド・共通ライブラリ等）を1つのリポジトリで管理する手法。Nx、Turborepo、pnpm workspaceが代表。", example: "Turborepoを使えば、フロントとバックエンドをモノレポ管理しつつ依存関係を見てビルドキャッシュも効く。" },
  { id: "conventional-commits", name: "Conventional Commits", englishName: "Conventional Commits", category: "プログラミング", description: "コミットメッセージの規約。`feat:` `fix:` `chore:` などをプレフィクスにして、自動リリースノート生成やsemver判定ができる。", example: "`fix(login): …` で始めたコミットは、semantic-releaseが自動でパッチバージョンを発行する。" },
  { id: "semver", name: "セマンティックバージョニング", englishName: "Semantic Versioning (SemVer)", category: "プログラミング", description: "`MAJOR.MINOR.PATCH` で「互換性を壊す変更かどうか」を伝えるバージョン規則。ライブラリアップデート時のリスク判断に使う。", example: "`1.2.3 → 1.2.4` はパッチ（安全）、`1.2.3 → 2.0.0` はメジャー（破壊的変更ありうる）。" },

  // ─── GitHub / CI・CD ────────────────────────────────────
  { id: "github-actions", name: "GitHub Actions", englishName: "GitHub Actions", category: "プログラミング", description: "GitHubに組み込まれたCI/CDシステム。YAMLでワークフローを書き、プッシュやPR作成でテスト・ビルド・デプロイを自動化できる。", example: "`.github/workflows/test.yml` にpush時のテスト実行を書けば、毎PRで自動テストが走る。" },
  { id: "gha-workflow", name: "Workflow", englishName: "GitHub Actions Workflow", category: "プログラミング", description: "GitHub Actionsの実行単位。yamlファイル1つが1ワークフローで、複数のjobを並列・順次で組める。", example: "test / lint / deployの3つのワークフローに分けて、それぞれ別条件で起動するのが一般的。" },
  { id: "gha-job", name: "Job", englishName: "GitHub Actions Job", category: "プログラミング", description: "ワークフロー内の処理単位。デフォルトでは並列実行、`needs`で依存関係を付けると直列化できる。", example: "`needs: [test]` を書けば、testジョブが成功したあとだけdeployジョブが走る。" },
  { id: "gha-step", name: "Step", englishName: "GitHub Actions Step", category: "プログラミング", description: "Job内の個別コマンド。`uses:`で公開アクションを使うか、`run:`で直接シェルを叩く。", example: "`uses: actions/checkout@v4` でリポをクローンし、`run: npm test` でテストするのが基本パターン。" },
  { id: "gha-matrix", name: "Matrix Build", englishName: "Matrix Build", category: "プログラミング", description: "Node.jsバージョン別・OS別など、複数組み合わせを並列でテストする仕組み。`strategy.matrix`で定義。", example: "Node 18/20/22 × Ubuntu/macOS のマトリクスで同じテストを走らせ、環境依存バグを検出する。" },
  { id: "gha-secret", name: "Secrets", englishName: "GitHub Secrets", category: "データ・セキュリティ", description: "Workflow内で使う機密情報を安全に保存する機能。ログに出ず、環境変数として注入される。APIキーやデプロイトークンに使う。", example: "`${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}` でマイグレーション実行時にキーを安全に渡せる。" },
  { id: "gha-runner", name: "Runner", englishName: "GitHub Actions Runner", category: "プログラミング", description: "Workflowを実際に実行するマシン。GitHubホステッド（ubuntu-latest等）と自前のself-hostedがある。", example: "大きなメモリが必要なビルドは、self-hosted runnerをAWSで立てて実行するケースもある。" },
  { id: "gha-artifact", name: "Artifact", englishName: "Workflow Artifact", category: "プログラミング", description: "ジョブ間で共有・ダウンロードできる成果物。ビルド成果物・テストレポート・ログなどを保存する。", example: "`actions/upload-artifact`でビルド済みdistを保存し、次のdeployジョブでダウンロードして本番へ送る。" },
  { id: "ci-cd", name: "CI/CD", englishName: "CI/CD", category: "プログラミング", description: "Continuous Integration（継続的インテグレーション）＋ Continuous Delivery/Deployment の略。コード変更を自動的にテスト・ビルド・公開するパイプラインの総称。", example: "CI＝PRごとに自動テスト、CD＝mainにマージされたら自動で本番デプロイ、という構成がモダン開発の標準。" },
  { id: "dependabot", name: "Dependabot", englishName: "Dependabot", category: "データ・セキュリティ", description: "GitHubの依存パッケージ自動更新Bot。脆弱性のある依存を検知して自動でPRを立ててくれる。", example: "Dependabotが毎週`lodash`のセキュリティアップデートPRを自動で出してくれるので、手動追跡が不要。" },
  { id: "renovate", name: "Renovate", englishName: "Renovate Bot", category: "プログラミング", description: "Dependabotより細かく設定できる依存更新Bot。マイナー・パッチの自動マージ、安定版待ち、グループ化など高度に制御できる。", example: "Renovateを設定すれば「パッチは自動マージ、メジャーは人が確認」の運用を実現できる。" },

  // ─── Vercel / Cloudflare ─────────────────────────────────
  { id: "vercel", name: "Vercel", englishName: "Vercel", category: "Web・インターネット", description: "Next.jsの開発元が運営するデプロイプラットフォーム。GitHub連携でプッシュごとに自動デプロイ、エッジ配信、プレビューURL発行などがセット。", example: "Next.jsのリポジトリをVercelに繋げば、PRを作るたびに専用URLが発行されてレビューが楽になる。" },
  { id: "vercel-preview", name: "プレビューデプロイ", englishName: "Preview Deployment", category: "Web・インターネット", description: "Vercelで「PR毎に自動発行される一時URL」の仕組み。本番と隔離されたURLでデザイン・挙動を確認できる。", example: "デザイナーがPRのプレビューURLを開けば、mergeせずに最新UIをそのまま触ってレビューできる。" },
  { id: "vercel-edge-function", name: "Vercel Edge Functions", englishName: "Vercel Edge Functions", category: "Web・インターネット", description: "Vercelが提供するエッジサーバーレス実行環境。世界中のPOPで動くため、認証や軽いAPIを低レイテンシで返せる。", example: "ABテスト振り分けロジックをEdge Functionsに置けば、ユーザーに応じた画面を1msで出しわけできる。" },
  { id: "vercel-kv", name: "Vercel KV", englishName: "Vercel KV", category: "Web・インターネット", description: "VercelがホストするRedis互換キーバリューストア。サーバーレス環境から低レイテンシで状態を保存できる。", example: "フラグ管理や軽量セッション用途にVercel KVを使えば、別途Redisを立てなくて済む。" },
  { id: "vercel-postgres", name: "Vercel Postgres", englishName: "Vercel Postgres", category: "データ・セキュリティ", description: "VercelがNeonベースで提供するサーバーレスPostgreSQL。プロジェクトと同じUIからDBを一元管理できる。SupabaseのCDN版的存在。", example: "Next.js SaaSをVercelに乗せるなら、Vercel Postgresでデータ層まで同じDashboardから管理できる。" },
  { id: "vercel-analytics", name: "Vercel Analytics", englishName: "Vercel Analytics", category: "Web・インターネット", description: "プライバシー重視のアクセス解析（Web Analytics）と、Core Web Vitals計測（Speed Insights）の2種。Cookieを使わずにPVを取れる。", example: "GDPR対策でGAを外し、Vercel Analyticsに切り替えるプロジェクトが増えている。" },
  { id: "cloudflare", name: "Cloudflare", englishName: "Cloudflare", category: "Web・インターネット", description: "世界最大級のCDN・セキュリティ会社。DNS・DDoS防御・WAF・エッジ関数（Workers）など幅広く提供する。", example: "個人ブログから大企業まで、Cloudflare DNSを使うだけで世界中のユーザーに高速配信できる。" },
  { id: "cloudflare-workers", name: "Cloudflare Workers", englishName: "Cloudflare Workers", category: "Web・インターネット", description: "CloudflareのV8エッジサーバーレス。320都市以上のPOPでJSを実行できる。AWS Lambdaよりコールドスタートがほぼゼロ。", example: "短いAPIや画像変換などをWorkersで書けば、東京でもシドニーでも同じ10ms台のレスポンスが得られる。" },
  { id: "cloudflare-pages", name: "Cloudflare Pages", englishName: "Cloudflare Pages", category: "Web・インターネット", description: "Cloudflare版の静的サイトホスティング。無制限帯域と無料SSL込みで、git連携デプロイができる。Workers統合でフルスタックSSRも可能。", example: "静的サイトを月1TB超のトラフィックで公開しても、Pagesなら無料枠に収まる。" },
  { id: "cloudflare-d1", name: "Cloudflare D1", englishName: "Cloudflare D1", category: "データ・セキュリティ", description: "CloudflareがWorkers向けに提供するサーバーレスSQLite。エッジで読み取りが高速、地域レプリケーションも組み込み済み。", example: "商品マスタのような「読み中心・地球規模配信」データをD1に置くと、全世界で瞬速。" },
  { id: "cloudflare-kv", name: "Cloudflare KV", englishName: "Cloudflare KV", category: "データ・セキュリティ", description: "世界中のエッジに複製される結果整合性KVストア。読み込みが爆速だが、書き込み反映に数秒かかる。", example: "機能フラグやAB振り分け表のような「書き込み稀、読み込み多い」データをKVで世界配信。" },
  { id: "cloudflare-r2", name: "Cloudflare R2", englishName: "Cloudflare R2", category: "データ・セキュリティ", description: "S3互換の無egress料金のオブジェクトストレージ。配信コストを大幅に節約でき、動画・画像ホストに向く。", example: "S3からR2に移すだけで、帯域コストが月10万円から0円になるECサイトの事例もある。" },
  { id: "cloudflare-durable-objects", name: "Durable Objects", englishName: "Cloudflare Durable Objects", category: "プログラミング", description: "Cloudflareが提供する「1つの状態を世界で1インスタンスだけ持たせる」強整合性オブジェクト。チャットルームやゲーム部屋などに最適。", example: "多人数同時編集ドキュメントを、各ドキュメントIDごとのDurable Objectで管理すれば順序保証が得られる。" },
  { id: "cloudflare-tunnel", name: "Cloudflare Tunnel", englishName: "Cloudflare Tunnel", category: "データ・セキュリティ", description: "ローカルPCや社内サーバーをCloudflare経由で公開するトンネル。ポート開放なしで、認証付きでインターネットに出せる。", example: "自宅の開発サーバーをtunnelで `https://dev.mash.example.com` として安全に公開できる。" },

  // ─── AWS ─────────────────────────────────────────────────
  { id: "aws-lambda", name: "AWS Lambda", englishName: "AWS Lambda", category: "Web・インターネット", description: "AWSのサーバーレス関数サービス。イベント駆動で数秒だけコードを動かし、実行時間課金。APIやデータ処理の定番。", example: "S3に画像がアップされたら自動でLambdaが発火し、サムネイル生成→保存まで終わる構成が作れる。" },
  { id: "aws-s3", name: "Amazon S3", englishName: "Amazon S3", category: "データ・セキュリティ", description: "AWSのオブジェクトストレージ。耐久性11ナイン（99.999999999%）で、写真・ログ・バックアップ・静的サイトホストにも使われる業界標準。", example: "古いログをS3 Glacierに退避すればGB単価が1/10以下になる。コスト最適化の定番。" },
  { id: "aws-ec2", name: "Amazon EC2", englishName: "Amazon EC2", category: "Web・インターネット", description: "AWSの仮想サーバー。好きなOSを自由に立てられ、時間課金。コンテナやサーバーレスに比べて柔軟だが運用工数は多め。", example: "レガシーな社内システムをそのまま動かすなら、クラウド移行先はまずEC2が最も無難。" },
  { id: "aws-rds", name: "Amazon RDS", englishName: "Amazon RDS", category: "データ・セキュリティ", description: "AWSのマネージドRDBサービス。MySQL・Postgres・Aurora等のバックアップ・レプリケーションがワンクリックで設定できる。", example: "RDSを選べば、AZ障害時の自動フェイルオーバーを自前で書かずに済む。" },
  { id: "aws-cloudfront", name: "CloudFront", englishName: "Amazon CloudFront", category: "Web・インターネット", description: "AWSのCDN。S3やEC2の前に置くと、世界中のエッジから静的ファイルや動画を低レイテンシで配信できる。", example: "S3の静的サイトをCloudFront経由で公開すれば、SSLとキャッシュが1セットで整う。" },
  { id: "aws-iam", name: "IAM", englishName: "AWS IAM", category: "データ・セキュリティ", description: "AWSの権限管理サービス。「誰が」「何に」「どうアクセスできるか」をポリシーJSONで精密に定義する。最小権限の原則が鉄則。", example: "Lambda関数には `dynamodb:PutItem` だけを許可するIAMロールを当て、他の操作ができないようにする。" },
  { id: "aws-sqs", name: "SQS", englishName: "Amazon SQS", category: "プログラミング", description: "AWSのメッセージキューサービス。疎結合な非同期処理の基盤で、重い処理を後ろに回したり、バースト耐性を付けたりするのに使う。", example: "画像アップロード時にSQSへジョブを投げ、別のLambdaが順次サムネイル生成する構成で失敗時リトライも楽になる。" },
  { id: "aws-sns", name: "SNS", englishName: "Amazon SNS", category: "プログラミング", description: "AWSのPub/Subメッセージ配信サービス。1つのイベントを複数のサブスクライバ（Lambda、SQS、メール等）に扇状に送れる。", example: "「新規登録」のSNSトピックに、CRM更新Lambdaとメール送信Lambdaを両方sub登録して並列処理する。" },
  { id: "aws-dynamodb", name: "DynamoDB", englishName: "Amazon DynamoDB", category: "データ・セキュリティ", description: "AWSのフルマネージドNoSQL DB。ミリ秒応答で無限にスケールし、運用不要。「キー＋ソートキー」モデルで設計が特殊。", example: "ゲームランキングのように「急激なアクセススパイク」がある用途はDynamoDBのオートスケールが効く。" },
  { id: "aws-cloudwatch", name: "CloudWatch", englishName: "Amazon CloudWatch", category: "プログラミング", description: "AWSの監視・ログ・メトリクス集約サービス。アラーム設定で閾値超過時にSlackへ通知するまで組める。", example: "Lambdaの実行時間が5秒を超えたらCloudWatch AlarmからSlackに通知を飛ばす運用にできる。" },

  // ─── Docker / K8s ────────────────────────────────────────
  { id: "docker-image", name: "Dockerイメージ", englishName: "Docker Image", category: "プログラミング", description: "アプリと動作環境をまとめたテンプレート。どこで動かしても同じ挙動になるのが最大の利点。`Dockerfile`から作る。", example: "`FROM node:20` から始まるDockerfileでビルドすれば、macでもAWS上でも同一のNode環境で動く。" },
  { id: "dockerfile", name: "Dockerfile", englishName: "Dockerfile", category: "プログラミング", description: "Dockerイメージを作る手順書。`FROM`、`COPY`、`RUN`、`CMD`などの命令を並べる。レイヤーキャッシュを活かす書き方が重要。", example: "`COPY package.json` → `RUN npm ci` → `COPY .` の順にすると、コード変更でもnpm installが走らない。" },
  { id: "docker-registry", name: "Dockerレジストリ", englishName: "Docker Registry", category: "プログラミング", description: "Dockerイメージを配布・保管するサーバー。Docker Hub、GitHub Container Registry、Amazon ECRなどがある。", example: "`docker push ghcr.io/org/app:latest` で、GitHub Container Registryにイメージを公開できる。" },
  { id: "docker-compose", name: "Docker Compose", englishName: "Docker Compose", category: "プログラミング", description: "複数のコンテナ（アプリ+DB+キャッシュ等）をYAMLでまとめて起動するツール。ローカル開発環境の定番。", example: "`docker-compose up` 一発で、Postgres+Redis+Node+Nginxがまとめて立ち上がる。" },
  { id: "kubernetes", name: "Kubernetes", englishName: "Kubernetes (K8s)", category: "プログラミング", description: "コンテナを大量に運用するためのオーケストレーションシステム。Googleが作り、今はCNCFが管理するクラウドネイティブ時代の基盤。", example: "数百のマイクロサービスを動かす大規模ECでは、Kubernetesが障害復旧・スケーリング・デプロイを自動化する。" },
  { id: "k8s-pod", name: "Pod", englishName: "Kubernetes Pod", category: "プログラミング", description: "K8sのコンテナ最小単位。1つ以上のコンテナを束ね、同一ネットワーク・共有ストレージを持つ。通常アプリ1種類＝1Pod。", example: "webサーバーとログ収集のsidecarを同じPodに入れれば、localhost通信で完結できる。" },
  { id: "k8s-deployment", name: "Deployment", englishName: "Kubernetes Deployment", category: "プログラミング", description: "Podの台数維持・ローリング更新を管理するK8sリソース。「レプリカ3台で動かして」と宣言すると、落ちても自動復旧する。", example: "Deploymentで`replicas: 3`を指定すれば、1台クラッシュしても即座に3台目が立ち上がる。" },
  { id: "k8s-service", name: "Service", englishName: "Kubernetes Service", category: "プログラミング", description: "Pod群に安定したIP/DNS名を与えるK8sリソース。Pod再起動でIPが変わっても、他サービスは安定した名前で呼べる。", example: "`http://users-service/` と書けば、中のPod群に自動でロードバランスされる。" },
  { id: "k8s-ingress", name: "Ingress", englishName: "Kubernetes Ingress", category: "プログラミング", description: "外部からK8sクラスタ内のServiceへアクセスさせる入り口ルール。URLパス別のルーティング・SSL終端もここで行う。", example: "`/api` をAPI Service、`/admin` を管理画面Serviceに振り分けるIngressルールを書く。" },
  { id: "helm", name: "Helm", englishName: "Helm", category: "プログラミング", description: "Kubernetes向けパッケージマネージャ。YAMLの束（Chart）をテンプレ化して、`helm install`でまとめて展開できる。", example: "`helm install prometheus`一発で、監視スタック一式が本番クラスタに入る。" },
  { id: "istio", name: "Istio", englishName: "Istio Service Mesh", category: "プログラミング", description: "Kubernetes上で動くサービスメッシュ。通信の暗号化、トラフィック制御、監視をアプリ改修なしで追加できる。", example: "IstioでAサービスからBサービスへのトラフィックを10%だけ新バージョンに流すカナリアリリースが実現できる。" },

  // ─── IaC・構成管理 ─────────────────────────────────────
  { id: "terraform", name: "Terraform", englishName: "Terraform", category: "プログラミング", description: "HashiCorpのInfrastructure as Codeツール。`.tf`ファイルでAWS・GCP・Cloudflare等のクラウド構成を宣言し、バージョン管理＋自動適用する。", example: "`terraform apply`で「S3バケット+Lambda+CloudFront一式」を5分で作れる。手作業ゼロで再現可能。" },
  { id: "pulumi", name: "Pulumi", englishName: "Pulumi", category: "プログラミング", description: "Terraform同等のIaCを、TypeScript/Python等の汎用言語で書けるツール。ループや関数でインフラを抽象化しやすい。", example: "Pulumiなら「同じS3バケットを10個作る」のが `for` ループで書ける。Terraformのcount記法が苦手な人に人気。" },
  { id: "ansible", name: "Ansible", englishName: "Ansible", category: "プログラミング", description: "エージェントレスの構成管理ツール。SSH経由で複数サーバーに同じ状態を適用できる。YAMLで手順（Playbook）を書く。", example: "Ansible Playbookで「Nginx入れてconf配置して起動」まで書けば、100台のサーバーに同じ設定を一括適用できる。" },
  { id: "gitops", name: "GitOps", englishName: "GitOps", category: "プログラミング", description: "インフラやアプリの望ましい状態をGitに宣言し、実環境との差分を自動で埋める運用手法。Argo CD・Fluxが代表ツール。", example: "Gitのmainにマージした瞬間、Argo CDが差分を検知して本番クラスタを自動同期するのがGitOps運用。" },
  { id: "argocd", name: "Argo CD", englishName: "Argo CD", category: "プログラミング", description: "Kubernetes向けGitOpsツール。GitのマニフェストとKubernetesの実状態を常に同期し、UI上で差分や履歴を可視化できる。", example: "Argo CDのUIから「ロールバック」をクリックすると、Gitの以前のコミットまで実環境が自動で巻き戻る。" },
  { id: "flux-cd", name: "Flux CD", englishName: "Flux CD", category: "プログラミング", description: "Argoと並ぶGitOpsツール。CNCFのsandboxからgraduatedに昇格した人気プロダクト。ツリー構造でアプリを管理する。", example: "Fluxに`Kustomization`を登録すれば、HelmやYAMLがGitコミットと同時にクラスタへ反映される。" },

  // ─── オブザーバビリティ ─────────────────────────────────
  { id: "opentelemetry", name: "OpenTelemetry", englishName: "OpenTelemetry (OTel)", category: "プログラミング", description: "ログ・メトリクス・トレースを統一的に集める業界標準。CNCFプロジェクトで、言語・ベンダー非依存で計装できる。", example: "OTelで計装すれば、Datadog→Grafana→New Relicと監視先を乗り換えてもアプリ側は無改修で済む。" },
  { id: "otel-trace", name: "分散トレース", englishName: "Distributed Trace", category: "プログラミング", description: "1つのリクエストが複数サービスを通過する様子をタイムラインで可視化する仕組み。どこで遅いかが一目でわかる。", example: "Jaeger UIで、フロント→API→DB→外部APIへの3秒間の流れを棒グラフで見られる。" },
  { id: "otel-metrics", name: "メトリクス", englishName: "Metrics", category: "プログラミング", description: "「リクエスト数/秒」「エラー率」「レスポンス時間分布」などの数値時系列。Prometheus形式が事実上の標準。", example: "HTTP 5xx率をメトリクスで取り、1%超えたらPagerDutyを鳴らす運用が一般的。" },
  { id: "otel-logs", name: "構造化ログ", englishName: "Structured Logging", category: "プログラミング", description: "プレーンテキストではなくJSON等で構造化されたログ。キーで検索・集計・アラート化がしやすい。", example: "`{ level: 'error', user_id: 42, msg: '…' }` のように書けば、エラーのusersをSQL的に集計できる。" },
  { id: "prometheus", name: "Prometheus", englishName: "Prometheus", category: "プログラミング", description: "CNCFのメトリクス収集・時系列DB。Pull型でターゲットをポーリングして集める。K8sの監視では定番。", example: "Kubernetes上の全Podからメトリクスを自動収集し、GrafanaでダッシュボードにするのがPrometheusの王道構成。" },
  { id: "grafana", name: "Grafana", englishName: "Grafana", category: "プログラミング", description: "メトリクス可視化の定番OSS。Prometheus・CloudWatch・BigQuery等、数十種類のデータソースから美しいダッシュボードを作れる。", example: "MASHのFC本部の売上KPIも、Grafanaダッシュボードで世界中の店舗をリアルタイム監視できる。" },
  { id: "datadog", name: "Datadog", englishName: "Datadog", category: "プログラミング", description: "SaaS型のフルスタック監視。ログ・APM・インフラ・RUMを一箇所で。高機能だが料金が高めで、企業向けが中心。", example: "Datadog APMを入れるだけで、遅いDBクエリや外部API呼び出しがトレースで一覧される。" },
  { id: "sentry", name: "Sentry", englishName: "Sentry", category: "プログラミング", description: "フロント・バックエンドのエラー追跡SaaS。スタックトレース・ユーザー情報・リリース紐付きで原因調査を爆速化。", example: "`Sentry.captureException(e)` だけで、本番で起きたエラーがダッシュボードに集約される。" },
  { id: "posthog", name: "PostHog", englishName: "PostHog", category: "プログラミング", description: "プロダクト分析・セッションリプレイ・A/Bテスト・フィーチャーフラグまで統合したOSS/SaaS。Mixpanel・Amplitudeの代替として人気。", example: "PostHogでヒートマップを取り、ヘッダーのクリック率が低いことに気づいてナビ改修→CVR 10%改善。" },
  { id: "logrocket", name: "LogRocket", englishName: "LogRocket", category: "プログラミング", description: "ユーザーセッションの動画を記録するツール。バグ報告時に「実際にその人がどう操作したか」を再生して確認できる。", example: "ユーザーが「なぜかボタンが反応しない」と言ったら、LogRocketのリプレイで瞬時に原因特定。" },
  { id: "slo", name: "SLO", englishName: "Service Level Objective", category: "プログラミング", description: "「サービスが満たすべき品質の目標値」。月間稼働率99.9%など。SLAの社内版。SRE運用の根幹。", example: "「API応答200ms以内を99%の時間で維持」というSLOを設定し、超えたらアラートを鳴らす運用にする。" },
  { id: "sla", name: "SLA", englishName: "Service Level Agreement", category: "プログラミング", description: "顧客との契約書で約束するサービス品質。SLOより厳しく、破ると返金や違約金が発生する。", example: "AWSは `99.99%`のSLAを提示し、満たない月はサービス料の10%相当を返金する。" },
  { id: "sli", name: "SLI", englishName: "Service Level Indicator", category: "プログラミング", description: "SLOを測るために実際に記録する測定値。レイテンシ、成功率、スループットなどの生指標。", example: "「可用性」SLIは `(成功リクエスト数 / 全リクエスト数)` のような具体式で定義する。" },
  { id: "error-budget", name: "エラー予算", englishName: "Error Budget", category: "プログラミング", description: "SLOから逆算した「許されるエラーの総量」。残量を見て、機能追加を攻めるか品質改善に回るかの判断に使う。", example: "月のエラー予算を全部使い切ったら、来月は新機能リリース停止で安定化に専念する運用にする。" },

  // ─── セキュリティ ─────────────────────────────────────
  { id: "owasp-top10", name: "OWASP Top 10", englishName: "OWASP Top 10", category: "データ・セキュリティ", description: "Webアプリの代表的な脆弱性10個のリスト。インジェクション・認証不備・SSRFなど。数年おきに更新される業界の必修知識。", example: "OWASP Top 10に沿ってチェックリストを作り、リリース前レビューで潰していくのが基本的な予防策。" },
  { id: "ssrf", name: "SSRF", englishName: "Server-Side Request Forgery", category: "データ・セキュリティ", description: "サーバー経由で社内サーバーやクラウドメタデータAPIへアクセスさせる攻撃。URL入力系の機能で狙われる。", example: "ユーザー入力のURLをそのまま`fetch`するとSSRFの温床になる。ホスト名ホワイトリストで防御。" },
  { id: "rce", name: "リモートコード実行（RCE）", englishName: "Remote Code Execution", category: "データ・セキュリティ", description: "攻撃者が任意のコードをサーバー上で動かせてしまう最悪クラスの脆弱性。Log4Shellのような重大事例がある。", example: "ユーザー入力を`eval`や`exec`に渡すコードはRCEの典型。絶対に避ける。" },
  { id: "xxe", name: "XXE", englishName: "XML External Entity", category: "データ・セキュリティ", description: "XML外部エンティティを悪用してサーバーのファイルを読み出す攻撃。古いXMLパーサで発生しやすい。", example: "XMLパーサの外部エンティティ解決を無効化するだけでXXEはほぼ完封できる。" },
  { id: "idor", name: "IDOR", englishName: "Insecure Direct Object Reference", category: "データ・セキュリティ", description: "URLの`/users/42`のようなIDを書き換えるだけで他人のデータが見えてしまう脆弱性。権限チェック忘れが原因。", example: "`/invoices/:id` で、その請求書がログインユーザーのものか検証しないとIDOR脆弱性になる。" },
  { id: "zero-trust", name: "ゼロトラスト", englishName: "Zero Trust", category: "データ・セキュリティ", description: "「社内ネットワークだから安全」を捨て、全アクセスを認証・認可する設計思想。VPN廃止の代替として普及。", example: "Cloudflare Accessを使えば、社内ツールも毎回Googleログインを要求するゼロトラスト構成にできる。" },
  { id: "least-privilege", name: "最小権限の原則", englishName: "Principle of Least Privilege", category: "データ・セキュリティ", description: "各プログラム・ユーザーには、業務に最低限必要な権限しか与えない原則。事故・漏洩時の被害を最小化する。", example: "バッチ用のIAMロールに `*:*` を付けず、実際に使う操作だけを列挙するのが最小権限の実践。" },
  { id: "encryption-at-rest", name: "保存時暗号化", englishName: "Encryption at Rest", category: "データ・セキュリティ", description: "ディスクやDB上のデータをファイルレベル/カラムレベルで暗号化しておくこと。ハード盗難やダンプ流出対策。", example: "RDSもS3も暗号化オプションが標準で、有効化すると透過的に暗号化される。" },
  { id: "encryption-in-transit", name: "通信時暗号化", englishName: "Encryption in Transit", category: "データ・セキュリティ", description: "通信経路で暗号化すること。TLS/HTTPSが代表。盗聴・中間者攻撃を防ぐ大前提。", example: "内部サービス間通信もmTLS化すると、クラスタに侵入した攻撃者からの横移動を防げる。" },
  { id: "mtls", name: "相互TLS（mTLS）", englishName: "mutual TLS", category: "データ・セキュリティ", description: "通常TLSはサーバー証明書のみ検証するが、mTLSでは双方が証明書を交換。マイクロサービス間認証の定番。", example: "Istioが各Pod間でmTLSを自動管理し、アプリ無改修でゼロトラストネットワークが実現する。" },
  { id: "hmac", name: "HMAC", englishName: "HMAC", category: "データ・セキュリティ", description: "メッセージ認証コードの一種。共有秘密鍵を使い、「誰が、改ざんなく」送ったかを確認できる。Webhook署名検証の定番。", example: "Stripe Webhookの`Stripe-Signature`ヘッダはHMAC-SHA256で、受信側が鍵で検証して正当性を確認する。" },
  { id: "rate-limiting", name: "レート制限", englishName: "Rate Limiting", category: "データ・セキュリティ", description: "1ユーザー・1IPあたりの時間あたりリクエスト数を制限する仕組み。総当たり攻撃やDDoSへの基本防御。", example: "ログインAPIに「5分で5回まで」のレート制限を入れると、パスワード総当たりを大幅に減らせる。" },
  { id: "dos-ddos", name: "DoS / DDoS", englishName: "Denial of Service", category: "データ・セキュリティ", description: "サービスを停止させるためにリクエストを大量に送りつける攻撃。DDoSは多数のマシンから同時に行う分散版。", example: "CloudflareやAWS Shieldを前面に置くと、大規模DDoSも自動で吸収してサービスを止めない。" },
];
