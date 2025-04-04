// Genero un numero da 1 a 6 per il giocatore
const scorePlayer = Math.floor(Math.random() * 6) + 1;
console.log(scorePlayer);

//Genereo un numero da 1 a 6 per il computer
const scoreComputer = Math.floor(Math.random() * 6) + 1;
console.log(scoreComputer);

// Chi è il vincitore?
if (scorePlayer > scoreComputer) {
  console.log("Il Giocatore ha vinto");
} else if (scorePlayer < scoreComputer) {
  console.log("Il computer ha vinto");
}
