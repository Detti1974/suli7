import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

type Props = { words: string[] };

function Wobble({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const a = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(a, { toValue: 1, duration: 900, delay, useNativeDriver: true }),
        Animated.timing(a, { toValue: 0, duration: 900, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [delay, a]);
  const rotate = a.interpolate({ inputRange: [0,1], outputRange: ['-2deg','2deg'] });
  const translateY = a.interpolate({ inputRange: [0,1], outputRange: [0,-2] });
  return <Animated.View style={{ transform: [{ rotate }, { translateY }] }}>{children}</Animated.View>;
}

const COLORS = ['#2563EB','#10B981','#F59E0B','#EC4899','#06B6D4','#84CC16'];

export default function QuestionTags({ words }: Props) {
  return (
    <View style={s.wrap}>
      {words.map((w, i) => (
        <Wobble key={i} delay={i*120}>
          <Text style={[s.tag, { borderColor: COLORS[i % COLORS.length], color: COLORS[i % COLORS.length] }]}>
            {w}
          </Text>
        </Wobble>
      ))}
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  tag: {
    paddingVertical: 4, paddingHorizontal: 10,
    borderRadius: 999, borderWidth: 2, fontWeight: '800',
  },
});
