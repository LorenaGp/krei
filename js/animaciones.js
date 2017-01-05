$(document).ready(function(){
	
	//animación menu home
	$(".s1").mouseover(function(){
		$(".submenu_home").slideDown("fast");
		$(".s1").css("background-color", "#EFF0F0", "opacity", "70%");
		$(".submenu_home").css("background-color", "#EFF0F0", "opacity", "70%");
	});
	
	$(".s1").mouseout(function(){
		$(".submenu_home").slideUp();
		$(".s1").css("background-color", "transparent");
	});

	//animacion menu nuestros grupos
	$(".s2").mouseover(function(){
		$(".submenu_grupos").slideDown("fast");
		$(".s2").css("background-color", "#EFF0F0", "opacity", "70%");
		$(".submenu_grupos").css("background-color", "#EFF0F0", "opacity", "70%");
	});
	
	$(".s2").mouseout(function(){
		$(".submenu_grupos").slideUp();
		$(".s2").css("background-color", "transparent");
	});

	//animación menu blog
	$(".s3").mouseover(function(){
		$(".submenu_blog").slideDown("fast");
		$(".s3").css("background-color", "#EFF0F0", "opacity", "70%");
		$(".submenu_blog").css("background-color", "#EFF0F0", "opacity", "70%");
	});	
	
	$(".s3").mouseout(function(){
		$(".submenu_blog").slideUp();
		$(".s3").css("background-color", "transparent");
	});	

	//animación submenus home
	$(".home1").mouseover(function(){
		$(".submenu_home").slideDown();
		$(".s1").css("background-color", "#EFF0F0", "opacity", "70%");
		$(".home1").css("background-color", "#CED6D7", "opacity", "50%");
	});

	$(".home1").mouseout(function(){
		$(".home1").css("background-color", "transparent");
	});

	$(".home1").click(function(){
		$(".home1").css("background-color", "white");
	});

	$(".home2").mouseover(function(){
		$(".home2").css("background-color", "#CED6D7", "opacity", "50%");
	});

	$(".home2").mouseout(function(){
		$(".home2").css("background-color", "transparent");
	});

	$(".home2").click(function(){
		$(".home2").css("background-color", "white");
	});

	//animación submenus grupos
	$(".grupos1").mouseover(function(){
		$(".submenu_grupos").slideDown();
		$(".s2").css("background-color", "#EFF0F0", "opacity", "70%");
		$(".grupos1").css("background-color", "#CED6D7", "opacity", "50%");
	});

	$(".grupos1").mouseout(function(){
		$(".grupos1").css("background-color", "transparent");
	});

	$(".grupos1").click(function(){
		$(".grupos1").css("background-color", "white");
	});

	$(".grupos2").mouseover(function(){
		$(".submenu_grupos").slideDown();
		$(".grupos2").css("background-color", "#CED6D7", "opacity", "50%");
	});

	$(".grupos2").mouseout(function(){
		$(".grupos2").css("background-color", "transparent");
	});

	$(".grupos2").click(function(){
		$(".grupos2").css("background-color", "white");
	});

	$(".grupos3").mouseover(function(){
		$(".grupos3").css("background-color", "#CED6D7", "opacity", "50%");
	});

	$(".grupos3").mouseout(function(){
		$(".grupos3").css("background-color", "transparent");
	});

	$(".grupos3").click(function(){
		$(".grupos3").css("background-color", "white");
	});

	//animación submenu blog
	$(".blog1").mouseover(function(){
		$(".submenu_blog").slideDown();
		$(".s3").css("background-color", "#EFF0F0", "opacity", "70%");
		$(".blog1").css("background-color", "#CED6D7", "opacity", "50%");
	});

	$(".blog1").mouseout(function(){
		$(".blog1").css("background-color", "transparent");
	});

	$(".blog1").click(function(){
		$(".blog1").css("background-color", "white");
	});

	$(".blog2").mouseover(function(){
		$(".blog2").css("background-color", "#CED6D7", "opacity", "50%");
	});

	$(".blog2").mouseout(function(){
		$(".blog2").css("background-color", "transparent");
	});

	$(".blog2").click(function(){
		$(".blog2").css("background-color", "white");
	});
});

