"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { terms, CATEGORY_COLORS } from "@/lib/glossary";

const QUIZ_COUNT = 10;

type QuizQuestion = {
  termId: string;
  question: string;
  options: string[];
  correctIndex: number;
  detail: string;
  category: string;
};

function generateQuiz(): QuizQuestion[] {
  const shuffled = [...terms].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, QUIZ_COUNT);

  return selected.map((term) => {
    const others = terms.filter((t) => t.id !== term.id);
    const wrongOptions = [...others]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((t) => t.name);

    const correctIndex = Math.floor(Math.random() * 4);
    const options = [...wrongOptions];
    options.splice(correctIndex, 0, term.name);

    return {
      termId: term.id,
      question: term.description,
      options,
      correctIndex,
      detail: term.detail,
      category: term.category,
    };
  });
}

function getRank(score: number): { label: string; emoji: string; color: string } {
  if (score >= 9) return { label: "AIマスター", emoji: "🏆", color: "#F97316" };
  if (score >= 7) return { label: "上級者", emoji: "🥇", color: "#f59e0b" };
  if (score >= 5) return { label: "中級者", emoji: "🥈", color: "#94a3b8" };
  return { label: "入門者", emoji: "📚", color: "#60a5fa" };
}

type Phase = "start" | "quiz" | "result";

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("start");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);

  const startQuiz = useCallback(() => {
    const q = generateQuiz();
    setQuestions(q);
    setCurrentIndex(0);
    setSelected(null);
    setAnswers([]);
    setScore(0);
    setPhase("quiz");
  }, []);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const isCorrect = idx === questions[currentIndex].correctIndex;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      if (currentIndex + 1 >= QUIZ_COUNT) {
        setPhase("result");
      } else {
        setCurrentIndex((i) => i + 1);
        setSelected(null);
      }
    }, 1800);
  };

  if (phase === "start") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            <span style={{ color: "var(--orange)" }}>AI</span>用語 クイズ
          </h1>
          <p style={{ color: "var(--text-secondary)" }} className="text-base">
            ランダム {QUIZ_COUNT} 問・説明文から正しい用語を選ぼう
          </p>
        </div>

        <div
          className="w-full rounded-2xl p-6 text-left"
          style={{ background: "var(--navy-light)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-bold mb-3" style={{ color: "var(--orange)" }}>ルール</h2>
          <ul style={{ color: "var(--text-secondary)" }} className="text-sm flex flex-col gap-2">
            <li>📝 {QUIZ_COUNT}問のランダム出題</li>
            <li>🔤 説明文を読んで正しい用語名を4択から選ぶ</li>
            <li>✅ 解答後に正誤フィードバックと解説を表示</li>
            <li>🏆 スコアに応じてランク判定（AIマスター〜入門者）</li>
          </ul>
        </div>

        <button
          onClick={startQuiz}
          className="w-full max-w-xs py-4 rounded-2xl font-bold text-lg text-white transition-opacity hover:opacity-85"
          style={{ background: "var(--orange)" }}
        >
          クイズをはじめる
        </button>
      </div>
    );
  }

  if (phase === "result") {
    const rank = getRank(score);
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col items-center text-center gap-6">
        <div
          className="w-full rounded-2xl p-8"
          style={{ background: "var(--navy-light)", border: "1px solid var(--border)" }}
        >
          <div className="text-5xl mb-4">{rank.emoji}</div>
          <div className="text-4xl font-bold mb-2" style={{ color: rank.color }}>
            {rank.label}
          </div>
          <div className="text-6xl font-bold my-4" style={{ color: "var(--orange)" }}>
            {score}
            <span className="text-2xl" style={{ color: "var(--text-secondary)" }}>
              /{QUIZ_COUNT}
            </span>
          </div>
          <p style={{ color: "var(--text-secondary)" }} className="text-sm">
            正解率 {Math.round((score / QUIZ_COUNT) * 100)}%
          </p>
        </div>

        {/* Per-question review */}
        <div className="w-full">
          <h3 className="text-left font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            結果詳細
          </h3>
          <div className="flex flex-col gap-2">
            {questions.map((q, i) => {
              const correct = answers[i];
              return (
                <div
                  key={q.termId}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left"
                  style={{
                    background: correct ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
                    border: `1px solid ${correct ? "#10b981" : "#ef4444"}44`,
                  }}
                >
                  <span className="text-base">{correct ? "✅" : "❌"}</span>
                  <span style={{ color: "var(--text-primary)" }}>
                    Q{i + 1}:{" "}
                    <strong style={{ color: correct ? "#10b981" : "#ef4444" }}>
                      {q.options[q.correctIndex]}
                    </strong>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            onClick={startQuiz}
            className="flex-1 py-3 rounded-xl font-bold text-white"
            style={{ background: "var(--orange)" }}
          >
            もう一度チャレンジ
          </button>
          <Link
            href="/"
            className="flex-1 py-3 rounded-xl font-bold text-center"
            style={{
              background: "var(--navy-light)",
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
            }}
          >
            用語集に戻る
          </Link>
        </div>
      </div>
    );
  }

  // Quiz phase
  const q = questions[currentIndex];
  const answered = selected !== null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 rounded-full h-2" style={{ background: "var(--navy-light)" }}>
          <div
            className="h-2 rounded-full transition-all"
            style={{
              background: "var(--orange)",
              width: `${((currentIndex + 1) / QUIZ_COUNT) * 100}%`,
            }}
          />
        </div>
        <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
          {currentIndex + 1} / {QUIZ_COUNT}
        </span>
      </div>

      {/* Score badge */}
      <div className="flex justify-between items-center">
        <span
          className="text-xs px-3 py-1 rounded-full"
          style={{
            background: `${CATEGORY_COLORS[q.category as keyof typeof CATEGORY_COLORS]}22`,
            color: CATEGORY_COLORS[q.category as keyof typeof CATEGORY_COLORS],
          }}
        >
          {q.category}
        </span>
        <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
          スコア:{" "}
          <span style={{ color: "var(--orange)" }} className="font-bold">
            {score}
          </span>
        </span>
      </div>

      {/* Question */}
      <div
        className="rounded-2xl p-6"
        style={{ background: "var(--navy-light)", border: "1px solid var(--border)" }}
      >
        <p className="text-xs font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
          この説明文はどの用語？
        </p>
        <p className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: "var(--text-primary)" }}>
          {q.question}
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {q.options.map((opt, idx) => {
          let bg = "var(--navy-light)";
          let border = "var(--border)";
          let color = "var(--text-primary)";

          if (answered) {
            if (idx === q.correctIndex) {
              bg = "rgba(16,185,129,0.15)";
              border = "#10b981";
              color = "#10b981";
            } else if (idx === selected && idx !== q.correctIndex) {
              bg = "rgba(239,68,68,0.15)";
              border = "#ef4444";
              color = "#ef4444";
            } else {
              color = "var(--text-secondary)";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={answered}
              className="w-full text-left px-5 py-4 rounded-xl font-medium transition-all text-sm sm:text-base"
              style={{
                background: bg,
                border: `1px solid ${border}`,
                color,
                cursor: answered ? "default" : "pointer",
              }}
            >
              <span className="mr-2 opacity-60">
                {["A", "B", "C", "D"][idx]}.
              </span>
              {opt}
              {answered && idx === q.correctIndex && (
                <span className="ml-2">✓</span>
              )}
              {answered && idx === selected && idx !== q.correctIndex && (
                <span className="ml-2">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div
          className="rounded-xl p-4 text-sm leading-relaxed"
          style={{
            background:
              selected === q.correctIndex
                ? "rgba(16,185,129,0.08)"
                : "rgba(239,68,68,0.08)",
            border: `1px solid ${selected === q.correctIndex ? "#10b981" : "#ef4444"}44`,
            color: "var(--text-secondary)",
          }}
        >
          <p className="font-bold mb-1" style={{ color: selected === q.correctIndex ? "#10b981" : "#ef4444" }}>
            {selected === q.correctIndex ? "正解！" : `不正解 — 正解: ${q.options[q.correctIndex]}`}
          </p>
          <p>{q.detail}</p>
        </div>
      )}
    </div>
  );
}
