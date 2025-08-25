let todos = [{title: 'xexea'}];




function addTodo(){
    if(!document.querySelector('input').value){
        return;
    }

    todos.push({
        title: document.querySelector('input').value
    })
    render();


    //console.log(todos)
}

function deleteTodo(i){
    todos.splice(i,1);
    render()
}


//document.querySelector('button').addEventListener('click',addTodo)

function render(){
    /*todos.forEach(obj=>{
        
        const newDiv = document.createElement('div');
        newDiv.id = `todo-${obj.title}`

        newDiv.textContent = `${obj.title}`

        document.querySelector('body').appendChild(newDiv);
    })*/
    document.getElementById('todolist').replaceChildren();
    for(let i=0;i<todos.length;i++){
        const newDiv = document.createElement('div');
        const ptext = document.createElement('p');
        const button = document.createElement('button');
        button.onclick = function(){
            deleteTodo(i);
        }

        button.innerText='DELETE';
        ptext.textContent=`${i+1}.${todos[i].title}`

        newDiv.appendChild(ptext);
        newDiv.appendChild(button);

        document.querySelector('#todolist').appendChild(newDiv);
    }
}