//selectors
let todoInput= document.querySelector(".todo-input")
let todoButton = document.querySelector(".todo-button")
let todoList = document.querySelector(".todolist")
let filterOpt = document.querySelector(".filter-todo")
//Event Listeners
todoButton.addEventListener("click",addTodo)
todoList.addEventListener("click", deleteCheck)

function addTodo() {
    let tododiv= document.createElement("div")
    tododiv.classList.add("todo")
    tododiv.classList.add("uncompleted")
    let newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    tododiv.appendChild(newTodo);

    let completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-but")
    tododiv.appendChild(completedButton)

    let trashbutton = document.createElement('button')
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>'
    trashbutton.classList.add("trash-but")
    tododiv.appendChild(trashbutton)

    todoList.appendChild(tododiv)
    //clear input
    todoInput.value=""
}
function deleteCheck(event){
    let item = event.target
    if (item.classList[0] == "trash-but"){
        let todo = item.parentElement
        todo.classList.add("fall")
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }

    if (item.classList[0] == "complete-but"){
        let todo = item.parentElement
        todo.classList.toggle("uncompleted")
        todo.classList.toggle("completed")
    }
}

let filter_select_el = document.getElementById('todos');
let items_el = document.getElementById('todolist');

filter_select_el.onchange = function() {
	
  let items = items_el.getElementsByClassName('todo');
  for (var i=0; i<items.length; i++) {
      console.log(items[i])
  	if (items[i].classList.contains(this.value)) {
    	items[i].style.display = 'flex';
    } else {
    	items[i].style.display = 'none';
    }
}
    
  
};