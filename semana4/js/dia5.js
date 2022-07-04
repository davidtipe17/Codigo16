//una funcion es un bloque de codigo que realiza una accionn
//la sintaxxis de una funcion se divide en 3

// la sintaxis mas clasica y antiguo que existe
// function nombreDeLaFuncion() {

//   const alumnos = ["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas", "Klark"];

//   for (let alumno of alumnos) {
//     console.log(alumno);
//   }
// }

// //Nota para hacer que una funcion se ejecute debemos llamarla
// // Esta accion que acabamos de hacer se llama ejecutar a al funcion

// nombreDeLaFuncion();

// Ahora haremos una funcion que retorne una valor

// Teoricamente hay 2 clases de funciones
// Funciones impuras => Es una funcion que no retorna un valor
// Funciones puras.  => Es una funcion que retorna valor

// * Las funcion tienen la opcion de usar "return" que es una
// * parala reserva de JS la cual sirve para devolver un valor

// function cuboDeUnNumer() {
//   return Math.pow(10,3)
// }

// const resultado = cuboDeUnNumer();
// console.log("resultado", resultado)

// function potenciaDeUnNumero (numero, potencia) {
//   return Math.pow(numero, potencia)
// }

// const ejemplo1 = potenciaDeUnNumero(3, 4);
// const ejemplo2 = potenciaDeUnNumero (6,2);
// console.log(ejemplo1);
// console.log (ejemplo2);

// //validar antes
// function sumar(numero1, numero2) {

// const nr1 = Number(numero1);
// const nr2 = Number(numero2) ;

// if(isNaN(nr1) && isNaN(nr2)){
//   return "No se puede sumar"
// }
// return nr1 + nr2;

// }
// console.log("Suma", sumar(1, "10"))

// function sumar(n11, n22) {

//   if (isNaN(n11) || isNaN(n22)){
//     return "Ingrese un numero valido";
//   }
//   return n11 + n22;
// }
// let hola = Number(prompt("Ingrese el numero 1"));
// let hola1 = Number(prompt("Ingrese el numero 2"));

// document.write("suma es: ", sumar(hola, hola1));


// function multplicarN(n, ...numeros){



// return numeros.map(numero => n*numero)
// }
// console.log("hola-->", multplicarN(2,3,4,5,6));

// function suma(n1, n2) {
//   //cuando hagamos un funcion siempre debemos tener en cuenta que casos
//   //pueden suceder
//   //Eso se llama validacion
//   return "la suma es :", Number(n1) + Number(n2);
// }
// console.log("suma de pregunta es ", suma(true, true));

// // creando una funcion que valide la variables creadas para evitar errores
// function sumar(n1, n2) {
//   let numer1 = Number(n1);
//   let numer2 = Number(n2);

//   if (isNaN(numer1) || isNaN(numer2)) {
//     return "No se puede sumar";
//   }
//   return numer1 + numer2;
// }
// console.log("suma : ", sumar("2", 2));

// function calcularFactorial(numero) {
//   const number = Number(numero);
//   //!Nota el return aparte de retornar un valor da fin a la
//   //! ejecucion de la funcion
//   if (isNaN(number)) {
//     return " Nose puede sumar";
//   }
//   //! siempre como Paso1 creo una funcion que me retorne el factorial
//   let result = 1;
//   for (let index = 1; index <= numero; index++) {
//     result *= index;
//   }
//   return result;
// }
// console.log("factorial", calcularFactorial(5));


// function imprimirFactorial() {
//   let iv = document.getElementById("input_number").value;
//   let resulto = calcularFactorial(iv);
//   // Esta linea estamos buscando el HTML al elementos que tenga la clase
//   // container cuando lo encuentro lo guarda en la variable container
//   // Luego de esto podemos usar la propiedad innerHTHML para poder
//   // agregar HTML a este cotainer
//   //!querySelector Es una funcion de JS la cual permite buscar elementos de
//   //!una forma sencilla
//   //!Nota el . , # o el nombre del elmento ejem : ul,div,h4 son selectore de
//   //!elmentos HTML
//   // Cuando es una clase  document.querySelector(".container")
//   // Cuando es un ID document.querySelector("#container")
//   // Cuando es un elemento document.querySelector("div")
//   const contenedor = document.querySelector(".container");
//   contenedor.innerHTML += "<p>" + resulto + "</p>";
// }

function imprimirFactorial(){

const input = document.querySelector("#input_number");
const contenedor = document.querySelector(".resultado1");
contenedor.innerHTML = "";
const number = Number(input.value);
input.value = "";
let resultado = 1;
for(let index = 1; index <= number; index++){
resultado *= index;
}
contenedor.innerHTML += "<p>" + resultado + "</p>";
 }
// function calcularTabla(){
// const iva = document.querySelector("#input_number_2");
// let resul = document.querySelector(".resultado2");

// resul.innerHTML = "";
// const n1 = Number(iva.value)
// // Es es basicamente para limpiar el input
// if (isNaN(n1)){
//   alert("Ingresa un numero valido pf");
//   return;
//  /* Recureden que el return aparte de retonar un valor tambien terminar la ejecucuion
//     de la funcuion en este nos retornarmos pero si tenemos una alert
//     y luego un return sin nada para que en este caso solo se encargue de terminar la ejecucion
// */
// }
// for (let i = 1; i <= 12; i++) {
//   resul.innerHTML +=
//   "<p>" + n1 + " x " + i + " = " + i * n1 + "</p>";
//   // resul.innerHTML += ` ${index} * ${n1} = ${n1}* ${index} `;
// }

// }

// function imprimirFactorial() {
//   const iv = document.querySelector("#input_number");
//   let resultado = document.querySelector(".resultado1");
//   resultado.innerHTML = " ";
//   const number = Number(iv.value);
  // iv.value = "";
//   if (isNaN(number)) {
//     alert("Ingrese a un numero valido");
//     return;
//   }
//   for (let index = 1; index <= 12; index++) {
//     resultado.innerHTML +=
//       "<p>" + number + " x " + index + " = " + index * number + "</p>";
//   }
// }