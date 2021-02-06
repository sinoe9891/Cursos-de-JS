function ver() {
	var edad = document.getElementById("edad");

	if (edad.value <= 18)
		alert("Abono Joven");
	else {
		if (edad.value >= 65)
			alert("Abono 3ª Edad");
		else
			alert("Abono normal");
	}
}
