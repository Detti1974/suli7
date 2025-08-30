import React from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';

export type Token = {
  text: string;
  role?: 'S' | 'P' | 'MOD'; // Alany, Állítmány, Bővítmény/Határozó
};

type Props = { sentence: Token[] };

export default function SentenceTokens({ sentence }: Props) {
  return (
    <View style={styles.row}>
      {sentence.map((tok, i) => (
        <Text key={i} style={[styles.word, roleStyle(tok.role)]}>
          {tok.text}
        </Text>
      ))}
    </View>
  );
}

function roleStyle(role?: Token['role']): TextStyle | undefined {
  switch (role) {
    case 'S':  // alany
      return { color: '#2563EB', fontWeight: '700' };
    case 'P':  // állítmány
      return { color: '#16A34A', fontWeight: '700' };
    case 'MOD': // bővítmény/határozó
      return { color: '#DB2777', fontWeight: '700' };
    default:
      return undefined; // NINCS plusz stílus
  }
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  word: { fontSize: 16, marginRight: 4 },
});
