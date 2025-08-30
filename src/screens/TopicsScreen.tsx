import React, { useLayoutEffect, useMemo } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation";
import { NYELVTAN7_TOPICS } from "../data/nyelvtan7";

type R = RouteProp<RootStackParamList, "Subject">;
type Nav = NativeStackNavigationProp<RootStackParamList, "Subject">;

const SUBJECTS: Record<string, any[]> = {
  nyelvtan: NYELVTAN7_TOPICS,
};

export default function TopicsScreen() {
  const route = useRoute<R>();
  const navigation = useNavigation<Nav>();
  const { subjectId, title } = route.params ?? {};

  useLayoutEffect(() => {
    navigation.setOptions({ title: title ?? "Tantárgy" });
  }, [navigation, title]);

  const topics = useMemo(() => SUBJECTS[subjectId ?? ""] ?? [], [subjectId]);

  if (!topics || topics.length === 0) {
    return (
      <View style={[styles.center, { padding: 16 }]}>
        <Text>Nincs még lista ehhez a tantárgyhoz.</Text>
      </View>
    );
  }

  const goLesson = (t: any) => {
    console.log("[Topics] goLesson ->", t);
    if (!t?.id) {
      console.warn("Hiányzik a topicId (t.id) – nem navigálok Lesson-re");
      return;
    }
    navigation.navigate("Lesson", { topicId: String(t.id), title: t.title });
  };

  const goQuiz = (t: any) => {
    console.log("[Topics] goQuiz ->", t);
    const quizId = t?.quizId ?? `quiz-${t?.id ?? "N/A"}`;
    navigation.navigate("Quiz", {
      quizId: String(quizId),
      title: t?.title ?? "Kvíz",
      mode: "quiz",
      numQuestions: 10,
    });
  };

  const goExam = (t: any) => {
    console.log("[Topics] goExam ->", t);
    const quizId = t?.quizId ?? `quiz-${t?.id ?? "N/A"}`;
    navigation.navigate("Exam", {
      quizId: String(quizId),
      title: t?.title ?? "Témazáró",
      count: 20,
    });
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {topics.map((t) => (
        <View key={t.id} style={styles.card}>
          <Text style={styles.title}>{t.title}</Text>
          {!!t.description && <Text style={styles.desc}>{t.description}</Text>}
          <View style={styles.row}>
            <Pressable style={styles.btn} onPress={() => goLesson(t)}>
              <Text style={styles.btnText}>Tananyag</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => goQuiz(t)}>
              <Text style={styles.btnText}>Kvíz</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={() => goExam(t)}>
              <Text style={styles.btnText}>Témazáró</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  title: { fontSize: 20, fontWeight: "800", marginBottom: 6 },
  desc: { fontSize: 14, color: "#666", marginBottom: 10 },
  row: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#111827",
  },
  btnText: { color: "white", fontWeight: "700" },
});
