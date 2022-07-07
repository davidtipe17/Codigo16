// // - cuando el username != "" se prende el botón START
// // - cuando le das click al botón START, aparece dentro del h2 el mensaje:

// // Hello username, let's play!

// const usernameText = document.querySelector("#username");
// const startButton = document.querySelector("#start");
// const h2Text = document.querySelector("#h2-text");

// const div_game = document.querySelector("#game");

// //una forma con addventListener

// usernameText.addEventListener("keyup", function () {
//   startButton.disabled = this.value == "";
// });

// //!PRIMERA MANERA (1)
// // usernameText.onkeyup = function () {

// //   startButton.disabled = (this.value !=="") ?false : true
// // //     if (usernameText.value != "") {
// // //     startButton.disabled = false;
// // //   }else {
// // //     startButton.disabled = true;
// // //   }
// // };
// //! PRIMERA MANERA (1)
// // startButton.onclick = function () {
// //   h2Text.innerHTML = `Este es el mensaje: ${usernameText.value},`;
// // };

// //! SEGUNDA MAENRA
// startButton.addEventListener("click", function () {
//   this.parentElement.querySelector(
//     "h2"
//   ).innerText += `Hello ${usernameText.value}, let's play`;
//   this.parentElement.querySelector("h2").style.display = "block";

//   usernameText.disabled = true;
//   this.disabled = true;

//   div_game.style.display = "flex";
// });
// GAME:


// PLAYER:
const input_username = document.querySelector("#username");
const button_start = document.querySelector("#start");
const div_game = document.querySelector("#game");

input_username.addEventListener("keyup", function () {
  button_start.disabled = this.value == "";
});

button_start.addEventListener("click", function () {
  this.parentElement.querySelector(
    "h2"
  ).innerText += `Hello ${input_username.value}, let's play`;
  this.parentElement.querySelector("h2").style.display = "block";


  //vamos a guardar el nombre del usuaruo en localstorage
  //para usar esto hacemos lo siguiente.
  input_username.disabled = true;
  this.disabled = true;

  div_game.style.display = "flex";
});

// GAME:
const pi_decimals =
  "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";

let position = 0;
let attempts = 0;
let success_attempts = 0;
let failed_attempts = 0;
let score = 0;
// variables de tiempo
let last_attempt = null;

const container_modal = document.querySelector(".container-modal");
const lost_container = document.querySelector(".lost-container");
const container = document.querySelector("#container");

const input_pi = document.querySelector("#user_pi");
const result_pi = document.querySelector("#result_pi");

const h3_attempts = document.querySelector("#h3_attempts");
const h3_success_attempts = document.querySelector("#h3_success_attempts");
const h3_failed_attempts = document.querySelector("#h3_failed_attempts");
const h3_score = document.querySelector("#h3_score");

// KeyDown -> KeyPress -> input value -> KeyUp
input_pi.addEventListener("keyup", function () {
  this.value = "";
  this.focus();
});

input_pi.addEventListener("keydown", function (evt) {
  const decimal = String.fromCharCode(evt.keyCode);

  // el momento en que pongamos un numero
  let now_attempt = Date.now();

  attempts++;

  // evaluar reglas:
  if (
    decimal == "" ||
    isNaN(decimal) ||
    decimal != pi_decimals.charAt(position)
  ) {
    div_game.style.backgroundColor = "red";
    failed_attempts++;
    showModal(failed_attempts);
  } else {
    // si pasó las reglas:
    // recuerden que la primera vez position es 0
    if (position > 0) {
      calcScore(now_attempt);
      console.log(score);
    }
    div_game.style.backgroundColor = "green";
    result_pi.innerText += decimal;
    position++;
    success_attempts++;
  }

  last_attempt = now_attempt;
  // usar timeout para pintarlo de negro:
  setTimeout(function () {
    div_game.style.backgroundColor = "transparent";
  }, 250);

  // SCORE:
  h3_attempts.querySelector("span").innerText = attempts;
  h3_success_attempts.querySelector("span").innerText = success_attempts;
  h3_failed_attempts.querySelector("span").innerText = failed_attempts;
  h3_score.querySelector("span").innerText = score.toFixed(2);
});

function calcScore(now_attempt) {
  // tenemos cunto timepo en milisegundo nos demoramos
  // en escribir cada numero

  //   if (position > 10) {
  //     const digito = String(position).charAt(0);
  //     score += 10 + Number(digito) - diff_time * 0.01;
  //   } else {
  //     score += 10 - diff_time * 0.01;
  //   }
  const diff_time = (now_attempt - last_attempt) * 0.01;

  const attempt_score =
    position > 10
      ? 10 + Number(String(position).charAt(0)) - diff_time
      : 10 - diff_time;

  score += Math.max(attempt_score, -1);
  // el puntaje sera
  // los primeros 0 - 10 aciertos seran
  // score = 10 + 0 - (diff_time * 0.01)
  // cuando lleguemos a 11 - 19
  // score = 10 + 1 - (diff_time * 0.01)
  // cuando lleguemos a 20 - 29
  // score = 10 + 2 - (diff_time * 0.01)
  // cuando lleguemos a 30 - 39
  // score = 10 + 3 - (diff_time * 0.01)
}
const h3_score_finish = document.querySelector("#h3_score_finish");
const btn_reiniciar = document.querySelector("#btn-reiniciar");

function showModal(failed_attempts) {
  if (failed_attempts === 10) {
    // activamos los estilos
    container_modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    lost_container.style.display = "block";
    container.style.zIndex = -1;
    input_pi.disabled = true;
    h3_score_finish.querySelector("span").innerText = score.toFixed(2);
  }
}


btn_reiniciar.onclick = () => window.location.reload();