// javascript document to ianime.html

// rutas de las imagenes anime.
var imgs = ["nbs/335 x.jpg", "nbs/agonia.jpg", "nbs/amenaza.jpg", "nbs/aoshi2.jpg", "nbs/assassin.jpg", "nbs/biakuyua 00.jpg", "nbs/bleach..jpg", "nbs/bleach 1 x.jpg", "nbs/bleach 01.bmp", "nbs/bleach 1.jpg", "nbs/bleach 02.bmp", "nbs/bleach 07.bmp", "nbs/bleach 2.jpg", "nbs/bleach 2.png", "nbs/bleach 3.jpg", "nbs/bleach 18x.jpg", "nbs/bleach caifop.jpg", "nbs/bleach j.jpg", "nbs/bleach reloaded.jpg", "nbs/bleach tif.jpg", "nbs/bleach.1.jpg", "nbs/bleach-w.jpg", "nbs/byakuyua.jpg", "nbs/custon.jpg", "nbs/cannon w.jpg", "nbs/captured.jpg", "nbs/chakra.jpg", "nbs/demon m.jpg", "nbs/demon.jpg", "nbs/dnm.jpg", "nbs/c chakra.jpg", "nbs/combat.jpg", "nbs/combat 2.jpg", "nbs/el pergamino.png", "nbs/element p.jpg", "nbs/empate.jpg", "nbs/fight.jpg", "nbs/fire.jpg", "nbs/force.jpg", "nbs/fox energy.jpg", "nbs/frozen.jpg", "nbs/gaara d.jpg", "nbs/gaara s.jpg", "nbs/gaara sen.jpg", "nbs/gaara.jpg", "nbs/garras.jpg", "nbs/head crash.jpg", "nbs/hitsugaya2.jpg", "nbs/hitsugaya3.jpg", "nbs/ichigon.jpg", "nbs/rock lee.jpg", "nbs/yondaime.jpg", "nbs/zaraki.jpg", "nbs/el samurai.jpg", "nbs/hitsugaya.b.jpg", "nbs/hitsugaya1.jpg", "nbs/hitsugaya.jpg", "nbs/hitsugaya.t.jpg", "nbs/ichigo.s.jpg", "nbs/ichigo 01.jpg", "nbs/ichigo 6.jpg", "nbs/ichigo k.jpg", "nbs/ichigo kurosaki.jpg", "nbs/ichigo l.jpg", "nbs/ichigo power.jpg", "nbs/ichigo,bleach.jpg", "nbs/ichigo.h.jpg", "nbs/ichigo's team.jpg", "nbs/inoue.jpg", "nbs/orihime.jpg", "nbs/ishida.jpg", "nbs/juramento.jpg", "nbs/jutsu.jpg", "nbs/kisuke.jpg", "nbs/kuchiki byakyua.jpg", "nbs/kuchiki byakyua 01.jpg", "nbs/kuchiki byakyua02.jpg", "nbs/mystery.jpg", "nbs/naruto 1.jpg", "nbs/naruto fox.jpg", "nbs/naruto.bmp", "nbs/face to face.jpg", "nbs/nine tails.jpg", "nbs/ninja n.jpg", "nbs/orochimaru.jpg", "nbs/oyabin.jpg", "nbs/reiatsu.png", "nbs/remadebleach.jpg", "nbs/s ichigo.jpg", "nbs/s.i.b..jpg", "nbs/s.nevada.jpg", "nbs/samurai x 2.jpg", "nbs/samurai x.jpg", "nbs/sand coffin.jpg", "nbs/sanin.jpg", "nbs/sapo y coyote.jpg", "nbs/sasuke,shidori.jpg", "nbs/shikamaru.jpg", "nbs/shinigami captains.gif", "nbs/soul society.jpg", "nbs/thunder.jpg", "nbs/thunder 01.jpg"];

// vista1: primera opcion.
var TVista1 = "<tr><td><input type=\"button\" id=\"btnanterior\" value=\"Anterior\" accesskey=\"a\" onclick=\"anterior(1)\" /></td><td><img src=\"\" height=\"600\" width=\"600\"  name=\"imguno\" alt=\"imguno\" /></td><td><input type=\"button\" id=\"btnsiguiente\" value=\"Siguiente\" accesskey=\"s\" onclick=\"siguiente(1)\" /></td></tr>";

// vista2: segunda .
var TVista2 = "<tr><td rowspan=\"2\"><input type=\"button\" id=\"btnanterior\" value=\"Anterior\" accesskey=\"a\" onclick=\"anterior(2)\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img1\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img2\" /></td><td rowspan=\"2\"><input type=\"button\" id=\"btnsiguiente\" value=\"Siguiente\" accesskey=\"s\" onclick=\"siguiente(2)\" /></td></tr><tr><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img3\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img4\" /></td></tr>";

// extender la clase Array para simplificar la buqueda de elementos dentro de los mismos.
Array.prototype.indexOf = function(cad)
{
	for (var i = 0; i < this.length; i++)
	{
		if (this[i] == cad)
		{
			return i;
		}
		else
		{
			continue;
		}
	}
	return -1;
}

Array.prototype.copy = function(original)
{
	for (var i = 0; i < original.length; i++)
	{
		this.push(original[i]);
	}
	return this;
}

function p20(cad)
{
	// reemplaza cada aparicion de la subcadena "%20" por un espacio en blaco y la devuelve
	var str = "";
	if (typeof(cad).toLowerCase() != "string")
	{
		return null;
	}
	else
	{
		for (var q = 0; q < cad.length; q++)
		{
			if (cad[q] + cad[q + 1] + cad[q + 2] == "%20")
			{
				str += " ";
				q += 2;
			}
			else
			{
				str += cad[q];
			}
		}
	}
	return str;
}

function rest(x) // array de imagenes o propiedad length del mismo como argumento.
{
	// devuelve los elementos restantes de un array si no son divisibles por 4.
	var res;
	var ext;
	if (typeof(x) == "object")
	{
		ext = x.length;
	}
	else if (typeof(x) == "number")
	{
		ext = x;
	}
	else
	{
		return null;
	}
	for (var i = ext; i > 0; i--)
	{
		if (!(i % 4 == 0))
		{
			res = ext - (i - 1);
		}
		else
		{
			if (res != undefined)
				return res;
			else
				return 0;
		}
	}
}

// metodos llamados por el usuario 
function seleccion()
{
	var tbPrinc = document.getElementById("tblprinc"); // tabla principal
	var fS = document.getElementById("fsobrante");
	var fsT = document.getElementById("fstitulo");
	var imgct = document.getElementById("imgcounter");
	var ct = document.getElementById("ctodas");
	var s = document.getElementById("vista");
	var op = s.options[s.selectedIndex].value;
	if (op == 1)
	{
		vista1();
	}
	else if (op == 2)
	{
		vista2();
	}
	else if (op == 3)
	{
		vista3();
	}
	else
	{
		tbPrinc.innerHTML = null;
		fsT.innerHTML = null;
		fS.innerHTML = null;
		imgct.innerHTML = null;
		ct.innerHTML = null;
	}
}

function vista1()
{
	try
	{
		var tblPrinc = document.getElementById("tblprinc");
		var fsT = document.getElementById("fstitulo");
		var fs = document.getElementById("fsobrante");
		var imgct = document.getElementById("imgcounter");
		var ct = document.getElementById("ctodas"); // contador de vista3 para borrar
		ct.innerHTML = null;
		tblPrinc.innerHTML = TVista1;
		// se inicializa la imagen generada.
		var imguno = document.getElementsByName("imguno");
		imguno[0].src = imgs[0];
		imgct.innerHTML = "Imagen: 1/" + imgs.length;
		
		fsT.innerHTML = "";
		fs.innerHTML = "";
	}
	catch (ex)
	{
		alert(ex.message);
	}
}

function vista2()
{
	try
	{
		var tblPrinc = document.getElementById("tblprinc");
		var fs = document.getElementById("fsobrante"); // elemento tr donde se insertaran todas las celdas con las imagenes sobrantes.
		var fst = document.getElementById("fstitulo"); // elemento td donde se escribira automaticamente un titulo si no esta vacio.
		var imgct = document.getElementById("imgcounter");
		var ct = document.getElementById("ctodas"); // contador de vista3 para borrar
		ct.innerHTML = null;
		
		tblPrinc.innerHTML = TVista2;
		
		// se inicializan las imagenes generadas
		var imgcuadro = document.getElementsByName("imgcuadro");
		
		// calcS: calculos para mostrar imagenes sobrantes
		var imgsDeMas = [];
		var imgsC = (new Array()).copy(imgs);
		var exc = rest(imgsC);
		
		for (var q = imgsC.length; q > 0; q--)
		{
			if (q % 4 != 0)
			{
				imgsDeMas.push(imgsC[q - 1]);
				imgsC.pop();
			}
			else
			{
				imgsDeMas.reverse();
				break;
			}
		}
		// fin calcS
		
		if (exc > 0)
		{
			imgct.innerHTML = "Imagenes sobrantes en mosaico: " + exc + "; Imagenes: 1-4/" + (imgsC.length - exc); // iniciar contador
		}
		else
		{
			imgct.innerHTML = "Imagenes: 1-4/" + (imgsC.length - exc); // iniciar contador
		}
		
		for (var q = 0; q < imgcuadro.length; q++)
		{
			imgcuadro[q].src = imgsC[q];
		}
		
		for (var q = 0; q < imgsDeMas.length; q++)
		{
			fst.innerHTML = "Im&aacute;genes sobrantes";
			fst.setAttribute("colspan", imgsDeMas.length);
			var td = document.createElement("td");
			var nImg = document.createElement("img");
			td.appendChild(nImg);
			fs.appendChild(td);
			nImg.height = 150;
			nImg.width = 150;
			nImg.src = imgsDeMas[q];
			nImg.style.cursor = 'pointer';
			nImg.title = "Abrir en una nueva pestaña";
			nImg.onclick = function() {
				window.open(this.src);
			}
		}
	}
	catch (ex)
	{
		alert(ex.message);
	}
}

function vista3() // vista de todas las imagenes de manera simultanea.
{
	try
	{
		var tbPrinc = document.getElementById("tblprinc");
		var fsT = document.getElementById("fstitulo"); // para borrar el contenido de la tabla de imagenes sobrantes y mostrar otra vista.
		var fs = document.getElementById("fsobrante"); // para borrar el contenido de la tabla de imagenes sobrantes y mostrar otra vista.
		var imgct = document.getElementById("imgcounter");
		var ct = document.getElementById("ctodas");
		var exc = rest(imgs);
		vista1(); // obigatorio para mostrar la vista3. si no se llama, la tabla principal se queda vacia.
		tbPrinc.innerHTML = "";
		fsT.innerHTML = "";
		fs.innerHTML = "";
		imgct.innerHTML = "";
		ct.innerHTML = imgs.length + " imagenes";
		for (var i = 0; i < imgs.length; i++)
		{
			var tr = document.createElement("tr");
			for (var q = 0; q < 4; q++)
			{
				if (imgs[i] != undefined)
				{
					var td = document.createElement("td");
					var nImg = document.createElement("img");
					td.appendChild(nImg);
					tr.appendChild(td);
					nImg.height = 200;
					nImg.width = 200;
					nImg.src = imgs[i];
					if (q < 3)
					{
						i++;
					}
				}
			}
			tbPrinc.appendChild(tr);
		}
	}
	catch (ex)
	{
		alert(ex.message);
	}
}

function anterior(nVista)
{
	var imgActual;
	var nom;
	if (nVista == 1) // vista de una
	{
		imgActual = document.getElementsByName("imguno");
		nom = p20(imgActual[0].src.substring(imgActual[0].src.indexOf("nbs")));
		var imgct = document.getElementById("imgcounter");
		var n_img = imgs.indexOf(nom);
		if (imgActual[0].src != imgs[0])
		{
			for (var q = 0; q < imgs.length; q++)
			{
				if (imgs[q] == nom)
				{
					if (imgs[q - 1] != undefined)
					{
						imgActual[0].src = imgs[q - 1];
						n_img--;
						imgct.innerHTML = "Imagen: " + (n_img + 1) + "/" + imgs.length;
					}
				}
			} // fin for interior
		} // fin for exterior
	}
	else if (nVista == 2) // vista de cuatro
	{
		imgActual = document.getElementsByName("imgcuadro");
		var imgct = document.getElementById("imgcounter");
		var exc = rest(imgs);
		var n_img = [0, 0];
		for (var q = 0; q < imgActual.length; q++)
		{
			nom = p20(imgActual[q].src.substring(imgActual[q].src.indexOf("nbs")));
			if (q == 0)
			{
				n_img[0] = imgs.indexOf(nom);
			}
			else if (q == 3)
			{
				n_img[1] = imgs.indexOf(nom);
			}
			for (var i = 0; i < imgs.length; i++)
			{
				if (imgs[i] == nom)
				{
					if (imgs[i - 4] != undefined)
					{
						imgActual[q].src = imgs[i - 4];
						if (q == 0)
						{
							n_img[0] -= 4;
						}
						else if (q == 3)
						{
							n_img[1] -= 4;
						}
						if (exc > 0)
						{
							imgct.innerHTML = "Imagenes sobrantes en mosaico: " + exc + "; Imagenes: " + (n_img[0] + 1) + "-" + (n_img[1] + 1) + "/" + (imgs.length - exc); // iniciar contador
						}
						else
						{
							imgct.innerHTML = "Imagenes: " + (n_img[0] + 1) + "-" + (n_img[1] + 1) + "/" + (imgs.length - exc); // iniciar contador
						}
					}
				}
			}
		}
	}
}

function siguiente(nVista)
{
	var imgActual;
	var nom;
	if (nVista == 1)
	{
		imgActual = document.getElementsByName("imguno");
		nom = p20(imgActual[0].src.substring(imgActual[0].src.indexOf("nbs")));
		var imgct = document.getElementById("imgcounter");
		var n_img = imgs.indexOf(nom);
		if (imgActual[0].src != imgs[imgs.length - 1])
		{
			for (var q = 0; q < imgs.length; q++)
			{
				if (imgs[q] == nom)
				{
					if (imgs[q + 1] != undefined)
					{
						imgActual[0].src = imgs[q + 1];
						n_img++;
						imgct.innerHTML = "Imagen: " + (n_img + 1) + "/" + imgs.length;
					}
				}
			} // fin for interior
		} // fin for exterior
	}
	else if (nVista == 2)
	{
		imgActual = document.getElementsByName("imgcuadro");
		var imgct = document.getElementById("imgcounter");
		var n_img = [0, 0];
		var exc = rest(imgs);
		for (var q = 0; q < imgActual.length; q++)
		{
			nom = p20(imgActual[q].src.substring(imgActual[0].src.indexOf("nbs")));
			if (q == 0)
			{
				n_img[0] = imgs.indexOf(nom);
			}
			else if (q == 3)
			{
				n_img[1] = imgs.indexOf(nom);
			}
			for (var i = 0; i < imgs.length; i++)
			{
				if (imgs[i] == nom)
				{
					if (imgs[i + 4] != undefined)
					{
						if ((i + 4) < (imgs.length - exc))
						{
							imgActual[q].src = imgs[i + 4];
							if (q == 0)
							{
								n_img[0] += 4;
							}
							else if (q == 3)
							{
								n_img[1] += 4;
							}
							if (exc > 0)
							{
								imgct.innerHTML = "Imagenes sobrantes en mosaico: " + exc + "; Imagenes: " + (n_img[0] + 1) + "-" + (n_img[1] + 1) + "/" + (imgs.length - exc); // iniciar contador
							}
							else
							{
								imgct.innerHTML = "Imagenes: " + (n_img[0] + 1) + "-" + (n_img[1] + 1) + "/" + (imgs.length - exc); // iniciar contador
							}
						}
					}
				}
			}
		}
	}
}