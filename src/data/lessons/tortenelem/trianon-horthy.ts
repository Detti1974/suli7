// src/data/lessons/tortenelem/trianon-horthy.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const trianonHorthyLessons: Lesson[] = [
  {
    id: "trianoni-beke",
    title: "A trianoni béke",
    content: `Az első világháború után Magyarország a vesztesek oldalán került a béketárgyalások elé.
1920. június 4-én a Versailles melletti Trianon palotában aláírt békeszerződés következtében Magyarország területének kétharmadát elvesztette.
A lakosság közel fele idegen uralom alá került.`,
    keyDates: [
      { year: "1920-06-04", event: "Trianoni békeszerződés aláírása" },
    ],
  },
  {
    id: "kovetkezmenyek",
    title: "A béke következményei",
    content: `A trianoni béke súlyos gazdasági, politikai és lelki következményekkel járt.
Az ország elvesztette nyersanyagforrásainak és iparának jelentős részét.
Több millió magyar került a határokon kívülre, ami kisebbségi sorsba taszította őket.`,
    keyDates: [
      { year: 1920, event: "Terület- és népességvesztés" },
    ],
  },
  {
    id: "politikai-rendszer",
    title: "A Horthy-rendszer politikai berendezkedése",
    content: `1919 őszén az antant támogatásával Horthy Miklós lett az ország vezetője.
1920-ban kormányzóvá választották, mivel Magyarország király nélküli királyság lett.
A rendszer konzervatív, autoriter jellegű volt, de parlamentáris formát mutatott.`,
    keyDates: [
      { year: 1919, event: "Horthy bevonulása Budapestre" },
      { year: 1920, event: "Horthy Miklós kormányzóvá választása" },
    ],
  },
  {
    id: "feherterror",
    title: "A fehérterror és konszolidáció",
    content: `A Tanácsköztársaság bukása után fehérterror söpört végig az országon.
Politikai leszámolások, kivégzések történtek, főleg a baloldali erőkkel szemben.
Később Bethlen István miniszterelnök konszolidálta a rendszert.`,
    keyDates: [
      { year: 1919, event: "Fehérterror időszaka" },
      { year: 1921, event: "Bethlen-kormány megalakulása" },
    ],
  },
  {
    id: "bethlen-konszolidacio",
    title: "Bethlen István és a konszolidáció",
    content: `Bethlen István miniszterelnök 1921–1931 között stabilizálta a rendszert.
Megállapodott a szociáldemokratákkal, visszafogta a szélsőségeket.
Gazdasági konszolidáció és a pengő bevezetése 1927-ben erősítette az országot.`,
    keyDates: [
      { year: 1921, event: "Bethlen István miniszterelnök lesz" },
      { year: 1927, event: "Pengő bevezetése" },
    ],
  },
  {
    id: "kulpolitika",
    title: "Külpolitikai törekvések",
    content: `A Horthy-korszak elején a fő cél a trianoni béke revíziója volt.
Magyarország igyekezett diplomáciai kapcsolatokat kiépíteni, főleg Olaszországgal.
A Népszövetségbe való belépés (1922) is a nemzetközi elszigeteltség csökkentését célozta.`,
    keyDates: [
      { year: 1922, event: "Magyarország belép a Népszövetségbe" },
    ],
  },
];
