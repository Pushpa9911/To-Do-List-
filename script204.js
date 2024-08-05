// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const calendarDate = document.getElementById('calendarDate');

// Add a new task
function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.className = 'done-button';
    doneButton.onclick = () => {
        taskItem.classList.toggle('done');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskContent);
    taskItem.appendChild(doneButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}

// Reset the task list
function resetTasks() {
    taskList.innerHTML = '';
}

// Color customization for calendar dates
calendarDate.addEventListener('change', () => {
    const selectedDate = new Date(calendarDate.value);
    if (selectedDate) {
        calendarDate.style.color = 'blue';
        calendarDate.style.fontWeight = 'bold';
    } else {
        calendarDate.style.color = 'black';
        calendarDate.style.fontWeight = 'normal';
    }
});

