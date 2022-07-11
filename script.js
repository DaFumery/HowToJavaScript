const inputTrue = true;
console.log(inputTrue); // true
console.log(typeof inputTrue); // boolean

// Le constructeur Number() permet de créer un objet Number sur un booléen.
console.log(String(inputTrue)); // "true"

const inputToString = String(inputTrue);
console.log(typeof inputTrue); // boolean
console.log(typeof inputToString); // string
