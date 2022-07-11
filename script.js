const age = 17;
const majeur = 18;

if (age >= majeur) {
  console.log("Mathys peut commander une Kriek Rouge au bar");
} else {
  console.log(
    `Mathys devra attendre ${majeur - age} années pour consommer une bière`
  );
}
