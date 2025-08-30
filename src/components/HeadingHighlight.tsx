import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function HeadingHighlight({ children }: { children: React.ReactNode }) {
  const w = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(w, { toValue: 1, duration: 450, useNativeDriver: false }).start();
  }, []);
  return (
    <View style={{ marginTop: 14 }}>
      <Text style={s.h}>{children}</Text>
      <View style={s.under}>
        <Animated.View
          style={[s.bar, { width: w.interpolate({ inputRange: [0,1], outputRange: ['0%','100%'] }) }]}
        />
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  h: { fontSize: 18, fontWeight: '800' },
  under: { height: 4, backgroundColor: '#E5E7EB', borderRadius: 999, overflow: 'hidden', marginTop: 6 },
  bar: { height: 4, backgroundColor: '#10B981' },
});
