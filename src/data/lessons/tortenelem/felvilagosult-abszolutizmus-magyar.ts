// src/data/lessons/tortenelem/felvilagosult-abszolutizmus-magyar.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const felvilagosultAbszolutizmusMagyarLessons: Lesson[] = [
  {
    id: "marian-reformjai",
    title: "Mária Terézia reformjai (1740-1780)",
    content: `Mária Terézia uralkodása alatt a Habsburg Monarchia modernizációja indult meg.
Magyarország megtartotta rendi önkormányzatát, de központi reformok is érintették.
Gazdaság: 1754-es kettős vámrendelet (birodalmon belüli és külső vámhatár elkülönítése).
Társadalom: jobbágyság terheinek rendezése az Urbáriummal (1767).
Oktatás: első országos oktatási szabályzat, a Ratio Educationis (1777).`,
    keyDates: [
      { year: 1741, event: "Pozsonyi ogy.: „Életünket és vérünket!” – rendi támogatás" },
      { year: 1754, event: "Kettős vámrendelet" },
      { year: 1756-1763, event: "Hétéves háború – Poroszország ellen" },
      { year: 1767, event: "Urbárium – jobbágyi terhek, úrbérrendezés" },
      { year: 1777, event: "Ratio Educationis – állami oktatásszabályozás" },
    ],
  },
  {
    id: "urbarium",
    title: "Az Urbárium (1767) lényege",
    content: `Az Urbárium birodalmi szintű rendelet volt a jobbágy–földesúr viszony rendezésére.
Rögzítette a telekméretet, a szolgáltatások (robot, pénz-, terményjáradék) felső határát, 
és tiltotta a földesúri önkényt a jobbágytelek elvételében. Célja a termelés stabilizálása és az adóalap védelme.`,
    keyDates: [
      { year: 1767, event: "Urbárium kiadása Magyarországon" },
    ],
  },
  {
    id: "ratio-educationis",
    title: "A Ratio Educationis (1777) és az iskolarendszer",
    content: `A Ratio Educationis az első országos magyar oktatási rendelet.
Szabályozta az elemi, középfokú és felsőfokú oktatás hálózatát, tantárgyait, a tanítóképzést,
és az állami felügyelet erősítését célozta. Terjedt a népoktatás, nőtt az írás-olvasás aránya.`,
    keyDates: [
      { year: 1777, event: "Ratio Educationis: központosított oktatási rendszer" },
      { year: 1806, event: "Új Ratio Educationis (kitekintés)" },
    ],
  },
  {
    id: "ii-jozsef",
    title: "II. József „kalapos király” (1780-1790) rendeletei",
    content: `II. József koronázás nélkül uralkodott („kalapos király”), így nem esküdött meg a magyar rendi jogokra.
Felvilágosult abszolutista reformjai rendeletekben jelentek meg:
• 1781: Türelmi rendelet – protestánsok és görögkeletiek vallásgyakorlásának engedélyezése;
• 1781-1782: Szerzetesrendek korlátozása, hasznos tevékenységű rendek támogatása;
• 1784: Nyelvrendelet – a német hivatali nyelv bevezetése;
• 1785: Jobbágyrendelet – a röghöz kötés eltörlése, szabad költözés és pályaválasztás.
Halála előtt (1790) rendeletei többségét visszavonta, kivéve a türelmi és jobbágyrendeletet.`,
    keyDates: [
      { year: 1781, event: "Türelmi rendelet" },
      { year: 1784, event: "Nyelvrendelet (német hivatali nyelv)" },
      { year: 1785, event: "Jobbágyrendelet (röghöz kötés eltörlése)" },
      { year: 1790, event: "Rendeletek visszavonása – kivétel: türelmi és jobbágyrendelet" },
    ],
  },
  {
    id: "keret",
    title: "Rendi állam és felvilágosult abszolutizmus kerete",
    content: `A magyar rendi alkotmányosság (országgyűlés, vármegyék) megmaradt, 
de az udvar közigazgatási és gazdasági központosításra törekedett. 
A Pragmatica Sanctio (1723) a dinasztikus egységet rögzítette, 
amelyre a 18. század reformjai épültek. A korszak alapozta meg a 19. századi átalakulás feltételeit.`,
    keyDates: [
      { year: 1723, event: "Pragmatica Sanctio – nőági örökösödés elismerése" },
    ],
  },
];
