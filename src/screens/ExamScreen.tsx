import React, { useMemo, useState, useLayoutEffect, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pickRandom } from "../utils/random";

// <<< FONTOS: innen szedd az összefűzött történelem témazárókat >>>
import { exams } from "../data/exams/tortenelem";

// ---- normalizáló a különböző sémákhoz ----
type TF = { type: "tf"; text: string; answer: boolean; hint?: string };
type MC = { type: "mc"; text: string; options: string[]; correctIndex: number; hint?: string };
type RawGrammar = TF | MC;
type RawHistory = { question: string; options: string[]; correct: number; hint?: string };
type Normalized = { question: string; options: string[]; correctIndex: number; hint?: string };

function normalizeItem(q: any): Normalized {
  const g = q as RawGrammar;
  if (g?.type === "mc") return { question: g.text, options: g.options, correctIndex: g.correctIndex, hint: g.hint };
  if (g?.type === "tf")  return { question: g.text, options: ["Igaz", "Hamis"], correctIndex: g.answer ? 0 : 1, hint: g.hint };

  const h = q as RawHistory;
  if (typeof h?.question === "string" && Array.isArray(h?.options) && typeof h?.correct === "number") {
    return { question: h.question, options: h.options, correctIndex: h.correct, hint: h.hint };
  }

  // fallback
  const question = q?.question ?? q?.text ?? "";
  const options = q?.options ?? [];
  const correctIndex =
    typeof q?.correctIndex === "number" ? q.correctIndex :
    typeof q?.correct === "number" ? q.correct : 0;
  return { question, options, correctIndex, hint: q?.hint };
}

export default function ExamScreen() {
  const route = useRoute<any>();
  const nav = useNavigation<any>();
  const { examId, title, count = 10 } = (route.params || {}) as { examId: string; title?: string; count?: number };

  const bank: any = exams[examId];
  const pool: Normalized[] = useMemo(() => {
    const src = Array.isArray(bank?.items) ? bank.items : Array.isArray(bank?.questions) ? bank.questions : [];
    return src.map(normalizeItem).filter((x: Normalized) => x?.question && x?.options?.length >= 2);
  }, [bank]);

  const [questions, setQuestions] = useState<Normalized[]>(() => pickRandom(pool, Math.min(count, pool.length)));
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    nav.setOptions({ title: title ?? bank?.title ?? "Témazáró" });
  }, [nav, title, bank?.title]);

  useEffect(() => {
    if (pool.length > 0) {
      setQuestions(pickRandom(pool, Math.min(count, pool.length)));
      setIdx(0);
      setAnswers({});
      setSubmitted(false);
    }
  }, [examId, pool, count]);

  const restart = useCallback(() => {
    setQuestions(pickRandom(pool, Math.min(count, pool.length)));
    setIdx(0);
    setAnswers({});
    setSubmitted(false);
  }, [pool, count]);

  if (!bank || pool.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Nincs kérdés ehhez a témazáróhoz (ellenőrizd az examId-t).</Text>
      </View>
    );
  }

  const q = questions[idx];

  const pick = (i: number) => {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [idx]: i }));
  };

  const next = () => setIdx((i) => Math.min(i + 1, questions.length - 1));
  const prev = () => setIdx((i) => Math.max(i - 1, 0));

  const score = useMemo(
    () =>
      Object.entries(answers).reduce((s, [k, v]) => {
        const qi = Number(k);
        const ok = v !== null && v === questions[qi].correctIndex;
        return s + (ok ? 1 : 0);
      }, 0),
    [answers, questions]
  );

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.heading}>{title ?? bank.title}</Text>
      <Text style={styles.subhead}>Kérdés {idx + 1} / {questions.length}</Text>

      {!submitted ? (
        <>
          <Text style={styles.title}>{q.question}</Text>
          {q.options.map((opt, i) => {
            const isPicked = answers[idx] === i;
            return (
              <TouchableOpacity key={i} style={[styles.option, isPicked && styles.optionPicked]} onPress={() => pick(i)}>
                <Text style={styles.optText}>{opt}</Text>
              </TouchableOpacity>
            );
          })}

          <View style={styles.row}>
            <TouchableOpacity onPress={prev} style={[styles.navBtn, idx === 0 && styles.navBtnDisabled]} disabled={idx === 0}>
              <Text style={styles.navText}>Előző</Text>
            </TouchableOpacity>

            {idx < questions.length - 1 ? (
              <TouchableOpacity onPress={next} style={styles.navBtn}>
                <Text style={styles.navText}>Következő</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setSubmitted(true)} style={[styles.navBtn, styles.submitBtn]}>
                <Text style={styles.navText}>Leadás</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      ) : (
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Eredmény</Text>
          <Text style={styles.score}>{score} / {questions.length} pont</Text>

          <Text style={styles.resultTitle}>Megoldások</Text>
          {questions.map((qq, i) => {
            const picked = answers[i];
            const correct = qq.correctIndex;
            const ok = picked === correct;
            return (
              <View key={i} style={styles.solutionRow}>
                <Text style={styles.solQ}>{i + 1}. {qq.question}</Text>
                <Text style={[styles.solA, ok ? styles.ok : styles.bad]}>
                  {ok ? "✔︎" : "✗"} Helyes: {qq.options[correct]}
                  {picked != null && picked !== correct ? ` • Te: ${qq.options[picked]}` : ""}
                </Text>
                {qq.hint ? <Text style={styles.hint}>Magyarázat: {qq.hint}</Text> : null}
              </View>
            );
          })}

          <TouchableOpacity style={styles.buttonDark} onPress={restart}>
            <Text style={styles.buttonText}>Újrakezdés</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonDark, { marginTop: 10 }]} onPress={() => nav.goBack()}>
            <Text style={styles.buttonText}>Vissza</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  heading: { fontSize: 22, fontWeight: "800", marginBottom: 6 },
  subhead: { color: "#666", marginBottom: 10 },
  title: { fontSize: 20, fontWeight: "800", marginBottom: 12 },
  option: { paddingVertical: 14, paddingHorizontal: 16, borderRadius: 12, backgroundColor: "#0b1220", marginBottom: 10 },
  optionPicked: { backgroundColor: "#1f2a44" },
  optText: { color: "white", fontSize: 18, fontWeight: "700" },
  row: { flexDirection: "row", gap: 10, marginTop: 8 },
  navBtn: { flex: 1, backgroundColor: "#0b1220", borderRadius: 12, alignItems: "center", paddingVertical: 12 },
  navBtnDisabled: { opacity: 0.4 },
  submitBtn: { backgroundColor: "#1db954" },
  navText: { color: "white", fontWeight: "800", fontSize: 16 },
  resultCard: { marginTop: 16, padding: 12, borderRadius: 12, backgroundColor: "#eef2ff" },
  resultTitle: { fontWeight: "800", marginTop: 8, marginBottom: 4 },
  score: { fontSize: 24, fontWeight: "900", marginVertical: 6 },
  solutionRow: { marginBottom: 10 },
  solQ: { fontWeight: "700" },
  solA: { marginTop: 2 },
  ok: { color: "#155e2b" },
  bad: { color: "#b3261e" },
  hint: { color: "#444", marginTop: 2 },
  buttonDark: { backgroundColor: "#0b1220", borderRadius: 14, paddingVertical: 14, alignItems: "center", marginTop: 12 },
  buttonText: { color: "white", fontSize: 18, fontWeight: "800" },
});
