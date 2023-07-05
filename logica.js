var listaPosiciones = ["", "", "", "", "", "", "", "", ""];

let celdas = document.getElementsByClassName("celda");

var juego = "single";
var player1 = "Player1";
var player2 = "Player2";
var turnoJugador = player1;
const marcaPlayer1 = "X";
const marcaPlayer2 = "O";
var ganador = "";
// var turno=1;
// var turno=2;
var button = 0;
var button2 = 1;

var posiblesGanadores = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], //filas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columnas
  [0, 4, 8],
  [2, 4, 6], //diagonales
];

//0 1 2
//3 4 5
//6 7 8

for (let i = 0; i < celdas.length; i++) {
  var saveButton = celdas[i];
  saveButton.addEventListener("click", marcaCelda);
}

function marcaCelda(evento) {
  if (juego == "single") {
    var etiquetaImg = document.createElement("img");
    etiquetaImg.classList.add("imgGif");
    // etiquetaImg.id="imagenX"

    turnoJugador = player2;
    evento.target.classList.add("jugador1Css");
    evento.target.textContent = "";
    etiquetaImg.setAttribute("src", "img/soldado.gif");
    evento.target.appendChild(etiquetaImg);

    // gane()

    TurnoComputadora();

    gane();
    
    //  vericadorGanador();
  } else {
    var etiquetaImg = document.createElement("img");
    etiquetaImg.classList.add("imgGif");

    evento.target.textContent = "";

    if (turnoJugador == player1) {
      evento.target.classList.add("jugador1Css");
      turnoJugador = player2;
      etiquetaImg.setAttribute("src", "img/soldado.gif");
    } else {
      evento.target.classList.add("jugador2Css");
      turnoJugador = player1;
      etiquetaImg.setAttribute("src", "img/megaman1.gif");
    }

    // vericadorGanador();
  }
}
function TurnoComputadora() {
  var listaDisponibe = [];
  for (let index = 0; index < celdas.length; index++) {
    var element = celdas[index];
    if (element.textContent.startsWith("-")) {
      listaDisponibe.push(element);
    }
  }
  let num = Math.floor(Math.random() * listaDisponibe.length);
  let idButton = listaDisponibe[num].id;
  console.log(idButton);
  var puesto1 = document.getElementById(idButton);
  puesto1.classList.add("jugador2Css");
  var etiquetaImg = document.createElement("img");
  etiquetaImg.setAttribute("src", "img/megaman1.gif");
  etiquetaImg.classList.add("imgGif");
  puesto1.textContent = "";
  puesto1.appendChild(etiquetaImg);
}

console.log(celdas[1].textContent);

function gane() {
  if (
    celdas[3].classList.contains("jugador1Css") &&
    celdas[4].classList.contains("jugador1Css") &&
    celdas[5].classList.contains("jugador1Css")
  ) {
    alert("Ganó jugador 1");
   
     
        location.reload()
  } else if (
    celdas[0].classList.contains("jugador1Css") &&
    celdas[1].classList.contains("jugador1Css") &&
    celdas[2].classList.contains("jugador1Css")
  ) {
    alert("Ganó jugador 1");
    location.reload()
  } else if (
    celdas[6].classList.contains("jugador1Css") &&
    celdas[7].classList.contains("jugador1Css") &&
    celdas[8].classList.contains("jugador1Css")
  ) {
    alert("Ganó jugador 1");
    location.reload()
  } else if (
    celdas[0].classList.contains("jugador1Css") &&
    celdas[3].classList.contains("jugador1Css") &&
    celdas[6].classList.contains("jugador1Css")
  ) {
    alert("Ganó jugador 1");
    location.reload()
  } else if (
    celdas[1].classList.contains("jugador1Css") &&
    celdas[4].classList.contains("jugador1Css") &&
    celdas[7].classList.contains("jugador1Css")
  ) {
    alert("Ganó jugador 1");
    location.reload()
  } else if (
    celdas[2].classList.contains("jugador1Css") &&
    celdas[5].classList.contains("jugador1Css") &&
    celdas[8].classList.contains("jugador1Css")
  ) {
    alert("Ganó jugador 1");
    location.reload()
  } else if (
    celdas[0].classList.contains("jugador1Css") &&
    celdas[4].classList.contains("jugador1Css") &&
    celdas[8].classList.contains("jugador1Css")
  ) {
    alert("Ganó jugador 1");
    location.reload()
  } else if (
    celdas[2].classList.contains("jugador1Css") &&
    celdas[4].classList.contains("jugador1Css") &&
    celdas[6].classList.contains("jugador1Css")
  ) {
    alert("Ganó jugador 1");
    location.reload()
    //gane de maquina
  } else if (
    celdas[3].classList.contains("jugador2Css") &&
    celdas[4].classList.contains("jugador2Css") &&
    celdas[5].classList.contains("jugador2Css")
  ) {
    alert("Ganó la maquina");
    location.reload()
  } else if (
    celdas[0].classList.contains("jugador2Css") &&
    celdas[1].classList.contains("jugador2Css") &&
    celdas[2].classList.contains("jugador2Css")
  ) {
    alert("Ganó la maquina");
    location.reload()
  } else if (
    celdas[6].classList.contains("jugador2Css") &&
    celdas[7].classList.contains("jugador2Css") &&
    celdas[8].classList.contains("jugador2Css")
  ) {
    alert("Ganó la maquina");
    location.reload()
  } else if (
    celdas[0].classList.contains("jugador2Css") &&
    celdas[3].classList.contains("jugador2Css") &&
    celdas[6].classList.contains("jugador2Css")
  ) {
    alert("Ganó la maquina");
    location.reload()
  } else if (
    celdas[1].classList.contains("jugador2Css") &&
    celdas[4].classList.contains("jugador2Css") &&
    celdas[7].classList.contains("jugador2Css")
  ) {
    alert("Ganó la maquina");
    location.reload()
  } else if (
    celdas[2].classList.contains("jugador2Css") &&
    celdas[5].classList.contains("jugador2Css") &&
    celdas[8].classList.contains("jugador2Css")
  ) {
    alert("Ganó la maquina");
    location.reload()
  } else if (
    celdas[0].classList.contains("jugador2Css") &&
    celdas[4].classList.contains("jugador2Css") &&
    celdas[8].classList.contains("jugador2Css")
  ) {
    alert("Ganó la maquina");
    location.reload()
  } else if (
    celdas[2].classList.contains("jugador2Css") &&
    celdas[4].classList.contains("jugador2Css") &&
    celdas[6].classList.contains("jugador2Css")
  ) {
    alert("Ganó la maquina");
    location.reload()
  }
}
//  }else{
//     alert("Empate");
//}

// vericadorGanador(player1){
//     var ganadorFila1=
//     celdas[0].classList.contains()&&
//     celdas[1].classList.contains()&&
//     celdas[2].classList.contains();
//     var ganadorFila2=
//     celdas[0].classList.contains()&&
//     celdas[1].classList.contains()&&
//     celdas[2].classList.contains();
//     var ganadorFila3=
//     celdas[0].classList.contains()&&
//     celdas[1].classList.contains()&&
//     celdas[2].classList.contains();
// };

// console.log(celdas[2].textContent)

// console.log(etiquetaImg.classList.contains("imgGif"))

// function diagonalB() {

// alert("has ganado en la diagonal")

//     }else{
//         console.log("no has ganado")
//     }

// }
