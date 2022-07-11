const mathys = {
  prenom: "Mathys",
  nomDeFamille: "Fumery",
  age: 1997,
  job: "développeur",
  amis: ["Toto", "Tati", "Tata"],
  permis: true,

  // Function expression
  calcAge: function (anneeNaissance) {
    return 2022 - anneeNaissance;
  },

  // Function utilisant this keyword
  calcAgeThis: function () {
    console.log(this);
    return 2022 - this.age;
  },
};

// Dot notation
console.log(mathys.calcAge(1997)); // 25
console.log(mathys.calcAge(mathys.age)); // 25

// Bracket notation
console.log(mathys["calcAge"](1997)); // 25
console.log(mathys["calcAge"](mathys.age));

// This keyword
console.log(mathys.calcAgeThis()); // 25
