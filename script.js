const addNewTask = document.querySelector("#add-new-task");
const inputTask = document.querySelector("#input-new-task");
const taskTemplate = document.querySelector("#task_template");
const toDoList = document.querySelector("#to-do-list");

const aTask = document.getElementById("a-task");

addNewTask.addEventListener("click", () => {
  aTask.style.display = "block";
});

aTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    aTask.style.display = "none";

    const newTaskCheckbox = document.createElement("input");
    const newTaskTitle = document.createElement("p");
    const newTaskButton = document.createElement("button");

    newTaskCheckbox.type = "checkbox";
    newTaskTitle.innerHTML = aTask.value;
    toDoList.append(newTaskCheckbox);
    toDoList.append(newTaskTitle);
    toDoList.append(newTaskButton);

    aTask.value = "";
  }
});
