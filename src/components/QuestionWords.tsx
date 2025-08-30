import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const COLORS = ['#2563EB','#10B981','#F59E0B','#EC4899','#06B6D4','#84CC16'];
const WORDS = ['Ki?', 'Mi?', 'Mit?', 'Hol?', 'Mikor?', 'Hogyan?', 'Miért?'];

function WobbleWord({ word, delay = 0, color }: { word: string; delay?: number; color: string }) {
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

  const rotate = a.interpolate({ inputRange: [0, 1], outputRange: ['-2deg', '2deg'] });
  const translateY = a.interpolate({ inputRange: [0, 1], outputRange: [0, -2] });

  return (
    <Animated.View style={{ transform: [{ rotate }, { translateY }] }}>
      <Text style={[s.word, { color }]}>{word}</Text>
    </Animated.View>
  );
}

export default function QuestionWords() {
  return (
    <View style={s.wrap}>
      {WORDS.map((w, i) => (
        <WobbleWord key={i} word={w} delay={i * 120} color={COLORS[i % COLORS.length]} />
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 12 },
  word: { fontSize: 16, fontWeight: '800', marginRight: 10, marginBottom: 6 },
});
