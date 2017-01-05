<?php
	if(isset($_REQUEST['submit'])){
		if ($_REQUEST['nombre']=="" or! preg_match("/^[a-zA-Z]/", $_REQUEST['nombre'])){
			$error[1]='<span class="error">"Por favor, introduce tu nombre"</span>';
		}elseif ($_REQUEST['apellidos']=="" or! preg_match("/^[a-zA-Z]/", $_REQUEST['apellidos'])){
			$error[2]='<span class="error">"Por favor, introduce tus apellidos"</span>';
		}elseif ($_REQUEST['email']=="" or! preg_match("/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9_\.\-]+$/", $_REQUEST['email'])){
			$error[3]='<span class="error">"Por favor, introduce tu email"</span>';
		}elseif (empty($_REQUEST['condiciones'])){
			$error[7]='<span class="error">"Por favor, acepta las condiciones de uso"</span>';
		}
	}

	
	

	$conexion=  new mysqli ('localhost', 'patatitas', 'p4t4t1t4s', 'patatas'); 
	if (mysqli_connect_errno()){
  		echo "Failed to connect to MySQL: " . mysqli_connect_error();
 	}
	mysqli_select_db ($conexion, 'patatas') or die ('No se puede hacer la conexion');
	$consultaBd = "SELECT * FROM patatas_newsletter";
	$ejecucionBd = mysqli_query($conexion, $consultaBd);

	$fecha = date("y-m-d H:i:s");
	$nombre=($_POST['nombre']);
	$apellidos=($_POST['apellidos']);
	$email=($_POST['email']);
	$confirmacion="Te has suscrito correctamente a nuestra newsletter, comenzarás a recibir nuestras últimas noticias.<br>kreiMusic";

	mysqli_query($conexion, "INSERT INTO patatas_newsletter (fecha, nombre, apellidos, email) VALUES ('$fecha', '$nombre', '$apellidos', '$email')") or die ('Ya estás registrado, si no recibes nuestros correos revisa tu carpeta de spam o contáctanos en info@kreimusic.com');
	echo $confirmacion;

	mysqli_close($conexion);


	
?>
