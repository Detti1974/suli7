import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NYELVTAN7_TOPICS } from '../data/nyelvtan7';

type RouteParams = { topicId?: string; title?: string };

export default function TopicDetailScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { topicId, title } = (route?.params as RouteParams) || {};

  const topic = NYELVTAN7_TOPICS.find(t => t.id === topicId);
  const screenTitle = title ?? topic?.title ?? 'Témakör';
  const quizId = topic?.quizId ?? (topic?.id ? `quiz-${topic.id}` : undefined);

  const ensureTopic = () => {
    if (!topic) {
      Alert.alert('Hiba', 'Hiányzó vagy ismeretlen témakör.');
      return false;
    }
    return true;
  };

  const goLesson = () => {
    if (!ensureTopic()) return;
    navigation.navigate('Lesson', { topicId: topic!.id, title: screenTitle });
  };

  const goQuiz = () => {
    if (!ensureTopic()) return;
    if (!quizId) {
      Alert.alert('Hiba', 'Ehhez a témához nincs kvíz azonosító (quizId).');
      return;
    }
    navigation.navigate('Quiz', { quizId, title: screenTitle, mode: 'quiz', numQuestions: 10 });
  };

  const goExam = () => {
    if (!ensureTopic()) return;
    if (!quizId) {
      Alert.alert('Hiba', 'Ehhez a témához nincs kvíz azonosító (quizId).');
      return;
    }
    navigation.navigate('Exam', { quizId, title: screenTitle, count: 20 });
  };

  if (!topic) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text>Ismeretlen témakör. Lépj vissza és válassz másikat.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.heading}>{screenTitle}</Text>
      {topic.description ? <Text style={styles.desc}>{topic.description}</Text> : null}

      <TouchableOpacity style={[styles.card, styles.primary]} onPress={goLesson}>
        <Text style={styles.cardTitle}>Tananyag</Text>
        <Text style={styles.cardSub}>Áttekintés, példák, tippek</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={goQuiz}>
        <Text style={styles.cardTitle}>Kvíz</Text>
        <Text style={styles.cardSub}>Véletlen 10 kérdés a témából</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={goExam}>
        <Text style={styles.cardTitle}>Témazáró</Text>
        <Text style={styles.cardSub}>Összegző teszt (20 kérdés)</Text>
      </TouchableOpacity>

      <View style={styles.debug}>
        <Text style={styles.debugText}>topicId: {topic.id}</Text>
        <Text style={styles.debugText}>quizId: {quizId ?? '—'}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  heading: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
  desc: { fontSize: 15, color: '#334155', marginBottom: 16 },
  card: { backgroundColor: '#0f172a', borderRadius: 12, padding: 16, marginBottom: 12 },
  primary: { backgroundColor: '#16a34a' },
  cardTitle: { color: 'white', fontSize: 18, fontWeight: '700' },
  cardSub: { color: '#cbd5e1', marginTop: 4 },
  debug: { marginTop: 12, padding: 8, backgroundColor: '#eef2ff', borderRadius: 8 },
  debugText: { color: '#334155' },
});
