console.log("Hola");

// Variables

var num = 23;
var activo = true;

//Funciones

function mensaje() {
	var saludo = "Hola"
	var antisaludo = "No me hables";
	var contento = false;
	if (contento == true){
		console.log(saludo);
	}else{
		console.log(antisaludo);
	}
}

mensaje();

//LOOPS

//Array

var nombres = ["Danny","Gary","Shirley"];

function mensaje(nombre){
	console.log("Hola " + nombre);
}

nombres.forEach(function(valor){
	mensaje(valor);
});

//Objetos
var coche = {
	marca: "ford",
	motor: "Eléctrico",
	acelerar: function(){
		console.log("brrrrrrrummmmmmm");
	}
};

//Acceso al DOM
var encabezado = document.querySelector("h1");

encabezado.textContent = "Otro texto"

console.log(encabezado);


// Eventos y Listeners
//Events = en un click concreto
//Listener 
function cambiaColor(){
	this.classList.toggle("cambia");
}

document.querySelector("body").addEventListener("click", cambiaColor);