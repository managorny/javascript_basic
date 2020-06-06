'use strict';

let shadowEl = document.querySelector('.shadow');
let modalEl = document.querySelector('.modal');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    shadowEl.classList.remove('hidden');
    modalEl.classList.remove('hidden');
    modalEl.classList.add('animated');

});

shadowEl.addEventListener('click', function() {
    shadowEl.classList.add('hidden');
    modalEl.classList.add('hidden');
});