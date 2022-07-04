
// DOM:
const listTasks = document.querySelector("#list");
const inputTask = document.querySelector('#input_newtask');
inputTask.focus(); //cuando cargue el html se puede escribir en el campo de text<o

const arrayTasks = [];
// Funciones para las tareas:
function addTask() {
  if (inputTask.value == "") {
      alert("Ingresa un texto para la tarea.");
      return;
  }
  // Creamos la nueva tarea:
  const task = new Task(inputTask.value);
  // Agregamos al arreglo de tareas:
  arrayTasks.push(task);
  // Agregamos la tarea al DOM:
  document.querySelector('.form').before(task.createNode());
  inputTask.value = "";
  inputTask.focus();
}
console.log("array antes:",arrayTasks);
function checkTask(checkbox) {
  if (checkbox.checked) {
      const task_id = checkbox.parentElement.id;
      console.log("task_id",task_id); //referencial
      const task = arrayTasks.find((task) => task.id == task_id);
      console.log("que es ",task.id);

      console.log("que es ",task);
      task.done();
      checkbox.setAttribute('disabled', true);
  } 
}
function deleteTask(anchor) {  
  const task_id = anchor.parentElement.id;
  const task = arrayTasks.find(task => task.id == task_id);
  task.delete();
}
// const chxTaskDone = document.querySelector("#chx_task_done");
// const chxTaskDelete = document.querySelector("#chx_task_delete")
// const chxTaskTodo = document.querySelector("#chx_task_todo")

// // Checkbox tiene el evento onchange
// chxTaskDone.onchange = function () {
//   showOrHideElement(this.checked, ".todo", ".delete");
// };

// chxTaskDelete.onchange = function () {
//   showOrHideElement(this.checked, ".todo", ".done");
// };

// chxTaskTodo.onchange = function () {
//   showOrHideElement(this.checked, ".delete", ".done");
// };

// function showOrHideElement(checked, typeOne, typeTwo) {
//   const elementsOne = document.querySelectorAll(typeOne);
//   const elementsTwo = document.querySelectorAll(typeTwo);

//   if (checked) {
//     elementsOne.forEach((todo) => (todo.style.display = "none"));
//     elementsTwo.forEach((task) => (task.style.display = "none"));
//   } else {
//     elementsOne.forEach((todo) => (todo.style.display = "block"));
//     elementsTwo.forEach((task) => (task.style.display = "block"));
//   }
// }



// // Checkbox tiene el evento onchange
// chxTaskDone.onchange = function () {
//   const taskTodo = document.querySelectorAll(".todo");
//   const taskDelete = document.querySelectorAll(".delete");
//   console.log(taskTodo);
//   if (this.checked) {
//     // recurden que taskTodo es una lista de elementos HTML
//     taskTodo.forEach((todo) => (todo.style.display = "none"));
//     taskDelete.forEach((task) => (task.style.display = "none"));
//     // vamos a mostrar solo la tareas terminadas
//     // por ende vamos a buscar la tareas que tengan la clase todo y la clase delete
//     // y las vamos a ocultar
//     // querySelectarAll
//   } else {
//     taskTodo.forEach((todo) => (todo.style.display = "block"));
//     taskDelete.forEach((task) => (task.style.display = "block"));
//   }
// };

// chxTaskDelete.onchange = function () {

//   const taskTodo = document.querySelectorAll(".todo");
//   const taskDone = document.querySelectorAll(".done");
//   console.log(taskTodo);
//   if (this.checked) {
//     // recurden que taskTodo es una lista de elementos HTML
//     taskTodo.forEach((todo) => (todo.style.display = "none"));
//     taskDone.forEach((task) => (task.style.display = "none"));
//     // vamos a mostrar solo la tareas terminadas
//     // por ende vamos a buscar la tareas que tengan la clase todo y la clase delete
//     // y las vamos a ocultar
//     // querySelectarAll
//   } else {
//     taskTodo.forEach((todo) => (todo.style.display = "block"));
//     taskDone.forEach((task) => (task.style.display = "block"));
//   }
// };
// chxTaskTodo.onchange = function () {

//   const taskDelete = document.querySelectorAll(".delete");
//   const taskDone = document.querySelectorAll(".done");
//   console.log(taskTodo);
//   if (this.checked) {
//     // recurden que taskTodo es una lista de elementos HTML
//     taskDelete.forEach((todo) => (todo.style.display = "none"));
//     taskDone.forEach((task) => (task.style.display = "none"));
//     // vamos a mostrar solo la tareas terminadas
//     // por ende vamos a buscar la tareas que tengan la clase todo y la clase delete
//     // y las vamos a ocultar
//     // querySelectarAll
//   } else {
//     taskDelete.forEach((todo) => (todo.style.display = "block"));
//     taskDone.forEach((task) => (task.style.display = "block"));
//   }
// };



// NUEVAS FUNCIONALIDADES:
// function updateTask(task todo) {}
// function uncheckTask(task done) {}
// function setPriorityTask(task todo) {}

// SETTINGS:
// function sortTasks() {}
// function showDoneTask() {}
// function showDeletedTask() {}