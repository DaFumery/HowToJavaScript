# JavaScript Fondamentales, Pt. 1

## Table des matières

- [Hello World!](#hello-world)
- [Variables et Valeurs](#Variables-et-Valeurs)
- [Les Types de Données](#Les-Types-de-Données)
  - [Différences entre un Object et une Primitive](#Différences-entre-un-Object-et-une-Primitive)
  - [Les 7 données Primitive](#Les-7-données-Primitive)
  - [TypeOf](#TypeOf)
- [let, const and var](#let,-const-and-var)
  - [La déclaration let](#La-déclaration-let)
  - [La déclaration const](#La-déclaration-const)
  - [La déclaration var](#La-déclaration-var)
  - [En résumé](#en-résumé)
- [Les Opérateurs Basics](#Les-Opérateurs-Basics)
  - [Opérateurs d'affectation](#opérateurs-daffectation)
  - [Opérateurs de comparaison](#Opérateurs-de-comparaison)
  - [Opérateurs arithmétiques](#opérateurs-arithmétiques)
  - [Opérateurs logiques](#opérateurs-logiques)
- [Précédence des Opérateurs](#Précédence-des-Opérateurs)
  - [Classement des précédences des opérateurs](#classement-des-précédences-des-opérateurs-du-plus-haut-au-plus-bas)
- [Les Templates Literals](#Les-Templates-Literals)
- [La Condition If / Else](#la-condition-if--else)
- [La Conversion et Coercition de typage](#la-conversion-et-Coercition-de-typage)
  - [Type Conversion](#type-conversion)
    - [Définition de type conversion](#définition-de-type-conversion)
    - [Converting Strings to Numbers](#converting-strings-to-numbers)
    - [Converting Numbers to Strings](#converting-numbers-to-strings)
    - [Converting Booleans to Numbers](#converting-booleans-to-numbers)
  - [Type Coercition](#type-coercition)
    - [Définition de type coercition](#définition-de-type-coercition)
    - [Autre exemple](#autre-exemple)
- [Les Valeurs True et False](#Les-Valeurs-True-et-False)
  - [Définition de Booléen](#définition-de-booléen)
- [Les Opérateurs d'égalité](#Les-Opérateurs-d'égalité)
  - [Définitions des opérateurs d'égalité](#définitions-des-opérateurs-dégalité)
    - [Égalité stricte](#égalité-stricte)
    - [Égalité simple](#égalité-simple)
- [La Logique Booléenne](#la-Logique-Booléenne)
  - [ET logique (&&)](#et-logique-&&)
  - [OU logique (||)](#ou-logique-||)
  - [NOT logique (!)](#non-logique-!)
- [Les Opérateurs Logique](#Les-Opérateurs-Logique)
- [La Condition Switch](#La-Condition-Switch)
- [Les Opérateurs Ternaires](#Les-Opérateurs-Ternaires)

## Hello World!

```js
// Windows Alert
alert("Hello World!");

// Console
console.log("Hello World!"); // 'Hello World!'

// Variable js avec valeur "Incroyable"
let js = "Incroyable";

// Réassignation de la variable js
js = "C'est chiant à mourir mec";

// Condition If avec opérateur d'égalité parfaite
if (js === "C'est chiant à mourir mec") {
  console.log("Mais je continue quand même"); // 'Mais je continue quand même'
}
```

## Variables et Valeurs

- On utilise le **camelCase** pour nommer une variable en JS.
- On ne peut pas utiliser d'autres caractères que les lettres, des chiffres, des traits de soulignement ou le signe dollar.
- On ne déclare **jamais** une variable par un chiffre.
- Les keywords "this", "new", "break", "class", "final", "eval" et bien d'autres sont des keywords réservés par JavaScript.

```js
// Commence par un chiffre
let 420blazeIt = 'Fume, Fume' // Error

// Illegal Character
let blaze&It = 420 // Error

// Reserved Keywords
let new = 'Roule, Roule' // Error
```

```js
// On déclare une variable prénom de valeur "Mathys"
let prenom = "Mathys";

// Renvoie la valeur de la variable prénom
console.log(prenom); // "Mathys"

// On réassigne à la variable prénom la valeur "Bob"
prenom = "Bob";
console.log(prenom); // "Bob"

// On déclare une constante en majuscule
let PI = 3.1415;
```

## Les Types de Données

### Différences entre un Object et une Primitive

Une valeur peut être de deux catégories:

- **Object**

```js
let me = {
  name: "Mathys",
  age: 25,
};
```

- **Primitive**: Composée de 7 types de données

```js
let prenom = "Mathys;
let age = 25;
```

**Une valeur est primitive que lorsqu'elle n'est pas un object.**

### Les 7 données **Primitive**

**JavaScript a un typage dynamique** : nous n'avons pas à définir manuellement le type de données de la valeur stockée dans une variable.
Au lieu de cela, **les types de données sont déterminés automatiquement**.

- **Number**: Nombre entier ou décimal.
  > Pour les entiers et les décimaux.
- **String**: Séquence de caractères.
  > Pour le texte.
- **Booléen**: Type logique de valeur True ou False
  > Pour la prise de décision
- **Undefined**: Variable déclarée mais sans valeur (valeur vide).
- **Null**: Valeur d'affectation qui signie "Pas de Valeur". Il est du type Object.
- **Symbol**: Valeur unique qui ne peut être changée.
- **BigInt**: Contient un entier plus large que ce que peut contenir **Number**.

### TypeOf

Pour connaître le type de donnée d'une valeur on utilise le keyword:

> typeof

```js
let booleanValue = true;
console.log(typeof booleanValue); // boolean
console.log(typeof 25); // number
console.log(typeof "Mathys"); // string
```

## let, const and var

Lors de la déclaration d'une variable, on privilégie d'abord **const**, puis **let** et enfin **var** (var est de moins en moins utilisé)

### La déclaration let

La déclaration **let** permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.

```js
let anneeNaissance;
anneeNaissance = 1997;
console.log(anneeNaissance); // 1997
```

### La déclaration const

La déclaration **const** permet de créer une constante nommée accessible uniquement en lecture. Cela ne signifie pas que la valeur contenue est immuable, uniquement que **l'identifiant ne peut pas être réaffecté.**

> On doit obligatoirement initialiser une valeur à une variable const.

```js
const anneeNaissance = 1997;
anneeNaissance = 1996; // Error
```

### La déclaration var

La déclaration **var**, permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction).

> La portée d'une variable déclarée avec var est le contexte d'exécution courant

#### En résumé

![En résumé](img/let-var-const-3.png)

## Les Opérateurs Basics

### Opérateurs d'affectation

**Un opérateur d'affectation** assigne une valeur à son opérande gauche, valeur basée sur celle de l'opérande droit.

- Affectation après addition

```js
x = x + y;
x += y;
```

- Affectation après soustraction

```js
x = x - y;
x -= y;
```

- Affectation après multiplication

```js
x = x * y;
x *= y;
```

- Affectation après division

```js
x = x / y;
x /= y;
```

- Affectation du reste

```js
x = x % y;
x %= y;
```

### Opérateurs de comparaison

**Un opérateur de comparaison** compare ses deux opérandes et renvoie un valeur booléenne correspondant au résultat de la comparaison (vraie ou fausse). Les opérandes peuvent être des nombres, des chaînes de caractères, des booléens ou des objets.

- Égalité (==)
  > Renvoie true si les opérandes sont égaux après conversion en valeurs de mêmes types.

```js
let value1 = 3;
let value2 = "3";
console.log(value1 == value2); // True
```

- Inégalité (!=)
  > Renvoie true si les opérandes sont différents.

```js
let value1 = 4;
let value2 = "3";
console.log(value1 != value2); // True
```

- Égalité parfaite/stricte (===)
  > Renvoie true si les opérandes sont égaux et de même type.

```js
let value1 = 3;
let value2 = 3;
console.log(value1 === value2); // True
```

- Inégalité stricte (!=)
  > Renvoie true si les opérandes ne sont pas égaux ou s'ils ne sont pas de même type.

```js
let value1 = 3;
let value2 = "3";
console.log(value1 !== value2); // True
```

- Supériorité stricte (>)
  > Renvoie true si l'opérande gauche est supérieur (strictement) à l'opérande droit.

```js
let value1 = 5;
let value2 = "3";
console.log(value1 > value2); // True
```

- Supériorité ou égalité (>=)
  > Renvoie true si l'opérande gauche est supérieur ou égal à l'opérande droit.

```js
let value1 = 3;
let value2 = "3";
console.log(value1 >= value2); // True
```

- Infériorité stricte (<)
  > Renvoie true si l'opérande gauche est inférieur (strictement) à l'opérande droit.

```js
let value1 = 3;
let value2 = "5";
console.log(value1 < value2); // True
```

- Infériorité ou égalité (<=)
  > Renvoie true si l'opérande gauche est inférieur ou égal à l'opérande droit.

```js
let value1 = 3;
let value2 = "3";
console.log(value1 <= value2); // True
```

### Opérateurs arithmétiques

**Les opérateurs arithmétiques** ont pour opérandes des valeurs numériques (des littéraux ou des variables) et renvoient une valeur numérique.

- Reste (%)
  > Renvoie le reste entier de la division entre les deux opérandes.

```js
let value1 = 12;
let value2 = 5;
console.log(value1 % value2); // 2
```

- Incrément (++)
  > Ajoute un à son opérande.

```js
let value1 = 3;
let value2 = 3;
++value1;
value2++;
console.log(value1); // 4
console.log(value2); // 4
```

- Décrément (--)
  > Soustrait un à son opérande.

```js
let value1 = 3;
let value2 = 3;
--value1;
value2--;
console.log(value1); // 2
console.log(value2); // 2
```

- Négation unaire (-)
  > Renvoie la valeur opposée de l'opérande.

```js
let value1 = 3;
console.log(-value1); // -3
```

- Plus unaire (+)
  > Si l'opérande n'est pas un nombre, il tente de le convertir en une valeur numérique.

```js
let value1 = +"3";
let value2 = +true;
console.log(value1); // number 3
console.log(value2); // 1
```

- Opérateur d'exponentiation (\*\*) (puissance)
  > Calcule un nombre (base) élevé à une puissance donnée (soit base^puissance)

```js
let value1 = 3;
let value2 = 5;
let total = value1 ** value2;
console.log(total); // 243
```

### Opérateurs logiques

- ET logique (&&)
  > Renvoie expr1 s'il peut être converti à false, sinon renvoie expr2
  > Dans le cas où on utilise des opérandes booléens, && renvoie true si les deux opérandes valent true

```js
var a1 = true && true; // t && t renvoie true
var a2 = true && false; // t && f renvoie false
var a3 = false && true; // f && t renvoie false
var a4 = false && 3 == 4; // f && f renvoie false
var a5 = "Chat" && "Chien"; // t && t renvoie Chien
var a6 = false && "Chat"; // f && t renvoie false
var a7 = "Chat" && false; // t && f renvoie false
```

- OU logique (||)
  > Renvoie expr1 s'il peut être converti à true, sinon renvoie expr2
  > Dans le cas où on utilise des opérandes booléens, || renvoie true si l'un des opérandes vaut true, si les deux valent false, il renvoie false

```js
var o1 = true || true; // t || t renvoie true
var o2 = false || true; // f || t renvoie true
var o3 = true || false; // t || f renvoie true
var o4 = false || 3 == 4; // f || f renvoie false
var o5 = "Chat" || "Chien"; // t || t renvoie Chat
var o6 = false || "Chat"; // f || t renvoie Chat
var o7 = "Chat" || false; // t || f renvoie Chat
```

- NON logique (!)
  > Renvoie false si son unique opérande peut être converti en true, sinon il renvoie true.

```js
var n1 = !true; // !t renvoie false
var n2 = !false; // !f renvoie true
var n3 = !"Chat"; // !t renvoie false
```

## Précédence des Opérateurs

La précédence des opérateurs détermine l'ordre dans lequel les opérateurs sont évalués. Les opérateurs avec la plus haute précédence sont évalués en premier.

### Classement des précédences des opérateurs (du plus haut au plus bas)

#### Niveau 19

- **Opérateur de groupement (...)**
  > L'opérateur de groupement contrôle la précédence de l'évaluation dans les expressions.

```js
console.log(1 + 2 * 3); // 1 + 6
```

- **Appel de fonction … ( … )**
  > L'appel d'une fonction exécute une fonction avec les paramètres définis.

```js
function carré(nombre) {
  return nombre * nombre;
}
console.log(carré(4)); // 16
```

#### Niveau 18

- **Chaînage optionnel (?.)**
  > L'opérateur de chaînage optionnel ?. permet de lire la valeur d'une propriété située profondément dans une chaîne d'objets connectés sans avoir à valider expressément que chaque référence dans la chaîne est valide.

```js
const tanyDrej0 = {
  prenom: "Mathys",
  dog: {
    nom: "Chaussette",
  },
};

const dogNom = tanyDrej0.dog?.nom;
console.log(dogNom); // Chaussette
```

- **Accesseurs de propriété en point (… . …)**
  > L'accesseurs de propriété en crochet permet d'accéder aux valeurs d'un objet

```js
const tanyDrej0 = {
  prenom: "Mathys",
  dog: {
    nom: "Chaussette",
  },
};

console.log(tanyDrej0.dog.nom); // Chaussette
```

- **Accesseurs de propriété en crochet (… [ … ])**
  > L'accesseurs de propriété en crochet permet d'accéder aux valeurs d'un objet

```js
const tanyDrej0 = {
  prenom: "Mathys",
  dog: {
    nom: "Chaussette",
  },
};

console.log(tanyDrej0["dog"]["nom"]); // Chaussette
```

#### Niveau 16

- **Incrémentation suffixe (...++)**
  > L'opérateur incrémentera la valeur et renverra la valeur avant l'incrément.

```js
let estCeLheureDuGouter = 419;
estCeLheureDuGouter++;
console.log(estCeLheureDuGouter); // 420
```

- **Décrémentation suffixe (...--)**
  > L'opérateur décrémentera la valeur et renverra la valeur avant l'incrément.

```js
let estCeLheureDuGouter = 421;
estCeLheureDuGouter--;
console.log(estCeLheureDuGouter); // 420
```

#### Niveau 15

- **NON logique (!)**
  > L'opérateur logique NON (!) prend l'opposé logique de la valeur fournie par son opérande. Vrai devient faux et vice versa.

```js
const a = 3;
console.log(!(a > 0)); // false
```

- **Plus unaire (+)**
  > L'opérateur de plus unaire (+) précède son opérande et évalue son opérande en essayant de le convertir en nombre si ce n'est pas déjà une valeur numérique.

```js
const x = 1;
const y = -1;

console.log(+x); // 1
console.log(+y); // -1
console.log(+""); // 0
console.log(+true); // 1
console.log(+false); // 0
```

- **Négation unaire (-)**
  > L'opérateur de négation unaire (-) se place devant son opérande et le transforme en son opposé.

```js
const x = 1;
const y = -1;

console.log(-x); // -1
console.log(-y); // 1
console.log(-""); // -0
console.log(-true); // -1
console.log(-false); // -0;
```

- **Incrémentation préfixe (++...)**
  > L'opérateur incrémentera la valeur et renverra la valeur après l'incrément.

```js
let estCeLheureDuGouter = 419;
++estCeLheureDuGouter;
console.log(estCeLheureDuGouter); // 420
```

- **Décrémentation préfixe (--...)**
  > L'opérateur décrémentera la valeur et renverra la valeur après l'incrément.

```js
let estCeLheureDuGouter = 421;
--estCeLheureDuGouter;
console.log(estCeLheureDuGouter); // 420
```

#### Niveau 14

- **Exponentiation (\*\*)**
  > L'opérateur d'exponentiation (\*\*) fournit le résultat obtenu lorsqu'on élève le premier opérande à la puissance indiquée par le second.

```js
console.log(3 ** 4); // 81
```

#### Niveau 13

- **Multiplication (\*)**
  > L'opérateur de multiplication (\*) fournit le produit de la multiplication des deux opérandes.

```js
console.log(3 * 4); // 12
```

- **Division (/)**
  > L'opérateur de division (/) fournit le quotient de l'opérande gauche (le numérateur) divisé par l'opérande droite (le dénominateur).

```js
console.log(3 / 2); // 1.5
```

- **Reste (%)**
  > L'opérateur du reste (%) renvoie le reste de la division de l'opérande gauche par l'opérande droit. Le résultat a toujours le signe du numérateur.

```js
console.log(13 % 5); // 3
```

#### Niveau 12

- **Addition (+)**
  > L'opérateur d'addition (+) produit la somme de deux opérandes numériques ou la concaténation de deux chaînes de caractères.

```js
console.log(3 + 4); // 7
```

- **Soustraction (-)**
  > L'opérateur de soustraction effectue la soustraction entre les deux opérandes et fournit la différence obtenue.

```js
console.log(3 - 4); // -1
```

#### Niveau 5

- **ET logique (&&)**
  > L'opérateur ET logique renvoie vrai si et uniquement si ses deux opérandes sont true ou équivalents à true.

```js
const a = 3;
const b = -2;

console.log(a > 0 && b > 0); // false
```

#### Niveau 4

- **OU logique (||)**
  > L'opérateur OU logique renvoie vrai si et seulement si au moins un de ses opérandes est vrai. Cet opérateur est généralement utilisé avec des valeurs booléennes et, lorsque c'est le cas, il renvoie une valeur booléenne.

```js
const a = 3;
const b = -2;

console.log(a > 0 || b > 0); // true
```

- **Coalescence des nuls (??)**
  > L'opérateur de coalescence des nuls est un opérateur logique qui renvoie son opérande de droite lorsque son opérande de gauche vaut null ou undefined et qui renvoie son opérande de gauche sinon.

```js
const foo = null ?? "default string";
console.log(foo); // "default string"

const baz = 0 ?? 42;
console.log(baz); // 0
```

#### Niveau 3

- **L'opérateur conditionnel ternaire**
  > L'opérateur (ternaire) conditionnel est le seul opérateur JavaScript qui comporte trois opérandes. Cet opérateur est fréquemment utilisé comme raccourci pour la déclaration de Instructions/if...else.

```js
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true)); // $2.00
console.log(getFee(false)); // "$10.00"
console.log(getFee(null)); // "$10.00"
```

#### Niveau 2

- **Affectation ((=), (+=), (-=),(\*_=), (_=), (/=), (%=)...)**
  > L'opérateur d'affectation "affecte" une valeur à une variable.

#### Niveau 1

- **Virgule (,)**
  > L'opérateur virgule permet d'évaluer chacun de ses opérandes (de la gauche vers la droite) et de renvoyer la valeur du dernier opérande.

```js
let x = 1;
x = (x++, x);
console.log(x); // 2

x = (2, 3);
console.log(x); // 3
```

## Les Templates Literals

Les templates Literals sont des littéraux de chaînes de caractères permettant d'intégrer des expressions.

```js
const prenom = "Mathys";
const travail = "développeur";
const anneeNaissance = 1997;

const mathys = `Je m'appelle ${prenom}, j'ai ${
  2022 - anneeNaissance
} ans et je suis ${travail}`;

console.log(mathys);
// Je m'appelle Mathys, j'ai 25 ans et je suis développeur
```

## La Condition If / Else

L'instruction if exécute une instruction si une condition donnée est vraie ou équivalente à vrai. Si la condition n'est pas vérifiée, il est possible d'utiliser une autre instruction.

```js
const age = 17;
const majeur = 18;

if (age >= majeur) {
  console.log("Mathys peut commander une Kriek Rouge au bar");
} else {
  console.log(
    `Mathys devra attendre ${
      majeur - age
    } année(s) pour consommer une Kriek de femme`
  );
}
// Mathys devra attendre 1 année(s) pour consommer une bière
```

## La Conversion et Coercition de typage

### Type Conversion

#### Définition de type Conversion

**La conversion de type (ou transtypage)** est le transfert d'une donnée d'un type de donnée vers un autre. Une conversion implicite se produit quand le compilateur affecte les types de donnée automatiquement, mais le code source peut aussi demander à ce qu'une conversion ait lieu de manière explicite.

#### Converting Strings to Numbers

```js
const inputAnneeString = "1997";
console.log(inputAnneeString + 18); // "199718"

// Le constructeur Number() permet de créer un objet Number.
console.log(Number(inputAnneeString) + 18); // 2015

const inputAnneeNumber = Number(inputAnneeString);
console.log(typeof inputAnneeString); // string
console.log(typeof inputAnneeNumber); // number
```

#### Converting Numbers to Strings

```js
const inputAnneeNumber = 1997;
console.log(inputAnneeNumber + "18"); // 1997"18"
console.log(typeof inputAnneeNumber); // number

// Le constructeur String() permet de créer un objet String.
console.log(String(inputAnneeNumber) + 18); // "199718"

const inputAnneeString = String(inputAnneeNumber);
console.log(typeof inputAnneeString); // string
console.log(typeof inputAnneeNumber); // number
```

#### Converting Booleans to Numbers

```js
const inputTrue = true;
console.log(inputTrue); // true
console.log(typeof inputTrue); // boolean

// Le constructeur Number() permet de créer un objet Number sur un booléen.
console.log(Number(inputTrue)); // 1

const inputToNumber = Number(inputTrue);
console.log(typeof inputTrue); // boolean
console.log(typeof inputToNumber); // number

// Le constructeur String() permet de créer un objet String sur un booléen.
console.log(String(inputTrue)); // "true"

const inputToString = String(inputTrue);
console.log(typeof inputTrue); // boolean
console.log(typeof inputToString); // string
```

### Type Coercition

#### Définition de type Coercition

**La type coercition** est la conversion automatique ou implicite de valeurs d'un type de données à un autre. La différence fondamentale entre la type coercition et la type conversion est que **la type coercition est implicite** alors que **la type conversion peut être implicite ou explicite**.

```js
// La valeur 25 de type nombre est automatiquement converti en string lors de la concaténation
const coercition1 = "J'ai " + 25 + " ans";
console.log(coercition1); // "J'ai 25 ans"
const coercition2 = "J'ai " + "25" + " ans";
console.log(coercition2); // "J'ai 25 ans"

// La coercition permet de calculer des valeurs numériques meme contenus dans des strings.
const coercition3 = "23" * "2";
console.log(coercition3); // 46

console.log(typeof coercition1); // string
console.log(typeof coercition2); // string
console.log(typeof coercition3); // number
```

#### Autre exemple

```js
// La présence du (+) permet à JS de créer une concaténation des valeurs de différents types vers un type commun : le string.
let n1 = "1" + 1 + 1;
console.log(n1); // "111"
console.log(typeof n1); // string

// La présence du (- 1) permet à JS de convertir automatiquement le string en number
n1 = n1 - 1; // "111" - 1
console.log(n1); // 110
console.log(typeof n1); // number

// La présence du (- 2) permet à JS de convertir automatiquement le string en number
let n2 = "1" + 1 - 2; // "11" - 2
console.log(n2); // 9
console.log(typeof n2); // number
```

## Les Valeurs True et False

### Définition de Booléen

La valeur passée en premier paramètre est, si nécessaire, convertie en valeur booléenne.

Si la valeur est omise ou est 0, -0, null, false, NaN, undefined ou une chaîne de caractères vide (""), l'objet a une valeur initiale de false (faux).

Toutes les autres valeurs, y compris n'importe quel objet, un tableau vide ([]), ou une chaîne de caractères "false", créent un objet avec une valeur initiale de true (vrai).

```js
let typeNumber0 = 0;
let typeNumber1 = 1;
let typeUndefined;
let typeString = "Mathys";
let typeObject = {};
let typeStringVide = "";

// La Méthode Boolean() permet de convertir une valeur en valeur Booléenne
console.log(Boolean(typeNumber0)); // false
console.log(Boolean(typeNumber1)); // true
console.log(Boolean(typeUndefined)); // false
console.log(Boolean(typeString)); // true
console.log(Boolean(typeObject)); // true
console.log(Boolean(typeStringVide)); // false

const argent = 100; // argent = true
if (argent) {
  console.log("Donne ta tune à Charles Hoskinson");
} else {
  console.log("Comment il va se nourrir Charlie?");
}
// Donne ta tune à Charles Hoskinson

let taille; // taille = false (undefined)
if (taille) {
  console.log("Tu as défini ta taille");
} else {
  console.log("Tu n'as pas défini ta taille");
}
// Tu n'as pas défini ta taille
```

## Les Opérateurs d'égalité

JavaScript fournit trois opérations permettant de comparer des valeurs :

- **L'égalité stricte** (ou identité) utilisant ===
- **L'égalité faible** utilisant ==
- **Object.is** (ajouté avec ECMAScript 2015).

### Définitions des opérateurs d'égalité

- **L'égalité faible (==) effectuera une conversion** des deux éléments à comparer avant d'effectuer la comparaison
- **L'égalité stricte (===) effectuera la même comparaison mais sans conversion préalable** (elle renverra toujours false si les types des deux valeurs comparées sont différents)
- Object.is() se comportera comme l'égalité stricte sauf pour les valeurs NaN, -0 et +0 : pour Object.is(), -0 et +0 seront différents mais on aura Object.is(NaN, NaN) qui sera true.

#### Égalité stricte

```js
// Egalité stricte
const age = "18";
if (age === 18)
  console.log("Tu es maintenant un adulte dépréssif (égalité stricte)"); // Condition non remplie
```

#### Égalité simple

```js
// Egalité faible
if (age == 18)
  console.log("Tu es maintenant un adulte dépréssif (égalité simple)");
// Tu es maintenant un adulte dépréssif (égalité simple)
```

## La Logique Booléenne

### ET logique (&&)

> TRUE lorsque les deux valeurs valent true.

```js
var a1 = true && true; // t && t renvoie true
var a2 = true && false; // t && f renvoie false
var a3 = false && true; // f && t renvoie false
var a4 = false && 3 == 4; // f && f renvoie false
var a5 = "Chat" && "Chien"; // t && t renvoie Chien
var a6 = false && "Chat"; // f && t renvoie false
var a7 = "Chat" && false; // t && f renvoie false
```

### OU logique (||)

> TRUE lorsque au moins une des valeurs vaut true.

```js
var o1 = true || true; // t || t renvoie true
var o2 = false || true; // f || t renvoie true
var o3 = true || false; // t || f renvoie true
var o4 = false || 3 == 4; // f || f renvoie false
var o5 = "Chat" || "Chien"; // t || t renvoie Chat
var o6 = false || "Chat"; // f || t renvoie Chat
var o7 = "Chat" || false; // t || f renvoie Chat
```

### NON logique (!)

> TRUE si vaut false, FALSE si vaut true. Renvoie l'inverse de la valeur booléenne actuelle.

```js
var n1 = !true; // !t renvoie false
var n2 = !false; // !f renvoie true
var n3 = !"Chat"; // !t renvoie false
```

## Les Opérateurs Logique

## La Condition Switch

## Les Opérateurs Ternaires
