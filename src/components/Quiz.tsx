"use client";

import { useState } from "react";
import { Quiz as QuizType } from "@/data/terms";

interface QuizProps {
  quiz: QuizType;
  accentColor: string;
}

export default function QuizSection({ quiz, accentColor }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === quiz.answer;

  return (
    <section
      className="rounded-2xl p-6 mb-4"
      style={{ backgroundColor: "#313338", border: "1px solid #383a40" }}
    >
      <h2
        className="text-sm font-bold mb-4 flex items-center gap-2"
        style={{ color: "#a78bfa" }}
      >
        <span
          className="w-5 h-5 rounded flex items-center justify-center text-xs"
          style={{ backgroundColor: "rgba(167,139,250,0.15)" }}
        >
          🧠
        </span>
        理解度チェック
      </h2>

      <p className="text-sm font-medium mb-4" style={{ color: "#f2f3f5" }}>
        {quiz.question}
      </p>

      <div className="space-y-2">
        {quiz.choices.map((choice, i) => {
          let borderColor = "#383a40";
          let bgColor = "#2b2d31";
          let textColor = "#b5bac1";
          let label = "";

          if (answered) {
            if (i === quiz.answer) {
              borderColor = "#4ade80";
              bgColor = "rgba(74,222,128,0.1)";
              textColor = "#4ade80";
              label = " ✓";
            } else if (i === selected) {
              borderColor = "#f87171";
              bgColor = "rgba(248,113,113,0.1)";
              textColor = "#f87171";
              label = " ✗";
            }
          }

          return (
            <button
              key={i}
              onClick={() => !answered && setSelected(i)}
              disabled={answered}
              className="w-full text-left rounded-xl px-4 py-3 text-sm transition-all"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
                color: textColor,
                cursor: answered ? "default" : "pointer",
              }}
              onMouseEnter={(e) => {
                if (!answered) {
                  const el = e.currentTarget;
                  el.style.borderColor = accentColor;
                  el.style.backgroundColor = "#383a40";
                }
              }}
              onMouseLeave={(e) => {
                if (!answered) {
                  const el = e.currentTarget;
                  el.style.borderColor = "#383a40";
                  el.style.backgroundColor = "#2b2d31";
                }
              }}
            >
              <span className="font-medium" style={{ color: "#80848e" }}>
                {String.fromCharCode(65 + i)}.{" "}
              </span>
              {choice}
              {label}
            </button>
          );
        })}
      </div>

      {answered && (
        <div
          className="mt-4 rounded-xl p-4 text-sm"
          style={{
            backgroundColor: isCorrect
              ? "rgba(74,222,128,0.08)"
              : "rgba(248,113,113,0.08)",
            border: `1px solid ${isCorrect ? "#4ade8040" : "#f8717140"}`,
          }}
        >
          <p className="font-bold mb-1" style={{ color: isCorrect ? "#4ade80" : "#f87171" }}>
            {isCorrect ? "正解！" : "不正解…"}
          </p>
          <p style={{ color: "#b5bac1" }}>{quiz.explanation}</p>
        </div>
      )}
    </section>
  );
}
