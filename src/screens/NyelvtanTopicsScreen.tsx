import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NYELVTAN7_TOPICS } from '../data/nyelvtan7';

export default function NyelvtanTopicsScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nyelvtan – 7. osztály</Text>

      <FlatList
        data={NYELVTAN7_TOPICS}
        keyExtractor={(it) => it.id}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('TopicDetail', {
                topicId: item.id,
                title: item.title,
              })
            }
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            {item.description ? (
              <Text style={styles.cardDesc}>{item.description}</Text>
            ) : null}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', padding: 16 },
  card: {
    backgroundColor: '#0f172a',
    borderRadius: 12,
    padding: 16,
  },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: '700', marginBottom: 6 },
  cardDesc: { color: '#cbd5e1', fontSize: 14 },
});
