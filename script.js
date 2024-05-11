let todoForm = document.getElementById('todo-form');
let inputTask = document.getElementById('input-task');
let todoList = document.getElementById('todo-list');

let taskList = window.localStorage.getItem('todo-list')
?? '[]';
taskList = JSON.parse(taskList)


for(let value of taskList) {
        // exibir items
    
        let li = document.createElement('li');
        let inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';

        li.addEventListener('dblclick', event => {
            if(!li.style.textDecoration) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "";
        }
            inputCheckbox.checked = !inputCheckbox.checked;
            console.log('click')
        })

        li.textContent = value;
        li.prepend(inputCheckbox);
        todoList.append(li);    
    
    }


// arrow function == "evente => { }"

todoForm.addEventListener('submit', event => {
    event.preventDefault();

    /* o CreateElement cria uma Tag html apartir do Javascript */

    let li = document.createElement('li');
    li.textContent = inputTask.value;

    let inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';

/* com append ele adiciona uma nova tag dentro de uma tag já existente no HTML */
    li.prepend(inputCheckbox);
    todoList.append(li);

// todoList.prepend (ordem de baixo pra cima)
// prepend (Esquerda)

// todoList.append (ordem de cima pra baixo)
// append (Direita)

    taskList.push(inputTask.value)
    window.localStorage.setItem('todo-list', JSON.stringify(taskList));

    console.log(li);

})

