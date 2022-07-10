test('Test works', () => {
    let a = "test works"
    equal(a, "test works");
})

// Test setup
const createNewTask = () => {
    addTaskBtn.click();
    aTask.value = "A test task";
    inputToTask({ "key": "Enter" });
}


/////////////////////////
//       DELETE        //
// TEST current tasks  //
/////////////////////////


test("deleteTask() to remove the first task of current", () => {
    // Create a task
    createNewTask();

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
    equal(result, false);
});

test("deleteTask() to remove any task from a list of 10 current tasks", () => {
    // Create a task
    let count = 10;
    while (count > 0) {
        createNewTask();
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
    equal(result, false);
    result = currentTasks.querySelectorAll("li").length;
    equal(result, 9);

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
    createNewTask();
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
    equal(result, false);
});

test("deleteTask() to remove any task from a list of 10 current tasks", () => {
    // // Create 10 tasks and mark them as finished
    let count = 10;
    while (count > 0) {
    createNewTask();
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
    equal(result, false);
    result = finishedTasks.querySelectorAll("li").length;
    equal(result, 9);

    // Reset notes
    const deleteAll = finishedTasks.querySelectorAll("li");
    for (let li of deleteAll) {
        li.querySelector("button").click();
    }
});
