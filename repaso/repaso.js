// getElementbyID = selectores atrapa algo desde el html por su id, clase o etiqueta
//inner muestra lo de js en html
//un bucle: es una estructura repititiva es decir hace muchas cosas.

// parts de un bucle i= iterador (indice) va iniciar el bucle
//variables (contenedor) //bucles = recorre o que repite)

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let j = 0; j <= 50; j += 3) {
//   console.log("recorre",j);
// }

// const numero = [1,2,3,4,5,6,7,8,9,10];

// for (let j = 0; j < numero.length; j++){
// if (numero[j] % 2 === 0) {
// console.log(numero[j])
// }
// }

// const alumnos = ["David", "germania", "guillermo", "core"];

// console.log("cantidad", alumnos.length)

// for (let i = 0; i < alumnos.length; i++) {
//   console.log(alumnos[i])
// }

// let n1 =2 ;
// let n2 = 3 ;
// resultado = n1 + n2;
// console.log ("Ejercicio 1:",resultado);

// //usando funciones

// function suma(a,b){
//   return "ejercicio1 -2 ", a + b ;
// }
// console.log(suma("suma ", 10,4));

// const laptops = [
//   {
//       marca :"lenovo",
//       serie:122222,
//       vende:"falabella",

//   },

//   {
//       marca :"mac",
//       serie:133333,
//       vende:"vea",
//   },

//   {
//       marca:"toshiba",
//       serie:14444,
//       vende:"metro",
//   }

// ];

// for (o = 0 ; o < laptops.length; o++){
//   console.log(laptops[o].marca)
//   console.log(laptops[o].vende)
// }

// const language = "JavaScript";
// const result = language.substring( 4); //"ava"

// console.log(result)

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new Car("Ford", 2014);
// document.getElementById("demo").innerHTML =
// "My car is " + myCar.age() + " years old.";

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {

    return this._carname;
  }
  set carname(x) {
  
    this._carname = x;
  }
}

let myCar = new Car("Ford");
myCar.carname = "Volvo";
myCar.carname = "AUDI";
document.getElementById("demo").innerHTML = myCar.carname;
