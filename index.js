
let todoInput = document.getElementById('todo-input');
let todoBtn = document.getElementById('todo-btn');
let todoRemoveBtn = document.getElementById('todo-remove-btn');
let todoList = document.getElementById('todo-list');

let tasks = []

let addTask = () => {

    if (todoInput.value !== '' && todoInput.value.length > 1) {
        const taskInput = document.createElement('input');
        const taskLabel = document.createElement('label');

        let taskId = todoList.getElementsByTagName('*').length;

        taskInput.setAttribute('id', 'task' + taskId);
        taskInput.setAttribute('type', 'checkbox');

        taskLabel.setAttribute('for', 'task' + taskId);
        taskLabel.innerHTML = todoInput.value;

        taskBreak = document.createElement('br');

        const task = {'input': taskInput, 'label': taskLabel, 'break': taskBreak};
        tasks.push(task);

        todoList.appendChild(task['input']);
        todoList.appendChild(task['label']);
        todoList.appendChild(task['break']);

        todoInput.value = '';
    }
}

let removeTask = () => {
    // let test = [...todoList.getElementsByTagName('*')];
    // console.log(test[0]);
}

todoBtn.onclick = addTask;
todoRemoveBtn.onclick = removeTask;

