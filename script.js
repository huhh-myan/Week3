//console.log(document)

const todoList = document.getElementById('todo-list');


const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');

let deleteBtn = document.querySelectorAll('.deletebtn');



let currentNum = 2;
function updateNumber(){
    currentNum= currentNum+1;
    console.log(todoList.children[1].innerHTML)
    todoList.children[1].innerHTML = `${currentNum}. Go out to eat`;
}


function deleteListItem(){
    deleteBtn.forEach(btn=>{
            btn.addEventListener('click',()=>{
                btn.parentElement.remove()
        })
    })
}
deleteListItem();


//counter increaser

//setInterval(updateNumber,1000);


//adding to todolist
function addTodo(){
    
    if(!todoInput.value){
        return;
    }

    const newTask = document.createElement('div');
    newTask.id = `todo-${todoList.childElementCount+1}`;
    newTask.classList.add('items');
    newTask.innerHTML=  `<h4>${todoList.childElementCount+1}. ${todoInput.value}</h4>
        <button class="deletebtn" id="delete-${todoList.childElementCount+1}">Delete</button>`;

    todoList.appendChild(newTask);

    
    deleteBtn = document.querySelectorAll('.deletebtn');
    
    deleteListItem();
}

todoButton.addEventListener('click', addTodo);