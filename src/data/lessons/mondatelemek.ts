// src/data/lessons/lesson-mondatelemek.ts
import type { Lesson } from "../../types/lesson";

const MONDATELEMEK: Lesson = {
  id: "mondatelemek",
  title: "Mondatelemek: Alany, Állítmány, Bővítmények",
  blocks: [
    {
      heading: "Alany",
      text: "Akiről/amiről állítunk. Kérdése: ki? mi?",
      example: "A lány énekel. • A hó esik.",
      tip: "Az alany nem mindig főnév: lehet névmás is."
    },
    {
      heading: "Állítmány",
      text: "Amit állítunk az alanyról. Lehet igei, névszói, névszói-igei.",
      example: "A fiú fut. (igei) • A film érdekes. (névszói) • A csapat bajnok lett. (névszói-igei)"
    },
    {
      heading: "Bővítmények",
      text: "Tárgy (kit? mit?), határozók (hol? mikor? hogyan? miért?), jelzők (milyen? melyik? hány?).",
      example: "Olvasok egy könyvet. (tárgy) • Reggel indulok. (időhat.) • kék kabát (jelző)",
      tip: "A kérdőszó megmutatja, milyen bővítményről van szó."
    }
  ]
};

export default MONDATELEMEK;
