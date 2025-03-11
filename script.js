'use strict';

let containerAdd = document.querySelector('.container--add');
const btnAdd = document.querySelector('.btn--tasks');
const inputTasks = document.querySelector('.input--tasks');

const createElements = function (taskText) {
    const createList = document.createElement('li');
    createList.classList.add('list-items');

    const createLabel = document.createElement('label');
    createLabel.classList.add('align--items');

    const createInput = document.createElement('input');
    createInput.classList.add('checkbox-hidden');
    createInput.type = 'checkbox';

    const createDiv = document.createElement('div');
    createDiv.classList.add('custom--checkbox');

    const createParagraph = document.createElement('p');
    createParagraph.classList.add('new--text');
    createParagraph.textContent = taskText;

    const createButtonRemove = document.createElement('button');
    createButtonRemove.classList.add('btn-close');

    const createImg = document.createElement('img');
    createImg.classList.add('img-close');
    createImg.src = 'img/icon-close.svg';
    createImg.alt = 'Ícone para excluir um item';

    // Estrutura dos elementos
    createLabel.appendChild(createInput);
    createLabel.appendChild(createDiv);
    createLabel.appendChild(createParagraph);

    createButtonRemove.appendChild(createImg);
    createList.appendChild(createLabel);
    createList.appendChild(createButtonRemove);
    containerAdd.appendChild(createList);

    // Remover a tarefa ao clicar no botão de fechar
    createButtonRemove.addEventListener('click', function () {
        createList.remove();
    });

    // Marcar a tarefa como concluída
    createInput.addEventListener('change', function () {
        createParagraph.style.textDecoration = this.checked ? 'line-through' : 'none';
    });
};

btnAdd.addEventListener('click', function () {
    let listItems = document.querySelectorAll('.list-items');
    
    if (listItems.length >= 8) {
        alert('Você criou o máximo de lista de tarefas!');
        return;
    }

    const taskText = inputTasks.value.trim(); // Evita espaços vazios

    if (taskText === '') {
        alert('Digite uma tarefa válida!');
        return;
    }

    createElements(taskText);
    inputTasks.value = ''; // Limpa o campo de input após adicionar a tarefa
});






