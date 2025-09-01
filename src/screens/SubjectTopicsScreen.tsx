import React, { useLayoutEffect, useMemo } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation";

// NYELVTAN témák – a meglévő exportodnak megfelelően importálj
import { NYELVTAN7_TOPICS } from "../data/nyelvtan7";

// Ha szeretnéd, itt veheted fel később a történelem generikus listát is:
// import { tortenelem7Topics } from "../data/lessons/tortenelem/tortenelem7";

type R = RouteProp<RootStackParamList, "Subject">;
type Nav = NativeStackNavigationProp<RootStackParamList, "Subject">;

const SUBJECTS: Record<string, any[]> = {
  nyelvtan: NYELVTAN7_TOPICS,
  // tortenelem: tortenelem7Topics, // ha később mégis a generikus képernyőt használnád törihez
};

export default function SubjectTopicsScreen() {
  const route = useRoute<R>();
  const navigation = useNavigation<Nav>();
  const { subjectId, title } = route.params ?? { subjectId: "nyelvtan" as const };

  useLayoutEffect(() => {
    navigation.setOptions({ title: title ?? "Témakörök" });
  }, [navigation, title]);

  const topics = useMemo(() => SUBJECTS[subjectId] ?? [], [subjectId]);

  if (!topics || topics.length === 0) {
    return (
      <View style={[styles.center, { padding: 16 }]}>
        <Text>Nincs még lista ehhez a tantárgyhoz.</Text>
      </View>
    );
  }

  const goLesson = (t: any) => {
    if (!t?.id) return;
    // NYELVTAN lesson route – ha nálad más a route neve, írd át
    navigation.navigate("Lesson" as any, { topicId: String(t.id), title: t.title });
  };

  const goQuiz = (t: any) => {
    if (!t?.quizId) return;
    navigation.navigate("Quiz", { quizId: t.quizId, title: t.title ?? "Kvíz", count: 10 });
  };

  const goExam = (t: any) => {
    if (!t?.examId) return;
    navigation.navigate("Exam", { examId: t.examId, title: t.title ?? "Témazáró", count: 10 });
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {topics.map((t, idx) => {
        const colors = ["#2563eb", "#16a34a", "#dc2626", "#9333ea"];
        const color = colors[idx % colors.length];
        return (
          <View key={t.id} style={styles.card}>
            <Text style={[styles.title, { color }]}>{t.title}</Text>
            {!!t.description && <Text style={styles.desc}>{t.description}</Text>}
            <View style={styles.row}>
              <Pressable style={[styles.btn, { backgroundColor: color }]} onPress={() => goLesson(t)}>
                <Text style={styles.btnText}>Tananyag</Text>
              </Pressable>
              <Pressable style={[styles.btn, { backgroundColor: color }]} onPress={() => goQuiz(t)}>
                <Text style={styles.btnText}>Kvíz</Text>
              </Pressable>
              <Pressable style={[styles.btn, { backgroundColor: color }]} onPress={() => goExam(t)}>
                <Text style={styles.btnText}>Témazáró</Text>
              </Pressable>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  card: { backgroundColor: "#fff", borderRadius: 16, padding: 16, marginBottom: 12, elevation: 2 },
  title: { fontSize: 20, fontWeight: "800", marginBottom: 6 },
  desc: { fontSize: 14, color: "#444", marginBottom: 10 },
  row: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 12 },
  btnText: { color: "white", fontWeight: "700" },
});
