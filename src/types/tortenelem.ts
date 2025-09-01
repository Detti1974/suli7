// Alaptípusok a történelem modulhoz

export type KeyDate = { year: number | string; event: string };

export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export type Topic = {
  id: string;
  title: string;
  description?: string;
  // A témához tartozó leckék
  lessons: Lesson[];
  // Kvíz/Témazáró azonosítók (a Quiz/ExamScreen ezekkel navigál)
  quizId?: string;
  examId?: string;
};

export type SubjectData = {
  subject: "tortenelem";
  grade: number;   // 7
  topics: Topic[];
};

// Kvíz/Vizsga kérdések – hogy a history és nyelvtan mixet is fel tudd venni
export type MC = { type?: "mc"; question?: string; text?: string; options: string[]; correctIndex?: number; correct?: number; hint?: string };
export type TF = { type: "tf"; text: string; answer: boolean; hint?: string };
export type RawQuestion = MC | TF;

export type QuizPack = {
  id: string;
  title: string;
  items?: RawQuestion[];    // több helyen 'items' a kulcs
  questions?: RawQuestion[]; // máshol 'questions'
};

export type ExamPack = QuizPack;
