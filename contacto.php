<!DOCTYPE html>
<html>
	<head>
		<title>X-&Aacute;nime - Contacto</title>
		<link rel="shortcut icon" type="image/jpg" href="x-anime - logo.jpg"/>
		<script type="text/javascript" src="js/img_setter.js"></script>
		<script type="text/javascript" src="js/validacion_formulario.js"></script>
		<link rel="stylesheet" type="text/css" href="css/estilos - contacto.css" />
	</head>
	<body bgcolor="#303030"  background="img/img_fondo.jpg" style="background-attachment:fixed; background-repeat:no-repeat; background-position:center; background-size: cover" onload="setImgTitle(); contarComentarios()">
		<h1 style="color: white; background: #123456;">
			<blockquote>
				<marquee scrolldelay="60" scrollamount="7" behavior="slide">
					Comun&iacute;cate con nostros
				</marquee>
			</blockquote>
		</h1>
		<br/>
		<table width="65%" align="center" height="450" cellspacing="0">
			<caption>
				<h2 style="background: #123456; color: white;">Contactos</h2>
			</caption>
			<tr bgcolor="#ffffdf">
				<td>
					<img src="img/img_contacto.png" width="330" height="330" hspace="10" vspace="10" />
				</td>
				<td>
					<blockquote>
						<p align="justify">Como estamos totalmente convencidos de que la perfecci&oacute;n no existe ¡ay&uacute;danos!<br/>
						Puedes contactarnos a trav&eacute;s de nuestros correos electr&oacute;nicos:</p>
						<p style="color: blue; text-decoration: underline">daniacev20@gmail.com</p>
						<p align="justify">Y hacernos cualquier pregunta acerca de la p&aacute;gina y/o su contenido. O mejor a&uacute;n, contactar a nuestro desarrollador:</p>
						<p style="color: blue" title="Autor"><u>davian0807@hotmail.com</u></p>
						<p align="justify">Y decirle tu opini&oacute;n sobre la p&aacute;gina, alguna inconformidad e inclusive, alguna mejora o informaci&oacute;n faltante.</p>
						<p align="justify">Tambi&eacute;n puedes hacer contacto a trav&eacute;s de facebook, para m&aacute;s informaci&oacute;n sobre nuestra futura p&aacute;gina en dicha red social:</p>
						<a href="http://www.facebook.com/davian08" title="Autor" target="_blank">Davian Nina Acevedo</a>
						<p>En cambio si no eres muy amante o partidario de dicha red, tiene su <a href="perfil.html">perfil</a> en la web.</p>
						<p>Contin&uacute;a en <a href="index.html" title="Inicio">nuestra web</a>.
					</blockquote>
				</td>
			</tr>
			<tr bgcolor="#ffffdf">
				<td colspan="2">
					<h2>
						<blockquote>
							D&eacute;janos tu comentario:
						</blockquote>
					</h2>
					<form name="frm_mail" method="post" action="php/enviar.php" enctype="multipart/form-data" onreset="formReset()">
						<blockquote>
							<font size="+1">Todos los campos <font color="red" style="text-decoration: underline">son obligatorios</font>:</font>
							<table align="center">
								<tr>
									<td>
										<input type="text" id="txtemail" name="txtemail" placeholder="Escribe aqu&iacute; tu e-mail" required onchange="valEmail()" />
									</td>
								</tr>
								<tr>
									<td colspan="2">
										<textarea id="txtamensaje" name="txtamensaje" maxlength="200" placeholder="Escribe aqu&iacute; el mensaje" required onkeydown="contarCaracteres(event)"></textarea>
										<br />
										<p id="ccont" align="right">0/200</p>
									</td>
								</tr>
								<tr>
									<td align="center">
										<input type="submit" value="Enviar" name="btnenviar" />
										<input type="reset" value="Borrar" name="btnborrar" />
									</td>
								</tr>
							</table>
							<br/>
						</blockquote>
					</form>
				</td>
			</tr>
			<tr>
				<td align="center" bgcolor="#123456" colspan="2">
					<h1 style="color: white">
						<blockquote>
							Comentarios
						</blockquote>
					</h1>
					<blockquote>
						<div id="destino">
							<!-- aqui van los divs agregados dinamicamente -->
							<?php
								$str = array();
								$rtxt = "";
								$corte = "";
								$gestor = fopen("cm.txt", "r");
								while (!feof($gestor))
								{
									$linea = fgets($gestor);
									$br = nl2br($linea);
									$rtxt = $rtxt . $br;
								}
								fclose($gestor);

								for ($i = 0; $i < strlen($rtxt); $i++)
								{
									if ($rtxt[$i] . $rtxt[$i + 1] == "%%")
									{
										$i += 1;
										array_push($str, $corte);
										$corte = "";
									}
									else
									{
										$corte = $corte . $rtxt[$i];
									}
								}

								for ($i = 0; $i < count($str); $i++)
								{
									if ($str[$i] != "")
									{
										echo "<div class=\"comentado\">$str[$i]</div>";
									}
								}
							?>
							<h3 id="ncomentarios"></h3>
						</div>
					</blockquote>
				</td>
			</tr>
		</table>
		<br/><br/><br/>
		<table align="center" cellspacing="10" width="90%" bgcolor="#ffffcd">
			<caption><h2 style="background-color: #123456; color: white">Sugerencias</h2></caption>
			<tr>
				<td align="center" colspan="3">
					<p>En esta p&aacute;gina tratamos los temas de manera conceptual, hist&oacute;rica e informativa. No obstante tenemos la intenci&oacute;n de ofrecer la visualizaci&oacute;n de las variadas series en nuestra propia plataforma.</p>
					<p>Por lo pronto, aqu&iacute; te tenemos algunas sugerencias de cada categor&iacute;a.</p>
				</td>
			</tr>
			<tr>
				<td style="border: 1px solid #123456">
					<center>
						<h3>&Aacute;nime</h3>
						<hr width="150" size="1" color="teal"/>
					</center>
					<ul type="circle">
						<li><a href="http://jkanime.net" target="_blank">Jk anime</a></li>
						<li><a href="http://mundo-animex.org" target="_blank">Mundo-animex</a></li>
					</ul>
				</td>
				<td style="border: 1px solid #123456">
					<center>
						<h3>Manga</h3>
						<hr width="150" size="1" color="teal"/>
					</center>
					<ul type="circle">
						<li><a href="http://tumangaonline.com" target="_blank">Tu manga online</a></li>
						<li><a href="http://mangaslml.com" target="_blank">Mangas lml</a></li>
					</ul>
				</td>
				<td style="border: 1px solid #123456">
					<center>
						<h3>Cosplay</h3>
						<hr width="150" size="1" color="teal"/>
					</center>
					<ul type="circle">
						<li><a href="http://worldcosplay.net" target="_blank">World Cosplay</a></li>
						<li type="none"><br/></li>
					</ul>
				</td>
			</tr>
		</table>
	</body>
</html>