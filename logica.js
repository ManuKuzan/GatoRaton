let celdas = document.getElementsByClassName("celda");
let listaJ1=document.getElementById("contaJ1")
let listaJ2=document.getElementById("contaJ2")
let EtiquetaMulti=document.getElementById("Multijugador")
var juego = "Solo";
var player1 = "Player1";
var player2 = "Player2";
var turnoJugador = player1;
var ganador = "";
var win=0;
var lose=0;


EtiquetaMulti.addEventListener("click",cambiaMulti);
function cambiaMulti(){
if(juego=="Multijugador"){
  juego="Solo";
EtiquetaMulti.textContent=juego;
}else{
  juego="Multijugador";
  EtiquetaMulti.textContent=juego;
}

}

for (let i = 0; i < celdas.length; i++) {
  var saveButton = celdas[i];
  saveButton.addEventListener("click", marcaCelda);
}

function marcaCelda(evento) {
  if (juego == "Solo") {
    if(ganador==""&& evento.target.textContent.startsWith("-")){

    
    var etiquetaImg = document.createElement("img");
    etiquetaImg.classList.add("imgGif");
   
    turnoJugador = player2;
    evento.target.classList.add("jugador1Css");
    evento.target.textContent = "";
    etiquetaImg.setAttribute("src", "img/soldado.gif");


    evento.target.appendChild(etiquetaImg);

    evento.target.style.pointerEvents="none"

    gane("jugador1Css")
if(ganador==""){
    TurnoComputadora();
}
    gane("jugador2Css");
    verificarEmpate();
  }
    //  comienza multijugador
  } else if (juego == "Multijugador") 
    if(ganador==""&& evento.target.textContent.startsWith("-")){
{
    
    var etiquetaImg = document.createElement("img");
    etiquetaImg.classList.add("imgGif");

    evento.target.textContent = "";

    if (turnoJugador == player1) {
      evento.target.classList.add("jugador1Css");
      gane("jugador1Css");
      turnoJugador = player2;
      etiquetaImg.setAttribute("src", "img/soldado.gif");
    } else {
      evento.target.classList.add("jugador2Css");
      gane("jugador2Css");
      turnoJugador = player1;
      etiquetaImg.setAttribute("src", "img/megaman1.gif");
    }
    verificarEmpate();
evento.target.appendChild(etiquetaImg);
   
  }
}}
function TurnoComputadora() {
  var listaDisponibe = [];
  for (let index = 0; index < celdas.length; index++) {
    var element = celdas[index];
    if (element.textContent.startsWith("-")) {
      listaDisponibe.push(element);
    }
  }if(listaDisponibe.length==0){

return;
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
  puesto1.style.pointerEvents="none"
}


function verificarEmpate() {
  // Comprueba si todas las celdas están ocupadas
  const todasOcupadas = [...celdas].every((celda) => {
    return celda.classList.contains("jugador1Css") || celda.classList.contains("jugador2Css");
  });


  if (todasOcupadas && ganador === "") {
    Swal.fire({
      title: '¡Empate!',
      text: 'Intenta jugar otra vez',
      imageUrl: 'https://pa1.aminoapps.com/6281/25e6bb72a1302bfe02f162b0528322acc7e0d078_hq.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    
  }
}
function gane(playerOne) {

   var combinacion1=
      celdas[3].classList.contains(playerOne) &&
      celdas[4].classList.contains(playerOne) &&
      celdas[5].classList.contains(playerOne);
  
  
   var combinacion2=

      celdas[0].classList.contains(playerOne) &&
      celdas[1].classList.contains(playerOne) &&
      celdas[2].classList.contains(playerOne);
  
    var combinacion3=

      celdas[6].classList.contains(playerOne) &&
      celdas[7].classList.contains(playerOne) &&
      celdas[8].classList.contains(playerOne);
 
 var combinacion4=

      celdas[0].classList.contains(playerOne) &&
      celdas[3].classList.contains(playerOne) &&
      celdas[6].classList.contains(playerOne);
  
      var combinacion5=

      celdas[1].classList.contains(playerOne)&&
      celdas[4].classList.contains(playerOne) &&
      celdas[7].classList.contains(playerOne);
 var combinacion6=

      celdas[2].classList.contains(playerOne) &&
      celdas[5].classList.contains(playerOne) &&
      celdas[8].classList.contains(playerOne);
   var combinacion7=

      celdas[0].classList.contains(playerOne)&&
      celdas[4].classList.contains(playerOne) &&
      celdas[8].classList.contains(playerOne);
    var combinacion8=
      celdas[2].classList.contains(playerOne)&&
      celdas[4].classList.contains(playerOne)&&
      celdas[6].classList.contains(playerOne);
    
  if(combinacion1||combinacion2||combinacion3||combinacion4||combinacion5||combinacion6||combinacion7||combinacion8){
    var jugadorQueGano=playerOne=="jugador1Css"?"jugador1":"jugador2";
    if(playerOne=="jugador1Css"){
      win++;
      listaJ1.textContent=win;
    }else{
      lose++;
      console.log("hola",lose)
      listaJ2.textContent=lose;
    }
    
    Swal.fire({
      title: 'Felicidades '+ jugadorQueGano,
      text: '¡Ganaste!',
      imageUrl: 'https://www.icegif.com/wp-content/uploads/2022/04/icegif-1377.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    }) 
      ganador=jugadorQueGano;
      }
     
}
function reset(){
  for (let i = 0; i < celdas.length; i++) {
    var saveButton = celdas[i];
    saveButton.innerHTML="";
    saveButton.textContent="-"
    saveButton.classList.remove("jugador1Css");
    saveButton.classList.remove("jugador2Css");
   saveButton.style.pointerEvents="auto"
  }
  turnoJugador = player1;

  ganador=""
  console.log(celdas)
}
document.getElementById("BotonRest")
.addEventListener("click",reset);