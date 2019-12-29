// javascript document to musica.html
window.onload = function() {
	fmo(); // le pone el texto del 'value' en el innerHTML a cada <option> del <select>
}

function fmo() { // fillMusicOptions
	var s = document.getElementById("s");

	for (var q = 1; q < s.options.length; q++) {
		var nom = s.options[q].value.substring(s.options[q].value.lastIndexOf('/') + 1);
		s.options[q].innerHTML = nom;
	}
}

function p20(cad) {
	var str = "";

	if (typeof(cad) != "string") {
		return "";
	}
	else {
		for (var i = 0; i < cad.length; i++) {
			if (cad[i] + cad[i + 1] + cad[i + 2] == "%20") {
				str += " ";
				i += 2;
			}
			else {
				str += cad[i];
			}
		}
	}

	return str;
}

function setSong(ruta) {
	var reproductor = document.getElementById("reproductor");

	if (reproductor.innerHTML.length > 0)
		reproductor.innerHTML = null;

	reproductor.innerHTML = "<source src=\"" + p20(ruta) + "\" type=\"audio/mp3\" />";
}

function seleccionar() {
	var s = document.getElementById('s');
	var op = s.options[s.selectedIndex].value;
	var contenedor = document.getElementById("contenedor");

	if (op == '0') {
		contenedor.innerHTML = "<audio controls=\"controls\"></audio>";
	}
	else {
		if (contenedor.innerHTML.length > 0)
			contenedor.innerHTML = null;

		contenedor.innerHTML = "<audio id=\"reproductor\" controls=\"controls\"></audio>";
		
		setSong(op);
	}
}