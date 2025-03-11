'use strict';

let containerAdd, createList, createLabel, createInput, createDiv, createParagraph, createButtonRemove, createImg;
let listItems = document.querySelectorAll('.list-items');

const createElements = function () {
    containerAdd = document.querySelector('.container--add');

    createList = document.createElement('li');
    createList.classList.add('list-items');

    containerAdd.appendChild(createList);

    createLabel = document.createElement('label');
    createLabel.classList.add('align--items');
    createList.appendChild(createLabel);

    createInput = document.createElement('input');
    createInput.classList.add('checkbox-hidden');
    createInput.type = 'checkbox';
    createLabel.appendChild(createInput);

    createDiv = document.createElement('div');
    createDiv.classList.add('custom--checkbox');
    createLabel.appendChild(createDiv);

    createParagraph = document.createElement('p');
    createParagraph.classList.add('new--text');
    createLabel.appendChild(createParagraph);
    createParagraph.textContent = 'Estudar programação';

    createButtonRemove = document.createElement('button');
    createButtonRemove.classList.add('btn-close');
    createList.appendChild(createButtonRemove);

    createImg = document.createElement('img');
    createImg.classList.add('img-close');
    createImg.src = 'img/icon-close.svg';
    createImg.alt = 'Icone para excluir um item';
    createButtonRemove.appendChild(createImg);
}

let inputTasks = document.querySelector('.input--tasks');
const btnAdd = document.querySelector('.btn--tasks');
let newText = document.querySelectorAll('.new--text');

btnAdd.addEventListener('click', function() {
    if (listItems.length <= 7) {
    createElements(); // Cria os itens sempre que clicar no botão 'add'.
    listItems = document.querySelectorAll('.list-items');
    
    inputTasks = document.querySelector('.input--tasks').value;
    createParagraph.textContent = inputTasks; 

    const btnClose = document.querySelectorAll('.btn-close');
    listItems = document.querySelectorAll('.list-items');

    for (let i = 0; i < btnClose.length; i++) {
        btnClose[i].addEventListener('click', function() {
            listItems[i].remove();
        });
    }

    const checkboxHidden = document.querySelectorAll('.checkbox-hidden');

    for (let i = 0; i < checkboxHidden.length; i++) {
        checkboxHidden[i].addEventListener('change', function() {
            if (this.checked) {
                const newText = document.querySelectorAll('.new--text');
                newText[i].style.textDecoration = 'line-through';
            } else {
                const newText = document.querySelectorAll('.new--text');
                newText[i].style.textDecoration = 'none';
            }
        });
    }
    } else {
        alert('Você criou o máximo de lista de tarefas!');
    }
    
    
});







