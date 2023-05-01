const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
const addTaskBtn = document.getElementById('add-task-btn');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}

// Add new task
function addTask() {
    const task = document.getElementById('task').value;
    const newTask = document.createElement('div');
    newTask.className = 'fill';
    newTask.setAttribute('draggable', 'true');
    newTask.innerHTML = task;
    document.getElementById('task').value = '';
    const tasksList = document.getElementById('tasks');
    tasksList.appendChild(newTask);
    newTask.addEventListener('dragstart', dragStart);
    newTask.addEventListener('dragend', dragEnd);
}

addTaskBtn.addEventListener('click', function() {
    addTask();
});

// Remove all tasks
function removeAllTasks() {
    const tasks = document.getElementById('tasks');
    while (tasks.firstChild) {
        tasks.removeChild(tasks.firstChild);
    }
}

