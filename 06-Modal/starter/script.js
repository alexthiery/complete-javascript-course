'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

// when we use query selector with a selector which matches multiple elements, only the first is selected
// const btnsOpenModal = document.querySelector('.show-modal');
// console.log(btnsOpenModal);

// using queryselectorAll imports the elements in a way which works like an array
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // when the button is clicked we want to remove the hidden class from the html to show the modal
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// adding keyboard events - these are global events as they do not take place on specific parts of the webpage

// keydown will trigger whenever a key is pressed
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
