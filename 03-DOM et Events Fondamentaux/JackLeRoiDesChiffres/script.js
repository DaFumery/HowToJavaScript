'use strict';

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Variables
let randomNombre = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Expression de function

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const backgroundOrange = function () {
  document.querySelector('body').style.backgroundColor = '#ff7534';
};
const backgroundVert = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
};
const scoreToZero = function () {
  document.querySelector('.score').textContent = 0;
};
const updateScore = function () {
  document.querySelector('.score').textContent = score;
};

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Button Verifier

// EventListerner 'click' sur bouton vérifier
document.querySelector('.verifier').addEventListener('click', function () {
  const deviner = Number(document.querySelector('.deviner').value);
  console.log(deviner, typeof deviner);

  // NO INPUT
  if (!deviner) {
    displayMessage('Pas de nombre ❗');
    // document.querySelector('.message').textContent = 'Pas de nombre ❗';
  }

  // VICTOIRE
  else if (deviner === randomNombre) {
    // Show RandomNombre, Update Message, BackgroundVert
    document.querySelector('.randomNombre').textContent = randomNombre;
    displayMessage("(●'◡'●) Correcte !");
    backgroundVert();
    document.querySelector('.randomNombre').style.width = '30rem';

    // Update Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // MAUVAIS NOMBRE
  else if (deviner !== randomNombre) {
    if (score > 1) {
      displayMessage(
        deviner > secretNumber ? '📈 Trop haut !' : '📉 Trop bas !'
      );
      // Désincrémente le score et update
      score--;
      updateScore();
    }
    // DEFAITE
    else {
      // Update Message, Score à 0 et BackgroundOrange
      displayMessage('🧨 Vous avez perdu');
      scoreToZero();
      backgroundOrange();
    }
  }
});

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Button Reset

// EventListerner 'click' sur bouton Reset
document.querySelector('.reset').addEventListener('click', function () {
  // Restaure les valeurs initiales des variables 'score' et 'randomNombre'
  score = 20;
  randomNombre = Math.trunc(Math.random() * 20) + 1;

  // Restaure les conditions initiales du message, du randomNombre, du score et du devine input
  displayMessage('Essayez de deviner');
  updateScore();
  document.querySelector('.randomNombre').textContent = '?';
  document.querySelector('.deviner').value = ' ';

  // Restaurer le body background color et le randomNombre width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.randomNombre').style.width = '15rem';
});
