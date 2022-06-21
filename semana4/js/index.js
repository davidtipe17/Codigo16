//variable que pueda cambiar de tipo

let numero =10;
console.log("Primer tipo",numero)
// se cambio el tipo de dato
//cuando alteramos el valor de una variable no hace falta poner otra vez let o const
//let o const va solo cuando se crea la variable
numero ="pepe"
console.log("Segundo Tipo", numero)
// document.write (numero)
//console.log permite imprimir un valor en la consola del navegador
// console.log(numero);

//! const
const igv= 0.18;
console.log("Primer IGV", igv)
//alerta en el navegador
// alert(igv)
//! este no es posible
// igv=0.2;
// console.log("Segund IGV", igv)

//! concatenación: basicamente es juntar 2 0 mas variables
const primerNombre = "David"
const primerApellido ="Tipe"
let edad = 22;
let dias = 20;
let estaVivo = true;
console.log("Concatenacion");
console.log(primerNombre+ " " + primerApellido + edad)
console.log(edad + dias);

//En js podemos hacer cualquier tipo de operacion matematica
// "* + - /"

// como combertir un number a string
// sepamos que en js existen string y number.
//Al hace esto estamos transformando un entero un string 
console.log("bolean", estaVivo)
//ejemplo
//"22" + "20" = "2220"
console.log(String(edad)+ String(dias));
//lo que es numero se ve en letra morada y la cadena en blanco 
console.log("Edad",String(edad));
//boleean a string
console.log(String(estaVivo)+String(dias));

// recipiente = "papel"

// alert(recipiente )

// alert("hola")
// TIPO DE DATOS //
// String ="cadena de texto"
// Number= 43
// un boleano es o verdadero o falso
// boolean= false
// Boolean = true;
// formas de declarar un variable
// ESTOS TRES SON PREFIJOS Y TRABAJAN CON BLOQUE
// var, let, const
//--------->
// var  numero =15;
//VAR = PREFIJO
//NUMERO= NOMBRE DE LA VARIABLE
//15= DATO O VALOR
//OJO CUANDO EL DATO ES UN VALOR STRING SIEMPRE VA ENTRE COMILLAS
//--------->
// las variables constantes no puede cambiar su valor -->
// const nombre = "david"; ---->
//esto esta mal, no te muestra por que no puede cambiar su valor
// nombre = "javier"
//alert(nombre);---->

// como declarar una variable? 
// let si se puede modificar.
// let numero; ---->
// numero = 29; ---->

// en un misma linea
// let numero= 29; 
// alert(numero); ---->


// declarar muchas variables //scope
// let n, n2, n3; ---->
// n = 1; ---->
// n2 = 2; ---->
// n3 = 3; ---->
// //mostrarlas
// alert(n); ---->
// alert(n2); ---->
// alert(n3); ---->

//hoisting hay un orden para poder codificar
// el orden de las isugiente lineas estan mal
// let nmr;
// alert (nmr);
// let nmr =3;
// es una variable vacia declara, se declara vacia
// let nmr = null ;
// let nmr2 = 6; ---->
// let nmr3 = 4; ----> 
// alert(nmr2 + nmr3); ---->
//esta es una función

// --->
// let name = prompt("cual es tu nombre");
// alert("hola " + name);

//OPERADORES
//OPERADORES DE ASIGNACIÓN
//este es de asignacion es por defecto. 
// let n = 10;
//suma
// n += 6
//resta
// n -= 7
//multiplicacion
//n *= 5
//division
//n /= 5

//el rest %
//es el resto que figura despues de dividir
// n %=9;
//exponentes
// n  **= 4
// document.write(n)




