const age = 25;
const patrickDisponible = true;

// Condition if Else
let boiteEchangisteMecton1;
if (age >= 25 && patrickDisponible) {
  boiteEchangisteMecton1 = "On fonce avec Patrick";
} else {
  boiteEchangisteMecton1 = "Le Cassoulet manque de saucisses";
}
console.log(boiteEchangisteMecton1); // On fonce avec Patrick

// Condition Ternaire (important mec, déconne pas)
const boiteEchangisteMecton2 =
  age >= 18 && patrickDisponible
    ? "On fonce avec Patrick"
    : "Le Cassoulet manque de saucisses";
console.log(boiteEchangisteMecton2); // On fonce avec Patrick
