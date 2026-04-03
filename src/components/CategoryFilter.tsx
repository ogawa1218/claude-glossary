"use client";

import { Category, categories } from "@/data/terms";

interface CategoryFilterProps {
  selected: Category | "all";
  onChange: (cat: Category | "all") => void;
  counts: Record<string, number>;
}

const categoryColorMap: Record<string, { border: string; bg: string; text: string }> = {
  "ai-basics": { border: "#38bdf8", bg: "rgba(56,189,248,0.12)", text: "#38bdf8" },
  "claude-specific": { border: "#f97316", bg: "rgba(249,115,22,0.12)", text: "#f97316" },
  "api-dev": { border: "#a78bfa", bg: "rgba(167,139,250,0.12)", text: "#a78bfa" },
  "prompt-tech": { border: "#34d399", bg: "rgba(52,211,153,0.12)", text: "#34d399" },
  "pricing": { border: "#fbbf24", bg: "rgba(251,191,36,0.12)", text: "#fbbf24" },
  "automation": { border: "#f472b6", bg: "rgba(244,114,182,0.12)", text: "#f472b6" },
};

export default function CategoryFilter({ selected, onChange, counts }: CategoryFilterProps) {
  const all = [
    { key: "all" as const, label: "すべて", icon: "📚" },
    ...Object.entries(categories).map(([key, val]) => ({
      key: key as Category,
      label: val.label,
      icon: val.icon,
    })),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {all.map(({ key, label, icon }) => {
        const isActive = selected === key;
        const colors = key !== "all" ? categoryColorMap[key] : null;

        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all"
            style={
              isActive
                ? colors
                  ? {
                      backgroundColor: colors.bg,
                      border: `1px solid ${colors.border}`,
                      color: colors.text,
                    }
                  : {
                      backgroundColor: "rgba(249,115,22,0.15)",
                      border: "1px solid #f97316",
                      color: "#f97316",
                    }
                : {
                    backgroundColor: "#2b2d31",
                    border: "1px solid #383a40",
                    color: "#b5bac1",
                  }
            }
          >
            <span>{icon}</span>
            <span>{label}</span>
            <span
              className="text-xs px-1.5 py-0.5 rounded-full"
              style={{
                backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "#383a40",
                color: isActive ? "#fff" : "#80848e",
              }}
            >
              {key === "all"
                ? counts["all"]
                : counts[key] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
