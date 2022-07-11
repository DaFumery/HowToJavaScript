// La valeur 25 de type nombre et automatiquement converti en string lors de la concaténation
const coercition1 = "J'ai " + 25 + " ans";
console.log(coercition1); // "J'ai 25 ans"
const coercition2 = "J'ai " + "25" + " ans";
console.log(coercition2); // "J'ai 25 ans"
const coercition3 = "23" * "2";
console.log(coercition3); // 46

console.log(typeof coercition1); // string
console.log(typeof coercition2); // string
console.log(typeof coercition3); // number

let n1 = "1" + 1 + 1;
console.log(n1); // "111"
console.log(typeof n1); // string

n1 = n1 - 1;
console.log(n1); // 110
console.log(typeof n1); // number

// La présence du (- 2) permet à JS de convertir automatiquement le string en number
let n2 = "1" + 1 - 2;
console.log(n2); // 9
console.log(typeof n2); // number
