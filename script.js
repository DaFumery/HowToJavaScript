const ami = ["Toto", "Tati", "Tata"];
console.log(ami);

// Ajouter des élements
ami.push("Sullivan"); // A la fin
console.log(ami); // [ 'Toto', 'Tati', 'Tata', 'Sullivan' ]

ami.unshift("John"); // Au Début
console.log(ami); // [ 'John', 'Toto', 'Tati', 'Tata', 'Sullivan' ]

// Retirer des éléments
ami.pop(); // Le dernier élément
console.log(ami); // [ 'John', 'Toto', 'Tati', 'Tata' ]

ami.shift(); // Le premier élément
console.log(ami); // [ 'Toto', 'Tati', 'Tata' ]

// Retourne true ou false si la valeur existe
console.log(ami.includes("Steven")); // false
console.log(ami.includes("Tata")); // true

// Retourne l'indice de la première occurence de la valeur
console.log(ami.indexOf("Toto")); // 0
console.log(ami.indexOf("Tata")); // 2
