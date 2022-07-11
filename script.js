const prenom = "Mathys";
const ami = ["Toto", "Tati", "Tata"];
const annees = new Array(1997, 1996, 2001, 2002, 2008);
const mathys = [prenom, "Fumery", 2022 - 1997, "développeur", ami];

console.log(ami); // [ 'Toto', 'Tati', 'Tata' ]
console.log(annees); // [ 1997, 1996, 2001, 2002, 2008 ]
console.log(mathys); // [ 'Mathys', 'Fumery', 25, 'développeur', [ 'Toto', 'Tati', 'Tata' ] ]

// Renvoie la valeur d'index[0] et d'index[1]
console.log(ami[0]); // "Toto"
console.log(ami[1]); // "Tati"

// Renvoie la longueur du tableau
console.log(ami.length); // 3 (car 3 éléments)

// Renvoie la valeur d'index[3 - 1] = index[2]
console.log(ami[ami.length - 1]); // Tata

// Remplace la valeur d'index 2 du tableau ami
ami[2] = "Sullivan";
console.log(ami); // [ 'Toto', 'Tati', 'Sullivan' ]

// Accède au tableau ami intégré dans le tableau mathys
console.log(mathys[4]); // [ 'Toto', 'Tati', 'Sullivan' ]

// Accède à la valeur d'index0 du tableau ami intégré dans le tableau Mathys
console.log(mathys[4][0]); // Toto
