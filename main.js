let inputField = document.getElementById('inputField');
let addTaskButton = document.getElementById('addTask');
let taskContainer = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    let task = document.createElement('p');
    task.innerText = inputField.value;
    taskContainer.appendChild(task);
    inputField.value = '';
});