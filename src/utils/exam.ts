// src/utils/exam.ts
import quizzes from "../data/quizzes";

export type Question =
  | { type: "mc"; text: string; options: string[]; correctIndex: number; hint?: string }
  | { type: "tf"; text: string; answer: boolean; hint?: string };

export function pickRandom<T>(arr: T[], n: number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Math.min(n, a.length));
}

export function buildExam(quizId: string, count = 10) {
  const bank = quizzes[quizId];
  if (!bank) throw new Error(`Nincs ilyen kvíz: ${quizId}`);
  const questions = pickRandom<Question>(bank.questions as Question[], count);
  // készítünk megoldókulcsot
  const key = questions.map((q, i) => ({
    idx: i,
    correct: q.type === "mc" ? (q as any).correctIndex : (q as any).answer,
    type: q.type,
  }));
  return { title: bank.title, questions, key };
}
