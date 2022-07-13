const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "fries",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizaa",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  //fries 2
  {
    name: "fries",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizaa",
    img: "images/pizza.png",
  },
];

//Barajamos las cartas aleatoriamente.
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
//llega a consola
console.log(gridDisplay);

let cardsChosen = [];
let cardsChosenId = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
    // console.log(card, i)
  }
}
createBoard();

function checkForMatch() {
  console.log("check for match");
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("Math!");
  } else {
    alert("No ----- > Math!");
  }
  cardsChosen = [];
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  this.setAttribute("src", cardArray[cardId].img);
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);

  // console.log('CLICKED',cardArray[cardId].name );
if(cardsChosen.length ===2){
setTimeout(checkForMatch , 500)
}

}
