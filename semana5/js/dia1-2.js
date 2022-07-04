//EVENTOS

//Un evento es una accion que el usuario o el navegador puede
//Activar

//ejm : onclick=> Se activa cuando el usuario usa el mouse y clickea un elemento.
//para activar los eventos podemos hacerlo desde JS o desde el HTML

//onchange
//onkeyup
//onkeydown
//onsubmit
//onmousehover
//onfocus
//onblur
// etc..............
let answer = 42;
answer.toString(); //"42"

const btn = document.querySelector("#btn-test");
btn.onclick = () => {
  console.log("Esto es una prueba de click");
}

// const btnTest = document.querySelector("#btn-test");
// //evento onclick con arrow function
// btnTest.onclick = () => {
//   console.log("Es una click");
// };

const cambioH1 = document.querySelector("#h1-test");

cambioH1.onclick = () => {

  cambioH1.innerHTML = "Cambiando el texto a hola";

}

// const variableh1 = document.querySelector("#h1-test");
// variableh1.onclick = () => {
//   console.log("CLICK desde el h1");

//   variableh1.innerText = "Cambiando el texto";
// };
//evento onclick con function
// //! otra forma
// btnTest.onclick = function(){
//     console.log("Es una click");
// };

//vamos a capturar los datos de nuestro formulario y guardarlo en un
// array de objeto
const users = [];
console.log("Final",users);
const formulario = document.querySelector("#formu");
//! Nota: el evento onsubmit tiene un propuedad
//! lo cual nos da un paramettro que esta implicito
//! este parametro contiene la información del evento
//! y se suele event o e

//! get envia la informacion por el url
formulario.onsubmit = (event) => {
  //* NOTA un formulario al tener el evento submit va a recargar la pagina
  //? Para evitar que el evento onsubmit recargue la pagina podemos usar el
  //? evento.preventDefault() esta funcion bloquea la accion de recargar una pagina
  event.preventDefault();
  console.log(event.target);
  //* existe la clase FormDat que es nativa del JS
  const formData = new FormData(event.target);
  //vamos a crear un obejto user que esta vacido
  const user = {};
  console.log("intermedio",user);
  // console.log(formData.entries);
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
    user[key]= value;
  }
//   otra forma mas entendible
// for (let dato of formData.entries()) {
//     console.log("key", dato[0]);
//     console.log("value", dato[1]);
//     console.log("------------");

//     user[dato[0]] = dato[1];
//   }
  users.push(user);
};
//! NOTA dos obejtos nunca pueden ser iguales
const car = {
  modelo: "BMW I18"
};
const car2 = {
  modelo: "BMW I18"
};
//!La teoria dice que un objeto nunca sera igual a otro, es decir
//!asi los objetas tengan el mismo contenido nunca sera iguales 
//for
//recordemos que un for nos permite iterar(recorrer) un array
// for(let i=0; i<10;i++){
//   console.log(i);
// }
// for (const iterator of object) {
// }
// for (const key in object) {
// }
//lo que sigue del for es el forEach, es un hermano del for
//sinembargo es usado para poder iterar elementos sin retornar nada
// en el foreach no existe el return
const alumnos = ["Juan","Pepe", "Luis","Maria", "Carla", "Ale"];
//la forma en la cual usamos el foreach es la siguiente
// el foreach es una funcion de las arrays
//Es esta la funcion foreach tenemos 2 cosas
//1: El value => Es el valor que extraemos en cada interaccion
//2: El index => Es la posicion del elemento.
alumnos.forEach((value, index) => {
console.log("index =>", index);
console.log("value =>", value);
});


const carros = [
  {
    modelo: "Nissan GTR",
    price: 10000,
  },
  {
    modelo: "Mercedez GLA 2000",
    price: 20000,
  },
  {
    modelo: "BMW x6",
    price: 30000,
  },
];

carros.forEach((carro, index) => {
  console.log(carro);
});