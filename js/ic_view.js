// javascript document to ianime.html

// rutas de las imagenes cosplay.
var imgs = ["nbs/icos.jpg", "nbs/icos1.jpg", "nbs/icos2.jpg", "nbs/icos3.jpg", "nbs/icos4.jpg", "nbs/icos5.jpg", "nbs/icos6.jpg", "nbs/icos7.jpg", "nbs/icos8.jpg", "nbs/icos9.jpg", "nbs/icos10.jpg", "nbs/icos11.jpg", "nbs/icos12.jpg", "nbs/icos13.jpg", "nbs/icos14.jpg", "nbs/icos15.jpg"];

// vista1: primera opcion.
var TVista1 = "<tr><td><input type=\"button\" id=\"btnanterior\" value=\"Anterior\" accesskey=\"a\" onclick=\"anterior(1)\" /></td><td><img src=\"\" height=\"600\" width=\"600\"  name=\"imguno\" alt=\"imguno\" /></td><td><input type=\"button\" id=\"btnsiguiente\" value=\"Siguiente\" accesskey=\"s\" onclick=\"siguiente(1)\" /></td></tr>";

// vista2: segunda.
var TVista2 = "<tr><td rowspan=\"2\"><input type=\"button\" id=\"btnanterior\" value=\"Anterior\" accesskey=\"a\" onclick=\"anterior(2)\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img1\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img2\" /></td><td rowspan=\"2\"><input type=\"button\" id=\"btnsiguiente\" value=\"Siguiente\" accesskey=\"s\" onclick=\"siguiente(2)\" /></td></tr><tr><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img3\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img4\" /></td></tr>";