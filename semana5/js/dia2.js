const products = [
    {
      name: "Laptop HP",
      price: 1300,
      brand: "HP",
    },
    {
      name: "Laptop Gamer",
      price: 2100,
      brand: "Lenovo",
    },
    {
      name: "Laptop Super Poderosa",
      price: 5300,
      brand: "Alien Ware",
    },
    {
      name: "Laptop/Tablet",
      price: 2400,
      brand: "ASUS",
    },
  ];

//Buenas practicas 
// el objeto en plurar y lo demas en singula
// users.forEach(user)
// movies.forEach(movie)

// products.forEach((product, index) => {});

// * forEach

const productsIterForEach = products.forEach((product) => {
    // Recurden que product es cada elemento de mi array
    // console.log(product.name);
    return product.price - 100;

  });

  
  //* map
  // queremos agregar un nuevo campo al array de objetos
  // ese campo se llamara descuente que sera el precio - 100 soles
  
  // En este caso estamos calculado el campo discount y lo estamos
  // guardando en productsIterMap
  
  // Los valores que esta capturando nuestro map los esta guardando en
  // la varable productsIterMap y esto sera un arreglo de los
  // resultados
  const productsIterMap = products.map((product) => {
    // 1200
    // 2000
    // 5200
    // 2300
    return product.price - 100;
  });
  
  // Resument: Siempre el map retorna un array de elementos
  
  console.log("forEach", productsIterForEach);
  console.log("map", productsIterMap);
  // Cuando decimos que forEach no retorna nada quiere decir que no se
  // puede guardar dentro de una variable

  const edades = [23,25, 34, 56, 7, 30];

//Esto es conocido com un arrow function inline 
  // En el arrow function inline el return esta implicito

  const edadesAlCuadrado = edades.map((edad) => Math.pow(edad , 2));
  console.log(edadesAlCuadrado);

  //Reto 

  //creen un array de edades y usando for o foreach
  //hagan que una variable guarde el cuadrado de las edades. 

  const nuevasEdades = [];

  edades.forEach((edad) => nuevasEdades.push(Math.pow(edad, 2)));
  console.log ("nuevasEdades", nuevasEdades);



  const clothes = [
    {
      brand: "Mango",
      type: "Shirt",
      price: 200,
      store: "Falabella",
      rating: 4.3,
      features: {
        color: "green",
        size: "small",
      },
    },
    {
      brand: "Zara",
      type: "Pants",
      price: 300,
      store: "Zara",
      rating: 3.9,
      features: {
        color: "black",
        size: 32,
      },
    },
    {
      brand: "Tommy",
      type: "T-shirt",
      price: 120,
      store: "Tommy",
      rating: 4.3,
      features: {
        color: "blue",
        size: "M",
      },
    },
  ];

 // Filter: Es el hermano de map
// porque filter tambien retorna un array de elementos
// sin embargo filter sirve para poder crear filtro en base a un condicion

// queremos solo los productos que tenga como precio > 100
// Si el elemento es > 100 entonces guardalo en la variable filtro

// Filtro de precio
//!filter con return presente
// const filtro = clothes.filter((clothe) => {
//   return clothe.price > 150
//   });
//! funcion filter en inline en return tacito.
const filtro = clothes.filter((clothe => clothe.price > 150))

// por ende filtro sera un array con 2 elementos

console.log("filtro 1", filtro);

// Filtro de 2 condiciones
// Pedimos que el precio sea > 150 y rating > 4
const filtro2 = clothes.filter(
  (clothe) => clothe.price > 150 && clothe.rating > 4
);
// cuantos elementos retorna el filtro 2?
console.log("filtro 2", filtro2);

// vamos a buscar en el array de objetos las prendas que contengan la palabra shirt
// En la condicion clothe.type.includes("shirt")
// quiero que en el string clothe.type busques si "shirt" existe
// un truco para evitarnos el tema del las mayusculas o minusculas
// es convertir el texo a mayusulas o minusculas
// T-shirt => t-shirt
// pants => pants
// Shirt => shirt

// includes basicamente sirve para buscar algo en un texto
// ejempo
const frase = "HolameLlamocarlos";
// Basicamente include recibe un paramtro string y lo busca en el texto
// si lo encuentro retorna true si no lo hace retorana false
//HolameLlamocarlos => holamellamocarlos
console.log("filtroprimero",frase.toLowerCase().includes("llamo"));


const filtroArray = clothes.filter((clothe) => clothe.type.toLowerCase().includes("shirt") && clothe.price === 120);

console.log("filtrohechopormi",filtroArray);
// const filtroShirt = clothes.filter((clothe) => clothe.type.toLowerCase().includes("shirt")
// );
// console.log("filtroShirt", filtroShirt);

//! FIND
const numbers = [10, 20, 30, 40, 50, 60, 70];
const numerosMayores = numbers.filter((number, index) => number > 30);
console.log(numerosMayores);

// Solo retorna un elemento, es decir no da una busqueda de solamente 1 elemento
// ojo: Find no retorna un array el solo retorna 1 elemento
// el elemnto que retorne find sera el primero que encuentre
// por ende como en la condicion dice > 30
// va a buscar al numero mayor a este y al primero que encuentro lo va a retorn ar
const numeroMayoresFind = numbers.find((number) => number > 30);
console.log("numeroMayoresFind", numeroMayoresFind);

// Ejmplo2
const cars = [
  {
    model: "GLA 200",
    price: 34000,
    brand: "Mercedez",
  },
  {
    model: "A 200",
    price: 14000,
    brand: "Mercedez",
  },
  {
    model: "X6",
    price: 34000,
    brand: "BMW", 
  },
];
// Queremos el primero elemento de lista que sea de la marca mercedez

const filtroMercedez = cars.find((car) => car.brand === "Mercedez");
console.log("filtroMercedez: ", filtroMercedez.model);

// Find tiene un hermanito llamado findIndex
// El es lo mismo que find sin embar lo que retorna es el indice
const filtroIndice = cars.findIndex((car) => car.brand === "Mercedez");
const filtroBMW = cars.findIndex((car) => car.brand === "BMW");
console.log("filtroIndice", filtroIndice);
console.log("filtoBMW", filtroBMW);