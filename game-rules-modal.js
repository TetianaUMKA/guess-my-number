'use strict';

const gameRulesModal = document.querySelector('.game-rules-modal');
const overlay = document.querySelector('.overlay');
const openGameRulesModalBtn = document.querySelector('.open-game-rules-modal');
const closeGameRulesModalBtn = document.querySelector(
  '.close-game-rules-modal'
);

const openModal = function () {
  gameRulesModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  gameRulesModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

openGameRulesModalBtn.addEventListener('click', openModal);
closeGameRulesModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key); // 'Escape'
  if (e.key === 'Escape' && !gameRulesModal.classList.contains('hidden')) {
    closeModal();
  }
});
