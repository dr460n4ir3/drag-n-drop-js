const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
const taskForm = document.getElementById('task-form');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
taskForm.addEventListener('submit', addTask);

// Loop through empties and call drag events
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Add Task Button
//document.getElementById('addTaskButton').addEventListener('click', addTask);

// Remove All Tasks Button
//document.getElementById('removeAllTasksButton').addEventListener('click', removeAllTasks);

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
// Add new task
function addTask(e) {
    e.preventDefault();
    const task = document.getElementById('task').value;
    const newTask = document.createElement('div');
    newTask.className = 'fill';
    newTask.setAttribute('draggable', 'true');
    newTask.innerHTML = task;
    document.getElementById('task').value = '';
    document.getElementById('tasks').appendChild(newTask);
    newTask.addEventListener('dragstart', dragStart);
    newTask.addEventListener('dragend', dragEnd);
}  
  

// Remove a task
function removeTask(task) {
  task.remove();
}

// Remove all tasks
function removeAllTasks() {
  const tasks = document.querySelectorAll('.fill');
  tasks.forEach(removeTask);
}
