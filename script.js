const addTaskBtn = document.getElementById("add-task-btn");
const form = document.getElementById("input-form");
const newTodo = document.getElementById("newTodo");
const btnSubmit = document.getElementById("submit-task");

const currentTasks = document.getElementById("current-tasks");
const finishedTasks = document.getElementById("finished-tasks");
const taskTemplate = document.getElementById("task_template");

const currentTaskNumber = document.getElementById("current-number");
const finishedTaskNumber = document.getElementById("finished-number");

const currentPlural = document.getElementById("current-plural");
const finishedPlural = document.getElementById("finished-plural");

let countCurrentTasks = 0;
let countFinishedTasks = 0;


newTodo.focus();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log();
  if (!form.elements.newTodo.value) {
      alert("Whoops, type your task first.");
      return;
  }
  
  countCurrentTasks += 1;
  const taskContainer = taskTemplate.content.cloneNode(true);
  let taskTitle = taskContainer.querySelector("p");
  taskTitle.innerHTML = form.elements.newTodo.value;
  const delBtn = document.querySelector("fa-trash");
  
  currentTasks.prepend(taskContainer);

  newTodo.value = "";

  currentTaskNumber.innerHTML = countCurrentTasks;

  taskNumbers();
})

/* ---------------- Add Tasks ---------------- */


/* ---------------- Task numbers ---------------- */

const taskNumbers = () => {
    if (countCurrentTasks > 1 || countCurrentTasks == 0) {
      currentPlural.style.display = "inline";
    } else if (countCurrentTasks == 1) {
      currentPlural.style.display = "none";
    }
  
    if (countFinishedTasks > 1 || countFinishedTasks == 0) {
      finishedPlural.style.display = "inline";
    } else if (countFinishedTasks == 1) {
      finishedPlural.style.display = "none";
    }
  };


  /* ---------------- Tick Task function ---------------- */

const checkTask = (e) => {
    const taskContainer = document.createElement("li");
    taskContainer.classList.add("row");
    taskContainer.classList.add("task"); 
  taskContainer.classList.add("round");
  
    taskContainer.innerHTML = e.target.parentNode.innerHTML;
    
    if (e.target.checked && e.target.type === "checkbox") {

        taskContainer.querySelector("input").checked = true;
        finishedTasks.prepend(taskContainer);
        e.target.parentNode.remove();

        countCurrentTasks -= 1;
        countFinishedTasks += 1;

        taskNumbers();

    } else if (!e.target.checked && e.target.type === "checkbox") {
        taskContainer.firstChild.checked = false;
        currentTasks.append(taskContainer);
        e.target.parentNode.remove();

        countCurrentTasks += 1;
        countFinishedTasks -= 1;

        taskNumbers();
    }
    currentTaskNumber.innerHTML = countCurrentTasks;
    finishedTaskNumber.innerHTML = countFinishedTasks;
    };


  /* ---------------- Delete Task function ---------------- */

const deleteTask = (e) => {
  console.log(e.target.tagName);
    if (e.target.type === "submit" || e.target.parentNode.type==="submit") {
      if (e.target.parentNode.parentNode.id === "current-tasks") {
        countCurrentTasks -= 1;
      } else if (e.target.parentNode.parentNode.id === "finished-tasks") {
        countFinishedTasks -= 1;
      }
      e.target.closest("li").remove();
      currentTaskNumber.innerHTML = countCurrentTasks;
      finishedTaskNumber.innerHTML = countFinishedTasks;
      taskNumbers();
    }
  };


  /* ---------------- Tick tasks ---------------- */

currentTasks.addEventListener("click", (e) => {
    checkTask(e);
  });
  
  finishedTasks.addEventListener("click", (e) => {
    checkTask(e);
  });


  /* ---------------- Delete tasks ---------------- */

currentTasks.addEventListener("click", (e) => {
    deleteTask(e);
  });
  
  finishedTasks.addEventListener("click", (e) => {
    deleteTask(e);
  });