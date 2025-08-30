import type { Lesson } from "../../types/lesson";

import egyszeruOssz from "./egyszeru-ossz-mondat";
import helyesiras1 from "./helyesiras1";
import helyesiras2 from "./helyesiras2";
import konyvtarhasznalat from "./konyvtarhasznalat";
import mondatelemek from "./mondatelemek";
import mondatfajtak from "./mondatfajtak";
import nyelvvaltozatok from "./nyelvvaltozatok";
import szofajok from "./szofajok";
import szotagolas from "./szotagolas";
import szovegertes from "./szovegertes";

// Egy “bank”, amihez a LessonScreen így fér hozzá: lessons[topicId]
// Alias kulcsok is vannak, hogy többféle azonosítóval is megtalálja ugyanazt a tananyagot.
const lessons: Record<string, any> = {
  // Egyszerű / összetett mondat
  "egyszeru-ossz-mondat": egyszeruOssz,

  // Mondatelemek
  "mondatelemek": mondatelemek,

  // Szófajok
  "szofajok": szofajok,

  // Mondatfajták
  "mondatfajtak": mondatfajtak,

  // Helyesírás I–II
  "helyesiras-1": helyesiras1,
  "helyesiras": helyesiras1,     // ha véletlen egyszavas az id
  "helyesiras-2": helyesiras2,

  // Szóelemek / szótagolás – ha a témalistában “Szóelemek és toldalékolás”-ként szerepel
  "szotagolas": szotagolas,

  // Nyelvváltozatok
  "nyelvvaltozatok": nyelvvaltozatok,

  // Könyvtárhasználat / kommunikáció & digitális írásbeliség (ha 'kom-digitalis' az id)
  "konyvtarhasznalat": konyvtarhasznalat,
  "kom-digitalis": konyvtarhasznalat, // alias: ide mutat a “Kommunikáció és digitális írásbeliség”

  // Szövegértés
  "szovegertes": szovegertes,
};

export default lessons;
