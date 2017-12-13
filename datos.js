$(function () {
	anim();
	animNav();
	Logo();

	//animacion texto
	function anim(){
		TweenMax.set([$("h5"),$("h3"),$("h4"),$("a")],{opacity:0});
		new TimelineMax()
		.staggerTo([$("h5"),$("h3"),$("h4"),$("a")],1,{opacity:1,y:0},0.1);

		// $("h5").eq(0).style.color = "#8c80ef";
		// $("h5").eq(1).style.color = "#b3f20a";
		// $("h5").eq(2).style.color = "#45afff";

	}

	//animacion barra de navegacion
	function animNav(){
		var navBar = document.getElementById("navBar");
		window.onscroll = function() {
			if (window.scrollY > 50) {
				navBar.classList.add("slide-up");
			} else if (window.scrollY < 50) {
				navBar.classList.remove("slide-up");
			}
			scrollHeight = window.scrollY;
		};
		$("h2").on("click", cambiarEstiloNav);

	}

	function cambiarEstiloNav(){
		if ($(this).text() == "AMBIENTE") {
			$("h2").eq(0).addClass("backAmbiente");
			$("h2").eq(1).removeClass("backSalud");
			$("h2").eq(2).removeClass("backEtica");
			window.open("datos.html#DatosAmbiente","_self");
			$("#navBar").css('border-bottom-color', 'rgba(9, 235, 228, .5)');
		}
		if ($(this).text() == "SALUD") {
			$("h2").eq(1).addClass("backSalud");
			$("h2").eq(0).removeClass("backAmbiente");
			$("h2").eq(2).removeClass("backEtica");
			window.open("datos.html#DatosSalud","_self");
			$("#navBar").css('border-bottom-color', 'rgba(255, 94, 91, .5)');
		}
		if ($(this).text() == "ÉTICA") {
			$("h2").eq(2).addClass("backEtica");
			$("h2").eq(1).removeClass("backSalud");
			$("h2").eq(0).removeClass("backAmbiente");
			window.open("datos.html#DatosEtica","_self");
			$("#navBar").css('border-bottom-color', 'rgba(255, 238, 56, .8)');

		}
	}

	//animaciones logo
	function Logo(){
		$("#logo").on("click", abrirMenu);
		$("#logo").on("mouseover", quitarEstiloLogo);
		$("#logo").on("mouseleave", regresarEstiloLogo);
	}

	function quitarEstiloLogo() {
		TweenMax.set($("#logo"), {opacity:1});
	}

	function regresarEstiloLogo() {
		TweenMax.set($("#logo"), {opacity:0.4});
	}

	function abrirMenu() {
		$(this).removeClass("over");
		$(this).addClass("#logo");
		window.open("index.html", "_blank");
	}
});
