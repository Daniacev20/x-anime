// javascript document to ianime.html

// rutas de las imagenes anime.
var imgs = ["nbs/335 x.jpg", "nbs/agonia.jpg", "nbs/amenaza.jpg", "nbs/aoshi2.jpg", "nbs/assassin.jpg", "nbs/biakuyua 00.jpg", "nbs/bleach..jpg", "nbs/bleach 1 x.jpg", "nbs/bleach 01.bmp", "nbs/bleach 1.jpg", "nbs/bleach 02.bmp", "nbs/bleach 07.bmp", "nbs/bleach 2.jpg", "nbs/bleach 2.png", "nbs/bleach 3.jpg", "nbs/bleach 18x.jpg", "nbs/bleach caifop.jpg", "nbs/bleach j.jpg", "nbs/bleach reloaded.jpg", "nbs/bleach tif.jpg", "nbs/bleach.1.jpg", "nbs/bleach-w.jpg", "nbs/byakuyua.jpg", "nbs/custon.jpg", "nbs/cannon w.jpg", "nbs/captured.jpg", "nbs/chakra.jpg", "nbs/demon m.jpg", "nbs/demon.jpg", "nbs/dnm.jpg", "nbs/c chakra.jpg", "nbs/combat.jpg", "nbs/combat 2.jpg", "nbs/el pergamino.png", "nbs/element p.jpg", "nbs/empate.jpg", "nbs/fight.jpg", "nbs/fire.jpg", "nbs/force.jpg", "nbs/fox energy.jpg", "nbs/frozen.jpg", "nbs/gaara d.jpg", "nbs/gaara s.jpg", "nbs/gaara sen.jpg", "nbs/gaara.jpg", "nbs/garras.jpg", "nbs/head crash.jpg", "nbs/hitsugaya2.jpg", "nbs/hitsugaya3.jpg", "nbs/ichigon.jpg", "nbs/rock lee.jpg", "nbs/yondaime.jpg", "nbs/zaraki.jpg", "nbs/el samurai.jpg", "nbs/hitsugaya.b.jpg", "nbs/hitsugaya1.jpg", "nbs/hitsugaya.jpg", "nbs/hitsugaya.t.jpg", "nbs/ichigo.s.jpg", "nbs/ichigo 01.jpg", "nbs/ichigo 6.jpg", "nbs/ichigo k.jpg", "nbs/ichigo kurosaki.jpg", "nbs/ichigo l.jpg", "nbs/ichigo power.jpg", "nbs/ichigo,bleach.jpg", "nbs/ichigo.h.jpg", "nbs/ichigo's team.jpg", "nbs/inoue.jpg", "nbs/orihime.jpg", "nbs/ishida.jpg", "nbs/juramento.jpg", "nbs/jutsu.jpg", "nbs/kisuke.jpg", "nbs/kuchiki byakyua.jpg", "nbs/kuchiki byakyua 01.jpg", "nbs/kuchiki byakyua02.jpg", "nbs/mystery.jpg", "nbs/naruto 1.jpg", "nbs/naruto fox.jpg", "nbs/naruto.bmp", "nbs/face to face.jpg", "nbs/nine tails.jpg", "nbs/ninja n.jpg", "nbs/orochimaru.jpg", "nbs/oyabin.jpg", "nbs/reiatsu.png", "nbs/remadebleach.jpg", "nbs/s ichigo.jpg", "nbs/s.i.b..jpg", "nbs/s.nevada.jpg", "nbs/samurai x 2.jpg", "nbs/samurai x.jpg", "nbs/sand coffin.jpg", "nbs/sanin.jpg", "nbs/sapo y coyote.jpg", "nbs/sasuke,shidori.jpg", "nbs/shikamaru.jpg", "nbs/shinigami captains.gif", "nbs/soul society.jpg", "nbs/thunder.jpg", "nbs/thunder 01.jpg"];

// vista1: primera opcion.
var TVista1 = "<tr><td><input type=\"button\" id=\"btnanterior\" value=\"Anterior\" accesskey=\"a\" onclick=\"anterior(1)\" /></td><td><img src=\"\" height=\"600\" width=\"600\"  name=\"imguno\" alt=\"imguno\" /></td><td><input type=\"button\" id=\"btnsiguiente\" value=\"Siguiente\" accesskey=\"s\" onclick=\"siguiente(1)\" /></td></tr>";

// vista2: segunda .
var TVista2 = "<tr><td rowspan=\"2\"><input type=\"button\" id=\"btnanterior\" value=\"Anterior\" accesskey=\"a\" onclick=\"anterior(2)\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img1\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img2\" /></td><td rowspan=\"2\"><input type=\"button\" id=\"btnsiguiente\" value=\"Siguiente\" accesskey=\"s\" onclick=\"siguiente(2)\" /></td></tr><tr><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img3\" /></td><td><img src=\"\" name=\"imgcuadro\" height=\"300\" width=\"300\" alt=\"img4\" /></td></tr>";