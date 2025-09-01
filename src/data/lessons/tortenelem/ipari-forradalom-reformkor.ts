// src/data/lessons/tortenelem/ipari-forradalom-reformkor.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const ipariForradalomReformkorLessons: Lesson[] = [
  {
    id: "ipari-forradalom",
    title: "Az ipari forradalom kezdetei",
    content: `Az ipari forradalom a 18. század második felében indult Angliában. 
A gőzgép (James Watt) és a gépesített textilipar forradalmasította a termelést. 
Az ipari forradalom következményei közé tartozott a gyors városiasodás, a gyáripar térnyerése, 
a közlekedési forradalom (vasút, gőzhajó), valamint a munkásság kialakulása.`,
    keyDates: [
      { year: 1769, event: "James Watt szabadalmaztatja a gőzgépet" },
      { year: "1780-as évek", event: "Textilipar gépesítése Angliában" },
      { year: 1825, event: "Első vasútvonal: Stockton–Darlington" },
    ],
  },
  {
    id: "gazdasagi-valtozasok",
    title: "Gazdasági és társadalmi változások",
    content: `Az ipari forradalom nyomán új társadalmi rétegek jöttek létre: a munkásság és az ipari polgárság. 
A falvakból sokan költöztek városokba, így kialakultak a modern nagyvárosok. 
A mezőgazdaságban is terjedtek az új módszerek (vetésforgó, gépesítés).`,
    keyDates: [
      { year: "19. század eleje", event: "Gyáripar térhódítása Európában" },
    ],
  },
  {
    id: "magyarorszag-helyzete",
    title: "Magyarország a 18–19. század fordulóján",
    content: `Magyarország ekkor még döntően agrárország volt. 
A közlekedés fejletlen, a belső piac szűk volt. 
A rendi országgyűlések működtek, de a gazdasági fejlődés elmaradt a nyugati mintáktól. 
A nemesség és az értelmiség egy része felismerte a reformok szükségességét.`,
    keyDates: [
      { year: 1790, event: "Országgyűlés Pozsonyban – II. József halála után" },
      { year: 1795, event: "Martinovics-féle jakobinus mozgalom leverése" },
    ],
  },
  {
    id: "reformeszmek",
    title: "A reformkor előzményei",
    content: `A 19. század elején a magyar politikai életben megjelentek a reformtörekvések. 
A gazdasági modernizáció, a jobbágyság helyzetének rendezése, a közteherviselés és a nyelvkérdés kerültek középpontba. 
A reformnemzedék előfutárai közé tartozott gróf Széchenyi István, aki felismerte a gazdasági és társadalmi átalakulás szükségességét.`,
    keyDates: [
      { year: 1825, event: "Pozsonyi országgyűlés – Széchenyi felajánlja birtokai egyévi jövedelmét az Akadémia számára" },
    ],
  },
];
