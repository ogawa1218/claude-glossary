"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
import { glossary, type Term } from "@/lib/glossary";
import { useAuth } from "@/lib/AuthContext";
import { saveQuizResult, getQuizHistory, getBestScore, getAverageScore } from "@/lib/quizHistory";

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

function getRank(score: number): { label: string; emoji: string; message: string; color: string } {
  if (score >= 9) return { label: "AIマスター", emoji: "🏆", message: "完璧です。この分野を誰かに教えられるレベル。", color: "var(--gold)" };
  if (score >= 7) return { label: "上級者",     emoji: "🎉", message: "素晴らしい理解度。自信を持って発信できます。", color: "var(--accent)" };
  if (score >= 5) return { label: "中級者",     emoji: "👍", message: "惜しい。あと2問で上級の仲間入り。",           color: "var(--cat-web)" };
  return           { label: "入門者",           emoji: "📚", message: "ここからが楽しい。辞典に戻って復習しよう。",   color: "var(--muted)" };
}

/* ---------- Page ---------- */
export default function QuizPage() {
  const { authed } = useAuth();
  const [phase, setPhase] = useState<Phase>("idle");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [flashClass, setFlashClass] = useState("");

  // Re-read from localStorage when phase transitions (e.g. "done" after saveQuizResult).
  // phase is an intentional refresh trigger even though it's not read inside the fn.
  /* eslint-disable react-hooks/exhaustive-deps */
  const history   = useMemo(() => (authed ? getQuizHistory()   : []), [authed, phase]);
  const bestScore = useMemo(() => (authed ? getBestScore()     : 0),  [authed, phase]);
  const avgScore  = useMemo(() => (authed ? getAverageScore()  : 0),  [authed, phase]);
  /* eslint-enable react-hooks/exhaustive-deps */

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
      if (authed) {
        saveQuizResult(score, TOTAL);
      }
      setPhase("done");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
      setFlashClass("");
    }
  };

  // Keyboard 1-4
  useEffect(() => {
    if (phase !== "playing" || answered) return;
    const onKey = (e: KeyboardEvent) => {
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= 4) handleChoice(n - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, answered, current]); // eslint-disable-line react-hooks/exhaustive-deps

  /* =================== IDLE =================== */
  if (phase === "idle") {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-14 pb-20 text-center">
        <div
          className="inline-flex items-center gap-2 pill mb-6"
          style={{
            background: "var(--accent-wash)",
            color: "var(--accent-ink)",
            border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
          }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full pulse-accent" style={{ background: "var(--accent)" }} />
          <span className="text-[11px] tracking-[0.18em] uppercase font-bold">IT用語クイズ</span>
        </div>

        <h1 className="display text-5xl sm:text-6xl mb-4">
          <span style={{ color: "var(--text)" }}>説明から、</span>
          <br />
          <span style={{ color: "var(--accent)" }}>用語を当てよ。</span>
        </h1>

        <p className="text-base mb-8 leading-relaxed max-w-md mx-auto" style={{ color: "var(--text-soft)" }}>
          全{TOTAL}問・4択形式。説明文から適切なIT用語を選ぶだけ。<br />
          解いた瞬間に解説が表示されて、用語がそのまま記憶に定着します。
        </p>

        <div className="flex justify-center gap-6 mb-10 text-sm flex-wrap" style={{ color: "var(--muted)" }}>
          <span className="inline-flex items-center gap-1.5">
            <span className="font-mono font-bold" style={{ color: "var(--text)" }}>{TOTAL}</span>問
          </span>
          <span className="opacity-40">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="font-mono font-bold" style={{ color: "var(--text)" }}>4</span>択
          </span>
          <span className="opacity-40">·</span>
          <span className="inline-flex items-center gap-1.5">
            4段階の
            <span className="font-semibold" style={{ color: "var(--text)" }}>ランク判定</span>
          </span>
        </div>

        {/* Rank table */}
        <div
          className="rounded-2xl p-5 sm:p-7 mb-8 text-left"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--hairline)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
              Rank System
            </span>
            <div className="hairline-divider flex-1" />
          </div>
          <div className="space-y-2.5 text-sm">
            {[
              { s: "9〜10問正解", r: "AIマスター", e: "🏆", c: "var(--gold)" },
              { s: "7〜8問正解",  r: "上級者",     e: "🎉", c: "var(--accent)" },
              { s: "5〜6問正解",  r: "中級者",     e: "👍", c: "var(--cat-web)" },
              { s: "0〜4問正解",  r: "入門者",     e: "📚", c: "var(--muted)" },
            ].map((r) => (
              <div
                key={r.r}
                className="flex items-center gap-3 py-2 px-3 rounded-lg"
                style={{ background: "var(--surface-2)" }}
              >
                <span className="text-xl leading-none w-7">{r.e}</span>
                <span className="font-serif text-base font-semibold w-28" style={{ color: r.c }}>{r.r}</span>
                <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>{r.s}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={startQuiz}
          className="btn-accent px-10 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2"
        >
          スタート
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
          </svg>
        </button>

        <div className="mt-8">
          <Link href="/" className="text-sm hover:underline inline-flex items-center gap-1" style={{ color: "var(--muted)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            辞典に戻る
          </Link>
        </div>
      </div>
    );
  }

  /* =================== DONE =================== */
  if (phase === "done") {
    const rank = getRank(score);
    const pct = Math.round((score / TOTAL) * 100);
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-14 pb-20 text-center fade-in">
        <div className="text-7xl mb-4 confetti-pop">{rank.emoji}</div>
        <h1 className="display text-4xl sm:text-5xl mb-2">クイズ完了</h1>
        <p className="mb-8 text-base" style={{ color: "var(--text-soft)" }}>
          {rank.message}
        </p>

        {/* Score ring */}
        <div
          className="rounded-3xl p-10 mb-5 inline-block relative overflow-hidden noise-grain"
          style={{
            background: "var(--surface)",
            border: `2px solid ${rank.color}`,
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div className="flex items-baseline justify-center gap-1 mb-1">
            <span className="display text-8xl font-semibold leading-none" style={{ color: rank.color }}>
              {score}
            </span>
            <span className="font-serif text-3xl font-medium" style={{ color: "var(--muted)" }}>/{TOTAL}</span>
          </div>
          <div className="text-sm font-medium tracking-wide" style={{ color: "var(--muted)" }}>
            正解率 <span className="font-mono font-bold" style={{ color: "var(--text)" }}>{pct}%</span>
          </div>
        </div>

        <div className="mb-8">
          <div
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-lg"
            style={{
              background: `color-mix(in srgb, ${rank.color} 12%, transparent)`,
              color: rank.color,
              border: `1px solid color-mix(in srgb, ${rank.color} 40%, transparent)`,
            }}
          >
            {rank.emoji} {rank.label}
          </div>
        </div>

        {/* Stats */}
        {authed && history.length > 0 && (
          <div
            className="rounded-2xl p-5 mb-8 text-left max-w-md mx-auto"
            style={{ background: "var(--surface)", border: "1px solid var(--hairline)", boxShadow: "var(--shadow-sm)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
                Your Stats
              </span>
              <div className="hairline-divider flex-1" />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "ベスト", value: bestScore },
                { label: "平均",   value: avgScore },
                { label: "挑戦",   value: history.length },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-semibold" style={{ color: "var(--accent)" }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={startQuiz}
            className="btn-accent px-7 py-3.5 rounded-2xl font-bold"
          >
            もう一度挑戦
          </button>
          <Link
            href="/"
            className="px-7 py-3.5 rounded-2xl font-semibold transition-all hover:opacity-80"
            style={{
              background: "var(--surface)",
              color: "var(--text)",
              border: "1px solid var(--hairline-strong)",
            }}
          >
            辞典で復習
          </Link>
        </div>
      </div>
    );
  }

  /* =================== PLAYING =================== */
  const q = questions[current];
  const progress = ((current + (answered ? 1 : 0)) / TOTAL) * 100;

  return (
    <div className={`max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-20 ${flashClass}`}>
      {/* Top bar */}
      <div className="flex items-center justify-between mb-3 text-xs" style={{ color: "var(--muted)" }}>
        <span className="font-mono tracking-wider">
          Q <span className="font-bold text-base" style={{ color: "var(--text)" }}>{current + 1}</span> / {TOTAL}
        </span>
        <span className="font-mono">
          <span className="font-bold" style={{ color: "var(--accent)" }}>{score}</span> 正解
        </span>
      </div>
      <div className="h-1.5 rounded-full mb-8 overflow-hidden" style={{ background: "var(--hairline)" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, var(--accent) 0%, var(--accent-soft) 100%)",
          }}
        />
      </div>

      {/* Question card */}
      <div
        className="rounded-2xl p-6 sm:p-8 mb-6 fade-in relative"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--hairline)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span
            className="pill"
            style={{
              background: "var(--accent-wash)",
              color: "var(--accent-ink)",
            }}
          >
            {q.term.category}
          </span>
          <span className="text-[10px] tracking-[0.18em] uppercase font-bold" style={{ color: "var(--muted)" }}>
            この説明に当てはまる用語は？
          </span>
        </div>
        <p className="font-serif text-lg sm:text-xl leading-[1.75] font-medium" style={{ color: "var(--text)" }}>
          {q.term.description}
        </p>
      </div>

      {/* Choices */}
      <div className="flex flex-col gap-3 mb-8">
        {q.choices.map((choice, idx) => {
          const isCorrect = idx === q.correctIndex;
          const isSelected = idx === selected;

          let bg = "var(--surface)";
          let border = "var(--hairline)";
          let color = "var(--text)";
          let badgeBg = "var(--surface-2)";
          let badgeColor = "var(--muted)";
          let badgeBorder = "var(--hairline)";

          if (answered) {
            if (isCorrect) {
              bg = "var(--green-wash)";
              border = "var(--green)";
              color = "var(--text)";
              badgeBg = "var(--green)";
              badgeColor = "#fff";
              badgeBorder = "var(--green)";
            } else if (isSelected && !isCorrect) {
              bg = "var(--red-wash)";
              border = "var(--red)";
              color = "var(--text)";
              badgeBg = "var(--red)";
              badgeColor = "#fff";
              badgeBorder = "var(--red)";
            } else {
              bg = "var(--surface)";
              color = "var(--muted)";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleChoice(idx)}
              disabled={answered}
              className="group text-left rounded-xl p-4 text-sm font-medium transition-all border hover:-translate-y-0.5 disabled:hover:translate-y-0"
              style={{ background: bg, borderColor: border, color, boxShadow: answered ? "none" : "var(--shadow-sm)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold font-mono flex-shrink-0 transition-colors"
                  style={{ background: badgeBg, color: badgeColor, border: `1px solid ${badgeBorder}` }}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="font-serif text-base font-semibold flex-1">{choice}</span>
                {answered && isCorrect && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                )}
                {answered && isSelected && !isCorrect && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {!answered && (
        <p className="text-center text-xs" style={{ color: "var(--muted)" }}>
          <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> <kbd>4</kbd> キーでも選択できます
        </p>
      )}

      {/* Feedback */}
      {answered && (
        <div className="text-center fade-in">
          <div
            className="rounded-2xl p-5 mb-5 text-left"
            style={{
              background: "var(--surface)",
              border: `1.5px solid ${selected === q.correctIndex ? "var(--green)" : "var(--red)"}`,
              boxShadow: "var(--shadow-md)",
            }}
          >
            <p className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: selected === q.correctIndex ? "var(--green)" : "var(--red)" }}>
              {selected === q.correctIndex ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  正解！
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  不正解
                </>
              )}
            </p>
            <p className="text-sm mb-2" style={{ color: "var(--text-soft)" }}>
              正解：<span className="font-serif text-base font-bold" style={{ color: "var(--text)" }}>{q.term.name}</span>
              <span className="ml-2 font-mono text-xs" style={{ color: "var(--muted)" }}>{q.term.englishName}</span>
            </p>
            {selected !== q.correctIndex && (
              <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--muted)" }}>
                {q.term.description}
              </p>
            )}
          </div>
          <button
            onClick={handleNext}
            className="btn-accent px-10 py-3.5 rounded-2xl font-bold inline-flex items-center gap-2"
          >
            {current + 1 >= TOTAL ? (
              <>結果を見る <span>→</span></>
            ) : (
              <>次の問題 <span>→</span></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
