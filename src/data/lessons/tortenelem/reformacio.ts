// src/data/lessons/tortenelem/reformacio.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const reformacioLessons: Lesson[] = [
  {
    id: "luther",
    title: "Luther Márton és a reformáció kezdete",
    content: `1517. október 31-én Luther Márton kiszögezte 95 tételét a wittenbergi vártemplom kapujára.
A fő bírálat az egyház bűnbocsátó céduláinak árusítása volt. 
Tanítása: a hit általi megigazulás, a Biblia elsődlegessége, a nemzeti nyelvű istentisztelet.`,
    keyDates: [
      { year: 1517, event: "Luther 95 tétele Wittenbergben" },
    ],
  },
  {
    id: "kalvin",
    title: "Kálvin János és a reformáció terjedése",
    content: `Kálvin János Genfben szigorú egyházi rendet vezetett be.
Tanítása: a predesztináció (eleve elrendelés). 
A kálvinizmus terjedt Svájcban, Németalföldön, Franciaországban, Skóciában és Magyarországon is.`,
    keyDates: [
      { year: "1536", event: "Kálvin fő műve: Institutio" },
    ],
  },
  {
    id: "ellenreformacio",
    title: "Katolikus megújulás (ellenreformáció)",
    content: `A tridenti zsinat (1545–1563) megerősítette a katolikus tanokat.
A jezsuita rend (Loyolai Szent Ignác) oktatással, missziókkal és iskolákkal válaszolt a reformáció kihívásaira.
Művészet: a barokk a katolikus hit érzelmi megerősítését szolgálta.`,
    keyDates: [
      { year: "1545–1563", event: "Tridenti zsinat" },
      { year: 1540, event: "Jezsuita rend alapítása" },
    ],
  },
];
