import { Term } from "./terms";

export const newTerms: Term[] = [
  // ─── AI基礎 (20 terms) ─────────────────────────────────────────────
  {
    slug: "transformer",
    name: "Transformer（トランスフォーマー）",
    nameEn: "Transformer",
    category: "ai-basics",
    tagline: "現代AIの心臓部",
    description: `2017年にGoogleが発表した、AIの基盤となるアーキテクチャ（設計図）です。文章の中の単語同士の関係を一度に把握できる「注意機構（Attention）」が特徴。ChatGPTもClaudeもこの技術がベースになっています。翻訳・要約・文章生成など、言葉を扱うAIの飛躍的な進化を支えた革命的な仕組みです。`,
    example: `・ChatGPTの「GPT」はGenerative Pre-trained Transformerの略\n・Claudeも内部はTransformerベース\n・Google翻訳の精度向上もTransformerのおかげ`,
    relatedTerms: ["llm", "deep-learning", "gpt", "ai"],
    difficulty: "intermediate",
    quiz: {
      question: "Transformerの最大の特徴は何ですか？",
      choices: ["画像を生成できること", "文中の単語同士の関係を一度に把握できること", "インターネットに接続できること"],
      answer: 1,
      explanation: "Transformerは「注意機構（Attention）」により、文章中の単語の関係性を並列に処理できるのが革新的な点です。"
    }
  },
  {
    slug: "neural-network",
    name: "ニューラルネットワーク",
    nameEn: "Neural Network",
    category: "ai-basics",
    tagline: "人間の脳をマネした計算の仕組み",
    description: `人間の脳の神経細胞（ニューロン）のつながり方を参考にした計算モデルです。たくさんの「ノード」が層になって並び、データを受け取って次の層へ渡す仕組み。層が深くなるほど複雑なパターンを学習でき、それが「ディープラーニング」と呼ばれます。画像認識や音声認識など幅広いAI技術の土台です。`,
    example: `・写真に写っている物体を認識する（犬か猫か）\n・手書き文字を読み取る\n・音声をテキストに変換する`,
    relatedTerms: ["deep-learning", "ai", "transformer", "fine-tuning"],
    difficulty: "intermediate",
    quiz: {
      question: "ニューラルネットワークは何を参考にした仕組みですか？",
      choices: ["コンピュータの回路", "人間の脳の神経細胞", "インターネットの通信網"],
      answer: 1,
      explanation: "ニューラルネットワークは人間の脳の神経細胞（ニューロン）のつながり方を模倣した計算モデルです。"
    }
  },
  {
    slug: "nlp",
    name: "自然言語処理（NLP）",
    nameEn: "Natural Language Processing",
    category: "ai-basics",
    tagline: "AIが人間の言葉を理解する技術",
    description: `コンピュータに人間が普段使う言葉（自然言語）を理解・生成させる技術の総称です。翻訳、要約、感情分析、チャットボットなどすべてNLPの応用。ChatGPTやClaudeは「NLPの集大成」とも言えます。以前は「主語・述語を分解して…」と地道にやっていましたが、LLMの登場で精度が劇的に向上しました。`,
    example: `・メールの感情分析（怒っている？喜んでいる？）\n・議事録の自動要約\n・多言語翻訳\n・スパムメールの検出`,
    relatedTerms: ["llm", "ai", "transformer", "token"],
    difficulty: "intermediate",
    quiz: {
      question: "NLPとは何の略ですか？",
      choices: ["New Learning Process", "Natural Language Processing", "Network Layer Protocol"],
      answer: 1,
      explanation: "NLPはNatural Language Processing（自然言語処理）の略で、AIが人間の言葉を理解・生成する技術です。"
    }
  },
  {
    slug: "computer-vision",
    name: "コンピュータビジョン",
    nameEn: "Computer Vision",
    category: "ai-basics",
    tagline: "AIに「目」を与える技術",
    description: `コンピュータに画像や動画の内容を理解させる技術です。写真を見て「これは猫です」と判別したり、工場の製品の不良品を検出したりできます。スマホの顔認証もこの技術。最近はAIが画像の中身を説明する「マルチモーダルAI」にも応用されており、ClaudeやGPT-4oが画像を理解できるのもこの技術のおかげです。`,
    example: `・スマホの顔認証\n・自動運転での障害物検知\n・工場の不良品検出\n・OCR（文字の読み取り）`,
    relatedTerms: ["multimodal", "deep-learning", "ai", "neural-network"],
    difficulty: "intermediate",
    quiz: {
      question: "コンピュータビジョンの活用例として正しくないものはどれ？",
      choices: ["顔認証", "音声の文字起こし", "不良品検出"],
      answer: 1,
      explanation: "音声の文字起こしは音声処理の分野です。コンピュータビジョンは画像・動画を扱う技術です。"
    }
  },
  {
    slug: "diffusion-model",
    name: "拡散モデル",
    nameEn: "Diffusion Model",
    category: "ai-basics",
    tagline: "ノイズから画像を生み出す魔法",
    description: `Stable DiffusionやMidjourneyなど、画像生成AIの中核技術です。仕組みはシンプルで「きれいな画像にノイズ（砂嵐）を徐々に加える過程」を学習し、逆に「ノイズから元の画像を復元する」ことで新しい画像を作ります。砂嵐のテレビ画面から少しずつ絵が浮かび上がってくるイメージです。`,
    example: `・「夕焼けの海辺の写真」と入力すると画像を生成\n・Stable Diffusion、Midjourney、DALL-Eなどが採用\n・動画生成（Sora等）にも応用`,
    relatedTerms: ["ai", "multimodal", "deep-learning"],
    difficulty: "advanced",
    quiz: {
      question: "拡散モデルの画像生成の仕組みは？",
      choices: ["ピクセルを1つずつ描く", "ノイズから徐々に画像を復元する", "既存画像を切り貼りする"],
      answer: 1,
      explanation: "拡散モデルは、ノイズだらけの状態から少しずつノイズを取り除き、画像を生成する仕組みです。"
    }
  },
  {
    slug: "supervised-learning",
    name: "教師あり学習",
    nameEn: "Supervised Learning",
    category: "ai-basics",
    tagline: "正解つきドリルでAIを鍛える",
    description: `「問題と正解のセット」をAIに大量に見せて学習させる方法です。学校のドリルと同じで、「この画像は犬（正解）」「この画像は猫（正解）」と教え続けると、AIは新しい画像でも犬か猫か判別できるようになります。スパムメール判定や売上予測など、ビジネスでもっとも広く使われている機械学習の手法です。`,
    example: `・迷惑メール判定（過去のスパム/非スパムデータで学習）\n・不動産価格予測\n・顧客の解約予測`,
    relatedTerms: ["deep-learning", "ai", "fine-tuning", "neural-network"],
    difficulty: "intermediate",
    quiz: {
      question: "教師あり学習に必要なものは？",
      choices: ["大量のラベルなしデータ", "問題と正解がセットになったデータ", "リアルタイムのインターネット接続"],
      answer: 1,
      explanation: "教師あり学習は「正解ラベル付き」のデータを使ってAIを訓練する方法です。"
    }
  },
  {
    slug: "reinforcement-learning",
    name: "強化学習",
    nameEn: "Reinforcement Learning",
    category: "ai-basics",
    tagline: "試行錯誤で上達するAI",
    description: `AIが「試して→結果を見て→もっと良い行動を学ぶ」を繰り返す学習方法です。ゲームで高スコアを出すと「報酬」がもらえる仕組みと似ています。囲碁AIのAlphaGoはこの技術で人間のプロ棋士に勝ちました。ChatGPTやClaudeも「RLHF（人間のフィードバックによる強化学習）」で回答の質を向上させています。`,
    example: `・囲碁AI「AlphaGo」が世界チャンピオンに勝利\n・ロボットの歩行制御\n・ChatGPT/Claudeの回答品質の改善（RLHF）`,
    relatedTerms: ["deep-learning", "ai", "fine-tuning", "constitutional-ai"],
    difficulty: "advanced",
    quiz: {
      question: "強化学習でAIが学ぶ仕組みは？",
      choices: ["正解データを暗記する", "試行錯誤して報酬を最大化する", "他のAIの回答をコピーする"],
      answer: 1,
      explanation: "強化学習は「行動→報酬」のフィードバックループでAIが最適な行動を学ぶ手法です。"
    }
  },
  {
    slug: "training-data",
    name: "学習データ（トレーニングデータ）",
    nameEn: "Training Data",
    category: "ai-basics",
    tagline: "AIの教科書",
    description: `AIが賢くなるために読み込む大量のデータのことです。LLMの場合はインターネット上の文章、書籍、論文などが学習データになります。料理人に例えると「レシピ本」のようなもの。良い学習データがたくさんあればAIは賢くなり、偏ったデータだと偏った回答をするようになります。AIの品質は学習データの品質で決まると言っても過言ではありません。`,
    example: `・GPT-4の学習データは数兆語とも言われている\n・著作権のあるデータを使うかどうかが社会問題に\n・自社データでAIを追加学習させることも可能（ファインチューニング）`,
    relatedTerms: ["llm", "fine-tuning", "ai", "deep-learning"],
    difficulty: "beginner",
    quiz: {
      question: "AIの学習データが偏っているとどうなりますか？",
      choices: ["処理速度が遅くなる", "回答が偏る可能性がある", "電力消費が増える"],
      answer: 1,
      explanation: "学習データに偏りがあると、AIの回答にもその偏りが反映されてしまいます。"
    }
  },
  {
    slug: "inference",
    name: "推論（インファレンス）",
    nameEn: "Inference",
    category: "ai-basics",
    tagline: "学んだことを使って答えを出す瞬間",
    description: `AIが学習済みの知識を使って、新しい入力に対して回答・予測を出すプロセスのことです。学習が「勉強」なら、推論は「テスト本番」。ChatGPTにメッセージを送って返事が返ってくるのは、まさに推論が行われている瞬間です。推論にはGPUなどの計算資源が必要で、そのコストがAPIの利用料金に反映されています。`,
    example: `・Claudeに質問して回答が返ってくる = 推論\n・画像を送って「何が写っている？」と聞く = 推論\n・API料金は主に推論コストで決まる`,
    relatedTerms: ["llm", "token", "api-pricing", "ai"],
    difficulty: "intermediate",
    quiz: {
      question: "AIの「推論」とは何ですか？",
      choices: ["AIがデータを学習すること", "学習済みの知識で回答・予測を出すこと", "AIのモデルを更新すること"],
      answer: 1,
      explanation: "推論は学習済みAIが新しい入力に対して答えを出すプロセスです。勉強に対する「テスト」のようなものです。"
    }
  },
  {
    slug: "generative-ai",
    name: "生成AI",
    nameEn: "Generative AI",
    category: "ai-basics",
    tagline: "新しいコンテンツを「作れる」AI",
    description: `テキスト、画像、音楽、動画など、新しいコンテンツを生成できるAIの総称です。従来のAIは「分類」や「予測」が中心でしたが、生成AIは「創作」ができます。ChatGPT（文章生成）、Midjourney（画像生成）、Suno（音楽生成）などが代表例。ビジネスでは企画書作成、メール下書き、デザイン案の作成などに活用されています。`,
    example: `・ChatGPT/Claudeでメール文を作成\n・Midjourneyでプレゼン用の画像を生成\n・Sunoで動画のBGMを作成`,
    relatedTerms: ["ai", "llm", "chatgpt", "claude", "diffusion-model"],
    difficulty: "beginner",
    quiz: {
      question: "生成AIの特徴として正しいものは？",
      choices: ["データの分類だけができる", "新しいコンテンツを作り出せる", "インターネット検索だけができる"],
      answer: 1,
      explanation: "生成AIは文章・画像・音楽など、新しいコンテンツを「生成」できることが最大の特徴です。"
    }
  },
  {
    slug: "benchmark",
    name: "ベンチマーク",
    nameEn: "Benchmark",
    category: "ai-basics",
    tagline: "AIの成績表",
    description: `AIモデルの性能を比較するための「共通テスト」です。数学、プログラミング、読解力など様々なテストがあり、スコアでモデルの優劣を比較できます。学校の模試のランキングのようなもの。ただし「ベンチマークで1位＝実際に一番使いやすい」とは限らないので、実際に触ってみることが大切です。`,
    example: `・MMLU（幅広い知識テスト）\n・HumanEval（プログラミング能力テスト）\n・「Claude 3.5 SonnetがGPT-4oを上回った」はベンチマーク結果`,
    relatedTerms: ["llm", "claude", "chatgpt", "gpt"],
    difficulty: "intermediate",
    quiz: {
      question: "AIのベンチマークとは何ですか？",
      choices: ["AIの価格表", "AIの性能を比較するためのテスト", "AIの利用規約"],
      answer: 1,
      explanation: "ベンチマークはAIモデルの性能を客観的に比較するための共通テストです。"
    }
  },
  {
    slug: "ai-bias",
    name: "AIバイアス",
    nameEn: "AI Bias",
    category: "ai-basics",
    tagline: "AIが持つ偏見・偏り",
    description: `AIが学習データに含まれる偏りを反映して、不公平な判断をしてしまう問題です。たとえば採用AIが「過去の採用データ」を学習した結果、特定の性別を不利に扱ってしまう事例が報告されています。AIは公平に見えて実は学習データの偏りをそのまま引き継ぐため、AIの判断を鵜呑みにせず人間がチェックすることが重要です。`,
    example: `・採用AIが特定の属性を不利に扱う\n・翻訳AIが「医者＝男性」と仮定してしまう\n・画像生成AIが特定の人種を偏って生成する`,
    relatedTerms: ["ai", "training-data", "hallucination", "constitutional-ai"],
    difficulty: "intermediate",
    quiz: {
      question: "AIバイアスの主な原因は？",
      choices: ["AIのプログラムのバグ", "学習データに含まれる偏り", "インターネットの通信速度"],
      answer: 1,
      explanation: "AIバイアスは主に学習データに含まれる偏りが原因で発生します。"
    }
  },
  {
    slug: "parameter",
    name: "パラメータ",
    nameEn: "Parameter",
    category: "ai-basics",
    tagline: "AIの脳内の調整つまみ",
    description: `AIモデル内部の数値的な設定値のことです。学習によって最適な値に調整されます。「GPT-4は1兆パラメータ」のように使われ、一般にパラメータ数が多いほど複雑なタスクをこなせます。料理に例えると、塩加減・火加減・時間などの「調整つまみ」が多いほど繊細な料理ができるのと同じイメージです。`,
    example: `・GPT-3: 1750億パラメータ\n・パラメータが多い = モデルが大きい = 計算コストが高い\n・小さいモデル（Haiku等）はパラメータを絞って高速化`,
    relatedTerms: ["llm", "deep-learning", "fine-tuning", "token"],
    difficulty: "intermediate",
    quiz: {
      question: "AIのパラメータ数が多いとどうなりますか？",
      choices: ["応答速度が必ず速くなる", "より複雑なタスクに対応しやすくなる", "料金が必ず安くなる"],
      answer: 1,
      explanation: "パラメータ数が多いほど複雑なパターンを学習でき、高度なタスクに対応しやすくなります。"
    }
  },
  {
    slug: "gpu",
    name: "GPU",
    nameEn: "Graphics Processing Unit",
    category: "ai-basics",
    tagline: "AIを動かすエンジン",
    description: `もともとゲームの3D描画のために作られた半導体チップですが、大量の計算を同時にこなせる性質がAIの学習・推論にぴったりでした。NVIDIA社のGPUがAI業界の標準になっており、「AI半導体」として株価も急騰。AIブームの裏側ではGPUの争奪戦が起きています。AIサービスの料金にもGPUコストが大きく影響しています。`,
    example: `・NVIDIA H100はAI用GPUの代表格\n・ChatGPTの運用には数万個のGPUが必要\n・GPU不足がAI開発のボトルネックに`,
    relatedTerms: ["ai", "deep-learning", "inference", "api-pricing"],
    difficulty: "intermediate",
    quiz: {
      question: "GPUがAIに使われる理由は？",
      choices: ["消費電力が少ないから", "大量の計算を同時に処理できるから", "インターネット接続が速いから"],
      answer: 1,
      explanation: "GPUは大量の計算を並列処理できるため、AIの学習や推論に最適です。"
    }
  },
  {
    slug: "chatbot",
    name: "チャットボット",
    nameEn: "Chatbot",
    category: "ai-basics",
    tagline: "自動で返事してくれるおしゃべりロボット",
    description: `テキストや音声で人間と会話できるプログラムのことです。カスタマーサポートの「よくある質問」に自動回答するものから、ChatGPTのように自由な会話ができるものまで幅広くあります。LINEの公式アカウントで「注文状況を確認」と送ると自動返信が来るのもチャットボットの一種です。`,
    example: `・ECサイトの「お困りですか？」チャット窓\n・社内ヘルプデスクの自動応答\n・LINE公式アカウントの自動返信`,
    relatedTerms: ["ai", "llm", "claude", "nlp"],
    difficulty: "beginner",
    quiz: {
      question: "チャットボットの特徴として正しいものは？",
      choices: ["必ず人間が返信している", "プログラムが自動で会話を行う", "画像しか扱えない"],
      answer: 1,
      explanation: "チャットボットはプログラムが自動でテキストや音声の会話を行う仕組みです。"
    }
  },
  {
    slug: "sentiment-analysis",
    name: "感情分析",
    nameEn: "Sentiment Analysis",
    category: "ai-basics",
    tagline: "文章から気持ちを読み取るAI",
    description: `テキストに含まれる感情（ポジティブ・ネガティブ・ニュートラル）をAIが判定する技術です。SNSの口コミ分析、カスタマーサポートのメール優先度判定、社内アンケートの感情傾向分析などに使われます。Claudeに「このレビューの感情を分析して」と頼めば簡単にできます。`,
    example: `・商品レビューの感情を一括分析\n・クレームメールを自動検出して優先対応\n・SNS投稿のブランドイメージ分析`,
    relatedTerms: ["nlp", "ai", "llm", "claude"],
    difficulty: "beginner",
    quiz: {
      question: "感情分析で判定できるものは？",
      choices: ["文章の文字数", "テキストに含まれる感情の傾向", "画像の色味"],
      answer: 1,
      explanation: "感情分析はテキストからポジティブ・ネガティブなどの感情傾向を判定する技術です。"
    }
  },
  {
    slug: "transfer-learning",
    name: "転移学習",
    nameEn: "Transfer Learning",
    category: "ai-basics",
    tagline: "学んだ知識を別の分野に応用",
    description: `ある分野で学習したAIの知識を、別の分野に活用する技術です。英語を学んだ人がフランス語を学びやすいのと同じ発想。大規模なLLMを一から作るのは莫大なコストがかかりますが、既存モデルをベースに自社データで追加学習（ファインチューニング）すれば、少ないデータとコストで専門的なAIが作れます。`,
    example: `・汎用LLMを医療文書に特化させる\n・英語モデルを日本語に適応させる\n・画像認識モデルを自社製品の検品に転用`,
    relatedTerms: ["fine-tuning", "deep-learning", "training-data", "llm"],
    difficulty: "advanced",
    quiz: {
      question: "転移学習のメリットは？",
      choices: ["学習データが不要になる", "少ないデータとコストで専門AIを作れる", "AIの応答速度が10倍になる"],
      answer: 1,
      explanation: "転移学習は既存モデルの知識を活用するので、少ないデータとコストで新しい分野に適応できます。"
    }
  },
  {
    slug: "ai-alignment",
    name: "AIアラインメント",
    nameEn: "AI Alignment",
    category: "ai-basics",
    tagline: "AIを人間の味方にする研究",
    description: `AIの行動や判断を人間の意図・価値観と一致させる研究分野です。AIが賢くなるほど「人間が望まない行動をとるリスク」も高まります。Anthropic（Claude開発元）はこの問題に特に力を入れている企業で、Constitutional AIなどの手法でAIを安全に保つ研究をしています。`,
    example: `・「爆弾の作り方を教えて」→ 断るように訓練する\n・AIが嘘をつかないようにする研究\n・AnthropicのConstitutional AI`,
    relatedTerms: ["constitutional-ai", "anthropic", "ai", "ai-bias"],
    difficulty: "advanced",
    quiz: {
      question: "AIアラインメントの目的は？",
      choices: ["AIの処理速度を上げること", "AIの行動を人間の価値観と一致させること", "AIの料金を下げること"],
      answer: 1,
      explanation: "AIアラインメントはAIが人間の意図や価値観に沿った行動をとるようにする研究です。"
    }
  },
  {
    slug: "ai-ethics",
    name: "AI倫理",
    nameEn: "AI Ethics",
    category: "ai-basics",
    tagline: "AIを正しく使うためのルール",
    description: `AIの開発・利用における倫理的な課題を考える分野です。プライバシー侵害、差別的な判断、フェイク画像の悪用、著作権問題など多岐にわたります。EU AI規制法のように法整備も進んでいます。ビジネスでAIを使う際は「便利さ」だけでなく「社会的責任」も考える必要があり、その指針となるのがAI倫理です。`,
    example: `・AIが生成した文章の著作権は誰のもの？\n・顔認識技術の監視社会への懸念\n・AI生成コンテンツの明示義務`,
    relatedTerms: ["ai-bias", "ai-alignment", "constitutional-ai", "anthropic"],
    difficulty: "beginner",
    quiz: {
      question: "AI倫理が扱う問題として正しくないものは？",
      choices: ["プライバシー侵害", "AIの処理速度向上", "差別的な判断の防止"],
      answer: 1,
      explanation: "処理速度向上は技術的課題であり、AI倫理はプライバシーや差別などの社会的課題を扱います。"
    }
  },
  {
    slug: "knowledge-cutoff",
    name: "知識カットオフ",
    nameEn: "Knowledge Cutoff",
    category: "ai-basics",
    tagline: "AIの知識が止まっている日付",
    description: `AIが学習したデータの最終日のことです。「2024年4月カットオフ」なら、それ以降のニュースや出来事は知りません。昨日のニュースを聞いても「わかりません」となるのはこのため。最近はWeb検索機能と組み合わせて最新情報にもアクセスできるモデルが増えていますが、基本知識のベースにはカットオフがあります。`,
    example: `・「2025年の最新ニュースを教えて」→ カットオフ後なら回答不可\n・ClaudeもChatGPTもカットオフ日がある\n・RAGやWeb検索で補完する方法もある`,
    relatedTerms: ["llm", "hallucination", "rag", "training-data"],
    difficulty: "beginner",
    quiz: {
      question: "知識カットオフとは何ですか？",
      choices: ["AIの利用期限", "AIが学習したデータの最終日", "AIの応答文字数の上限"],
      answer: 1,
      explanation: "知識カットオフはAIの学習データの最終日で、それ以降の情報は基本的に持っていません。"
    }
  },

  // ─── Claude専門 (20 terms) ──────────────────────────────────────────
  {
    slug: "claude-sonnet",
    name: "Claude Sonnet（ソネット）",
    nameEn: "Claude Sonnet",
    category: "claude-specific",
    tagline: "速さと賢さのバランス型",
    description: `Claudeモデルの中で「性能とコスト・速度のバランスが最も良い」とされるモデルです。日常的な業務利用に最適で、メール作成、文章要約、コード生成など幅広いタスクに対応。Opusより安くて速く、Haikuより賢い。多くのユーザーが最もよく使うモデルです。`,
    example: `・長文メールの下書き作成\n・プレゼン資料の構成案作り\n・コードのレビューやバグ修正`,
    relatedTerms: ["claude", "claude-pro", "anthropic", "claude-grades"],
    difficulty: "beginner",
    quiz: {
      question: "Claude Sonnetの位置づけは？",
      choices: ["最も安い軽量モデル", "性能とコストのバランスが良い中間モデル", "最高性能の最上位モデル"],
      answer: 1,
      explanation: "Sonnetは速さと賢さのバランスが良く、日常業務に最も使いやすいモデルです。"
    }
  },
  {
    slug: "claude-haiku",
    name: "Claude Haiku（ハイク）",
    nameEn: "Claude Haiku",
    category: "claude-specific",
    tagline: "超高速・低コストの軽量モデル",
    description: `Claudeモデルの中で最も小さく、最も速く、最も安いモデルです。名前は日本の「俳句」から。短い文章だけど深い意味がある俳句のように、小さいけれど実用的な性能を持っています。単純な分類タスク、短い要約、大量のデータ処理など「速さ重視」の場面で活躍します。API利用では圧倒的なコストパフォーマンスです。`,
    example: `・大量のメールを一括分類する\n・短い文章の感情分析\n・チャットボットの応答生成`,
    relatedTerms: ["claude", "claude-sonnet", "api-pricing", "token-price"],
    difficulty: "beginner",
    quiz: {
      question: "Claude Haikuの名前の由来は？",
      choices: ["ハワイの地名", "日本の俳句", "開発者の名前"],
      answer: 1,
      explanation: "「短くても深い」俳句のように、小さくても実用的な性能を持つことが名前の由来です。"
    }
  },
  {
    slug: "claude-opus",
    name: "Claude Opus（オーパス）",
    nameEn: "Claude Opus",
    category: "claude-specific",
    tagline: "Claudeシリーズ最高峰の頭脳",
    description: `Claudeモデルの中で最も高性能な最上位モデルです。「Opus」は音楽用語で「大作」の意味。複雑な分析、長文の理解、高度な推論が必要なタスクで真価を発揮します。その分、応答速度はSonnetより遅く、API料金も高め。重要な意思決定の補助や、高品質な成果物が必要な場面に適しています。`,
    example: `・複雑な契約書の分析\n・多角的な市場調査レポートの作成\n・高度なコードアーキテクチャの設計`,
    relatedTerms: ["claude", "claude-sonnet", "claude-haiku", "claude-grades"],
    difficulty: "intermediate",
    quiz: {
      question: "Claude Opusの特徴は？",
      choices: ["最も安くて速い", "最も高性能で複雑なタスクに強い", "画像生成に特化している"],
      answer: 1,
      explanation: "Opusは最高性能モデルで、複雑な分析や高度な推論タスクに最適です。"
    }
  },
  {
    slug: "system-prompt-claude",
    name: "システムプロンプト（Claude）",
    nameEn: "System Prompt in Claude",
    category: "claude-specific",
    tagline: "Claudeの性格設定書",
    description: `Claudeに「あなたはこういう役割で、こういうルールで回答してください」と事前に指示する特別なプロンプトです。ユーザーからは見えない裏側の設定。ドラマの脚本で言えば「役柄の設定メモ」のようなもの。APIやProjectsで設定でき、Claudeの回答スタイル・トーン・制約を一貫してコントロールできます。`,
    example: `・「あなたは親切な日本語カスタマーサポートです」\n・「回答は200文字以内にしてください」\n・「技術用語は使わず平易に説明してください」`,
    relatedTerms: ["system-prompt", "claude-api", "projects", "persona"],
    difficulty: "intermediate",
    quiz: {
      question: "システムプロンプトの役割は？",
      choices: ["ユーザーの質問を翻訳する", "AIの振る舞いを事前に設定する", "AIの学習データを更新する"],
      answer: 1,
      explanation: "システムプロンプトはAIの役割やルールを事前に設定し、回答の一貫性を保つためのものです。"
    }
  },
  {
    slug: "claude-safety",
    name: "Claudeの安全機能",
    nameEn: "Claude Safety Features",
    category: "claude-specific",
    tagline: "暴走しないAIのブレーキ",
    description: `Claudeは有害な回答を避けるための安全機能が組み込まれています。暴力的な内容、違法行為の助長、個人情報の悪用などを丁重に断ります。Anthropicの「Constitutional AI」技術がベースで、AIに「憲法」のようなルールを与えて自己チェックさせる仕組み。安全性と有用性のバランスが特徴です。`,
    example: `・「ハッキングの方法を教えて」→ 丁重にお断り\n・個人を特定できる情報の生成を拒否\n・偏見を助長する回答の抑制`,
    relatedTerms: ["constitutional-ai", "anthropic", "ai-alignment", "ai-ethics"],
    difficulty: "beginner",
    quiz: {
      question: "Claudeの安全機能のベースとなる技術は？",
      choices: ["ファインチューニング", "Constitutional AI", "強化学習のみ"],
      answer: 1,
      explanation: "ClaudeはConstitutional AI技術により、AIに「憲法」のようなルールを与えて安全性を確保しています。"
    }
  },
  {
    slug: "claude-vision",
    name: "Claudeのビジョン機能",
    nameEn: "Claude Vision",
    category: "claude-specific",
    tagline: "画像を見て理解するClaude",
    description: `Claudeに画像を送ると、その内容を理解して説明・分析してくれる機能です。グラフの読み取り、スクリーンショットの説明、手書きメモの解読、写真の分析などが可能。テキストだけでなく視覚情報も扱える「マルチモーダル」機能の一つです。PDF資料を画像で送って要約してもらう使い方も人気です。`,
    example: `・グラフのスクリーンショットを送って数値を読み取らせる\n・手書きのホワイトボードの内容をテキスト化\n・商品写真を送って説明文を生成`,
    relatedTerms: ["multimodal", "claude", "artifacts", "claude-sonnet"],
    difficulty: "beginner",
    quiz: {
      question: "Claudeのビジョン機能でできないことは？",
      choices: ["グラフの読み取り", "動画のリアルタイム解析", "手書きメモの解読"],
      answer: 1,
      explanation: "Claudeのビジョン機能は静止画の分析が対象で、動画のリアルタイム解析はできません。"
    }
  },
  {
    slug: "claude-memory",
    name: "Claudeのメモリ機能",
    nameEn: "Claude Memory",
    category: "claude-specific",
    tagline: "前回の会話を覚えてくれるClaude",
    description: `Claudeが過去の会話や設定を記憶して、次回以降の会話に活かす機能です。毎回「私はマーケティング担当で…」と自己紹介しなくても、Claudeが覚えていてくれます。Projectsの「Custom Instructions」やclaude.mdファイルでも同様の持続的な記憶を設定できます。`,
    example: `・「前回の続きの分析をお願い」が通じる\n・好みの回答スタイルを覚えてもらう\n・プロジェクトの背景情報を毎回説明しなくてよくなる`,
    relatedTerms: ["claude", "projects", "claude-md", "context-window"],
    difficulty: "beginner",
    quiz: {
      question: "Claudeのメモリ機能のメリットは？",
      choices: ["毎回の自己紹介が不要になる", "回答速度が10倍になる", "料金が半額になる"],
      answer: 0,
      explanation: "メモリ機能により過去の情報を覚えてくれるため、毎回同じ説明をする手間が省けます。"
    }
  },
  {
    slug: "claude-api-models",
    name: "Claude APIモデル一覧",
    nameEn: "Claude API Models",
    category: "claude-specific",
    tagline: "用途に合わせてモデルを選ぶ",
    description: `Claude APIで利用できるモデルの一覧です。Opus（最高性能）、Sonnet（バランス型）、Haiku（高速・低コスト）の3つのグレードがあり、それぞれ世代（3, 3.5, 4など）があります。タスクの難易度や予算に応じて使い分けるのがコツ。簡単な仕事はHaiku、重要な仕事はOpusという使い分けが一般的です。`,
    example: `・大量メール処理 → Haiku（安くて速い）\n・日常業務 → Sonnet（バランス良い）\n・重要レポート → Opus（高品質）`,
    relatedTerms: ["claude-api", "claude-sonnet", "claude-haiku", "claude-opus"],
    difficulty: "intermediate",
    quiz: {
      question: "大量のメールを自動分類する場合、最適なモデルは？",
      choices: ["Opus（コスト度外視で最高品質）", "Sonnet（バランス型）", "Haiku（高速・低コスト）"],
      answer: 2,
      explanation: "大量処理にはコストと速度が重要なので、Haikuが最適です。"
    }
  },
  {
    slug: "claude-code-cli",
    name: "Claude Code CLI",
    nameEn: "Claude Code CLI",
    category: "claude-specific",
    tagline: "ターミナルから使うClaude開発ツール",
    description: `コマンドライン（ターミナル）から直接Claudeにコーディングを手伝ってもらえるツールです。ファイルの読み書き、コード生成、バグ修正、テスト作成まで、エディタを離れずにAIと協働できます。「claude」コマンドで起動し、自然言語で指示するだけでコードベース全体を理解して作業してくれます。`,
    example: `・「このバグを修正して」→ 自動でファイルを編集\n・「テストを追加して」→ テストコードを生成\n・「このプロジェクトの構造を説明して」→ 全ファイルを分析`,
    relatedTerms: ["claude-code", "claude-md", "claude", "git"],
    difficulty: "intermediate",
    quiz: {
      question: "Claude Code CLIの特徴は？",
      choices: ["ブラウザで使うチャットツール", "ターミナルからAIとコーディングできるツール", "画像生成ツール"],
      answer: 1,
      explanation: "Claude Code CLIはコマンドラインからClaudeと対話しながらコーディングできるツールです。"
    }
  },
  {
    slug: "usage-limit",
    name: "利用制限（Usage Limit）",
    nameEn: "Usage Limit",
    category: "claude-specific",
    tagline: "使いすぎを防ぐブレーキ",
    description: `Claudeの各プランに設定されている利用量の上限です。無料プランは1日の会話回数に制限があり、Proプランでも短時間に大量に使うと一時的に制限がかかります。「レート制限」とも関連しますが、こちらはプラン全体の利用枠。Maxプランは制限が大幅に緩和されています。`,
    example: `・無料プラン：1日約30回程度の会話\n・Proプラン：短時間の集中利用で一時制限\n・Maxプラン：大幅に緩和された利用枠`,
    relatedTerms: ["pricing-plans", "claude-pro", "claude-max", "rate-limit"],
    difficulty: "beginner",
    quiz: {
      question: "Claudeの利用制限について正しいものは？",
      choices: ["有料プランなら制限は一切ない", "プランによって利用量の上限が異なる", "無料プランには制限がない"],
      answer: 1,
      explanation: "すべてのプランに利用制限がありますが、上位プランほど制限が緩和されています。"
    }
  },
  {
    slug: "claude-conversation",
    name: "Claudeの会話管理",
    nameEn: "Claude Conversation Management",
    category: "claude-specific",
    tagline: "過去のやり取りを整理する",
    description: `Claudeとの会話はチャットごとに保存され、後から見返したり続きを再開したりできます。Projects機能を使えば、プロジェクト単位で会話を整理することも可能。ただしコンテキストウィンドウの上限を超えると古い会話は参照できなくなるため、重要な情報はProjects知識ベースに保存するのがおすすめです。`,
    example: `・過去の会話を検索して見返す\n・Projects内で会話を分類管理\n・長い会話は新規チャットに切り替え`,
    relatedTerms: ["claude", "projects", "context-window", "claude-memory"],
    difficulty: "beginner",
    quiz: {
      question: "長い会話でコンテキストウィンドウを超えるとどうなりますか？",
      choices: ["自動的に料金が追加される", "古い会話の内容が参照できなくなる", "Claudeが自動で要約してくれる"],
      answer: 1,
      explanation: "コンテキストウィンドウの上限を超えると、古い部分の会話は参照できなくなります。"
    }
  },
  {
    slug: "claude-files",
    name: "Claudeのファイルアップロード",
    nameEn: "Claude File Upload",
    category: "claude-specific",
    tagline: "資料を読み込ませて分析させる",
    description: `ClaudeにPDF、テキスト、画像、CSVなどのファイルをアップロードして分析させる機能です。契約書のレビュー、データ分析、論文の要約など、ファイルの内容を理解した上で回答してくれます。Projectsのナレッジベースに保存すれば、毎回アップロードしなくても常に参照できます。`,
    example: `・PDF契約書をアップロードしてリスク条項を抽出\n・CSVデータを分析してグラフ化\n・論文PDFを送って日本語で要約`,
    relatedTerms: ["claude", "projects", "claude-vision", "artifacts"],
    difficulty: "beginner",
    quiz: {
      question: "Claudeのファイルアップロードでできることは？",
      choices: ["ファイルを他人に送信する", "ファイルの内容を理解して分析・回答する", "ファイルのウイルスチェック"],
      answer: 1,
      explanation: "アップロードしたファイルの内容をClaudeが読み取り、分析や要約をしてくれます。"
    }
  },
  {
    slug: "prompt-caching",
    name: "プロンプトキャッシング",
    nameEn: "Prompt Caching",
    category: "claude-specific",
    tagline: "同じ前置きを使い回してコスト削減",
    description: `APIでClaudeを使う際、システムプロンプトなど毎回同じ部分を「キャッシュ（一時保存）」してトークン消費を抑える機能です。同じ前提条件で何度もAPIを呼ぶ場合、初回だけフルで送り、2回目以降はキャッシュから読み込むのでコストと速度が改善します。大量のAPI呼び出しをするサービスでは大きな節約になります。`,
    example: `・同じシステムプロンプトで100回API呼び出し → 大幅コスト削減\n・長いドキュメントを前提にした複数の質問\n・チャットボットの固定設定部分のキャッシュ`,
    relatedTerms: ["claude-api", "token-price", "api-pricing", "system-prompt"],
    difficulty: "advanced",
    quiz: {
      question: "プロンプトキャッシングの主なメリットは？",
      choices: ["回答の精度が上がる", "API利用コストと応答速度が改善する", "モデルが自動で学習する"],
      answer: 1,
      explanation: "同じプロンプト部分をキャッシュすることで、トークン消費とレイテンシを削減できます。"
    }
  },
  {
    slug: "tool-use",
    name: "ツールユース（Function Calling）",
    nameEn: "Tool Use / Function Calling",
    category: "claude-specific",
    tagline: "AIが外部ツールを呼び出す仕組み",
    description: `AIが自分だけでは対応できないタスク（天気予報の取得、データベース検索、計算など）を、外部のツールや関数を呼び出して実行する仕組みです。ClaudeのAPI機能の一つ。AIに「道具箱」を渡して「必要に応じて使ってね」と言うイメージ。AIエージェントの基盤技術です。`,
    example: `・「今日の東京の天気は？」→ 天気APIを呼び出して回答\n・「この計算をして」→ 計算ツールを使って正確に回答\n・「データベースから売上を取得して」→ SQLを実行`,
    relatedTerms: ["mcp", "ai-agent", "claude-api", "api"],
    difficulty: "advanced",
    quiz: {
      question: "ツールユースでAIができるようになることは？",
      choices: ["自分で新しいツールを開発する", "外部のAPIやツールを呼び出して情報を取得する", "インターネットに自由にアクセスする"],
      answer: 1,
      explanation: "ツールユースにより、AIが外部ツールを呼び出して自分だけでは得られない情報を取得・処理できます。"
    }
  },
  {
    slug: "streaming",
    name: "ストリーミング応答",
    nameEn: "Streaming Response",
    category: "claude-specific",
    tagline: "文字が流れるように表示される仕組み",
    description: `Claudeの回答が一気にではなく、文字が少しずつ流れるように表示される仕組みです。AIが全文を生成し終わるまで待つ必要がなく、途中経過をリアルタイムで確認できます。API利用時に「stream: true」と設定すると有効になります。ユーザー体験の向上と、長い回答の待ち時間解消に効果的です。`,
    example: `・Claudeの回答がタイピングのように表示される\n・長いコード生成の途中経過を確認できる\n・APIで設定：stream: true`,
    relatedTerms: ["claude-api", "api", "json", "rest-api"],
    difficulty: "intermediate",
    quiz: {
      question: "ストリーミング応答のメリットは？",
      choices: ["回答の精度が上がる", "待ち時間なく途中経過を確認できる", "料金が安くなる"],
      answer: 1,
      explanation: "ストリーミングにより全文生成を待たずに途中経過をリアルタイムで表示できます。"
    }
  },
  {
    slug: "anthropic-console",
    name: "Anthropicコンソール",
    nameEn: "Anthropic Console",
    category: "claude-specific",
    tagline: "Claude APIの管理画面",
    description: `Claude APIの利用状況確認、APIキーの管理、使用量の確認、請求情報の管理などができるWebダッシュボードです。console.anthropic.comからアクセスします。Workbenchというプロンプトのテスト環境も含まれており、API開発の拠点となる管理画面です。`,
    example: `・APIキーの発行・管理\n・月間の利用トークン数と料金の確認\n・Workbenchでプロンプトをテスト`,
    relatedTerms: ["claude-api", "api-key", "workbench", "api-pricing"],
    difficulty: "intermediate",
    quiz: {
      question: "Anthropicコンソールでできることは？",
      choices: ["Claudeと無料で会話する", "APIキーや利用状況を管理する", "AIモデルを自分で訓練する"],
      answer: 1,
      explanation: "AnthropicコンソールはClaude APIの管理ダッシュボードで、キー管理や利用状況確認ができます。"
    }
  },
  {
    slug: "batch-api",
    name: "バッチAPI",
    nameEn: "Batch API",
    category: "claude-specific",
    tagline: "大量リクエストをまとめて割安処理",
    description: `大量のAPIリクエストをまとめて送信し、一括処理してもらう機能です。通常のAPIより応答に時間がかかりますが、料金が50%オフになるのが最大のメリット。リアルタイム性が不要な大量データ処理（メール一括分類、書類一括要約など）に最適です。`,
    example: `・1000件の顧客レビューを一括で感情分析\n・過去の議事録を一括要約\n・大量のメールを自動分類`,
    relatedTerms: ["claude-api", "api-pricing", "token-price", "rate-limit"],
    difficulty: "advanced",
    quiz: {
      question: "バッチAPIのメリットは？",
      choices: ["応答が即座に返ってくる", "料金が大幅に割引される", "回答の精度が上がる"],
      answer: 1,
      explanation: "バッチAPIは応答に時間がかかる代わりに、通常の50%オフの料金で利用できます。"
    }
  },
  {
    slug: "claude-enterprise",
    name: "Claude Enterprise",
    nameEn: "Claude Enterprise",
    category: "claude-specific",
    tagline: "企業向けの高セキュリティプラン",
    description: `大企業向けのClaudeプランです。SSO（シングルサインオン）、管理者コントロール、監査ログ、500Kトークンの拡張コンテキストウィンドウなど、企業のセキュリティ・管理要件に対応した機能が含まれます。社内データの機密性を保ちながらAIを活用したい企業に適しています。`,
    example: `・社内の機密文書をClaudeで分析（データ保護あり）\n・全社員のClaude利用を管理者が一元管理\n・利用ログの監査対応`,
    relatedTerms: ["claude-team", "claude-pro", "pricing-plans", "claude"],
    difficulty: "intermediate",
    quiz: {
      question: "Claude Enterpriseの特徴は？",
      choices: ["個人向けの無料プラン", "企業向けの高セキュリティ機能", "開発者向けのコーディングツール"],
      answer: 1,
      explanation: "Enterpriseは企業向けにSSO、管理者コントロール、監査ログなどの機能を提供するプランです。"
    }
  },
  {
    slug: "citations",
    name: "引用機能（Citations）",
    nameEn: "Citations",
    category: "claude-specific",
    tagline: "回答の根拠を明示する機能",
    description: `Claudeがアップロードされた文書を参照して回答する際、どの部分から情報を得たかを引用として明示する機能です。「このレポートの○ページに記載の通り…」のように、回答の根拠を示してくれます。情報の正確性を確認しやすくなり、ハルシネーション（嘘）の検出にも役立ちます。`,
    example: `・契約書分析で「第3条2項に基づくと…」と引用\n・論文の要約で参照箇所を明示\n・レポートのファクトチェック`,
    relatedTerms: ["claude", "hallucination", "rag", "claude-files"],
    difficulty: "intermediate",
    quiz: {
      question: "引用機能のメリットは？",
      choices: ["回答が短くなる", "回答の根拠を確認でき正確性が向上する", "処理速度が速くなる"],
      answer: 1,
      explanation: "引用機能により回答の根拠を確認でき、情報の正確性やハルシネーションの検出に役立ちます。"
    }
  },

  // ─── API・開発 (20 terms) ──────────────────────────────────────────
  {
    slug: "html",
    name: "HTML",
    nameEn: "HyperText Markup Language",
    category: "api-dev",
    tagline: "Webページの骨組み",
    description: `Webページの構造を定義する言語です。見出し、段落、画像、リンクなどを「タグ」で囲んで配置します。家で言えば「間取り図」のようなもの。HTMLだけだと白黒の味気ないページですが、CSS（装飾）とJavaScript（動き）を組み合わせることで、見た目も機能も豊かなWebサイトになります。`,
    example: `・<h1>見出し</h1> で大見出しを作る\n・<p>本文</p> で段落を作る\n・<img src="photo.jpg"> で画像を表示`,
    relatedTerms: ["css", "react", "nextjs", "deploy"],
    difficulty: "beginner",
    quiz: {
      question: "HTMLの役割は？",
      choices: ["Webページの見た目を装飾する", "Webページの構造を定義する", "Webページに動きをつける"],
      answer: 1,
      explanation: "HTMLはWebページの骨組み（構造）を定義する言語です。装飾はCSS、動きはJavaScriptの役割です。"
    }
  },
  {
    slug: "css",
    name: "CSS",
    nameEn: "Cascading Style Sheets",
    category: "api-dev",
    tagline: "Webページのデザイン担当",
    description: `HTMLで作った骨組みに、色・フォント・レイアウトなどの「見た目」を指定する言語です。家で言えば「内装デザイン」。HTMLが間取りを決め、CSSが壁紙や家具の配置を決めるイメージ。Tailwind CSSなどのフレームワークを使えば、効率的にデザインできます。`,
    example: `・文字の色を赤にする：color: red;\n・背景色を設定：background-color: blue;\n・要素を中央に配置：margin: auto;`,
    relatedTerms: ["html", "tailwind-css", "react", "nextjs"],
    difficulty: "beginner",
    quiz: {
      question: "CSSの役割は？",
      choices: ["Webページの構造を作る", "Webページの見た目を装飾する", "サーバーとの通信を行う"],
      answer: 1,
      explanation: "CSSはWebページの色、フォント、レイアウトなどの見た目を担当する言語です。"
    }
  },
  {
    slug: "database",
    name: "データベース",
    nameEn: "Database",
    category: "database",
    tagline: "データの整理棚",
    description: `大量のデータを整理して保存し、必要な時にすぐ取り出せる仕組みです。Excelの超強化版のようなもの。顧客情報、注文履歴、商品データなど、あらゆるWebサービスの裏側にデータベースがあります。代表的なものにMySQL、PostgreSQL、MongoDBなどがあります。SQLという言語でデータを操作します。`,
    example: `・ECサイトの商品・注文・顧客データの管理\n・SNSの投稿・ユーザー情報の保存\n・社内の在庫管理システム`,
    relatedTerms: ["sql", "api", "cloud", "deploy"],
    difficulty: "beginner",
    quiz: {
      question: "データベースの役割は？",
      choices: ["Webページのデザインを管理する", "データを整理して保存・検索できるようにする", "メールを送受信する"],
      answer: 1,
      explanation: "データベースは大量のデータを整理・保存し、必要な時に素早く取り出せる仕組みです。"
    }
  },
  {
    slug: "sql",
    name: "SQL",
    nameEn: "Structured Query Language",
    category: "database",
    tagline: "データベースへの命令語",
    description: `データベースに「このデータを取ってきて」「このデータを追加して」と指示するための言語です。「SELECT * FROM 顧客 WHERE 年齢 > 30」のように、英語に近い文法でデータを検索・追加・更新・削除できます。非エンジニアでもSQLを覚えるとデータ分析の幅が大きく広がります。AIにSQLを書いてもらうことも可能です。`,
    example: `・SELECT name FROM users WHERE age > 30（30歳以上のユーザー名を取得）\n・INSERT INTO orders ... （注文データを追加）\n・AIに「こういうデータが欲しい」と言えばSQLを生成してくれる`,
    relatedTerms: ["database", "api", "claude", "no-code"],
    difficulty: "intermediate",
    quiz: {
      question: "SQLで「データを検索する」際に使うキーワードは？",
      choices: ["INSERT", "SELECT", "DELETE"],
      answer: 1,
      explanation: "SELECTはデータベースからデータを検索・取得する際に使うSQLのキーワードです。"
    }
  },
  {
    slug: "cloud",
    name: "クラウド",
    nameEn: "Cloud Computing",
    category: "api-dev",
    tagline: "インターネット越しに使えるコンピュータ",
    description: `自前のサーバーを持たず、インターネット経由で他社のコンピュータ資源を利用することです。AWS、Google Cloud、Azureなどが代表的。水道のようなもので、蛇口をひねれば水が出るように、必要な分だけコンピュータの力を借りて使います。初期投資が少なく、使った分だけ払えばいいのがメリットです。`,
    example: `・Webサイトをクラウド上にホスティング\n・データのバックアップをクラウドに保存\n・AIの学習をクラウドのGPUで実行`,
    relatedTerms: ["aws", "serverless", "deploy", "docker"],
    difficulty: "beginner",
    quiz: {
      question: "クラウドの最大のメリットは？",
      choices: ["インターネット不要で使える", "自前のサーバーが不要で必要な分だけ使える", "データが絶対に消えない"],
      answer: 1,
      explanation: "クラウドは自前のサーバーを持たず、必要な分だけ借りて使えるのが最大のメリットです。"
    }
  },
  {
    slug: "aws",
    name: "AWS",
    nameEn: "Amazon Web Services",
    category: "api-dev",
    tagline: "Amazonが提供する世界最大のクラウド",
    description: `Amazon社が運営する世界最大のクラウドサービスです。サーバー、データベース、AI、ストレージなど200以上のサービスを提供。世界のクラウド市場でシェア約30%と圧倒的1位。Netflix、Airbnbなど多くの有名サービスがAWS上で動いています。Amazon Bedrockを通じてClaudeも利用可能です。`,
    example: `・EC2（仮想サーバー）でWebアプリを動かす\n・S3（ストレージ）にファイルを保存\n・Amazon BedrockでClaude APIを使う`,
    relatedTerms: ["cloud", "serverless", "deploy", "claude-api"],
    difficulty: "intermediate",
    quiz: {
      question: "AWSの運営企業は？",
      choices: ["Google", "Microsoft", "Amazon"],
      answer: 2,
      explanation: "AWSはAmazon社が運営する世界最大のクラウドサービスです。"
    }
  },
  {
    slug: "serverless",
    name: "サーバーレス",
    nameEn: "Serverless",
    category: "api-dev",
    tagline: "サーバー管理不要でコードだけに集中",
    description: `サーバーの管理をクラウド事業者に任せ、コードだけを書けばいい仕組みです。「サーバーがない」のではなく「サーバーの面倒を見なくていい」という意味。AWS Lambda、Vercel、Cloudflare Workersなどが代表例。使った分だけの従量課金で、アクセスがゼロの時はコストもゼロになります。`,
    example: `・AWS Lambdaで定期実行の処理を作る\n・Vercelでフロントエンドをデプロイ\n・使った分だけ課金（アクセスゼロ＝コストゼロ）`,
    relatedTerms: ["cloud", "aws", "vercel", "deploy"],
    difficulty: "intermediate",
    quiz: {
      question: "「サーバーレス」の正しい意味は？",
      choices: ["サーバーを一切使わない", "サーバーの管理をクラウドに任せる", "ローカルPCだけで動く"],
      answer: 1,
      explanation: "サーバーレスは「サーバーがない」ではなく「管理不要」という意味で、クラウドが裏側を担当します。"
    }
  },
  {
    slug: "http-https",
    name: "HTTP / HTTPS",
    nameEn: "HyperText Transfer Protocol (Secure)",
    category: "api-dev",
    tagline: "Webの通信ルール",
    description: `Webブラウザとサーバーがデータをやり取りする際のルール（プロトコル）です。HTTPSはHTTPに暗号化を加えたもので、通信内容が盗み見されないようになっています。URLの先頭が「https://」なら安全な通信。現在はほぼすべてのWebサイトがHTTPSを使っています。`,
    example: `・https://claude.ai（暗号化された安全な通信）\n・鍵マーク🔒がブラウザに表示＝HTTPS\n・APIリクエストもHTTPSで送信`,
    relatedTerms: ["ssl-tls", "api", "rest-api", "dns"],
    difficulty: "beginner",
    quiz: {
      question: "HTTPSの「S」の意味は？",
      choices: ["Speed（高速）", "Secure（安全）", "Simple（簡単）"],
      answer: 1,
      explanation: "HTTPSのSはSecure（安全）で、通信を暗号化してデータを保護する意味です。"
    }
  },
  {
    slug: "ssl-tls",
    name: "SSL/TLS",
    nameEn: "Secure Sockets Layer / Transport Layer Security",
    category: "api-dev",
    tagline: "通信を暗号化する鍵",
    description: `インターネット通信を暗号化して安全にする技術です。SSL証明書をサーバーに設置することで、HTTPSが使えるようになります。オンラインショッピングでクレジットカード情報を入力する時、SSL/TLSが通信を暗号化して第三者に盗み見されるのを防いでいます。`,
    example: `・ECサイトの決済ページの暗号化\n・APIキーの安全な送受信\n・ブラウザの鍵マーク表示`,
    relatedTerms: ["http-https", "api-key", "dns", "deploy"],
    difficulty: "intermediate",
    quiz: {
      question: "SSL/TLSの主な役割は？",
      choices: ["Webページの表示速度を上げる", "通信を暗号化して安全にする", "データベースを管理する"],
      answer: 1,
      explanation: "SSL/TLSはインターネット通信を暗号化し、第三者による盗聴を防ぐ技術です。"
    }
  },
  {
    slug: "dns",
    name: "DNS",
    nameEn: "Domain Name System",
    category: "api-dev",
    tagline: "インターネットの電話帳",
    description: `ドメイン名（例：claude.ai）をIPアドレス（例：104.18.32.7）に変換する仕組みです。人間は「claude.ai」という名前で覚えますが、コンピュータは数字のIPアドレスで通信します。DNSはその変換を自動でやってくれる「電話帳」のような存在。Webサイトを公開する際に必ず設定が必要です。`,
    example: `・claude.ai → 104.18.32.7 に変換\n・ドメインを購入したらDNS設定が必要\n・DNS障害 = Webサイトにアクセスできなくなる`,
    relatedTerms: ["http-https", "deploy", "cdn", "cloud"],
    difficulty: "intermediate",
    quiz: {
      question: "DNSの役割は？",
      choices: ["ドメイン名をIPアドレスに変換する", "Webページのデザインを管理する", "メールを送受信する"],
      answer: 0,
      explanation: "DNSはドメイン名（例：claude.ai）を機械が理解できるIPアドレスに変換する仕組みです。"
    }
  },
  {
    slug: "cdn",
    name: "CDN",
    nameEn: "Content Delivery Network",
    category: "api-dev",
    tagline: "世界中にコンテンツを高速配信",
    description: `Webサイトの画像や動画などを世界各地のサーバーにコピーして配置し、ユーザーに最も近いサーバーから配信する仕組みです。東京にいる人は東京のサーバーから、NYにいる人はNYのサーバーから受け取るので高速。CloudflareやAmazon CloudFrontが代表的です。`,
    example: `・動画配信サービスの高速表示\n・Webサイトの画像を世界中で高速表示\n・CloudflareでWebサイトを高速化`,
    relatedTerms: ["cloud", "deploy", "dns", "http-https"],
    difficulty: "intermediate",
    quiz: {
      question: "CDNが高速な理由は？",
      choices: ["データを圧縮するから", "ユーザーに最も近いサーバーから配信するから", "特別な回線を使うから"],
      answer: 1,
      explanation: "CDNは世界各地にサーバーを配置し、最も近い場所から配信することで高速化を実現します。"
    }
  },
  {
    slug: "javascript",
    name: "JavaScript",
    nameEn: "JavaScript",
    category: "api-dev",
    tagline: "Webページに動きをつける言語",
    description: `Webページにインタラクティブな動きをつけるプログラミング言語です。ボタンをクリックした時の処理、アニメーション、フォームの入力チェックなどを担当。現在はブラウザだけでなく、サーバー側（Node.js）でも使われ、Web開発の「共通語」と言える存在。ReactやNext.jsもJavaScriptがベースです。`,
    example: `・ボタンクリックで内容が切り替わる\n・入力フォームのリアルタイムバリデーション\n・React/Next.jsアプリの開発`,
    relatedTerms: ["typescript", "react", "nextjs", "html"],
    difficulty: "beginner",
    quiz: {
      question: "JavaScriptの主な用途は？",
      choices: ["データベースの管理", "Webページにインタラクティブな動きをつける", "AIモデルの学習"],
      answer: 1,
      explanation: "JavaScriptはWebページに動的な振る舞いを加えるための言語です。"
    }
  },
  {
    slug: "python",
    name: "Python（パイソン）",
    nameEn: "Python",
    category: "api-dev",
    tagline: "AIとデータ分析の定番言語",
    description: `シンプルで読みやすい文法が特徴のプログラミング言語です。AI・機械学習・データ分析の分野で圧倒的に人気があり、ChatGPTもClaudeもPythonで開発されています。「プログラミング初心者が最初に学ぶ言語」としても人気。Claudeに「Pythonで○○して」と頼めばコードを書いてくれます。`,
    example: `・データ分析（pandas、numpyライブラリ）\n・AI/機械学習（PyTorch、TensorFlow）\n・WebアプリのバックエンドAPI開発（FastAPI）`,
    relatedTerms: ["typescript", "api", "ai", "claude-code"],
    difficulty: "beginner",
    quiz: {
      question: "PythonがAI分野で人気の理由は？",
      choices: ["処理速度が最も速いから", "AI向けのライブラリが豊富で文法がシンプルだから", "Googleが開発したから"],
      answer: 1,
      explanation: "Pythonは文法がシンプルで、AI・機械学習向けのライブラリが非常に豊富なため人気です。"
    }
  },
  {
    slug: "backend",
    name: "バックエンド",
    nameEn: "Backend",
    category: "api-dev",
    tagline: "Webサービスの裏側の仕組み",
    description: `ユーザーからは見えない「サーバー側」の処理のことです。データベースへの保存、ログイン認証、API処理、ビジネスロジックの実行などを担当。レストランで言えば「厨房」。お客さんに見えるのはフロントエンド（ホール）ですが、裏の厨房（バックエンド）が料理を作っています。`,
    example: `・ログインの認証処理\n・商品情報のデータベース管理\n・APIのリクエスト処理`,
    relatedTerms: ["frontend", "api", "database", "serverless"],
    difficulty: "beginner",
    quiz: {
      question: "バックエンドの役割は？",
      choices: ["画面のデザインを作る", "サーバー側のデータ処理やロジックを担当する", "ユーザーの操作を検知する"],
      answer: 1,
      explanation: "バックエンドはサーバー側でデータベース処理、認証、ビジネスロジックなどを担当します。"
    }
  },
  {
    slug: "frontend",
    name: "フロントエンド",
    nameEn: "Frontend",
    category: "api-dev",
    tagline: "ユーザーが直接触れる画面側",
    description: `ユーザーが実際に目にする画面やUI（ユーザーインターフェース）の部分です。ボタン、フォーム、アニメーション、レイアウトなどを作ります。レストランの「ホール」にあたる部分。HTML、CSS、JavaScriptが基本技術で、ReactやNext.jsなどのフレームワークを使って効率的に開発します。`,
    example: `・Webサイトのデザインとレイアウト\n・ボタンやフォームの動作\n・スマホ対応（レスポンシブデザイン）`,
    relatedTerms: ["backend", "html", "css", "react"],
    difficulty: "beginner",
    quiz: {
      question: "フロントエンドの主な技術は？",
      choices: ["SQL、Python、Java", "HTML、CSS、JavaScript", "AWS、Docker、Linux"],
      answer: 1,
      explanation: "フロントエンドはHTML（構造）、CSS（デザイン）、JavaScript（動き）が基本技術です。"
    }
  },
  {
    slug: "oauth",
    name: "OAuth",
    nameEn: "OAuth",
    category: "api-dev",
    tagline: "パスワードを渡さずにログインを許可",
    description: `「Googleでログイン」「GitHubでログイン」のように、パスワードを直接渡さずに他のサービスにアクセス権を与える仕組みです。ホテルのカードキーに例えると、マスターキー（パスワード）を渡す代わりに、特定の部屋だけ開けられるカードキー（トークン）を発行するイメージ。安全にサービス連携できます。`,
    example: `・「Googleアカウントでログイン」ボタン\n・SlackとGoogleカレンダーの連携\n・GitHub連携でのデプロイ`,
    relatedTerms: ["api", "api-key", "http-https", "ssl-tls"],
    difficulty: "intermediate",
    quiz: {
      question: "OAuthの特徴は？",
      choices: ["パスワードを直接共有する", "パスワードを渡さずにアクセス権を付与する", "暗号化通信を行う"],
      answer: 1,
      explanation: "OAuthはパスワードを直接渡さずに、限定的なアクセス権だけを安全に付与する仕組みです。"
    }
  },
  {
    slug: "cors",
    name: "CORS",
    nameEn: "Cross-Origin Resource Sharing",
    category: "api-dev",
    tagline: "異なるサイト間のデータ共有ルール",
    description: `Webブラウザのセキュリティ機能で、あるサイトから別のサイトのデータにアクセスする際のルールです。「サイトAからサイトBのAPIを呼ぶ」時に、サイトBが「サイトAからのアクセスはOK」と許可していないとエラーになります。API開発でよくハマるポイントの一つです。`,
    example: `・フロントエンドからAPIを呼ぶとCORSエラー → サーバー側で許可設定\n・「Access-Control-Allow-Origin」ヘッダーで許可\n・開発中によく遭遇するエラー`,
    relatedTerms: ["api", "rest-api", "http-https", "frontend"],
    difficulty: "advanced",
    quiz: {
      question: "CORSエラーが発生する原因は？",
      choices: ["サーバーがダウンしている", "異なるサイトからのアクセスが許可されていない", "インターネット接続が切れている"],
      answer: 1,
      explanation: "CORSエラーは、アクセス先のサーバーが別ドメインからのリクエストを許可していない場合に発生します。"
    }
  },
  {
    slug: "graphql",
    name: "GraphQL",
    nameEn: "GraphQL",
    category: "api-dev",
    tagline: "欲しいデータだけを取得するAPI形式",
    description: `Facebookが開発したAPI通信の仕組みです。REST APIは「このURLにアクセスすると決まった形のデータが返る」のに対し、GraphQLは「必要なデータだけを指定して取得」できます。レストランで例えると、定食（REST）ではなくアラカルト（GraphQL）で好きな料理だけ注文するイメージです。`,
    example: `・「ユーザー名とメールだけ取得」と指定できる\n・1回のリクエストで複数のデータを取得\n・GitHub APIはGraphQLに対応`,
    relatedTerms: ["rest-api", "api", "json", "backend"],
    difficulty: "advanced",
    quiz: {
      question: "GraphQLとREST APIの違いは？",
      choices: ["GraphQLの方が古い技術", "GraphQLは必要なデータだけを指定して取得できる", "GraphQLはHTTPを使わない"],
      answer: 1,
      explanation: "GraphQLは欲しいデータの形を指定してリクエストでき、過不足のないデータ取得が可能です。"
    }
  },
  {
    slug: "yaml",
    name: "YAML",
    nameEn: "YAML Ain't Markup Language",
    category: "api-dev",
    tagline: "人間に読みやすい設定ファイル形式",
    description: `設定ファイルやデータを記述するためのフォーマットです。JSONと似た役割ですが、YAMLはインデント（字下げ）で構造を表現するため、人間にとって読みやすいのが特徴。GitHub ActionsやDocker Compose、CI/CDの設定ファイルなどでよく使われます。`,
    example: `・GitHub Actionsのワークフロー設定（.yml）\n・docker-compose.ymlでコンテナ構成を定義\n・CI/CDパイプラインの設定`,
    relatedTerms: ["json", "github-actions", "docker", "ci-cd"],
    difficulty: "intermediate",
    quiz: {
      question: "YAMLの特徴は？",
      choices: ["波括弧で構造を表す", "インデントで構造を表し読みやすい", "バイナリ形式で高速"],
      answer: 1,
      explanation: "YAMLはインデント（字下げ）で構造を表現するため、人間にとって読みやすいフォーマットです。"
    }
  },

  // ─── プロンプト術 (20 terms) ────────────────────────────────────────
  {
    slug: "tree-of-thought",
    name: "Tree of Thought（思考の木）",
    nameEn: "Tree of Thought",
    category: "prompt-tech",
    tagline: "複数の可能性を枝分かれで探る",
    description: `AIに1つの解答をいきなり出させるのではなく、複数の思考の分岐（枝）を探索させるプロンプト技法です。将棋の先読みのように「Aパターンならこうなる、Bパターンならこうなる…」と考えさせて最良の答えを選びます。複雑な問題や創造的なタスクで、Chain of Thoughtよりさらに深い思考を引き出せます。`,
    example: `・「3つの異なるアプローチを考え、それぞれの結果を予測してから最良を選んで」\n・事業戦略の多角的検討\n・難しいパズルや数学問題`,
    relatedTerms: ["chain-of-thought", "prompt-engineering", "few-shot", "extended-thinking"],
    difficulty: "advanced",
    quiz: {
      question: "Tree of Thoughtの特徴は？",
      choices: ["1つの正解を即座に出す", "複数の思考の分岐を探索して最良を選ぶ", "過去の会話を木構造で記録する"],
      answer: 1,
      explanation: "Tree of Thoughtは複数の思考パスを枝分かれで探索し、最良の解を見つける手法です。"
    }
  },
  {
    slug: "self-consistency",
    name: "自己一貫性（Self-Consistency）",
    nameEn: "Self-Consistency",
    category: "prompt-tech",
    tagline: "複数回答の多数決で精度アップ",
    description: `同じ質問に対してAIに複数回答を生成させ、最も多い回答を「正解」として採用する手法です。選挙の多数決のようなもの。1回の回答では間違えることがあっても、10回中8回同じ答えなら信頼性が高い。特に数学や論理的推論で効果的です。APIで温度設定を上げて多様な回答を生成し、集約します。`,
    example: `・数学の問題を5回解かせて最も多い答えを採用\n・temperature を上げて多様な回答を生成\n・重要な判断は複数回生成して確認`,
    relatedTerms: ["temperature", "chain-of-thought", "prompt-engineering"],
    difficulty: "advanced",
    quiz: {
      question: "Self-Consistencyの仕組みは？",
      choices: ["AIに自己批判させる", "複数回答を生成して多数決で決める", "一貫した性格をAIに設定する"],
      answer: 1,
      explanation: "Self-Consistencyは同じ問題に複数の回答を生成させ、多数派の答えを採用する手法です。"
    }
  },
  {
    slug: "meta-prompt",
    name: "メタプロンプト",
    nameEn: "Meta-Prompt",
    category: "prompt-tech",
    tagline: "プロンプトを作るためのプロンプト",
    description: `「良いプロンプトを書いて」とAIに頼んでプロンプト自体を生成させる手法です。プロンプト作成に慣れていない人でも、AIに「○○のタスク用の効果的なプロンプトを作って」と言えば、構造化された高品質なプロンプトが得られます。プロンプトエンジニアリングの入門として最も手軽な方法です。`,
    example: `・「営業メール用の効果的なプロンプトを作って」\n・「データ分析レポートを書くプロンプトを設計して」\n・WorkbenchやProjectsでテンプレートとして保存`,
    relatedTerms: ["prompt-engineering", "prompt-template", "system-prompt", "instruction"],
    difficulty: "intermediate",
    quiz: {
      question: "メタプロンプトとは？",
      choices: ["AIの内部設定を変更するプロンプト", "プロンプト自体をAIに生成させる手法", "複数のプロンプトを同時に実行する方法"],
      answer: 1,
      explanation: "メタプロンプトは「プロンプトを作るプロンプト」で、AI自身に効果的なプロンプトを設計させます。"
    }
  },
  {
    slug: "delimiter",
    name: "デリミタ（区切り記号）",
    nameEn: "Delimiter",
    category: "prompt-tech",
    tagline: "プロンプトの区切りを明確にする記号",
    description: `プロンプト内で「指示」と「データ」を明確に区別するための記号やタグです。「---」「###」「<data>タグ」などが使われます。区切りがないとAIが指示とデータを混同してしまうことがあります。特にユーザー入力を扱う場合、プロンプトインジェクション防止にも効果的です。`,
    example: `・### 指示 ### と ### データ ### で区切る\n・<input>ここにユーザー入力</input>\n・--- 以下の文章を要約してください ---`,
    relatedTerms: ["xml-tags", "prompt-injection", "prompt-template", "system-prompt"],
    difficulty: "intermediate",
    quiz: {
      question: "デリミタを使う主な理由は？",
      choices: ["回答を短くするため", "指示とデータを明確に区別するため", "AIの処理速度を上げるため"],
      answer: 1,
      explanation: "デリミタは指示とデータの境界を明確にし、AIの誤解やプロンプトインジェクションを防ぎます。"
    }
  },
  {
    slug: "step-by-step",
    name: "ステップバイステップ指示",
    nameEn: "Step-by-Step Instruction",
    category: "prompt-tech",
    tagline: "「順番に考えて」の魔法の一言",
    description: `プロンプトに「ステップバイステップで考えてください」と付け加えるだけで、AIの回答精度が向上するテクニックです。Chain of Thoughtの簡易版。AIが途中の思考過程を飛ばさずに回答するため、特に計算問題や論理的な推論で効果があります。最も手軽に使えるプロンプトテクニックの一つです。`,
    example: `・「この問題をステップバイステップで解いてください」\n・「Let's think step by step.」\n・複雑な指示を番号付きリストで分解`,
    relatedTerms: ["chain-of-thought", "prompt-engineering", "instruction", "zero-shot"],
    difficulty: "beginner",
    quiz: {
      question: "ステップバイステップ指示が効果的な理由は？",
      choices: ["AIが高速に処理できるから", "途中の思考過程を飛ばさず回答するから", "プロンプトが短くなるから"],
      answer: 1,
      explanation: "AIに順を追って考えさせることで、思考の飛躍を防ぎ回答精度が向上します。"
    }
  },
  {
    slug: "negative-prompt",
    name: "ネガティブプロンプト",
    nameEn: "Negative Prompt",
    category: "prompt-tech",
    tagline: "「やらないでほしいこと」を伝える技術",
    description: `AIに「してほしいこと」だけでなく「しないでほしいこと」も明示する手法です。画像生成AIでは「ぼやけた画像は除外」のように使いますが、テキスト生成でも「箇条書きは使わないで」「専門用語は避けて」と制約を加えると回答の質がコントロールしやすくなります。`,
    example: `・「専門用語を使わずに説明してください」\n・「箇条書きではなく文章で回答してください」\n・画像生成：「blurry, low quality を除外」`,
    relatedTerms: ["prompt-engineering", "instruction", "output-format", "system-prompt"],
    difficulty: "beginner",
    quiz: {
      question: "ネガティブプロンプトとは？",
      choices: ["否定的な回答をさせるプロンプト", "AIにしないでほしいことを指示する手法", "エラーを出すプロンプト"],
      answer: 1,
      explanation: "ネガティブプロンプトは「こうしないで」という制約をAIに伝え、出力をコントロールする手法です。"
    }
  },
  {
    slug: "iterative-refinement",
    name: "反復改善（Iterative Refinement）",
    nameEn: "Iterative Refinement",
    category: "prompt-tech",
    tagline: "何度もフィードバックして磨き上げる",
    description: `AIの出力に対して「ここをもっとこうして」とフィードバックを繰り返し、回答を改善していく手法です。一発で完璧な回答を求めるのではなく、対話を重ねて品質を上げていきます。彫刻家が粗削りから少しずつ精密に仕上げるように、AIの回答も段階的に磨けます。`,
    example: `・「もっとカジュアルなトーンにして」\n・「具体例を3つ追加して」\n・「300字以内に短縮して」\n・「この部分をもっと詳しく」`,
    relatedTerms: ["prompt-engineering", "output-format", "instruction", "persona"],
    difficulty: "beginner",
    quiz: {
      question: "反復改善のポイントは？",
      choices: ["毎回新しい会話で質問する", "フィードバックを重ねて段階的に品質を上げる", "1回のプロンプトに全指示を詰め込む"],
      answer: 1,
      explanation: "反復改善は対話を通じてフィードバックを繰り返し、段階的に回答品質を向上させる手法です。"
    }
  },
  {
    slug: "structured-output",
    name: "構造化出力",
    nameEn: "Structured Output",
    category: "prompt-tech",
    tagline: "AIの回答を決まった形式で受け取る",
    description: `AIの回答をJSON、CSV、表形式など、プログラムで処理しやすい形式で出力させるテクニックです。「以下のJSON形式で回答してください」と指定することで、自動化パイプラインに組み込みやすくなります。API利用時に特に重要で、後続の処理と連携させるために必須のスキルです。`,
    example: `・「JSON形式で出力して：{name: ..., summary: ...}」\n・「CSVフォーマットで出力して」\n・「表形式（マークダウンテーブル）で整理して」`,
    relatedTerms: ["output-format", "json", "prompt-template", "api"],
    difficulty: "intermediate",
    quiz: {
      question: "構造化出力が重要な理由は？",
      choices: ["見た目がきれいになるから", "プログラムで自動処理しやすくなるから", "AIの回答精度が上がるから"],
      answer: 1,
      explanation: "構造化出力によりAIの回答をプログラムで自動処理でき、ワークフローに組み込みやすくなります。"
    }
  },
  {
    slug: "context-stuffing",
    name: "コンテキストスタッフィング",
    nameEn: "Context Stuffing",
    category: "prompt-tech",
    tagline: "必要な情報をプロンプトに詰め込む",
    description: `AIに回答させたい内容に関連する情報をプロンプトに大量に盛り込む手法です。AIは「文脈にある情報」を基に回答するため、必要な背景情報・データ・参考資料をしっかり渡すことで回答の質が大幅に向上します。RAGのコンセプトにも通じる基本的な考え方です。`,
    example: `・会議の議事録を貼り付けて「まとめて」\n・商品仕様書を全文渡して「FAQを作って」\n・過去のメールを貼って「この件の経緯を整理して」`,
    relatedTerms: ["context-window", "rag", "prompt-engineering", "token"],
    difficulty: "intermediate",
    quiz: {
      question: "コンテキストスタッフィングの効果は？",
      choices: ["プロンプトを短くできる", "必要な情報を渡すことで回答の質が向上する", "AIの応答速度が上がる"],
      answer: 1,
      explanation: "関連情報を十分に渡すことで、AIはより正確で具体的な回答を生成できます。"
    }
  },
  {
    slug: "few-shot-examples",
    name: "Few-Shotの例示テクニック",
    nameEn: "Few-Shot Examples",
    category: "prompt-tech",
    tagline: "お手本を見せて真似させる",
    description: `AIに期待する回答の「お手本」を2〜3個プロンプト内に示して、同じ形式・品質で回答させる手法です。言葉で説明するより「こういう感じで」と見せた方がAIに伝わりやすい。メールの文体統一、レビュー回答の定型化、データの分類ルールの伝達などに効果的です。`,
    example: `・例1: 入力「素晴らしい」→ 出力「ポジティブ」\n・例2: 入力「最悪」→ 出力「ネガティブ」\n・入力「まあまあ」→ ?（AIが「ニュートラル」と回答）`,
    relatedTerms: ["few-shot", "zero-shot", "prompt-template", "output-format"],
    difficulty: "intermediate",
    quiz: {
      question: "Few-Shot例示が効果的な場面は？",
      choices: ["回答形式を厳密に統一したい時", "AIに自由に創作させたい時", "プロンプトを最短にしたい時"],
      answer: 0,
      explanation: "お手本を見せることで、回答の形式・品質・トーンを効果的にコントロールできます。"
    }
  },
  {
    slug: "prompt-decomposition",
    name: "プロンプト分解",
    nameEn: "Prompt Decomposition",
    category: "prompt-tech",
    tagline: "複雑な問題を小さく分けて解く",
    description: `大きくて複雑なタスクを、小さなサブタスクに分解してAIに順番にやらせる手法です。「市場分析レポートを書いて」ではなく「①市場規模を調べて→②競合を分析して→③自社の強みを整理して→④レポートにまとめて」と分けると、各段階の品質が上がります。プロンプトチェーンとも関連します。`,
    example: `・大きなレポート → 調査→分析→執筆と段階的に\n・コード開発 → 設計→実装→テストと分割\n・企画書 → ターゲット定義→課題整理→提案作成`,
    relatedTerms: ["prompt-chain", "chain-of-thought", "step-by-step", "instruction"],
    difficulty: "intermediate",
    quiz: {
      question: "プロンプト分解が効果的な理由は？",
      choices: ["プロンプトが短くなるから", "各サブタスクの品質を個別に管理できるから", "AIの料金が安くなるから"],
      answer: 1,
      explanation: "複雑なタスクを分解すると、各段階でAIの出力を確認・改善でき、最終的な品質が向上します。"
    }
  },
  {
    slug: "summarization-prompt",
    name: "要約プロンプト",
    nameEn: "Summarization Prompt",
    category: "prompt-tech",
    tagline: "長文を的確にまとめるコツ",
    description: `AIに効果的に文章を要約させるためのプロンプト設計のことです。ただ「要約して」と言うだけでなく、「○文字以内で」「要点を3つに絞って」「経営陣向けに」など条件を明示すると品質が上がります。議事録、論文、報告書など、ビジネスで最も使用頻度が高いAI活用の一つです。`,
    example: `・「この会議録を200字以内で、結論と次のアクションに絞って要約して」\n・「経営者向けに1分で読める要約にして」\n・「箇条書き5項目でまとめて」`,
    relatedTerms: ["prompt-engineering", "output-format", "instruction", "context-stuffing"],
    difficulty: "beginner",
    quiz: {
      question: "効果的な要約プロンプトのコツは？",
      choices: ["「要約して」とだけ言う", "文字数・対象読者・形式を明示する", "元の文章を2回貼り付ける"],
      answer: 1,
      explanation: "要約の条件（文字数、読者、形式など）を具体的に指定すると、的確な要約が得られます。"
    }
  },
  {
    slug: "brainstorming-prompt",
    name: "ブレストプロンプト",
    nameEn: "Brainstorming Prompt",
    category: "prompt-tech",
    tagline: "AIと一緒にアイデア出し",
    description: `AIに創造的なアイデアを大量に出させるためのプロンプト設計です。「10個のアイデアを出して」「突飛なものも含めて」「異なる業界の視点で」など、発散的な思考を促す指示がポイント。その後「この中から実現可能性の高い3つに絞って」と収束させることで、効率的なブレインストーミングになります。`,
    example: `・「新商品のアイデアを20個出して。突飛なものもOK」\n・「異なる5つの業界の視点でこの課題の解決策を考えて」\n・「その中からコスト・効果で上位3つを選んで」`,
    relatedTerms: ["prompt-engineering", "temperature", "tree-of-thought", "persona"],
    difficulty: "beginner",
    quiz: {
      question: "AIでブレストする時のコツは？",
      choices: ["最初から1つに絞る", "まず発散（大量にアイデア出し）→次に収束（絞り込み）", "AIに任せきりにする"],
      answer: 1,
      explanation: "まず多くのアイデアを出させ（発散）、その後条件で絞り込む（収束）のが効果的です。"
    }
  },
  {
    slug: "translation-prompt",
    name: "翻訳プロンプト",
    nameEn: "Translation Prompt",
    category: "prompt-tech",
    tagline: "AIに自然な翻訳をさせるコツ",
    description: `AIで翻訳する際の効果的なプロンプト設計です。単に「翻訳して」だけでなく、「カジュアルなトーンで」「ビジネスメールとして自然な表現で」「業界用語はそのまま残して」など、文脈とトーンを指定すると翻訳品質が大幅に向上します。Google翻訳よりも自然な翻訳が可能です。`,
    example: `・「このメールをビジネスに適した丁寧な英語に翻訳して」\n・「カジュアルな日本語に翻訳して。若者言葉もOK」\n・「IT用語は英語のまま残して翻訳して」`,
    relatedTerms: ["prompt-engineering", "persona", "instruction", "nlp"],
    difficulty: "beginner",
    quiz: {
      question: "AI翻訳の質を上げるポイントは？",
      choices: ["短い文だけ翻訳させる", "トーンや文脈を具体的に指定する", "同じ文を何度も翻訳させる"],
      answer: 1,
      explanation: "翻訳のトーン（丁寧/カジュアル）や文脈を指定すると、より自然で適切な翻訳が得られます。"
    }
  },
  {
    slug: "code-generation-prompt",
    name: "コード生成プロンプト",
    nameEn: "Code Generation Prompt",
    category: "prompt-tech",
    tagline: "AIにプログラムを書かせるコツ",
    description: `AIにコードを生成させる際の効果的なプロンプト設計です。「言語はPython」「フレームワークはFastAPI」「エラーハンドリングも含めて」「コメント付きで」と具体的に指定するほど品質が上がります。既存コードを貼って「このバグを修正して」「テストを書いて」といった使い方も非常に便利です。`,
    example: `・「Pythonで、CSVを読み込んでグラフにするコードをコメント付きで書いて」\n・「このコードのバグを見つけて修正して」\n・「この関数のユニットテストを書いて」`,
    relatedTerms: ["prompt-engineering", "vibe-coding", "claude-code", "python"],
    difficulty: "intermediate",
    quiz: {
      question: "コード生成プロンプトで重要な情報は？",
      choices: ["自分のプログラミング経験年数", "使用言語・フレームワーク・要件の明示", "コンピュータのスペック"],
      answer: 1,
      explanation: "言語、フレームワーク、具体的な要件を明示すると、適切なコードが生成されます。"
    }
  },
  {
    slug: "guardrails",
    name: "ガードレール",
    nameEn: "Guardrails",
    category: "prompt-tech",
    tagline: "AIの暴走を防ぐ安全柵",
    description: `AIが不適切な回答をしないように設ける制約・チェック機構のことです。システムプロンプトでの制約設定、出力フィルタリング、特定トピックの禁止などが含まれます。高速道路のガードレールのように、AIが「道を外れない」ようにする仕組み。企業でAIを導入する際には必須の設計ポイントです。`,
    example: `・「競合他社の悪口は言わないこと」とシステムプロンプトに設定\n・個人情報を含む回答をフィルタリング\n・特定の話題には「お答えできません」と返す`,
    relatedTerms: ["system-prompt", "prompt-injection", "claude-safety", "constitutional-ai"],
    difficulty: "intermediate",
    quiz: {
      question: "ガードレールの目的は？",
      choices: ["AIの回答速度を上げる", "AIが不適切な回答をしないよう制約を設ける", "AIの学習データを増やす"],
      answer: 1,
      explanation: "ガードレールはAIの出力に制約を設け、不適切な回答を防ぐための安全機構です。"
    }
  },
  {
    slug: "multi-turn",
    name: "マルチターン会話",
    nameEn: "Multi-Turn Conversation",
    category: "prompt-tech",
    tagline: "何往復もやり取りして深掘りする",
    description: `AIと複数回のやり取りを重ねて、段階的に目的に近づく会話の形式です。1回のやり取り（シングルターン）では伝えきれない複雑な要件も、対話を重ねることで精度が上がります。ただしコンテキストウィンドウの上限があるため、長すぎる会話は適切に区切ることも大事です。`,
    example: `・「まず概要を教えて」→「その中の○○をもっと詳しく」→「では具体的な手順を」\n・企画書の方向性を対話で練り上げる\n・コードレビューを段階的に実施`,
    relatedTerms: ["context-window", "iterative-refinement", "prompt-chain", "claude-conversation"],
    difficulty: "beginner",
    quiz: {
      question: "マルチターン会話の注意点は？",
      choices: ["1回ですべて伝えないといけない", "コンテキストウィンドウの上限に注意が必要", "毎回新しい会話を始める必要がある"],
      answer: 1,
      explanation: "会話が長くなるとコンテキストウィンドウの上限に達するため、適切な区切りが大事です。"
    }
  },
  {
    slug: "evaluation-prompt",
    name: "評価プロンプト（LLM as Judge）",
    nameEn: "Evaluation Prompt / LLM as Judge",
    category: "prompt-tech",
    tagline: "AIにAIの回答を評価させる",
    description: `AIの出力をさらに別のAI（または同じAI）に評価させる手法です。「この回答を正確性・わかりやすさ・完全性の3軸で10点満点で評価して」のように使います。人間がすべてチェックするのは大変なので、AIの品質管理にAIを活用する実用的なテクニックです。`,
    example: `・AIの回答を「正確性」「わかりやすさ」で採点\n・複数の回答候補の中からベストを選ぶ\n・プロンプトの改善効果を数値で比較`,
    relatedTerms: ["prompt-engineering", "self-consistency", "benchmark", "guardrails"],
    difficulty: "advanced",
    quiz: {
      question: "LLM as Judgeの使い方は？",
      choices: ["AIに法律判断をさせる", "AIの出力品質をAIに評価させる", "AIにクイズの採点をさせる"],
      answer: 1,
      explanation: "LLM as JudgeはAIの出力をAI自身に評価させ、品質を管理する手法です。"
    }
  },
  {
    slug: "prompt-library",
    name: "プロンプトライブラリ",
    nameEn: "Prompt Library",
    category: "prompt-tech",
    tagline: "使えるプロンプトのレシピ集",
    description: `業務で使える効果的なプロンプトを集めた「レシピ集」のことです。Anthropicの公式プロンプトライブラリや、社内で共有するプロンプト集など。毎回ゼロからプロンプトを考えるのではなく、テンプレートを活用・カスタマイズすることで効率的にAIを使えます。チームでの共有にも最適です。`,
    example: `・Anthropic公式のプロンプトライブラリ\n・社内で「議事録要約プロンプト」「メール作成プロンプト」を共有\n・Projectsにテンプレートとして保存`,
    relatedTerms: ["prompt-template", "prompt-engineering", "projects", "meta-prompt"],
    difficulty: "beginner",
    quiz: {
      question: "プロンプトライブラリのメリットは？",
      choices: ["AIの処理速度が上がる", "効果的なプロンプトを再利用・共有できる", "料金が割引される"],
      answer: 1,
      explanation: "プロンプトライブラリにより、効果的なプロンプトをチームで共有し再利用できます。"
    }
  },

  // ─── 料金・プラン (19 terms) ────────────────────────────────────────
  {
    slug: "saas",
    name: "SaaS（サース）",
    nameEn: "Software as a Service",
    category: "pricing",
    tagline: "ネットで使えるソフトウェア",
    description: `インストール不要で、Webブラウザから利用できるソフトウェアのことです。Google Workspace、Slack、Notionなどが代表例。従来のソフトは「買い切り」でしたが、SaaSは「月額課金」が主流。ClaudeもSaaS型のAIサービスです。初期投資が少なく、いつでもどこでも使えるのがメリットです。`,
    example: `・Slack（チャット）\n・Notion（情報管理）\n・Claude Pro（AI）\n・Google Workspace（メール・ドキュメント）`,
    relatedTerms: ["subscription", "freemium", "pricing-plans", "cloud"],
    difficulty: "beginner",
    quiz: {
      question: "SaaSの特徴は？",
      choices: ["PCにインストールして使う", "Webブラウザから利用でき月額課金が多い", "一度買えば永久に使える"],
      answer: 1,
      explanation: "SaaSはインストール不要でWebブラウザから利用でき、月額課金モデルが主流です。"
    }
  },
  {
    slug: "freemium",
    name: "フリーミアム",
    nameEn: "Freemium",
    category: "pricing",
    tagline: "基本無料＋課金で機能解放",
    description: `基本機能は無料で使え、高度な機能を使いたい場合に有料プランへアップグレードするビジネスモデルです。「Free」+「Premium」の造語。Claude、Spotify、Zoomなどが採用。まず無料で使ってもらい、価値を実感したら課金してもらう戦略です。AIサービスの多くがこのモデルを採用しています。`,
    example: `・Claude：無料で基本利用、Pro(月$20)で制限緩和\n・Zoom：無料で40分まで、有料で時間無制限\n・Spotify：無料で広告あり、有料で広告なし`,
    relatedTerms: ["saas", "subscription", "free-tier", "pricing-plans"],
    difficulty: "beginner",
    quiz: {
      question: "フリーミアムモデルの仕組みは？",
      choices: ["すべての機能が無料", "基本無料で高機能は有料", "最初は有料で後から無料になる"],
      answer: 1,
      explanation: "フリーミアムは基本機能を無料で提供し、高度な機能へのアップグレードを有料にするモデルです。"
    }
  },
  {
    slug: "subscription",
    name: "サブスクリプション",
    nameEn: "Subscription",
    category: "pricing",
    tagline: "毎月定額で使い放題",
    description: `製品やサービスを「購入」するのではなく、月額・年額で「利用権」を購入する料金モデルです。Netflix、Spotify、Claude Proなどが代表例。企業にとっては安定した収益源になり、ユーザーにとっては初期コストが低く始めやすいメリットがあります。年払いだと割引になることが多いです。`,
    example: `・Claude Pro: 月$20\n・Netflix: 月額990円〜\n・年払いで10〜20%割引が一般的`,
    relatedTerms: ["saas", "freemium", "pricing-plans", "claude-pro"],
    difficulty: "beginner",
    quiz: {
      question: "サブスクリプションの特徴は？",
      choices: ["買い切りで永久に使える", "定期的に料金を払って利用する", "使った分だけ課金される"],
      answer: 1,
      explanation: "サブスクリプションは月額や年額で定期的に料金を払い、サービスを利用する仕組みです。"
    }
  },
  {
    slug: "roi",
    name: "ROI（投資対効果）",
    nameEn: "Return on Investment",
    category: "pricing",
    tagline: "かけたお金に対するリターン",
    description: `投資した金額に対して、どれだけの効果（利益）があったかを測る指標です。「AI導入のROI」と言えば「AIにかけたコストに対して、どれだけ業務効率化や売上増加があったか」を意味します。Claude Pro月$20の投資で、毎月10時間の作業が削減できれば、時給換算でROIは十分にプラスです。`,
    example: `・Claude Pro月$20 → 月10時間の作業削減 = ROI◎\n・AI自動化ツール導入 → 人件費50%削減\n・ROI計算: (利益 - コスト) ÷ コスト × 100%`,
    relatedTerms: ["pricing-plans", "saas", "subscription", "automation"],
    difficulty: "beginner",
    quiz: {
      question: "ROIが高いとはどういう意味ですか？",
      choices: ["投資額が大きい", "投資に対するリターンが大きい", "リスクが高い"],
      answer: 1,
      explanation: "ROIが高いとは、かけたコストに対して得られる効果（リターン）が大きいことを意味します。"
    }
  },
  {
    slug: "pay-per-use",
    name: "従量課金",
    nameEn: "Pay-Per-Use",
    category: "pricing",
    tagline: "使った分だけお支払い",
    description: `利用した量に応じて料金が決まる課金モデルです。Claude APIの料金は「使ったトークン数に応じた従量課金」です。水道代や電気代と同じ仕組み。使わなければコストゼロ、たくさん使えばその分かかります。サブスクリプション（定額）と対照的なモデルで、利用量が読めない場合に向いています。`,
    example: `・Claude API: 入力100万トークンあたり$3（Sonnet）\n・AWS: 使ったサーバー時間×料金\n・電話料金: 通話した分だけ課金`,
    relatedTerms: ["api-pricing", "token-price", "subscription", "saas"],
    difficulty: "beginner",
    quiz: {
      question: "従量課金のメリットは？",
      choices: ["毎月定額で安心", "使わなければコストがかからない", "高額だが高品質"],
      answer: 1,
      explanation: "従量課金は使った分だけ支払うので、利用しなければコストがかかりません。"
    }
  },
  {
    slug: "cost-optimization",
    name: "コスト最適化",
    nameEn: "Cost Optimization",
    category: "pricing",
    tagline: "AI利用のコスパを最大化する",
    description: `AI利用にかかるコストを最小限に抑えながら、最大の効果を得る戦略のことです。モデルの使い分け（簡単な処理はHaiku、重要な処理はSonnet）、プロンプトキャッシング、バッチAPIの活用など複数の手法があります。AIを本格導入する際は、技術面だけでなくコスト管理も重要です。`,
    example: `・簡単な分類はHaiku、レポート作成はSonnet\n・プロンプトキャッシングでAPIコスト削減\n・バッチAPIで50%オフ`,
    relatedTerms: ["api-pricing", "claude-haiku", "claude-sonnet", "prompt-caching"],
    difficulty: "intermediate",
    quiz: {
      question: "API利用のコスト最適化の方法は？",
      choices: ["常に最高性能のモデルを使う", "タスクの難易度に応じてモデルを使い分ける", "APIを使わずに手動で処理する"],
      answer: 1,
      explanation: "タスクの難易度に応じてモデルを使い分けることで、品質を保ちながらコストを抑えられます。"
    }
  },
  {
    slug: "tco",
    name: "TCO（総所有コスト）",
    nameEn: "Total Cost of Ownership",
    category: "pricing",
    tagline: "見えないコストも含めた本当の費用",
    description: `ツールやサービスの導入にかかる「すべてのコスト」を指す概念です。月額料金だけでなく、導入作業の人件費、トレーニング費用、運用管理の手間、他ツールとの連携コストなども含みます。「月$20のClaude Pro」のTCOは、チームへの教育コストや業務プロセス変更の手間も含めて考える必要があります。`,
    example: `・SaaSの月額料金 + 導入教育 + 運用管理 = TCO\n・「安いツール」でも学習コストが高ければTCOは上がる\n・AI導入の稟議にはTCOの視点が重要`,
    relatedTerms: ["roi", "saas", "subscription", "pricing-plans"],
    difficulty: "intermediate",
    quiz: {
      question: "TCOに含まれるものは？",
      choices: ["月額料金のみ", "月額料金＋導入・運用にかかるすべてのコスト", "初期費用のみ"],
      answer: 1,
      explanation: "TCOは月額料金だけでなく、導入、教育、運用管理などすべてのコストの合計です。"
    }
  },
  {
    slug: "ai-cost-per-task",
    name: "タスクあたりAIコスト",
    nameEn: "AI Cost per Task",
    category: "pricing",
    tagline: "1作業にAIでいくらかかるか",
    description: `AIで特定のタスクを処理する際にかかるコストを算出する考え方です。例えば「メール1通の要約にかかるAPIコスト」を計算すると、Haikuなら約0.1円、Sonnetなら約1円程度。人間が同じ作業をする人件費と比較することで、AI導入の経済的メリットを具体的に示せます。`,
    example: `・メール要約1通: Haikuで約0.1円\n・レポート作成1本: Sonnetで約10円\n・人件費（時給2000円）との比較でROIを算出`,
    relatedTerms: ["roi", "token-price", "api-pricing", "cost-optimization"],
    difficulty: "intermediate",
    quiz: {
      question: "タスクあたりAIコストの計算が重要な理由は？",
      choices: ["AIの精度を測定するため", "人件費との比較でAI導入のメリットを示すため", "APIキーを管理するため"],
      answer: 1,
      explanation: "タスクあたりのAIコストを算出し人件費と比較することで、AI導入の経済効果を示せます。"
    }
  },
  {
    slug: "enterprise-pricing",
    name: "エンタープライズ料金",
    nameEn: "Enterprise Pricing",
    category: "pricing",
    tagline: "大企業向けの特別プラン",
    description: `大企業向けに提供される個別交渉ベースの料金プランです。利用規模に応じたボリュームディスカウント、専用サポート、SLA（サービスレベル保証）、カスタマイズなどが含まれます。一般公開の料金表にはなく「お問い合わせください」となっていることが多いです。Anthropicも大規模利用向けにEnterprise プランを提供しています。`,
    example: `・大量APIコールに対するボリューム割引\n・99.9%のSLA保証\n・専任のカスタマーサクセス担当`,
    relatedTerms: ["claude-enterprise", "claude-team", "pricing-plans", "saas"],
    difficulty: "intermediate",
    quiz: {
      question: "エンタープライズ料金の特徴は？",
      choices: ["Webサイトに料金が明記されている", "利用規模に応じた個別交渉ベース", "個人向けの最安プラン"],
      answer: 1,
      explanation: "エンタープライズ料金は大企業向けに、利用規模に応じて個別交渉で決定される特別プランです。"
    }
  },
  {
    slug: "sla",
    name: "SLA（サービスレベル保証）",
    nameEn: "Service Level Agreement",
    category: "pricing",
    tagline: "サービス品質の約束",
    description: `サービス提供者が「これだけの品質を保証します」と約束する契約です。「稼働率99.9%」「応答時間1秒以内」「障害時は4時間以内に復旧」などが典型的。達成できない場合は返金や補償があることが多いです。企業がAIサービスを導入する際、SLAの有無は重要な判断材料になります。`,
    example: `・稼働率99.9%保証（年間ダウンタイム約8.7時間以内）\n・API応答時間の上限保証\n・SLA違反時のサービスクレジット（返金）`,
    relatedTerms: ["enterprise-pricing", "claude-enterprise", "cloud", "api"],
    difficulty: "intermediate",
    quiz: {
      question: "SLAとは何ですか？",
      choices: ["ソフトウェアのライセンス契約", "サービスの品質・稼働率を保証する契約", "セキュリティの認証規格"],
      answer: 1,
      explanation: "SLAはサービスの稼働率や品質レベルを保証し、達成できない場合の補償を定めた契約です。"
    }
  },
  {
    slug: "usage-dashboard",
    name: "利用量ダッシュボード",
    nameEn: "Usage Dashboard",
    category: "pricing",
    tagline: "AIの利用状況を見える化",
    description: `APIの利用量、消費トークン数、料金の推移などをグラフや表で確認できる管理画面です。Anthropicコンソールで確認でき、「今月いくら使ったか」「どのモデルが多いか」「コストの推移」が一目でわかります。予算管理やコスト最適化の基盤となる機能です。`,
    example: `・今月のAPI利用トークン数を確認\n・日別のコスト推移グラフ\n・モデル別の利用割合の分析`,
    relatedTerms: ["anthropic-console", "api-pricing", "cost-optimization", "token-price"],
    difficulty: "beginner",
    quiz: {
      question: "利用量ダッシュボードで確認できることは？",
      choices: ["AIモデルの内部パラメータ", "API利用量・料金の推移", "他社のAIサービスの料金"],
      answer: 1,
      explanation: "ダッシュボードではAPI利用量、消費トークン数、料金の推移などを視覚的に確認できます。"
    }
  },
  {
    slug: "cost-alert",
    name: "コストアラート",
    nameEn: "Cost Alert",
    category: "pricing",
    tagline: "使いすぎを通知してくれる仕組み",
    description: `APIの利用料金が設定した閾値を超えた場合に通知を送る機能です。「月$100を超えたらメールで通知」のように設定できます。予期せぬ大量リクエストやプログラムのバグによる無駄なAPI呼び出しによる「請求ショック」を防ぐための安全装置。クラウドサービス全般で重要な設定です。`,
    example: `・月$50でアラートを設定\n・1日のAPI呼び出し回数の上限設定\n・予算超過防止のハードリミット`,
    relatedTerms: ["api-pricing", "usage-dashboard", "rate-limit", "anthropic-console"],
    difficulty: "beginner",
    quiz: {
      question: "コストアラートの目的は？",
      choices: ["AIの回答品質を向上させる", "想定外の高額請求を防ぐ", "APIの応答速度を改善する"],
      answer: 1,
      explanation: "コストアラートは利用料金が閾値を超えた際に通知し、想定外の高額請求を防ぎます。"
    }
  },
  {
    slug: "token-estimation",
    name: "トークン数の見積もり",
    nameEn: "Token Estimation",
    category: "pricing",
    tagline: "事前にコストを予測する方法",
    description: `APIを使う前に、どれくらいのトークンを消費するか（＝いくらかかるか）を事前に見積もる方法です。日本語は1文字あたり約1〜2トークン、英語は1単語あたり約1.3トークンが目安。Anthropicのトークンカウンターツールで正確に計測できます。大量処理の前に見積もることで予算管理ができます。`,
    example: `・日本語1000文字 ≒ 約1000〜2000トークン\n・英語1000単語 ≒ 約1300トークン\n・API料金 = トークン数 × 単価`,
    relatedTerms: ["token", "token-price", "api-pricing", "cost-optimization"],
    difficulty: "intermediate",
    quiz: {
      question: "日本語1000文字は約何トークンですか？",
      choices: ["約100トークン", "約1000〜2000トークン", "約10000トークン"],
      answer: 1,
      explanation: "日本語は1文字あたり約1〜2トークンなので、1000文字は約1000〜2000トークンです。"
    }
  },
  {
    slug: "annual-plan",
    name: "年間プラン",
    nameEn: "Annual Plan",
    category: "pricing",
    tagline: "年払いで割引を受ける",
    description: `月額プランではなく、1年分をまとめて支払う料金プランです。多くのSaaSサービスで「年払いにすると月額換算で10〜20%割引」になります。長期的に使い続ける予定なら年間プランがお得。ただし途中解約しても返金されないことが多いので、まず月額で試してから切り替えるのが安全です。`,
    example: `・月額$20のサービスが年払いで月$16に\n・年間で約$48の節約\n・まず月額で試用→確信が持てたら年払いに変更`,
    relatedTerms: ["subscription", "pricing-plans", "saas", "freemium"],
    difficulty: "beginner",
    quiz: {
      question: "年間プランのデメリットは？",
      choices: ["割引がない", "途中解約しても返金されないことが多い", "月払いより高い"],
      answer: 1,
      explanation: "年間プランは割引がある一方、途中解約時に返金されないケースが多いので注意が必要です。"
    }
  },
  {
    slug: "credits",
    name: "クレジット（利用枠）",
    nameEn: "Credits",
    category: "pricing",
    tagline: "前払いで購入するAI利用ポイント",
    description: `API利用料金を事前にチャージ（前払い）する仕組みです。プリペイドカードのように、先にクレジットを購入しておき、API利用時にそこから消費されます。Anthropicでは最低$5からクレジットを追加でき、残高がなくなるとAPIが使えなくなります。自動チャージの設定も可能です。`,
    example: `・$20分のクレジットを購入\n・API利用でトークンに応じて消費\n・残高が$5以下になったら自動チャージ`,
    relatedTerms: ["api-pricing", "pay-per-use", "anthropic-console", "token-price"],
    difficulty: "beginner",
    quiz: {
      question: "APIクレジットの仕組みは？",
      choices: ["後払いで月末に請求", "前払いでチャージし利用分が消費される", "完全無料で使い放題"],
      answer: 1,
      explanation: "クレジットは前払い（プリペイド）方式で、API利用時にチャージ残高から消費されます。"
    }
  },
  {
    slug: "pricing-comparison",
    name: "AIサービス料金比較",
    nameEn: "AI Service Pricing Comparison",
    category: "pricing",
    tagline: "ChatGPT vs Claude vs Gemini の料金を比較",
    description: `主要AIサービスの料金を比較する際のポイントです。ChatGPT Plus($20/月)、Claude Pro($20/月)、Gemini Advanced($20/月)と月額は似ていますが、APIの従量課金やコンテキストウィンドウのサイズ、含まれる機能が異なります。自分の使い方に合ったサービスを選ぶことが大切です。`,
    example: `・ChatGPT Plus: $20/月（GPT-4o、DALL-E画像生成含む）\n・Claude Pro: $20/月（長文に強い、Projects機能）\n・Gemini Advanced: $20/月（Google連携に強い）`,
    relatedTerms: ["pricing-plans", "claude-pro", "chatgpt", "roi"],
    difficulty: "beginner",
    quiz: {
      question: "AIサービスの料金比較で重要な点は？",
      choices: ["月額だけを見ればよい", "月額に加え機能・API料金・コンテキストサイズも比較する", "最も安いサービスを選べばよい"],
      answer: 1,
      explanation: "月額だけでなく、含まれる機能やAPI料金、コンテキストウィンドウなど総合的に比較が必要です。"
    }
  },
  {
    slug: "billing-cycle",
    name: "請求サイクル",
    nameEn: "Billing Cycle",
    category: "pricing",
    tagline: "料金が発生するタイミング",
    description: `サービスの料金が課金・請求される周期のことです。SaaSでは月次請求（毎月同日に課金）が一般的。APIの従量課金は使用量に基づいて月末締めで請求されることが多いです。プランの変更や解約はこの請求サイクルに合わせて反映されるため、タイミングを意識する必要があります。`,
    example: `・Claude Pro: 毎月登録日に$20が課金\n・API利用料: 月末締め翌月請求\n・プラン変更は次の請求サイクルから反映`,
    relatedTerms: ["subscription", "pricing-plans", "pay-per-use", "saas"],
    difficulty: "beginner",
    quiz: {
      question: "請求サイクルを意識すべき場面は？",
      choices: ["AIに質問する時", "プランの変更や解約をする時", "プロンプトを書く時"],
      answer: 1,
      explanation: "プラン変更や解約は請求サイクルに合わせて反映されるため、タイミングを意識する必要があります。"
    }
  },
  {
    slug: "cost-benefit-analysis",
    name: "費用対効果分析",
    nameEn: "Cost-Benefit Analysis",
    category: "pricing",
    tagline: "AIは導入すべき？をデータで判断",
    description: `AI導入にかかるコスト（料金、教育、運用）と、得られる効果（時間短縮、品質向上、売上増）を比較分析する手法です。「Claude Pro月$20で月20時間の作業削減」なら、時給計算で明確にメリットを示せます。経営層への稟議や社内提案で必須の分析手法です。`,
    example: `・導入コスト: Claude Pro $20/月 + 教育2時間\n・削減効果: 月20時間×時給2000円 = 4万円\n・ROI: (40000-3000)/3000 = 1233%`,
    relatedTerms: ["roi", "tco", "pricing-plans", "cost-optimization"],
    difficulty: "intermediate",
    quiz: {
      question: "費用対効果分析で比較するものは？",
      choices: ["異なるAIモデルの精度", "導入コストと得られる効果（時間・金額）", "過去と現在の業務量"],
      answer: 1,
      explanation: "費用対効果分析は導入にかかるコストと得られる効果を比較し、投資判断の材料にします。"
    }
  },
  {
    slug: "volume-discount",
    name: "ボリュームディスカウント",
    nameEn: "Volume Discount",
    category: "pricing",
    tagline: "たくさん使うほどお得に",
    description: `大量に利用するほど単価が安くなる割引制度です。「月100万トークンまでは$3/百万トークン、それ以上は$2.5」のような段階的な料金体系。APIの大量利用やチームプランのユーザー数増加で適用されることが多いです。利用規模が大きくなったらAnthropicに相談するとカスタム割引を受けられる場合もあります。`,
    example: `・API利用量が増えると単価が下がる\n・チームプランで10人以上なら割引\n・大規模利用はAnthropicに個別相談`,
    relatedTerms: ["enterprise-pricing", "api-pricing", "cost-optimization", "claude-team"],
    difficulty: "intermediate",
    quiz: {
      question: "ボリュームディスカウントとは？",
      choices: ["少量利用ほど安い", "大量利用ほど単価が安くなる", "無料枠が増える"],
      answer: 1,
      explanation: "ボリュームディスカウントは利用量が多いほど単価が割引される仕組みです。"
    }
  },

  // ─── 自動化・ワークフロー (20 terms) ─────────────────────────────────
  {
    slug: "rpa",
    name: "RPA",
    nameEn: "Robotic Process Automation",
    category: "automation",
    tagline: "PCの操作を自動化するロボット",
    description: `人間がPC上で行う定型作業を、ソフトウェアロボットが代わりにやってくれる技術です。マウスクリック、キーボード入力、コピー&ペーストなどを自動化。「毎朝、基幹システムからデータを取得してExcelに貼り付ける」のような作業を自動化できます。UiPath、Power Automateが代表的なツールです。`,
    example: `・毎朝の売上レポートを自動作成\n・請求書データを会計システムに自動入力\n・顧客情報の複数システム間での同期`,
    relatedTerms: ["automation", "no-code", "zapier", "n8n"],
    difficulty: "beginner",
    quiz: {
      question: "RPAが得意なタスクは？",
      choices: ["創造的な企画立案", "PC上の定型的な繰り返し作業", "顧客との対面交渉"],
      answer: 1,
      explanation: "RPAはPC上の定型的な繰り返し作業（データ入力、コピペなど）の自動化が得意です。"
    }
  },
  {
    slug: "ifttt",
    name: "IFTTT",
    nameEn: "If This Then That",
    category: "automation",
    tagline: "もし○○なら△△する",
    description: `「If This Then That（もしこれならあれ）」の略で、「トリガー（きっかけ）→アクション（動作）」の単純なルールでアプリを連携させるサービスです。Zapierより機能はシンプルですが、その分わかりやすく、個人利用に最適。スマートホームの自動化にも広く使われています。`,
    example: `・雨予報が出たら朝7時にLINE通知\n・Instagramに投稿したら自動でTwitterにも投稿\n・帰宅したら（位置情報で検知）照明をON`,
    relatedTerms: ["zapier", "no-code", "webhook", "api"],
    difficulty: "beginner",
    quiz: {
      question: "IFTTTの名前の意味は？",
      choices: ["Internet For The Things Today", "If This Then That（もしこれならあれ）", "Integrated Flow Tool for Tech"],
      answer: 1,
      explanation: "IFTTTは「If This Then That」の略で、「もし○○なら△△する」という自動化ルールを作れます。"
    }
  },
  {
    slug: "api-integration",
    name: "API連携",
    nameEn: "API Integration",
    category: "automation",
    tagline: "異なるサービスをつなぐ架け橋",
    description: `2つ以上のサービスやアプリをAPIを通じて連携させることです。「SlackにメッセージがきたらGoogleスプレッドシートに記録」「フォーム回答をCRMに自動登録」など。サービス同士を「会話」させるイメージ。Zapier、n8n、Makeなどのツールを使えば、コードなしでAPI連携を構築できます。`,
    example: `・Slack + Googleスプレッドシート\n・フォーム + CRM + メール配信\n・ECサイト + 会計ソフト + 在庫管理`,
    relatedTerms: ["api", "webhook", "zapier", "n8n"],
    difficulty: "intermediate",
    quiz: {
      question: "API連携のメリットは？",
      choices: ["サービスのデザインが良くなる", "異なるサービス間で自動的にデータをやり取りできる", "インターネット不要で使える"],
      answer: 1,
      explanation: "API連携により、異なるサービス間でデータを自動的にやり取りし、業務を効率化できます。"
    }
  },
  {
    slug: "batch-processing",
    name: "バッチ処理",
    nameEn: "Batch Processing",
    category: "automation",
    tagline: "大量データをまとめて一括処理",
    description: `大量のデータや処理を「まとめて一括で」実行する方式です。リアルタイム処理の反対概念。「毎晩3時に前日分の売上データを集計する」のように、決まった時間にまとめて処理します。AIのバッチAPIもこの概念で、大量のリクエストをまとめて処理することでコストを抑えられます。`,
    example: `・毎晩の売上データ集計\n・月次の給与計算処理\n・1000件のメールを一括AI分析（バッチAPI）`,
    relatedTerms: ["cron", "batch-api", "etl", "automation"],
    difficulty: "intermediate",
    quiz: {
      question: "バッチ処理の特徴は？",
      choices: ["リアルタイムで即座に処理する", "大量のデータをまとめて一括処理する", "1件ずつ手動で処理する"],
      answer: 1,
      explanation: "バッチ処理は大量のデータや処理をまとめて一括で実行する方式です。"
    }
  },
  {
    slug: "etl",
    name: "ETL",
    nameEn: "Extract, Transform, Load",
    category: "automation",
    tagline: "データを抽出→変換→保存する流れ",
    description: `データを「①取り出す(Extract)→②整形する(Transform)→③保存する(Load)」の3ステップで処理するデータパイプラインです。たとえば「複数のExcelファイルからデータを取り出し→フォーマットを統一し→データベースに格納する」一連の流れ。DX推進やデータ活用の基盤として欠かせない概念です。`,
    example: `・複数店舗の売上Excel → 統一フォーマット → データベース\n・Webサイトのログ → クレンジング → 分析用DB\n・CRMデータ → AI用に整形 → 学習データ`,
    relatedTerms: ["batch-processing", "database", "automation", "api-integration"],
    difficulty: "intermediate",
    quiz: {
      question: "ETLの「T」は何を意味しますか？",
      choices: ["Test（テスト）", "Transform（変換）", "Transfer（転送）"],
      answer: 1,
      explanation: "ETLのTはTransform（変換）で、取り出したデータを目的に合った形式に整形するステップです。"
    }
  },
  {
    slug: "workflow-automation",
    name: "ワークフロー自動化",
    nameEn: "Workflow Automation",
    category: "automation",
    tagline: "業務の流れをまるごと自動化",
    description: `複数のステップからなる業務プロセス全体を自動化することです。単純な1つの作業の自動化ではなく、「申請→承認→処理→通知」のような一連の流れ全体。AIを組み込めば「データ収集→AI分析→レポート作成→メール送信」のような高度な自動化も可能です。`,
    example: `・経費精算: 申請→上長承認→経理処理→振込→通知\n・採用: 応募受付→AI選考→面接日程調整→結果通知\n・レポート: データ収集→AI分析→作成→送信`,
    relatedTerms: ["n8n", "zapier", "rpa", "no-code"],
    difficulty: "intermediate",
    quiz: {
      question: "ワークフロー自動化と単純な自動化の違いは？",
      choices: ["同じ意味", "ワークフロー自動化は複数ステップの業務プロセス全体を自動化する", "単純な自動化の方が高度"],
      answer: 1,
      explanation: "ワークフロー自動化は単一作業ではなく、複数ステップの業務プロセス全体を自動化します。"
    }
  },
  {
    slug: "trigger-action",
    name: "トリガー＆アクション",
    nameEn: "Trigger & Action",
    category: "automation",
    tagline: "きっかけと自動実行のペア",
    description: `自動化の基本パターンで、「トリガー（きっかけ）が発生したら、アクション（処理）を実行する」という仕組みです。Zapier、IFTTT、n8nなどすべての自動化ツールの根幹概念。「メールが届いたら(トリガー) → Slackに通知(アクション)」のように使います。`,
    example: `・トリガー: フォーム送信 → アクション: データ保存 + お礼メール\n・トリガー: 定時(毎朝9時) → アクション: レポート生成\n・トリガー: 在庫が10個以下 → アクション: 発注メール`,
    relatedTerms: ["webhook", "zapier", "n8n", "ifttt"],
    difficulty: "beginner",
    quiz: {
      question: "トリガー＆アクションの「トリガー」とは？",
      choices: ["自動化の結果", "自動化を開始するきっかけ", "エラーの通知"],
      answer: 1,
      explanation: "トリガーは自動化を開始する「きっかけ」で、それに応じてアクション（処理）が実行されます。"
    }
  },
  {
    slug: "scheduling",
    name: "スケジューリング",
    nameEn: "Scheduling",
    category: "automation",
    tagline: "決まった時間に自動実行する仕組み",
    description: `処理を特定の日時・時間間隔で自動実行させる仕組みです。「毎朝9時にレポートを生成」「毎週月曜にデータをバックアップ」など。cronジョブ、GitHub Actionsのschedule、n8nのScheduleトリガーなどで実現します。定期的なルーティン業務の自動化に不可欠です。`,
    example: `・毎朝9時: ニュース要約を自動生成してSlack投稿\n・毎週金曜17時: 週次レポートを自動作成・送信\n・毎月1日: データのバックアップ`,
    relatedTerms: ["cron", "batch-processing", "github-actions", "n8n"],
    difficulty: "beginner",
    quiz: {
      question: "スケジューリングが適している業務は？",
      choices: ["突発的な顧客対応", "定期的に繰り返すルーティン業務", "創造的な企画立案"],
      answer: 1,
      explanation: "スケジューリングは「毎朝」「毎週」のように定期的に繰り返す業務の自動化に最適です。"
    }
  },
  {
    slug: "error-handling",
    name: "エラーハンドリング",
    nameEn: "Error Handling",
    category: "automation",
    tagline: "エラーが起きても止まらない仕組み",
    description: `自動化ワークフローでエラーが発生した時の対処方法を事前に設計しておくことです。「APIがエラーを返したら3回リトライ」「処理に失敗したらSlackに通知」など。自動化は「うまくいく時」だけでなく「失敗した時」の設計が重要。エラーハンドリングがない自動化は、障害時に気づかず放置されるリスクがあります。`,
    example: `・API呼び出し失敗 → 30秒後にリトライ（最大3回）\n・処理エラー → 管理者にSlack通知\n・タイムアウト → ログに記録して次の処理に進む`,
    relatedTerms: ["webhook", "api", "workflow-automation", "n8n"],
    difficulty: "intermediate",
    quiz: {
      question: "エラーハンドリングが重要な理由は？",
      choices: ["処理速度が上がるから", "障害時に自動で対処・通知でき、放置を防げるから", "コストが下がるから"],
      answer: 1,
      explanation: "エラーハンドリングにより障害時に自動対処や通知ができ、問題の放置を防げます。"
    }
  },
  {
    slug: "data-pipeline",
    name: "データパイプライン",
    nameEn: "Data Pipeline",
    category: "automation",
    tagline: "データが流れる水道管",
    description: `データの収集・変換・保存・分析の一連の流れを自動化した仕組みです。水道管のように、データが「源泉」から「蛇口」まで自動で流れるイメージ。「Webサイトのアクセスログ→集計→分析→ダッシュボード表示」のような流れ。ETLはデータパイプラインの一形態です。`,
    example: `・アクセスログ → 集計 → ダッシュボード表示\n・フォーム回答 → AI分析 → CRM登録\n・SNSデータ → 感情分析 → レポート`,
    relatedTerms: ["etl", "batch-processing", "api-integration", "automation"],
    difficulty: "intermediate",
    quiz: {
      question: "データパイプラインとは？",
      choices: ["データを手動で移動する作業", "データの収集から分析までの自動化された流れ", "データのバックアップ方法"],
      answer: 1,
      explanation: "データパイプラインはデータの収集・変換・保存・分析の一連の流れを自動化した仕組みです。"
    }
  },
  {
    slug: "chatops",
    name: "ChatOps",
    nameEn: "ChatOps",
    category: "automation",
    tagline: "チャットからシステムを操作する",
    description: `SlackやTeamsなどのチャットツールから、コマンドを入力してシステムの操作や情報取得を行うワークスタイルです。「/deploy production」でデプロイ、「/status」でシステム状況確認、「/report 売上」でレポート生成など。チャットが業務の「司令塔」になり、チーム全員が操作ログを共有できます。`,
    example: `・Slackで「/deploy」→ 自動デプロイ実行\n・「/ask Claude 今月の売上を分析して」→ AI分析結果を投稿\n・「/alert status」→ 障害状況を確認`,
    relatedTerms: ["webhook", "api-integration", "n8n", "workflow-automation"],
    difficulty: "intermediate",
    quiz: {
      question: "ChatOpsのメリットは？",
      choices: ["チャットが不要になる", "チャットから操作でき、全員がログを共有できる", "管理画面が不要になる"],
      answer: 1,
      explanation: "ChatOpsはチャット上からシステム操作でき、チーム全員が操作ログを共有できるのがメリットです。"
    }
  },
  {
    slug: "notification-automation",
    name: "通知の自動化",
    nameEn: "Notification Automation",
    category: "automation",
    tagline: "大事な情報を見逃さない仕組み",
    description: `特定の条件を満たした時に自動で通知を送る仕組みです。「在庫が10個以下になったらSlack通知」「重要なメールが来たらLINEに転送」「AIが異常を検知したらアラート」など。情報の洪水の中から本当に必要なものだけを拾い上げる「フィルター」として機能します。`,
    example: `・在庫10個以下 → Slack通知\n・VIP顧客からのメール → 即LINE通知\n・サーバーエラー → PagerDutyでオンコール通知`,
    relatedTerms: ["trigger-action", "webhook", "zapier", "chatops"],
    difficulty: "beginner",
    quiz: {
      question: "通知の自動化が有効な場面は？",
      choices: ["すべての情報を均等に見たい時", "重要な情報だけを見逃さずキャッチしたい時", "通知を完全に止めたい時"],
      answer: 1,
      explanation: "通知の自動化は条件に合った重要な情報だけを自動で通知し、見逃しを防ぎます。"
    }
  },
  {
    slug: "ai-automation",
    name: "AI自動化",
    nameEn: "AI Automation",
    category: "automation",
    tagline: "AIの力で賢い自動化を実現",
    description: `従来の自動化（ルールベース）にAIを組み合わせて、より「賢い」自動化を実現する概念です。「メールが来たら転送する」だけでなく「メールの内容をAIが判断して、急ぎなら即通知、そうでなければ日次まとめ」のような柔軟な処理が可能。n8nやZapierのAI連携で手軽に始められます。`,
    example: `・メール → AIで緊急度判定 → 優先度別に対応\n・問い合わせ → AIで自動回答案作成 → 人間が確認・送信\n・レポートデータ → AI分析 → 異常があればアラート`,
    relatedTerms: ["ai-agent", "n8n", "zapier", "workflow-automation"],
    difficulty: "intermediate",
    quiz: {
      question: "AI自動化と従来の自動化の違いは？",
      choices: ["料金が高いだけ", "AIが内容を判断して柔軟な処理ができる", "人間が全部手動で操作する"],
      answer: 1,
      explanation: "AI自動化はAIが内容を理解・判断するため、ルールベースより柔軟な自動化が可能です。"
    }
  },
  {
    slug: "form-automation",
    name: "フォーム自動化",
    nameEn: "Form Automation",
    category: "automation",
    tagline: "フォーム回答を起点に業務を自動化",
    description: `Googleフォームなどのフォーム送信をトリガーにして、後続の業務を自動化する仕組みです。「フォーム回答→スプレッドシート記録→お礼メール→Slack通知」など。お問い合わせ対応、イベント受付、アンケート集計など、多くの業務の起点はフォームなので、ここを自動化する効果は絶大です。`,
    example: `・お問い合わせフォーム → 自動返信 + CRM登録 + 担当者通知\n・イベント申込 → 参加者リスト更新 + リマインドメール設定\n・社内アンケート → AI集計 → レポート自動生成`,
    relatedTerms: ["trigger-action", "zapier", "n8n", "notification-automation"],
    difficulty: "beginner",
    quiz: {
      question: "フォーム自動化の効果が大きい理由は？",
      choices: ["フォームの見た目が良くなるから", "多くの業務の起点がフォームだから", "フォームの回答数が減るから"],
      answer: 1,
      explanation: "フォームは多くの業務の入口となるため、ここを自動化すると後続業務全体が効率化されます。"
    }
  },
  {
    slug: "document-automation",
    name: "ドキュメント自動生成",
    nameEn: "Document Automation",
    category: "automation",
    tagline: "AIでレポートや書類を自動作成",
    description: `AIを活用してレポート、議事録、報告書、提案書などを自動で生成する仕組みです。テンプレートにデータを流し込み、AIが文章を整形・要約・分析して完成品を出力します。「データ→AI→ドキュメント→配信」のパイプラインを作れば、定期レポートの作成時間を大幅に削減できます。`,
    example: `・月次売上データ → AI分析 → レポート自動生成\n・会議録音 → 文字起こし → AI議事録作成\n・顧客データ → AI → パーソナライズ提案書`,
    relatedTerms: ["ai-automation", "batch-processing", "claude", "artifacts"],
    difficulty: "intermediate",
    quiz: {
      question: "ドキュメント自動生成に必要なものは？",
      choices: ["高性能なプリンター", "テンプレート + データ + AI", "手書きのメモ"],
      answer: 1,
      explanation: "ドキュメント自動生成にはテンプレート、元データ、それを処理するAIが必要です。"
    }
  },
  {
    slug: "email-automation",
    name: "メール自動化",
    nameEn: "Email Automation",
    category: "automation",
    tagline: "メール対応を半自動化する",
    description: `メールの受信・分類・返信・フォローアップなどを自動化する仕組みです。AIを組み合わせると「メールの内容を理解→返信案を自動作成→人間が確認→送信」のような半自動化が可能。メール対応は多くのビジネスパーソンの時間を食う作業なので、自動化の効果が非常に高い領域です。`,
    example: `・受信メールをAIで自動分類（営業/サポート/スパム）\n・定型的な問い合わせへの自動返信\n・フォローアップメールの自動送信`,
    relatedTerms: ["ai-automation", "trigger-action", "notification-automation", "claude"],
    difficulty: "beginner",
    quiz: {
      question: "メール自動化のAI活用例は？",
      choices: ["メールサーバーを構築する", "受信メールをAIが分類し返信案を自動作成する", "メールのフォントを変更する"],
      answer: 1,
      explanation: "AIを使ったメール自動化では、内容の理解・分類・返信案の自動生成などが可能です。"
    }
  },
  {
    slug: "testing-automation",
    name: "テスト自動化",
    nameEn: "Test Automation",
    category: "automation",
    tagline: "プログラムの動作確認を自動で行う",
    description: `ソフトウェアが正しく動作するかどうかのチェック（テスト）を自動化する技術です。コードを変更するたびに自動でテストが実行され、バグがあれば即座に検知できます。CI/CDパイプラインに組み込むことが多く、品質を保ちながら高速に開発を進めるための必須技術です。`,
    example: `・コードをpushするたびに自動テスト実行\n・画面の表示崩れを自動チェック\n・AIにテストコードを書いてもらう`,
    relatedTerms: ["ci-cd", "github-actions", "deploy", "claude-code"],
    difficulty: "intermediate",
    quiz: {
      question: "テスト自動化のメリットは？",
      choices: ["テストが不要になる", "バグを素早く検知し品質を保てる", "開発速度が遅くなる"],
      answer: 1,
      explanation: "テスト自動化により、コード変更のたびに自動でバグを検知でき、品質と開発速度を両立できます。"
    }
  },
  {
    slug: "monitoring",
    name: "モニタリング（監視）",
    nameEn: "Monitoring",
    category: "automation",
    tagline: "システムの健康状態を常時チェック",
    description: `Webサイトやサーバー、APIなどのシステムが正常に動いているかを常時監視する仕組みです。「サイトがダウンした」「APIの応答が遅い」「エラー率が急上昇」などの異常を即座に検知してアラートを送ります。自動化ワークフローの安定運用にも不可欠。Datadog、New Relicなどが代表的なツールです。`,
    example: `・Webサイトの死活監視（ダウン検知→即通知）\n・API応答時間のモニタリング\n・自動化ワークフローの成功率監視`,
    relatedTerms: ["error-handling", "notification-automation", "deploy", "ci-cd"],
    difficulty: "intermediate",
    quiz: {
      question: "モニタリングの主な目的は？",
      choices: ["システムを高速化する", "システムの異常を即座に検知して対応する", "新機能を開発する"],
      answer: 1,
      explanation: "モニタリングはシステムの異常を常時監視し、問題発生時に即座に検知・対応するための仕組みです。"
    }
  },
  {
    slug: "logging",
    name: "ログ管理",
    nameEn: "Logging",
    category: "automation",
    tagline: "システムの行動記録を残す",
    description: `システムが「いつ」「何を」「どう処理したか」の記録（ログ）を保存・管理する仕組みです。自動化ワークフローのログを残しておけば「いつエラーが起きたか」「何件処理したか」を後から追跡できます。トラブル発生時の原因究明に不可欠。飛行機のフライトレコーダーのようなものです。`,
    example: `・APIリクエストのログ（日時、リクエスト内容、レスポンス）\n・自動化ワークフローの実行ログ\n・エラー発生時のスタックトレース`,
    relatedTerms: ["monitoring", "error-handling", "ci-cd", "deploy"],
    difficulty: "intermediate",
    quiz: {
      question: "ログ管理が重要な理由は？",
      choices: ["ストレージを消費するため", "トラブル発生時の原因究明に不可欠だから", "ログがあると処理が速くなるから"],
      answer: 1,
      explanation: "ログを記録しておくことで、トラブル発生時に「何が」「いつ」起きたかを追跡し原因を究明できます。"
    }
  },
  {
    slug: "automation-roi",
    name: "自動化のROI計算",
    nameEn: "Automation ROI",
    category: "automation",
    tagline: "自動化する価値があるかを判断する",
    description: `自動化にかかるコスト（ツール代、構築時間）と、得られる効果（削減時間、ミス減少）を比較して投資判断する考え方です。「週2時間かかる作業を自動化するのに10時間かかる」なら5週間で元が取れます。すべてを自動化するのではなく、ROIの高いものから優先的に着手するのが賢い戦略です。`,
    example: `・週2時間の作業 × 時給2000円 = 月16000円の削減効果\n・自動化構築に10時間 = 初期投資20000円\n・約1.3ヶ月で投資回収`,
    relatedTerms: ["roi", "cost-benefit-analysis", "workflow-automation", "rpa"],
    difficulty: "intermediate",
    quiz: {
      question: "自動化のROI計算で大切な考え方は？",
      choices: ["すべての業務を自動化すべき", "ROIの高いものから優先的に自動化する", "自動化は常にコストが見合う"],
      answer: 1,
      explanation: "すべてを自動化するのではなく、コストと効果を比較しROIの高いものから着手するのが賢明です。"
    }
  },
  {
    slug: "linux",
    name: "Linux（リナックス）",
    nameEn: "Linux",
    category: "api-dev",
    tagline: "サーバーの定番OS",
    description: `世界中のサーバーの大半で使われている無料のOS（オペレーティングシステム）です。WindowsやmacOSと違い、オープンソースで誰でも自由に使えます。AWS、Google CloudなどのクラウドサーバーもほぼすべてがLinux。コマンドライン操作が基本ですが、AIにコマンドを聞けばすぐ教えてくれます。`,
    example: `・Webサーバーの90%以上がLinux\n・AndroidもLinuxベース\n・「ls」でファイル一覧、「cd」でフォルダ移動`,
    relatedTerms: ["cloud", "aws", "docker", "deploy"],
    difficulty: "intermediate",
    quiz: {
      question: "Linuxが広く使われている理由は？",
      choices: ["GUIが最も使いやすいから", "無料でオープンソースだから", "Microsoftが開発したから"],
      answer: 1,
      explanation: "Linuxは無料でオープンソースのため、サーバー用途を中心に世界中で広く使われています。"
    }
  },
  {
    slug: "voice-to-text",
    name: "音声文字起こし",
    nameEn: "Speech-to-Text",
    category: "ai-basics",
    tagline: "話した言葉を自動でテキスト化",
    description: `音声をAIが認識してテキストに変換する技術です。会議の録音を議事録にしたり、インタビュー音声を文字にしたりできます。Whisper（OpenAI）やGoogle Speech-to-Textが有名。文字起こし後にClaudeで要約すれば、会議後数分で議事録が完成する「AI議事録」ワークフローも人気です。`,
    example: `・会議の録音を自動で文字起こし\n・インタビュー音声のテキスト化\n・文字起こし→Claude要約で議事録作成`,
    relatedTerms: ["nlp", "ai", "ai-automation", "document-automation"],
    difficulty: "beginner",
    quiz: {
      question: "音声文字起こしと組み合わせると便利なAI機能は？",
      choices: ["画像生成", "テキスト要約", "コード実行"],
      answer: 1,
      explanation: "文字起こし後にAIで要約すれば、会議の議事録を短時間で自動作成できます。"
    }
  },
  {
    slug: "prompt-versioning",
    name: "プロンプトのバージョン管理",
    nameEn: "Prompt Versioning",
    category: "prompt-tech",
    tagline: "プロンプトの改善履歴を記録する",
    description: `プロンプトの変更履歴を管理し、どのバージョンが最も効果的だったかを追跡する手法です。v1、v2…と改善を重ねる中で「v3の方が回答精度が高かった」と比較できます。AnthropicのWorkbenchやGitを使って管理。プロンプトも「コード」と同じように、バージョン管理して育てていく発想が重要です。`,
    example: `・v1: 基本プロンプト → v2: 例示追加 → v3: 制約追加\n・Workbenchでバージョン比較テスト\n・Gitで.promptファイルを管理`,
    relatedTerms: ["prompt-engineering", "workbench", "git", "prompt-library"],
    difficulty: "intermediate",
    quiz: {
      question: "プロンプトのバージョン管理が重要な理由は？",
      choices: ["プロンプトを短くするため", "どの改善が効果的だったか追跡できるから", "AIの処理速度が上がるから"],
      answer: 1,
      explanation: "バージョン管理により改善履歴を追跡でき、最も効果的なプロンプトを特定できます。"
    }
  },
];
