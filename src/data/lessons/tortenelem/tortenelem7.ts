// src/data/lessons/tortenelem/tortenelem7.ts

// --- TÍPUSOK ---
export type KeyDate = { year: number | string; event: string };
export type Lesson = { id: string; title: string; content: string; keyDates?: KeyDate[] };
export type QuizItem = { question: string; options: string[]; correct: number; hint?: string };
export type QuizPack = { id: string; title: string; items: QuizItem[] };
export type ExamItem = QuizItem;
export type ExamPack = { id: string; title: string; items: ExamItem[] };

export type TopicLite = {
  id: string;
  title: string;
  description?: string;
  quizId?: string;
  examId?: string;
};

// --- LECKÉK (topics → külön fájlok) ---
import { felfedezesekLessons } from "./felfedezesek";
import { reneszanszLessons } from "./reneszansz";
import { reformacioLessons } from "./reformacio";
import { magyar1617Lessons } from "./magyar-16-17";
import { habsburgMagyarLessons } from "./habsburg-magyar";
import { felvilagosodasLessons } from "./felvilagosodas";
import { felvilagosultAbszolutizmusMagyarLessons } from "./felvilagosult-abszolutizmus-magyar";
import { ipariForradalomReformkorLessons } from "./ipari-forradalom-reformkor";
import { reformkorLessons } from "./reformkor";
import { forradalom1848_1849Lessons } from "./forradalom-1848-1849";
import { neoabszolutizmusLessons } from "./neoabszolutizmus";
import { kiegyezesDualizmusLessons } from "./kiegyezes-dualizmus";
import { dualizmusLessons } from "./dualizmus";
import { elsoVilaghaboruLessons } from "./elso-vilaghaboru";
import { trianonHorthyLessons } from "./trianon-horthy";

// --- KVÍZEK (külön fájlok) ---
import { felfedezesekQuiz } from "../../quizzes/tortenelem/felfedezesek";
import { reneszanszQuiz } from "../../quizzes/tortenelem/reneszansz";
import { reformacioQuiz } from "../../quizzes/tortenelem/reformacio";
import { magyar1617Quiz } from "../../quizzes/tortenelem/magyar-16-17";
import { habsburgMagyarQuiz } from "../../quizzes/tortenelem/habsburg-magyar";
import { felvilagosodasQuiz } from "../../quizzes/tortenelem/felvilagosodas";
import { felvilagosultAbszolutizmusMagyarQuiz } from "../../quizzes/tortenelem/felvilagosult-abszolutizmus-magyar";
import { ipariForradalomReformkorQuiz } from "../../quizzes/tortenelem/ipari-forradalom-reformkor";
import { reformkorQuiz } from "../../quizzes/tortenelem/reformkor";
import { forradalom1848_1849Quiz } from "../../quizzes/tortenelem/forradalom-1848-1849";
import { neoabszolutizmusQuiz } from "../../quizzes/tortenelem/neoabszolutizmus";
import { kiegyezesDualizmusQuiz } from "../../quizzes/tortenelem/kiegyezes-dualizmus";
import { dualizmusQuiz } from "../../quizzes/tortenelem/dualizmus";
import { elsoVilaghaboruQuiz } from "../../quizzes/tortenelem/elso-vilaghaboru";
import { trianonHorthyQuiz } from "../../quizzes/tortenelem/trianon-horthy";

// --- TÉMAZÁRÓK (külön fájlok) ---
import { felfedezesekExam } from "../../exams/tortenelem/felfedezesek.exam";
import { reneszanszExam } from "../../exams/tortenelem/reneszansz.exam";
import { reformacioExam } from "../../exams/tortenelem/reformacio.exam";
import { magyar1617Exam } from "../../exams/tortenelem/magyar-16-17.exam";
import { habsburgMagyarExam } from "../../exams/tortenelem/habsburg-magyar.exam";
import { felvilagosodasExam } from "../../exams/tortenelem/felvilagosodas.exam";
import { felvilagosultAbszolutizmusMagyarExam } from "../../exams/tortenelem/felvilagosult-abszolutizmus-magyar.exam";
import { ipariForradalomReformkorExam } from "../../exams/tortenelem/ipari-forradalom-reformkor.exam";
import { reformkorExam } from "../../exams/tortenelem/reformkor.exam";
import { forradalom1848_1849Exam } from "../../exams/tortenelem/forradalom-1848-1849.exam";
import { neoabszolutizmusExam } from "../../exams/tortenelem/neoabszolutizmus.exam";
import { kiegyezesDualizmusExam } from "../../exams/tortenelem/kiegyezes-dualizmus.exam";
import { dualizmusExam } from "../../exams/tortenelem/dualizmus.exam";
import { elsoVilaghaboruExam } from "../../exams/tortenelem/elso-vilaghaboru.exam";
import { trianonHorthyExam } from "../../exams/tortenelem/trianon-horthy.exam";

// --- TÉMAKÖR LISTA a Topics képernyőhöz ---
export const tortenelem7Topics: TopicLite[] = [
  {
    id: "felfedezesek",
    title: "Földrajzi felfedezések",
    description: "Okok, menete és következmények.",
    quizId: felfedezesekQuiz.id,
    examId: felfedezesekExam.id,
  },
  {
    id: "reneszansz",
    title: "Humanizmus és reneszánsz",
    description: "Eszmék és művészet.",
    quizId: reneszanszQuiz.id,
    examId: reneszanszExam.id,
  },
  {
    id: "reformacio",
    title: "Reformáció és katolikus megújulás",
    description: "Irányzatok, ellenreformáció.",
    quizId: reformacioQuiz.id,
    examId: reformacioExam.id,
  },
  {
    id: "magyar-16-17",
    title: "Magyarország a 16–17. században",
    description: "Mohács, három részre szakadás, Erdély, végvári harcok.",
    quizId: magyar1617Quiz.id,
    examId: magyar1617Exam.id,
  },
  {
    id: "habsburg-magyar",
    title: "A Habsburg Birodalom és Magyarország",
    description: "Török kiűzése, karlócai béke, Rákóczi-szabadságharc.",
    quizId: habsburgMagyarQuiz.id,
    examId: habsburgMagyarExam.id,
  },
  {
    id: "felvilagosodas",
    title: "Felvilágosodás és forradalmak",
    description: "Eszmék, amerikai függetlenség, francia forradalom, Napóleon.",
    quizId: felvilagosodasQuiz.id,
    examId: felvilagosodasExam.id,
  },
  {
    id: "felvilagosult-abszolutizmus-magyar",
    title: "Felvilágosult abszolutizmus Magyarországon",
    description: "Mária Terézia reformjai, II. József rendeletei.",
    quizId: felvilagosultAbszolutizmusMagyarQuiz.id,
    examId: felvilagosultAbszolutizmusMagyarExam.id,
  },
  {
    id: "ipari-forradalom-reformkor",
    title: "Ipari forradalom és a reformkor küszöbe",
    description: "Brit ipari forradalom, magyar viszonyok 1825-ig.",
    quizId: ipariForradalomReformkorQuiz.id,
    examId: ipariForradalomReformkorExam.id,
  },
  {
    id: "reformkor",
    title: "Reformkor Magyarországon",
    description: "Széchenyi vs. Kossuth, országgyűlések, nyelvkérdés.",
    quizId: reformkorQuiz.id,
    examId: reformkorExam.id,
  },
  {
    id: "forradalom-1848-1849",
    title: "Az 1848–49-es forradalom és szabadságharc",
    description: "Március 15., áprilisi törvények, tavaszi hadjárat, világosi fegyverletétel, megtorlás.",
    quizId: forradalom1848_1849Quiz.id,
    examId: forradalom1848_1849Exam.id,
  },
  {
    id: "neoabszolutizmus",
    title: "Neoabszolutizmus kora",
    description: "Bach-korszak, passzív ellenállás, emigráció, osztrák vereségek.",
    quizId: neoabszolutizmusQuiz.id,
    examId: neoabszolutizmusExam.id,
  },
  {
    id: "kiegyezes-dualizmus",
    title: "Kiegyezés és a dualizmus kezdete",
    description: "Monarchia, közös/külön ügyek, Budapest születése, népiskolai törvény.",
    quizId: kiegyezesDualizmusQuiz.id,
    examId: kiegyezesDualizmusExam.id,
  },
  {
    id: "dualizmus",
    title: "Dualizmus kori Magyarország (1873–1914)",
    description: "Gazdasági fellendülés, társadalom, kultúra, nemzetiségek.",
    quizId: dualizmusQuiz.id,
    examId: dualizmusExam.id,
  },
  {
    id: "elso-vilaghaboru",
    title: "Az első világháború és következményei",
    description: "Szarajevó, frontok, őszirózsás, Tanácsköztársaság, összeomlás.",
    quizId: elsoVilaghaboruQuiz.id,
    examId: elsoVilaghaboruExam.id,
  },
  {
    id: "trianon-horthy",
    title: "Trianon és a Horthy-korszak kezdete",
    description: "Békediktátum, fehérterror, Bethlen-konszolidáció.",
    quizId: trianonHorthyQuiz.id,
    examId: trianonHorthyExam.id,
  },
];

// --- TELJES STRUKTÚRA (ha máshol erre építesz) ---
export type SubjectData = {
  subject: "tortenelem";
  grade: number;
  topics: Array<{
    id: string;
    title: string;
    description?: string;
    lessons: Lesson[];
    quizzes: Array<{ id: string; title: string }>;
    summary?: string;
    exam?: ExamPack;
  }>;
};

export const tortenelem7: SubjectData = {
  subject: "tortenelem",
  grade: 7,
  topics: [
    { id: "felfedezesek", title: "Földrajzi felfedezések", description: "Okok, menete és következmények.", lessons: felfedezesekLessons, quizzes: [felfedezesekQuiz], summary: "", exam: felfedezesekExam },
    { id: "reneszansz", title: "Humanizmus és reneszánsz", description: "Eszmék és művészet.", lessons: reneszanszLessons, quizzes: [reneszanszQuiz], summary: "", exam: reneszanszExam },
    { id: "reformacio", title: "Reformáció és katolikus megújulás", description: "Irányzatok, ellenreformáció.", lessons: reformacioLessons, quizzes: [reformacioQuiz], summary: "", exam: reformacioExam },
    { id: "magyar-16-17", title: "Magyarország a 16–17. században", description: "Mohács, három részre szakadás, Erdély, végvári harcok.", lessons: magyar1617Lessons, quizzes: [magyar1617Quiz], summary: "", exam: magyar1617Exam },
    { id: "habsburg-magyar", title: "A Habsburg Birodalom és Magyarország", description: "Török kiűzése, karlócai béke, Rákóczi-szabadságharc.", lessons: habsburgMagyarLessons, quizzes: [habsburgMagyarQuiz], summary: "", exam: habsburgMagyarExam },
    { id: "felvilagosodas", title: "Felvilágosodás és forradalmak", description: "Eszmék, amerikai függetlenség, francia forradalom, Napóleon.", lessons: felvilagosodasLessons, quizzes: [felvilagosodasQuiz], summary: "", exam: felvilagosodasExam },
    { id: "felvilagosult-abszolutizmus-magyar", title: "Felvilágosult abszolutizmus Magyarországon", description: "Mária Terézia reformjai, II. József rendeletei.", lessons: felvilagosultAbszolutizmusMagyarLessons, quizzes: [felvilagosultAbszolutizmusMagyarQuiz], summary: "", exam: felvilagosultAbszolutizmusMagyarExam },
    { id: "ipari-forradalom-reformkor", title: "Ipari forradalom és a reformkor küszöbe", description: "Brit ipari forradalom, magyar viszonyok 1825-ig.", lessons: ipariForradalomReformkorLessons, quizzes: [ipariForradalomReformkorQuiz], summary: "", exam: ipariForradalomReformkorExam },
    { id: "reformkor", title: "Reformkor Magyarországon", description: "Széchenyi vs. Kossuth, országgyűlések, nyelvkérdés.", lessons: reformkorLessons, quizzes: [reformkorQuiz], summary: "", exam: reformkorExam },
    { id: "forradalom-1848-1849", title: "Az 1848–49-es forradalom és szabadságharc", description: "Március 15., áprilisi törvények, tavaszi hadjárat, világosi fegyverletétel, megtorlás.", lessons: forradalom1848_1849Lessons, quizzes: [forradalom1848_1849Quiz], summary: "", exam: forradalom1848_1849Exam },
    { id: "neoabszolutizmus", title: "Neoabszolutizmus kora", description: "Bach-korszak, passzív ellenállás, emigráció, osztrák vereségek.", lessons: neoabszolutizmusLessons, quizzes: [neoabszolutizmusQuiz], summary: "", exam: neoabszolutizmusExam },
    { id: "kiegyezes-dualizmus", title: "Kiegyezés és a dualizmus kezdete", description: "Monarchia, közös/külön ügyek, Budapest születése, népiskolai törvény.", lessons: kiegyezesDualizmusLessons, quizzes: [kiegyezesDualizmusQuiz], summary: "", exam: kiegyezesDualizmusExam },
    { id: "dualizmus", title: "Dualizmus kori Magyarország (1873–1914)", description: "Gazdaság, társadalom, kultúra, nemzetiségek.", lessons: dualizmusLessons, quizzes: [dualizmusQuiz], summary: "", exam: dualizmusExam },
    { id: "elso-vilaghaboru", title: "Az első világháború és következményei", description: "Szarajevó, frontok, őszirózsás, Tanácsköztársaság, összeomlás.", lessons: elsoVilaghaboruLessons, quizzes: [elsoVilaghaboruQuiz], summary: "", exam: elsoVilaghaboruExam },
    { id: "trianon-horthy", title: "Trianon és a Horthy-korszak kezdete", description: "Békediktátum, fehérterror, Bethlen-konszolidáció.", lessons: trianonHorthyLessons, quizzes: [trianonHorthyQuiz], summary: "", exam: trianonHorthyExam },
  ],
};
