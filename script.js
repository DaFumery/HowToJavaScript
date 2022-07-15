const restaurant = {
  nom: "Ici on bouffe d'la marde",
  adresse: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italien", "Pizzeria", "Vegetarien", "Biologique"],
  entrees: ["Focaccia", "Bruschetta", "Pain à l'ail", "Salade Niçoise"],
  plats: ["Pizza", "Pâtes au pesto", "Risotto"],

  // Function de destructuring
  order: function (entreesIndex, platsIndex) {
    return [this.entrees[entreesIndex], this.plats[platsIndex]];
  },
};

console.log(restaurant.order(2, 0)); // ['Pain à l'ail', 'Pizza']

const [entrees, plats] = restaurant.order(0, 1);
console.log(entrees, plats); // 'Focaccia', Pates au pesto

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;
console.log(i, j, k);
