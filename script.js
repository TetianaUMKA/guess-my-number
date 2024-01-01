'use strict';
/* DOCUMENT OBJECT MODEL:
Structured representation of HTML documents. Allows JS to access HTML elements and styles to manipulate them.
DOM is not a part of JS.
JS is actually a dialect of ECMA Script.
DOM is methds and properties WEB APIs of Google, Safari, Bing, FireFox etc. Web APIs are like libraries that a browser implement and we can access from a JS code. Web APIs can read JS code and that is automaticaly availible for us to use.
Therefore DOM can interact with JS.
*/

// Code using DOM manipulation

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const cleanInput = function () {
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let remainder = guess - secretNumber;

  if (score > 1) {
    if (!guess) {
      displayMessage('🔍 No number! Please enter a number');
    } else if (guess <= 0 || guess >= 21) {
      displayMessage(
        `⛔️ ${guess} does not comply with the game rules. Enter a number from 1 to 20, please!`
      );
      cleanInput();
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      score--;
      showScore(score);
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.check').style.visibility = 'hidden';
    } else if (remainder === 1 || remainder === -1) {
      displayMessage(`😎 Almost gueesed. ${guess} is hot🔥`);
      cleanInput();
      score--;
      showScore(score);
    } else if (guess > secretNumber || guess < secretNumber) {
      displayMessage(
        `❌ ${guess} is too ${
          guess > secretNumber ? 'high' : 'low'
        }! Try one more time!`
      );
      cleanInput();
      score--;
      showScore(score);
    }
  } else {
    displayMessage('💔 Game over');
    score--;
    showScore(score);
    document.querySelector('.check').style.visibility = 'hidden';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  showScore(score);
  displayMessage(`Start guessing...`);
  cleanInput();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').style.visibility = 'visible';
});
