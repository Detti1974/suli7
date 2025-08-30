// src/data/lessons/lesson-egyszeru-ossz-mondat.ts
import type { Lesson } from "../../types/lesson";

const EGYSZERU_OSSZ_MONDAT: Lesson = {
  id: "egyszeru-ossz-mondat",
  title: "Egyszerű és összetett mondat",
  blocks: [
    {
      heading: "Mi az egyszerű mondat?",
      text: "Egy tagmondatból áll, egy állítmányt tartalmaz.",
      example: "A fiú fut. • Virág nyílik.",
      tip: "Ha csak egy állítmány van, egyszerű a mondat."
    },
    {
      heading: "Mi az összetett mondat?",
      text: "Legalább két tagmondatból áll, legalább két állítmányt tartalmaz.",
      example: "Amikor esik, otthon maradok. • Elment, és vissza sem nézett."
    },
    {
      heading: "Tagmondatok kapcsolata",
      text: "Lehet alárendelő (függő) vagy mellérendelő (egyenrangú).",
      example: "Tudom, hogy jössz. (alárendelő) • Süt a nap, és fúj a szél. (mellérendelő)",
      tip: "Keress kötőszavakat: hogy, amikor, mert… (alárendel); és, de, vagy… (mellérendel)."
    }
  ]
};

export default EGYSZERU_OSSZ_MONDAT;
