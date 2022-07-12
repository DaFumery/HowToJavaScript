'use strict';

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Variables

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Expression de functions
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Event Handler on Click

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/////////////////////////////////////////////
/////////////////////////////////////////////
/// Event Handler on ESC

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// !modal.classList.contains('hidden')
// Si modal ne CONTIENT PAS la classe 'Hidden' alors...
