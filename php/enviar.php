<?php
	$email = $_POST['txtemail'];
	$cTexto = $_POST['txtamensaje'];
	$separador = "%%";
	$comentario = "<h4><a href='mailto:$email'>&lt;$email&gt;</a>:</h4>$cTexto\n$separador";
	$archivo = fopen("../cm.txt", "a") or die ("Error al enviar.");
	fwrite($archivo, $comentario);
	fclose($archivo);
	echo "Comentario enviado.";
	echo "<script type=\"text/javascript\">function cl() { location.href = '../contacto.php'; }; setTimeout(cl, 1250);</script>";
?>