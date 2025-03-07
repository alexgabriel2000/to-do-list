'use strict';

let inputTasks = document.querySelector('.input--tasks').value;
const btnTasks = document.querySelector('.btn--tasks'); // Botão adicionar tasks
const checkbox = document.querySelector('.custom-checkbox');
const btnClose = document.querySelector('.btn--close'); 

btnTasks.addEventListener('click', function() {
    inputTasks = String(document.querySelector('.input--tasks').value); // input adicionar tasks
    console.log(inputTasks);
});



