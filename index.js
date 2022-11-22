
const todoInput = document.getElementById('todo-input');
const todoBtn = document.getElementById('todo-btn');
const todoRemoveBtn = document.getElementById('todo-remove-btn');
const todoList = document.getElementById('todo-list');

const addTask = () => {

    if (todoInput.value !== '' && todoInput.value.length > 1) {
        let taskLink = document.createElement('a');
        taskLink.onclick = toggleStrike;

        let task = document.createElement('li');
        task.innerHTML = todoInput.value;

        taskLink.innerHTML = task.outerHTML;

        // Some animation here for displaying

        console.log(taskLink);


        todoList.appendChild(taskLink);
        todoInput.value = '';
    }
}

const toggleStrike = event => {
    event.target.parentElement.classList.toggle('taskComplete');
}

const removeTask = () => {
    let tasksToRemove = [...todoList.getElementsByClassName('taskComplete')];

    let activeElement = document.activeElement.tagName;

    if (tasksToRemove.length === 0 && activeElement !== 'INPUT') {
        todoList.firstChild.remove();
    }

    tasksToRemove.map(task => task.remove());
}

addEventListener('keydown', event => {
    let keyPressed = event.key;

    if (keyPressed === 'Enter') {
        addTask();
    }
    else if (keyPressed === 'Backspace' || keyPressed === 'Delete') {
        removeTask();
    }
    else if (keyPressed === 'Escape') {
        document.activeElement.blur();
    }
});

todoBtn.onclick = addTask;
todoRemoveBtn.onclick = removeTask;


// TODO - More dynamic on input focus, more movement in surrounding elms.
// TODO - Task border on hover.
// TODO - Apply css transition on new task.
// TODO - Cycle colour schemes at interval.
// TODO - Somehow make more interactive, could click and drag.