// src/data/exams/tortenelem/osszefoglalo-7.exam.ts

export type ExamItem = { question: string; options: string[]; correct: number };
export type ExamPack = { id: string; title: string; items: ExamItem[] };

export const osszefoglalo7Exam: ExamPack = {
  id: "osszefoglalo-7-exam",
  title: "Év végi szintfelmérő – 7. osztály (100 kérdésből 10 random)",
  items: [
    // Felfedezések, reformáció, reneszánsz
    { question: "Mikor fedezte fel Kolumbusz Amerikát?", options: ["1453", "1492", "1517", "1526"], correct: 1 },
    { question: "Ki indította el a reformációt 1517-ben?", options: ["Kálvin János", "VIII. Henrik", "Luther Márton", "Zwingli"], correct: 2 },
    { question: "Melyik évben kezdte uralmát VIII. Henrik Angliában?", options: ["1509", "1517", "1526", "1541"], correct: 0 },
    { question: "Melyik város volt a reneszánsz központja Itáliában?", options: ["Milánó", "Firenze", "Róma", "Velence"], correct: 1 },
    { question: "Mikor jelent meg Luther 95 tétele?", options: ["1492", "1517", "1526", "1541"], correct: 1 },
    { question: "Ki volt a reformáció svájci alakja?", options: ["Zwingli", "Kálvin", "Luther", "Knox"], correct: 0 },
    { question: "Mit jelentett a humanizmus?", options: ["Istenközpontúság", "Emberközpontúság", "Középkori filozófia", "Harcmodor"], correct: 1 },
    { question: "Ki találta fel a könyvnyomtatást?", options: ["Gutenberg", "Kolumbusz", "Da Vinci", "Michelangelo"], correct: 0 },
    { question: "Ki volt a reneszánsz polihisztor, aki Mona Lisát festette?", options: ["Leonardo da Vinci", "Michelangelo", "Raffaello", "Tiziano"], correct: 0 },
    { question: "Mikor hódította meg az inkákat Pizarro?", options: ["1492", "1517", "1532", "1541"], correct: 2 },

    // Magyarország a török korban
    { question: "Mikor volt a mohácsi csata?", options: ["1514", "1521", "1526", "1541"], correct: 2 },
    { question: "Melyik évben foglalták el a törökök Budát?", options: ["1521", "1526", "1541", "1566"], correct: 2 },
    { question: "Melyik három részre szakadt Magyarország 1541 után?", options: ["Erdély, Habsburg, Hódoltság", "Erdély, Felvidék, Délvidék", "Alföld, Dunántúl, Felvidék", "Csak két rész"], correct: 0 },
    { question: "Ki volt a szigetvári hős?", options: ["Dobó István", "Zrínyi Miklós", "Kapisztrán János", "Bocskai István"], correct: 1 },
    { question: "Mikor zajlott az egri vár ostroma?", options: ["1526", "1552", "1566", "1596"], correct: 1 },
    { question: "Ki vezette a török elleni sikeres felkelést 1604–1606-ban?", options: ["Bocskai István", "Bethlen Gábor", "Rákóczi Ferenc", "Hunyadi János"], correct: 0 },
    { question: "Melyik város volt az Erdélyi Fejedelemség központja?", options: ["Kolozsvár", "Gyulafehérvár", "Nagyszeben", "Marosvásárhely"], correct: 1 },
    { question: "Ki volt az Erdélyi Fejedelemség aranykorának uralkodója?", options: ["Bethlen Gábor", "Bocskai István", "II. Rákóczi Ferenc", "Apafi Mihály"], correct: 0 },
    { question: "Mikor szabadult fel Buda a török uralom alól?", options: ["1541", "1591", "1686", "1711"], correct: 2 },
    { question: "Mi volt a török hódoltság központja?", options: ["Buda", "Pécs", "Eger", "Debrecen"], correct: 0 },

    // 17–18. század, Rákóczi, felvilágosodás
    { question: "Mikor kezdődött a Rákóczi-szabadságharc?", options: ["1701", "1703", "1705", "1711"], correct: 1 },
    { question: "Mikor ért véget a Rákóczi-szabadságharc?", options: ["1705", "1707", "1711", "1714"], correct: 2 },
    { question: "Hol kötötték meg a szabadságharcot lezáró békét?", options: ["Szatmár", "Bécs", "Pozsony", "Debrecen"], correct: 0 },
    { question: "Ki volt II. Rákóczi Ferenc fő hadvezére?", options: ["Bercsényi Miklós", "Károlyi Sándor", "Bottyán János", "Esze Tamás"], correct: 2 },
    { question: "Ki uralkodott Magyarországon a felvilágosult abszolutizmus idején?", options: ["Mária Terézia és II. József", "I. Lipót és II. Rákóczi Ferenc", "IV. Károly és Horthy", "Kossuth és Széchenyi"], correct: 0 },
    { question: "Melyik uralkodó adta ki a türelmi rendeletet?", options: ["II. József", "Mária Terézia", "I. Lipót", "IV. Károly"], correct: 0 },
    { question: "Melyik uralkodó adott ki úrbéri rendeletet?", options: ["Mária Terézia", "II. József", "I. Ferenc", "IV. Károly"], correct: 0 },
    { question: "Mikor adták ki a Ratio Educationist?", options: ["1723", "1767", "1777", "1789"], correct: 2 },
    { question: "Mit jelentett a felvilágosodás?", options: ["Értelem kultuszát", "Középkori vallásosságot", "Csak katonai reformokat", "Feudális rendszer erősítését"], correct: 0 },
    { question: "Ki írta a Himnuszt 1823-ban?", options: ["Petőfi Sándor", "Kölcsey Ferenc", "Vörösmarty Mihály", "Arany János"], correct: 1 },

    // Reformkor, 1848–49
    { question: "Ki volt a reformkor legnagyobb alakja, a 'legnagyobb magyar'?", options: ["Széchenyi István", "Kossuth Lajos", "Petőfi Sándor", "Deák Ferenc"], correct: 0 },
    { question: "Ki volt a 'turini remete'?", options: ["Kossuth Lajos", "Széchenyi István", "Deák Ferenc", "Petőfi Sándor"], correct: 0 },
    { question: "Mikor tört ki a pesti forradalom?", options: ["1848. március 15.", "1849. április 14.", "1848. április 4.", "1849. október 6."], correct: 0 },
    { question: "Mi volt a 12 pont első követelése?", options: ["Szabadsajtó", "Unió Erdéllyel", "Közös vámterület", "Általános választójog"], correct: 0 },
    { question: "Ki írta a Nemzeti dalt?", options: ["Arany János", "Petőfi Sándor", "Vörösmarty Mihály", "Kölcsey Ferenc"], correct: 1 },
    { question: "Hol vívták a tavaszi hadjárat döntő csatáját?", options: ["Világos", "Isaszeg", "Debrecen", "Szeged"], correct: 1 },
    { question: "Hol tette le a magyar hadsereg a fegyvert 1849-ben?", options: ["Világosnál", "Bécsnél", "Aradnál", "Pesten"], correct: 0 },
    { question: "Mikor végezték ki az aradi vértanúkat?", options: ["1848. március 15.", "1849. október 6.", "1849. április 14.", "1850. január 1."], correct: 1 },
    { question: "Ki volt a magyar honvédsereg főparancsnoka?", options: ["Görgei Artúr", "Klapka György", "Damjanich János", "Bem József"], correct: 0 },
    { question: "Ki volt a költő, aki a szabadságharcban is harcolt, de eltűnt Segesvárnál?", options: ["Petőfi Sándor", "Arany János", "Vörösmarty Mihály", "Kölcsey Ferenc"], correct: 0 },

    // Neoabszolutizmus, kiegyezés, dualizmus
    { question: "Melyik időszakot nevezzük Bach-korszaknak?", options: ["1849–1860", "1867–1914", "1703–1711", "1526–1541"], correct: 0 },
    { question: "Ki volt a 'haza bölcse'?", options: ["Széchenyi István", "Kossuth Lajos", "Deák Ferenc", "Rákóczi Ferenc"], correct: 2 },
    { question: "Mikor jött létre a kiegyezés?", options: ["1849", "1860", "1867", "1873"], correct: 2 },
    { question: "Mikor egyesült Buda, Pest és Óbuda?", options: ["1848", "1867", "1873", "1896"], correct: 2 },
    { question: "Melyik évben tartották a millenniumi ünnepségeket?", options: ["1867", "1896", "1900", "1914"], correct: 1 },
    { question: "Ki volt Tisza Kálmán?", options: ["Miniszterelnök", "Író", "Zenész", "Fizikus"], correct: 0 },
    { question: "Mikor adták át a budapesti földalatti vasutat?", options: ["1884", "1896", "1905", "1914"], correct: 1 },
    { question: "Mit jelentett a polgárosodás?", options: ["Középosztály megerősödését", "Jobbágyság visszaállítását", "Nemesek eltűnését", "Kizárólag parasztság uralmát"], correct: 0 },
    { question: "Ki volt Mikszáth Kálmán?", options: ["Író", "Politikus", "Zeneszerző", "Fizikus"], correct: 0 },
    { question: "Ki volt Liszt Ferenc?", options: ["Zongoraművész és zeneszerző", "Író", "Politikus", "Tábornok"], correct: 0 },

    // Első világháború
    { question: "Mikor történt a szarajevói merénylet?", options: ["1914. június 28.", "1914. július 28.", "1918. november 3.", "1919. március 21."], correct: 0 },
    { question: "Kit gyilkoltak meg Szarajevóban?", options: ["Ferenc Józsefet", "Ferenc Ferdinándot", "IV. Károlyt", "Kossuth Ferencet"], correct: 1 },
    { question: "Mikor üzent hadat a Monarchia Szerbiának?", options: ["1914. június 28.", "1914. július 28.", "1918. november 11.", "1919. augusztus"], correct: 1 },
    { question: "Melyik fronton vívták a verduni csatát?", options: ["Nyugati front", "Keleti front", "Olasz front", "Afrikai front"], correct: 0 },
    { question: "Mikor omlott össze a Monarchia?", options: ["1914", "1917", "1918 őszén", "1919 nyarán"], correct: 2 },
    { question: "Melyik forradalom győzött Magyarországon 1918 őszén?", options: ["Őszirózsás forradalom", "Tanácsköztársaság", "Kiegyezés", "Parasztfelkelés"], correct: 0 },
    { question: "Ki vezette az őszirózsás forradalmat?", options: ["Károlyi Mihály", "Kun Béla", "Tisza István", "Horthy Miklós"], correct: 0 },
    { question: "Mikor kiáltották ki a Tanácsköztársaságot?", options: ["1918. november 3.", "1919. március 21.", "1914. június 28.", "1919. augusztus"], correct: 1 },
    { question: "Ki vezette a Tanácsköztársaságot?", options: ["Kun Béla", "Károlyi Mihály", "Horthy Miklós", "IV. Károly"], correct: 0 },
    { question: "Melyik ország csapatai vonultak be Budapestre 1919-ben?", options: ["Románia", "Németország", "Csehszlovákia", "Olaszország"], correct: 0 },

    // Trianon és Horthy-korszak kezdete
    { question: "Mikor írták alá a trianoni békeszerződést?", options: ["1918. november 3.", "1920. június 4.", "1919. március 21.", "1927. január 1."], correct: 1 },
    { question: "Hol írták alá a trianoni békét?", options: ["Trianon palota, Versailles mellett", "Budapest", "Genf", "Bécs"], correct: 0 },
    { question: "Mekkora területet veszített Magyarország a trianoni béke után?", options: ["Kétharmadát", "Felét", "Egyharmadát", "Semennyit"], correct: 0 },
    { question: "Mikor vonult be Horthy Miklós Budapestre?", options: ["1919 novemberében", "1920 júniusában", "1918 októberében", "1927 januárjában"], correct: 0 },
    { question: "Mikor választották Horthyt kormányzóvá?", options: ["1920", "1919", "1921", "1927"], correct: 0 },
    { question: "Mi volt Magyarország államformája 1920 után?", options: ["Királyság király nélkül", "Köztársaság", "Császárság", "Diktatúra"], correct: 0 },
    { question: "Mi volt a fehérterror?", options: ["Politikai megtorlás a baloldal ellen", "Gazdasági reform", "Kulturális mozgalom", "Királyi ünnepség"], correct: 0 },
    { question: "Kihez köthető a konszolidáció a Horthy-korszakban?", options: ["Bethlen István", "Kun Béla", "Károlyi Mihály", "Szálasi Ferenc"], correct: 0 },
    { question: "Mikor vezették be a pengőt?", options: ["1927", "1920", "1921", "1929"], correct: 0 },
    { question: "Melyik évben csatlakozott Magyarország a Népszövetséghez?", options: ["1922", "1920", "1921", "1927"], correct: 0 },
  ],
};
