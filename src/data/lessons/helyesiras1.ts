// src/data/lessons/lesson-helyesiras1.ts
import type { Lesson } from "../../types/lesson";

const HELYESIRAS1: Lesson = {
  id: "helyesiras1",
  title: "Helyesírás I: egybe/külön, j/ly, tulajdonnevek",
  blocks: [
    {
      heading: "Egybe vagy külön?",
      text: "Szóösszetételek: jelentés- és hangsúlyviszony dönt.",
      example: "asztallap (egybe), zöld alma (külön)",
      tip: "Ha új jelentést kap a kapcsolat → gyakran egybeírás."
    },
    {
      heading: "j/ly",
      text: "Szabály + szótanulás: sok szó hagyomány alapján írandó.",
      example: "lyuk, folyó, jegy, hajó"
    },
    {
      heading: "Tulajdonnevek",
      text: "Személy- és földrajzi nevek, intézménynevek nagybetűvel.",
      example: "Petőfi Sándor, Balaton, Magyar Nemzeti Múzeum"
    }
  ]
};

export default HELYESIRAS1;
