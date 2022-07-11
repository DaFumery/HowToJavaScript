# JavaScript Fondamentales, Pt. 2

## Table des matières

- [Strict Mode](#strict-mode)
  - [Définition du Strict Mode](#définition-du-strict-mode)
  - [A quoi ça sert?](#a-quoi-ça-sert)
  - [Invoquer le Strict Mode](#invoquer-le-strict-mode)
- [Les Fonctions](#les-fonctions)
  - [Définition d'une Fonction](#définition-dune-fonction)
  - [La déclaration de Fonction](#la-déclaration-de-fonction)
    - [Exemple de déclaration de Fonction](#exemple-de-déclaration-de-fonction)
  - [L'expression de Fonction](#lexpression-de-fonction)
    - [Exemple d'expression de Fonction](#exemple-dexpression-de-fonction)
  - [Les Fonctions fléchées](#les-fonctions-fléchées)
    - [Exemple de Fonction fléchée](#exemple-de-fonction-fléchée)
  - [Les Callback de Fonction](#les-callback-de-fonction)
    - [Définition d'une fonction de rappel](#définition-dune-fonction-de-rappel-callback)
      - [Exemple de Callback](#exemple-de-callback)
  - [Résumé des fonctions](#résumé-des-fonctions)
    - [Trois manières de déclarer une fonction](#trois-manières-de-déclarer-une-fonction)
    - [Anatomie d'une fonction](#anatomie-dune-fonction)
- [Les Tableaux](#les-tableaux)
  - [Définition d'un Tableau](#définition-dun-tableau)
  - [Créer un tableau](#créer-un-tableau)
    - [Exemple de création de tableau](#exemple-de-création-de-tableau)
    - [Exercice tableaux](#exercice-tableaux)
- [Manipulation Basics d'un Tableau](#manipulation-basics-dun-tableau)
  - [Ajouter un élément](#ajouter-un-élément)
    - [Méthode unshift()](#méthode-unshift-au-début)
    - [Méthode push()](#méthode-push-à-la-fin)
  - [Supprimer un élément](#supprimer-un-élément)
    - [Méthode shift()](#méthode-shift-au-début)
    - [Méthode pop()](#méthode-pop-à-la-fin)
  - [Recherche d'éléments](#recherche-déléments)
    - [Méthode includes()](#méthode-includes)
    - [Méthode indexOf()](#méthode-indexof)
  - [Exemples de manipulations](#exemple-de-manipulations)
- [Les Objets](#les-objets)
  - [Définition d'un Objet](#définition-dun-objet)
  - [Les Méthodes d'Objet](#les-méthodes-dobjet)
    - [Créer une méthode d'Objet](#créer-une-méthode-dobjet)
    - [L'Opérateur this](#lopérateur-this)
  - [Différences entre la notation en point et en crochet](#différences-entre-la-notation-en-point-et-en-crochet)
    - [La notation en Point](#la-notation-en-point-dot-notation)
    - [La notation en Crochet](#la-notation-en-crochet-bracket-notation)
- [Les Itérations](#les-itérations)
  - [La Boucle While](#la-boucle-while)
  - [La Boucle For](#la-boucle-for)
  - [Looping d'un tableau]()
    - [Boucle For](#boucle-for)
      - [Exemple 1](#exemple-1)
      - [Exemple 2](#exemple-2)
    - [Continue & Break](#continue--break)
    - [Looping à l'envers](#looping-à-lenvers)
    - [Loop in Loop](#loop-in-loop)

## Strict Mode

### Définition du Strict Mode

Le mode strict de ECMAScript 5 permet de choisir une variante restrictive de JavaScript. Le mode strict n'est pas seulement un sous-ensemble de JavaScript : il possède intentionnellement des sémantiques différentes du code normal.

**Il permet de réaliser des scripts plus sécurisés en évitant les erreurs accidentelles.**

### A quoi ça sert?

**Le mode strict apporte quelques changements à la sémantique « normale » de JavaScript:**

1. Le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites (une exception sera levée).
2. Le mode strict corrige les erreurs qui font qu'autrement il est difficile pour les moteurs JavaScript d'effectuer des optimisations. Le code sera donc exécuté plus rapidement en mode strict, sans changer une seule ligne si cela n'est pas nécessaire.
3. Le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript.

### Invoquer le Strict Mode

En début de script ou dans un bloc.

> "use strict";

```js
"use strict";
var v = "Je suis en mode strict !";
```

## Les Fonctions

### Définition d'une Fonction

Les fonctions font partie des briques fondamentales de JavaScript. Une fonction est une procédure JavaScript, un ensemble d'instructions effectuant une tâche ou calculant une valeur. Afin d'utiliser une fonction, il est nécessaire de l'avoir auparavant définie au sein de la portée dans laquelle on souhaite l'appeler.

### La déclaration de Fonction

Une définition de fonction (aussi appelée déclaration de fonction ou instruction de fonction) est construite avec **le mot-clé function**, suivi par :

- Le nom de la fonction.
- Une liste d'arguments à passer à la fonction, entre parenthèses et séparés par des virgules.
- Les instructions JavaScript définissant la fonction, entre accolades, { }.

#### Exemple de déclaration de Fonction

```js
// Déclaration de fonction sous le nom fruitMxer de paramètres (pommes, oranges, bananes)
function fruitMixerDeclaration(pommes, oranges, bananes) {
  console.log(pommes, oranges, bananes);
  const monJuJuOnDaBeat = `Mon Juju avec ${pommes} pomme(s), ${oranges} orange(s) et ${bananes} banane(s).`;
  return monJuJuOnDaBeat;
}

const monJujuDePomme = fruitMixerDeclaration(5, 0, 0);
console.log(monJujuDePomme); // Mon Juju avec 5 pomme(s), 0 orange(s) et 0 banane(s).

const monJujuMultifruit = fruitMixerDeclaration(3, 3, 5);
console.log(monJujuMultifruit); // Mon Juju avec 3 pomme(s), 3 orange(s) et 5 banane(s).
```

### L'expression de Fonction

Une expression de fonction fonctionne exactement comme une déclaration de fonction ou une instruction de fonction, la seule différence est qu’elle est stockée dans une variable et donc qu'il n'y a pas de nom de fonction dans une expression de fonction, **c’est-à-dire que des fonctions anonymes sont créées dans des expressions de fonction**. Les expressions de fonction s’exécutent dès qu’elles sont définies.

**L’omission d’un nom est autorisée pour les fonctions expressions.**

#### Exemple d'expression de Fonction

```js
// Expression de fonction stockée dans la variable fruitMixerExpression de paramètres (pommes, oranges, bananes)
const fruitMixerExpression = function (pommes, oranges, bananes) {
  const monJuJuOnDaBeat = `Mon Juju avec ${pommes} pomme(s), ${oranges} orange(s) et ${bananes} banane(s).`;
  return monJuJuOnDaBeat;
};

const monJujuDePomme = fruitMixerExpression(5, 0, 0);
console.log(monJujuDePomme); // Mon Juju avec 5 pomme(s), 0 orange(s) et 0 banane(s).

const monJujuMultifruit = fruitMixerExpression(3, 3, 5);
console.log(monJujuMultifruit); // Mon Juju avec 3 pomme(s), 3 orange(s) et 5 banane(s).
```

### Les Fonctions fléchées

Une expression de fonction fléchée (arrow function en anglais) permet d’avoir une syntaxe plus courte que les expressions de fonction et **ne possède pas ses propres valeurs pour this, arguments, super, ou new.target**. Les fonctions fléchées sont **souvent anonymes** et ne sont **pas destinées à être utilisées pour déclarer des méthodes**.

#### Exemple de Fonction fléchée

```js
const fruitMixerFlechee = (pommes, oranges, bananes) => {
  const monJuJuOnDaBeat = `Mon Juju avec ${pommes} pomme(s), ${oranges} orange(s) et ${bananes} banane(s).`;
  return monJuJuOnDaBeat;
};

const monJujuDePomme = fruitMixerFlechee(5, 0, 0);
console.log(monJujuDePomme); // Mon Juju avec 5 pomme(s), 0 orange(s) et 0 banane(s).

const monJujuMultifruit = fruitMixerFlechee(3, 3, 5);
console.log(monJujuMultifruit); // Mon Juju avec 3 pomme(s), 3 orange(s) et 5 banane(s).
```

## Les Callback de Fonction

### Définition d'une fonction de rappel (Callback)

Une fonction de rappel (aussi appelée callback en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.

#### Exemple de Callback

```js
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
```

## Résumé des fonctions

### Trois manières de déclarer une fonction

![Trois manières de déclarer une fonction](img/trois-manieres-de-declarer-des-fonctions.png)

### Anatomie d'une fonction

![Anatomie d'une fonction](img/Anatomie-de-fonction.png)

## Les Tableaux

### Définition d'un Tableau

**Un tableau est un objet contenant plusieurs valeurs.** Les objets tableau peuvent être stockés dans des variables et traités de la même manière que tout autre type de valeur, la différence étant que nous pouvons accéder à chaque valeur du tableau individuellement, et faire des choses super utiles et efficaces avec la liste des valeurs, comme boucler et faire la même chose pour chaque valeur.

### Créer un tableau

On définit les valeurs d'un tableau par une liste d'éléments entre crochets droits, séparés par des virgules.

> let tableau = [];

OU

> let tableau = new Array();

#### Exemple de création de tableau

```js
const prenom = "Mathys";
const ami = ["Toto", "Tati", "Tata"];
const annees = new Array(1997, 1996, 2001, 2002, 2008);
const mathys = [prenom, "Fumery", 2022 - 1997, "développeur", ami];

console.log(ami); // [ 'Toto', 'Tati', 'Tata' ]
console.log(annees); // [ 1997, 1996, 2001, 2002, 2008 ]
console.log(mathys); // [ 'Mathys', 'Fumery', 25, 'développeur', [ 'Toto', 'Tati', 'Tata' ] ]

// Renvoie la valeur d'index[0] et d'index[1] du tableau ami
console.log(ami[0]); // "Toto"
console.log(ami[1]); // "Tati"

// Renvoie la longueur du tableau
console.log(ami.length); // 3 (car 3 éléments)

// Renvoie la valeur d'index[3 - 1] = index[2]
console.log(ami[ami.length - 1]); // Tata

// Remplace la valeur d'index 2 du tableau ami
ami[2] = "Sullivan";
console.log(ami); // [ 'Toto', 'Tati', 'Sullivan' ]

// Accède au tableau ami intégré dans le tableau mathys
console.log(mathys[4]); // [ 'Toto', 'Tati', 'Sullivan' ]

// Accède à la valeur d'index0 du tableau ami intégré dans le tableau Mathys
console.log(mathys[4][0]); // Toto
```

#### Exercice tableaux

Appliquer une fonction calcAge aux valeurs d'index[0], d'index[3] et à la dernière valeur du tableau annees.

Créer un nouveau tableau ageReturn avec le résultat de la fonction calcAge()

```js
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

console.log(ageReturn); // [ 25, 22, 20 ]
```

## Manipulation Basics d'un Tableau

### Ajouter un élément

#### Méthode unshift() au début

**La méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau** et renvoie la nouvelle longueur du tableau.

> array.unshift(element1, element2, elementN)

#### Méthode push() à la fin

**La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau** et retourne la nouvelle taille du tableau.

> array.push(element1, element2, elementN)

### Supprimer un élément

#### Méthode shift() au début

**La méthode shift() permet de retirer le premier élément d'un tableau** et de renvoyer cet élément. Cette méthode modifie la longueur du tableau.

> array.shift()

#### Méthode pop() à la fin

**La méthode pop() supprime le dernier élément d'un tableau** et retourne cet élément. Cette méthode modifie la longueur du tableau.

> array.pop()

### Recherche d'éléments

#### Méthode includes()

**La méthode includes() permet de déterminer si un tableau contient une valeur** et renvoie true si c'est le cas, false sinon.

> array.includes(élémentRecherché)

#### Méthode indexOf()

**La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau**. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.

> arr.indexOf(élémentRecherché)

### Exemple de manipulations

```js
const ami = ["Toto", "Tati", "Tata"];
console.log(ami);

// Ajouter des élements
ami.push("Sullivan"); // A la fin
console.log(ami); // [ 'Toto', 'Tati', 'Tata', 'Sullivan' ]

ami.unshift("John"); // Au Début
console.log(ami); // [ 'John', 'Toto', 'Tati', 'Tata', 'Sullivan' ]

// Retirer des éléments
ami.pop(); // Le dernier élément
console.log(ami); // [ 'John', 'Toto', 'Tati', 'Tata' ]

ami.shift(); // Le premier élément
console.log(ami); // [ 'Toto', 'Tati', 'Tata' ]

// Retourne true ou false si la valeur existe
console.log(ami.includes("Steven")); // false
console.log(ami.includes("Tata")); // true

// Retourne l'indice de la première occurence de la valeur
console.log(ami.indexOf("Toto")); // 0
console.log(ami.indexOf("Tata")); // 2
```

## Les Objets

### Définition d'un Objet

Un objet est un ensemble de propriétés et une propriété est une association entre un nom (aussi appelé clé) et une valeur.

La valeur d'une propriété peut être une fonction, auquel cas la propriété peut être appelée « méthode ».

En plus des objets natifs fournis par l'environnement, il est possible de construire ses propres objets.

### Les Méthodes d'Objet

#### Créer une méthode d'Objet

```js
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
console.log(mathys["calcAge"](mathys.age)); // 25

// This keyword
console.log(mathys.calcAgeThis()); // 25
```

### L'Opérateur this

L'opérateur this est une sorte de super variable qui prendra différentes valeurs suivant le contexte dans lequelle elle est utilisée.

Par défaut this prend comme valeur la variable globale (window sur le navigateur, global sur nodejs) mais sa valeur peut changer dans une fonction suivant comment elle est appellée.

```js
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

  // Résumé de l'objet mathys avec opérateur this et template literal
  getResume: function () {
    return `${this.nomDeFamille} ${this.prenom} est un ${
      this.job
    } de ${this.calcAge()} ans et il possède ${
      this.permis ? "un" : "pas"
    } permis de conduire`;
  },
};

console.log(mathys.calcAge()); // 25
console.log(mathys.getResume()); // Fumery Mathys est un développeur de 25 ans et il possède un permis de conduire
```

### Différences entre la notation en point et en crochet

#### La notation en Point (Dot Notation)

1. Les identifiants de propriétés peuvent uniquement être en caractères alphanumérique (\_ et $)
2. Les identifiants de propriétés ne peuvent pas commencer par un nombre.
3. Les identifiants de propriétés ne peuvent pas contenir de variables.

> obtenir = objet.propriété;

> objet.propriété = définir;

#### La notation en Crochet (Bracket notation)

1. Les identifiants de propriétés sont obligatoirement des Strings ou une variable référençant un String
2. On peut utiliser des variables, des espaces et des Strings commençant par des nombres.

> obtenir = objet[nom_de_propriété];

> objet[nom_de_propriété] = définir;

## Les Itérations

Les boucles permettent de répéter une certaine logique suivant une condition précise. Il existe plusieurs manières de créer des boucles.

### La Boucle While

La boucle while permet d'exécuter un code tant que la condition passée en paramètre n'est pas satisfaite.

> Il faudra faire attention avec l'utilisation de cette boucle à ce que la condition devienne fausse à un moment donné au risque de voir la boucle se dérouler de manière infinie.

```js
// While continue tant que la condition est true
let rep = 1;
while (rep <= 10) {
  rep++;
  console.log(`Souveler de la fonte répétition ${rep}`);
}
```

Il est possible de **forcer la sortie de la boucle à l'aide du mot clef break**

### La Boucle For

La boucle for permet d'exécuter un code un certain nombre de fois en précisant manuellement l'intervalle pour lequel on souhaite faire la boucle. Elle présente une notation plus concise que le while.

```js
// For Loop continue tant que la condition est true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Souveler de la fonte répétition ${rep}`);
}
// Souveler de la fonte répétition 1
// Souveler de la fonte répétition 2
// ...
// Souveler de la fonte répétition 10
```

### Looping d'un tableau

### Boucle For

#### Exemple 1

```js
const mathys = [
  "Mathys",
  "Fumery",
  2022 - 1997,
  "Développeur",
  ["Toto", "Tati", "Tata"],
  true,
];

const types = [];

for (let i = 0; i < mathys.length; i++) {
  //Lecture du tableau mathys
  console.log(mathys[i], typeof mathys[i]);
  // Mathys string
  // Fumery string
  // 25 number
  // ...
  // true boolean

  // Remplir le tableau types
  types.push(typeof mathys[i]);
}

console.log(types);
// [ 'string', 'string', 'number', 'string', 'object', 'boolean' ]
```

### Exemple 2

```js
const annees = [1991, 1997, 2002, 2008];
const ages = [];

for (let i = 0; i < annees.length; i++) {
  ages.push(2022 - annees[i]);
}
console.log(ages); // [ 31, 25, 20, 14 ]
```

### Continue & Break

L'instruction continue arrête l'exécution des instructions pour l'itération de la boucle courante ou de la boucle étiquetée. L'exécution est reprise à l'itération suivante.

```js
const mathys = [
  "Mathys",
  "Fumery",
  2022 - 1997,
  "Développeur",
  ["Toto", "Tati", "Tata"],
  true,
];

// Continue & Break

for (let i = 0; i < mathys.length; i++) {
  if (typeof mathys[i] !== "string") continue;
  console.log(mathys[i], typeof mathys[i]);
}

// Mathys string
// Fumery string
// Développeur string
```

### Looping à l'envers

```js
const mathys = [
  "Mathys",
  "Fumery",
  2022 - 1997,
  "Développeur",
  ["Toto", "Tati", "Tata"],
  true,
];

// Looping à l'envers

for (let i = mathys.length - 1; i >= 0; i--) {
  console.log(i, mathys[i]);
}
//5 true
// 4 [ 'Toto', 'Tati', 'Tata' ]​
// 3 'Développeur'​
// 2 25​
// 1 'Fumery'​
// 0 'Mathys'​
```

### Loop in Loop

```js
for (let exercice = 1; exercice < 4; exercice++) {
  console.log(`--------------- Début de l'exercice ${exercice}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Soulever de la fonte répétition numéro ${rep}`);
  }
}

// --------------- Début de l'exercice 1
// Soulever de la fonte répétition numéro 1
// ...
// Soulever de la fonte répétition numéro 5
// --------------- Début de l'exercice 2
// Soulever de la fonte répétition numéro 1
// ...
// Soulever de la fonte répétition numéro 5
```
