const addTaskBtn = document.getElementById("add-task-btn");
const aTask = document.getElementById("a-task");
const currentTasks = document.getElementById("current-tasks");
const finishedTasks = document.getElementById("finished-tasks");
const taskTemplate = document.getElementById("task_template");

const currentTaskNumber = document.getElementById("current-number");
const finishedTaskNumber = document.getElementById("finished-number");

const currentPlural = document.getElementById("current-plural");
const finishedPlural = document.getElementById("finished-plural");

let countCurrentTasks = 0;
let countFinishedTasks = 0;

addTaskBtn.addEventListener("click", () => {
    aTask.style.display = "inline-block";
    aTask.focus();
});

/* ---------------- Add Tasks ---------------- */

aTask.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        countCurrentTasks += 1;
        const taskContainer = taskTemplate.content.cloneNode(true);
        let taskTitle = taskContainer.querySelector("p");
        taskTitle.innerHTML = aTask.value;
        if (!taskTitle) {
            alert("Please enter a valid title");
        return;
        }
        
        currentTasks.prepend(taskContainer);


        // const taskContainer = document.createElement("li");
        // const taskCheckbox = document.createElement("input");
        // const taskTitle = document.createElement("p");
        // const taskDeleteBtn = document.createElement("button");
  
        // taskCheckbox.type = "checkbox";
        // taskDeleteBtn.innerHTML = "X";
        // taskDeleteBtn.type = "submit";
        // taskTitle.innerHTML = aTask.value;
    
        // taskContainer.append(taskCheckbox);
        // taskContainer.append(taskTitle);
        // taskContainer.append(taskDeleteBtn);
    
        // currentTasks.append(taskContainer);
  
        aTask.value = "";
        aTask.style.display = "none";

        currentTaskNumber.innerHTML = countCurrentTasks;
  
        taskNumbers();
        addTaskBtn.focus();
    }
  });

/* ---------------- Task numbers ---------------- */

const taskNumbers = () => {
    if (countCurrentTasks > 1) {
      currentPlural.style.display = "inline";
    } else if (countCurrentTasks < 2) {
      currentPlural.style.display = "none";
    }
  
    if (countFinishedTasks > 1) {
      finishedPlural.style.display = "inline";
    } else if (countFinishedTasks < 2) {
      finishedPlural.style.display = "none";
    }
  };


  /* ---------------- Tick Task function ---------------- */

const checkTask = (e) => {
    const taskContainer = document.createElement("li");
    taskContainer.classList.add("row");
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
    // console.log(e.target.parentNode.parentNode.id);
    if (e.target.type === "submit") {
      if (e.target.parentNode.parentNode.id === "current-tasks") {
        countCurrentTasks -= 1;
      } else if (e.target.parentNode.parentNode.id === "finished-tasks") {
        countFinishedTasks -= 1;
      }
      e.target.parentNode.remove();
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

// const addNewTask = document.querySelector("#add-new-task");
// const inputTask = document.querySelector("#input-new-task");
// const taskTemplate = document.querySelector("#task_template");
// const finishedTaskTemplate = document.querySelector("#finished-task_template");
// const toDoList = document.querySelector("#to-do-list");
// const completedList = document.querySelector("#completed-list");
// const finishedCount = document.querySelector("#finished-count");

// addNewTask.addEventListener('click', () => {
//     inputTask.style.display = "block";
//     inputTask.querySelector("input").focus();
// })
// addNewTask.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         inputTask.style.display = "block";
//         inputTask.querySelector("input").focus();
//     }
// })

// const createTask = (e) => {
//     // Hide input
//         inputTask.style.display = "none";
//         // Get a list element from the template
//         const newTask = taskTemplate.content.cloneNode(true);
//         // Take the input's entered value
//     let newTaskTitle = inputTask.querySelector("#task0").value;
//     if (!newTaskTitle) {
//         alert("Please enter a valid title");
//         return;
//     }
//         // Update the new list's p tag with the input's value
//         const p = newTask.querySelector("p[class='title']");
//         p.textContent = newTaskTitle;
//         // Add updated list to to-do list at the top of the list
//         toDoList.prepend(newTask);

//         //Reset input
//         newTaskTitle = inputTask.querySelector("#task0").value = '';
// }

// const deleteTask = () => {
//     // Add event listener to delete on-click
//         const closeBtn = toDoList.querySelector(".fa-x");
//         closeBtn.addEventListener('click', (e) => {
//             e.path[2].remove();
//         });

//         // Add event listener to delete on-enter when focused
//         closeBtn.addEventListener('keypress', (e) => {
//             if (e.key == 'Enter') {
//                 e.path[2].remove();
//             }
//         });
// }

// const tickTask = (e) => {
//             // Create new task element in completed tasks
//             // Get a list element from the template
//             const oldTask = finishedTaskTemplate.content.cloneNode(true);
//             // Take the input's entered value
//             const newTaskTitle = e.path[1].querySelector("p").textContent;
//             // Update the new list's p tag with the input's value
//             const p = oldTask.querySelector("p[class='title']");
//             p.textContent = newTaskTitle;
//             // Add updated list to to-do list at the top of the list
//             completedList.prepend(oldTask);

//             // Add event listener to delete on-click
//             const closeBtn = completedList.querySelector(".fa-x");
//             closeBtn.addEventListener('click', (e) => {
//                 e.path[2].remove();
//                 // Update completed counter
//                 finishedCount.innerText--;
//             });

//             // Add event listener to delete on-enter when focused
//             closeBtn.addEventListener('keypress', (e) => {
//                 if (e.key == 'Enter') {
//                     e.path[2].remove();
//                     // Update completed counter
//                     finishedCount.innerText--;
//                 }
//             });
//             // Update completed counter
//             finishedCount.innerText++;
//             // Delete element
//             e.path[1].remove();
// }

// inputTask.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         //=================//
//         // Create new task //
//         //=================//
//         createTask();

//         //===================//
//         //      Delete task  //
//         //===================//
//         deleteTask();

//         //===================//
//         // Mark as completed //
//         //===================//
//         const tickBox = toDoList.querySelector("input");
//         tickBox.addEventListener('click', (e) => {
//             tickTask(e);
//         });
//         tickBox.addEventListener('keypress', (e) => {
//             if (e.key == 'Enter') {
//                 tickTask(e);
//             }
//         });
//     }
// })
