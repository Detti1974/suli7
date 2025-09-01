// src/data/lessons/tortenelem/kiegyezes-dualizmus.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const kiegyezesDualizmusLessons: Lesson[] = [
  {
    id: "politikai-hatter",
    title: "Politikai háttér a kiegyezés előtt",
    content: `A szabadságharc bukása után a neoabszolutizmus rendszere (Bach-korszak) megbukott az 1859-es solferinói vereséggel. 
Az 1860-as években Ausztria kísérletezett az alkotmányos reformokkal (Októberi diploma, Februári pátens), de ezek nem elégítették ki a magyarokat. 
A passzív ellenállás után Deák Ferenc tárgyalásokba kezdett Ferenc Józseffel.`,
    keyDates: [
      { year: 1860, event: "Októberi diploma" },
      { year: 1861, event: "Februári pátens" },
    ],
  },
  {
    id: "kiegyezes",
    title: "Az 1867-es kiegyezés",
    content: `1867-ben létrejött az Osztrák–Magyar Monarchia. 
A kiegyezés értelmében Magyarország és Ausztria belső ügyeikben önállóak lettek, de közös ügy maradt a külügy, hadügy és pénzügy. 
Ferenc Józsefet magyar királlyá koronázták, Deák Ferenc neve a kiegyezéshez kapcsolódik.`,
    keyDates: [
      { year: 1867, event: "Kiegyezés megkötése" },
      { year: "1867. június 8.", event: "Ferenc József magyar királlyá koronázása" },
    ],
  },
  {
    id: "allamszerkezet",
    title: "A dualista államszerkezet",
    content: `A birodalom két egyenrangú részből állt: az osztrák és a magyar államrészből. 
Közös minisztériumok: külügy, hadügy, közös pénzügy. 
A közös ügyekről a két országrész delegációi döntöttek.`,
    keyDates: [
      { year: 1867, event: "Dualista államrendszer létrejötte" },
    ],
  },
  {
    id: "gazdasag",
    title: "Gazdasági fejlődés a dualizmus korában",
    content: `Az 1867-es kiegyezés után Magyarország gyors fejlődésnek indult. 
Mezőgazdaság és ipar korszerűsödött, vasútépítés felgyorsult, Budapest nagyvárossá vált. 
1873-ban Buda, Pest és Óbuda egyesült: megszületett Budapest.`,
    keyDates: [
      { year: 1873, event: "Budapest létrejötte" },
    ],
  },
  {
    id: "tarsadalom",
    title: "Társadalmi és politikai élet",
    content: `A dualizmus idején kialakult a modern magyar parlamentarizmus. 
A választójog még mindig korlátozott volt (cenzusos), de nőtt a politikai élet jelentősége. 
Megjelentek a modern pártok (pl. Szabadelvű Párt, Függetlenségi Párt).`,
    keyDates: [
      { year: 1875, event: "Szabadelvű Párt megalakulása" },
    ],
  },
  {
    id: "kultura",
    title: "Kultúra és nemzetiségi kérdés",
    content: `A kiegyezés utáni időszak a kulturális fellendülés kora volt. 
Az oktatás területén Eötvös József miniszter iskolareformjai jelentősek voltak (1868: népiskolai törvény). 
A nemzetiségi kérdés azonban továbbra is feszültségeket okozott.`,
    keyDates: [
      { year: 1868, event: "Népiskolai törvény (Eötvös József)" },
      { year: 1868, event: "Nemzetiségi törvény" },
    ],
  },
];
