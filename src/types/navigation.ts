// src/types/navigation.ts

export type QuizSetup = {
  quizId: string;
  title?: string;
  mode?: "quiz" | "exam";
  numQuestions?: number;
};

export type RootStackParamList = {
  Home: undefined;
  Subject: { subjectId: string; title?: string };
  TopicDetail: { topicId: string; title?: string };
  Lesson: { topicId: string; title?: string };

  // Kvíz: a setup csomagban érkezik minden beállítás
  Quiz: { setup: QuizSetup };

  // Témazáró beállító képernyő
  ExamSetup: { quizId: string; title?: string };

  // Témazáró futtatás: itt nem "setup"-ban adjuk át
  Exam: { quizId: string; title?: string; count?: number };
};
export type Question = {
  type: "tf" | "mc";
  text: string;
  answer: boolean | string;
  options?: string[];
  hint?: string;
};
