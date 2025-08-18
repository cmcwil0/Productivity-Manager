function setupList() {
  const taskInput = document.querySelector('.task-input');
  const addTaskBtn = document.querySelector('.add-task-btn');
  const taskList = document.querySelector('.task-list');
  const todoContainer = document.querySelector('.todo-container');
  const priorityBtn = document.querySelector('.priority-btn');

  let priority = 1; //initializes at low (one !)

  function updatePriority() {
    const icon = priorityBtn.querySelector('i');
    if(priority === 1) {
      icon.style.color = "lightgreen";
    } else if (priority === 2) {
      icon.style.color = "gold";
    } else if(priority === 3) {
      icon.style.color = "lightcoral";
    }
  }

  priorityBtn.addEventListener('click', () => {
    priority++;
    if(priority > 3) priority = 1;
    updatePriority();
  });
  
  function addTask(event) {
    event.preventDefault(); //stops default form event from happening
    const taskText = taskInput.value.trim(); //gests input value and removes white space with trim
    if(!taskText) { // stops if empty or invalid
      return;
    }

    const newTask = document.createElement('li'); //creates new element
    let priorityColor = 'lightgreen';
    if(priority === 2) { priorityColor = 'gold';} else if(priority === 3) { priorityColor = 'lightcoral'; }
    newTask.innerHTML = `
    <input type="checkbox" class="checkbox">
    <div class="priority-label"><i class="fa-solid fa-exclamation" style="color: ${priorityColor};"></i></div>
    <span class="task-text">${taskText}</span>
    <div class="task-buttons">
      <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
      <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
    `.trim();

    taskList.appendChild(newTask);
    taskInput.value = ''

    //delete button functionality
    newTask.querySelector('.delete-btn').addEventListener('click', () => {
      newTask.remove();
    });

    //edit button functionality
    const editBtn = newTask.querySelector('.edit-btn');
    const taskTextElement = newTask.querySelector('.task-text');

    editBtn.addEventListener('click', () => {
      //if input is already there submit input value
      const editInput = taskTextElement.querySelector('.edit-btn-input');
      if(editInput) {
        taskTextElement.innerHTML = `<span>${editInput.value}</span>`;
        return;
      }

      const initialText = taskTextElement.textContent;

      //replaces span with input
      taskTextElement.innerHTML = `
        <input type="text" class="edit-btn-input" value="${initialText}">
      `;

      const newEditInput = taskTextElement.querySelector('.edit-btn-input');
      newEditInput.focus(); //sets cursor into input
      const length = newEditInput.value.length
      newEditInput.setSelectionRange(length, length); // always sets caret at end of input text

      newEditInput.addEventListener('keypress', (e) => { 
        if(e.key === 'Enter') {
          taskTextElement.innerHTML = `<span>${newEditInput.value}</span>`;
        }
      });
    });

    todoContainer.style.width = taskList.children.length > 0 ? '100%' : '50%';

  }

  addTaskBtn.addEventListener('click', addTask); //add task event listener
  taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
      addTask(e);
    }
  });

}

function setupDashboard() {

}

function setupGym() {

}


function main() { //runs 
  const main = document.querySelector('main');
  if(main.classList.contains('dashboard-main')) {
    setupDashboard();
  } else if (main.classList.contains('todo-main')) {
    setupList();
  } else if(main.classList.contains('gym-main')) {
    setupGym();
  }
}

document.addEventListener('DOMContentLoaded', main);