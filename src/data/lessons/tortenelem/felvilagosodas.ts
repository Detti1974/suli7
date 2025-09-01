// src/data/lessons/tortenelem/felvilagosodas.ts

export type KeyDate = { year: number | string; event: string };
export type Lesson = {
  id: string;
  title: string;
  content: string;
  keyDates?: KeyDate[];
};

export const felvilagosodasLessons: Lesson[] = [
  {
    id: "eszmei-hatter",
    title: "A felvilágosodás eszmei háttere",
    content: `A felvilágosodás a 17–18. század szellemi mozgalma volt Európában. 
Középpontjában az ész, a tudomány, a szabadság és az egyenlőség állt. 
Filozófusai, mint Locke, Montesquieu, Voltaire, Rousseau, új gondolatokat hirdettek az államról, 
a társadalomról és az ember jogairól.`,
    keyDates: [
      { year: 1689, event: "Locke: Értekezés a polgári kormányzatról" },
      { year: 1748, event: "Montesquieu: A törvények szelleméről" },
      { year: 1762, event: "Rousseau: Társadalmi szerződés" },
    ],
  },
  {
    id: "amerikai-forradalom",
    title: "Az amerikai függetlenségi háború",
    content: `Az angol gyarmatok Észak-Amerikában a 18. században fellázadtak a brit uralom ellen. 
1776. július 4-én elfogadták a Függetlenségi nyilatkozatot (Thomas Jefferson). 
A háború 1783-ban a párizsi békével zárult, amelyben Nagy-Britannia elismerte az Amerikai Egyesült Államok függetlenségét.`,
    keyDates: [
      { year: 1776, event: "Függetlenségi nyilatkozat" },
      { year: 1783, event: "Párizsi béke – USA függetlensége" },
    ],
  },
  {
    id: "francia-forradalom",
    title: "A francia forradalom",
    content: `1789-ben Franciaországban kitört a nagy forradalom, amely a polgári társadalom kialakulásához vezetett. 
Fontos események: Bastille ostroma (1789. július 14.), Emberi és polgári jogok nyilatkozata, 
a királyság bukása (1792), jakobinus diktatúra (Robespierre), majd Napóleon felemelkedése.`,
    keyDates: [
      { year: 1789, event: "Bastille ostroma" },
      { year: 1789, event: "Emberi és polgári jogok nyilatkozata" },
      { year: 1792, event: "A királyság bukása Franciaországban" },
      { year: 1799, event: "Napóleon államcsínye – konzulátus" },
    ],
  },
  {
    id: "napoleon",
    title: "Napóleon kora",
    content: `Napóleon Bonaparte 1799-ben került hatalomra. 1804-ben császárrá koronáztatta magát. 
Sikerei és hódításai átalakították Európát. 1812-ben az oroszországi hadjárat kudarccal végződött. 
1815-ben a waterlooi csatában végleg vereséget szenvedett. 
A bécsi kongresszus (1814–1815) Európa új politikai rendjét alakította ki.`,
    keyDates: [
      { year: 1804, event: "Napóleon császárrá koronázása" },
      { year: 1812, event: "Oroszországi hadjárat kudarca" },
      { year: 1815, event: "Waterloo – Napóleon bukása" },
      { year: "1814–1815", event: "Bécsi kongresszus" },
    ],
  },
];
