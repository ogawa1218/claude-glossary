"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { glossary, type Term } from "@/lib/glossary";

interface Question {
  term: Term;
  choices: string[];
  correctIndex: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestions(count = 10): Question[] {
  const shuffled = shuffle(glossary).slice(0, count);
  return shuffled.map((term) => {
    const distractors = shuffle(glossary.filter((t) => t.id !== term.id))
      .slice(0, 3)
      .map((t) => t.name);
    const choices = shuffle([term.name, ...distractors]);
    return {
      term,
      choices,
      correctIndex: choices.indexOf(term.name),
    };
  });
}

type Phase = "idle" | "playing" | "done";
const TOTAL = 10;

function getRank(score: number): { label: string; emoji: string; message: string } {
  if (score >= 9) return { label: "AIマスター", emoji: "🏆", message: "完璧！AIの知識は最高レベルです！" };
  if (score >= 7) return { label: "上級者", emoji: "🎉", message: "素晴らしい！AI用語をよく理解しています。" };
  if (score >= 5) return { label: "中級者", emoji: "👍", message: "なかなかです！あと少しで上級者です。" };
  return { label: "入門者", emoji: "📚", message: "これからが楽しみ！用語集で復習しましょう。" };
}

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [flashClass, setFlashClass] = useState("");

  const startQuiz = useCallback(() => {
    setQuestions(buildQuestions(TOTAL));
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setFlashClass("");
    setPhase("playing");
  }, []);

  const handleChoice = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const isCorrect = idx === questions[current].correctIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
      setFlashClass("flash-correct");
    } else {
      setFlashClass("flash-incorrect");
    }
  };

  const handleNext = () => {
    if (current + 1 >= TOTAL) {
      setPhase("done");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
      setFlashClass("");
    }
  };

  // Idle screen
  if (phase === "idle") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-7xl mb-6">🎯</div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
          AI用語<span style={{ color: "var(--accent)" }}>クイズ</span>
        </h1>
        <p className="mb-3 text-base" style={{ color: "var(--muted)" }}>
          説明文を読んで、正しいAI用語を4択から選ぼう！
        </p>
        <div className="flex justify-center gap-6 mb-10 text-sm" style={{ color: "var(--muted)" }}>
          <span>📝 全{TOTAL}問</span>
          <span>🔠 4択</span>
          <span>🏆 ランク判定</span>
        </div>

        <div className="rounded-2xl p-6 mb-8 text-left" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-bold mb-3 text-sm" style={{ color: "var(--accent)" }}>ランク基準</h2>
          <div className="space-y-2 text-sm">
            {[
              { score: "9〜10問正解", rank: "AIマスター", emoji: "🏆" },
              { score: "7〜8問正解", rank: "上級者", emoji: "🎉" },
              { score: "5〜6問正解", rank: "中級者", emoji: "👍" },
              { score: "0〜4問正解", rank: "入門者", emoji: "📚" },
            ].map((r) => (
              <div key={r.rank} className="flex items-center gap-3">
                <span className="text-lg">{r.emoji}</span>
                <span className="font-semibold" style={{ minWidth: "80px" }}>{r.rank}</span>
                <span style={{ color: "var(--muted)" }}>{r.score}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={startQuiz}
          className="px-10 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-105 shadow-lg"
          style={{ background: "var(--accent)" }}
        >
          スタート！
        </button>
        <div className="mt-6">
          <Link href="/" className="text-sm hover:underline" style={{ color: "var(--muted)" }}>
            ← 用語集に戻る
          </Link>
        </div>
      </div>
    );
  }

  // Results screen
  if (phase === "done") {
    const rank = getRank(score);
    const pct = Math.round((score / TOTAL) * 100);
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center fade-in">
        <div className="text-7xl mb-4">{rank.emoji}</div>
        <h1 className="text-3xl font-black mb-2">クイズ完了！</h1>
        <p className="mb-8 text-base" style={{ color: "var(--muted)" }}>
          {rank.message}
        </p>

        <div className="rounded-2xl p-8 mb-4 inline-block" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <div className="text-8xl font-black mb-1" style={{ color: "var(--accent)" }}>
            {score}<span className="text-4xl text-gray-400">/{TOTAL}</span>
          </div>
          <div className="text-lg mt-1" style={{ color: "var(--muted)" }}>
            正解率 {pct}%
          </div>
        </div>

        <div className="mb-8">
          <div
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-lg"
            style={{ background: "#F9731620", color: "var(--accent)", border: "1px solid #F9731640" }}
          >
            {rank.emoji} {rank.label}
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={startQuiz}
            className="px-8 py-3.5 rounded-2xl font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "var(--accent)" }}
          >
            もう一度挑戦
          </button>
          <Link
            href="/"
            className="px-8 py-3.5 rounded-2xl font-semibold transition-all hover:opacity-80"
            style={{ background: "var(--card)", color: "var(--foreground)", border: "1px solid var(--border)" }}
          >
            用語集で復習
          </Link>
        </div>
      </div>
    );
  }

  // Playing
  const q = questions[current];
  const progress = ((current + (answered ? 1 : 0)) / TOTAL) * 100;

  return (
    <div className={`max-w-2xl mx-auto px-4 py-10 ${flashClass}`}>
      {/* Progress */}
      <div className="flex items-center justify-between mb-3 text-sm" style={{ color: "var(--muted)" }}>
        <span>第 {current + 1} 問 / 全{TOTAL}問</span>
        <span style={{ color: "var(--accent)", fontWeight: "bold" }}>
          {score}問正解
        </span>
      </div>
      <div className="h-2 rounded-full mb-8 overflow-hidden" style={{ background: "var(--border)" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, background: "var(--accent)" }}
        />
      </div>

      {/* Question */}
      <div
        className="rounded-2xl p-6 mb-6 fade-in"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <p className="text-xs font-bold mb-2 uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {q.term.category} — この説明文に当てはまる用語はどれ？
        </p>
        <p className="text-base leading-relaxed font-medium" style={{ color: "var(--foreground)" }}>
          {q.term.description}
        </p>
      </div>

      {/* Choices */}
      <div className="flex flex-col gap-3 mb-8">
        {q.choices.map((choice, idx) => {
          const isCorrect = idx === q.correctIndex;
          const isSelected = idx === selected;

          let bg = "var(--card)";
          let borderColor = "var(--border)";
          let textColor = "var(--foreground)";
          let badgeBg = "var(--border)";
          let badgeColor = "var(--muted)";

          if (answered) {
            if (isCorrect) {
              bg = "rgba(34,197,94,0.1)";
              borderColor = "#22c55e";
              textColor = "#4ade80";
              badgeBg = "#22c55e";
              badgeColor = "#fff";
            } else if (isSelected && !isCorrect) {
              bg = "rgba(239,68,68,0.1)";
              borderColor = "#ef4444";
              textColor = "#f87171";
              badgeBg = "#ef4444";
              badgeColor = "#fff";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleChoice(idx)}
              disabled={answered}
              className="text-left rounded-xl p-4 text-sm font-medium transition-all border hover:scale-[1.01] disabled:hover:scale-100"
              style={{ background: bg, borderColor, color: textColor }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold flex-shrink-0"
                  style={{ background: badgeBg, color: badgeColor }}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="font-semibold">{choice}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div className="text-center fade-in">
          <div className="rounded-2xl p-4 mb-5" style={{ background: "var(--card)", border: `1px solid ${selected === q.correctIndex ? "#22c55e" : "#ef4444"}` }}>
            <p className="font-bold text-lg mb-1" style={{ color: selected === q.correctIndex ? "#4ade80" : "#f87171" }}>
              {selected === q.correctIndex ? "✓ 正解！" : "✗ 不正解"}
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              正解：<span className="font-bold" style={{ color: "var(--foreground)" }}>{q.term.name}</span>
              {selected !== q.correctIndex && (
                <span> （{q.term.englishName}）</span>
              )}
            </p>
            {selected !== q.correctIndex && (
              <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--muted)" }}>
                {q.term.description}
              </p>
            )}
          </div>
          <button
            onClick={handleNext}
            className="px-10 py-3.5 rounded-2xl font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "var(--accent)" }}
          >
            {current + 1 >= TOTAL ? "結果を見る 🎯" : "次の問題 →"}
          </button>
        </div>
      )}
    </div>
  );
}
