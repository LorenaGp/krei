<?php
	if(isset($_REQUEST['submit'])){
		if ($_REQUEST['nombre']=="" or! preg_match("/^[a-zA-Z]/", $_REQUEST['nombre'])){
			$error[1]='<span class="error">"Por favor, introduce tu nombre"</span>';
		}elseif ($_REQUEST['apellidos']=="" or! preg_match("/^[a-zA-Z]/", $_REQUEST['apellidos'])){
			$error[2]='<span class="error">"Por favor, introduce tus apellidos"</span>';
		}elseif ($_REQUEST['email']=="" or! preg_match("/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9_\.\-]+$/", $_REQUEST['email'])){
			$error[3]='<span class="error">"Por favor, introduce tu email"</span>';
		}elseif ($_REQUEST['telefono']=="" or! preg_match("/^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/", $_REQUEST['telefono'])){
			$error[4]='<span class="error">"Por favor, introduce tu teléfono"';
		}elseif (empty($_REQUEST['soy'])){
			$error[5]='<span class="error">"Por favor, elige una de las opciones"</span>';	
		}elseif (empty($_REQUEST['texto'])){
			$error[6]='<span class="error"> "El campo texto no puede quedar vacío"</span>';
		}elseif (empty($_REQUEST['condiciones'])){
			$error[7]='<span class="error">"Por favor, acepta las condiciones de uso"</span>';
		}
	}

	$conexion=  new mysqli('localhost', 'patatitas', 'p4t4t1t4s', 'patatas'); 
	if (mysqli_connect_errno()){
  		echo "Failed to connect to MySQL: " . mysqli_connect_error();
 	}
 	mysqli_select_db ($conexion, 'patatas') or die ('No se puede hacer la conexion');
	$consultaBd = "SELECT * FROM patatas_contacto";
	$ejecucionBd = mysqli_query($conexion, $consultaBd);

	$fecha = date("y-m-d H:i:s");
	$nombre=($_REQUEST['nombre']);
	$apellidos=($_REQUEST['apellidos']);
	$email=($_REQUEST['email']);
	$telefono=($_REQUEST['telefono']);
	$soy=($_REQUEST['soy']);
	$texto=($_REQUEST['texto']);
	$confirmacion="Hemos recibido tu consulta. Nos pondremos en contacto contigo lo antes posible.<br>kreiMusic";

	mysqli_query($conexion, "INSERT INTO patatas_contacto (fecha, nombre, apellidos, email, telefono, soy, texto) VALUES ('$fecha', '$nombre', '$apellidos', '$email', '$telefono', '$soy', '$texto')") or die ('Error en la conexión');
	echo $confirmacion;

	mysqli_close($conexion);
	
	?>
