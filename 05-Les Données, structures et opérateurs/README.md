# Les données, structures et opérateurs

## Table des matières

- [Affecter par décomposition](#affecter-par-décomposition)
  - [Définition](#définition)
- [Destructuring : Tableau](#destructuring-tableau)
  - [Exemple simple 1](#exemple-simple-1)
  - [Exemple simple 2](#exemple-simple-2)
  - [Affectation sans déclaration](#affectation-sans-déclaration)
  - [Echange de variables](#echange-de-variables)
  - [Ignorer certaines valeurs](#ignorer-certaines-valeurs)
  - [Affecter le reste d'un tableau à une variable](#affecter-le-reste-dun-tableau-à-une-variable)
- [Destructuring : Objects]()

## Affecter par décomposition

### Définition

L'affectation par décomposition (destructuring en anglais) est une expression JavaScript qui permet d'extraire (unpack en anglais) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.

L'intérêt de l'assignation par décomposition est de pouvoir lire une structure entière en une seule instruction.

## Destructuring: Tableau

### Exemple simple 1

```js
const x = [1, 2, 3, 4, 5]; // On crée un "paquet" de données
const [y, z] = x; // On utilise l'affectation par décomposition

console.log(y); // 1
console.log(z); // 2
```

### Exemple simple 2

```js
const toto = ["un", "deux", "trois"];

// sans utiliser la décomposition
const un = toto[0];
const deux = toto[1];
const trois = toto[2];

// en utilisant la décomposition
const [un, deux, trois] = toto;
```

### Affectation sans déclaration

L'affectation par décomposition peut être effectuée sans qu'il y ait de déclaration directement dans l'instruction d'affectation.

```js
let a, b;
[a, b] = [1, 2]; // Ceci n'est pas un tableau

console.log(a); // 1
console.log(b); // 2
```

### Echange de variables

S'il n'avait pas été possible d'utiliser l'affectation par décomposition, l'échange des valeurs aurait nécessité une variable temporaire

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

### Ignorer certaines valeurs

On peut également ignorer certaines des valeurs renvoyées qu'on ne souhaiterait pas traiter :

```js
const toto = ["1", "2", "3", "4"];

// en utilisant la décomposition
const [un, , trois, quatre] = toto;
console.log(un);
console.log(trois);
console.log(quatre);
```

### Affecter le reste d'un tableau à une variable

On peut également utiliser la décomposition d'un tableau afin d'en affecter une partie à une variable **grâce au spread Opérateur (...)** :

```js
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```
