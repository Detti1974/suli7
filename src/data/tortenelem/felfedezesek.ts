// src/data/lessons/tortenelem/felfedezesek.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const felfedezesekLessons: Lesson[] = [
  {
    id: "felfedezok",
    title: "Felfedezők és új útvonalak",
    content: `A 15–16. század fordulóján Európa új tengeri utakat keresett Ázsia felé.
Kolumbusz Kristóf 1492-ben nyugatnak indulva elérte Amerikát (ő még azt hitte, Indiába jutott).
Vasco da Gama 1498-ban Afrika megkerülésével elérte Indiát, ezzel megnyílt a fűszerút.
Magellán expedíciója (1519–1522) elsőként kerülte meg a Földet, bebizonyítva, hogy a Föld gömb alakú és a tengerek összefüggnek.
A felfedezések mögött gazdasági (fűszerek, arany-ezüst), technikai (iránytű, karavella), és politikai (versengő királyságok) okok álltak.`,
    keyDates: [
      { year: 1492, event: "Kolumbusz első útja – Amerika elérése" },
      { year: 1498, event: "Vasco da Gama Indiába ér Afrika megkerülésével" },
      { year: "1519–1522", event: "Magellán-féle földkerülés" },
    ],
  },
  {
    id: "gyarmatositas",
    title: "Gyarmatosítás és következményei",
    content: `A spanyol és portugál hódítások után Amerika nagy területei gyarmattá váltak.
Később Anglia, Franciaország és Hollandia is bekapcsolódott a terjeszkedésbe.
Kialakult a háromszög-kereskedelem: Európából iparcikkek Afrikába, Afrikából rabszolgák Amerikába, Amerikából nyersanyagok és termények (cukor, dohány, gyapot) Európába.
Európába áramlott a nemesfém, új növények terjedtek (burgonya, kukorica, paradicsom, kakaó), de mindezt óriási emberi szenvedés (rabszolgaság, őslakosok pusztulása) kísérte.`,
    keyDates: [
      { year: 1494, event: "Tordesillasi szerződés – világ felosztása spanyol és portugál érdekszférákra" },
      { year: "16–18. sz.", event: "Háromszög-kereskedelem kora" },
    ],
  },
];
