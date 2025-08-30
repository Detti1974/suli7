import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Token = { text: string; isSubject?: boolean };

const sentence: Token[] = [
  { text: "A" },
  { text: "kutya", isSubject: true },
  { text: "ugat." },
];

export default function FindSubject() {
  const [done, setDone] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);

  const sIdx = sentence.findIndex((t) => t.isSubject);

  function pick(i: number) {
    setPicked(i);
    setDone(true);
  }

  return (
    <View style={st.box}>
      <Text style={st.title}>Keresd meg a mondat alanyát!</Text>

      <View style={st.row}>
        {sentence.map((t, i) => {
          const isCorrect = done && i === sIdx;
          const isWrong = done && i === picked && i !== sIdx;

          return (
            <TouchableOpacity
              key={i}
              onPress={() => pick(i)}
              disabled={done}
              style={[
                st.tokenBox,
                isCorrect ? st.correctBox : null,
                isWrong ? st.wrongBox : null,
              ]}
            >
              <Text
                style={[
                  st.tokenText,
                  isCorrect ? st.correctText : null,
                  isWrong ? st.wrongText : null,
                ]}
              >
                {t.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {done && picked === sIdx && (
        <Text style={[st.msg, st.msgOk]}>✅ Helyes!</Text>
      )}
      {done && picked !== sIdx && (
        <Text style={[st.msg, st.msgBad]}>
          ❌ Nem jó! A helyes válasz: „{sentence[sIdx].text}”
        </Text>
      )}
    </View>
  );
}

const st = StyleSheet.create({
  box: { marginTop: 12, padding: 12, backgroundColor: "#F3F4F6", borderRadius: 12 },
  title: { fontWeight: "800", marginBottom: 8 },
  row: { flexDirection: "row", flexWrap: "wrap", gap: 6 },

  tokenBox: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#fff",
    margin: 2,
  },
  tokenText: { fontSize: 16, fontWeight: "600" },

  correctBox: { backgroundColor: "#D1FAE5" },
  wrongBox: { backgroundColor: "#FEE2E2" },
  correctText: { color: "#065F46", fontWeight: "800" },
  wrongText: { color: "#7F1D1D", fontWeight: "800" },

  msg: { marginTop: 8 },
  msgOk: { color: "#065F46", fontWeight: "800" },
  msgBad: { color: "#7F1D1D", fontWeight: "800" },
});
