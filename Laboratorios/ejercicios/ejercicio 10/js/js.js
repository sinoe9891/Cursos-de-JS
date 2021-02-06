function salida() {
	var cont = 1;
	var paso = 1;
	var res;

	for (cont = 1; cont <= 100; cont++) {
		alert("Paso " + cont);
		if (paso == 10) {
			paso = 0;
			res = confirm("¿Desea Seguir?");
			if (res == false)
				break;
		}
		paso++;
	}
}