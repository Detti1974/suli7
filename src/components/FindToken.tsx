// src/components/FindToken.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export type Role = 'S' | 'P' | 'OBJ' | 'MOD' | 'ADJ'; // Alany, Állítmány, Tárgy, Határozó, Jelző
export type Token = { text: string; role?: Role };

type Props = {
  title?: string;                      // pl. "Kattints az alanyra!"
  sentence: Token[];                   // tokenizált mondat
  targetRole: Role;                    // melyik szerepet keressük
  colors?: Partial<Record<Role, string>>; // opcionális színfelülírás
  onResult?: (correct: boolean) => void;  // callback a válasz után
};

const DEFAULT_COLORS: Record<Role, string> = {
  S: '#2563EB',   // alany – kék
  P: '#10B981',   // állítmány – zöld
  OBJ: '#F59E0B', // tárgy – narancs
  MOD: '#EC4899', // határozó – rózsaszín
  ADJ: '#8B5CF6', // jelző – lila
};

export default function FindToken({
  title = 'Válaszd ki!',
  sentence,
  targetRole,
  colors,
  onResult,
}: Props) {
  const palette = { ...DEFAULT_COLORS, ...(colors || {}) };

  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const correctIdx = sentence.findIndex(t => t.role === targetRole);
  const isCorrect = picked === correctIdx;

  const onPick = (i: number) => {
    if (done) return;
    setPicked(i);
    setDone(true);
    onResult?.(i === correctIdx);
  };

  const reset = () => {
    setPicked(null);
    setDone(false);
  };

  return (
    <View style={st.box}>
      <Text style={st.title}>{title}</Text>

      <View style={st.row}>
        {sentence.map((t, i) => {
          const showCorrect = done && i === correctIdx;
          const showWrong = done && i === picked && i !== correctIdx;

          const bgColor = showCorrect ? '#D1FAE5' : showWrong ? '#FEE2E2' : '#fff';
          const fgColor =
            showCorrect ? '#065F46' :
            showWrong ? '#7F1D1D' :
            t.role ? palette[t.role] : '#111827';

          return (
            <TouchableOpacity
              key={i}
              onPress={() => onPick(i)}
              disabled={done}
              style={[st.tokenBox, { backgroundColor: bgColor, borderColor: '#E5E7EB' }]}
            >
              <Text style={[st.tokenText, { color: fgColor, fontWeight: t.role ? '800' as const : '600' }]}>
                {t.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {done && (
        <View style={{ marginTop: 8 }}>
          {isCorrect ? (
            <Text style={[st.msg, st.msgOk]}>✅ Ügyes! A(z) {roleLabel(targetRole)} volt a helyes.</Text>
          ) : (
            <Text style={[st.msg, st.msgBad]}>
              ❌ Nem ez az. A helyes zölddel volt jelölve.
            </Text>
          )}
          <TouchableOpacity style={[st.btn]} onPress={reset}>
            <Text style={st.btnT}>Újrakezdés</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

function roleLabel(r: Role) {
  switch (r) {
    case 'S': return 'Alany';
    case 'P': return 'Állítmány';
    case 'OBJ': return 'Tárgy';
    case 'MOD': return 'Határozó';
    case 'ADJ': return 'Jelző';
    default: return 'Elem';
  }
}

const st = StyleSheet.create({
  box: { marginTop: 12, padding: 12, backgroundColor: '#F3F4F6', borderRadius: 12 },
  title: { fontWeight: '800', marginBottom: 8 },
  row: { flexDirection: 'row', flexWrap: 'wrap' },
  tokenBox: { paddingHorizontal: 8, paddingVertical: 6, borderRadius: 8, margin: 3, borderWidth: 1 },
  tokenText: { fontSize: 16 },
  msg: { marginTop: 6 },
  msgOk: { color: '#065F46', fontWeight: '800' },
  msgBad: { color: '#7F1D1D', fontWeight: '800' },
  btn: { marginTop: 8, backgroundColor: '#111827', paddingVertical: 10, borderRadius: 10, alignItems: 'center' },
  btnT: { color: '#fff', fontWeight: '700' },
});
