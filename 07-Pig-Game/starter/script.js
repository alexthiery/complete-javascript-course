'use strict';

//  selecting elements
// here we are selecting the html element by hash rather than . as we are using the ID not the class
const score0El = document.querySelector('#score--0');
// second way
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// const newRoll = function () {
//   return Math.floor(Math.random() * 6) + 1;
// };

btnRoll.addEventListener('click', function () {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    currentScore = 0;
    current0El.textContent = currentScore;
  }
});
