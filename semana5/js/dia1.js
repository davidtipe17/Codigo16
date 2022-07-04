const users = [
  //obejto 1
  {
    //name es clave y "david" es valor
    name: "David",
    lastname: "Tipe",
    phonNumber: "923258393",
    address: "Calle Ate-Vitarte",
    isDeveloper: true,
    age: 26,
  },

  //obejto2
  {
    name: "Antonio",
    lastname: "Palomino",
    phonNumber: "923258393",
    address: "Calle Ate-Vitarte",
    isDeveloper: true,
    age: 25,
  },
];
// console.log(users[0].name)
//conjunto de elementos = array

// iterar un arreglo

for (let user in users) {
  console.log(users[user]);
}
console.log("===============");

for (const user of users) {
  console.log(user.name);
}



//DOM

const vh1 = document.querySelector("h1");
//podremos cambiar el title desde java scritp? = SEP

//!Inner HTML  = se USA PARA ESCRIBIR ETIQUETAS
//!InnerText = Para poder escribir dentro de las etiquetas

//Cambiar una etiqueta h1 en este caso que esta dentro del DOM
vh1.innerText = "Cambiando el valor del H1 desde JS"
console.log(vh1);

document.title = "lo hicimos en JS";
//tagname = El nombre de la etiqueta
//ejm
//<h1> </j1> = h1
//<div> <div> = div


//SEPAN QUE TAMBIEN PODEMOS MODIFICAR EL CSS
//la forma en al cual podemos modificar los estilos
// de nuestro pagina es usando style

//! Nota: las propiedad son las mismas que css sin embargo no usan guiones
//! En js se usa camellcase
document.body.style.backgroundColor ="#c3c3c3";
document.body.style.fontFamily = "Helvetica";

//* Lo recomendable no es usas CSS dentro de JS porque no
//* es lo nativo para estilos
//cambiando el color 
vh1.style.color = "blue";

//! NOTA SUPER IMPORTANTE: EN JS TODO ES UN OBEJTO
