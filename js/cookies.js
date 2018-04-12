// javascript document to index.html
function setCk(n, v, e) {
	var f = new Date();
	var exp = "expires=";
	var cr = "";
	f.setTime(f.getTime() + (e * 24 * 60 * 60 * 1000));
	exp += f.toGMTString();
	cr = n + "=" + v + "; " + exp + "path=/";
	document.cookie = cr;
	alert("n=" + n + "\nv=" + v + "\ne=" + e + "\nexp=" + exp + "\ncr=" + cr + "\ntypeof(cr)=" + typeof(cr) + "\ndocument.cookie=" + document.cookie + "\ntypeof(document.cookie)=" + typeof(document.cookie));

	return cr;
}
function getCk(n) {
	var nom = n + "=";
	var cks = document.cookie.split(';');
	for (var i = 0; i < cks.length; i++) {
		var ck = cks[i];
		while (ck.charAt(0) == ' ') {
			ck = ck.substring(1);
		}
		if (ck.indexOf(nom) == 0) {
			return ck.substring(nom.length, ck.length);
		}
	}
	return "";
}

// prueba con elementos de la pagina
function crearCk() {
	try {
		var x = prompt("Color favorito", "");
		if (x != "") {
			setCk("color", x, 1);
			alert("Cookie 'color' creada: nombre=" + getCk("color").substring(0, getCk("color").indexOf('=')) + ";valor=" + getCk("color"));
		}
	}
	catch (ex) {
		document.write("ex:<br/>" + ex + "<br/><br/>ex.message:<br/>" + ex.message);
	}
}
function mostrarCk() {
	try {
		var color = getCk("color");
		if (color != "") {
			alert("Su color favorito es " + ck);
		}
		else {
			alert("Pulse el boton 'Ingresar' y luego la 'c' de su teclado...");
		}
	}
	catch (ex) {
		document.write("ex:<br/>" + ex + "<br/><br/>ex.message:<br/>" + ex.message);
	}
}
function borrarCk(n) {
	var f = new Date(1970);
	document.cookie = "color=;expires=" + f.toUTCString();
}

// funcion manejadora
function act(event) {
	try {
		var e = event || window.event;
		var k = String.fromCharCode(e.keyCode) || String.fromCharCode(e.which);
		if (k == 'c') {
			crearCk();
		}
		else if (k == 'v') {
			mostrarCk();
		}
		else if (k == 'x') {
			borrarCk();
		}
	}
	catch (ex) {
		document.write("ex:<br/>" + ex + "<br/><br/>ex.message:<br/>" + ex.message);
	}
}
