export type LessonBlock = {
  heading?: string;
  text?: string;
  example?: string;
  tip?: string;
};

export type Lesson = {
  id: string;
  title: string;
  summary?: string;
  quizId?: string;
  blocks: LessonBlock[];
};
