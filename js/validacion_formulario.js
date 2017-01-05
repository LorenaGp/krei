
$(document).ready(function(){

	//validación formulario contacto
 	
	$("#contacto").click(validaFormularioContacto);
	$("#suscripcion").click(validaFormularioIndex);
	$("#registro").click(validaFormularioRegistro);
	$("#acceso").click(validaFormularioAcceso);

	function validaFormularioContacto (){
		var emailCorrecto = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9_\.\-]+$/;
		var telefonoCorrecto = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
		var apellidoCorrecto = /^[a-zA-Z]/;
		var nombreCorrecto = /^[a-zA-Z]/;
		var nombre = $("#nombre").val();
		var apellido = $("#apellidos").val();
		var telefono =$("#telefono").val();
		var email = $("#email").val();
		var soy = $("input[type='radio']:checked");
		var texto = $("#texto").val();
		var condiciones = $("input[type='checkbox']:checked");
		if (nombre == "" || !nombreCorrecto.test(nombre)){
			$("#nombre").css("border-color", "red");
			alert("Por favor, introduce tu nombre");
			$(".mensaje_nombre").fadeIn();
			$(".mensaje_nombre").css("color", "red");

			return false;
 		}else{
 			$(".mensaje_nombre").fadeOut(); 
 			$("#nombre").css("border-color", "initial");
 			$(".mensaje_nombre").css("color", "initial");
	 		
	 		if (apellido == "" || !apellidoCorrecto.test(apellido)){
 				$("#apellidos").css("border-color", "red");
 				$(".mensaje_apellidos").css("color", "red");
 				alert("Por favor, introduce tus apellidos");
 				$(".mensaje_apellidos").fadeIn();
				return false;
			}else{
				$(".mensaje_apellidos").fadeOut();
				$("#apellidos").css("border-color", "initial");
				$(".mensaje_apellidos").css("color", "initial");
				
				if (email == "" || !emailCorrecto.test(email)){
						alert("Por favor, introduce tu email");
						$(".mensaje_email").fadeIn();
						$("#email").css("border-color", "red");
						$(".mensaje_email").css("color", "red");
						return false;
				}else{
					$(".mensaje_email").fadeOut();
					$(".mensaje_email").css("color", "initial");
					$("#email").css("border-color", "initial");

					if (telefono == "" || !telefonoCorrecto.test(telefono)){
						alert("Por favor, introduce tu teléfono");
						$(".mensaje_telefono").fadeIn();
						$("#telefono").css("border-color", "red");
						$(".mensaje_telefono").css("color", "red");
						return false;
					}else{
						$(".mensaje_telefono").fadeOut();
						$(".mensaje_telefono").css("color", "initial");
						$("#telefono").css("border-color", "initial");	
						
						if(soy.length == 0){
							alert("Por favor, elige una de las opciones");
							$(".mensaje_opciones").fadeIn();
							$(".mensaje_opciones").css("color", "red");
							return false;
						}else{
							$(".mensaje_opciones").fadeOut();
							$(".mensaje_opciones").css("color", "initial");
							
							if(texto.length == 0){
								alert("El campo texto no puede ser vacío");
								$(".mensaje_texto").fadeIn();
								$(".mensaje_texto").css("color", "red");
								$("#texto").css("border-color", "red");
							}else{
								$(".mensaje_texto").fadeOut();
								$(".mensaje_texto").css("color", "initial");
								$("#texto").css("border-color", "initial");
								
								if(condiciones.length == 0){
									alert("Por favor, acepta las condiciones de uso");
									$(".mensaje_condiciones").fadeIn();
									$(".mensaje_condiciones").css("color", "red");
									return false;
								}else{
									$(".mensaje_condiciones").fadeOut();
									$(".mensaje_condiciones").css("color", "initial");
								}		
							}		
						}
					}
				}  
			}
		}
	}	

	function validaFormularioIndex (){
		var emailCorrecto = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9_\.\-]+$/;
		var apellidoCorrecto = /^[a-zA-Z]/;
		var nombreCorrecto = /^[a-zA-Z]/;
		var nombre = $("#nombre_index").val();
		var apellido = $("#apellidos_index").val();
		var email = $("#email_index").val();
		var condiciones = $("input[type='checkbox']:checked");	
		if (nombre == "" || !nombreCorrecto.test(nombre)){
			alert("Por favor, introduce tu nombre");
			$(".mensaje_nombre").fadeIn();
			$("#nombre_index").css("border-color", "red");
			$(".mensaje_nombre").css("color", "red");
			return false;
 		}else{
 			$(".mensaje_nombre").fadeOut();
 			$("#nombre_index").css("border-color", "initial");
			$(".mensaje_nombre").css("color", "initial"); 

	 		if (apellido == "" || !apellidoCorrecto.test(apellido)){
 				alert("Por favor, introduce tus apellidos");
 				$(".mensaje_apellidos").fadeIn();
 				$("#apellidos_index").css("border-color", "red");
				$(".mensaje_apellidos").css("color", "red");
				return false;
			}else{
				$(".mensaje_apellidos").fadeOut();
				$("#apellidos_index").css("border-color", "initial");
				$(".mensaje_apellidos").css("color", "initial");	
				
				if (email == "" || !emailCorrecto.test(email)){
					alert("Por favor, introduce tu email");
					$(".mensaje_email").fadeIn();
					$("#email_index").css("border-color", "red");
					$(".mensaje_email").css("color", "red");
					return false;
				}else{
					$(".mensaje_email").fadeOut();
					$("#email_index").css("border-color", "initial");
					$(".mensaje_email").css("color", "initial");	

					if(condiciones.length == 0){
						alert("Por favor, acepta las condiciones de uso");
						$(".mensaje_condiciones").fadeIn();
						$("#condiciones_index").css("border-color", "red");
						$(".mensaje_condiciones").css("color", "red");
						return false;
					}else{
						$(".mensaje_condiciones").fadeOut();
						$("#condiciones_index").css("border-color", "initial");
						$(".mensaje_condiciones").css("color", "initial");
					}	
				}  
			}
		}	
	}

	function validaFormularioRegistro (){	
		var emailCorrecto = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9_\.\-]+$/;
		var apellidoCorrecto = /^[a-zA-Z]/;
		var nombreCorrecto = /^[a-zA-Z]/;
		var usuarioCorrecto = /^[a-z\d_]{4,15}$/i; 
		var passwordCorrecta = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/; 
		var nombre = $("#nombre_register").val();
		var apellido = $("#apellidos_register").val();
		var email = $("#email_register").val();
		var condiciones = $("input[type='checkbox']:checked");
		var user = $("#nombre_usuario").val();
		var password = $("#password").val();
		var confirme_password = $("#confirme_password").val();

		if (user == "" || !usuarioCorrecto.test(user)){
			alert("El nombre de usuario debe contener un mínimo de 4 caracteres y un máximo de 15.");	
			$(".mensaje_user").fadeIn();
			$(".mensaje_user").css("color", "red");
			$("#nombre_usuario").css("border-color", "red");
			return false;
	 	}else{
 			$(".mensaje_user").fadeOut();
 			$(".mensaje_user").css("color", "initial");
			$("#nombre_usuario").css("border-color", "initial");
			
			if (password == "" || !passwordCorrecta.test(password)){
				alert("La contraseña debe contener al menos: una letra mayúscula, una letra minúscula, un número o caracter especial y un mínimo 8 caracteres.");
				$(".mensaje_contraseña").fadeIn();
				$(".mensaje_contraseña").css("color", "red");
				$("#password").css("border-color", "red");
				return false;
	 		}else{
	 			$(".mensaje_contraseña").fadeOut();
	 			$(".mensaje_contraseña").css("color", "initial");
				$("#password").css("border-color", "initial");
	 			
	 			if (confirme_password != password){
	 				alert("La contraseña no coincide");
	 				$(".mensaje_contraseña2").fadeIn();
	 				$(".mensaje_contraseña2").css("color", "red");
					$("#confirme_password").css("border-color", "red");
	 				return false;
	 			}else{
	 				$(".mensaje_contraseña2").fadeOut();
	 				$(".mensaje_contraseña2").css("color", "initial");
					$("#confirme_password").css("border-color", "initial");
		 			
		 			if (nombre == "" || !nombreCorrecto.test(nombre)){
						alert("Por favor, introduce tu nombre");
						$(".mensaje_nombre").fadeIn();
						$(".mensaje_nombre").css("color", "red");
						$("#nombre_register").css("border-color", "red");
						return false;
			 		}else{
			 			$(".mensaje_nombre").fadeOut();
			 			$(".mensaje_nombre").css("color", "initial");
						$("#nombre_register").css("border-color", "initial");

			 			if (apellido == "" || !apellidoCorrecto.test(apellido)){
	 						alert("Por favor, introduce tus apellidos");
	 						$(".mensaje_apellidos").fadeIn();
	 						$(".mensaje_apellidos").css("color", "red");
							$("#apellidos_register").css("border-color", "red");
							return false;
						}else{
							$(".mensaje_apellidos").fadeOut();	
							$(".mensaje_apellidos").css("color", "initial");
							$("#apellidos_register").css("border-color", "initial");
							
							if (email == "" || !emailCorrecto.test(email)){
								alert("Por favor, introduce tu email");
								$(".mensaje_email").fadeIn();
								$(".mensaje_email").css("color", "red");
								$("#email_register").css("border-color", "red");
								return false;
							}else{
								$(".mensaje_email").fadeOut();
								$(".mensaje_email").css("color", "initial");
								$("#email_register").css("border-color", "initial");	
								
								if(condiciones.length == 0){
									alert("Por favor, acepta las condiciones de uso");
									$(".mensaje_condiciones").fadeIn();
									$(".mensaje_condiciones").css("color", "red");
									return false;
								}else{
									$(".mensaje_condiciones").fadeOut();
									$(".mensaje_condiciones").css("color", "initial");
								}
							}		
						}	
				 	}
				}	
			}	
		}	
	}

	function validaFormularioAcceso (){
		var user = $("#nombre_usuario").val();
		var password = $("#password").val();
		var usuarioCorrecto = /^[a-z\d_]{4,15}$/i; 
		var passwordCorrecta = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/; 

		if (user == "" || !usuarioCorrecto.test(user)){
			$("#nombre_usuario").css("border-color", "red");
			alert("El nombre de usuario debe contener un mínimo de 4 caracteres y un máximo de 15.");	
			$(".mensaje_user").fadeIn();
			$(".mensaje_user").css("color", "red");
			return false;
	 	}else{
 			$(".mensaje_user").fadeOut();
 			$("#nombre_usuario").css("border-color", "initial");
 			$(".mensaje_user").css("color", "initial");
			
			if (password == "" || !passwordCorrecta.test(password)){
				$("#password").css("border-color", "red");
				$(".mensaje_contraseña").css("color", "red");
				alert("La contraseña debe contener al menos: una letra mayúscula, una letra minúscula, un número o caracter especial y un mínimo 8 caracteres.");
				$(".mensaje_contraseña").fadeIn();
				return false;
	 		}else{
	 			$(".mensaje_contraseña").fadeOut();
	 			$(".mensaje_contraseña").css("color", "initial");
	 			$("#password").css("border-color", "initial");
	 		}	
	 	}
	}
});

