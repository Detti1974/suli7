import React from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation";

// ne szűkítsd egy képernyőre → bármely route-ra lehessen menni
type Nav = NativeStackNavigationProp<RootStackParamList>;

export default function SubjectScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Válassz tantárgyat</Text>

      <Pressable
        style={[styles.btn, { backgroundColor: "#2563eb" }]}
        onPress={() =>
          navigation.navigate("Subject", { subjectId: "nyelvtan", title: "Nyelvtan" })
        }
      >
        <Text style={styles.btnText}>Nyelvtan</Text>
      </Pressable>

      <Pressable
        style={[styles.btn, { backgroundColor: "#16a34a" }]}
        onPress={() => navigation.navigate("TortenelemTopics")}
      >
        <Text style={styles.btnText}>Történelem</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 16 },
  heading: { fontSize: 22, fontWeight: "800", marginBottom: 16, textAlign: "center" },
  btn: { paddingVertical: 16, borderRadius: 12, alignItems: "center" },
  btnText: { color: "white", fontSize: 18, fontWeight: "700" },
});
