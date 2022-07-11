const calcAge = function (anneeNaissance) {
  return 2022 - anneeNaissance;
};

const annees = [1997, 1998, 1999, 2000, 2001, 2002];

const age1 = calcAge(annees[0]);
const age2 = calcAge(annees[3]);
const age3 = calcAge(annees[annees.length - 1]);
console.log(age1, age2, age3); // 25 22 20

const ageReturn = [
  calcAge(annees[0]),
  calcAge(annees[3]),
  calcAge(annees[annees.length - 1]),
];

console.log(ageReturn);
