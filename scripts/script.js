

const input = document.querySelector('.input-task');
const button = document.querySelector('.button-add-task');
const listaCompleta = document.querySelector('.list-task')


let myListItems = []


function adicionarNovaTarefa() {
    myListItems.push({
        tarefa: input.value,
        concluida: false
    })
    mostrarTarefas()

    input.value= ''
}

function mostrarTarefas() {
    let novaLi = ''

    myListItems.forEach((item, position) => {

        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${position})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick = "deletItem(${position})">
        </li>
        `
    })
    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(myListItems) )
}

function concluirTarefa(position){

        myListItems[position].concluida = !myListItems[position].concluida 
    
        mostrarTarefas()

}

function deletItem (position){
    myListItems.splice(position, 1)
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    
    if(tarefasDoLocalStorage){
        myListItems = JSON.parse(tarefasDoLocalStorage)
    }
    

    mostrarTarefas()
}
recarregarTarefas()


button.addEventListener('click', adicionarNovaTarefa);

