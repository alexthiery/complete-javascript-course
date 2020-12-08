'use strict';

//  selecting elements
// here we are selecting the html element by hash rather than . as we are using the ID not the class
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

diceEl.classList.add('hidden');

let activePlayer, fullScore, currentScore, gameActive;
const init = function () {
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  diceEl.classList.add('hidden');

  score0El.textContent = 0;
  score1El.textContent = 0;

  activePlayer = 0;
  fullScore = [0, 0];
  currentScore = 0;
  gameActive = true;

  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (gameActive) {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gameActive) {
    fullScore[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      fullScore[activePlayer];

    if (fullScore[activePlayer] >= 50) {
      gameActive = false;
      console.log(`player--${activePlayer}`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
