// src/data/lessons/tortenelem/dualizmus.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const dualizmusLessons: Lesson[] = [
  {
    id: "budapest-fejlodese",
    title: "Budapest fejlődése",
    content: `1873-ban Buda, Pest és Óbuda egyesülésével létrejött Budapest.
A város rohamosan fejlődött, a korszakban épültek a kiegyezés utáni főváros szimbólumai: Országház, Nagykörút, Sugárút (Andrássy út).
Budapest 1900 körül már európai nagyváros lett.`,
    keyDates: [
      { year: 1873, event: "Buda, Pest és Óbuda egyesítése" },
      { year: 1884, event: "Nyugati pályaudvar átadása" },
      { year: 1896, event: "Millenniumi ünnepségek, földalatti vasút" },
    ],
  },
  {
    id: "gazdasag",
    title: "Gazdasági fejlődés",
    content: `A dualizmus idején gyors ütemben fejlődött az ipar és a mezőgazdaság.
Kialakultak a modern iparágak: vas- és gépipar, textilipar.
A mezőgazdaság exportorientált volt: gabona, marha, bor.
Bankok, vasútvonalak, kereskedelem is gyorsan fejlődött.`,
    keyDates: [
      { year: "1870-es évek", event: "Vasútépítés felgyorsulása" },
      { year: 1896, event: "Millenniumi ünnepségek – infrastruktúra fejlesztés" },
    ],
  },
  {
    id: "tarsadalom",
    title: "Társadalmi átalakulás",
    content: `A dualizmus idején a nemesség mellett megerősödött a polgárság.
A parasztság nagy része még szegény, de megindult az ipari munkásság kialakulása.
A társadalmi rétegek között erős különbségek voltak, de megjelent a modern társadalmi mobilitás.`,
    keyDates: [
      { year: 1905, event: "Polgári pártok és munkásmozgalmak megerősödése" },
    ],
  },
  {
    id: "politika",
    title: "Politikai élet a dualizmusban",
    content: `A Szabadelvű Párt hosszú ideig kormányzott, Deák Ferenc politikai örökségét követve.
A Függetlenségi Párt Kossuth Lajos eszméit vitte tovább.
A századfordulón egyre nagyobb politikai küzdelmek alakultak ki a választójog kiterjesztéséről és a nemzetiségi kérdésről.`,
    keyDates: [
      { year: 1875, event: "Szabadelvű Párt kormányzása kezdete" },
      { year: 1905, event: "Választójogi küzdelmek" },
    ],
  },
  {
    id: "nemzetisegi-kerdes",
    title: "A nemzetiségi kérdés",
    content: `A dualizmus idején Magyarország lakosságának kb. fele nem magyar anyanyelvű volt.
A nemzetiségi törvény (1868) jogokat biztosított, de a gyakorlatban korlátozottan érvényesült.
Ez konfliktusokhoz vezetett a nemzetiségi mozgalmakkal.`,
    keyDates: [
      { year: 1868, event: "Nemzetiségi törvény" },
      { year: "1890-es évek", event: "Nemzetiségi mozgalmak erősödése" },
    ],
  },
  {
    id: "kultura",
    title: "Kulturális élet",
    content: `A korszakban virágzott a magyar kultúra: irodalom, zene, képzőművészet.
Irodalom: Mikszáth Kálmán, Jókai Mór.
Zene: Erkel Ferenc, Liszt Ferenc.
Tudomány: Eötvös Loránd, Semmelweis Ignác.
Az 1896-os millenniumi ünnepségek a magyar történelem ezer évére emlékeztek.`,
    keyDates: [
      { year: 1882, event: "Tisza Kálmán lemondása – új politikai korszak kezdete" },
      { year: 1896, event: "Millenniumi ünnepségek" },
    ],
  },
];
