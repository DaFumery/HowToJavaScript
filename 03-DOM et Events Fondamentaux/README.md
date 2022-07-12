# DOM et Events Fondamentaux

## Table des matières

- [Qu'est ce que le DOM](#quest-ce-que-le-dom)
- [Manipulation des éléments du DOM](#manipulation-des-éléments-du-dom)
  - [Sélectionner un élément](#sélectionner-un-élément)
  - [Sélectionner plusieurs éléments](#sélectionner-plusieurs-éléments)
  - [Obtenir des informations sur les élements](#obtenir-des-informations-sur-les-élements)
  - [Modifier un élément](#modifier-un-élément)
  - [Les événements](#les-événements)
- [Traverser le DOM](#traverser-le-dom)
- [Les Méthodes Math](#les-méthodes-math)
  - [Math.random()](#mathrandom)
  - [Math.trunc()](#mathtrunc)
  - [Math.round()](#mathround)
  - [Math.abs()](#mathabs)
  - [Math.ceil()](#mathceil)
  - [Math.floor()](#mathfloor)
  - [Math.max(x,y,...)](#mathmaxxy)
  - [Math.min(x,y,...)](#mathminxy)
  - [Math.sqrt()](#mathsqrt)

## Qu'est ce que le DOM

**Le Document Object Model ou DOM (pour modèle objet de document) est une interface de programmation pour les documents HTML, XML et SVG.**

Il fournit une représentation structurée du document sous forme d'un arbre et définit la façon dont la structure peut être manipulée par les programmes, en termes de style et de contenu.

Le DOM représente le document comme un ensemble de nœuds et d'objets possédant des propriétés et des méthodes. Les nœuds peuvent également avoir des gestionnaires d'événements qui se déclenchent lorsqu'un événement se produit. Cela permet de manipuler des pages web grâce à des scripts et/ou des langages de programmation.

## Manipulation des éléments du DOM

### Sélectionner un élément

```js
// Pour sélectionner un élément
document.body; // Récupère l'élément body
document.getElementById("demo"); // Sélectionne l'élément avec l'id demo
document.querySelector(".demo"); // Sélectionne le premier élément correspondant au sélecteur CSS
```

### Sélectionner plusieurs éléments

```js
// Pour sélectionner plusieurs éléments
document.getElementsByClassName("demo"); // Sélectionne les éléments avec la class démo
document.getElementsByTagName("p"); // Sélectionne les éléments <p>
var elements = document.querySelectorAll(".demo"); // Sélectionne les éléments correspondant au sélecteur CSS

// Ces méthodes renvoient un objet NodeList enumerable
// On peut parcourir cette liste d'éléments comme un tableau
for (var i = 0; i < elements.length; ++i) {
  var element = elements[i]; // objet de type Element
}
```

### Obtenir des informations sur les élements

```js
element.getAttribute("attribut"); // Permet de récupérer la valeur d'un attribut
element.style; // Permet de récupérer les styles associés à l'élément
element.classList; // Permet de récupérer la liste des classes associées à un élément
element.offsetHeight; // Donne la hauteur réel de l'élément
element.textContent; // Représente le contenu textuel d'un nœud et de ses descendants.
element.value; // Retourne la valeur de l'élément
```

### Modifier un élément

```js
element.setAttribute("href", "http://github.com");
element.style.fontSize = "24px";
element.classList.add("red"); // Ajoute une class à l'élément
```

### Les événements

Nous avons créé des scripts qui se déroulent dès le chargement de la page. La plupart du temps on attendra un évènements pour effectuer une action.

Pour faire cela on va avoir besoin d'utiliser un écouteur d'évènement gràce à **la méthode addEventListener.**

#### Créer un écouteur

```js
element.addEventListener("Type d'évènement", callback);
// Par exemple pour détecter un clic sur un lien
element.addEventListener("click", function () {
  window.alert("Vous avez cliqué sur le lien");
});
```

#### L'événement

Le callback passé en second paramètre prend en paramètre l'évènement (le type de la variable dépendra de l'évènement écouté).

```js
// Par exemple pour détecter un clic sur un lien
element.addEventListener('click', function (e) {
    e.preventDefault() // Annule l'évènement
    e.stopPropagation() // Empèche l'évènement de remonter vers les éléments parents
    e.target // contient l'élément sur lequel on a cliqué
    e.currentTarget // contient l'élément sur lequel on a greffé l'écouteur
})
});
```

#### Supprimer un événement

Il est aussi possible de supprimer un écouteur d'évènement à l'aide de **la méthode removeEventListener.** Cette méthode prendra les mêmes paramètres que la méthode addEventListener.

```js
var next = function () {
  this.classList.add("red");
  this.removeEventListener("click", next);
};
element.addEventListener("click", next);
```

#### This

> Lorsqu'un écouteur est appellé la variable this fera systématiquement référence à l'élément sur lequel on écoute l'évènement (équivalent à currentTarget).

## Traverser le DOM

Un document HTML n'est au final qu'un arbre d'éléments HTML et texte qu'il est possible de parcourir de différentes manières. Cet arbre est appellé le DOM.

![DOM TREE STRUCTURE](img/dom-tree-structure.png)

## Les Méthodes Math

### Math.random()

> La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu)

```js
console.log(Math.random()); // 0.18
console.log(Math.random()); // 0.94
```

On peut combiner plusieurs méthodes Math()

```js
console.log(Math.round(Math.random() * 20)); // 13
console.log(Math.trunc(Math.random() * 20)); // 8
```

### Math.round()

> La fonction Math.round() retourne la valeur d'un nombre arrondi à l'entier le plus proche.

```js
console.log(Math.round(5.1)); // 5
console.log(Math.round(5.9)); // 6
console.log(Math.round(6.1)); // 6
console.log(Math.round(3.141592653589793)); // 3
```

### Math.trunc()

> La fonction Math.trunc() retourne la troncature entière d'un nombre en retirant sa partie décimale.

```js
console.log(Math.trunc(5.1)); // 5
console.log(Math.trunc(5.9)); // 5
console.log(Math.trunc(6.1)); // 6
console.log(Math.trunc(3.141592653589793)); // 3
```

### Math.abs()

> La fonction Math.abs() retourne la valeur absolue d'un nombre

```js
console.log(Math.abs(420)); // 420
console.log(Math.abs(-420)); // 420
console.log(Math.abs(420.69)); // 420.69
console.log(Math.abs(-420.69)); // 420.69
```

### Math.ceil()

> La fonction Math.ceil() retourne le plus petit entier supérieur ou égal au nombre donné.

```js
console.log(Math.ceil(420)); // 420
console.log(Math.ceil(-420)); // -420
console.log(Math.ceil(420.69)); // 421
console.log(Math.ceil(-420.69)); // -420
```

### Math.floor()

> La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.

```js
console.log(Math.floor(420)); // 420
console.log(Math.floor(-420)); // -420
console.log(Math.floor(420.69)); // 420
console.log(Math.floor(-420.69)); // -421
```

### Math.max(x,y,...)

> La fonction Math.max() renvoie le plus grand nombre d'une série de 0 ou plusieurs nombres.

```js
console.log(Math.max(0, 1, 2, 3, 4)); // 4
console.log(Math.max(0, -1, -2, -3, -4)); // 0
console.log(Math.max(0, 69, 420, 69.69, 420.69)); // 420.69
```

### Math.min(x,y,...)

> La fonction Math.min() renvoie le plus petit nombre d'une série de 0 ou plusieurs nombres.

```js
console.log(Math.min(0, 1, 2, 3, 4)); // 0
console.log(Math.min(0, -1, -2, -3, -4)); // -4
console.log(Math.min(0, 69, 420, 69.69, 420.69)); // 0
```

### Math.sqrt()

> La fonction Math.sqrt() renvoie la racine carrée d'un nombre.

```js
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(69)); // 8.30662386
console.log(Math.sqrt(-420.69)); // NaN
```
