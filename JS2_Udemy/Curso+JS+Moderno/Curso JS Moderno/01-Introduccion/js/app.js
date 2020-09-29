// alert("Hola Mundo");
// variable = "Hola";
// console.log(variable + " Mundo");

const nombre = prompt('Cual es tu nombre?');
const apellido = prompt('Cual es tu apellido?');

//Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido1').innerHTML = nombre + ' está aprendiendo JS Moderno';

// Interpolación de texto
var nombres = nombre + " " +  apellido;
console.log(`¡Hola ${nombres}!`);


console.log(nombre);
//Muestra en consola el nombre en mayuscula y minuscula
console.log(nombre.toUpperCase() + ' ' + apellido.toLowerCase());
//Saber el primer carcater del nombre ingresado
console.log(nombre.charAt(0));
var str = nombre.charAt(1) + nombre.charAt(2);
console.log(str);
var str = nombre.substr(1, 2);
console.log(str);

//Saber cuantos caracteres tienen un string
console.log(nombre.length);
//Timpo de carga Inicio y Final
console.time('Hola');
console.timeEnd('Hola');
//Consideraciones en JS
console.log('Hola');
//Se puede poner sin punto y coma
//Funcion
function hola() {
	console.log('ok');
}
hola();

//EsLint
//npm i -g eslint
//creamos el archivo .eslintrc.json
// {
// 	"parserOptions": {
// 		"ecmaVersion": 6
// 	},
// 	"rules": {
// 		"semi": ["error", "always"]
// 	}
// }
//Ejecutamos
//eslint js/app.js 
//Forzamos solución con:
//eslint js/app.js --fix


//Comentar Código
//Qué hace mi código
/*
const nombre = prompt('Cual es tu nombre?');
const apellido = prompt('Cual es tu apellido?');
document.querySelector('.contenido1').innerHTML =  nombre + ' está aprendiendo JS Moderno';
console.log(nombre);
console.log(nombre  + ' ' + apellido);
*/