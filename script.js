'use strict';
/* DOCUMENT OBJECT MODEL:
Structured representation of HTML documents. Allows JS to access HTML elements and styles to manipulate them.
DOM is not a part of JS.
JS is actually a dialect of ECMA Script.
DOM is methds and properties WEB APIs of Google, Safari, Bing, FireFox etc. Web APIs are like libraries that a browser implement and we can access from a JS code. Web APIs can read JS code and that is automaticaly availible for us to use.
Therefore DOM can interact with JS.
*/

// DOM manipulation

/* Example
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '10';
document.querySelector('.score').textContent = '19';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  let remainder = guess - secretNumber;
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent =
        '🔍 No number! Please enter a number';
    } else if (guess <= 0 || guess >= 21) {
      document.querySelector(
        '.message'
      ).textContent = `⛔️ ${guess} does not comply with the game rules. Enter a number from 1 to 20, please!`;
      document.querySelector('.guess').value = '';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    } else if (remainder === 1 || remainder === -1) {
      document.querySelector(
        '.message'
      ).textContent = `😎 Almost gueesed. ${guess} is hot🔥`;
      document.querySelector('.guess').value = '';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess > secretNumber) {
      document.querySelector(
        '.message'
      ).textContent = `❌ ${guess} is too high! Try one more time!`;
      document.querySelector('.guess').value = '';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector(
        '.message'
      ).textContent = `❌ ${guess} is too low! Try one more time!`;
      document.querySelector('.guess').value = '';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '💔 Game over';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = `Start guessing...`;
});
