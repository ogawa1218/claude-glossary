"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { glossaryTerms, type Term } from "@/lib/glossary";

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
  const shuffled = shuffle(glossaryTerms).slice(0, count);
  return shuffled.map((term) => {
    const distractors = shuffle(glossaryTerms.filter((t) => t.id !== term.id))
      .slice(0, 3)
      .map((t) => t.definition);
    const choices = shuffle([term.definition, ...distractors]);
    return {
      term,
      choices,
      correctIndex: choices.indexOf(term.definition),
    };
  });
}

type Phase = "idle" | "playing" | "done";

const TOTAL = 10;

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const startQuiz = useCallback(() => {
    setQuestions(buildQuestions(TOTAL));
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setPhase("playing");
  }, []);

  const handleChoice = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[current].correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 >= TOTAL) {
      setPhase("done");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const pct = Math.round((score / TOTAL) * 100);

  if (phase === "idle") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">🧠</div>
        <h1 className="text-4xl font-bold mb-4">
          AI Glossary{" "}
          <span style={{ color: "var(--accent)" }}>Quiz</span>
        </h1>
        <p className="mb-8 text-lg" style={{ color: "var(--muted)" }}>
          {TOTAL} questions · 4 choices each · Match the term to its definition
        </p>
        <button
          onClick={startQuiz}
          className="px-8 py-3 rounded-xl font-bold text-white text-lg transition-opacity hover:opacity-90"
          style={{ background: "var(--accent)" }}
        >
          Start Quiz
        </button>
        <div className="mt-8">
          <Link href="/" className="text-sm hover:underline" style={{ color: "var(--muted)" }}>
            ← Back to Glossary
          </Link>
        </div>
      </div>
    );
  }

  if (phase === "done") {
    const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📚";
    const message =
      pct >= 80
        ? "Excellent! You really know your AI."
        : pct >= 50
        ? "Good effort! Keep studying."
        : "Keep learning — you'll get there!";
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">{emoji}</div>
        <h1 className="text-4xl font-bold mb-2">Quiz Complete</h1>
        <p className="mb-6 text-lg" style={{ color: "var(--muted)" }}>
          {message}
        </p>
        <div
          className="rounded-2xl p-8 mb-8 inline-block"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="text-7xl font-black" style={{ color: "var(--accent)" }}>
            {score}/{TOTAL}
          </div>
          <div className="text-xl mt-1" style={{ color: "var(--muted)" }}>
            {pct}% correct
          </div>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={startQuiz}
            className="px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl font-semibold transition-opacity hover:opacity-80"
            style={{ background: "var(--card)", color: "var(--foreground)", border: "1px solid var(--border)" }}
          >
            Back to Glossary
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6 text-sm" style={{ color: "var(--muted)" }}>
        <span>
          Question {current + 1} of {TOTAL}
        </span>
        <span style={{ color: "var(--accent)" }}>
          Score: {score}/{current + (answered ? 1 : 0)}
        </span>
      </div>
      <div className="h-1.5 rounded-full mb-8 overflow-hidden" style={{ background: "var(--border)" }}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${((current + (answered ? 1 : 0)) / TOTAL) * 100}%`, background: "var(--accent)" }}
        />
      </div>

      {/* Question */}
      <div
        className="rounded-2xl p-6 mb-6"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {q.term.category}
        </p>
        <h2 className="text-2xl font-bold">
          What is{" "}
          <span style={{ color: "var(--accent)" }}>{q.term.term}</span>?
        </h2>
      </div>

      {/* Choices */}
      <div className="flex flex-col gap-3 mb-8">
        {q.choices.map((choice, idx) => {
          const isCorrect = idx === q.correctIndex;
          const isSelected = idx === selected;
          let bg = "var(--card)";
          let borderColor = "var(--border)";
          let textColor = "var(--foreground)";

          if (answered) {
            if (isCorrect) {
              bg = "#16a34a22";
              borderColor = "#16a34a";
              textColor = "#4ade80";
            } else if (isSelected && !isCorrect) {
              bg = "#dc262622";
              borderColor = "#dc2626";
              textColor = "#f87171";
            }
          } else if (isSelected) {
            borderColor = "var(--accent)";
          }

          return (
            <button
              key={idx}
              onClick={() => handleChoice(idx)}
              disabled={answered}
              className="text-left rounded-xl p-4 text-sm font-medium transition-all border"
              style={{ background: bg, borderColor, color: textColor }}
            >
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3"
                style={{
                  background: answered && isCorrect ? "#16a34a" : answered && isSelected ? "#dc2626" : "var(--border)",
                  color: answered && (isCorrect || isSelected) ? "#fff" : "var(--muted)",
                }}
              >
                {String.fromCharCode(65 + idx)}
              </span>
              {choice}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="text-center">
          <p className="mb-4 font-semibold" style={{ color: selected === q.correctIndex ? "#4ade80" : "#f87171" }}>
            {selected === q.correctIndex ? "✓ Correct!" : "✗ Incorrect"}
          </p>
          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            {current + 1 >= TOTAL ? "See Results" : "Next Question →"}
          </button>
        </div>
      )}
    </div>
  );
}
