import React, { useLayoutEffect, useMemo } from "react";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation";
import lessons from "../data/lessons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimateWord from "../components/AnimateWord";

type R = RouteProp<RootStackParamList, "Lesson">;
type Nav = NativeStackNavigationProp<RootStackParamList, "Lesson">;

/** Sima szöveg + a zárójeles részek színesítése AnimateWord-del */
function RichText({ text, baseStyle, size }: { text: string; baseStyle: any; size: number }) {
  if (!text) return null;

  const parts: Array<{ t: "plain" | "paren"; v: string }> = [];
  const re = /\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ t: "plain", v: text.slice(last, m.index) });
    parts.push({ t: "paren", v: `(${m[1]})` });
    last = re.lastIndex;
  }
  if (last < text.length) parts.push({ t: "plain", v: text.slice(last) });

  if (parts.length === 0) return <Text style={baseStyle}>{text}</Text>;

  return (
    <View style={styles.inlineRow}>
      {parts.map((p, i) =>
        p.t === "plain" ? (
          <Text key={`p-${i}`} style={baseStyle}>
            {p.v}
          </Text>
        ) : (
          <AnimateWord key={`a-${i}`} text={p.v} size={size} />
        )
      )}
    </View>
  );
}

export default function LessonScreen() {
  const route = useRoute<R>();
  const nav = useNavigation<Nav>();
  const insets = useSafeAreaInsets();
  const { topicId, title } = route.params;

  useLayoutEffect(() => {
    nav.setOptions({ title: title ?? "Tananyag" });
  }, [nav, title]);

  const lesson = useMemo(() => (lessons as Record<string, any>)[topicId], [topicId]);

  if (!lesson) {
    return (
      <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 24 + insets.bottom }]}>
        <Text style={styles.h1}>{title}</Text>
        <Text style={styles.p}>Ehhez a témához még nincs tananyag feltöltve.</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 24 + insets.bottom }]}>
      {/* Címsor */}
      <RichText text={lesson.title ?? title ?? ""} baseStyle={styles.h1} size={22} />

      {/* Blokkok */}
      {(lesson.blocks ?? []).map((block: any, i: number) => (
        <View key={i} style={styles.block}>
          {block.heading ? (
            <RichText text={block.heading} baseStyle={styles.heading} size={18} />
          ) : null}
          {block.text ? <RichText text={block.text} baseStyle={styles.p} size={16} /> : null}
          {block.example ? (
            <RichText text={`Példa: ${block.example}`} baseStyle={styles.example} size={15} />
          ) : null}
          {block.tip ? <RichText text={`💡 ${block.tip}`} baseStyle={styles.tip} size={15} /> : null}
          {block.image ? (
            <View style={styles.imageWrap}>
              <Image source={block.image} style={styles.image} resizeMode="contain" />
              {block.caption ? <Text style={styles.caption}>{block.caption}</Text> : null}
            </View>
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 16 },
  inlineRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "baseline" },
  h1: { fontSize: 22, fontWeight: "700", marginBottom: 4 },
  block: { marginBottom: 8 },
  heading: { fontSize: 18, fontWeight: "600", marginBottom: 6 },
  p: { fontSize: 16, lineHeight: 22 },
  example: { fontSize: 15, fontStyle: "italic", marginTop: 6, color: "#333" },
  tip: { fontSize: 15, marginTop: 6, color: "#2e7d32" },
  imageWrap: { marginTop: 10, alignItems: "center" },
  image: { width: "100%", height: 200, borderRadius: 12 },
  caption: { fontSize: 12, color: "#666", marginTop: 4, textAlign: "center" },
});
