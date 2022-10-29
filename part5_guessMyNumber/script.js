'use strict';

// console.log(document.querySelector('.message')); //querySelector is document(object)'s method, put what we want to select element name inside argument(), need to be string
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').className);
// console.log(document.querySelector('.message')); //document.querySelector('.message') = p tab

//--------------------------------what's DOM//--------------------------------

// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// // console.log(
// //   (document.querySelector('.message').textContent = 'Correct Number')
// // );
// console.log((document.querySelector('.score').textContent = 7));
// console.log((document.querySelector('.number').textContent = 13));

// console.log(document.querySelector('.guess'));
// document.querySelector('.guess').value = 10;

// ------------------------------------------------------

let luckyNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20; //state variable
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'no number ';
  } else if (guessNumber === luckyNumber) {
    displayMessage('Correct Number ');

    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = luckyNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== luckyNumber) {
    if (score > 0) {
      displayMessage(
        guessNumber > luckyNumber ? 'Too Hight Number' : 'Too Low Number'
      );
      // document.querySelector('.message').textContent =
      //   guessNumber > luckyNumber ? 'Too Hight Number' : 'Too Low Number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose');
      document.querySelector('.score').textContent = score;
    }
  }
  console.log(guessNumber);
}); //addEventListener has two argument {first--event type(click)/ second-- reaction() function = event handler function)}

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.background = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('.score').value = score;
  document.querySelector('.number').style.width = '15rem;';
  score = 20;
  document.querySelector('.score').textContent = score;
  luckyNumber = Math.trunc(Math.random() * 20) + 1;
});
console.log(score);
