'use strict';

'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const openModalWindow = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i].addEventListener('click', openModalWindow));
}
const closeModalWindow = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', event => {
  //   console.log('key down!!!');
  //   console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalWindow();
    console.log(event.key);
  }
}); //global object
