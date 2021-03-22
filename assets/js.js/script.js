let buttonEl = document.querySelector("#save-tasks");
let tasksToDoEl = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click",function() {
    let listitemEl = document.createElement("li");
    listitem.className = "task-item";
    listitem.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listitemEl);
});

let createTaskHandler = function() {
    let listitemEl = document.createElement("li");
    listitemEl.className = "task-item";
    listitemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listitemEl);
};
buttonEl.addEventListener("click", createTaskHandler);