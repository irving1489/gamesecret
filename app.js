
//variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSoreados = [];
let numeroMaximo = 30;
//funciones establecidas para el proyecto
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
}


function verificarIntento (){
   let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

   if(numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento("p",`acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
      document.getElementById("reiniciar").removeAttribute("disabled");
   }else{
      //el usuario no acerto
      if(numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento("p" , "El numero secreto es menor");
      }else{
         asignarTextoElemento("p" , "El numero secreto es mayor");
      }
      intentos++;
      cleanBox();
   }
   return;
    
}

function cleanBox() {
  document.querySelector("#valorUsuario").value= "";
   
}

function generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(listaNumerosSoreados);
  //si ya sorteamos todos los numeros
  if (listaNumerosSoreados.length == numeroMaximo){
      asignarTextoElemento("p" , "Ya se sortearon todos los numeros");
} else {
  
   
      //si el numero generado esta en lista
       if (listaNumerosSoreados.includes(numeroGenerado)){
          return generarNumeroSecreto();
       } else {
           listaNumerosSoreados.push(numeroGenerado);
            return numeroGenerado;
         
       }
  
   }  
}
function condicionesIniciales(){
   asignarTextoElemento("h1" , "Juego del numero secreto");
   asignarTextoElemento("p" , `Escoge un numero del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos= 1;
}
function reinciarJuego(){
   //limpiar la caja
   cleanBox();
   //intervalos de numeros
   //generar numero aleatorio
   //numero de intentos
   condicionesIniciales();
   //deshabilitar boton
   document.querySelector("#reiniciar").setAttribute("disabled","true");
  
   return
}
condicionesIniciales();