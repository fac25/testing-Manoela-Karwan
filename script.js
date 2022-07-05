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

    const taskContainer = document.createElement("li")
    const newTaskCheckbox = document.createElement("input");
    const newTaskTitle = document.createElement("p");
    const newTaskButton = document.createElement("button");

    newTaskCheckbox.type = "checkbox";
    newTaskTitle.innerHTML = aTask.value;
    newTaskButton.innerHTML = "X"


    taskContainer.append(newTaskCheckbox);
    taskContainer.append(newTaskTitle);
    taskContainer.append(newTaskButton);
    toDoList.append(taskContainer)

    aTask.value = "";
  }
});
