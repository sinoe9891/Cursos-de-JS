var v1;

function abre() {
	v1 = window.open("http://www.google.com", "v", "status=yes resizable=yes");
	v1.status = "Ventana creada para publicidad";
	status = "Ventana Estandar del Navegador";
}

function cierra() {
	v1.close();
}
