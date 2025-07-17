'use strict';

// Selecting elements from the DOM

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); 
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


// Rolling dice functionality
btnRollDice.addEventListener('click', function() {
  // Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

  // Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for a rolled 1 : if true, switch to the next player
});

