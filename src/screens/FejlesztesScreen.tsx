import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FejlesztesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Fejlesztés – Szövegértés & Helyesírás</Text>
      <Text style={styles.p}>
        Ide kerülnek a célzott gyakorlók Jancsikának (külön modulok: Szövegértés, Helyesírás). Első körben
        a Nyelvtan témaköreit töltjük fel, majd ide jönnek a játékos feladatok.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  h1: { fontSize: 20, fontWeight: '800', marginBottom: 8 },
  p: { color: '#4B5563' },
});
