export interface QuizResult {
  score: number;
  total: number;
  date: string;
}

const HISTORY_KEY = "quiz_history";
const MAX_HISTORY = 20;

export function getQuizHistory(): QuizResult[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveQuizResult(score: number, total: number): void {
  if (typeof window === "undefined") return;
  const history = getQuizHistory();
  history.unshift({
    score,
    total,
    date: new Date().toISOString(),
  });
  // Keep only last MAX_HISTORY results
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));
}

export function getBestScore(): number {
  const history = getQuizHistory();
  if (history.length === 0) return 0;
  return Math.max(...history.map((r) => r.score));
}

export function getAverageScore(): number {
  const history = getQuizHistory();
  if (history.length === 0) return 0;
  const sum = history.reduce((acc, r) => acc + r.score, 0);
  return Math.round((sum / history.length) * 10) / 10;
}
