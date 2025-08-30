import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

export default function FlashHighlight({ children }: { children: React.ReactNode }) {
  const a = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(a, { toValue: 1, duration: 400, useNativeDriver: false }),
      Animated.timing(a, { toValue: 0, duration: 600, useNativeDriver: false }),
    ]).start();
  }, []);

  const bg = a.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FEF9C3', '#FDE68A'], // halvány sárga → sárgább
  });

  return (
    <Animated.View style={[s.wrap, { backgroundColor: bg }]}>
      <Text style={s.txt}>{children}</Text>
    </Animated.View>
  );
}

const s = StyleSheet.create({
  wrap: { borderRadius: 6, paddingHorizontal: 6, paddingVertical: 2, alignSelf: 'flex-start' },
  txt: { color: '#111827', fontWeight: '700' },
});
