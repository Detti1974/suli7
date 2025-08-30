import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DefinitionPill({ children }: { children: React.ReactNode }) {
  return (
    <View style={s.wrap}>
      <Text style={s.txt}>{children}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCFCE7',
    borderColor: '#16A34A',
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginTop: 10,
  },
  txt: { color: '#065F46', fontWeight: '800' },
});
