let formEl = document.querySelector("#task-form"); 
let tasksToDoEl = document.querySelector("#tasks-to-do"); 
let taskIdCounter = 0;

let taskFormHandler = function (event) {
  event.preventDefault();
  let taskNameInput = document.querySelector("input[name='task-name']").value;
  let taskTypeInput = document.querySelector("select[name='task-type']").value;

if (!taskNameInput || !taskTypeInput){
    alert("You need to fill out the task form!");
    return false;
}
formEl.reset();
}
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  createTaskEl(taskDataObj);

let createTaskEl = function(taskDataObj) {
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";


  let taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";


  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl);

  
  tasksToDoEl.appendChild(listItemEl);


formEl.addEventListener("submit", taskFormHandler);
};