// src/data/lessons/lesson-szovegertes.ts
import type { Lesson } from "../../types/lesson";

const SZOVEGERTES: Lesson = {
  id: "szovegertes",
  title: "Szövegértés: stratégiák és jelek",
  blocks: [
    {
      heading: "Előzetes áttekintés",
      text: "Cím, alcím, képek, kiemelések: ezekből következtess!",
      example: "Kérdések: Miről szólhat? Mit tudok róla?",
      tip: "Először csak pásztázd végig a szöveget!"
    },
    {
      heading: "Kulcsszavak és jegyzetelés",
      text: "Kiemelés, margó-jegyzet, rövid vázlat segít a megértésben.",
      example: "Kiemelt szavak + rövid pontokban vázlat."
    }
  ]
};

export default SZOVEGERTES;
