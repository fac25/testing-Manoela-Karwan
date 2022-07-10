test('Test works', () => {
    let a = "test works"
    equal(a, "test works");
})

// Test setup
const createNewTask = (title) => {
    addTaskBtn.click();
    aTask.value = title;
    inputToTask({ "key": "Enter" });
}


/////////////////////////
//       DELETE        //
// TEST current tasks  //
/////////////////////////


test("deleteTask() to remove the first task of current", () => {
    // Create a task
    createNewTask("Test task");

    // Delete first task in the list
    const toBeClickedTask =  currentTasks.querySelector("li");
    const toBeClickedBtn = currentTasks.querySelector("button");
    const randomId = Math.round(Math.random()*100);
    toBeClickedTask.id = randomId;
    toBeClickedBtn.click();
    let elExist = true;
    try {
        const deletedTask = currentTasks.querySelector(`#${randomId}`);
    }
    catch {
        elExist = false;
    }
    let result = elExist;
    equal(result, false, "to remove the first task of current");
});

test("deleteTask() to remove any task from a list of 10 current tasks", () => {
    // Create 10 tasks
    let count = 10;
    while (count > 0) {
        createNewTask("Test task");
        count--;
    }

    // Delete any task in the list
    const toBeClickedArr = currentTasks.querySelectorAll("li");
    const toBeClickedTask = toBeClickedArr[Math.floor(Math.random()*10)]
    const toBeClickedBtn = currentTasks.querySelector("button");
    const randomId = Math.round(Math.random()*100);
    toBeClickedTask.id = randomId;
    toBeClickedBtn.click();
    let elExist = true;
    try {
        const deletedTask = currentTasks.querySelector(`#${randomId}`);
    }
    catch {
        elExist = false;
    }
    let result = elExist;
    equal(result, false, "to remove any task from a list of 10 current tasks");
    result = currentTasks.querySelectorAll("li").length;
    equal(result, 9, "number of tasks to be updated correctly");

    // Reset notes
    const deleteAll = currentTasks.querySelectorAll("li");
    for (let li of deleteAll) {
        li.querySelector("button").click();
    }
});


//////////////////////////
//       DELETE         //
// TEST completed tasks //
//////////////////////////

test("deleteTask() to remove the first task of current", () => {
    // Create a task and mark it as finished
    createNewTask("Test task");
    currentTasks.querySelector("input").click();

    // Delete first task in the list

    const toBeClickedTask =  finishedTasks.querySelector("li");
    const toBeClickedBtn = toBeClickedTask.querySelector("button");
    const randomId = Math.round(Math.random()*100);
    toBeClickedTask.id = randomId;
    toBeClickedBtn.click();
    let elExist = true;
    try {
        const deletedTask = finishedTasks.querySelector(`#${randomId}`);
    }
    catch {
        elExist = false;
    }
    let result = elExist;
    equal(result, false, "to remove the first task of current");
});

test("deleteTask() to remove any task from a list of 10 current tasks", () => {
    // // Create 10 tasks and mark them as finished
    let count = 10;
    while (count > 0) {
    createNewTask("Test task");
    currentTasks.querySelector("input").click();
    count--;
    }

    // Delete any task in the list
    const toBeClickedArr = finishedTasks.querySelectorAll("li");

    const toBeClickedTask = toBeClickedArr[Math.floor(Math.random()*10)]
    const toBeClickedBtn = toBeClickedTask.querySelector("button");
    const randomId = Math.round(Math.random()*100);
    toBeClickedTask.id = randomId;
    toBeClickedBtn.click();
    let elExist = true;
    try {
        const deletedTask = finishedTasks.querySelector(`#${randomId}`);
    }
    catch {
        elExist = false;
    }
    let result = elExist;
    equal(result, false, "to remove any task from a list of 10 current tasks");
    result = finishedTasks.querySelectorAll("li").length;
    equal(result, 9, "number of tasks to be updated correctly");

    // Reset notes
    const deleteAll = finishedTasks.querySelectorAll("li");
    for (let li of deleteAll) {
        li.querySelector("button").click();
    }
});


///////////////////////////
//       Tick            //
//  TEST current tasks   //
///////////////////////////

test("checkTask() to send the first task ticked off in finished tasks", () => {
    // Create a task
        createNewTask("Test task");

    
    // Tick first task in the list

    const selectedTask = currentTasks.querySelector("li");
    let taskTxt = currentTasks.querySelector("p").textContent;
    const tickBtn = selectedTask.querySelector("input");
    
    const currCountBefore = countCurrentTasks;
    const tickedCountBefore = countFinishedTasks;

    tickBtn.click();

    const currCountAfter = countCurrentTasks;
    const tickedCountAfter = countFinishedTasks;

    const tickedTxt = finishedTasks.querySelector("p").textContent;


    let result = false;
    if (tickedTxt == taskTxt) {
        result = true;
    }
    equal(result, true, "to send the first task ticked off in finished tasks");
    
    result = false;
    if (currCountAfter == (currCountBefore - 1) &&
        tickedCountAfter == (tickedCountBefore + 1)) {
        result = true;
    }
    equal(result, true, "number of tasks to be updated correctly");

    // Reset tasks
    let deleteAllTicked = finishedTasks.querySelectorAll("li");
    for (let li of deleteAllTicked) {
        li.querySelector("button").click();
    }
});

test("checkTask() to send the any task ticked off in finished tasks", () => {
    // Create 10 tasks
    let count = 10;
    while (count > 0) {
        createNewTask("Test task");
        count--;
    }
    
    // Delete any task in the list
    const toBeClickedArr = currentTasks.querySelectorAll("li");
    
    const randomIdx = Math.round(Math.random() * 9);
    const selectedTask = toBeClickedArr[randomIdx];

    selectedTask.querySelector("p").textContent = "This task will be ticked";
    
    let taskTxt = selectedTask.querySelector("p").textContent;

    const tickBtn = selectedTask.querySelector("input");
    
    const currCountBefore = countCurrentTasks;
    const tickedCountBefore = countFinishedTasks;

    tickBtn.click();

    const currCountAfter = countCurrentTasks;
    const tickedCountAfter = countFinishedTasks;
   
    // // compare it to the task on top of finished (use code below)
    const tickedTxt = finishedTasks.querySelector("p").textContent;
    
    let result = false;
    if (tickedTxt == taskTxt) {
        result = true;
    }
    equal(result, true, "to send the any task ticked off in finished tasks");
    
    result = false;
    if (currCountAfter == (currCountBefore - 1) &&
        tickedCountAfter == (tickedCountBefore + 1)) {
        result = true;
    }
    equal(result, true, "number of tasks to be updated correctly");
    
    
    // Reset notes
    let deleteAllCurr = currentTasks.querySelectorAll("li");
    for (let li of deleteAllCurr) {
        li.querySelector("button").click();
    }
    let deleteAllTicked = finishedTasks.querySelectorAll("li");
    for (let li of deleteAllTicked) {
        li.querySelector("button").click();
    }
});

test("checkTask() to send the any task ticked off on the top of finished tasks", () => {
    // Create 10 tasks
    let count = 10;
    while (count > 0) {
        createNewTask("Test task");
        count--;
    }
    // Create 10 more tasks and tick them off
    count = 10;
    while (count > 0) {
        createNewTask("Ticked task");
        currentTasks.querySelector("input").click();
        count--;
    }


    // Delete any task in the list
    const toBeClickedArr = currentTasks.querySelectorAll("li");
    
    const randomIdx = Math.round(Math.random() * 9);
    const selectedTask = toBeClickedArr[randomIdx];

    selectedTask.querySelector("p").textContent = "This task will be ticked";
    
    let taskTxt = selectedTask.querySelector("p").textContent;

    const tickBtn = selectedTask.querySelector("input");
    
    const currCountBefore = countCurrentTasks;
    const tickedCountBefore = countFinishedTasks;

    tickBtn.click();

    const currCountAfter = countCurrentTasks;
    const tickedCountAfter = countFinishedTasks;
   
    // // compare it to the task on top of finished (use code below)
    const tickedTxt = finishedTasks.querySelector("p").textContent;
    
    let result = false;
    if (tickedTxt == taskTxt) {
        result = true;
    }
    equal(result, true, "to send the any task ticked off on the top of finished tasks");
    
    result = false;
    if (currCountAfter == (currCountBefore - 1) &&
        tickedCountAfter == (tickedCountBefore + 1)) {
        result = true;
    }
    equal(result, true, "number of tasks to be updated correctly");
    
    
    // Reset notes
    let deleteAllCurr = currentTasks.querySelectorAll("li");
    for (let li of deleteAllCurr) {
        li.querySelector("button").click();
    }
    let deleteAllTicked = finishedTasks.querySelectorAll("li");
    for (let li of deleteAllTicked) {
        li.querySelector("button").click();
    }
});


///////////////////////////
//        Untick         //
//  TEST finished tasks  //
///////////////////////////


