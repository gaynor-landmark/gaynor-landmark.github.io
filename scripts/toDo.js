var todoList = document.getElementById("todoList"); 

var tasks = todoList.querySelectorAll("li");
var taskInputs = todoList.querySelectorAll("input");

for (var i = 0; i < tasks.length; i++){
  tasks[i].addEventListener("click", editTask);
  taskInputs[i].addEventListener("blur", updateTask);
  taskInputs[i].addEventListener("keypress", keypressUpdateTask);
}

function editTask(){
  this.className = "edit";
  var taskInput = this.querySelector("input");
  taskInput.focus();
  taskInput.setSelectionRange(0, taskInput.value.length);
}

function updateTask(){
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}
function keypressUpdateTask(e){
  if (e.which === 13){
    updateTask.call(this);
  }
}
