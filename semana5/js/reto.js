const zapatos = [
    {
      marca: "Lenovo",
      imagen:
        "https://static.zara.net/photos///2021/I/1/1/p/3425/810/202/2/w/270/3425810202_6_1_1.jpg?ts=1629292349355",
      nombre: "DEPORTIVO SUELA GRUESA",
      vendedor: "Falabella",
      PEN: 219,
      Oferta: "-40% PEN 129,00",
      calificacion: 2,
     
    },
    {
      marca: "Acer",
      imagen:
        "https://static.zara.net/photos///2022/W/1/1/p/5333/910/002/2/w/270/5333910002_6_1_1.jpg?ts=1643129767496",
      nombre: "ZAPATILLAS DEPORTIVAS BAMBA CANVAS",
      vendedor: "Falabella",
      PEN: 219,
      Oferta: "-40% PEN 129,00",
      calificacion: 5,
   
    },
    {
      marca: "HP",
      imagen:
        "https://static.zara.net/photos///2021/I/1/1/p/5002/810/002/2/w/270/5002810002_6_1_1.jpg?ts=1630510481040",
      nombre: "ZAPATILLAS DEPORTIVAS SUELA GRUESA",
      vendedor: "Falabella",
      PEN: 219,
      Oferta: "-40% PEN 129,00",
      calificacion: 5,
   
    },
    {
      marca: "apple",
      imagen:
        "https://static.zara.net/photos///2022/V/1/1/p/1125/910/102/2/w/270/1125910102_6_1_1.jpg?ts=1642501443628",
      nombre: "OTÍN SERRAJE SOFT",
      vendedor: "Falabella",
      PEN: 219,
      Oferta: "-40% PEN 129,00",
      calificacion: 5,

    }, 
  ];

  const container = document.querySelector(".container");

  //quiero agregar un elemento al container
  
  zapatos.map((zapato) => {
      // ahora en esta seccion vamos a crear los card
      // Esto es JS se llama template string => ``
      // Sirve para poder tener texto y variable juntos
      // return `La laptop se llama ${laptop.nombre} y el precio es ${laptop.precioOferta}`;
      container.innerHTML += `
      <div class="card">
          
            <div class="container-photo">
            <img
                src=${zapato.imagen}
                alt=""
            />
            </div>
            <div class="seccion2">
            <h4 class="title">${zapato.nombre}</h4>
            <div class="container-price">
              <p class="price">Precio: S/ ${zapato.PEN}</p>
            </div>
            <div class="container-price"> 
              <p class="sale-price">Oferta: S/ ${zapato.Oferta}</p>
            </div>
            <button class="btn-buy">BUY</button>
            </div>
      </div>
       `;
    });
  