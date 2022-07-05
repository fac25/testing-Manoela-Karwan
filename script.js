const addNewTask = document.querySelector("#add-new-task");
const inputTask = document.querySelector("#input-new-task");
const taskTemplate = document.querySelector("#task_template");
const toDoList = document.querySelector("#to-do-list");

addNewTask.addEventListener('click', () => {
    inputTask.style.display = "block";
    inputTask.querySelector("input").focus();
})
addNewTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        inputTask.style.display = "block";
        inputTask.querySelector("input").focus();
    }
})

inputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // Hide input
        inputTask.style.display = "none";
        // Get a list element from the template
        const newTask = taskTemplate.content.cloneNode(true);
        // Take the input's entered value
        let newTaskTitle = inputTask.querySelector("#task0").value;
        // Update the new list's p tag with the input's value
        const p = newTask.querySelector("p[class='title']");
        p.textContent = newTaskTitle;
        // Add updated list to to-do list at the top of the list
        toDoList.prepend(newTask);

        //Reset input
        newTaskTitle = inputTask.querySelector("#task0").value = '';
        const closeBtn = toDoList.querySelector(".fa-x");
        // Add event listener to delete on-click
        closeBtn.addEventListener('click', (e) => {
            e.path[2].remove();
        });

        // Add event listener to delete on-enter when focused
        closeBtn.addEventListener('keypress', (e) => {
            if (e.key == 'Enter') {
                e.path[2].remove();
            }
        });
    }
})

