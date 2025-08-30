// src/data/lessons/lesson-egyszeru-mondat.ts
import type { Lesson } from "../../types/lesson";

const EGYSZERU_MONDAT: Lesson = {
  id: "egyszeru-mondat",
  title: "Mondat a szövegben – egyszerű mondat részei, mellérendelés",
  blocks: [
    {
      heading: "Mi az egyszerű mondat?",
      text: "Egyetlen állítást tartalmaz. Alapja az alany és az állítmány kapcsolata.",
      example: "A kutya ugat. • Péter olvas.",
      tip: "Mindig keresd meg: ki? + mit csinál?"
    },
    {
      heading: "Fő mondatrészek",
      text: "Az alany (ki/mi?) és az állítmány (mit állítunk?).",
      example: "A fiú fut. • A lány orvos.",
      tip: "Az állítmány mindig ige!"
    },
    {
      heading: "Bővítmények",
      text: "Tárgy (kit/mit?), határozó (hol, mikor, hogyan?), jelző (milyen?).",
      example: "Elolvastam a könyvet. • Holnap Budapestre utazunk. • szép ház.",
      tip: "A bővítmény mindig pontosítja a mondat értelmét."
    }
  ]
};

export default EGYSZERU_MONDAT;
