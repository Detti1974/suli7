import React, { useMemo, useState, useLayoutEffect, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation";
import quizzes from "../data/quizzes";
import { pickRandom } from "../utils/random";

type TF = { type: "tf"; text: string; answer: boolean; hint?: string };
type MC = { type: "mc"; text: string; options: string[]; correctIndex: number; hint?: string };
type RawGrammar = TF | MC;

// történelmi (töri) kvíz elemek tipikus sémája
type RawHistory = {
  question: string;
  options: string[];
  correct: number; // index
  hint?: string;
};

// a képernyő által használt egységes forma
type Normalized = { question: string; options: string[]; correctIndex: number; hint?: string };

type RouteParams = { quizId: string; title?: string; count?: number };
type R = RouteProp<RootStackParamList, "Quiz">;
type Nav = NativeStackNavigationProp<RootStackParamList, "Quiz">;

function normalizeItem(q: any): Normalized {
  // 1) Nyelvtan: "mc" / "tf"
  const asGrammar = q as RawGrammar;
  if (asGrammar?.type === "mc") {
    return {
      question: asGrammar.text,
      options: asGrammar.options,
      correctIndex: asGrammar.correctIndex,
      hint: asGrammar.hint,
    };
  }
  if (asGrammar?.type === "tf") {
    return {
      question: asGrammar.text,
      options: ["Igaz", "Hamis"],
      correctIndex: asGrammar.answer ? 0 : 1,
      hint: asGrammar.hint,
    };
  }

  // 2) Történelem: { question, options, correct }
  const asHistory = q as RawHistory;
  if (typeof asHistory?.question === "string" && Array.isArray(asHistory?.options) && typeof asHistory?.correct === "number") {
    return {
      question: asHistory.question,
      options: asHistory.options,
      correctIndex: asHistory.correct,
      hint: asHistory.hint,
    };
  }

  // 3) fallback – próbáljuk kitalálni az index kulcsot
  const question = q?.question ?? q?.text ?? "";
  const options = q?.options ?? [];
  const correctIndex =
    typeof q?.correctIndex === "number"
      ? q.correctIndex
      : typeof q?.correct === "number"
      ? q.correct
      : 0;

  return { question, options, correctIndex, hint: q?.hint };
}

export default function QuizScreen() {
  const route = useRoute<R>();
  const nav = useNavigation<Nav>();
  const { quizId, title, count = 10 } = route.params as RouteParams;

  // a quiz bank lehet: { title, questions: [...] } VAGY { title, items: [...] }
  const bank: any = (quizzes as any)[quizId];
  const pool: Normalized[] = useMemo(() => {
    const src = Array.isArray(bank?.questions) ? bank.questions : Array.isArray(bank?.items) ? bank.items : [];
    return src.map(normalizeItem).filter((x: Normalized) => x?.question && x?.options?.length >= 2);
  }, [bank]);

  const [questions, setQuestions] = useState<Normalized[]>(() =>
    pickRandom(pool, Math.min(count, pool.length))
  );
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    nav.setOptions({ title: title ?? bank?.title ?? "Kvíz" });
  }, [nav, title, bank?.title]);

  useEffect(() => {
    if (pool.length > 0) {
      setQuestions(pickRandom(pool, Math.min(count, pool.length)));
      setIdx(0);
      setPicked(null);
      setScore(0);
      setDone(false);
    }
  }, [quizId, pool, count]);

  const restart = useCallback(() => {
    setQuestions(pickRandom(pool, Math.min(count, pool.length)));
    setIdx(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }, [pool, count]);

  if (!bank || pool.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Nincs kérdés ehhez a témához (ellenőrizd a quizId-t).</Text>
      </View>
    );
  }

  const q = questions[idx];

  function selectOption(i: number) {
    if (done || picked !== null) return;
    setPicked(i);
    if (i === q.correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
      setPicked(null);
    } else {
      setDone(true);
    }
  }

  if (done) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Eredmény</Text>
        <Text style={styles.score}>
          {score} / {questions.length} pont
        </Text>

        <TouchableOpacity style={styles.buttonDark} onPress={restart}>
          <Text style={styles.buttonText}>Újrakezdés</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonDark, { marginTop: 10 }]} onPress={() => nav.goBack()}>
          <Text style={styles.buttonText}>Vissza</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.heading}>
        Kérdés {idx + 1} / {questions.length} • Pont: {score}
      </Text>
      <Text style={styles.title}>{q.question}</Text>

      {q.options.map((opt, i) => {
        const isPicked = picked === i;
        const isCorrect = i === q.correctIndex;
        const state =
          picked === null
            ? "idle"
            : isPicked && isCorrect
            ? "pickedCorrect"
            : isPicked && !isCorrect
            ? "pickedWrong"
            : "idle";

        return (
          <TouchableOpacity
            key={i}
            onPress={() => selectOption(i)}
            disabled={picked !== null}
            style={[
              styles.option,
              state === "pickedCorrect" && styles.optCorrect,
              state === "pickedWrong" && styles.optWrong,
            ]}
          >
            <Text style={styles.optText}>{opt}</Text>
          </TouchableOpacity>
        );
      })}

      {picked !== null && (
        <>
          <Text style={styles.correctText}>Helyes válasz: {q.options[q.correctIndex]}</Text>
          {q.hint ? <Text style={styles.hint}>Magyarázat: {q.hint}</Text> : null}
          <TouchableOpacity style={styles.buttonDark} onPress={next}>
            <Text style={styles.buttonText}>Tovább</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  heading: { fontSize: 16, marginBottom: 8, color: "#444" },
  title: { fontSize: 22, fontWeight: "800", marginBottom: 12 },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#0b1220",
    marginBottom: 10,
  },
  optText: { color: "white", fontSize: 18, fontWeight: "700" },
  optCorrect: { backgroundColor: "#1db954" },
  optWrong: { backgroundColor: "#b3261e" },
  correctText: { marginTop: 10, marginBottom: 6, color: "#155e2b", fontWeight: "700" },
  hint: { marginBottom: 10, color: "#555" },
  buttonDark: {
    backgroundColor: "#0b1220",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "800" },
  score: { fontSize: 28, fontWeight: "900", marginVertical: 10 },
});
