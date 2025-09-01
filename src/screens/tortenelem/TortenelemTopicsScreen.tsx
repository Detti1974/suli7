import React from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { tortenelem7Topics } from "../../data/lessons/tortenelem/tortenelem7";

export default function TortenelemTopicsScreen() {
  const navigation = useNavigation<any>();

  const goLesson = (t: any) => {
    if (!t?.id) return;
    navigation.navigate("TortenelemLesson", { topicId: String(t.id), title: t.title });
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
      {tortenelem7Topics.map((t, idx) => {
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
  card: { backgroundColor: "#fff", borderRadius: 16, padding: 16, marginBottom: 12, elevation: 2 },
  title: { fontSize: 20, fontWeight: "800", marginBottom: 6 },
  desc: { fontSize: 14, color: "#444", marginBottom: 10 },
  row: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 12 },
  btnText: { color: "white", fontWeight: "700" },
});
