'use strict';

/////////////////////////////////////////////
/////////////////////////////////////////////
/// DOM Elements
const joueur0Ele = document.querySelector('.joueur--0');
const joueur1Ele = document.querySelector('.joueur--1');

const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');

const current0Ele = document.querySelector('#current--0');
const current1Ele = document.getElementById('current--1');

const btnReset = document.querySelector('.btn--reset');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEle = document.querySelector('.dice');

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Init values

let scores, currentScore, activeJoueur, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activeJoueur = 0;
  playing = true;

  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  current0Ele.textContent = 0;
  current1Ele.textContent = 0;

  diceEle.classList.add('hidden');
  joueur0Ele.classList.remove('joueur--winner');
  joueur1Ele.classList.remove('joueur--winner');
  joueur0Ele.classList.add('joueur--active');
  joueur1Ele.classList.remove('joueur--active');
};

init();

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Expressions de functions

const switchJoueur = function () {
  document.getElementById(`current--${activeJoueur}`).textContent = 0;
  activeJoueur = activeJoueur === 0 ? 1 : 0;
  currentScore = 0;
  joueur0Ele.classList.toggle('joueur--active');
  joueur1Ele.classList.toggle('joueur--active');
};

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Faire rouler les dés

btnRoll.addEventListener('click', function () {
  if (playing) {
    // Génère un lancé de dé
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Affiche le dé
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${dice}.png`;

    // Vérifie si le lancé est différent de 1
    if (dice !== 1) {
      // Ajoute la valeur du dé au currentScore
      currentScore += dice;
      document.getElementById(`current--${activeJoueur}`).textContent =
        currentScore;
    } else {
      // Switch Joueur
      switchJoueur();
    }
  }
});

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Hold son currentScore

btnHold.addEventListener('click', function () {
  if (playing) {
    // Ajoute le currentScore au score
    scores[activeJoueur] += currentScore;

    document.getElementById(`score--${activeJoueur}`).textContent =
      scores[activeJoueur];

    // Vérifie que le score du joueur est >= 100
    if (scores[activeJoueur] >= 10) {
      // Termine le jeu
      playing = false;
      diceEle.classList.add('hidden');

      document
        .querySelector(`.joueur--${activeJoueur}`)
        .classList.add('joueur--winner');
      document
        .querySelector(`.joueur--${activeJoueur}`)
        .classList.remove('joueur--active');
    } else {
      // Switch Joueur
      switchJoueur();
    }
  }
});

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Reset le jeu

btnReset.addEventListener('click', init);
