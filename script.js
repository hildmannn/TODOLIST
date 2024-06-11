const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#enter')
const check = 'fa-check-circle'
const unCheck = 'fa-circle'
const lineThrought = 'line-throught' 
let id = 0

//Funcion agregar tarea
function agregarTarea (tarea,id,realizado,eliminado) {
    if (eliminado) {return}//Si eliminado existe se termina la funcion

    let realizadoCheck = realizado? check: unCheck
    let lineCheck = realizado? lineThrought: ''
    let elemento = `
    <li id="elemento">
        <i class="far ${realizadoCheck}" data="realizado" id='${id}'></i>
        <p class="text ${lineCheck}">${tarea}</p>
        <i class="fa fa-trash de" data="eliminado" id='${id}'></i>
    </li>`
    lista.insertAdjacentHTML("beforeend", elemento)
}

//agregar con click
botonEnter.addEventListener('click',()=> {
    const tarea = input.value 
    if (tarea) {
        agregarTarea(tarea,id,realizado=false,eliminado=false)
    }
    input.value=''
    id++
})

//agregar con enter
input.addEventListener('keyup', function(event){ //ver para que sirve function event
    if(event.key=='Enter'){ 
        const tarea = input.value 
        if (tarea) {
            agregarTarea(tarea,id,realizado=false,eliminado=false)
        }
    input.value=''
    id++
    }
})



//funcion para saber si estoy realizando o eliminando la tarea
lista.addEventListener('click', function(event){
    const element = event.target
    const elementData = element.attributes.data.value
    console.log(element.attributes)
    if (elementData === 'realizado'){
        tareaRealizada(element)
    }
    else if (elementData === 'eliminado'){
        tareaEliminada(element)
    }
})


//funcion tarea realizada
function tareaRealizada(element){
    element.classList.toggle(check)
    element.classList.toggle(unCheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrought) 
}
//funcion tarea realizada
function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
}
