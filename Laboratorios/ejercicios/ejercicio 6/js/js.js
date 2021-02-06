var global = 100;

function uno() {
	var local_uno = 1;
	alert("Global " + global + " Local " + local_uno);
	dos();
}

function dos() {
	var local_dos = 2;
	alert("Global " + global + " Local " + local_dos);
}
