// src/data/quizzes.ts

export type TFQ = { type: "tf"; text: string; answer: boolean; hint?: string };
export type MCQ = { type: "mc"; text: string; options: string[]; correctIndex: number; hint?: string };
export type QuizQuestion = TFQ | MCQ;
export type Quiz = { title: string; questions: QuizQuestion[] };

export const makeTF = (text: string, answer: boolean, hint?: string): TFQ =>
  ({ type: "tf", text, answer, hint });

export const makeMC = (text: string, options: string[], correctIndex: number, hint?: string): MCQ =>
  ({ type: "mc", text, options, correctIndex, hint });

const quizzes: Record<string, Quiz> = {
  "quiz-egyszeru-osszetett": {
  title: "Egyszerű és összetett mondat",
  questions: [
    makeTF("Az egyszerű mondat egyetlen állítást fejez ki.", true),
    makeTF("Az egyszerű mondatban mindig csak egy állítmány lehet.", false, "Lehet összetett állítmány: pl. 'lesz + valami'."),
    makeMC("Melyik egyszerű mondat?", ["A fiúk fociznak.", "Amikor esik, bent maradunk."], 0),
    makeMC("Melyik összetett?", ["Olvasok.", "Tudom, hogy jön."], 1),
    makeTF("Az összetett mondat két vagy több tagmondatból áll.", true),

    makeMC("Melyik alárendelő összetett?", ["Elmentem, és vettem kenyeret.", "Azt mondta, hogy késik."], 1),
    makeMC("Melyik mellérendelő összetett?", ["Azért jött, mert hívta anya.", "Fáradt volt, de befejezte."], 1),
    makeTF("A mellérendelő tagmondatok közt gyakori az 'és', 'de', 'vagy'.", true),
    makeTF("Az alárendelésben a mellékmondat a főmondat valamely mondatrészét fejti ki.", true),
    makeMC("Melyik főmondat + tárgyi mellékmondat?", ["Azt szeretném, hogy gyere.", "Ha esik, elmarad."], 0),

    makeMC("Melyik időhatározói mellékmondat?", ["Amikor hazaért, vacsorázott.", "A ház, amelyik sárga."], 0),
    makeTF("A kötőszó mindig jelzi az alárendelést.", false, "Van kötőszó nélküli alárendelés is: vonatkozó névmás, kötőszó-elhagyás."),
    makeMC("Mellérendelés jele lehet:", ["vessző + kötőszó (és, de)", "csak hogy"], 0),
    makeTF("A tagmondatokat általában vessző választja el.", true),
    makeMC("Melyik okhatározói mellékmondat?", ["Azért siet, mert elkésik.", "Olyan szép, hogy…"], 0),

    makeMC("Hasonlítsd: „Olyan fáradt, hogy elaludt.” – a mellékmondat fajtája:", ["következményes", "okhatározói"], 0),
    makeTF("Az összetett mondatban lehet több mellékmondat is.", true),
    makeMC("Melyik összetett szintagma láncolt alárendelés?", ["Tudom, hogy megígérte, hogy jön.", "Fáradt volt, de jött."], 0),
    makeTF("A 'hogy' többnyire tartalmas (kötő)szó alárendelésben.", true),
    makeMC("„Ha süt a nap, elmegyünk.” — a mellékmondat:", ["feltételes", "időhatározói"], 0),

    makeMC("„Bár esett, elindult.” — a mellékmondat:", ["engedő", "ellentétes mellérendelés"], 0),
    makeTF("A 'mint' is bevezethet mellékmondatot (hasonlító).", true),
    makeMC("„A fiú, aki ott áll, a testvérem.” — a mellékmondat:", ["vonatkozó", "okhatározói"], 0),
    makeTF("A vonatkozó névmás (aki, amely) jelzi az alárendelést.", true),
    makeMC("„Nemcsak eljött, hanem segített is.” — ez:", ["mellérendelés", "alárendelés"], 0),

    makeTF("A 'hogy' előtt gyakran vessző áll.", true),
    makeMC("„Azért tanul, hogy sikeres legyen.” — ez:", ["célhatározói", "okhatározói"], 0),
    makeTF("Az összetett mondat tagmondatai önálló mondatokra is bonthatók.", false),
    makeMC("„Mert fáradt, lefekszik.” — helyes-e a vessző?", ["igen", "nem"], 0),
    makeMC("„Lefekszik mert fáradt.” — helyes-e a vessző?", ["kell vessző", "nem kell"], 0),

    makeTF("A mellérendelő tagmondatok között nem mindig kötelező a kötőszó.", true),
    makeMC("„Jött, látott, győzött.” — ez:", ["mellérendelés", "alárendelés"], 0),
    makeTF("A 'vagy-vagy' alternatív mellérendelést jelez.", true),
    makeMC("„Ha hívsz, megyek.” — a főmondat:", ["ha hívsz", "megyek"], 1),
    makeTF("A 'hogyha' ugyanazt a szerepet látja el, mint a 'ha'.", true),

    makeMC("„Add vissza, különben baj lesz.” — viszony:", ["következmény/figyelmeztetés", "ellentét"], 0),
    makeTF("Az összetett mondatban lehet közbevetés is.", true),
    makeMC("„Úgy dolgozott, mintha robot lenne.” — mellékmondat:", ["hasonlító", "okhatározói"], 0),
    makeTF("A 'míg' idő- vagy ellentétes viszonyt is jelezhet.", true),
    makeMC("„Elment, de visszajön.” — ez:", ["ellentétes mellérendelés", "okhatározói alárendelés"], 0),

    makeTF("Az 'ahogy', 'amikor', 'amint' gyakori idő- és módjelölők.", true),
    makeMC("„Annyira fázott, hogy reszketett.” — viszony:", ["következményes", "okhatározói"], 0),
    makeTF("A 'mint' hasonlító kötőszó után gyakran nincs vessző, ha szoros a kapcsolat.", true),
    makeMC("„Noha esett, kiment.” — mellékmondat:", ["engedő", "okhatározói"], 0),
    makeTF("A 'mert' okot fejez ki, a 'hogy' cél/állítást/kiegészítést is.", true),

    makeMC("„Olyan gyors volt, hogy utolérhetetlen.” — mellékmondat:", ["következményes", "hasonlító"], 0),
    makeTF("A vonatkozó névmás gyakran egyeztet az előzményével (számban, nemben).", true),
    makeMC("„Azt hallottam, amit te.” — a második tagmondat:", ["vonatkozói", "tárgyi"], 0),
    makeTF("Az összetett mondatok helyes központozása jelentéskülönbséget okozhat.", true),
    makeMC("„Elment és vett kenyeret.” — helyes-e a vessző kihagyása?", ["igen (két ige alanyazonosság)", "nem"], 0)
  ]
},

"quiz-mondatelemek": {
  title: "Mondatelemek és bővítmények",
  questions: [
    makeTF("Az alany kérdése: ki? mi?", true),
    makeTF("Az állítmány lehet igei, névszói, névszói-igei.", true),
    makeMC("Melyik az alany? „A lány énekel.”", ["A lány", "énekel"], 0),
    makeMC("„A film érdekes.” — az állítmány típusa:", ["igei", "névszói", "névszói-igei"], 1),
    makeTF("A tárgy kérdése: kit? mit?", true),

    makeMC("Melyik a tárgy? „Olvasok egy könyvet.”", ["Olvasok", "egy könyvet"], 1),
    makeMC("„A fiú lett a győztes.” — az állítmány típusa:", ["igei", "névszói", "névszói-igei"], 2),
    makeTF("A határozó körülményt fejez ki: hely, idő, mód, ok, cél…", true),
    makeMC("Melyik időhatározó? „Holnap találkozunk.”", ["Holnap", "találkozunk"], 0),
    makeMC("Melyik helyhatározó? „A parkban futunk.”", ["A parkban", "futunk"], 0),

    makeTF("A jelző a főnév tulajdonságát jelöli (milyen? melyik? hány?).", true),
    makeMC("Melyik minőségjelző? „kék kabát”", ["kék", "kabát"], 0),
    makeMC("Melyik mennyiségjelző? „három alma”", ["három", "alma"], 0),
    makeTF("A birtokos jelző kérdése: kinek a/minek a…?", true),
    makeMC("Melyik birtokos jelző? „a lány táskája”", ["lány", "táskája", "lány táskája"], 0),

    makeTF("Az alany nem mindig főnév: lehet névmás is.", true),
    makeMC("„Ő fut.” — mi az alany?", ["Ő", "fut"], 0),
    makeTF("Az állítmány lehet segédigével kifejezett: fog menni.", true),
    makeMC("„Gyorsan fut.” — mi a 'gyorsan'?", ["módhatározó", "minőségjelző"], 0),
    makeMC("„Az asztal alatt van.” — 'az asztal alatt' szerepe:", ["helyhatározó", "tárgy"], 0),

    makeTF("A jelzők egyeztethetők számban és esetben a jelzett szóval.", true),
    makeMC("„a tanárnő okos diákjai” — hány jelző van?", ["1", "2"], 1),
    makeTF("Az időhatározó kérdése: mikor? mióta? meddig? stb.", true),
    makeMC("„Reggel óta esik.” — 'reggel óta' típusa:", ["időhatározó", "okhatározó"], 0),
    makeMC("„A lány a kertben kutyát sétáltat.” — melyik a tárgy?", ["A lány", "a kertben", "kutyát"], 2),

    makeTF("Az állítmányi jelző (állapothatározó) igei-névszói kapcsolatokban jelenhet meg.", true),
    makeMC("„Vizesen érkezett.” — 'vizesen' szerepe:", ["módhatározó/állapothatározó", "minőségjelző"], 0),
    makeTF("A részeshatározó kérdése: kinek? minek?", true),
    makeMC("„Adtam a barátnőmnek egy könyvet.” — 'barátnőmnek' szerepe:", ["részeshatározó", "tárgy"], 0),
    makeMC("„Megállt a ház előtt.” — 'a ház előtt' szerepe:", ["helyhatározó", "tárgy"], 0),

    makeTF("Az okhatározó kérdése: miért? mi okból?", true),
    makeMC("„Fázik, mert hideg van.” — 'mert hideg van' szerepe:", ["okhatározói mellékmondat", "tárgyi mell.", "jelzői mell."], 0),
    makeTF("A célhatározó kérdése: mi célból? minek a végett?", true),
    makeMC("„Azért jött, hogy segítsen.” — 'hogy segítsen' szerepe:", ["célhatározó", "tárgyi"], 0),
    makeMC("„A könyv, amelyet vettem.” — 'amelyet vettem' szerepe:", ["jelzői mellékmondat", "tárgyi mellékmondat"], 0),

    makeTF("Az alany és az állítmány egyeztetése kötelező számban/személyben.", true),
    makeMC("„A gyerekek olvas.” — helyes?", ["igen", "nem"], 1),
    makeTF("A határozók lehetnek összetettek is (több szó).", true),
    makeMC("„Két óránként edz.” — 'két óránként' szerepe:", ["időhatározó", "módhatározó"], 0),
    makeMC("„A ház mögötti parkban.” — 'mögötti' szerepe:", ["jelző", "határozó"], 0),

    makeTF("Az 'is' fókuszszó nyomatékot adhat egy mondatrésznek.", true),
    makeMC("„Csak Péter jött el.” — a fókuszban:", ["Péter", "csak"], 0),
    makeTF("Az állítmányi névszó esetraggal egyeztethet: 'Péter tanár lett'.", true),
    makeMC("„A fiú anyának virágot vett.” — a mondatrészek sorrendjében mi kap hangsúlyt?", ["ige előtt álló fókusz", "mindegyik azonos"], 0),
    makeTF("A jelző többnyire a főnév előtt áll magyarban.", true),

    makeMC("„Gyorsan és ügyesen futott.” — ez:", ["halmozott módhatározó", "kettős állítmány"], 0),
    makeTF("A tárgyi mellékmondat gyakran 'hogy' kötőszóval kezdődik.", true),
    makeMC("„Arra kérem, hogy segíts.” — 'hogy segíts' szerepe:", ["tárgyi mellékmondat", "okhatározó"], 0),
    makeTF("Az alany lehet rejtett: „Esik.”", true),
    makeMC("„A kutyának adtam enni.” — 'a kutyának' szerepe:", ["részeshatározó", "birtokos jelző"], 0)
  ]
},

  // 3) Szófajok
"quiz-szofajok": {
  title: "Szófajok rendszere",
  questions: [
    makeMC("Melyik a főnév?", ["asztal", "szép", "gyorsan", "fut"], 0),
    makeMC("Melyik a melléknév?", ["kék", "asztal", "fut", "holnap"], 0),
    makeMC("Melyik az ige?", ["asztal", "szalad", "szép", "holnap"], 1),
    makeTF("A számnév mennyiséget vagy sorrendet jelöl.", true),
    makeTF("A névmás önálló szóosztály.", true),

    makeMC("„én, te, ő” szófaja:", ["személyes névmás", "számnév", "melléknév"], 0),
    makeMC("„három, öt, tíz” szófaja:", ["számnév", "főnév", "melléknév"], 0),
    makeMC("„kékebb” szófaja:", ["melléknév", "fokozott számnév", "határozószó"], 0),
    makeTF("Az igekötő módosíthatja az ige jelentését.", true),
    makeMC("„fel” a 'felmenni' szóban szófaja:", ["igekötő", "határozószó"], 0),

    makeTF("A határozószó körülményt fejez ki.", true),
    makeMC("„nagyon” szófaja:", ["határozószó", "melléknév"], 0),
    makeMC("„alatt” szófaja:", ["névutó", "kötőszó", "névelő"], 0),
    makeTF("A kötőszó szavakat és mondatokat kapcsolhat.", true),
    makeMC("„és” szófaja:", ["kötőszó", "névutó"], 0),

    makeTF("A névelő határozott vagy határozatlan lehet.", true),
    makeMC("„a, az” szófaja:", ["határozott névelő", "mutató névmás"], 0),
    makeMC("„egy” szófaja lehet:", ["névelő", "számnév"], 1),
    makeMC("„valaki” szófaja:", ["határozatlan névmás", "személyes névmás"], 0),
    makeMC("„ez, az” szófaja:", ["mutató névmás", "személyes névmás"], 0),

    makeTF("A kérdő névmás kérdést tesz fel.", true),
    makeMC("„ki, mi, melyik” szófaja:", ["kérdő névmás", "határozószó"], 0),
    makeMC("„hol, mikor” szófaja:", ["kérdő határozószó", "kötőszó"], 0),
    makeTF("Az indulatszó érzelmet fejez ki.", true),
    makeMC("„jaj, hű, ejha” szófaja:", ["indulatszó", "kötőszó"], 0),

    makeTF("A módosítószók a mondat értelmét árnyalják.", true),
    makeMC("„talán” szófaja:", ["módosítószó/partikula", "határozószó"], 0),
    makeMC("„alig” szófaja:", ["határozószó", "módosítószó"], 0),
    makeTF("A főnév lehet konkrét vagy elvont.", true),
    makeMC("„boldogság” szófaja:", ["főnév", "melléknév"], 0),

    makeMC("„piros” szófaja:", ["melléknév", "főnév"], 0),
    makeMC("„gyorsan” szófaja:", ["határozószó", "melléknév"], 0),
    makeMC("„asztalok” szófaja:", ["főnév", "számnév"], 0),
    makeMC("„ötödik” szófaja:", ["sorszámnév", "tőszámnév"], 0),
    makeMC("„fél” szófaja:", ["törtszámnév", "névelő"], 0),

    makeTF("Az igének van személye, száma, ideje, módja.", true),
    makeMC("„futott” szófaja:", ["ige múlt időben", "melléknév"], 0),
    makeMC("„szebb” szófaja:", ["fokozott melléknév", "határozószó"], 0),
    makeTF("A névutó mindig főnévhez vagy névmáshoz kapcsolódik.", true),
    makeMC("„mögött” szófaja:", ["névutó", "határozószó"], 0),

    makeTF("A kötőszók önálló mondatrészek nem lehetnek.", true),
    makeMC("„mert, hogy, bár” szófaja:", ["kötőszó", "határozószó"], 0),
    makeMC("„sem, se” szófaja:", ["kötőszó/partikula", "névelő"], 0),
    makeTF("A névelő nem fokozható.", true),
    makeMC("„mindkettő” szófaja:", ["számnév", "mutató névmás"], 0),

    makeTF("A szleng szavak nem alkotnak külön szófajt.", true),
    makeMC("„fater” szófaja:", ["főnév (szleng)", "melléknév"], 0),
    makeMC("„noha” szófaja:", ["kötőszó", "határozószó"], 0),
    makeMC("„soha” szófaja:", ["határozószó", "névmás"], 0),
    makeTF("A névmás helyettesíthet főnevet, melléknevet, számnevet is.", true)
  ]
},

  // 4) Mondatfajták
"quiz-mondatfajtak": {
  title: "Mondatfajták",
  questions: [
    makeMC("„Holnap találkozunk.” – milyen mondat?", ["kijelentő", "kérdő", "felszólító"], 0),
    makeMC("„Szereted a fagyit?” – milyen mondat?", ["kérdő", "felszólító"], 0),
    makeMC("„Nyisd ki az ablakot!” – milyen mondat?", ["felszólító", "kijelentő"], 0),
    makeMC("„De jó, hogy itt vagy!” – milyen mondat?", ["felkiáltó", "kijelentő"], 0),
    makeMC("„Bárcsak nyár lenne már!” – milyen mondat?", ["óhajtó", "felszólító"], 0),

    makeTF("A kijelentő mondat tényt közöl.", true),
    makeTF("A kérdő mondat mindig kérdőszót tartalmaz.", false, "Lehet eldöntendő: Szereted?"),
    makeTF("A felszólító mondat cselekvésre késztet.", true),
    makeTF("Az óhajtó mondat kívánságot, vágyat fejez ki.", true),
    makeTF("A felkiáltó mondat mindig dühöt fejez ki.", false, "Lehet öröm is."),

    makeMC("„Ugye jön holnap?” – milyen mondat?", ["kérdő", "kijelentő"], 0),
    makeMC("„Menjünk moziba!” – milyen mondat?", ["felszólító", "óhajtó"], 0),
    makeMC("„Milyen szép ez a táj!” – milyen mondat?", ["felkiáltó", "kérdő"], 0),
    makeMC("„Lehet, hogy esni fog.” – milyen mondat?", ["kijelentő", "kérdő"], 0),
    makeMC("„Ne menj el!” – milyen mondat?", ["felszólító (tagadó)", "kijelentő"], 0),

    makeTF("A kérdő mondat végén kérdőjel áll.", true),
    makeTF("A kijelentő mondat végén felkiáltójel áll.", false),
    makeTF("A felszólító mondatban gyakori a 2. személyű igealak.", true),
    makeTF("Az óhajtó mondat gyakran tartalmaz 'bárcsak' szót.", true),
    makeTF("A felkiáltó mondat mindig felkiáltójellel zárul.", false, "Stilárisan néha pont is állhat."),

    makeMC("„Csukd be az ajtót, kérlek.” – milyen mondat?", ["felszólító", "óhajtó"], 0),
    makeMC("„Jaj, de félek!” – milyen mondat?", ["felkiáltó", "kijelentő"], 0),
    makeMC("„Megjött a postás.” – milyen mondat?", ["kijelentő", "kérdő"], 0),
    makeMC("„Kérsz teát?” – milyen mondat?", ["kérdő", "felszólító"], 0),
    makeMC("„Hadd menjek én is!” – milyen mondat?", ["felszólító", "óhajtó"], 0),

    makeTF("Az óhajtó mondat vágyat fejez ki.", true),
    makeTF("A kérdő mondat lehet eldöntendő és kiegészítendő.", true),
    makeTF("A kijelentő mondat lehet állító vagy tagadó.", true),
    makeTF("A felkiáltó mondat gyakran indulatszót tartalmaz.", true),
    makeTF("A felszólító mondat udvarias alakja: Kérlek, …", true),

    makeMC("„Miért késtél el?” – milyen mondat?", ["kérdő", "felkiáltó"], 0),
    makeMC("„De gyönyörű ruha!” – milyen mondat?", ["felkiáltó", "óhajtó"], 0),
    makeMC("„Szeretném, ha sikerülne.” – milyen mondat?", ["óhajtó", "kijelentő"], 0),
    makeMC("„Ne csináld ezt többé!” – milyen mondat?", ["felszólító", "kérdő"], 0),
    makeMC("„Talán eljön.” – milyen mondat?", ["kijelentő", "óhajtó"], 0)
  ]
},

  // 5) Helyesírás I.
  "quiz-helyesiras-1": {
  title: "Helyesírás I. – egybe/külön",
  questions: [
    makeMC("Melyik a helyes? „különböző” vagy „különb öző”", ["különböző", "külön b öző"], 0),
    makeMC("Melyik a helyes? „nagyrészt” vagy „nagy részt”", ["nagyrészt", "nagy részt"], 0),
    makeMC("Melyik a helyes? „együtt” vagy „egy üt”", ["együtt", "egy üt"], 0),
    makeMC("Melyik a helyes? „sokszor” vagy „sok szor”", ["sokszor", "sok szor"], 0),
    makeMC("Melyik a helyes? „elvállal” vagy „el vállal”", ["elvállal", "el vállal"], 0),

    makeTF("Az igekötő és az ige többnyire egybeírandó: 'megír', 'felmegy'.", true),
    makeTF("Ha az igekötő és az ige közé szó ékelődik, különírjuk.", true),
    makeMC("„megírja” helyesen:", ["megírja", "meg írja"], 0),
    makeMC("„fel akar menni” helyesen:", ["felakar menni", "fel akar menni"], 1),
    makeMC("„összeállít” helyesen:", ["össze állít", "összeállít"], 1),

    makeMC("Melyik a helyes? „napközben” vagy „nap közben”", ["napközben", "nap közben"], 1),
    makeMC("Melyik a helyes? „éjfélkor” vagy „éjfél kor”", ["éjfélkor", "éjfél kor"], 0),
    makeMC("Melyik a helyes? „reggelente” vagy „reggel ente”", ["reggelente", "reggel ente"], 0),
    makeMC("Melyik a helyes? „kétszer” vagy „két szer”", ["kétszer", "két szer"], 0),
    makeMC("Melyik a helyes? „egyszerre” vagy „egy szerre”", ["egyszerre", "egy szerre"], 0),

    makeTF("A szám + -szor/-szer/-ször egybeírandó.", true),
    makeMC("„háromszor” helyesen:", ["három szor", "háromszor"], 1),
    makeMC("„kétszer” helyesen:", ["kétszer", "két szer"], 0),
    makeMC("„hússzor” helyesen:", ["hússzor", "húsz szor"], 0),
    makeMC("„ötvenszer” helyesen:", ["ötven szer", "ötvenszer"], 1),

    makeMC("Melyik a helyes? „holnapután” vagy „holnap után”", ["holnapután", "holnap után"], 1),
    makeMC("Melyik a helyes? „mindegy” vagy „mind egy”", ["mindegy", "mind egy"], 0),
    makeMC("Melyik a helyes? „bármi” vagy „bár mi”", ["bármi", "bár mi"], 0),
    makeMC("Melyik a helyes? „valami” vagy „val ami”", ["valami", "val ami"], 0),
    makeMC("Melyik a helyes? „akárki” vagy „akár ki”", ["akárki", "akár ki"], 0),

    makeTF("A bár-, vala-, akár- kezdetű összetett névmásokat egybeírjuk.", true),
    makeMC("„akárhol” helyesen:", ["akár hol", "akárhol"], 1),
    makeMC("„valahol” helyesen:", ["valahol", "vala hol"], 0),
    makeMC("„bárhol” helyesen:", ["bár hol", "bárhol"], 1),
    makeMC("„akármikor” helyesen:", ["akár mikor", "akármikor"], 1),

    makeMC("Melyik a helyes? „egymás” vagy „egy más”", ["egymás", "egy más"], 0),
    makeMC("Melyik a helyes? „magától” vagy „maga tól”", ["magától", "maga tól"], 0),
    makeMC("Melyik a helyes? „önálló” vagy „ön álló”", ["önálló", "ön álló"], 0),
    makeMC("Melyik a helyes? „mindenhol” vagy „minden hol”", ["mindenhol", "minden hol"], 0),
    makeMC("Melyik a helyes? „senki” vagy „sen ki”", ["senki", "sen ki"], 0),

    makeTF("A tagadó névmások is egybeírandók: senki, semmi, sehogy.", true),
    makeMC("„semmikor” helyesen:", ["semmikor", "sem mikor"], 0),
    makeMC("„sehogyan” helyesen:", ["sehogyan", "se hogyan"], 0),
    makeMC("„semennyire” helyesen:", ["semennyire", "se mennyire"], 0),
    makeMC("„semmilyen” helyesen:", ["semmilyen", "sem milyen"], 0),

    makeMC("Melyik a helyes? „azonban” vagy „azon ban”", ["azonban", "azon ban"], 0),
    makeMC("Melyik a helyes? „ezért” vagy „ez ért”", ["ezért", "ez ért"], 0),
    makeMC("Melyik a helyes? „mintha” vagy „mint ha”", ["mintha", "mint ha"], 0),
    makeMC("Melyik a helyes? „minthogy” vagy „mint hogy”", ["minthogy", "mint hogy"], 0),
    makeMC("Melyik a helyes? „mialatt” vagy „mi alatt”", ["mialatt", "mi alatt"], 0)
  ]
},

  // 6) Helyesírás II.
  "quiz-helyesiras-2": {
  title: "Helyesírás II. – központozás",
  questions: [
    makeTF("A kijelentő mondat végén pont áll.", true),
    makeTF("A kérdő mondat végén mindig kérdőjel áll.", true),
    makeTF("A felkiáltó mondat végén mindig felkiáltójel áll.", true),
    makeMC("„Megjött?” – milyen írásjel van a végén?", ["kérdőjel", "felkiáltójel"], 0),
    makeMC("„De szép!” – milyen írásjel van a végén?", ["felkiáltójel", "pont"], 0),

    makeTF("Az idézőjelet szó szerinti idézetnél használjuk.", true),
    makeMC("Melyik a helyes? „– Gyere ide! – szólt anya.” vagy „- Gyere ide! - szólt anya.”",
      ["– Gyere ide! – szólt anya.", "- Gyere ide! - szólt anya."], 0),
    makeTF("A gondolatjelet párbeszédben használjuk a megszólalás előtt.", true),
    makeMC("Melyik a helyes? „Párizs – a fény városa.”", ["Párizs – a fény városa.", "Párizs- a fény városa."], 0),
    makeMC("„Alma, körte, szilva.” – milyen írásjel van a végén?", ["pont", "felkiáltójel"], 0),

    makeTF("A felsorolásban az elemeket vessző választja el.", true),
    makeMC("„Alma körte barack” helyesen:", ["Alma körte barack", "Alma, körte, barack"], 1),
    makeTF("A kötőszó előtti vessző sokszor elmarad (és, s).", true),
    makeMC("„Elment, és vett kenyeret.” – helyes-e a vessző?", ["igen", "nem"], 0),
    makeMC("„Szeretem, mert finom.” – helyes-e a vessző?", ["igen", "nem"], 0),

    makeTF("Az 'mert' kötőszó előtt többnyire vessző áll.", true),
    makeTF("Az 'hogy' kötőszó előtt mindig vessző áll.", false),
    makeMC("„Tudom hogy jössz.” – kell vessző?", ["igen", "nem"], 0),
    makeMC("„Tudom, hogy jössz.” – helyes?", ["igen", "nem"], 0),
    makeTF("Az 'és' előtt általában nem kell vessző.", true),

    makeMC("„Süt a nap és fúj a szél.” – helyes-e a vessző kihagyása?", ["igen", "nem"], 0),
    makeMC("„Süt a nap, és fúj a szél.” – helyes-e a vessző használata?", ["igen", "nem"], 0),
    makeTF("Az ellentétes kötőszavak előtt mindig vessző van (de, azonban).", true),
    makeMC("„Nem jött el, de írt.” – helyes-e a vessző?", ["igen", "nem"], 0),
    makeMC("„Nem jött el de írt.” – helyes?", ["igen", "nem"], 1),

    makeTF("Az időhatározói mellékmondat előtt mindig vessző van.", true),
    makeMC("„Amikor jön, indulunk.” – helyes?", ["igen", "nem"], 0),
    makeMC("„Amikor jön indulunk.” – helyes?", ["igen", "nem"], 1),
    makeTF("A tagmondatokat általában vessző választja el.", true),
    makeMC("„Elment hogy tanuljon.” – helyes?", ["igen", "nem"], 1),

    makeTF("A 'bár' kötőszó előtt vessző áll.", true),
    makeMC("„Bár esik, elmegyek.” – helyes?", ["igen", "nem"], 0),
    makeMC("„Bár esik elmegyek.” – helyes?", ["igen", "nem"], 1),
    makeMC("„Megjött!” – milyen írásjel a végén?", ["felkiáltójel", "pont"], 0),
    makeMC("„Elment.” – milyen írásjel a végén?", ["pont", "kérdőjel"], 0),

    makeTF("Az írásjelek segítik a szöveg tagolását.", true),
    makeTF("A kettőspont bevezetheti a felsorolást.", true),
    makeMC("„Három gyümölcsöt vettem: almát, körtét, barackot.” – helyes?", ["igen", "nem"], 0),
    makeMC("„Három gyümölcsöt vettem; almát, körtét, barackot.” – helyes?", ["igen", "nem"], 1),
    makeTF("A pontosvessző gyengébb határ, mint a pont.", true),

    makeMC("„Mentem volna, ha hívsz.” – kell vessző?", ["igen", "nem"], 0),
    makeMC("„Mentem volna ha hívsz.” – helyes?", ["igen", "nem"], 1),
    makeMC("„Látom, amit írsz.” – helyes?", ["igen", "nem"], 0),
    makeMC("„Látom amit írsz.” – helyes?", ["igen", "nem"], 1),
    makeTF("Az írásjelek jelentéskülönbséget okozhatnak.", true)
  ]
},

  // 7) Szóelemek és toldalékolás
  "quiz-szotagolas": {
  title: "Szóelemek és toldalékolás",
  questions: [
    makeTF("A szóelemek: szótő és toldalékok (képző, jel, rag).", true),
    makeTF("A képző új szót hozhat létre vagy új jelentést ad.", true),
    makeTF("A jel a szó nyelvtani viszonyait jelöli (pl. többes jel).", true),
    makeTF("A rag mondatrészi/nyelvtani viszonyt jelez (pl. -ban, -nak).", true),
    makeTF("A szótő mindig változatlan alakban marad.", false, "Tőt vált: pl. kéz→kez-et, ház→ház-ak."),

    makeMC("Melyik KÉPZŐ?", ["-ság", "-ban", "-k", "-nak"], 0),
    makeMC("Melyik JEL?", ["-ban", "-bb", "-ság", "-t"], 1),
    makeMC("Melyik RAG?", ["-ban", "-ság", "-bb", "-s"], 0),
    makeMC("„szép+ség” – a „-ség”:", ["képző", "jel", "rag"], 0),
    makeMC("„kert+ben” – a „-ben”:", ["képző", "jel", "rag"], 2),

    makeTF("A többesjel: -k (házak, könyvek).", true),
    makeMC("„fiú+k” – a „-k”:", ["képző", "jel (többes)", "rag"], 1),
    makeMC("„fiú+kat” – a „-t”:", ["tárgyrag", "többesjel", "képző"], 0),
    makeMC("„három+szor” – a „-szor”:", ["képző", "rag", "jel"], 1),
    makeTF("Az -ban/-ben belső helyhatározó rag.", true),

    makeMC("„magyar+os+an” – a „-osan” összessége:", ["két jel", "képző + módhatározói képző", "két rag"], 1),
    makeMC("„szépen” – a „-en”:", ["jel", "rag", "képző (határozósító)"], 2),
    makeTF("A főnévképzők gyakoriak: -ság/-ség, -ás/-és, -at/-et.", true),
    makeTF("Az igeképzők közül az -ít műveltető jelentést is adhat.", true),
    makeMC("„fehér+íti” – a „-ít”:", ["képző", "jel", "rag"], 0),

    makeMC("„tanul+ás” – „-ás”:", ["főnévképző", "jel", "rag"], 0),
    makeMC("„nyit+va” – a „-va/-ve”:", ["igei igenévképző", "rag", "jel"], 0),
    makeMC("„olvas+ni” – a „-ni”:", ["főnévi igenévképző", "rag", "jel"], 0),
    makeTF("A melléknévképző egy lehet: -s, -i (pl. piros, nyári).", true),
    makeMC("„Balaton+i” – az „-i”:", ["képző (melléknévképző)", "rag", "jel"], 0),

    makeTF("A „-bb” fokjelet mellékneveknél használjuk (szebb).", true),
    makeMC("„leg+szebb” – a „leg-”:", ["pragmatikai elem", "felsőfok jele", "képző"], 1),
    makeMC("„szép+ebb” – „-ebb”:", ["rag", "fokjel", "képző"], 1),
    makeMC("„leg+szebb+ek+et” – a „-ek” és „-et”:", ["jel + rag", "két jel", "két rag"], 0),
    makeTF("A toldalékok sorrendje általában: képző–jel–rag.", true),

    makeMC("„tavasz+i” – az „-i”:", ["helyhatározói rag", "melléknévképző", "többesjel"], 1),
    makeMC("„csinos+ka” – a „-ka”:", ["képző (kicsinyítő)", "jel", "rag"], 0),
    makeTF("A kicsinyítőképzők: -ka/-ke, -cska/-cske, -ka/-ké (tájszó).", true),
    makeMC("„kör+te+fa” – a „körtefa”:", ["szóösszetétel", "toldalékolás", "ragos alak"], 0),
    makeTF("Az összetett szavak morfémahatárait ismerni segíti a helyesírást.", true),

    makeMC("„ház+ak+ban” – hány toldalék van?", ["1", "2", "3"], 1),
    makeMC("„szem+üveg+es” – a „-es”:", ["jel", "képző", "rag"], 1),
    makeMC("„barát+nő” – a „-nő”:", ["képző", "jel", "rag"], 0),
    makeMC("„kert+ész” – a „-ész”:", ["képző", "jel", "rag"], 0),
    makeTF("Az -n/-on/-en/-ön felszíni helyhatározó rag.", true),

    makeMC("„ablak+on” – a „-on”:", ["jel", "rag", "képző"], 1),
    makeMC("„város+ok+ban” – a „-ok” és „-ban”:", ["jel + rag", "két jel", "két rag"], 0),
    makeMC("„fut+ott” – a „-ott”:", ["igeidő jele (múlt)", "rag", "képző"], 0),
    makeTF("Az igeidő jelei nem toldalékok.", false, "Nyelvtani toldalékok, a tő után állnak."),
    makeMC("„ír+nék” – a „-nék”:", ["feltételes mód jele", "rag", "képző"], 0),

    makeTF("A személyragok az ige alanyával egyeztetnek.", true),
    makeMC("„futom” – a „-m”:", ["1. személy jele (igei személyrag)", "képző", "jel"], 0),
    makeMC("„lát+sz” – „-sz”:", ["2. személy rag", "képző", "jel"], 0),
    makeMC("„olvas+unk” – „-unk”:", ["1. többes személyrag", "képző", "jel"], 0),
    makeTF("A módjelek: felszólító (-j), feltételes (-na/-ne/-ná/-né).", true),

    makeMC("„ír+j” – a „-j”:", ["felszólító mód jele", "rag", "képző"], 0),
    makeMC("„ír+na” – „-na”:", ["feltételes mód jele", "tárgyrag", "fokjel"], 0),
    makeMC("„szebb+nek” – „-nek”:", ["részeshatározó rag", "jel", "képző"], 0),
    makeTF("A -nak/-nek részeshatározói rag.", true),
    makeMC("„ház+hoz” – „-hoz”:", ["irányh. rag (allatív)", "képző", "jel"], 0),

    makeTF("A -kor időhatározói rag (éjfélkor, hétkor).", true),
    makeMC("„öt+kor” – „-kor”:", ["rag", "jel", "képző"], 0),
    makeMC("„száz+as” – „-as”:", ["képző (melléknévképző)", "jel", "rag"], 0),
    makeMC("„tíz+edik” – „-edik”:", ["sorszámnévképző", "rag", "jel"], 0),
    makeTF("A sorszámnevek többnyire képzővel jönnek létre a tőszámnévből.", true),

    makeMC("„barát+ja” – „-ja”:", ["birtokos személyjel", "tárgyrag", "képző"], 0),
    makeMC("„barát+já+nak” – „-nak”:", ["részeshatározó rag", "jel", "képző"], 0),
    makeMC("„szív+em+hez” – „-hez”:", ["rag (allatív)", "jel", "képző"], 0),
    makeTF("A birtokos személyjelek: -m, -d, -a/-e/-ja/-je, -nk, -tok/-tek/-tök, -uk/-ük.", true),
    makeMC("„kez+ét” – „-ét”:", ["birtokos személyjel + tárgyrag", "két jel", "két rag"], 0)
  ]
},

  // 8) Szövegértés (alap)
"quiz-szovegertes": {
  title: "Szövegértés alapok",
  questions: [
    makeTF("A cím gyakran a fő témára utal.", true),
    makeTF("A bevezetés általában témát jelöl és érdeklődést kelt.", true),
    makeTF("A bekezdés a szöveg tagolásának alapegysége.", true),
    makeMC("Mi a bekezdés fő szerepe?", ["tagolás", "díszítés", "véletlen tördelés"], 0),
    makeMC("Melyik NEM szövegértési stratégia?", ["jóslás", "kérdezés", "színezés", "összefoglalás"], 2),

    makeTF("A kulcsszavak kiemelése segíti a megértést.", true),
    makeMC("Mi a téma mondata egy bekezdésben?", ["a fő állítás", "példák gyűjteménye"], 0),
    makeTF("A kohézió a szöveg összetartó ereje (kapcsolóelemek).", true),
    makeMC("Melyik kohéziós eszköz?", ["utalószó/névmás", "betűszín", "oldalszám"], 0),
    makeMC("Mi NEM kohéziós eszköz?", ["kötőszavak", "előreutalás", "képaláírás"], 2),

    makeTF("A következtetés az olvasó aktív gondolata a szövegből.", true),
    makeMC("Mi a 'jóslás' olvasási stratégiában?", ["előre kitalálni, mi jön", "visszamondani szó szerint"], 0),
    makeTF("Az előzetes tudás segíti az értelmezést.", true),
    makeMC("Mi az 'összefoglalás' célja?", ["a lényeg kiemelése", "hosszabbítás"], 0),
    makeMC("Az 'átfogalmazás' haszna:", ["saját szavakkal értjük meg", "szó szerinti másolás"], 0),

    makeTF("A tény és vélemény megkülönböztetése fontos.", true),
    makeMC("Melyik TÉNY?", ["„A víz 100 °C-on forr.”", "„A tea a legjobb ital.”"], 0),
    makeMC("Melyik VÉLEMÉNY?", ["„A nap keleten kel.”", "„Ez a könyv izgalmas.”"], 1),
    makeTF("A manipuláció felismerése része a kritikus olvasásnak.", true),
    makeMC("Mi jelzi gyakran a véleményt?", ["értékelő jelzők", "számadatok"], 0),

    makeTF("A címkék, alcímek segítik a tájékozódást.", true),
    makeMC("A 'tartalomjegyzék' feladata:", ["szerkezet áttekintése", "illusztráció"], 0),
    makeMC("A 'kulcsszókeresés' módszere:", ["szkennelés", "hangos felolvasás"], 0),
    makeTF("A skimming felületes átolvasás a lényegért.", true),
    makeTF("A scanning célirányos keresés konkrét információért.", true),

    makeMC("Mi az 'előreutalás'?", ["sejtetés a későbbi tartalomra", "visszautalás a korábbira"], 0),
    makeMC("Mi a 'visszautalás'?", ["korábbi tartalom felelevenítése", "jövőbeli tartalom sejtetése"], 0),
    makeTF("A szöveg műfaja befolyásolja a stílust és szerkezetet.", true),
    makeMC("Mi NEM jellemző tudományos szövegre?", ["pontos terminológia", "erős érzelmi színezés"], 1),
    makeMC("Hír műfajában fontos:", ["5W: ki, mi, mikor, hol, miért/hogyan", "rímek"], 0),

    makeTF("A grafikonok, ábrák információt hordoznak.", true),
    makeMC("Mit nézünk meg először grafikonon?", ["cím, tengelyek", "színek"], 0),
    makeTF("A forrás megbízhatósága kulcskérdés.", true),
    makeMC("Mi NEM elsődleges forrás?", ["szemtanú beszámoló", "tankönyvi összefoglaló"], 1),
    makeMC("Mi a szakirodalmi hivatkozás célja?", ["ellenőrizhetőség", "szöveg díszítése"], 0),

    makeTF("A kontextus meghatározza a szó jelentését.", true),
    makeMC("„kulcs” a szövegben legtöbbször:", ["fő fogalom", "szerszám mindig"], 0),
    makeTF("Az egyértelmű definíciók segítik a megértést.", true),
    makeMC("Retorikai kérdés:", ["választ nem vár", "kötelező választ igényel"], 0),
    makeMC("Metafora felismerése:", ["átvitt értelmű kifejezés", "szó szerinti meghatározás"], 0),

    makeTF("A szerző célja lehet tájékoztatás, meggyőzés vagy szórakoztatás.", true),
    makeMC("Reklámszöveg fő célja:", ["meggyőzés", "tudományos tárgyalás"], 0),
    makeTF("A kohézióhoz tartozik a névmási visszautalás.", true),
    makeMC("„ez, az” szerepe gyakran:", ["összetartás (kohézió)", "főnévképzés"], 0),
    makeMC("„azonban, viszont” funkciója:", ["ellentétezés", "felsorolás"], 0),

    makeTF("A tárgyi pontosság ellenőrzése része a kritikus olvasásnak.", true),
    makeMC("Mi segíti a lényegkiemelést?", ["kulcsszavak, címek, vastag betű", "szöveg hosszabbítása"], 0),
    makeTF("Az összefoglalás rövid, tényszerű legyen.", true),
    makeMC("Mi a téma és mi a fő gondolat viszonya?", ["téma általános, fő gondolat konkrét állítás", "fordítva"], 0),
    makeMC("Mi a jó kérdés jellemzője szövegértésben?", ["célzott, szöveghez kötött", "bármi, ami eszünkbe jut"], 0)
  ]
},
};

export default quizzes;
