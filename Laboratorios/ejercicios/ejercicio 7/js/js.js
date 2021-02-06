function espe() {
	var tipo = document.getElementById("especie");
	console.log(tipo.value)
	switch (tipo.value) {
		case "Humano":
			alert("Eres Humano")
			break;
		case "Planta":
			alert("Eres del reino Vegetal")
			break;
		case "Animal":
			alert("Eres del reino Animal")
			break;
		default:
			break;
	}

}
	
