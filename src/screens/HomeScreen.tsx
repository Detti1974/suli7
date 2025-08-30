import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SUBJECTS from '../data/subjects';

export default function HomeScreen() {
  const nav = useNavigation<any>();
  const subjects = Object.values(SUBJECTS);

  return (
    <ScrollView contentContainerStyle={styles.grid}>
      {subjects.map((subj) => (
        <Pressable
          key={subj.id}
          onPress={() => nav.navigate('Subject', { subjectId: subj.id, title: subj.title })}
          style={styles.card}
        >
          <Text style={styles.title}>{subj.title}</Text>
          <Text style={styles.subtitle}>{subj.topics?.length ?? 0} témakör</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 3,
  },
  title: { fontSize: 20, fontWeight: '800', marginBottom: 6 },
  subtitle: { opacity: 0.6 },
});
