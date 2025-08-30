import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

type Variant = 'info' | 'example' | 'tip';
export default function Callout({
  variant = 'info',
  title,
  children,
}: {
  variant?: Variant;
  title: string;
  children?: React.ReactNode;
}) {
  const a = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(a, { toValue: 1, duration: 300, useNativeDriver: true }).start();
  }, []);
  const stylesBy: Record<Variant, { bg: string; fg: string; mark: string }> = {
    info:    { bg: '#EFF6FF', fg: '#1E3A8A', mark: 'ℹ️' },
    example: { bg: '#ECFDF5', fg: '#065F46', mark: '📚' },
    tip:     { bg: '#FEF3C7', fg: '#92400E', mark: '💡' },
  };
  const s = stylesBy[variant];
  return (
    <Animated.View style={[st.box, { backgroundColor: s.bg, opacity: a, transform: [{ translateY: a.interpolate({ inputRange: [0,1], outputRange: [6,0] }) }] }]}>
      <Text style={[st.title, { color: s.fg }]}>{s.mark} {title}</Text>
      {children ? <Text style={[st.text, { color: s.fg }]}>{children}</Text> : null}
    </Animated.View>
  );
}
const st = StyleSheet.create({
  box: { borderRadius: 14, padding: 12, marginTop: 10 },
  title: { fontWeight: '800' },
  text: { marginTop: 6, lineHeight: 20 },
});
