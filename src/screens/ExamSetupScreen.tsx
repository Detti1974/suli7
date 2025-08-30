// src/screens/ExamSetupScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "../types/navigation";

// A route paramok típusa a RootStackParamList alapján
type RouteParams = RouteProp<RootStackParamList, "ExamSetup">;

export default function ExamSetupScreen() {
  const route = useRoute<RouteParams>();
  const navigation = useNavigation<any>();

  // A TopicDetailScreen-ből érkeznek:
  // quizId: string  (melyik kérdésbank)
  // title?: string  (fejléc/cím a képernyő tetejére)
  const { quizId, title } = route.params;

  // Választható kérdésszámok — ha szeretnéd, bővítsd
  const CHOICES = [10, 15, 20, 25, 30, 40, 50];

  const [count, setCount] = useState<number>(10);

  const startExam = () => {
    navigation.navigate("Exam", {
      quizId,
      title: title ?? "Témazáró",
      count,
    });
  };

  return (
    <ScrollView contentContainerStyle={s.wrap}>
      <Text style={s.heading}>{title ?? "Témazáró beállítás"}</Text>

      <Text style={s.sub}>Válassz kérdésszámot:</Text>
      <View style={s.row}>
        {CHOICES.map((n) => {
          const active = n === count;
          return (
            <TouchableOpacity
              key={n}
              onPress={() => setCount(n)}
              style={[s.pill, active ? s.pillActive : s.pillIdle]}
            >
              <Text style={[s.pillText, active ? s.pillTextActive : undefined]}>
                {n}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ height: 12 }} />

      <TouchableOpacity style={s.cta} onPress={startExam}>
        <Text style={s.ctaText}>Induljon a témazáró</Text>
      </TouchableOpacity>

      <View style={{ height: 24 }} />

      <Text style={s.tip}>
        Tipp: a témazáró csak a végén mutatja a helyes megoldásokat. Ha
        gyakorlás kell azonnali visszajelzéssel, menj a Kvíz menüpontba.
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  wrap: {
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 12,
  },
  sub: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  } as any,
  pill: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
  },
  pillIdle: {
    backgroundColor: "#fff",
    borderColor: "#D0D5DD",
  },
  pillActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },
  pillText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  pillTextActive: {
    color: "#fff",
  },
  cta: {
    marginTop: 12,
    backgroundColor: "#0ea5e9",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  tip: {
    color: "#475467",
    lineHeight: 20,
  },
});
