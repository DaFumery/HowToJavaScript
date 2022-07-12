'use strict';

const nombre = Math.trunc(Math.random() * 20) + 1;

console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(69)); // 8.30662386
console.log(Math.sqrt(-420.69)); // NaN

document.querySelector('.verifier').addEventListener('click', function () {
  console.log(document.querySelector('.deviner').value);

  if (!deviner) {
    document.querySelector('.message').textContent = '❓';
  }
});
