// src/components/AnimateWord.tsx
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = { text: string; rainbow?: boolean; size?: number };

const COLORS = ["#e11d48", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899", "#f43f5e"];

export default function AnimateWord({ text, rainbow = true, size = 18 }: Props) {
  const [tick, setTick] = useState(0);

  // Egyszerű “lélegző” színváltás animációs lib nélkül
  useEffect(() => {
    if (!rainbow) return;
    const id = setInterval(() => setTick((t) => (t + 1) % COLORS.length), 1000);
    return () => clearInterval(id);
  }, [rainbow]);

  const letters = useMemo(() => [...(text ?? "")], [text]);

  return (
    <View style={styles.row}>
      {letters.map((ch, i) => {
        const color = rainbow ? COLORS[(i + tick) % COLORS.length] : undefined;
        return (
          <Text
            key={i}
            style={[
              styles.letter,
              { fontSize: size, lineHeight: size * 1.25 },
              color ? { color, fontWeight: "700" } : null,
            ]}
          >
            {ch === " " ? "\u00A0" : ch}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", alignItems: "baseline" },
  letter: { textDecorationLine: "none" },
});
