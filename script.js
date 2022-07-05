const addNewTask = document.querySelector("#add-new-task");
const inputTask = document.querySelector("#input-new-task");
const taskTemplate = document.querySelector("#task_template");
const toDoList = document.querySelector("#to-do-list");

addNewTask.addEventListener('click', () => {
    inputTask.style.display = "block";
})

inputTask.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') {
         inputTask.style.display = "none";
         const newTaskTitle = inputTask.querySelector("#task0").value;
         const newTask = taskTemplate.content.cloneNode(true);
         const p = newTask.querySelector("p[class='title']");
         p.textContent = newTaskTitle;
         toDoList.prepend(newTask);
         newTaskTitle = inputTask.querySelector("#task0").value = '';
    }
})