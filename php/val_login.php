<?php
	$conexion=  new mysqli ('localhost', 'patatitas', 'p4t4t1t4s', 'patatas'); 
	if (mysqli_connect_errno()){
  		echo "Failed to connect to MySQL: " . mysqli_connect_error();
 	}

 	mysqli_select_db ($conexion, 'patatas') or die ('No se puede hacer la conexion');
	$consultaBd = "SELECT * FROM patatas_registro";
	$ejecucionBd = mysqli_query($conexion, $consultaBd);

	$nombre_usuario=($_POST['nombre_usuario']);
	$password=(isset($_POST['password']));
	$pass=md5($password);
	$error_usuario="Usuario no registrado, pincha en <a href='register.html'>Regístrate'</a> para acceder.";
	$error_pass="Contraseña incorrecta, si no recuerda su contraseña haga click en '¿No recuerdas tu contraseña?'.";

	$paso1=mysqli_query($conexion, "SELECT * FROM patatas_registro WHERE nombre_usuario = '$nombre_usuario'") or die ('Error al buscar en la base de datos');
	$filas1=mysqli_num_rows($paso1);

	$paso2=mysqli_query($conexion, "SELECT * FROM patatas_registro WHERE password = '$pass'") or die ('Error al buscar en la base de datos');
	$filas2=mysqli_num_rows($paso2);


	if ($filas1==0){
		header('Location: ../usuario_no_registrado.html');
	}
	else{
		if(!empty($filas2)){
				echo $error_pass;		
			}
		else{
			header('Location: panel_control.php');
		}	
	}	
?>