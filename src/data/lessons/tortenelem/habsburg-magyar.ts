// src/data/lessons/tortenelem/habsburg-magyar.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const habsburgMagyarLessons: Lesson[] = [
  {
    id: "torok-kiuzese",
    title: "A török kiűzése és Buda visszafoglalása",
    content: `A 17. század végén a Szent Liga (Habsburg Birodalom, Lengyelország, Velence és a pápaság) háborúi 
fokozatosan visszaszorították az Oszmán Birodalmat Közép-Európából. A fordulópontok közé tartozik Bécs felmentése (1683), 
majd Buda 1686-os visszafoglalása. A felszabadító háborúk nyomán a Hódoltság területei sorra kerültek vissza keresztény kézre.`,
    keyDates: [
      { year: 1683, event: "Bécs felmentése (Kahlenberg)" },
      { year: 1686, event: "Buda visszafoglalása" },
      { year: 1697, event: "Zentai csata – döntő Habsburg győzelem" },
    ],
  },
  {
    id: "karlocai-beke",
    title: "A karlócai béke (1699) és következményei",
    content: `A karlócai béke lezárta a nagy török háborút. Magyarország döntő része felszabadult a török uralom alól, 
és Habsburg fennhatóság alá került. A háború utáni rendezés fontos eleme volt a birtokviszonyok rendezése 
(Újszerzeményi Bizottság – Neoaquistica Commissio) és a közigazgatás újjászervezése.`,
    keyDates: [
      { year: 1699, event: "Karlócai béke – a török uralom megszűnésének rögzítése" },
      { year: 1687, event: "Pozsonyi országgyűlés – az örökös királyság elfogadása" },
    ],
  },
  {
    id: "rakoczi",
    title: "Rákóczi-szabadságharc (1703–1711)",
    content: `A Habsburg abszolutisztikus törekvések, a háborús terhek és a birtokpolitika nyomán széles ellenállás bontakozott ki. 
II. Rákóczi Ferenc vezetésével a kuruc sereg országos szabadságharcot vívott. A szécsényi országgyűlés (1705) 
konföderációt és rendi önkormányzatot hirdetett. A küzdelem a szatmári békével (1711) zárult, amely amnesztiát adott, 
és megerősítette a rendi jogokat, de a Habsburg uralmat is.`,
    keyDates: [
      { year: "1703–1711", event: "Rákóczi-szabadságharc" },
      { year: 1705, event: "Szécsényi országgyűlés – konföderáció" },
      { year: 1711, event: "Szatmári béke – amnesztia, rendi jogok" },
    ],
  },
  {
    id: "erdely-statusza",
    title: "Erdély helyzete és a Habsburg-rendszer",
    content: `Erdély a 17. század végén és a 18. század elején külön közigazgatási egység maradt; 
a Diploma Leopoldinum (1691) rögzítette sajátos jogi helyzetét. A Habsburg-kormányzat 
központosító törekvései és a rendi önkormányzat közti egyensúly meghatározta a korszakot.`,
    keyDates: [
      { year: 1691, event: "Diploma Leopoldinum – Erdély jogi helyzete" },
      { year: 1723, event: "Pragmatica Sanctio – nőági örökösödés elismerése (kitekintés)" },
    ],
  },
];
