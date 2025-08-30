// src/data/quiz-egyszeru-mondat.ts
import { QuizPack } from "../types/quiz";

export const QUIZ_EGYSZERU_MONDAT: QuizPack = {
  id: "quiz-egyszeru-ossz-mondat",
  title: "Egyszerű mondat – 100 kérdés",
  questions: [
    // 1–10 Alap mondatrészek (alany/állítmány/tárgy/határozó/jelző)
    { id: "q1", type: "mc", text: "Melyik az alany? – „A fiú gyorsan fut a pályán.”", options: ["A fiú", "gyorsan", "a pályán"], correctIndex: 0 },
    { id: "q2", type: "mc", text: "Melyik az állítmány? – „A lány szépen énekel.”", options: ["A lány", "szépen", "énekel"], correctIndex: 2 },
    { id: "q3", type: "mc", text: "Melyik a tárgy? – „Elolvastam a könyvet.”", options: ["Elolvastam", "a könyvet", "—"], correctIndex: 1 },
    { id: "q4", type: "mc", text: "Melyik határozó? – „Reggel az iskolába sétálok.”", options: ["Reggel", "az iskolába", "sétálok"], correctIndex: 1 },
    { id: "q5", type: "mc", text: "Melyik jelző? – „piros labda”", options: ["piros", "labda", "—"], correctIndex: 0 },
    { id: "q6", type: "tf", text: "Igaz/Hamis: A tárgy gyakran -t ragot kap.", answer: true },
    { id: "q7", type: "tf", text: "Igaz/Hamis: A határozó mindig ige.", answer: false, hint: "A határozó mondatrész, nem szófaj." },
    { id: "q8", type: "mc", text: "Mi az állítmány? – „Péter orvos.”", options: ["Péter", "orvos", "Péter orvos"], correctIndex: 1 },
    { id: "q9", type: "mc", text: "Melyik az alany? – „A madarak délre repülnek.”", options: ["A madarak", "délre", "repülnek"], correctIndex: 0 },
    { id: "q10", type: "mc", text: "Mi a mondat tárgya? – „Megkerestem a kulcsomat.”", options: ["Megkerestem", "a kulcsomat", "—"], correctIndex: 1 },

    // 11–20 Egyszerű vs. összetett mondat
    { id: "q11", type: "mc", text: "Egyszerű vagy összetett? – „Esik az eső.”", options: ["Egyszerű", "Összetett", "Hiányos"], correctIndex: 0 },
    { id: "q12", type: "mc", text: "Egyszerű vagy összetett? – „Amikor hazaérek, pihenek.”", options: ["Egyszerű", "Összetett", "Felkiáltó"], correctIndex: 1 },
    { id: "q13", type: "mc", text: "Egyszerű vagy összetett? – „Olvasok és jegyzetelek.”", options: ["Egyszerű", "Összetett", "Hiányos"], correctIndex: 1 },
    { id: "q14", type: "mc", text: "Egyszerű vagy összetett? – „A kutya ugat.”", options: ["Egyszerű", "Összetett", "Tagmondat"], correctIndex: 0 },
    { id: "q15", type: "tf", text: "Igaz/Hamis: Az „Ha süt a nap, kirándulunk.” összetett mondat.", answer: true },
    { id: "q16", type: "tf", text: "Igaz/Hamis: Az „Olvasok, mert érdekel.” egyszerű mondat.", answer: false },
    { id: "q17", type: "mc", text: "Melyik összetett? ", options: ["Elaludtam.", "Elaludtam, ezért késtem.", "Szép a táj."], correctIndex: 1 },
    { id: "q18", type: "mc", text: "Melyik egyszerű?", options: ["Sietek, nehogy elkéssek.", "Sietek.", "Ha sietek, odaérek időben."], correctIndex: 1 },
    { id: "q19", type: "tf", text: "Igaz/Hamis: Két állítmány egy mondatban mindig összetett mondatot jelent.", answer: false, hint: "Lehet halmozott állítmány is egy tagmondatban." },
    { id: "q20", type: "tf", text: "Igaz/Hamis: A mellérendelő mondat is összetett mondat.", answer: true },

    // 21–30 Állítmány fajtái (igei/névszói/névszói-igei)
    { id: "q21", type: "mc", text: "Állítmány fajtája – „Péter fut.”", options: ["igei", "névszói", "névszói-igei"], correctIndex: 0 },
    { id: "q22", type: "mc", text: "Állítmány fajtája – „A könyv érdekes.”", options: ["igei", "névszói", "névszói-igei"], correctIndex: 1 },
    { id: "q23", type: "mc", text: "Állítmány fajtája – „A lány okos volt.”", options: ["igei", "névszói", "névszói-igei"], correctIndex: 2 },
    { id: "q24", type: "tf", text: "Igaz/Hamis: A „Péter tanár.” névszói állítmány.", answer: true },
    { id: "q25", type: "tf", text: "Igaz/Hamis: A „fiú lett” önmagában teljes állítmány.", answer: false, hint: "Névszói-igei állítmánynál a névszói rész is kell." },
    { id: "q26", type: "mc", text: "Válaszd ki a névszói-igei állítmányt!", options: ["Az ég kék.", "Az ég kék lett.", "Esik."], correctIndex: 1 },
    { id: "q27", type: "mc", text: "Válaszd ki az igei állítmányt!", options: ["A fiú gyors.", "A fiú lett gyors.", "A fiú fut."], correctIndex: 2 },
    { id: "q28", type: "mc", text: "Melyik NEM névszói állítmány?", options: ["A ház nagy.", "A ház magas lett.", "A ház barna."], correctIndex: 1 },
    { id: "q29", type: "mc", text: "Melyik mondatban van névszói-igei állítmány?", options: ["Az autó piros.", "Az autó piros lesz.", "Az autó megáll."], correctIndex: 1 },
    { id: "q30", type: "tf", text: "Igaz/Hamis: Az „van” segédige névszói-igei állítmányokban gyakori.", answer: true },

    // 31–40 Tárgy (alak, felismerés)
    { id: "q31", type: "mc", text: "Melyik a tárgy? – „Megnéztem a filmet.”", options: ["Megnéztem", "a filmet", "—"], correctIndex: 1 },
    { id: "q32", type: "mc", text: "Melyik tárgyragos alak?", options: ["könyv", "könyvet", "könyvben"], correctIndex: 1 },
    { id: "q33", type: "mc", text: "Melyik NEM tárgy? – „Megfogtam a kilincset a kapun.”", options: ["a kilincset", "a kapun", "Megfogtam"], correctIndex: 1 },
    { id: "q34", type: "tf", text: "Igaz/Hamis: A -val/-vel rag sosem jelöl tárgyat.", answer: true },
    { id: "q35", type: "mc", text: "Mi a tárgy? – „Keresem a pénztárcámat.”", options: ["Keresem", "a pénztárcámat", "—"], correctIndex: 1 },
    { id: "q36", type: "mc", text: "Mi a tárgy? – „Megittam a teát.”", options: ["Megittam", "a teát", "—"], correctIndex: 1 },
    { id: "q37", type: "mc", text: "Mi a tárgy? – „Megoldottuk a feladatot.”", options: ["Megoldottuk", "a feladatot", "—"], correctIndex: 1 },
    { id: "q38", type: "tf", text: "Igaz/Hamis: A tárgy kérdése: „kit/mit?”.", answer: true },
    { id: "q39", type: "mc", text: "Melyik mondatban van határozott tárgy?", options: ["Olvasok könyvet.", "Elolvastam a könyvet.", "Olvasok."], correctIndex: 1 },
    { id: "q40", type: "tf", text: "Igaz/Hamis: A határozatlan tárgy gyakran határozatlan névelőt kap.", answer: true },

    // 41–50 Határozók (hely/idő/mód/ok/cél)
    { id: "q41", type: "mc", text: "Melyik helyhatározó? – „A táskát a szobába tettem.”", options: ["a táskát", "a szobába", "tettem"], correctIndex: 1 },
    { id: "q42", type: "mc", text: "Melyik időhatározó? – „Holnap korán kelek.”", options: ["Holnap", "korán", "kelek"], correctIndex: 0 },
    { id: "q43", type: "mc", text: "Melyik módhatározó? – „Csendben olvas.”", options: ["Csendben", "olvas", "—"], correctIndex: 0 },
    { id: "q44", type: "mc", text: "Melyik okhatározó? – „A fáradtság miatt megálltam.”", options: ["A fáradtság miatt", "megálltam", "—"], correctIndex: 0 },
    { id: "q45", type: "mc", text: "Melyik célhatározó? – „Az edzőterembe megyek edzeni.”", options: ["Az edzőterembe", "edzeni", "megyek"], correctIndex: 1 },
    { id: "q46", type: "tf", text: "Igaz/Hamis: A „-ban/-ben” helyhatározó jele lehet.", answer: true },
    { id: "q47", type: "tf", text: "Igaz/Hamis: A „-ért” tipikusan célhatározót jelöl.", answer: false, hint: "Gyakran okot vagy célértéket jelölhet, de nem kizárólag cél." },
    { id: "q48", type: "mc", text: "Melyik a hová? kérdésre felel?", options: ["az iskolába", "az iskolában", "az iskolából"], correctIndex: 0 },
    { id: "q49", type: "mc", text: "Melyik a honnan? kérdésre felel?", options: ["a partra", "a parton", "a partról"], correctIndex: 2 },
    { id: "q50", type: "mc", text: "Melyik a hol? kérdésre felel?", options: ["a parkba", "a parkban", "a parkból"], correctIndex: 1 },

    // 51–60 Jelzők (minőség/birtok/értelmező)
    { id: "q51", type: "mc", text: "Melyik minőségjelző? – „gyors futó”", options: ["gyors", "futó", "—"], correctIndex: 0 },
    { id: "q52", type: "mc", text: "Melyik birtokos jelző? – „Péter könyve”", options: ["Péter", "könyve", "Péter könyve"], correctIndex: 0 },
    { id: "q53", type: "mc", text: "Melyik értelmező jelzős szerkezet?", options: ["Péter, a barátom", "piros alma", "a fiú táskája"], correctIndex: 0 },
    { id: "q54", type: "tf", text: "Igaz/Hamis: A jelző a főnév bővítménye.", answer: true },
    { id: "q55", type: "mc", text: "Válaszd a jelzőt! – „A magas fa kidőlt.”", options: ["magas", "fa", "kidőlt"], correctIndex: 0 },
    { id: "q56", type: "mc", text: "Melyik a jelzett szó? – „szép ház”", options: ["szép", "ház", "szép ház"], correctIndex: 1 },
    { id: "q57", type: "mc", text: "Válaszd a birtokost! – „a lány kalapja”", options: ["a lány", "kalapja", "—"], correctIndex: 0 },
    { id: "q58", type: "tf", text: "Igaz/Hamis: A „-nak/-nek” gyakran birtokos jelző része.", answer: true },
    { id: "q59", type: "mc", text: "Melyik NEM jelzős szerkezet?", options: ["a piros toll", "a fiú könyve", "a bolt előtt"], correctIndex: 2 },
    { id: "q60", type: "mc", text: "Melyik többes jelző? – „szorgalmas diákok”", options: ["szorgalmas", "diákok", "—"], correctIndex: 0 },

    // 61–70 Igaz/Hamis – szabályok, fogalmak
    { id: "q61", type: "tf", text: "Igaz/Hamis: Az alany kérdése: „ki/mi?”.", answer: true },
    { id: "q62", type: "tf", text: "Igaz/Hamis: A jelző mindig ige.", answer: false },
    { id: "q63", type: "tf", text: "Igaz/Hamis: Az egyszerű mondatban egy állítmány van.", answer: true, hint: "Lehet halmozott, de egy tagmondat." },
    { id: "q64", type: "tf", text: "Igaz/Hamis: A „mikor?” kérdés időhatározóra kérdez.", answer: true },
    { id: "q65", type: "tf", text: "Igaz/Hamis: A névszói-igei állítmányban mindig van névszói rész és igei rész is.", answer: true },
    { id: "q66", type: "tf", text: "Igaz/Hamis: A mellérendelő kötőszó például az „és”.", answer: true },
    { id: "q67", type: "tf", text: "Igaz/Hamis: A „mert” mellérendelő kötőszó.", answer: false, hint: "Alárendelő okhatározói kötőszó." },
    { id: "q68", type: "tf", text: "Igaz/Hamis: Az állítmány lehet névszó is.", answer: true },
    { id: "q69", type: "tf", text: "Igaz/Hamis: A tárgy kérdése „hol?”.", answer: false },
    { id: "q70", type: "tf", text: "Igaz/Hamis: A „-ba/-be” irányt jelölő rag.", answer: true },

    // 71–80 Mellérendelés (és, de, vagy...), halmozás
    { id: "q71", type: "mc", text: "Milyen viszony? – „Olvasok és írok.”", options: ["mellérendelés", "alárendelés", "egyszerű mondat"], correctIndex: 0 },
    { id: "q72", type: "mc", text: "Milyen viszony? – „Szeretném, ha jönnél.”", options: ["mellérendelés", "alárendelés", "egyszerű mondat"], correctIndex: 1 },
    { id: "q73", type: "mc", text: "Milyen mellérendelés? – „Olvastam, de nem értettem.”", options: ["kapcsolatos", "ellentétes", "választó"], correctIndex: 1 },
    { id: "q74", type: "mc", text: "Milyen mellérendelés? – „Vagy eszünk, vagy alszunk.”", options: ["kapcsolatos", "ellentétes", "választó"], correctIndex: 2 },
    { id: "q75", type: "mc", text: "Milyen mellérendelés? – „Nemcsak tanul, hanem sportol is.”", options: ["kapcsolatos", "következtető", "magyarázó"], correctIndex: 0 },
    { id: "q76", type: "tf", text: "Igaz/Hamis: A „tehát” következtető kötőszó.", answer: true },
    { id: "q77", type: "tf", text: "Igaz/Hamis: A „ugyanis” magyarázó kötőszó.", answer: true },
    { id: "q78", type: "mc", text: "Melyik kapcsolatos? ", options: ["Elindultam, ezért elkéstem.", "Elindultam, majd megérkeztem.", "Elindultam, mert hívtak."], correctIndex: 1 },
    { id: "q79", type: "mc", text: "Melyik következtető? ", options: ["Fáradt voltam, ezért lefeküdtem.", "Fáradt voltam, mert dolgoztam.", "Fáradt voltam, de futottam."], correctIndex: 0 },
    { id: "q80", type: "mc", text: "Melyik magyarázó? ", options: ["Nem mentem, ugyanis esett.", "Nem mentem, de esett.", "Nem mentem, hogy aludjak."], correctIndex: 0 },

    // 81–90 Gyakorló mondatrészek vegyesen
    { id: "q81", type: "mc", text: "Mi az alany? – „A gyerek tegnap sokat olvasott.”", options: ["A gyerek", "tegnap", "sokat"], correctIndex: 0 },
    { id: "q82", type: "mc", text: "Mi az állítmány? – „A csapat bajnok lett.”", options: ["A csapat", "bajnok lett", "bajnok"], correctIndex: 1 },
    { id: "q83", type: "mc", text: "Mi a tárgy? – „Megnéztük a kiállítást.”", options: ["Megnéztük", "a kiállítást", "—"], correctIndex: 1 },
    { id: "q84", type: "mc", text: "Mi a helyhatározó? – „Az asztalra tettem a táskát.”", options: ["Az asztalra", "a táskát", "tettem"], correctIndex: 0 },
    { id: "q85", type: "mc", text: "Mi az időhatározó? – „Este tanulok.”", options: ["Este", "tanulok", "—"], correctIndex: 0 },
    { id: "q86", type: "mc", text: "Mi a jelző? – „vastag könyv”", options: ["vastag", "könyv", "—"], correctIndex: 0 },
    { id: "q87", type: "tf", text: "Igaz/Hamis: Az „Az étel finom.” névszói állítmányt tartalmaz.", answer: true },
    { id: "q88", type: "tf", text: "Igaz/Hamis: A „Gyorsan futottam haza.” két határozót tartalmaz.", answer: true, hint: "Gyorsan (mód), haza (hely/irány)." },
    { id: "q89", type: "tf", text: "Igaz/Hamis: A jelző mindig a főnév után áll.", answer: false },
    { id: "q90", type: "mc", text: "Melyik NEM határozó? – „A bolt előtt vártam.”", options: ["bolt", "előtt", "vártam"], correctIndex: 0 },

    // 91–100 Plusz finomhangoló kérdések
    { id: "q91", type: "mc", text: "Mi az állítmány? – „Az ablak nyitva volt.”", options: ["Az ablak", "nyitva volt", "nyitva"], correctIndex: 1 },
    { id: "q92", type: "mc", text: "Mi az alany? – „A tanárnő új feladatot adott.”", options: ["A tanárnő", "új feladatot", "adott"], correctIndex: 0 },
    { id: "q93", type: "mc", text: "Mi a tárgy? – „Megkaptam a levelet.”", options: ["Megkaptam", "a levelet", "—"], correctIndex: 1 },
    { id: "q94", type: "mc", text: "Mi a módhatározó? – „Halkan beszélt.”", options: ["Halkan", "beszélt", "—"], correctIndex: 0 },
    { id: "q95", type: "mc", text: "Mi a helyhatározó? – „A kertben sétálunk.”", options: ["A kertben", "sétálunk", "—"], correctIndex: 0 },
    { id: "q96", type: "mc", text: "Melyik jelzős szerkezet?", options: ["a hosszú út", "út hosszú", "hosszúan megy"], correctIndex: 0 },
    { id: "q97", type: "tf", text: "Igaz/Hamis: Az „és” kötőszó kapcsolatos mellérendelést jelez.", answer: true },
    { id: "q98", type: "tf", text: "Igaz/Hamis: Az „ok” kérdésre felelő bővítmény okhatározó.", answer: true },
    { id: "q99", type: "tf", text: "Igaz/Hamis: A „-n/-on/-en/-ön” mindig tárgyat jelöl.", answer: false },
    { id: "q100", type: "mc", text: "Egyszerű vagy összetett? – „Sokat tanultam, ezért sikerült a dolgozat.”", options: ["Egyszerű", "Összetett", "Hiányos"], correctIndex: 1 },
  ],
};

export default QUIZ_EGYSZERU_MONDAT;
