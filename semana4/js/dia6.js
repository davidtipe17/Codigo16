/*  Objetos:
En el mundo real: 
- Un elemento que ocupa un espacio.
-Tienen atributos claramente identificables
-Tienen caracteristicas (atributos / funcionales).
- Tiene un estado o un comportamiento.

---> Estado: El conjunto de atributos.
---> Comportamiento: el conjunto de funciones.


ejemplos: 
- carro
    estado (marca, motor, color, año, ancho, largo, modelo)
    comportamiento (encender, avanzar, girar, frenar, abri_puertas)

-persona
    estado (altura, peso, color, edad, religión, iq, ojos_cantidad , manos, manos_cantidad)
     - mano_tamano
     - mano_cantidad
     -mano:
        estado (dedos_cantidad, color, tamano)
        comportamiento (agarrar, golpear, puno, dibujar)
-laptop
-casa

- pensamiento: ??
A nivel de información.
- carro
-persona
- sentimiento
    estado (origen, animo, intensidad, )
    comportamiento (reaccion, destruir, decidir, estadodeanimo)
-pensamiento


- abstracción: capacidad mental para indenfiticar aqueññps atributos y funcionales 
de un objeto



##POO: Programación orientada a objetos
- Clases
- Propiedad (atributos)
-Metodos (funciones)
    - Contructor
    -Methods
    - get / set
    - static
- herencia
- polimorfismo
- encapsulamiento

Crear objetos {
    definir y dar valor a sus atributos /
    programar metodos que arrojen resultados. 
}

blueprint() en españ es plano o molde)

que se necesita
1. crear la clase (crear el mode el pano o el blueprint).
2. Definir sus atributos (propiedades);
3. Definir sus metodos (funciones).
con los 3 pasos anteriores creamos un clase con 

4. metodo constructor().
--
5. Instanciar al objeto (new).
    5.1.darle valdor a sus atributos  
6. Utilizar al objeto a través de sus metodos. 


ejemplo 

a aprtir de la class carro puedo crear:
- carro rojo / velocidad_maxima = 200;/ vivió desde hoy / murio 2024
- carro azul / velocidad_maxima = 50 / vivió desde hoy /--
- carro verde / velocidad_maxima= 80 /
*/

const div_container = document.getElementById("container");

class Carro {
  constructor(_color, _velocidad) {
    //
    this.setColor(_color);
    this.setVelocidad(_velocidad);
  }
  presentacion() {
    const texto = `Hola soy un carro de color ${this.color} y tengo una velocidad de: ${this.velocidad}kmh`;
    return texto;
  }

  setColor(_nuevocolor) {
    this.color = String(_nuevocolor).toLowerCase();
  }

  setVelocidad(_nuevavelocidad){
    this.velocidad = String(_nuevavelocidad).toLowerCase();
  }
  //camecase: palabraunopalabrados //metodo setter y getter se recomienda esta semantica
  //traincase:palabrauni-palabra2
  //snake_Case: palabrauno_palabra2
}

// class Auto {
//   constructor(_color, _velocidad) {

//     this.color = _color;
//     this.velocidad = _velocidad;
//   }
//   presentacion() {
//     const texto = `Hola soy un AUTO de color ${this.color} y tengo una velocidad de: ${this.velocidad}kmh`;
//     return texto;
//   }

// }

const carro_rojo = new Carro("ROJO", 100); //instanciar objeto
const carro_azul = new Carro("AZUL", 400); //dar vida al objeto
const carro_verde = new Carro("VERDE", 100); //crear el objeto

carro_rojo.setColor('AZUL_MARINO')

div_container.innerHTML += "<p>" + carro_rojo.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_azul.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_verde.presentacion() + "</p>";
