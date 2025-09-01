// src/data/lessons/tortenelem/magyar-16-17.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const magyar1617Lessons: Lesson[] = [
  {
    id: "mohacs",
    title: "A mohácsi csata és következményei",
    content: `1526. augusztus 29-én a magyar sereg súlyos vereséget szenvedett a törököktől.
II. Lajos király a csatában életét vesztette. A vereség következtében Magyarország három részre szakadt: királyi Magyarország, Hódoltság és Erdély.`,
    keyDates: [
      { year: 1526, event: "Mohácsi csata" },
      { year: 1541, event: "Buda török kézre kerül" },
    ],
  },
  {
    id: "haromresz",
    title: "Magyarország három részre szakadása",
    content: `1541-ben a török megszállta Budát. Az ország három részre szakadt:
1. Királyi Magyarország (Habsburg uralom alatt),
2. Hódoltság (török fennhatóság alatt),
3. Erdélyi Fejedelemség (önálló, de a töröknek adót fizetett).`,
    keyDates: [
      { year: 1541, event: "Buda elfoglalása" },
    ],
  },
  {
    id: "erdely",
    title: "Az Erdélyi Fejedelemség",
    content: `Az Erdélyi Fejedelemség sajátos államalakulat volt.
Jelentős fejedelmei: Bocskai István (1604–1606 szabadságharc), Bethlen Gábor (1613–1629, aranykor), I. Rákóczi György.
Jellemzője a vallási türelem (1568: tordai országgyűlés).`,
    keyDates: [
      { year: 1568, event: "Tordai országgyűlés – vallásszabadság" },
      { year: 1606, event: "Bécsi béke – Bocskai szabadságharc lezárása" },
    ],
  },
  {
    id: "torokellenes",
    title: "Törökellenes küzdelmek",
    content: `A 16–17. században több nagy csata és várvédelem zajlott.
1541: Buda elfoglalása, 1552: Eger sikeres védelme Dobó Istvánnal, 1566: Szigetvár ostroma (Zrínyi Miklós hősi halála).
A 17. század végén a Habsburgok felszabadító háborúi vetettek véget a török uralomnak.`,
    keyDates: [
      { year: 1552, event: "Eger védelme" },
      { year: 1566, event: "Szigetvár ostroma" },
      { year: 1686, event: "Buda felszabadítása" },
    ],
  },
];
