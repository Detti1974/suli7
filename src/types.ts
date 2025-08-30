export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type QuizPack = {
  id: string;
  title: string;
  questions: Question[];
};

export type RootStackParamList = {
  Home: undefined;
  Quiz: { quizId: string };
  // ide jöhetnek majd további screenek
};
