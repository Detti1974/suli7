export type QuizQuestion =
  | {
      id: string;
      type: 'mc';           // feleletválasztós
      text: string;
      options: string[];
      correctIndex: number;
      hint?: string;
    }
  | {
      id: string;
      type: 'tf';           // igaz/hamis
      text: string;
      answer: boolean;
      hint?: string;
    };

export type QuizPack = {
  id: string;
  title: string;
  questions: QuizQuestion[];
};
