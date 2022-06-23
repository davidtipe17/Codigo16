document.write("<h1>Dia 3 Switch</h1>");

//Switch
//Problea: En base a la nota escribir un mensaje
//nota < 13 = "Debe mejorar"
//nota > 14 = " Alumno Promedio"
//Nota > 18 ="Alumno Sobresaliente"
//nota == 20 = 'Alumno Genio"

//! Recordemos que cuando usamos prompt cualquier tipo de datos que guarde
//! este sera string

// const nota = Number(prompt("Ingrese Nota"));

// let mensaje = "";

// if (nota < 13) {
//   mensaje = "Debe mejorar";
// } else if (nota >= 14) {
//   mensaje = "Alumno Promedio";
// } else if (nota > 18) {
//   mensaje = "Alumno Promedio";
// } else if (nota == 20) {
//   mensaje = "Alumno Promedio";
// }
// document.write(mensaje);

// document.write("<hr>");
// //Angulos

// document.write("<h3> Angulos </h3>");

// let angulo = 0;
// document.write("<p>" + angulo + "</p>");
// // forma correcta de usar el if y else
// let mensaje = "<h3> NO existeeee </h3>";

// if (angulo === 0) {
//     mensaje = "<h3> Nulo</h3>";
// } else if (angulo < 90) {
//     mensaje ="<h3> Agudo </h3>";
// } else if (angulo === 90) {
//     mensaje ="<h3> Recto </h3>";
// } else if (angulo < 180) {
//     mensaje ="<h3> Obtsuo </h3>";
// } else if (angulo === 180) {
//     mensaje ="<h3> llano </h3>";
// } else if (angulo < 360) {
//   mensaje = "<h3> Concavo </h3>";
// } else if (angulo === 360) {
//   mensaje = "<h3> Completo </h3>";
// }

// document.write(mensaje);

//! EL SWITCH ES UNA CONDICIÓN
//*Esto dice que angulo va a ser la variable padre
//* y en cada case vamos  a evaluar esta variable,
//* sin embargo no hace falta volver a llamar a la variabel

//! Una recomendacion es usar break despues de cada case
//! break sirve para detener el switch
// switch (angulo) {
//   case 0:
//     document.write("<h3> Nulo</h3>");
//     break;
//   case 90:
//     document.write("<h3> Recto </h3>");
//     break;
//   case 180:
//     document.write("<h3> Llano</h3>");
//     break;
//   case 360:
//     document.write("<h3> Completo </h3>");
//     break;
// }

// let edad = 22;
// switch (edad) {
//   case 0:
//     console.log("Recien nacido");
//     break;
//   case 18:
//     console.log("Mayor de edad");
//     break;
//   case 20:
//     console.log("Entro a base 2");
//     break;
//   case 65:
//     console.log("Entro a la 3era edad");
//     break;
//   default:
//     console.log("Este caso no esta contemplado");
//   //! Nota en el default no hace falta poner break porque solo entr
//   //! ahi cuando ni una otra opcion funciona
// }

//!!!!!!!!!!!!!!!!!!!!!!ARREGLOS!!!!!!!!!!

//Cuantos datos almacena una variable? 1 es la respuesta
// el array a sido creado para guardar mas de un dato a la vez

// let datos = [1,2,3,4,5,6];
// el indice indica desde el 0 hasta el 5 donde
// 1 = 0, 2= 1, 3=2, 4=3, 5=4, 6=5
// en cantidad si son 6
// document.write(datos[5]);

const nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "lucas"];

console.log(nombres);
console.log(nombres[3]);
console.log(nombres[6]); // este indice no existe en el arreglo arriba
//js retorno un undefined
//length => Esta funcion retorna la cantidad de elementos

console.log(nombres.length); //6 elementos

const data = [1, true, false, -2, "Hola mundo"];
console.log(data);
//length => Esta funcion retorna la cantidad de elementos
console.log("datos", data.length);
//como acceder al ultimo elemnto con length
//[data.length-1] --> este retorna la ultima posicion de un array
console.log("datos", data[data.length - 1]); // la rspt es "hola mundo"
console.log("datos2", data[data.length - 2]); // las rspt es -2, debido a que la resta de 5 cantida - 1 es 4 y es el indice

//push: sirve para poder agregar un elemento al array

data.push("Agregando un datos");
console.log("datos con push", data);
console.log("Agregando un array dentro de un array");
data.push(["Pepe", "Juan", "Maria"]);
console.log(data);

const datosprueba = [
  1,
  true,
  false,
  -2,
  "Hola mundo",
  "Agregando un dato",
  ["Pepe", "Juan", [1, 2, 3, 4, [-1, -2, -4]], "Maria"],
];
console.log(datosprueba[3]);
console.log("datosprueba es", datosprueba[6][0]);

//
console.log("datosprueba es", datosprueba[6][2][3]);
console.log("datosprueba es", datosprueba[6][2][4][2]);

console.log(datosprueba[6][2].length);
console.log(datosprueba[6][datosprueba[6].length - 3]);
console.log(
  "prueba",
  datosprueba[6][datosprueba[6].length - 2][datosprueba[6][2].length - 1]
);

//pop es una función para poder eliminar el ultimo elemento de un array
const laptops = ["hp", "macbook", "asus", "lenovo"];
console.log("Laptops", laptops);
//Retorna el elemento eliminado
console.log("Elemento eliminado", laptops.pop());
console.log("Laptops", laptops);

const alumnos = ["Luis", "Juan", "Maria", "Luciana", "Lucas"];
console.log("El alumno" + alumnos.pop() + "Fue eliminado");
console.log("Alumnos", alumnos);

// unshift: Esta funcion agrega un elemento a un array
//pero en la primera posicion del array
alumnos.unshift("Daniel");
console.log("Unshift", alumnos);
//ojo hemos agregado a daniel
//shift: Esta funcion eliminar al primer elemento del array
console.log(alumnos.shift());
//esto sirve para remplazar un indice en el array
alumnos[4] = "juanito";
console.log(alumnos);

//indexOF: Esta funcion retorna la posicion en base a un dato

const colores = ["Rojo", "Verde", "Amarrilo", "Azul", "Morado"];
//Nota si tenemos elementos repetidos va  encontrar al mas cercano
//const colores = ["Rojo", "Verde" , "Amarrilo", "Azul", " Verde","Morado"];
//en este caso es el 1
console.log(colores.indexOf("Verde"));

const busqueda = prompt("Ingrese el color");

if (colores.indexOf(busqueda)) {
  alert("El color si existe y es." + colores.indexOf(busqueda));
} else {
  alert("El color no existe");
}

//bucle

let contador = 0;

while (contador < 10){
    console.log(contador)
    contador += 1;
    // contador++;
}
