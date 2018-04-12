//javascript document to index.html
function setImgTitle() {
	try {
		var nombre;
		for (var i=0; i<document.images.length; i++) {
			var ii = document.images[i];
			if (ii.title != "") {
				continue;
			}
			else {
				if (ii.alt != "") {
					ii.title = ii.alt;
				}
				else {
					nombre = ii.src.substring(ii.src.lastIndexOf('/') + 1, ii.src.lastIndexOf('.'));
					ii.alt = nombre;
					ii.title = nombre;
				}
			}
		}
	}
	catch (ex) {
		alert(ex);
	}
}