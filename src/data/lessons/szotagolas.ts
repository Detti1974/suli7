// src/data/lessons/lesson-szotagolas.ts
import type { Lesson } from "../../types/lesson";

const SZOTAGOLAS: Lesson = {
  id: "szotagolas",
  title: "Szóelemek és toldalékolás",
  blocks: [
    {
      heading: "Szótő és toldalék",
      text: "Szóképzés, ragozás: jelek, ragok, képzők.",
      example: "könyv+ek+et, szép+ség, olvas+ott"
    },
    {
      heading: "Igeragozás – alanyi/tárgyas",
      text: "Alanyi: általános tárgy; Tárgyas: határozott tárgy esetén.",
      example: "Olvasok / Olvasom a könyvet.",
      tip: "Ha a tárgy határozott (a/az, ezt-azt), gyakran tárgyas ragozás."
    }
  ]
};

export default SZOTAGOLAS;
