const forms = document.getElementById('form-add');

const inTarefa = document.getElementById('tarefa-input');
const btnTarefa = document.getElementById('btn-add');

/** Cola da estrutura:
 * 
     <div class="ToDo check">
            <h3>Teste</h3>
            <button class="check-ToDo">
                Check
            </button>
            <button class="Remove-ToDo">
                Remover
            </button>
        </div>
 */
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

    btCheck.addEventListener('click', function (e) {
        div.classList.add('check')
    });

    btRemove.addEventListener('click', function (e) {
        btRemove.parentElement.remove(div);
        // console.log(btRemove.parentElement); Sabe quem é o pai do elemento.
        console.log(`Tarefa removida`);
    });

    div.appendChild(h3);
    div.appendChild(btCheck);
    div.appendChild(btRemove);
    return div;
};

function atribuir() {
    const display = document.getElementById('container-display');
    display.value = "";
    let listaTarefas = criarElementosTarefa(inTarefa.value);
    if (inTarefa.value != "") {
        display.appendChild(listaTarefas);
        inTarefa.value = "";
        inTarefa.focus();
    } else {
        console.log("valor invalido")
    }
};

btnTarefa.addEventListener("click", atribuir);


