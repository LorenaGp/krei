$(document).ready(function(){
//ventana modal
	$(".modal").fadeIn();

	$(".boton").click(function(){
		$(".modal").remove();
	});

	//ventana modal newsletter
	$(".velo").delay(3000).fadeIn();

	$(".cerrar").click(function(){
		$(".velo").remove();
	});
});	