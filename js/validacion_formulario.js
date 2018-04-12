// javascript document to contacto.html
function contarCaracteres(event) {
	var e = event || window.event;
	var codigoTecla = e.keyCode || e.which;
	var txtamensaje = document.getElementById("txtamensaje");
	var cCont = document.getElementById("ccont");
	// cCont.innerHTML = codigoTecla;

	if (codigoTecla == 8 || codigoTecla == 46) {
		if (txtamensaje.value.length == 0) {
			// no hacer nada
		}
		else {
			cCont.innerHTML = (txtamensaje.value.length - 1) + "/200";
		}
	}
	else if (codigoTecla == 16 || codigoTecla == 17 || codigoTecla == 18 || codigoTecla == 19 || codigoTecla == 20 || codigoTecla == 37 || codigoTecla == 38 || codigoTecla == 39 || codigoTecla == 40 || codigoTecla == 45 || codigoTecla == 93 || codigoTecla == 112 || codigoTecla == 113 || codigoTecla == 114 || codigoTecla == 115 || codigoTecla == 116 || codigoTecla == 117 || codigoTecla == 118 || codigoTecla == 119 || codigoTecla == 120 || codigoTecla == 121 || codigoTecla == 122 || codigoTecla == 123 || codigoTecla == 144) {
		// no hacer nada
	}
	else {
		if (txtamensaje.value.length == 200) {
			cCont.innerHTML = txtamensaje.value.length + "/200";
		}
		else {
			cCont.innerHTML = (txtamensaje.value.length + 1) + "/200";
		}
	}
}

function formReset() {
	var cCont = document.getElementById("ccont");
	if (cCont.innerHTML.charAt(0) != '0') {
		cCont.innerHTML = "0/200";
	}
}

function valEmail() {
	var soportados = ["gmail.com", "hotmail.com", "live.com", "outlook.com", "yahoo.com", "hotmail.es", "live.es", "outlook.es", "yahoo.es", "facebook.com"];
	var txtemail = document.getElementById("txtemail");
	if(txtemail.value.indexOf('@') == -1) {
		alert("Esto no es un correo electr\u00f3nico.");
		txtemail.value = null;
		txtemail.focus();
	}
	else {
		for (var i = 0; i < soportados.length; i++) {
			if (txtemail.value.substring(txtemail.value.indexOf('@') + 1) == soportados[i]) {
				break;
			}
			else {
				if (soportados[i] == soportados[soportados.length - 1]) {
					alert("Solo se admiten mensajes de los siguientes servidores y respectivos dominios:\n\n" + soportados.join('\n'));
					txtemail.value = null;
					txtemail.focus();
				}
			}
		}
	}
}

function contarComentarios() {
	var divs = document.getElementsByTagName("div");
	var nComent = document.getElementById("ncomentarios");
	var cTotal = 0;
	for (var i = 0; i < divs.length; i++) {
		if (divs[i].className == "comentado") {
			cTotal++;
		}
	}
	nComent.innerHTML = "No. de comentarios: " + cTotal;
}