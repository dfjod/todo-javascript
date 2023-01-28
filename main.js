let input = document.getElementById('inputField');
let addTaskButton = document.getElementById('addTask');
let taskList = document.getElementById('taskList');
let completedList = document.getElementById('completedList');

addTaskButton.addEventListener('click', () => {
    let task = document.createElement('div');
    let completeButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    let taskText = document.createElement('p');

    taskText.innerText = input.value;
    completeButton.innerText = 'Complete';
    deleteButton.innerText = 'Delete';

    task.appendChild(taskText);
    task.appendChild(completeButton);
    task.appendChild(deleteButton);

    taskList.appendChild(task);

    input.value = '';
});

// Ability to edit task

// Ability to delete task

// Ability to complete task

// Ability to add and complete edit with enter press

// Add a completed list