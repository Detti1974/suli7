// src/data/lessons/lesson-konyvtarhasznalat.ts
import type { Lesson } from "../../types/lesson";

const KONYVTARHASZNALAT: Lesson = {
  id: "konyvtarhasznalat",
  title: "Könyvtárhasználat és digitális források",
  blocks: [
    {
      heading: "Könyvtárhasználat",
      text: "A könyvtár segít eligazodni a tudásanyagban. Katalógus, raktár, kölcsönzés.",
      example: "Például: katalóguscédula → könyv keresése → kölcsönzés.",
      tip: "Mindig jegyezd fel a polc jelzetét!"
    },
    {
      heading: "Digitális források",
      text: "Online szótárak, kézikönyvek, enciklopédiák, megbízható weboldalak.",
      example: "pl. Magyar Értelmező Kéziszótár online • Britannica online",
      tip: "Mindig ellenőrizd a forrás hitelességét!"
    }
  ]
};

export default KONYVTARHASZNALAT;
