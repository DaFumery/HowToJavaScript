let typeNumber0 = 0;
let typeNumber1 = 1;
let typeUndefined;
let typeString = "Mathys";
let typeObject = {};
let typeStringVide = "";

console.log(Boolean(typeNumber0)); // false
console.log(Boolean(typeNumber1)); // true
console.log(Boolean(typeUndefined));
console.log(Boolean(typeString)); // true
console.log(Boolean(typeObject)); // true
console.log(Boolean(typeStringVide)); // false

const argent = 100;
if (argent) {
  console.log("Donne ta tune à Charles Hoskinson");
} else {
  console.log("Comment il va se nourrir Charlie?");
}
// Donne ta tune à Charles Hoskinson

let taille;
if (taille) {
  console.log("Tu as défini ta taille");
} else {
  console.log("Tu n'as pas défini ta taille");
}
// Tu n'as pas défini ta taille
