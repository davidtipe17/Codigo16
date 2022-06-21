let numero1 = 10;
let numero2 = 20;

console.log ("Suma", numero1 + numero2)
console.log("Resta", numero1 -numero2)
console.log("Multiplicar", numero1 * numero2)
console.log("División", numero1 / numero2)


//Asi como podemos transformar un dato a string, tambien existen la clase number la cual
//puede transformar un string a un number

let numero3 = "22";

console.log(Number(numero3))
//esto no es posible sale un Nan --> Not-A-Number
let numero4 ="Luis"
console.log(Number(numero4))

//otras formas de transformar un string a numer

let numero5 = "33.5"
//1er forma
console.log("Forma1", Number(numero5));
//2da forma
console.log("Forma2", parseInt(numero5))
//3er fotma --> esto se utiliza en la actualidad
console.log("Forma3", +numero5)
//4ta forma
console.log("Forma4", parseFloat(numero5))

console.log(Number("12hola"))



//math
const operation = 3 * 2 + 10 - 5 / 2;
//math.sqrt = raiz cuadrada
console.log(Math.sqrt(4))
//math.pow = potencia.
console.log(Math.pow(9, 2));
console.log(Math.pow(4, 3))

//c2 = a2 + b2 --> pitagoras.
//c = -/a2 +b2

//vamos a ver como solicitar un dato del navegador
//prompt muestra una alerta en el cual podemos escribir algo
//el valor que coloquemos se guarda en la variable en este caso
// catetoa tiene el valor colocado

// const catetoa = Number(prompt("Ingrese el valor de A"));
// const catetob= Number(prompt("Ingrese el VALOR de B"));

// const operacion2 = Math.sqrt(Math.pow(catetoa, 3) + Math.pow(catetob , 3))

// console.log ("la hipotenusa es:", operacion2);



//Hacer un algoritmo que halle el area de un rectangulo
// a = base * altura

const base = Number(prompt("Ingrese base"));
const altura= Number(prompt("Ingrese altura"));

const area1 = base * altura

console.log ("el area rectangulo es:", area1);

//hallar el area de un circulo
// a = pi* r2

const radio = Number(prompt("Ingrese radio"));

const areacirculo = Math.PI *Math.pow (radio, 2) ;
console.log ("el area del circulo es:", areacirculo);