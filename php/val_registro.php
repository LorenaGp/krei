<?php
	if(isset($_REQUEST['submit'])){
		if($_REQUEST['nombre_usuario']=="" or! preg_match("/^[a-z\d_]{4,15}$/i", $_REQUEST['nombre_usuario'])){
			$errors[0]='<span class="error">"El nombre de usuario debe contener un mínimo de 4 caracteres y un máximo de 15."</span>';
		}elseif ($_REQUEST['password']=="" or !preg_match("/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/", $_REQUEST['password'])){
			$error[1]='<span class="error">"La contraseña debe contener al menos: una letra mayúscula, una letra minúscula, un número o caracter especial y un mínimo 8 caracteres."</span>';
		}elseif ($_REQUEST['password_repeat']=="" or $_REQUEST['password_repeat']!=$_REQUEST['password']){
			$error[2]='<span class="error">"La contraseña no coincide"</span>';
		}
		elseif ($_REQUEST['nombre']=="" or! preg_match("/^[a-zA-Z]/", $_REQUEST['nombre'])){
			$error[3]='<span class="error">"Por favor, introduce tu nombre"</span>';
		}elseif ($_REQUEST['apellidos']=="" or! preg_match("/^[a-zA-Z]/", $_REQUEST['apellidos'])){
			$error[4]='<span class="error">"Por favor, introduce tus apellidos"</span>';
		}elseif ($_REQUEST['email']=="" or! preg_match("/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9_\.\-]+$/", $_REQUEST['email'])){
			$error[5]='<span class="error">"Por favor, introduce tu email"</span>';
		}elseif (isset($_REQUEST['condiciones'])){
			$mensaje="El usuario ha aceptado las condiciones de uso";
		}else{
			$error[6]='<span class="error">"Por favor, acepta las condiciones de uso"</span>';
		}
	}

	
	$conexion=  new mysqli ('localhost', 'patatitas', 'p4t4t1t4s', 'patatas'); 
	if (mysqli_connect_errno()){
  		echo "Failed to connect to MySQL: " . mysqli_connect_error();
 	}
 	mysqli_select_db ($conexion, 'patatas') or die ('No se puede hacer la conexion');
	$consultaBd = "SELECT * FROM patatas_registro";
	$ejecucionBd = mysqli_query($conexion, $consultaBd);

	$fecha = date("y-m-d H:i:s");
	$nombre_usuario=($_POST['nombre_usuario']);
	$password=($_POST['password']);
	$pass=md5($password);
	$nombre=($_POST['nombre']);
	$apellidos=($_POST['apellidos']);
	$email=($_POST['email']);
	$confirmacion="Guarda esta información para futuras consultas.<br>Estos son tus datos de acceso:<br>USUARIO: $nombre_usuario<br> CONTRASEÑA: $password<br>Si tienes cualquier duda puedes contactarnos en info@kreimusic.com";;

	mysqli_query($conexion, "INSERT INTO patatas_registro (fecha, nombre_usuario, password, nombre, apellidos, email) VALUES ('$fecha', '$nombre_usuario', '$pass', '$nombre', '$apellidos', '$email')") or die ('Ya estás registrado, accede desde <a href="login.html">aquí</a>');
	echo $confirmacion;

	mysqli_close($conexion);


?>
