function fondo(colores) {
	document.bgColor = colores;
}

function texto(colores) {
	document.fgColor = colores;
}


var obj_fecha = new Date();
var completo = obj_fecha.toGMTString();

var hora = obj_fecha.getHours();
var minuto = obj_fecha.getMinutes();
var segundo = obj_fecha.getSeconds();
var dia = obj_fecha.getDate();
var mes = obj_fecha.getMonth() + 1;
var anis = obj_fecha.getYear();

document.write("<br><br>" + hora + ":" + minuto + ":" + segundo + "<br>");
document.write(dia + "/" + mes + "/" + anis + "<br>");
document.write(completo + "<br>");


var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Buenas Noches!';
} else if (hourNow > 12) {
	greeting = 'Buenas tardes!';
} else if (hourNow > 0) {
	greeting = 'Buenos días!';
} else {
	greeting = 'Bienvenido!';
}

document.write('<h3>' + greeting + '</h3>');