const inputText = $("#input-text");
const btnButton = $("#btn-button");
const sectionTask = $("#section-task");

$(function () {
  //
  if (arrayTask.length > 0) {
    //aca iteremos el array y pintemos
    arrayTask.forEach((task) => {
      createInputTask(task.text, task.id, task.status);
    });
  }
});

btnButton.click(function () {
  const text = inputText.val();
  console.log("capturando el input", text);
  // capturas el obejto con task
  const task = storeTask(text);

  console.log("task", task);

  inputText.val("");
  inputText.focus();

  createInputTask(task.text, task.id, task.status);
});

function deleteTask(element) {
  const container = $(element).parent();

  // console.log(container[0].id);
  container.children("span").css({
    "text-decoration": "line-through",
  });


 container.children('button').hide();

  const id = container.children("input").data("id");

  updateTask(id, "status", "delete");
}

function saveTask(element, id) {
  const container = $(element).parent();
   const containerFather = $(element).parent().parent();
  const newText = container.children("input").val();
  updateTask(id, "text", newText) 
  container.children().hide();
  containerFather.children().show();
  containerFather.children('span').text(newText);
  
  
  //   console.log(newText);
  // console.log(element);
  // console.log(id);
}

function editTask(element) {
  const container = $(element).parent();
  const id = container.children("input").data("id");
  container.children().hide();

  container.append(`
    <div>
   <input placeholder ='Editar tarea'/>
   <button onclick = 'saveTask(this, ${id})'>☑️</button>
    </div>
`);
}

function createInputTask(text, id, status) {
  $("<div>", {
    id,
    html: `
      <input data-id="${id}"  type="checkbox"><span class="${status}">${text}</span>
      <button onclick="editTask(this)">✏️</button>
      <button>👁</button>
      <button onclick="deleteTask(this)">❌</button>
    `,
    //sectionTask.append(`<h1> ${text} </h1>`)
    //esto es crear un elemento div
  })
    .appendTo(sectionTask)
    .hide()
    .fadeIn(2500);

  $("div").hover(
    function () {
      //este estilo se va a mantener
      $(this).css("background-color", "#cdcdcd");
    },
    //si ponemos otra funcion separa por, entendera que se ejectura
    //cuando saque el mouse del  elemento
    function () {
      //este estilo se va a mantener
      $(this).css("background-color", "#fff");
    }
  );
}
