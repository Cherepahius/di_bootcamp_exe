const tasks = [];

document.getElementById('taskForm').addEventListener('submit', function (event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = '';
    }
}

function renderTasks() {
    const listTasksDiv = document.querySelector('.listTasks');
    listTasksDiv.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            taskDiv.classList.toggle('completed');
        });

        const label = document.createElement('label');
        label.textContent = task;

        const deleteButton = document.createElement('i');
        deleteButton.className = 'fas fa-times';
        deleteButton.addEventListener('click', function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        taskDiv.appendChild(deleteButton);

        listTasksDiv.appendChild(taskDiv);
    });
}
