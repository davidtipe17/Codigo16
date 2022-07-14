// si solo coloco el array vacio cuando reinio la pagina tood lo guardado en local
//localstorage se borra, para ello se hace lo siquinente JSON.parse(localStorage.getItem("tasks")) || [];
// si a la primera ejecucion es null tomara el array vacio, cuando ya tiene info por el push tomara el getitem


let arrayTask = JSON.parse(localStorage.getItem("tasks")) || [];


function storeTask(text) {

    const task = {
        id: arrayTask.length + 1,
        text,
        status: 'todo',
        created_at: new Date(),

    }

    arrayTask.push(task);

    saveInLocalStorage();
    return task;

}

function updateTask(id, key, value) {
    const task = arrayTask.find((task) => task.id == id);
    task[key] = value;
    console.log('task task', task);

    //PARA ACTUALIZAR LA DATA EN LOCAL STORAGE SOLO HACE FALTA
    //LLAMAR A LA FUNCION SAVAINLOVALSTORAGE()

    saveInLocalStorage();
}

function saveInLocalStorage() {

    localStorage.setItem('tasks', JSON.stringify(arrayTask));
}


