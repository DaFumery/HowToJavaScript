function couperLesFruits(fruit) {
  return fruit * 4;
}

function fruitMixerFlechee(pommes, oranges, bananes) {
  // Callback
  const morceauDePommes = couperLesFruits(pommes);
  const morceauOranges = couperLesFruits(oranges);
  const morceauDeBananes = couperLesFruits(bananes);

  const monJuJuOnDaBeat = `Mon Juju avec ${morceauDePommes} morceaux de pomme(s), ${morceauOranges} morceaux de orange(s) et ${morceauDeBananes} morceaux de banane(s).`;
  return monJuJuOnDaBeat;
}

const monJujuDePomme = fruitMixerFlechee(5, 0, 0);
console.log(monJujuDePomme);
// Mon Juju avec 20 morceaux de pomme(s), 0 morceaux de orange(s) et 0 morceaux de banane(s).

const monJujuMultifruit = fruitMixerFlechee(3, 3, 5);
console.log(monJujuMultifruit);
// Mon Juju avec 12 morceaux de pomme(s), 12 morceaux de orange(s) et 20 morceaux de banane(s).
