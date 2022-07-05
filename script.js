const addNewTask = document.querySelector("#add-new-task");
const inputTask = document.querySelector("#input-new-task");
const taskTemplate = document.querySelector("#task_template");
const finishedTaskTemplate = document.querySelector("#finished-task_template");
const toDoList = document.querySelector("#to-do-list");
const completedList = document.querySelector("#completed-list");
const finishedCount = document.querySelector("#finished-count");

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


const createTask = (e) => {
    // Hide input
        inputTask.style.display = "none";
        // Get a list element from the template
        const newTask = taskTemplate.content.cloneNode(true);
        // Take the input's entered value
    let newTaskTitle = inputTask.querySelector("#task0").value;
    if (!newTaskTitle) {
        alert("Please enter a valid title");
        return;
    }
        // Update the new list's p tag with the input's value
        const p = newTask.querySelector("p[class='title']");
        p.textContent = newTaskTitle;
        // Add updated list to to-do list at the top of the list
        toDoList.prepend(newTask);

        //Reset input
        newTaskTitle = inputTask.querySelector("#task0").value = '';
}

const deleteTask = () => {
    // Add event listener to delete on-click
        const closeBtn = toDoList.querySelector(".fa-x");
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

const tickTask = (e) => {
            // Create new task element in completed tasks
            // Get a list element from the template
            const oldTask = finishedTaskTemplate.content.cloneNode(true);
            // Take the input's entered value
            const newTaskTitle = e.path[1].querySelector("p").textContent;
            // Update the new list's p tag with the input's value
            const p = oldTask.querySelector("p[class='title']");
            p.textContent = newTaskTitle;
            // Add updated list to to-do list at the top of the list
            completedList.prepend(oldTask);
            
            // Add event listener to delete on-click
            const closeBtn = completedList.querySelector(".fa-x");
            closeBtn.addEventListener('click', (e) => {
                e.path[2].remove();
                // Update completed counter 
                finishedCount.innerText--;
            });

            // Add event listener to delete on-enter when focused
            closeBtn.addEventListener('keypress', (e) => {
                if (e.key == 'Enter') {
                    e.path[2].remove();
                    // Update completed counter 
                    finishedCount.innerText--;
                }
            });
            // Update completed counter 
            finishedCount.innerText++;
            // Delete element
            e.path[1].remove();
}

inputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        //=================//
        // Create new task //
        //=================//
        createTask();

        //===================//
        //      Delete task  //
        //===================//
        deleteTask();

        //===================//
        // Mark as completed //
        //===================//
        const tickBox = toDoList.querySelector("input");
        tickBox.addEventListener('click', (e) => {
            tickTask(e);
        }); 
    }
})

