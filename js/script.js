const inTarefa = document.getElementById('tarefa-input');
const btnTarefa = document.getElementById('btn-add');
const display = document.getElementById('container-display');

function criarElementosTarefa(tarefa) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const btCheck = document.createElement('button');
    const btRemove = document.createElement('button');
    div.classList.add('ToDo');
    h3.innerHTML = tarefa;
    // Buttons
    btCheck.classList.add('check-ToDo');
    btCheck.type = 'button';
    btCheck.innerHTML = 'Check';

    btRemove.classList.add('Remove-ToDo');
    btRemove.type = 'button';
    btRemove.innerHTML = 'Remove';
    // função check e remover das tarefas
    btCheck.addEventListener('click', function (e) {
        div.classList.add('check')
    });

    btRemove.addEventListener('click', function (e) {
        btRemove.parentElement.remove(div);
        // console.log(btRemove.parentElement); Sabe quem é o pai do elemento.
        console.log(`Tarefa removida`);
        salvarTarefas();
    });

    div.appendChild(h3);
    div.appendChild(btCheck);
    div.appendChild(btRemove);
    return div;
};

function salvarTarefas() {
    const liTarefas = display.querySelectorAll('div');
    const listaDeTarefas = [];

    for (let display of liTarefas) {
        let tarefaTexto = display.innerText;
        tarefaTexto = tarefaTexto.replace('\nCheck\nRemove', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('Tarefas', tarefasJSON);
};

function criarTarefas(tarefa) {
    let listaTarefas = criarElementosTarefa(tarefa);

    display.appendChild(listaTarefas);
    inTarefa.value = "";
    inTarefa.focus();
    salvarTarefas();
};

function carregaTarefasSalvas() {
    const tarefas = localStorage.getItem('Tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for (let tarefas of listaTarefas) {
        criarTarefas(tarefas);
    }
}
carregaTarefasSalvas()

function rodarToDo() {
    const value = inTarefa.value;
    if (value != '') {
        criarTarefas(value);
    } else {
        window.alert('Digite uma tarefa.');
    }
}
btnTarefa.addEventListener("click", rodarToDo);