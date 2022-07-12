'use strict';

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Variables
let score = 20;

// Génère un nombre aléatoire entre 0 et 20
const randomNombre = Math.trunc(Math.random() * 20) + 1;

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Selectors
document.querySelector('.nombre').textContent = randomNombre;

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Events
document.querySelector('.verifier').addEventListener('click', function () {
  const deviner = Number(document.querySelector('.deviner').value);
  console.log(deviner, typeof deviner);

  // No input
  if (!deviner) {
    document.querySelector('.message').textContent = 'Pas de nombre ❗';
  }

  // Situation de victoire
  else if (deviner === randomNombre) {
    document.querySelector('.message').textContent = "(●'◡'●) Correcte !";
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.nombre').style.width = '30rem';
  }

  // Situation de nombre trop haut
  else if (deviner > randomNombre) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Trop haut !';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // Situation de défaite
    else {
      document.querySelector('.message').textContent = '🧨 Vous avez perdu';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
  }

  // Situation de nombre trop bas
  else if (deviner < randomNombre) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Trop bas !';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // Situation de défaite
    else {
      document.querySelector('.message').textContent = '🧨 Vous avez perdu';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
  }
});
