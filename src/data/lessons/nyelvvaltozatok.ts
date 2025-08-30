// src/data/lessons/lesson-nyelvvaltozatok.ts
import type { Lesson } from "../../types/lesson";

const NYELVVALTOZATOK: Lesson = {
  id: "nyelvvaltozatok-szokalkotas",
  title: "Nyelvváltozatok és szóalkotási módok",
  blocks: [
    {
      heading: "Nyelvváltozatok",
      text: "A köznyelv mellett léteznek tájnyelvek, nyelvjárások, szleng és szaknyelvek is.",
      example: "Köznyelv: autó • Tájnyelv: kocsi • Szleng: verda",
      tip: "Figyeld meg: melyik közegben használják a szavakat!"
    },
    {
      heading: "Szóalkotási módok",
      text: "Az új szavak képzéssel, összetétellel, mozaikszóval vagy átvétellel jönnek létre.",
      example: "képzés: olvas → olvasó • összetétel: nap + szemüveg → napszemüveg • mozaikszó: MÁV",
      tip: "Próbáld te is alkotni: pl. 'könyv' + 'barát' → könyvbarát."
    }
  ]
};

export default NYELVVALTOZATOK;

