const todoList = document.getElementById('todolist');

const inputText = document.getElementById('todo-input-bar');
const addBtn = document.getElementById('addBtn');

let deleteBtn = document.querySelectorAll('.delete-btn')

function addTodo(){
    const task = inputText.value.trim()

    const num = todoList.childElementCount;
    if(!task){return};

    todoList.innerHTML+=`<div id="todo-${num+1}">
        <p>${num+1}.${task}</p>
        <button class="delete-btn">Delete</button>
    </div>`;

    //console.log(deleteBtn);
    inputText.value ='';
    deleteBtn = document.querySelectorAll('.delete-btn');
    //console.log(deleteBtn)
    deleteTodo();
}

function deleteTodo(){
    deleteBtn.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            btn.parentElement.remove();
        })
    })
}
deleteTodo();

addBtn.addEventListener('click', addTodo);