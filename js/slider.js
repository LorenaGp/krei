$(document).ready(function(){
	
	function avanza(){
		$(".mostrar1").hide();
		$(".mostrar2").show();
		$(".flecha_derecha1").css("color", "rgba(68, 74, 86, 0.5)");
		$(".flecha_izquierda1").css("color", "rgba(68, 74, 86, 1)");
	};

	function retrocede(){
		$(".mostrar2").hide();
		$(".mostrar1").show();
		$(".flecha_izquierda1").css("color", "rgba(68, 74, 86, 0.5)");
		$(".flecha_derecha1").css("color", "rgba(68, 74, 86, 1)");
	};

	function avanza1(){
		$(".mostrar3").hide();
		$(".mostrar4").show();
		$(".flecha_derecha2").css("color", "rgba(68, 74, 86, 0.5)");
		$(".flecha_izquierda2").css("color", "rgba(68, 74, 86, 1)");
	};

	function retrocede1(){
		$(".mostrar4").hide();
		$(".mostrar3").show();
		$(".flecha_izquierda2").css("color", "rgba(68, 74, 86, 0.5)");
		$(".flecha_derecha2").css("color", "rgba(68, 74, 86, 1)");
	};

	function avanza2(){
		$(".mostrar6").hide();
		$(".mostrar7").show();
		$(".flecha_derecha4").css("color", "rgba(68, 74, 86, 0.5)");
		$(".flecha_izquierda4").css("color", "rgba(68, 74, 86, 1)");
	};

	function retrocede2(){
		$(".mostrar7").hide();
		$(".mostrar6").show();
		$(".flecha_izquierda4").css("color", "rgba(68, 74, 86, 0.5)");
		$(".flecha_derecha4").css("color", "rgba(68, 74, 86, 1)");
	};

		function avanza3(){
		$(".mostrar8").hide();
		$(".mostrar9").show();
		$(".flecha_derecha5").css("color", "rgba(68, 74, 86, 0.5)");
		$(".flecha_izquierda5").css("color", "rgba(68, 74, 86, 1)");
	};

	function retrocede3(){
		$(".mostrar9").hide();
		$(".mostrar8").show();
		$(".flecha_izquierda5").css("color", "rgba(68, 74, 86, 0.5)");
		$(".flecha_derecha5").css("color", "rgba(68, 74, 86, 1)")
	};	

	$(".flecha_derecha1").click(avanza);
	$(".flecha_izquierda1").click(retrocede);
	$(".flecha_derecha2").click(avanza1);
	$(".flecha_izquierda2").click(retrocede1);
	$(".flecha_derecha4").click(avanza2);
	$(".flecha_izquierda4").click(retrocede2);
	$(".flecha_derecha5").click(avanza3);
	$(".flecha_izquierda5").click(retrocede3);
	
	
});	
