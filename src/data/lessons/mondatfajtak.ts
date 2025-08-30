// src/data/lessons/lesson-mondatfajtak.ts
import type { Lesson } from "../../types/lesson";

const MONDATFAJTAK: Lesson = {
  id: "mondatfajtak",
  title: "Mondatfajták",
  blocks: [
    {
      heading: "Kijelentő és kérdő",
      text: "Kijelentő: tényközlés. Kérdő: információt kér.",
      example: "Ma tanulok. — Tanulsz ma?"
    },
    {
      heading: "Felszólító, felkiáltó, óhajtó",
      text: "Szándékot, érzelmet, kívánságot fejez ki.",
      example: "Gyere ide! — De szép! — Bárcsak nyár lenne!",
      tip: "A mondatzáró írásjel segít: ?, !, ."
    }
  ]
};

export default MONDATFAJTAK;
