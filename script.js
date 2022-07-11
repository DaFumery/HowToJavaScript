const mathys = {
  prenom: "Mathys",
  nomDeFamille: "Fumery",
  age: 2022 - 1997,
  job: "développeur",
  amis: ["Toto", "Tati", "Tata"],
};

console.log(mathys); // { prenom: 'Mathys', nomDeFamille: 'Fumery', age: 25, job: 'développeur', amis: [ 'Toto', 'Tati', 'Tata' ] }

console.log(mathys.nomDeFamille); // Fumery
console.log(mathys["nomDeFamille"]); // Fumery

const nomCle = "nom";
console.log(mathys["pre" + nomCle]); // Mathys
console.log(mathys[nomCle + "DeFamille"]); // Fumery
