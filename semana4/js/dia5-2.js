//En las funciones existen parametros con valores predefinidos
function restar(numero1 = 2, numero2 = 5) {

  console.log(numero1);
  console.log(numero2);

  return numero1 - numero2;
}
//cuando llamamos a la funcion restar es obligatorio pasar los 2 parametros?= si
//Existe una forma en la cual podemos decir
//que un paramentro tiene un valor por defecto

//Em el caso que a al funcion restar solo le pasen el numero1 esta de forma
//automatica asumira que numero2 vale 5

console.log("Restar", restar(6)); // aqui sale 1 porque recordemos
// que como no le estamos pasando el 2do paramentro este asume que vale 5
console.log("Restar2", restar(4, 8)); // -4
console.log("Restar3", restar()); // -3 porque asume numero1 =2 , numero2=5
console.log("Restar4", restar(4, 4));

//!FUNCION ANONIMAS

//multplicar es variable
//a mivel de JS esto no es el nombre de la funcion
//es considerado una varibale que guarda una funcion
//aca estamos demostrando que una variable en JS puede
//almacenar una funcion

//! Nota el funcionamiento es igual
//! Lo que cambia la forma en al cual se escribe
//! ademas cuando usamos funciones aninomias no tenemos acceso a this.

//! this es una forma en la cual podemos acceder a variables usando clases

const multiplicar = function (n1, n2) {
  return n1 * n2;
};
multiplicar(5, 6);

//* Lo que se utiliza actualmente son los arroy funcion
//* ==>funciones flechas
//* En el caso de la funciones flecha no hace falta escribir la palabra function esta implicita
//* Un arrow funcion es considerado una funcion anonima por ende tampos
//* tiene acceso a this.
// const dividir = (n1, n2) => {
//  return n1 / n2;

// };


const dividir = (n1, n2) => {

  // esto es ternario
  return validarSiEsNumero(n1) || validarSiEsNumero(n2) // si esto es tru entonces (?) entonces  ? "Error, numero no valido" sino (:) n1 / n2;
  ? "Error, numero no valido": n1 / n2;

};

//* Esto no exclye a que podamos cambiar funciones
// recordemos que isnan retornar un boleano por esta
//funcion retorna true o false.
function validarSiEsNumero (numero){
    return isNaN(numero)
}
// De forma global vamos acrear un array de alumnos
const alumnos = [];
// alumnos = ["Juan", "Pepe"]

const imprimirAlumnos = () => {
  const inputNombre = document.querySelector("#input_nombre");
  const nombre = inputNombre.value;
  // Estamos agregando el alumnos al array
  alumnos.push(nombre);
  // Estamos indicando el value del input es igual cuando hacemos estos
  // estamos limpiado el contenido del input
  inputNombre.value = "";
  const resultado = document.querySelector(".resultado");

  // Siempre debemos limpiar el espacio del resultado antes del for
  resultado.innerHTML = "";

  for (let alumno of alumnos) {
    // += es adicion es una suma la
    //  resultado.innerHTML = resultado.innerHTML + "<p>" + alumno + "</p>";
    // Indica que al contenido anterior le agremos esto si yo no uso el +=
    // va a reemplazar el contenido
    resultado.innerHTML += "<p>" + alumno + "</p>";
  }
};

const imprimirPromedio = () => {

  const nota1 = Number(document.querySelector("#inputnota1").value);
  const nota2 = Number(document.querySelector("#inputnota2").value);
  const nota3 = Number(document.querySelector("#inputnota3").value);
  const nota4 = Number(document.querySelector("#inputnota4").value);
  const resultado2 = document.querySelector(".resul");

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    alert("Ingrese numeros validos");
    return;
  }

  if (nota1 > 20) {
    alert("La nota 1 no debe ser mayor a 20");
    return;
  }

  if (nota2 > 20) {
    alert("La nota 2 no debe ser mayor a 20");
    return;
  }

  if (nota3 > 20) {
    alert("La nota 3 no debe ser mayor a 20");
    return;
  }

  if (nota4 > 20) {
    alert("La nota 4 no debe ser mayor a 20");
    return;
  }

  const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
  resultado2.innerHTML = "<p>El pomedio es: " + promedio + "</p>";

};
