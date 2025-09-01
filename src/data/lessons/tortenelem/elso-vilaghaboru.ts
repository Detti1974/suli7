// src/data/lessons/tortenelem/elso-vilaghaboru.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const elsoVilaghaboruLessons: Lesson[] = [
  {
    id: "haboru-kitorese",
    title: "Az első világháború kitörése",
    content: `1914. június 28-án Szarajevóban meggyilkolták Ferenc Ferdinánd trónörököst.
Ez ürügyet adott az Osztrák–Magyar Monarchiának, hogy hadat üzenjen Szerbiának.
Ezzel kezdetét vette az első világháború, amelyhez fokozatosan bekapcsolódtak a nagyhatalmak.`,
    keyDates: [
      { year: "1914-06-28", event: "Szarajevói merénylet" },
      { year: "1914-07-28", event: "Hadüzenet Szerbiának" },
    ],
  },
  {
    id: "frontok",
    title: "A háború frontjai",
    content: `A háború két fő fronton zajlott:
Nyugati front – állóháború, lövészárokharc (pl. Verdun, Somme).
Keleti front – mozgóbb hadműveletek (pl. Gorlice, Bruszilov-offenzíva).
Olasz fronton is harcoltak magyar katonák.`,
    keyDates: [
      { year: 1916, event: "Verduni csata" },
      { year: 1916, event: "Bruszilov-offenzíva" },
    ],
  },
  {
    id: "orszag-helyzete",
    title: "Magyarország helyzete a háborúban",
    content: `Magyarország emberi és gazdasági erőforrásait is igénybe vették.
Több százezer magyar katona harcolt a frontokon, a hátországban élelmiszerhiány és nyomor alakult ki.
A háború súlyos társadalmi és politikai feszültségeket hozott.`,
    keyDates: [
      { year: 1914, event: "Általános mozgósítás" },
      { year: 1917, event: "Nagy élelmiszerhiány Magyarországon" },
    ],
  },
  {
    id: "forradalmak",
    title: "Forradalmak és a Monarchia összeomlása",
    content: `1917-ben Oroszországban kitört a forradalom, ami megváltoztatta a háború menetét.
1918-ban Németország és szövetségesei vereséget szenvedtek.
1918 őszén a Monarchia felbomlott, Magyarországon a polgári demokratikus forradalom (őszirózsás forradalom) győzött.`,
    keyDates: [
      { year: 1917, event: "Orosz forradalom" },
      { year: 1918, event: "Őszirózsás forradalom" },
    ],
  },
  {
    id: "tanacskoztarsasag",
    title: "A Tanácsköztársaság (1919)",
    content: `1919 márciusában kikiáltották a Magyarországi Tanácsköztársaságot.
Kun Béla vezetésével kommunista rendszer jött létre.
Rövid fennállás után a román hadsereg bevonult Budapestre és megdöntötte a rendszert.`,
    keyDates: [
      { year: "1919-03-21", event: "Tanácsköztársaság kikiáltása" },
      { year: "1919-08", event: "Tanácsköztársaság bukása" },
    ],
  },
  {
    id: "kovetkezmenyek",
    title: "A háború következményei",
    content: `Az első világháború több mint 15 millió ember életét követelte.
Az Osztrák–Magyar Monarchia felbomlott, létrejöttek az utódállamok.
A háború társadalmi, gazdasági és politikai következményei hosszú időre meghatározták Európa történelmét.`,
    keyDates: [
      { year: 1918, event: "A Monarchia felbomlása" },
      { year: 1919, event: "Békekonferenciák kezdete" },
    ],
  },
];
