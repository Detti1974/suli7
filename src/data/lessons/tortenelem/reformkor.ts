// src/data/lessons/tortenelem/reformkor.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const reformkorLessons: Lesson[] = [
  {
    id: "kezdet",
    title: "A reformkor kezdete (1825)",
    content: `A reformkor 1825-ben indult a pozsonyi országgyűlésen, amikor Széchenyi István felajánlotta birtokai egyévi jövedelmét a Magyar Tudományos Akadémia létrehozására. 
Ez szimbolikus kezdete lett annak a korszaknak, amelyben a magyar nemesség és értelmiség egy része reformokat sürgetett: közteherviselést, jobbágyság helyzetének rendezését, a magyar nyelv hivatalossá tételét.`,
    keyDates: [
      { year: 1825, event: "Pozsonyi országgyűlés – Széchenyi felajánlása" },
    ],
  },
  {
    id: "szechenyi",
    title: "Széchenyi István programja",
    content: `Széchenyi István a „legnagyobb magyar”, a reformkor vezéralakja. 
Művei közül kiemelkedik a Hitel (1830), Világ (1831) és Stádium (1833). 
A gazdasági modernizáció híve volt: közlekedés fejlesztése (Lánchíd, folyószabályozás, vasút), hitelrendszer kiépítése. 
Politikáját fokozatos, óvatos reformok jellemezték.`,
    keyDates: [
      { year: 1830, event: "Széchenyi: Hitel" },
      { year: 1833, event: "Széchenyi: Stádium" },
      { year: 1842, event: "Lánchíd építésének kezdete" },
    ],
  },
  {
    id: "kossuth",
    title: "Kossuth Lajos és a radikálisabb irány",
    content: `Kossuth Lajos a reformkor másik meghatározó alakja. 
A Pesti Hírlap szerkesztőjeként (1841) a közvélemény formálásában kulcsszerepet játszott. 
Programja a közteherviselés, a jobbágyfelszabadítás, az érdekegyesítés és a polgári átalakulás volt. 
Kossuth a nemzeti függetlenséget is fontosnak tartotta.`,
    keyDates: [
      { year: 1841, event: "Kossuth Lajos: Pesti Hírlap" },
    ],
  },
  {
    id: "orszaggyulesek",
    title: "Országgyűlések és törvények",
    content: `A reformkor országgyűlései Pozsonyban üléseztek. 
Fontos törvények: 1832–36-os ogy. – a magyar nyelv fokozatos bevezetése; 
1844: a magyar lett a hivatalos nyelv; 
1847–48: utolsó rendi országgyűlés, ahol előkészítették a polgári átalakulást.`,
    keyDates: [
      { year: "1832–36", event: "Pozsonyi országgyűlés – magyar nyelv térnyerése" },
      { year: 1844, event: "Magyar nyelv hivatalossá tétele" },
      { year: "1847–48", event: "Utolsó rendi országgyűlés" },
    ],
  },
  {
    id: "nyelvkerdes",
    title: "A nyelvkérdés",
    content: `A reformkorban központi kérdéssé vált a magyar nyelv ügye. 
Kazinczy Ferenc nyelvújító mozgalma előkészítette a magyar nyelv teljes körű használatát. 
1844-ben törvény rögzítette, hogy a magyar a hivatalos államnyelv Magyarországon.`,
    keyDates: [
      { year: 1844, event: "A magyar nyelv hivatalossá válik" },
    ],
  },
  {
    id: "tarsadalmi-valtozasok",
    title: "Társadalmi változások",
    content: `A reformkorban egyre nagyobb hangsúlyt kapott a jobbágykérdés. 
Felmerült a jobbágyság felszabadítása, a közteherviselés bevezetése, a nemesség adóztatása. 
Megjelent az érdekegyesítés gondolata: a nemesség és jobbágyság összefogása a nemzeti célokért.`,
    keyDates: [
      { year: 1830, event: "Érdekegyesítés gondolatának megjelenése" },
    ],
  },
];
