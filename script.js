const mathys = [
  "Mathys",
  "Fumery",
  2022 - 1997,
  "Développeur",
  ["Toto", "Tati", "Tata"],
  true,
];

const types = [];

for (let i = 0; i < mathys.length; i++) {
  //Lecture du tableau mathys
  console.log(mathys[i], typeof mathys[i]);
  // Mathys string
  // Fumery string
  // 25 number
  // ...
  // true boolean

  // Remplir le tableau types
  types.push(typeof mathys[i]);
}

console.log(types); // [ 'string', 'string', 'number', 'string', 'object', 'boolean' ]
