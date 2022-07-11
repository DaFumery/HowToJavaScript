const mathys = {
  prenom: "Mathys",
  nomDeFamille: "Fumery",
  anneeDeNaissance: 1997,
  job: "développeur",
  amis: ["Toto", "Tati", "Tata"],
  permis: true,

  calcAge: function () {
    // Calcul l'age en fonction de l'année de Naissance
    this.age = 2022 - this.anneeDeNaissance;
    // Créer une propriété age dans l'objet Mathys
    return this.age;
  },

  getResume: function () {
    return `${this.nomDeFamille} ${this.prenom} est un ${
      this.job
    } de ${this.calcAge()} ans et il possède ${
      this.permis ? "un" : "pas"
    } permis de conduire`;
  },
};

console.log(mathys.calcAge()); // 25

console.log(mathys.getResume());
