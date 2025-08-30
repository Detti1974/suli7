export type NyelvtanTopic = {
  id: string;
  title: string;
  description?: string;
  summary?: string;
  quizId?: string;
};

export const NYELVTAN7_TOPICS: NyelvtanTopic[] = [
  {
    id: 'egyszeru-ossz-mondat',
    title: 'Egyszerű és összetett mondat',
    description: 'Tagmondatok, kapcsolatok, alapszerkezet.',
    summary: 'Egyszerű: 1 tagmondat. Összetett: több tagmondat mellé- vagy alárendelve.',
    quizId: 'quiz-egyszeru-osszetett',
  },
  {
    id: 'mondatelemek',
    title: 'Mondatelemek és bővítmények',
    description: 'Alany, állítmány, tárgy, határozó, jelző.',
    summary: 'A mondatrészek felismerése és kérdései a helyes elemzéshez.',
    quizId: 'quiz-mondatelemek',
  },
  {
    id: 'szofajok',
    title: 'Szófajok rendszere',
    description: 'Alapszófajok és viszonyszók.',
    summary: 'Főnév, ige, melléknév, határozószó, névmás stb.',
    quizId: 'quiz-szofajok',
  },
  {
    id: 'mondatfajtak',
    title: 'Mondatfajták',
    description: 'Kijelentő, kérdő, felszólító, felkiáltó, óhajtó.',
    summary: 'Funkció és írásjelek szerinti besorolás.',
    quizId: 'quiz-mondatfajtak',
  },
  {
    id: 'helyesiras-1',
    title: 'Helyesírás I. – egybe/külön',
    description: 'Egybeírás–különírás, kötőjel.',
    summary: 'Összetett szavak és toldalékos alakok írása.',
    quizId: 'quiz-helyesiras-1',
  },
  {
    id: 'helyesiras-2',
    title: 'Helyesírás II. – központozás',
    description: 'Írásjelek használata, vessző.',
    summary: 'Tagmondathatárok és felsorolások jelölése.',
    quizId: 'quiz-helyesiras-2',
  },
  {
    id: 'szotagolas',
    title: 'Szóelemek és toldalékolás',
    description: 'Tő, képző, jel, rag.',
    summary: 'A szó felépítése és jelentésmódosítás.',
    quizId: 'quiz-szotagolas',
  },
  {
    id: 'szovegertes',
    title: 'Szövegértés alapok',
    description: 'Kulcsszavak, lényegkiemelés, következtetés.',
    summary: 'Stratégiák a megértéshez és feladattípusok.',
    quizId: 'quiz-szovegertes',
  },
];
