// ! Snack 1
/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const biciclette = [
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

console.log(checkLighter());
// ! Snack 2
/* Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */
// ! Snack 3 (Bonus)
/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */
