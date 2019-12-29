// javascript document to ianime.html

//  rutas de las imagenes manga
var imgs = ["nbs/blade 1.jpg", "nbs/blade 2.jpg" , "nbs/blade 3.jpg", "nbs/blade 4.jpg", "nbs/blade 5.jpg", "nbs/blade 6.jpg", "nbs/blade 7.jpg", "nbs/blade 8.jpg", "nbs/blade 9.jpg", "nbs/blade 10.jpg", "nbs/manga1.jpg","nbs/manga2.jpg", "nbs/manga3.jpg", "nbs/manga4.jpg", "nbs/manga5.jpg", "nbs/manga6.jpg", "nbs/manga7.jpg", "nbs/naruto manga.jpg", "nbs/dbz manga.jpg", "nbs/manga10.jpg", "nbs/bleach manga.jpg", "nbs/manga12.jpg", "nbs/manga13.jpg", "nbs/manga14.jpg", "nbs/manga15.jpg"];

// vista1: primera opcion.
var TVista1 = "<tr><td><input type=\"button\" id=\"btnanterior\" value=\"Anterior\" accesskey=\"a\" onclick=\"anterior(1)\" /></td><td><img src=\"\" height=\"600\" width=\"600\"  name=\"imguno\" alt=\"imguno\" /></td><td><input type=\"button\" id=\"btnsiguiente\" value=\"Siguiente\" accesskey=\"s\" onclick=\"siguiente(1)\" /></td></tr>";

// vista2: segunda .
var TVista2 = "<tr><td rowspan=\"2\"><input type=\"button\" id=\"btnanterior\" value=\"Anterior\" accesskey=\"a\" onclick=\"anterior(2)\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img1\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img2\" /></td><td rowspan=\"2\"><input type=\"button\" id=\"btnsiguiente\" value=\"Siguiente\" accesskey=\"s\" onclick=\"siguiente(2)\" /></td></tr><tr><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img3\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img4\" /></td></tr>";