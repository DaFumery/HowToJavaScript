const fruitMixerFlechee = (pommes, oranges, bananes) => {
  const monJuJuOnDaBeat = `Mon Juju avec ${pommes} pomme(s), ${oranges} orange(s) et ${bananes} banane(s).`;
  return monJuJuOnDaBeat;
};

const monJujuDePomme = fruitMixerFlechee(5, 0, 0);
console.log(monJujuDePomme); // Mon Juju avec 5 pomme(s), 0 orange(s) et 0 banane(s).

const monJujuMultifruit = fruitMixerFlechee(3, 3, 5);
console.log(monJujuMultifruit);
