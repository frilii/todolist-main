const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="edit-button">Editar</button>
      <button class="move-button">Mover</button>
      <button class="delete-button">Excluir</button>
    `;
    taskList.appendChild(li);
    newTaskInput.value = '';
    setupTaskInteractions(li);
  }
}

function setupTaskInteractions(taskItem) {
  const editButton = taskItem.querySelector('.edit-button');
  const moveButton = taskItem.querySelector('.move-button');
  const deleteButton = taskItem.querySelector('.delete-button');
  
  editButton.addEventListener('click', () => editTask(taskItem));
  moveButton.addEventListener('click', () => moveTask(taskItem));
  deleteButton.addEventListener('click', () => deleteTask(taskItem));
}

function editTask(taskItem) {
  const span = taskItem.querySelector('span');
  const newTaskText = prompt('Editar tarefa:', span.textContent);
  if (newTaskText !== null) {
    span.textContent = newTaskText;
  }
}

function moveTask(taskItem) {
  taskList.removeChild(taskItem);
  taskList.appendChild(taskItem);
}

function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}

// Background Animation
const backgroundAnimation = document.createElement('div');
backgroundAnimation.classList.add('background-animation');
document.body.appendChild(backgroundAnimation);

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth) * 100;
  mouseY = (event.clientY / window.innerHeight) * 100;
  updateBackgroundAnimation();
});

function updateBackgroundAnimation() {
  backgroundAnimation.style.backgroundPositionX = `${50 - mouseX * 0.1}px`;
  backgroundAnimation.style.backgroundPositionY = `${50 - mouseY * 0.1}px`;
}
