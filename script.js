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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔️ No number! Please enter a number';
  }
});
