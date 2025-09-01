// src/data/lessons/tortenelem/neoabszolutizmus.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const neoabszolutizmusLessons: Lesson[] = [
  {
    id: "megtorlas",
    title: "A szabadságharc leverése és a megtorlás",
    content: `A világosi fegyverletétel (1849. augusztus 13.) után súlyos megtorlás kezdődött.
Haynau rémuralma: kivégzések, bebörtönzések, katonai perek.
1849. október 6-án Aradon 13 honvédtisztet végeztek ki, Pesten Batthyány Lajost.`,
    keyDates: [
      { year: "1849-08-13", event: "Világosi fegyverletétel" },
      { year: "1849-10-06", event: "Aradi vértanúk kivégzése, Batthyány Lajos kivégzése" },
    ],
  },
  {
    id: "bach-korszak",
    title: "A Bach-korszak (1850–1859)",
    content: `Az osztrák kormányzat központosított, bürokratikus rendszert vezetett be.
Belügyminiszter után „Bach-korszak”-nak nevezzük.
Megszüntették a magyar közigazgatási autonómiát, bevezették a német nyelvet a hivatalokban.
Katonai elnyomás, titkosrendőrség, erős cenzúra jellemezte.`,
    keyDates: [
      { year: 1850, event: "Bach-korszak kezdete" },
      { year: 1859, event: "Solferino – osztrák vereség" },
    ],
  },
  {
    id: "gazdasag-tarsadalom",
    title: "Gazdasági és társadalmi változások a neoabszolutizmus alatt",
    content: `A szabadságharc leverése után is folytatódtak az áprilisi törvények egyes elemei: jobbágyfelszabadítás nem vonták vissza.
Fejlődött a mezőgazdaság, terjedt a vasútépítés.
Ugyanakkor a magas adók, katonai sorozások és a gazdasági válság elégedetlenséget keltettek.`,
    keyDates: [
      { year: 1854, event: "Jobbágyfelszabadítás végrehajtásának folytatása" },
      { year: "1850-es évek", event: "Vasútépítés kezdete Magyarországon" },
    ],
  },
  {
    id: "ellenallas",
    title: "Passzív ellenállás",
    content: `A magyar társadalom nagy része nem vett részt az osztrák állami intézményekben.
Deák Ferenc nevéhez fűződik a passzív ellenállás: nem vállalt hivatalt, nem fizetett önként adót, 
távol tartotta magát az állami szerepvállalástól.
Ez a „nemzet hallgatása” jelképes ellenállás volt.`,
    keyDates: [
      { year: "1850-es évek", event: "Passzív ellenállás korszaka – Deák Ferenc" },
    ],
  },
  {
    id: "emigracio",
    title: "Emigráció",
    content: `Sokan külföldre menekültek: Kossuth Lajos, Klapka György, Teleki László.
Az emigráció politikai mozgalmakat szervezett (pl. Kossuth: torinói levelek).
Az európai közvélemény sokáig rokonszenvezett a magyar üggyel, de a nagyhatalmak nem támogatták aktívan.`,
    keyDates: [
      { year: 1851, event: "Kossuth amerikai körútja" },
      { year: 1861, event: "Teleki László öngyilkossága" },
    ],
  },
  {
    id: "utkozet",
    title: "Az osztrák birodalom válsága és a neoabszolutizmus bukása",
    content: `Az 1850-es évek végén Ausztria katonai vereségeket szenvedett (pl. 1859: solferinói csata).
A gazdasági válság és a nemzetiségi ellentétek gyengítették a birodalmat.
Ferenc József kénytelen volt engedményeket tenni, visszatért az alkotmányos kísérletekhez (októberi diploma, februári pátens).`,
    keyDates: [
      { year: 1859, event: "Solferinói vereség" },
      { year: 1860, event: "Októberi diploma" },
      { year: 1861, event: "Februári pátens" },
    ],
  },
];
