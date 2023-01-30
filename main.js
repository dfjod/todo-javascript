window.addEventListener('load', () => {

    const formField = document.getElementById('newTaskForm');
    const inputField = document.getElementById('newTaskInput');
    const taskList = document.getElementById('tasks');

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

        taskEditButton.innerText = 'Edit';
        taskDeleteButton.innerText = 'Delete';

        taskActionElement.appendChild(taskEditButton);
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

        taskDeleteButton.addEventListener('click', () => {
            taskList.removeChild(taskElement);
        });
    });
});