// ! Snack 1
/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

/* const biciclette = [
  {
    nome: "Velox",
    peso: {
      valore: 1000,
      unitaDiMisura: "gr",
    },
  },
  {
    nome: "Super",
    peso: {
      valore: 900,
      unitaDiMisura: "gr",
    },
  },
  {
    nome: "Spider",
    peso: {
      valore: 700,
      unitaDiMisura: "gr",
    },
  },
  {
    nome: "Monster",
    peso: {
      valore: 1200,
      unitaDiMisura: "gr",
    },
  },
  {
    nome: "NonLoSo",
    peso: {
      valore: 2000,
      unitaDiMisura: "gr",
    },
  },
];

const checkLighter = () => {
  let indexLigter = 0;
  for (let i = 1; i < biciclette.length; i++) {
    if (biciclette[indexLigter].peso.valore > biciclette[i].peso.valore)
      indexLigter = i;
  }
  return biciclette[indexLigter];
};

console.log(checkLighter()); */
// ! Snack 2
/* Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const squadreDiCalcio = [
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Atalanta",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Palermo",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

const generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) - min;
};

const fillValue = () => {
  for (const squadra of squadreDiCalcio) {
    squadra.falliSubiti = generateNumber(0, 100);
    squadra.puntiFatti = generateNumber(0, 100);
  }
};

fillValue();
const nuovoArray = [];
for (let i = 0; i < squadreDiCalcio.length; i++) {
  nuovoArray[i] = squadreDiCalcio[i];
  delete nuovoArray[i].puntiFatti;
}
console.log(nuovoArray);
// ! Snack 3 (Bonus)
/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */
