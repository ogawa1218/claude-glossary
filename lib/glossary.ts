export interface Term {
  id: string;
  term: string;
  category: string;
  definition: string;
  example?: string;
}

export const glossaryTerms: Term[] = [
  {
    id: "llm",
    term: "Large Language Model (LLM)",
    category: "Core Concepts",
    definition:
      "A type of AI model trained on vast amounts of text data to understand and generate human language. LLMs learn statistical patterns in language to predict and produce coherent text.",
    example: "GPT-4, Claude, and Gemini are prominent examples of LLMs.",
  },
  {
    id: "transformer",
    term: "Transformer",
    category: "Architecture",
    definition:
      "A neural network architecture introduced in 2017 that uses self-attention mechanisms to process sequential data. It became the foundation for virtually all modern LLMs.",
    example: "The original Transformer paper was titled 'Attention Is All You Need'.",
  },
  {
    id: "attention",
    term: "Attention Mechanism",
    category: "Architecture",
    definition:
      "A technique that allows models to focus on relevant parts of the input when generating each part of the output, weighing the importance of different tokens relative to each other.",
    example: "Self-attention lets each word in a sentence attend to every other word.",
  },
  {
    id: "prompt",
    term: "Prompt",
    category: "Core Concepts",
    definition:
      "The input text or instruction given to an AI model to guide its response. Crafting effective prompts is the central skill in working with language models.",
    example: "\"Summarize this article in three bullet points\" is a prompt.",
  },
  {
    id: "prompt-engineering",
    term: "Prompt Engineering",
    category: "Techniques",
    definition:
      "The practice of designing and refining prompts to elicit better, more accurate, or more useful responses from AI models. It involves techniques like few-shot examples, chain-of-thought, and role assignment.",
    example: "Adding 'Think step by step' to a math prompt is a prompt engineering technique.",
  },
  {
    id: "few-shot",
    term: "Few-Shot Learning",
    category: "Techniques",
    definition:
      "A prompting technique where a small number of examples (shots) are included in the prompt to demonstrate the desired input-output format, helping the model generalize to new inputs.",
    example: "Providing 3 example translations before asking for a new one is few-shot learning.",
  },
  {
    id: "zero-shot",
    term: "Zero-Shot Learning",
    category: "Techniques",
    definition:
      "The ability of an AI model to perform tasks it has never explicitly seen examples of, relying solely on its pre-trained knowledge and the task description in the prompt.",
    example: "Asking Claude to classify sentiment with no examples is zero-shot prompting.",
  },
  {
    id: "chain-of-thought",
    term: "Chain-of-Thought (CoT)",
    category: "Techniques",
    definition:
      "A prompting strategy that encourages models to produce intermediate reasoning steps before arriving at a final answer, improving accuracy on complex reasoning tasks.",
    example: "'Let's think step by step' triggers chain-of-thought reasoning.",
  },
  {
    id: "rag",
    term: "Retrieval-Augmented Generation (RAG)",
    category: "Techniques",
    definition:
      "A technique that enhances LLM responses by first retrieving relevant documents from a knowledge base, then passing them as context to the model, reducing hallucination and enabling up-to-date answers.",
    example: "A customer support bot that searches a product manual before answering uses RAG.",
  },
  {
    id: "fine-tuning",
    term: "Fine-Tuning",
    category: "Training",
    definition:
      "The process of further training a pre-trained model on a smaller, task-specific dataset to adapt it for a particular use case, improving performance on that domain.",
    example: "Training GPT on medical records to create a clinical assistant is fine-tuning.",
  },
  {
    id: "rlhf",
    term: "RLHF (Reinforcement Learning from Human Feedback)",
    category: "Training",
    definition:
      "A training technique where human raters evaluate model outputs and those preferences are used as a reward signal to fine-tune the model via reinforcement learning, aligning it with human values.",
    example: "ChatGPT and Claude were trained using RLHF to improve helpfulness and safety.",
  },
  {
    id: "token",
    term: "Token",
    category: "Core Concepts",
    definition:
      "The basic unit of text processed by LLMs. Tokens can be words, parts of words, or punctuation. Models have a context window measured in tokens that limits how much text they can process at once.",
    example: "The word 'unbelievable' might be split into 3 tokens: 'un', 'believ', 'able'.",
  },
  {
    id: "context-window",
    term: "Context Window",
    category: "Core Concepts",
    definition:
      "The maximum number of tokens a model can process in a single interaction, encompassing both the input prompt and the generated output. Larger context windows enable processing longer documents.",
    example: "Claude 3.5 Sonnet has a 200K token context window.",
  },
  {
    id: "embedding",
    term: "Embedding",
    category: "Architecture",
    definition:
      "A dense vector representation of text (words, sentences, or documents) in a high-dimensional space where semantically similar content is positioned closer together, enabling semantic search and comparison.",
    example: "Embeddings allow searching for 'fast car' and finding results about 'quick automobile'.",
  },
  {
    id: "hallucination",
    term: "Hallucination",
    category: "Limitations",
    definition:
      "When an AI model generates content that sounds plausible but is factually incorrect, fabricated, or unsupported by its training data or provided context. A key challenge in deploying LLMs reliably.",
    example: "An LLM confidently citing a scientific paper that doesn't exist is a hallucination.",
  },
  {
    id: "temperature",
    term: "Temperature",
    category: "Parameters",
    definition:
      "A sampling parameter (0–2) controlling the randomness of model outputs. Lower values produce more deterministic responses; higher values produce more creative and varied responses.",
    example: "Temperature 0.0 gives the same answer each time; 1.0 produces varied, creative outputs.",
  },
  {
    id: "top-p",
    term: "Top-P (Nucleus Sampling)",
    category: "Parameters",
    definition:
      "A sampling technique where the model considers only the smallest set of tokens whose cumulative probability exceeds the threshold P, balancing diversity and coherence.",
    example: "Top-P of 0.9 means the model samples from tokens covering 90% of the probability mass.",
  },
  {
    id: "system-prompt",
    term: "System Prompt",
    category: "Core Concepts",
    definition:
      "Instructions given to an AI model before the user conversation begins, used to define the model's persona, constraints, and behavior for the entire session.",
    example: "\"You are a helpful coding assistant. Always provide working code examples.\"",
  },
  {
    id: "tool-use",
    term: "Tool Use (Function Calling)",
    category: "Capabilities",
    definition:
      "The ability of an LLM to call external functions, APIs, or tools during a conversation to retrieve real-time data, perform calculations, or execute actions beyond text generation.",
    example: "An AI assistant calling a weather API to answer 'What's the weather in Tokyo?' uses tool use.",
  },
  {
    id: "agent",
    term: "AI Agent",
    category: "Capabilities",
    definition:
      "An AI system that can autonomously plan and execute multi-step tasks by using tools, reasoning about results, and iterating toward a goal with minimal human intervention.",
    example: "An agent that browses the web, writes code, and runs tests to fix a GitHub issue.",
  },
  {
    id: "multimodal",
    term: "Multimodal AI",
    category: "Capabilities",
    definition:
      "AI models that can process and generate multiple types of data — such as text, images, audio, and video — within a single unified model.",
    example: "GPT-4o and Claude 3 can analyze both images and text in the same conversation.",
  },
  {
    id: "grounding",
    term: "Grounding",
    category: "Techniques",
    definition:
      "The process of connecting AI model outputs to verifiable external knowledge sources (documents, databases, web search) to reduce hallucination and improve factual accuracy.",
    example: "Providing a source document in the prompt so the model answers only from that text is grounding.",
  },
  {
    id: "constitutional-ai",
    term: "Constitutional AI (CAI)",
    category: "Safety",
    definition:
      "Anthropic's technique for training AI models to be helpful, harmless, and honest by having the AI critique and revise its own outputs according to a set of defined principles.",
    example: "Claude is trained using Constitutional AI to avoid harmful outputs.",
  },
  {
    id: "alignment",
    term: "AI Alignment",
    category: "Safety",
    definition:
      "The challenge of ensuring that AI systems pursue goals and behave in ways that are intended and beneficial to humans, avoiding unintended or harmful outcomes as capabilities scale.",
    example: "RLHF and Constitutional AI are techniques aimed at improving model alignment.",
  },
  {
    id: "inference",
    term: "Inference",
    category: "Core Concepts",
    definition:
      "The process of running a trained AI model to generate outputs from new inputs. Inference is what happens when you send a message to an AI — as opposed to training, which builds the model.",
    example: "Every API call to Claude is an inference request.",
  },
  {
    id: "pretraining",
    term: "Pretraining",
    category: "Training",
    definition:
      "The initial training phase where a model learns general language understanding by predicting the next token on a massive corpus of text from the internet and other sources.",
    example: "LLMs are pretrained on trillions of tokens before any fine-tuning or RLHF.",
  },
  {
    id: "mixture-of-experts",
    term: "Mixture of Experts (MoE)",
    category: "Architecture",
    definition:
      "An architecture where a model routes each input to a subset of specialized sub-networks ('experts'), allowing a much larger total parameter count while keeping inference compute tractable.",
    example: "Mixtral and GPT-4 are believed to use a Mixture of Experts architecture.",
  },
  {
    id: "vector-database",
    term: "Vector Database",
    category: "Infrastructure",
    definition:
      "A database optimized for storing and querying high-dimensional embedding vectors, enabling fast semantic similarity search — a key component of RAG pipelines.",
    example: "Pinecone, Weaviate, and pgvector are popular vector databases.",
  },
  {
    id: "tokenizer",
    term: "Tokenizer",
    category: "Architecture",
    definition:
      "The component that converts raw text into tokens before feeding them into the model, and converts token IDs back into text for the output. Different models use different tokenization schemes.",
    example: "OpenAI's tiktoken and Anthropic's tokenizer split text differently.",
  },
  {
    id: "guardrails",
    term: "Guardrails",
    category: "Safety",
    definition:
      "Safety mechanisms built into or layered around an AI model to prevent it from generating harmful, biased, or inappropriate content and to enforce compliance with usage policies.",
    example: "Content filters that block NSFW outputs are a form of guardrails.",
  },
  {
    id: "latency",
    term: "Latency & TTFT",
    category: "Parameters",
    definition:
      "Latency is the total time for a model to generate a complete response. Time to First Token (TTFT) is the delay before streaming begins. Both are critical metrics for real-time AI applications.",
    example: "A chatbot with high TTFT feels sluggish even if the total output is fast.",
  },
  {
    id: "sft",
    term: "Supervised Fine-Tuning (SFT)",
    category: "Training",
    definition:
      "A fine-tuning stage where the model is trained on high-quality human-written demonstrations of desired behavior, teaching it to follow instructions before RLHF is applied.",
    example: "SFT on instruction-following datasets precedes RLHF in most assistant model pipelines.",
  },
  {
    id: "lora",
    term: "LoRA (Low-Rank Adaptation)",
    category: "Training",
    definition:
      "A parameter-efficient fine-tuning method that inserts small trainable rank-decomposition matrices into the model layers, dramatically reducing the compute and memory needed to fine-tune large models.",
    example: "LoRA lets a single GPU fine-tune a 7B parameter model by training <1% of its weights.",
  },
];

export const categories = [...new Set(glossaryTerms.map((t) => t.category))];
