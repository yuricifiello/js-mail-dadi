const destinationMail = prompt("Qual è la tua mail?");
const listMail = [
  "giulia.rossi@mail.com",
  "marco.verdi@mail.com",
  "anna.bianchi@mail.com",
  "luca.neri@mail.com",
  "federica.conti@mail.com",
];

let validationMail = false;

for (i = 0; i < listMail.length; i++) {
  if (listMail[i] === destinationMail) validationMail = true;
}
if (validationMail) {
  console.log("Benvenuto alla festa!");
} else {
  console.log("Spiacente, non sei nella lista degli invitati.");
}
