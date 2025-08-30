// src/data/lessons/lesson-szofajok.ts
import type { Lesson } from "../../types/lesson";

const SZÓFAJOK: Lesson = {
  id: "szofajok",
  title: "Szófajok áttekintése",
  blocks: [
    {
      heading: "Főnév és ige",
      text: "Főnév: élőlény, tárgy, fogalom; Ige: cselekvés, történés, létezés.",
      example: "fa, barátság — fut, esik, van"
    },
    {
      heading: "Melléknév, számnév, névmás",
      text: "Melléknév: tulajdonság; Számnév: mennyiség/sorrend; Névmás: helyettesít.",
      example: "szép, három, ő",
      tip: "A melléknév fokozható: szép–szebb–legszebb."
    },
    {
      heading: "Egyéb szófajok",
      text: "Határozószó, névutó, kötőszó, igekötő, indulatszó.",
      example: "itt, alatt, és, meg-, jaj!"
    }
  ]
};

export default SZÓFAJOK;
