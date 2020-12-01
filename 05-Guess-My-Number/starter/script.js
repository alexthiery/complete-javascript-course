'use strict';

/*
// DOM document object model - this is a tree structure with parent, children and sibling elements
// it is used to access and manipulate html elements

//  to select element from html - same as you would do in css
//  the dot first accesses the element, then the textContent access the text from the element
console.log(document.querySelector('.message').textContent);

// you can also set the content of html elements from JS - this is DOM manipulation


document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

//  handling click events

//  first select button which will trigger click event
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const newSecretNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};

let secretNumber = newSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when no input
  if (!guess) {
    displayMessage('🚫 No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // manipulating css styles using JS - for this you use the style property
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = newSecretNumber();
  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
