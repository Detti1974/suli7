import { NYELVTAN7_TOPICS } from './nyelvtan7';

export type Subject = {
  id: string;
  title: string;
  topics: any[];
};

const SUBJECTS: Record<string, Subject> = {
  nyelvtan: { id: 'nyelvtan', title: 'Nyelvtan', topics: NYELVTAN7_TOPICS },
  // később: kemia, fizika, tortenelem …
};

export default SUBJECTS;
