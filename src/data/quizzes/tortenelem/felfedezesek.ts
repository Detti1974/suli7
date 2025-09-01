// src/data/quizzes/tortenelem/felfedezesek.ts

export type QuizItem = {
  question: string;
  options: string[];
  correct: number; // az options tömb indexe
};

export type QuizPack = {
  id: string;
  title: string;
  items: QuizItem[];
};

export const felfedezesekQuiz: QuizPack = {
  id: "felfedezesek-kviz",
  title: "Felfedezések – kvíz",
  items: [
    { question: "Mikor indult el Kolumbusz első útjára?", options: ["1492", "1498", "1517", "1526"], correct: 0 },
    { question: "Melyik irányba hajózott Kolumbusz?", options: ["Kelet", "Nyugat", "Észak", "Dél"], correct: 1 },
    { question: "Kolumbusz hova érkezett 1492-ben?", options: ["India", "Amerika", "Afrika", "Ausztrália"], correct: 1 },
    { question: "Ki jutott el Indiába Afrika megkerülésével?", options: ["Vasco da Gama", "Magellán", "Cook", "Diaz"], correct: 0 },
    { question: "Mikor ért Indiába Vasco da Gama?", options: ["1492", "1498", "1519", "1543"], correct: 1 },
    { question: "Ki vezette az első földkörüli expedíciót?", options: ["Kolumbusz", "Magellán", "Cook", "Amerigo Vespucci"], correct: 1 },
    { question: "Mikor indult Magellán expedíciója?", options: ["1519", "1526", "1541", "1552"], correct: 0 },
    { question: "Mikor fejeződött be Magellán expedíciója?", options: ["1498", "1522", "1543", "1555"], correct: 1 },
    { question: "Mi bizonyította Magellán útja?", options: ["A Föld lapos", "A Föld gömb alakú", "A Hold keringése", "A Nap keringése"], correct: 1 },
    { question: "Mi volt a felfedezések fő gazdasági oka?", options: ["Új vallások keresése", "Fűszer- és aranykereskedelem", "Rabszolgaság megszüntetése", "Új iparágak keresése"], correct: 1 },
    { question: "Mi segítette a hajósokat a tájékozódásban?", options: ["Radar", "Iránytű", "Repülőgép", "Távcső"], correct: 1 },
    { question: "Mi volt a karavella?", options: ["Hajótípus", "Távcső", "Fegyver", "Kereskedelmi útvonal"], correct: 0 },
    { question: "Mi volt a Tordesillasi szerződés lényege?", options: ["Németalföld felosztása", "A világ spanyol–portugál felosztása", "Francia–angol béke", "Oszmán–Habsburg béke"], correct: 1 },
    { question: "Mikor kötötték a Tordesillasi szerződést?", options: ["1492", "1494", "1517", "1526"], correct: 1 },
    { question: "Ki volt Amerigo Vespucci?", options: ["Felfedező, akiről Amerikát elnevezték", "Olasz hadvezér", "Angol király", "Francia kereskedő"], correct: 0 },
    { question: "Melyik kontinens lett gyarmat a 16. századtól főleg?", options: ["Afrika", "Amerika", "Ázsia", "Ausztrália"], correct: 1 },
    { question: "Melyik állam NEM vett részt a nagy felfedezésekben?", options: ["Spanyolország", "Portugália", "Oszmán Birodalom", "Anglia"], correct: 2 },
    { question: "Melyik termény NEM Amerikából származik?", options: ["Kukorica", "Burgonya", "Kakaó", "Rizs"], correct: 3 },
    { question: "Mi volt a háromszög-kereskedelem egyik ága?", options: ["Európa → Afrika: iparcikkek", "Afrika → Európa: fűszerek", "Ázsia → Amerika: porcelán", "Európa → Amerika: gőzgép"], correct: 0 },
    { question: "Mi szállítódott Afrikából Amerikába?", options: ["Fűszerek", "Rabszolgák", "Selyem", "Arany"], correct: 1 },
    { question: "Mit szállítottak Amerikából Európába?", options: ["Rabszolgákat", "Nemesfémeket és új növényeket", "Iparcikkeket", "Porcelánt"], correct: 1 },
    { question: "Mi volt a háromszög-kereskedelem lényege?", options: ["Három kontinens közötti áru- és emberforgalom", "Három hajótípus használata", "Három ország szövetsége", "Három vallás elterjedése"], correct: 0 },
    { question: "Melyik NEM amerikai eredetű növény?", options: ["Paradicsom", "Búza", "Kukorica", "Burgonya"], correct: 1 },
    { question: "Mi lett a gyarmatosítás következménye az őslakosokra?", options: ["Jólét", "Népességpusztulás", "Új vallások elfogadása", "Függetlenség"], correct: 1 },
    { question: "Melyik betegség terjedt Európából Amerikába?", options: ["Himlő", "Influenza", "Kolera", "Malária"], correct: 0 },
    { question: "Melyik kontinensről hoztak rabszolgákat?", options: ["Ázsia", "Afrika", "Amerika", "Európa"], correct: 1 },
    { question: "Ki fedezte fel a Jóreménység fokát?", options: ["Vasco da Gama", "Bartolomeu Diaz", "Magellán", "Kolumbusz"], correct: 1 },
    { question: "Mikor fedezte fel Diaz a Jóreménység fokát?", options: ["1488", "1492", "1498", "1519"], correct: 0 },
    { question: "Ki hódította meg az Azték Birodalmat?", options: ["Pizarro", "Cortez", "Drake", "Cook"], correct: 1 },
    { question: "Ki hódította meg az Inka Birodalmat?", options: ["Kolumbusz", "Pizarro", "Diaz", "Cortez"], correct: 1 },
    { question: "Mi volt a konkvisztádorok fő célja?", options: ["Felfedezés", "Hódítás és kincsszerzés", "Vallási béke", "Tudományos kutatás"], correct: 1 },
    { question: "Mi a konkvisztádor szó jelentése?", options: ["Felfedező", "Hódító", "Kereskedő", "Pap"], correct: 1 },
    { question: "Melyik város volt a spanyol gyarmati közigazgatás központja?", options: ["New York", "Lima", "Santiago", "Panama"], correct: 1 },
    { question: "Mit jelent a 'gyarmat' szó?", options: ["Katonai tábor", "Olyan terület, amit idegen hatalom ural", "Vallási központ", "Tengeri kikötő"], correct: 1 },
    { question: "Melyik ország lett a 16. században tengeri nagyhatalom Spanyolország mellett?", options: ["Portugália", "Olaszország", "Németország", "Oroszország"], correct: 0 },
    { question: "Melyik angol királynő idején kezdődtek nagy felfedezőutak?", options: ["I. Erzsébet", "VIII. Henrik", "I. Mária", "II. Jakab"], correct: 0 },
    { question: "Ki volt Francis Drake?", options: ["Angol kalóz és felfedező", "Spanyol király", "Portugál pap", "Holland festő"], correct: 0 },
    { question: "Mi volt a spanyol armada?", options: ["Hadsereg", "Hajóhad", "Várépítmény", "Kereskedelmi szervezet"], correct: 1 },
    { question: "Melyik évben pusztult el a spanyol armada?", options: ["1588", "1517", "1492", "1618"], correct: 0 },
    { question: "Melyik új növény lett alapélelmiszer Európában a felfedezések után?", options: ["Rizs", "Burgonya", "Kávé", "Tea"], correct: 1 },
    { question: "Melyik ital terjedt el Amerikából?", options: ["Kávé", "Tea", "Csokoládé", "Sör"], correct: 2 },
    { question: "Mit jelent az 'árforradalom'?", options: ["Árcsökkenés Európában", "Árak ugrásszerű emelkedése a nemesfém beáramlása miatt", "Kereskedelmi útvonalak megszűnése", "Rabszolgaság vége"], correct: 1 },
    { question: "Melyik fűszer NEM Ázsiából származik?", options: ["Bors", "Fahéj", "Szegfűszeg", "Kakaó"], correct: 3 },
    { question: "Mi volt az első portugál gyarmat Indiában?", options: ["Goa", "Bombay", "Delhi", "Kalkutta"], correct: 0 },
    { question: "Ki nevezte el Amerikát?", options: ["Magellán", "Amerigo Vespucci", "Kolumbusz", "Diaz"], correct: 1 },
    { question: "Melyik hajótípus jellemezte a felfedezéseket?", options: ["Karavella", "Titanic", "Fregatt", "Gálya"], correct: 0 },
    { question: "Melyik évszázadban zajlottak a nagy földrajzi felfedezések?", options: ["13–14. sz.", "15–16. sz.", "17–18. sz.", "19. sz."], correct: 1 },
    { question: "Melyik ország NEM volt spanyol gyarmat?", options: ["Mexikó", "Peru", "Brazília", "Chile"], correct: 2 },
    { question: "Melyik ország foglalta el Brazíliát?", options: ["Spanyolország", "Portugália", "Anglia", "Franciaország"], correct: 1 },
    { question: "Melyik kontinens került először teljesen az európaiak befolyása alá?", options: ["Afrika", "Amerika", "Ausztrália", "Európa"], correct: 1 },
    { question: "Mi volt az Újvilág elnevezése?", options: ["Amerika", "Afrika", "India", "Kína"], correct: 0 },
    { question: "Ki volt Hernando Cortez?", options: ["Spanyol hódító, az Azték Birodalom leverője", "Portugál hajós", "Angol király", "Olasz bankár"], correct: 0 },
    { question: "Ki volt Pizarro?", options: ["Inka uralkodó", "Spanyol hódító, az Inka Birodalom meghódítója", "Holland kereskedő", "Angol hajós"], correct: 1 },
  ],
};
