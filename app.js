// const hora = new Date().getHours();

// let saludo;

// if(hora < 10){
//     console.log("Buenos días!");
// } else if(hora < 20){
//     console.log("Buenas tardes")
// } else{
//     console.log("Buenas noches")
// }

// console.log(hora);


const coleccion = ["Civil war", "Watchmen", "Sandman", "Scott Pilgrim", "Barman: Arkham"];

let comic = "";

for(let i = 0; i<coleccion.length; i++){
    comic = comic + coleccion[i] + "<br />"; 
}

document.getElementById("contenedor").innerHTML = comic;

console.log(comic);


function miInfo (){

let nombre = prompt("Cuál es tu nombre?");
let edad = prompt("Cuál es tu edad");
let signo = prompt("Cuál es tu signo?");
let estado = prompt("Cuál es estado de residencia?");
let informacionCompleta = "Hola mi nombre es " + nombre + " mi edad es " + edad + " mi signo es " + signo + " y vivo en " + estado;

document.getElementById("informacion").innerHTML = informacionCompleta;


}

miInfo();

