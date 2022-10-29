'use strict';

const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--0');

const current0E1 = document.getElementById('current--0');
const current0E2 = document.getElementById('current--1');

const dieE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');

let score, currentScore, activePlayer, playing;

const init = () => {
  score = [0, 0]; //element 0 is for player-1 and 1 for player-2

  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1E1.textContent = 0;
  score1E1.textContent = 0;
  dieE1.classList.add('hidden');

  player0E1.classList.remove('player--winner');
  player1E1.classList.remove('player--winner');

  player0E1.classList.add('player--active');
  player1E1.classList.remove('player--active');

  current0E1.textContent = 0;
  current0E2.textContent = 0;

  score0E1.textContent = score[0];
  score1E1.textContent = score[1];
};

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  player0E1.classList.toggle('player--active'); //toggle is check player-active in class list/ if it have , it will remove. if not reverse
  player1E1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    dieE1.src = `dice-${dice}.png`;
    if (dice !== 1) {
      console.log(dice);
      dieE1.classList.remove('hidden');

      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      dieE1.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
