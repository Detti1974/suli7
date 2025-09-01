import React, { useMemo, useLayoutEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// toleráns import – megy tortenelem7 / tortenelem7Topics / tortenelemTopics exportokkal is
import * as T7 from "../../data/lessons/tortenelem/tortenelem7";

export default function TortenelemLessonScreen() {
  const route = useRoute<any>();
  const nav = useNavigation<any>();
  const { topicId, title } = route.params ?? {};

  const topics: any[] =
    (T7 as any).tortenelem7?.topics ??
    (T7 as any).tortenelem7Topics ??
    (T7 as any).tortenelemTopics ??
    [];

  const topic = useMemo(
    () => topics.find((t) => String(t?.id) === String(topicId)),
    [topics, topicId]
  );

  useLayoutEffect(() => {
    nav.setOptions({ title: title ?? topic?.title ?? "Tananyag" });
  }, [nav, title, topic?.title]);

  if (!topic) {
    return (
      <View style={styles.center}>
        <Text>Nem található ez a témakör.</Text>
      </View>
    );
  }

  const lessons: Array<{
    title?: string;
    content?: string;
    keyDates?: Array<{ year: number | string; event: string }>;
  }> = (topic.lessons ?? []) as any[];

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
      <Text style={styles.h1}>{topic.title}</Text>
      {!!topic.description && <Text style={styles.desc}>{topic.description}</Text>}

      {lessons.length === 0 ? (
        <View style={styles.card}>
          <Text>Ehhez a témához még nincs feltöltött tananyag.</Text>
        </View>
      ) : (
        lessons.map((l, i) => (
          <View key={i} style={styles.card}>
            {!!l.title && <Text style={styles.h2}>{l.title}</Text>}
            {!!l.content && <Text style={styles.p}>{l.content}</Text>}

            {!!l.keyDates?.length && (
              <View style={styles.datesBox}>
                <Text style={styles.datesTitle}>Fontos évszámok</Text>
                {l.keyDates.map((d, j) => (
                  <View key={j} style={styles.dateRow}>
                    <Text style={styles.dateYear}>{String(d.year)}</Text>
                    <Text style={styles.dateEvent}>{d.event}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))
      )}

      {!!topic.summary && (
        <View style={[styles.card, styles.summaryCard]}>
          <Text style={styles.summaryTitle}>Összefoglaló</Text>
          <Text style={styles.p}>{topic.summary}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  h1: { fontSize: 22, fontWeight: "800" },
  desc: { marginTop: 4, color: "#555" },

  card: { backgroundColor: "#fff", borderRadius: 16, padding: 14, elevation: 2 },
  h2: { fontSize: 18, fontWeight: "700", marginBottom: 6, color: "#0f766e" },
  p: { fontSize: 16, lineHeight: 22, color: "#222" },

  datesBox: { marginTop: 10, borderRadius: 12, padding: 10, backgroundColor: "#eef2ff", borderWidth: 1, borderColor: "#c7d2fe" },
  datesTitle: { fontWeight: "800", marginBottom: 6, color: "#3730a3" },
  dateRow: { flexDirection: "row", marginBottom: 4, alignItems: "baseline" },
  dateYear: { fontWeight: "900", marginRight: 8, color: "#1e3a8a", minWidth: 58 },
  dateEvent: { flex: 1, color: "#111827" },

  summaryCard: { backgroundColor: "#f0fdf4", borderColor: "#bbf7d0", borderWidth: 1 },
  summaryTitle: { fontSize: 18, fontWeight: "800", marginBottom: 6, color: "#166534" },
});
