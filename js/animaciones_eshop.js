//animación menú eshop
$(document).ready(function(){

	$(".titulo_eshop li").mouseover(function(){
		$(this).stop(true,false).animate({
			fontSize: '2em', marginTop: '0.2em'});
	});

	$(".titulo_eshop li").mouseout(function(){
		$(this).stop(true,false).animate({
			fontSize: '1.7em', marginTop: '0.5em'});
	});

	

	//animaciones miniatura1

	$(".catalogo img").mouseover(function(){
		$(this).stop(true,false).animate({
			opacity:"0.5",
		});
	});

	$(".catalogo img").mouseout(function(){
		$(this).stop(true,false).animate({
			opacity:"1",
		});
	});


	//animaciones texto más productos
	$(".mas_catalogo a").mouseover(function(){
		$(this).stop(true,false).animate({
		fontSize: '2.2em', marginTop: '0.7em'}, "slow");
	});

	$(".mas_catalogo a").mouseout(function(){
		$(this).stop(true,false).animate({
		fontSize: '2em', marginTop: '0.7em'}, "slow");
	});

	
});


	