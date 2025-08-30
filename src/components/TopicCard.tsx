import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NyelvtanTopic } from '../types/nyelvtan';

export default function TopicCard({ topic, onPress }: { topic: NyelvtanTopic; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{topic.title}</Text>
      {topic.description ? <Text style={styles.desc}>{topic.description}</Text> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#F3F4F6',
    marginBottom: 12,
  },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  desc: { color: '#4B5563' },
});
