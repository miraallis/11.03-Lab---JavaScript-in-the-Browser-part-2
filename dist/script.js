//create event listeners for inputs
function domLoaded() {
    const addButton = document.getElementById("addBtn");
    const taskInput = document.getElementById("newTask");
    addButton.addEventListener("click", addBtnClick);
    taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addBtnClick();
    }
    });
}

//extract the text from the text input then 
function addBtnClick() {
    const taskInput = document.getElementById("newTask");
    const newTask = taskInput.value;
    if (newTask !== "") {
    addTask(newTask);
    taskInput.value = ""; // clear textbox
}
}
//create a new li element for the task and append it to the ol parent element
function addTask(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;
    const taskList = document.querySelector("ol");
    taskList.appendChild(li);
    //add event listener to last x button for removing
    const doneButtons = document.querySelectorAll(".done-btn");
    const lastButton = doneButtons[doneButtons.length - 1];
    lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
    const buttonClicked = event.target;
    const liToRemove = buttonClicked.parentNode;
    const ol = liToRemove.parentNode;
    ol.removeChild(liToRemove);
}

window.addEventListener("DOMContentLoaded", domLoaded);