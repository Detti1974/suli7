export type NyelvtanTopic = {
  id: string;
  title: string;
  description?: string;
  subtopics?: { id: string; title: string }[]; 
  quizId?: string;
  summary?: string;
};

