import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// képernyők
import SubjectsScreen from "../screens/SubjectScreen";                // MENÜ
import SubjectTopicsScreen from "../screens/SubjectTopicsScreen";     // generikus (Nyelvtan)
import QuizScreen from "../screens/QuizScreen";
import ExamScreen from "../screens/ExamScreen";

// történelem
import TortenelemTopicsScreen from "../screens/tortenelem/TortenelemTopicsScreen";
import TortenelemLessonScreen from "../screens/tortenelem/TortenelemLessonScreen";

export type RootStackParamList = {
  Subjects: undefined;                                      // MENÜ
  Subject: { subjectId: "nyelvtan" | "tortenelem"; title?: string }; // generikus témalista

  // Történelem-specifikus
  TortenelemTopics: undefined;
  TortenelemLesson: { topicId: string; title?: string };

  // Közös
  Quiz: { quizId: string; title?: string; count?: number };
  Exam: { examId: string; title?: string; count?: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Subjects" component={SubjectsScreen} options={{ title: "Tantárgyak" }} />
        <Stack.Screen name="Subject" component={SubjectTopicsScreen} options={{ title: "Témakörök" }} />

        <Stack.Screen name="TortenelemTopics" component={TortenelemTopicsScreen} options={{ title: "Történelem" }} />
        <Stack.Screen name="TortenelemLesson" component={TortenelemLessonScreen} options={{ title: "Tananyag" }} />

        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: "Kvíz" }} />
        <Stack.Screen name="Exam" component={ExamScreen} options={{ title: "Témazáró" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
