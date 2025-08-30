import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RoleBadge({ text, color }: { text: string; color: string }) {
  return (
    <View style={[s.wrap, { backgroundColor: color + '22', borderColor: color }]}>
      <Text style={[s.txt, { color }]}>{text}</Text>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { alignSelf: 'flex-start', borderWidth: 1.5, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 999, marginTop: 8 },
  txt: { fontWeight: '800' },
});
