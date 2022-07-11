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
