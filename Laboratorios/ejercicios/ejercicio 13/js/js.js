var estado = true;

function ver() {
	estado = !estado;
	console.log(estado);

	if (estado == true)
		TEXTO1.style.visibility = "visible";
	else
		TEXTO1.style.visibility = "hidden";

	setTimeout("ver()", 500);
}

setTimeout("ver()", 500);