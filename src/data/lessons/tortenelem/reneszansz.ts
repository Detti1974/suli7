// src/data/lessons/tortenelem/reneszansz.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const reneszanszLessons: Lesson[] = [
  {
    id: "humanizmus",
    title: "Humanizmus – az ember a középpontban",
    content: `A humanizmus a 14–16. század eszmei iránya, amely az embert, az egyéniséget és a földi élet értékeit állította középpontba.
Az antik görög–római kultúra újrafelfedezése, a forráskutatás (ad fontes) és a sokoldalú műveltség (uomo universale) jellemzi.
Fontos alakok: Petrarca (költő, „a humanizmus atyja”), Erasmus (bölcs humanista, a művelt, mértéktartó hit védelmezője). 
A könyvnyomtatás gyorsította a műveltség terjedését és olcsóbbá tette a könyveket.`,
    keyDates: [
      { year: "1450 k.", event: "A könyvnyomtatás elterjedése (Gutenberg)" },
    ],
  },
  {
    id: "muveszet-tudomany",
    title: "Reneszánsz művészet és tudományos fordulat",
    content: `Az itáliai városállamokban (Firenze, Róma, Velence) bontakozott ki. 
Képzőművészet: természetes, élethű ábrázolás, perspektíva, anatómiai pontosság.
Mesterek: Leonardo da Vinci (Mona Lisa, Utolsó vacsora – tudós és mérnök is), Michelangelo (Pietà, Dávid, Sixtus-kápolna freskói), Raffaello (Athéni iskola).
Tudomány: Kopernikusz megfogalmazza a heliocentrikus világképet, Galilei megfigyelései és kísérletei megerősítik. 
A reneszánsz egyszerre művészeti és szellemi-szaktudományos megújulás.`,
    keyDates: [
      { year: 1543, event: "Kopernikusz: Az égi pályák körforgásáról" },
    ],
  },
  {
    id: "terjedes-epiteszet",
    title: "A reneszánsz terjedése és építészet",
    content: `A reneszánsz Itáliából kiindulva egész Európában elterjedt: Németalföld, Franciaország, Anglia, Közép-Európa.
Építészet: félköríves nyílások, oszloprendek, kupolák; arányosság, harmónia, antik minták követése.
Magyar vonatkozás: Mátyás király udvara (Corvinák, Buda és Visegrád reneszánsz díszítései) a térség egyik legfényesebb reneszánsz központja volt.`,
    keyDates: [
      { year: "15. sz. vége", event: "Mátyás király reneszánsz udvara" },
    ],
  },
];
