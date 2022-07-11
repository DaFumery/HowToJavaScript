# JavaScript Fondamentales, Pt. 2

## Table des matières

- [Strict Mode](#strict-mode)
  - [Définition du Strict Mode](#définition-du-strict-mode)
  - [A quoi ça sert?](#a-quoi-ça-sert)
  - [Invoquer le Strict Mode](#invoquer-le-strict-mode)

## Strict Mode

### Définition du Strict Mode

Le mode strict de ECMAScript 5 permet de choisir une variante restrictive de JavaScript. Le mode strict n'est pas seulement un sous-ensemble de JavaScript : il possède intentionnellement des sémantiques différentes du code normal.
Il permet de réaliser des scripts plus sécurisés en évitant les erreurs accidentelles.

### A quoi ça sert?

**Le mode strict apporte quelques changements à la sémantique « normale » de JavaScript:**

1. Le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites (une exception sera levée).
2. Le mode strict corrige les erreurs qui font qu'autrement il est difficile pour les moteurs JavaScript d'effectuer des optimisations. Le code sera donc exécuté plus rapidement en mode strict, sans changer une seule ligne si cela n'est pas nécessaire.
3. Le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript.

### Invoquer le Strict Mode

> "use strict";

```js
"use strict";
var v = "Je suis en mode strict !";
```
