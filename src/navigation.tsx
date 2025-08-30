import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import SubjectScreen from "./screens/SubjectScreen";
import LessonScreen from "./screens/LessonScreen";
import QuizScreen from "./screens/QuizScreen";
import ExamScreen from "./screens/ExamScreen";

export type RootStackParamList = {
  Home: undefined;
  Subject: { subjectId: string; title?: string };
  Lesson: { topicId: string; title?: string };
  Quiz: { quizId: string; title?: string; mode?: "quiz"; count?: number };
  Exam: { quizId: string; title?: string; mode?: "exam"; count?: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: "left" }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Suli" }} />
        <Stack.Screen name="Subject" component={SubjectScreen} options={{ title: "Tantárgy" }} />
        <Stack.Screen name="Lesson" component={LessonScreen} options={{ title: "Tananyag" }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: "Kvíz" }} />
        <Stack.Screen name="Exam" component={ExamScreen} options={{ title: "Témazáró" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
