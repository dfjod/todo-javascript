window.addEventListener('load', () => {

    const formField = document.getElementById('newTaskForm');
    const inputField = document.getElementById('newTaskInput');
    const taskList = document.getElementById('tasks');
    const completedTaskList = document.getElementById('completedTasks');

    formField.addEventListener('submit', (e) => {

        e.preventDefault(); // Prevents from submitting and reloading the page

        const task = inputField.value;

        // Creating the task element
        const taskElement = document.createElement('div');
        const taskContentElement = document.createElement('div');
        const taskActionElement = document.createElement('div');

        taskElement.appendChild(taskContentElement);
        taskElement.appendChild(taskActionElement);

        // Creating the editable task text field
        const taskTextField = document.createElement('input');
        taskTextField.type = 'text';
        taskTextField.value = task;
        taskTextField.setAttribute('readonly', 'readonly');

        taskContentElement.appendChild(taskTextField);

        // Creating edit and delete actions
        const taskEditButton = document.createElement('button');
        const taskDeleteButton = document.createElement('button');
        const taskCompleteButton = document.createElement('button');

        taskEditButton.innerText = 'Edit';
        taskDeleteButton.innerText = 'Delete';
        taskCompleteButton.innerText = 'Complete';

        taskActionElement.appendChild(taskEditButton);
        taskActionElement.appendChild(taskCompleteButton);
        taskActionElement.appendChild(taskDeleteButton);

        taskList.appendChild(taskElement);

        inputField.value = '';

        taskEditButton.addEventListener('click', () => {
            if (taskEditButton.innerText == 'Edit') {
                taskEditButton.innerText = 'Save';
                taskTextField.removeAttribute('readonly');
                taskTextField.focus();
            } else {
                taskEditButton.innerText = 'Edit';
                taskTextField.setAttribute('readonly', 'readonly');
            }
        });

        taskCompleteButton.addEventListener('click', (e) => {
            if (taskElement.parentElement.id == 'tasks') {
                taskCompleteButton.innerText = 'Uncomplete';
                taskList.removeChild(taskElement);
                completedTaskList.appendChild(taskElement);
            } else {
                taskCompleteButton.innerText = 'Complete';
                completedTaskList.removeChild(taskElement);
                taskList.appendChild(taskElement);
            }
        });

        taskDeleteButton.addEventListener('click', () => {
            taskList.removeChild(taskElement);
        });
    });
});