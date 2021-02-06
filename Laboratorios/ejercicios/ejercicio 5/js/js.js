function muestra() {
	var nombre = document.getElementById("idn").value;
	alert("Eres " + nombre);
	document.getElementById("idn").value = "";
	document.getElementById("idn").focus();


}