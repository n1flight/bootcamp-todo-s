var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
    // clear existing todos
    todoList.innerHTML = ''

    // re-render todos

    for (var i = 0; i < todos.length; i++) {
        // create li element
        var li = document.createElement('li')
        // ad todo text to li
        li.innerText = todos[i]
        // append li to todoList
        todoList.appendChild(li)

    }
}

function addTodo(event) {
    event.preventDefault()
    var newTodo = todoInput.value

    if (newTodo !== ''){

        todos.push(newTodo)
        todoInput.value = ''
        renderTodos()
    }
    
}

todoForm.addEventListener('submit', addTodo)


renderTodos()