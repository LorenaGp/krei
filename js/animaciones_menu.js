$(document).ready(function(){

	function cerrarSubsHome(){
		$(".submenu_grupos").slideUp();
		$(".submenu_blog").slideUp()
	}

	function cerrarSubsGrupos(){
		$(".submenu_home").slideUp();
		$(".submenu_blog").slideUp()
	}

	function cerrarSubsBlog(){
		$(".submenu_home").slideUp();
		$(".submenu_grupos").slideUp()
	}
	
	//animación menu home
	$(".s1").click(function(){
		$(".submenu_home").slideDown(function(){
			$(".submenu_home").stop(true, false, true);
			$(".logo").css("margin-top", "1em");
			cerrarSubsHome();
			$(".s1").click(function(){
				$(".submenu_home").slideUp(function(){
					$(".logo").css("margin-top", "1em");				
				});	
			});
		});	
	});	
	

	$(".s1").mouseover(function(){
		$(".s1").css("cursor", "pointer");
		$(".s1").css("color", "black");
		$(".s1").css("background-color", "rgba(255, 255, 255, 0.2)");
		$(".submenu_home").css("background-color", "rgba(255, 255, 255, 0.2)");
	}),
	$(".s1").mouseout(function(){
		$(".s1").css("background-color", "transparent");
		$(".s1").css("color", "white");
	});

	//animación submenus home
	
	$(".home1").hover(function(){
		$(".home1").css("background-color", "rgba(42, 44, 44, 0.7)");
		$(".home1 a").css("color", "white");
		$(".home1").css("width", "209px")
		$(".home1").css("margin-left", "-2em");
		},
	function(){
		$(".home1").css("background-color", "transparent");
		$(".home1 a").css("color", "black");
	});

	$(".home2").hover(function(){
		$(".home2").css("background-color", "rgba(42, 44, 44, 0.7)");
		$(".home2 a").css("color", "white");
		$(".home2").css("width", "209px")
		$(".home2").css("margin-left", "-2em");
	},
	function(){
		$(".home2").css("background-color", "transparent");
		$(".home2 a").css("color", "black");
	});

	$(".home3").hover(function(){
		$(".home3").css("background-color", "rgba(42, 44, 44, 0.7)");
		$(".home3 a").css("color", "white");
		$(".home3").css("width", "209px")
		$(".home3").css("margin-left", "-2em");
	},
	function(){
		$(".home3").css("background-color", "transparent");
		$(".home3 a").css("color", "black");
	});

	//animacion menu nuestros grupos
	$(".s2").click(function(){
			$(".submenu_grupos").slideDown(function(){
				$(".logo").css("margin-top", "6em");
				cerrarSubsGrupos();	
				$(".submenu_grupos").stop(true, false, true);
				$(".s2").click(function(){
					$(".submenu_grupos").slideUp(function(){
						$(".logo").css("margin-top", "1em");	
					});	
				});
			});	
		});	

	$(".s2, .submenu_grupos").mouseover(function(){
		$(".s2").css("cursor", "pointer")
		$(".s2").css("color", "black")
		$(".s2").css("background-color", "rgba(255, 255, 255, 0.2)");
		$(".submenu_grupos").css("background-color", "rgba(255, 255, 255, 0.2)");
	}),
	$(".s2, .submenu_grupos").mouseout(function(){
		$(".s2").css("background-color", "transparent");
		$(".s2").css("color", "white")
	});



	//animación submenus grupos

	$(".grupos1").hover(function(){
		$(".grupos1").css("background-color", "rgba(42, 44, 44, 0.7)");
		$(".grupos1 a").css("color", "white");
		$(".grupos1").css("width", "289px")
		$(".grupos1").css("margin-left", "-2em");
		},
	function(){
		$(".grupos1").css("background-color", "transparent");
		$(".grupos1 a").css("color", "black");
	});

	$(".grupos2").hover(function(){
		$(".grupos2").css("background-color", "rgba(42, 44, 44, 0.7)");
		$(".grupos2 a").css("color", "white");
		$(".grupos2").css("width", "289px")
		$(".grupos2").css("margin-left", "-2em");
	},
	function(){
		$(".grupos2").css("background-color", "transparent");
		$(".grupos2 a").css("color", "black");
	});

	$(".grupos3").hover(function(){
		$(".grupos3").css("background-color", "rgba(42, 44, 44, 0.7)");
		$(".grupos3 a").css("color", "white");
		$(".grupos3").css("width", "289px")
		$(".grupos3").css("margin-left", "-2em");
	},
	function(){
		$(".grupos3").css("background-color", "transparent");
		$(".grupos3 a").css("color", "black");
	});

	$(".grupos4").hover(function(){
		$(".grupos4").css("background-color", "rgba(42, 44, 44, 0.7)");
		$(".grupos4 a").css("color", "white");
		$(".grupos4").css("width", "289px")
		$(".grupos4").css("margin-left", "-2em");
	},
	function(){
		$(".grupos4").css("background-color", "transparent");
		$(".grupos4 a").css("color", "black");
	});
	
	//animación menu blog

	$(".s3").click(function(){
			$(".submenu_blog").slideDown(function(){
				$(".logo").css("margin-top", "6em");
				cerrarSubsBlog();
				$(".submenu_blog").stop(true, false, true);
				$(".s3").click(function(){
					$(".submenu_blog").slideUp(function(){
						$(".logo").css("margin-top", "1em");		
					});	
				});
			});	
		});	

	$(".s3, .submenu_blog").mouseover(function(){
		$(".s3").css("cursor", "pointer")
		$(".s3").css("background-color", "rgba(255, 255, 255, 0.2)");
		$(".s3").css("color", "black");
		$(".submenu_blog").css("background-color", "rgba(255, 255, 255, 0.2)");
	}),

	$(".s3").mouseout(function(){
		$(".s3").css("background-color", "transparent");
		$(".s3").css("color", "white");
	});

	//animación submenu blog

	$(".blog1").hover(function(){
		$(".blog1").css("background-color", "rgba(42, 44, 44, 0.7)");
		$(".blog1 a").css("color", "white");
		$(".blog1").css("width", "209px")
		$(".blog1").css("margin-left", "-2em");
		},
	function(){
		$(".blog1").css("background-color", "transparent");
		$(".blog1 a").css("color", "black");
	});

	$(".blog2").hover(function(){
		$(".blog2").css("background-color", "rgba(42, 44, 44, 0.7)");
		$(".blog2 a").css("color", "white");
		$(".blog2").css("width", "209px")
		$(".blog2").css("margin-left", "-2em");
	},
	function(){
		$(".blog2").css("background-color", "transparent");
		$(".blog2 a").css("color", "black");
	});

	$(".blog3").hover(function(){
		$(".blog3").css("background-color", "rgba(42, 44, 44, 0.7)");
		$(".blog3 a").css("color", "white");
		$(".blog3").css("width", "209px")
		$(".blog3").css("margin-left", "-2em");
	},
	function(){
		$(".blog3").css("background-color", "transparent");
		$(".blog3 a").css("color", "black");
	});

	//animación menu eshop
		$(".s4").mouseover(function(){
		$(".s4").css("background-color", "rgba(255, 255, 255, 0.2)");
		$(".s4 a").css("color", "black");
	});	
		$(".s4").mouseout(function(){
		$(".s4").css("background-color", "transparent");
		$(".s4 a").css("color", "white");
	});

	//animación menu contacto
		$(".s5").mouseover(function(){
		$(".s5").css("background-color", "rgba(255, 255, 255, 0.2)");
		$(".s5 a").css("color", "black");
	});	
		$(".s5").mouseout(function(){
		$(".s5").css("background-color", "transparent");
		$(".s5 a").css("color", "white");
	});

});	