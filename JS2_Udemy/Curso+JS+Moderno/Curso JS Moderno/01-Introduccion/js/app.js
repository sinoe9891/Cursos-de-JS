// alert("Hola Mundo");
// variable = "Hola";
// console.log(variable + " Mundo");

const nombre = prompt('Cual es tu nombre?');
const apellido = prompt('Cual es tu apellido?');

//Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido1').innerHTML =  nombre + ' está aprendiendo JS Moderno';

//Muestra en consola el nombre
console.log(nombre);
console.log(nombre  + ' ' + apellido);


//Comentar Código
//Qué hace mi código
/*
const nombre = prompt('Cual es tu nombre?');
const apellido = prompt('Cual es tu apellido?');
document.querySelector('.contenido1').innerHTML =  nombre + ' está aprendiendo JS Moderno';
console.log(nombre);
console.log(nombre  + ' ' + apellido);
*/