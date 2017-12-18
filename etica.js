$(document).ready(function() {

  CSSPlugin.defaultSmoothOrigin = true;
  var Crueldad2playing = false;
  var Crueldad3playing = false;
  var Crueldad4playing = false;
  var Crueldad5playing = false;
  var Crueldad6playing = false;
  var Crueldad7playing = false;
  var Injusticia1playing = false;
  var Injusticia2playing = false;
  var Injusticia3playing = false;
  var Injusticia4playing = false;
  var Puertasplaying = false;

  Crueldad1();
  Titulo();

  function Titulo() {
    $("#pagFuentes").on("click", abrirLink);
    $("#pagFuentes").on("mouseover", quitarEstilo);
    $("#pagFuentes").on("mouseleave", regresarEstilo);

    $("#logo").on("click", abrirMenu);
    $("#logo").on("mouseover", quitarEstiloLogo);
    $("#logo").on("mouseleave", regresarEstiloLogo);
  }

  function quitarEstilo() {
    $("#titulo").removeClass("h1");
    $("#titulo").addClass("over");
    TweenMax.set($("#fuentes"), {opacity:1});
  }
  function regresarEstilo() {
    $("#titulo").removeClass("over");
    $("#titulo").addClass("h1");
    TweenMax.set($("#fuentes"), {opacity:0.4});
  }
  function abrirLink() {
    $("#titulo").removeClass("over");
    $("#titulo").addClass("h1");
    TweenMax.set($("#fuentes"), {opacity:0.4});


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
  //mouse
  new TimelineMax({repeat:-1}).from($('#manoCirc'), 2,{scale:0, transformOrigin: "center center"})
    .to($('#manoCirc'), 0.5,{opacity:0},'1.3');
  function ManoClick(){
    manoClick.style.visibility = "visible";
    TweenMax.set($('#manoClick'), {scale:0});
    TweenMax.to($('#manoClick'), 0.6,{scale:1, transformOrigin: "bottom center", ease: Back.easeOut, delay:3});

  }
//animaciones
  // Crueldad1();
  function Crueldad1(){
    crueldad1.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Crueldad Animal";
    document.getElementById("fuentes").innerHTML="Worldometers,<br>Compassion In World Farming";
    $("#pagFuentes").prop("href", "datos.html#dcrueldad1");

    TweenMax.set($('#ec1seMatan'), {scale:5, y:250, opacity:0, transformOrigin: "center center"});
    TweenMax.set($('#ec1numero'), {opacity:0, y:150});
    TweenMax.set([$('#ec1animalesDe'), $('#ec18Veces')], {opacity:0, y:-100});
    TweenMax.set([$('#ec1iconosAnimales > path'), $('#ec1iconoHumano')], {scale:0, transformOrigin: "center center"});

    new TimelineMax({delay:0.5})
    .to($('#ec1seMatan'), 1, {scale:1, opacity:1, ease: Back.easeOut})
    .to($('#ec1seMatan'), 1, {y:150, ease: Back.easeOut})
    .add(count60milmillones)
    .to($('#ec1numero'), 5, {opacity:1, ease: Power2.easeOut}, '-=0.15')
    .to($('#ec1animalesDe'), 0.5, {opacity:1, y:150, ease: Back.easeOut}, '+=0.5')
    .to([$('#ec1seMatan'), $('#ec1numero'), $('#ec1animalesDe')], 0.5, {y:0, ease: Back.easeOut}, '+=0.5')
    .to($('#ec18Veces'), 0.5, {opacity:1, y:0, ease: Power2.easeOut}, '-=0.2')
    .staggerTo($('#ec1iconosAnimales > path'), 0.3, {scale:1, transformOrigin: "center center", ease: Back.easeOut}, 0.1)
    .to($('#ec1iconoHumano'), 0.3, {scale:1, transformOrigin: "center center", ease: Back.easeOut,onComplete: playCrueldad2}, '+=0.1')
    ;
    function count60milmillones(){

      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')

      $('#numero60milmillones').animateNumber(
        {
          number: 60000000000,
          easing: 'easeInExpo',
          numberStep: comma_separator_number_step
        },
        5000
      );
    }

  }
  //Crueldad2();
  function Crueldad2(){
    crueldad2.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Crueldad Animal";
    document.getElementById("fuentes").innerHTML="Do Something,<br>Vegan Outreach";
    $("#pagFuentes").prop("href", "datos.html#dcrueldad2");

    TweenMax.set($('#ec2aLasAves'), {scale:0, transformOrigin: "center center"});
    TweenMax.set([$('#ec2lesCortan'), $('#ec2yLasEngordan')], {scaleY:0, transformOrigin: "top center"});
    TweenMax.set($('#ec2herramienta'), {y:-300});
    TweenMax.set($('#ec2gallina1'), {x:600});
    TweenMax.set($('#ec2caminadora'), {x:700});
    TweenMax.set([$('#ec2gallina2'), $('#ec2gallina3')], {opacity:0});
    TweenMax.set($('#ec2cuchillas3D'), {rotationX:75, transformOrigin: "center center"});
    TweenMax.set([$('#ec2triturador'), $('#ec2huevo')], {scaleX:0, transformOrigin: "top right"});
    TweenMax.set([$('#ec2sonTriturados'), $('#ec2polluelosMachos'), $('#ec2minutosDespues')], {scaleX:0, transformOrigin: "top left"});
    TweenMax.set($('#ec2vivos'), {opacity:0});
    TweenMax.set($('#ec2iconoPolluelo'), {y:-80, scale:0.7, opacity:0});
    new TimelineMax()
    .to($('#ec2aLasAves'), 0.5, {scale:1, ease: Back.easeOut})
    .to($('#ec2aLasAves'), 0.5, {scaleY:1, ease: Back.easeOut})
    .to($('#ec2lesCortan'), 0.5, {scaleY:1, ease: Back.easeOut})
    .to($('#ec2caminadora'), 1, {x:0, ease: Power2.easeOut}, '-=0.5')
    .to($("#ec2gears > path"), 3, {rotation:-360, ease:Power1.easeOut, transformOrigin: "center center"}, '-=1')
    .to($('#ec2gallina1'), 2, {x:0, ease:Power1.easeOut}, '-=2')

    .to($('#ec2herramienta'), 1, {y:1000, ease: Power2.easeInOut})
    .to($('#ec2pico'), 0.5, {x:-100, y:800, scale:0, transformOrigin:0, ease: Power2.easeInOut}, '-=0.5')
    .to($('#ec2yLasEngordan'), 0.5, {scaleY:1, ease: Back.easeOut})
    .to($('#ec2gallina1'), 0, {opacity:0, ease:Power0.easeNone}, '+=2')
    .to($('#ec2gallina2'), 0, {opacity:1, ease:Power0.easeNone}, '-=0.1')
    .to($('#ec2gallina2'), 0, {opacity:0, ease:Power0.easeNone}, '+=1')
    .to($('#ec2gallina3'), 0, {opacity:1, ease:Power0.easeNone})
    .to($("#ec2gears > path"), 2, {rotation:-720, ease:Power1.easeIn}, '+=0.5')
    .to($('#ec2gallina3'), 2, {x:-300, ease:Power1.easeIn}, '-=2')
    .to($("#ec2gears > path"), 4, {rotation:-1440, ease:Power1.easeIn}, '-=2')
    .to($('#ec2gallina3'), 2, {y:1000, rotation:-270, transformOrigin: "bottom center", ease:Power4.easeIn}, '-=3')
    .to($('#ec2gallina3'), 2, {x:-200, ease:Power0.easeNone}, '-=2')
    .to([$('#ec2aLasAves'), $('#ec2lesCortan'), $('#ec2yLasEngordan')], 0.5, {x:-1100, ease: Back.easeIn}, '-=1')
    .to($('#ec2caminadora'), 0.5, {x:800, ease: Back.easeIn}, '-=1')
    // polluelos
    .staggerTo([$('#ec2minutosDespues'), $('#ec2huevo'), $('#ec2polluelosMachos'),  $('#ec2triturador'), $('#ec2sonTriturados')], 0.5, {scaleX:1, ease: Back.easeOut}, 0.5, '-=0.5')
    .to($('#ec2huevo'), 0.12, {rotation:10, ease: Power2.easeIn, transformOrigin: "center center"})
    .to($('#ec2huevo'), 0.12, {rotation:-10, ease: Power2.easeIn, transformOrigin: "center center"})
    .to($('#ec2huevo'), 0.12, {rotation:0, ease: Power2.easeIn, transformOrigin: "center center"})
    .to($('#ec2iconoPolluelo'), 0.1, {scale:1, opacity:1})
    .to($('#ec2izqHuevo'), 0.5, {rotation:110, ease: Power2.easeIn, transformOrigin: "top center"})
    .to($('#ec2derHuevo'), 0.5, {rotation:-110, ease: Power2.easeIn, transformOrigin: "top center"}, '-=0.5')
    .to($('#ec2iconoPolluelo'), 0.5, {y:300, ease: Power2.easeIn}, '-=0.25')
    .to($('#ec2vivos'), 2, {opacity:1, ease: Power2.easeInOut})
    .to($('#ec2huevo'), 0.5, {x:-800, ease: Back.easeIn,onComplete: playCrueldad3})
    .add(pollueloRepeat)
    ;
    TweenMax.to($('#ec2cuchillas'), 0.5, {rotationZ:360, repeat:-1, transformOrigin: "center center", ease: Power0.easeNone});
    function pollueloRepeat(){
      TweenMax.set($('#ec2derHuevo'), {rotation:0});
      TweenMax.set($('#ec2izqHuevo'), {rotation:0});
      TweenMax.set($('#ec2huevo'), {x:0, y:-300})
      TweenMax.set($('#ec2iconoPolluelo'), {y:-80, scale:0.7, opacity:0});
      new TimelineMax({repeat:-1})
      .to($('#ec2huevo'), 0.5, {y:0, ease: Back.easeOut})
      .to($('#ec2huevo'), 0.12, {rotation:10, ease: Power2.easeIn, transformOrigin: "center center"})
      .to($('#ec2huevo'), 0.12, {rotation:-10, ease: Power2.easeIn, transformOrigin: "center center"})
      .to($('#ec2huevo'), 0.12, {rotation:0, ease: Power2.easeIn, transformOrigin: "center center"})
      .to($('#ec2iconoPolluelo'), 0.1, {scale:1, opacity:1})
      .to($('#ec2izqHuevo'), 0.5, {rotation:110, ease: Power2.easeIn, transformOrigin: "top center"})
      .to($('#ec2derHuevo'), 0.5, {rotation:-110, ease: Power2.easeIn, transformOrigin: "top center"}, '-=0.5')
      .to($('#ec2iconoPolluelo'), 0.5, {y:300, ease: Power2.easeIn}, '-=0.25')
      .to($('#ec2huevo'), 0.5, {x:-800, ease: Back.easeIn})
      ;
    }
  }
  //Crueldad3();
  function Crueldad3(){
    crueldad3.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Crueldad Animal";
    document.getElementById("fuentes").innerHTML="Last Chance for Animals,<br>Escuela Superior Politécnica de Chimborazo";
    $("#pagFuentes").prop("href", "datos.html#dcrueldad3");

    TweenMax.set($('#ec3lasCerdas'), {scale:0, x:525, transformOrigin: "center center"});
    TweenMax.set([$('#ec3iconoCerda'), $('#ec3vanAlMatadero')], {scale:0, transformOrigin: "center center"});
    TweenMax.set([$('#ec3sonImpregnadas'), $('#ec3cuandoDejan')], {y:100, opacity:0, transformOrigin: "center center"});
    TweenMax.set($('#ec3iconosCerditos > path'), {scale:0, transformOrigin: "center center"});
    TweenMax.set($('#ec3iconoCuchillo'), {y:300, x:-40});
    TweenMax.set($('#ec3aLosLechones'), {x:-1500});
    TweenMax.set($('#ec3iconoLechon'), {scale:0, transformOrigin: "center center"});
    TweenMax.set($('#ec3siNacen'), {x:1500});
    TweenMax.set($('#ec3iconoHerramienta'), {x:-200, transformOrigin: "center center"});
    TweenMax.set($('#ec3iconoMacho'), {opacity:0});
    new TimelineMax()
    .to($('#ec3lasCerdas'), 0.5, {scale:1, ease: Back.easeOut})
    .to($('#ec3lasCerdas'), 0.5, {x:0, ease: Power2.easeInOut})
    .to($('#ec3iconoCerda'), 0.5, {scale:1, ease: Back.easeOut}, '-=0.25')
    .to($('#ec3sonImpregnadas'), 0.5, {y:0, opacity:1, ease: Power2.easeInOut})
    .to($('#ec3vanAlMatadero'), 0.5, {scale:1, ease: Back.easeOut}, '5')
    .to($('#ec3cuandoDejan'), 0.5, {y:0, opacity:1, ease: Power2.easeInOut})
    ;

    new TimelineMax()
    .staggerTo($('#ec3iconosCerditos > path'), 0.2, {scale:1, ease: Back.easeOut}, 0.1, '2.25')
    .to($('#ec3iconosCerditos > path'), 0.5, {y:800, ease: Back.easeIn})
    .to($('#ec3iconosCerditos > path'), 0, {y:0, scale:0})
    .staggerTo($('#ec3iconosCerditos > path'), 0.2, {scale:1, ease: Back.easeOut}, 0.1)
    .to($('#ec3iconosCerditos > path'), 0.5, {y:800, ease: Back.easeIn})
    .to($('#ec3iconosCerditos > path'), 0, {y:0, scale:0})
    .staggerTo($('#ec3iconosCerditos > path'), 0.2, {scale:1, ease: Back.easeOut}, 0.1)
    .to($('#ec3iconosCerditos > path'), 0.5, {y:800, ease: Back.easeIn})
    .to($('#ec3iconosCerditos > path'), 0, {y:0, scale:0})
    .staggerTo($('#ec3iconosCerditos > path'), 0.8, {scale:1, ease: Back.easeOut}, 0.4)
    .to($('#ec3iconosCerditos > path'), 0.75, {y:800, ease: Back.easeIn})
    .to($('#ec3iconosCerditos > path'), 0, {y:0, scale:0})
    .to($('#ec3iconoCuchillo'), 0.5, {y:-500, ease: Power4.easeIn})
    .to([$('#ec3iconoCuchillo'), $('#ec3lasCerdas'), $('#ec3sonImpregnadas'), $('#ec3iconoCerda'), $('#ec3vanAlMatadero'), $('#ec3cuandoDejan')], 1.5, {opacity:0, ease: Power2.easeInOut}, '+=0.5')
    .to($('#ec3aLosLechones'), 0.5, {x:0, ease: Back.easeOut})
    .to($('#ec3iconoLechon'), 0.5, {scale:1, ease: Back.easeOut})
    .to($('#ec3iconoHerramienta'), 1.5, {x:1920, ease: Power2.easeIn})
    .to($('#ec3colaLechon'), 0.5, {y:800, opacity:0, rotation: 270, ease: Power2.easeIn, transformOrigin: "center center"}, '-=0.5')
    .to($('#ec3siNacen'), 0.5, {x:0, ease: Back.easeOut})
    .to($('#ec3iconoMacho'), 0.5, {opacity:1, ease: Power2.easeIn})
    .to($('#ec3iconoHerramienta'), 0, {rotation: 180})
    .to($('#ec3iconoHerramienta'), 1.5, {x:-200, ease: Power2.easeIn})
    .to($('#ec3iconoMacho'), 0.5, {opacity:0, ease: Power2.easeIn,onComplete: playCrueldad4}, '-=0.5')
    ;
  }
  //Crueldad4();
  function Crueldad4(){
    crueldad4.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Crueldad Animal";
    document.getElementById("fuentes").innerHTML="Vegan Outreach";
    $("#pagFuentes").prop("href", "datos.html#dcrueldad4");

    TweenMax.set($('#ec4iconoVaca'), {x:-800});
    TweenMax.set($('#ec4iconoInseminacion'), {x:-400});
    TweenMax.set($('#ec4iconoTubo'), {x:-400});
    TweenMax.set($('#ec4iconoMano'), {y:400});
    TweenMax.set($('#ec4iconoLeche'), {y:200, opacity:0, transformOrigin:"center center", scale:1.3});
    TweenMax.set($('#ec4iconoTernero'), {scale:0, x:-200});
    TweenMax.set($('#ec4alIgualque'), {x:-200, opacity:0});
    TweenMax.set($('#ec4iconosMamiferos > path'), {x:-100, opacity:0});
    TweenMax.set([$('#ec4lasVacas'), $('#ec4esPorEso'), $('#ec4violadasContinuamente'), $('#ec4porInseminacion')], {x:200, opacity:0});
    TweenMax.set($('#ec4producirLeche'), {y:-100, opacity:0});
    TweenMax.set($('#ec4ubreAmarrillo'), {scale:0.5, transformOrigin: "center center"});
    TweenMax.set($('#ec4ubreAzul'), {opacity:0});


    new TimelineMax()
    .to($('#ec4alIgualque'), 0.5, {x:0, opacity:1, ease: Back.easeOut})
    .staggerTo($('#ec4iconosMamiferos > path'), 0.5, {x:0, opacity:1, ease: Back.easeOut}, 0.2)
    .to($('#ec4lasVacas'), 0.5, {x:0, opacity:1, ease: Back.easeOut})
    .to($('#ec4iconoVaca'), 0.5, {x:0, ease: Back.easeOut})
    .to($('#ec4producirLeche'), 0.5, {y:0, opacity:1, ease: Back.easeOut}, '+=0.25')
    .to($('#ec4iconoTernero'), 0.5, {scale:1, x:0, ease: Back.easeOut}, "+=1")
    .to($('#ec4ubreAmarrillo'), 1, {scale:1, ease: Power3.easeInOut})
    .to($('#ec4iconoMano'), 0.75, {y:0, ease: Power3.easeInOut}, '+=0.25')
    .to([$('#ec4iconoMano'), $('#ec4iconoTernero')], 0.75, {y:400, ease: Power3.easeInOut})
    .to($('#ec4esPorEso'), 0.5, {x:0, opacity:1, ease: Back.easeOut})
    .to($('#ec4violadasContinuamente'), 0.5, {x:0, opacity:1, ease: Back.easeOut})
    .to($('#ec4porInseminacion'), 0.5, {x:0, opacity:1, ease: Back.easeOut})
    .to($('#ec4iconoInseminacion'), 1, {x:-150, ease: Power3.easeOut}, '+=1')
    .to([$('#ec4iconoTubo'), $('#ec4iconoInseminacion')], 1, {x:0, ease: Power3.easeOut}, '+=0.25')
    .to($('#ec4iconoInseminacion'), 1, {x:-800, ease: Power3.easeIn})
    .to($('#ec4ubreAzul'), 1, {opacity:1, ease: Power1.easeInOut}, '-=1')
    .to($('#ec4iconoTernero'), 0, {y:0, scale:0, x:-200})
    .to($('#ec4iconoMano'), 0, {y:400})
    .to($('#ec4iconoTernero'), 0.5, {scale:1, x:0, ease: Back.easeOut})
    .to($('#ec4iconoMano'), 0.75, {y:0, ease: Power3.easeInOut}, '+=0.25')
    .to([$('#ec4iconoMano'), $('#ec4iconoTernero')], 0.75, {y:400, ease: Power3.easeInOut})
    .to($('#ec4iconoLeche'), 0.5, {y:0, opacity:1, ease: Power1.easeInOut})
    .to($('#ec4ubreAzul'), 0.5, {opacity:0, ease: Power1.easeInOut}, '-=0.5')
    .to($('#ec4iconoLeche'), 0.5, {x:-500, ease: Power4.easeIn,onComplete: playCrueldad5})
    .add(inseminacionRepeat)
    ;

    function inseminacionRepeat(){
      TweenMax.set($('#ec4iconoLeche'), {y:200, x:0, opacity:0, transformOrigin:"center center", scale:1.3});
      TweenMax.set($('#ec4ubreAmarrillo'), {scale:1, transformOrigin: "center center"});
      TweenMax.set($('#ec4iconoTubo'), {x:-400});
      var timelineRepeat= new TimelineMax({repeat: -1});
      timelineRepeat.timeScale(3);
      timelineRepeat.to($('#ec4iconoInseminacion'), 1, {x:-150, ease: Power3.easeOut}, '+=1')
      .to([$('#ec4iconoTubo'), $('#ec4iconoInseminacion')], 1, {x:0, ease: Power3.easeOut}, '+=0.25')
      .to($('#ec4iconoInseminacion'), 1, {x:-800, ease: Power3.easeIn})
      .to($('#ec4ubreAzul'), 1, {opacity:1, ease: Power1.easeInOut}, '-=1')
      .to($('#ec4iconoTernero'), 0, {y:0, scale:0, x:-200})
      .to($('#ec4iconoMano'), 0, {y:400})
      .to($('#ec4iconoTernero'), 0.5, {scale:1, x:0, ease: Back.easeOut})
      .to($('#ec4iconoMano'), 0.75, {y:0, ease: Power3.easeInOut}, '+=0.25')
      .to([$('#ec4iconoMano'), $('#ec4iconoTernero')], 0.75, {y:400, ease: Power3.easeInOut})
      .to($('#ec4iconoLeche'), 0.5, {y:0, opacity:1, ease: Power1.easeInOut})
      .to($('#ec4ubreAzul'), 0.5, {opacity:0, ease: Power1.easeInOut}, '-=0.5')
      .to($('#ec4iconoLeche'), 0.5, {x:-500, ease: Power4.easeIn}, '+=0.5')
      ;
    }
  }
  //Crueldad5();
  function Crueldad5(){
    crueldad5.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Crueldad Animal";
    document.getElementById("fuentes").innerHTML="Vegan Outreach";
    $("#pagFuentes").prop("href", "datos.html#dcrueldad5");

    TweenMax.set($('#ec5lasTerneras'), {scale:0, transformOrigin:"center center"});
    TweenMax.set($('#ec5sonHabitualmente'), {scaleY:0, transformOrigin:"top center"});
    TweenMax.set($('#ec5descornadas'), {scaleY:0, transformOrigin:"top center"});
    TweenMax.set($('#ec5amputadas'), {scaleY:0, transformOrigin:"top center"});
    TweenMax.set($('#ec5yTetillas'), {scaleY:0, transformOrigin:"top center"});
    TweenMax.set([$('#ec5iconoTernera'), $('#ec5iconoUbre')], {scale:0, transformOrigin:"center center"});
    TweenMax.set($('#ec5iconoCuernos > path'), {y:800, transformOrigin:"center center"});
    TweenMax.set($('#ec5iconoCola'), {scaleX:0, transformOrigin:"top left"});
    new TimelineMax()
    .to($('#ec5lasTerneras'), 0.5, {scale:1, ease: Back.easeOut})
    .to($('#ec5iconoTernera'), 0.5, {scale:1, ease: Back.easeOut})
    .to($('#ec5sonHabitualmente'), 0.5, {scaleY:1, ease: Back.easeOut})
    .to($('#ec5descornadas'), 0.5, {scaleY:1, ease: Back.easeOut})
    .staggerTo($('#ec5iconoCuernos > path'), 0.5, {y:-200, ease: Power2.easeOut}, 0.2)
    .staggerTo($('#ec5iconoCuernos > path'), 0.5, {y:0, ease: Power2.easeIn}, 0.2, '-=0.4')
    .staggerTo($('#ec5iconoCuernos > path'), 1.6, {rotation:720}, 0.2, '-=1.6')
    .to($('#ec5amputadas'), 0.5, {scaleY:1, ease: Back.easeOut})
    .to($('#ec5iconoCola'), 0.5, {scaleX:1, ease: Back.easeOut})
    .to($('#ec5yTetillas'), 0.5, {scaleY:1, ease: Back.easeOut})
    .to($('#ec5iconoUbre'), 0.5, {scale:1, rotation:360, ease: Back.easeOut,onComplete: playCrueldad6})
    ;
    new TimelineMax()
    .staggerTo([$('#ec5iconoCola'), $('#ec5iconoUbre'), $('#ec5iconoCuernos')],1,{repeat:-1,yoyo:true,y:-20,ease:Sine.easeInOut}, 0.2, 2.6)
    ;
    TweenMax.to($('#ec5iconoTernera'),1,{repeat:-1,yoyo:true,y:-20,ease:Sine.easeInOut});
  }
  //Crueldad6();
  function Crueldad6(){
    crueldad6.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Crueldad Animal";
    document.getElementById("fuentes").innerHTML="Fishcount";
    $("#pagFuentes").prop("href", "datos.html#dcrueldad6");

    TweenMax.set($('#ec6seMatan'), {rotationY:-90, transformOrigin:"center center"});
    TweenMax.set([$('#ec6grupoCeros1 > path'), $('#ec6grupoCeros2 > path'), $('#ec6grupoCeros3 > path')], {scale:0, transformOrigin:"center center"});
    TweenMax.set([$('#ec6milMillones1'), $('#ec6milMillones2'), $('#ec6billones')], {y:-50, opacity:0});
    TweenMax.set($('#ec6deAnimales'), {scaleY:0, transformOrigin:"top center"});
    TweenMax.set($('#ec6debidoALa'), {opacity:0});
    TweenMax.set($('#ec6guion'), {scaleX:0, transformOrigin:"top left"});
    TweenMax.set([$('#ec6700'), $('#ec6970'), $('#ec62')], {opacity:0});
    TweenMax.set($('#ec6iconosPeces > path'), {opacity:0});
    TweenMax.set($('#ec6mascaraRect'), {scale:0, transformOrigin: "center center"});
    TweenMax.set($('#ec6frame'), {scale:0, transformOrigin: "center center"});
    TweenMax.set($('#ec6aquiUn'), {x:1000});
    new TimelineMax()
    .to($('#ec6seMatan'), 1, {rotationY:0, ease: Bounce.easeOut})
    .to($('#ec6970'), 1, {opacity:1, ease: Power2.easeInOut})
    .staggerTo($('#ec6grupoCeros1 > path'), 0.3, {scale:1, ease: Bounce.easeOut}, 0.1)
    .to($('#ec6milMillones1'), 0.5, {y:0, opacity:1, ease: Power2.easeInOut})
    .to($('#ec6guion'), 0.5, {scaleX:1, ease: Power2.easeInOut})
    .to($('#ec62'), 1, {opacity:1, ease: Power2.easeInOut})
    .staggerTo($('#ec6grupoCeros2 > path'), 0.3, {scale:1, ease: Bounce.easeOut}, 0.1)
    .to($('#ec6billones'), 0.5, {y:0, opacity:1, ease: Power2.easeInOut})
    .to($('#ec6700'), 1, {opacity:1, ease: Power2.easeInOut})
    .staggerTo($('#ec6grupoCeros3 > path'), 0.3, {scale:1, ease: Bounce.easeOut}, 0.1)
    .to($('#ec6milMillones2'), 0.5, {y:0, opacity:1, ease: Power2.easeInOut})
    .to($('#ec6deAnimales'), 0.5, {scaleY:1, ease: Power2.easeInOut})
    .to($('#ec6debidoALa'), 1, {opacity:1, ease: Power2.easeInOut}, '+=0.75')
    .to([$('#ec6seMatan'), $('#ec6debidoALa'), $('#ec6deAnimales'), $('#ec6ceros'), $('#ec6700'), $('#ec6970'), $('#ec62'), $('#ec6milMillones1'), $('#ec6milMillones2'), $('#ec6billones'), $('#ec6guion')],
    1, {opacity:0, ease: Power2.easeInOut}, '+=1.5')
    .to([$('#ec6mascaraRect'), $('#ec6frame')], 1, {scale:1, ease: Power2.easeInOut})
    .add(count42, '-=0.5')
    .to($('#ec6lasGranjas'), 1, {x:-1000, ease: Back.easeInOut}, '+=3')
    .to($('#ec6aquiUn'), 1, {x:0, ease: Back.easeInOut,onComplete: playCrueldad7}, '-=1')
    .add(count40, '-=0.5')
    ;
    //peces flotando
    new TimelineMax()
    .staggerTo($('#ec6iconosPeces > path'), 1, {opacity:1, ease: Power3.easeInOut}, 0.5, '2')
    ;
    TweenMax.staggerTo($('#ec6iconosPeces > path'), 1,{repeat:-1,yoyo:true,y:-20,ease:Sine.easeInOut}, 0.1);

    function count42(){
      var percent_number_step = $.animateNumber.numberStepFactories.append('%');

      $('#numero42').animateNumber(
        {
          number: 42,
          easing: 'easeInOutQuart',
          numberStep: percent_number_step
        },
        1000
      );
    }
    function count40(){
      var percent_number_step = $.animateNumber.numberStepFactories.append('%');

      $('#numero40').animateNumber(
        {
          number: 40,
          easing: 'easeInOutQuart',
          numberStep: percent_number_step
        },
        1000
      );
    }
  }
  //Crueldad7();
  function Crueldad7(){
    crueldad7.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Crueldad Animal";
    document.getElementById("fuentes").innerHTML="Stanford Law School,<br>Worldwatch Institute";
    $("#pagFuentes").prop("href", "datos.html#dcrueldad7");

    TweenMax.set([$('#ec7ademas'), $('#ec7grupoBalance')], {scale:10, opacity:0, transformOrigin: "center center"});
    TweenMax.set($('#ec7tuboBalance'), {rotation:0, transformOrigin: "center center"});
    TweenMax.set([$('#ec7alConsumir'), $('#ec7productosAnimales'), $('#ec7perjudicasAMiles')], {x:700, opacity:0});
    TweenMax.set($('#ec7grupoBalance'), {x:350});
    TweenMax.set([$('#ec7iconosProductos > g'), $('#ec7iconosEspecies > path')], {scale:0, transformOrigin: "center center"});
    TweenMax.set([$('#ec7porContribuir'), $('#ec7destruccionDeHabitat')], {rotationX:90, transformOrigin: "top center"});
    new TimelineMax()
    .to($('#ec7ademas'), 0.5, {scale:1, opacity:1, ease: Power2.easeInOut})
    .to($('#ec7ademas'), 0.5, {scale:0, opacity:0, ease: Power2.easeInOut}, '+=0.5')
    .to($('#ec7grupoBalance'), 0.5, {scale:1, opacity:1, ease: Power2.easeInOut}, '-=0.5')
    .to([$('#ec7alConsumir'), $('#ec7grupoBalance')], 0.5, {x:0, opacity:1, ease: Back.easeOut}, '+=0.5')
    .to($('#ec7productosAnimales'), 0.5, {x:0, opacity:1, ease: Power2.easeInOut})
    .staggerTo($('#ec7iconosProductos > g'), 0.5, {scale:1, ease: Power2.easeInOut}, 0.2, '+=0.5')
    .to($('#ec7perjudicasAMiles'), 0.5, {x:0, opacity:1, ease: Power2.easeInOut})
    .staggerTo($('#ec7iconosEspecies > path'), 0.5, {scale:1, ease: Power2.easeInOut}, 0.2, '+=1')
    .to($('#ec7porContribuir'), 1, {rotationX:0, ease: Back.easeOut.config(1.5)})
    .to($('#ec7destruccionDeHabitat'), 1, {rotationX:0, ease: Back.easeOut.config(1.5)}, '+=1')
    .to($('#ec7tuboBalance'), 1, {rotation:30, scale:1.15, ease: Back.easeInOut}, '+=0.5')
    .to($('#ec7izqBalance'), 1, {y:-140, ease: Back.easeInOut}, '-=1')
    .to($('#ec7derBalance'), 1, {y:140, ease: Back.easeInOut,onComplete: playInjusticia1}, '-=1')
    .add('loop')
    .to($('#ec7tuboBalance'), 2, {rotation:33, scale:1.15, repeat:-1, yoyo:true, ease: Sine.easeInOut}, 'loop')
    .to($('#ec7izqBalance'), 2, {y:-154, repeat:-1, yoyo:true, ease: Sine.easeInOut}, 'loop')
    .to($('#ec7derBalance'), 2, {y:154, repeat:-1, yoyo:true, ease: Sine.easeInOut}, 'loop')
    ;
  }
  //Injusticia1();
  function Injusticia1(){
    injusticia1.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Injusticia";
    document.getElementById("fuentes").innerHTML="FAO,<br>Oppenlander, Richard.";
    $("#pagFuentes").prop("href", "datos.html#dinjusticia1");

    TweenMax.set([$("#ei1txt1 > path"),$("#ei1txt2")], {opacity:0,y:200});
    TweenMax.set($("#ei1txt"), {transformOrigin:"top center"});
    TweenMax.set($("#ei1txt3"), {transformOrigin:"center center",scale:10,opacity:0,y:300});

    TweenMax.set([$("#ei1txtgan"),$("#ei1vaca")], {transformOrigin:"center center",y:150,opacity:0,scale:0.8});

    TweenMax.set($("#ei1txty"), {transformOrigin:"center center",y:150,opacity:0,scale:0});
    TweenMax.set([$("#ei1txthum"),$("#ei1humanos")], {transformOrigin:"center center",y:150,opacity:0,scale:0.8});

    TweenMax.set($("#ei1crop"), {opacity:0});
    TweenMax.set($("#ei1txt4"), {opacity:0});

    new TimelineMax({delay:0.5})
    .staggerTo($("#ei1txt1 > path"),0.3,{opacity:1,ease:Sine.easeOut},0.05)
    .to([$("#ei1txt1 > path"),$("#ei1txt2")],1,{delay:0.5,opacity:1,y:0,ease:Back.easeInOut})
    .to($("#ei1txt"),0.5,{opacity:0,scale:0,ease:Power4.easeInOut},"+=2")
    .to($("#ei1txt3"),0.5,{scale:1,opacity:1,y:100,ease:Power4.easeInOut},"-=0.5")
    .staggerTo([$("#ei1txtgan"),$("#ei1vaca")],0.2,{scale:1,opacity:1,ease:Back.easeOut})
    .to($("#ei1txty"),0.5,{scale:1,opacity:1,ease:Back.easeOut})
    .staggerTo([$("#ei1txthum"),$("#ei1humanos")],0.2,{scale:1,opacity:1,ease:Back.easeOut})
    .to([$("#ei1txt3"),$("#ei1txtgan"),$("#ei1vaca"),$("#ei1txty"),$("#ei1txthum"),$("#ei1humanos")],1,{y:0,ease:Back.easeInOut},"+=1")
    .staggerTo([$("#ei1crop"),$("#ei1txt4")],0.5,{opacity:1},0.1)
    .staggerTo([$("#ei1txtgan"),$("#ei1vaca")],0.2,{x:-100,ease:Back.easeOut},0,9)
    .staggerTo([$("#ei1txthum"),$("#ei1humanos")],0.2,{x:100,ease:Back.easeOut},0,9)
    .to([$("#ei1crop1"),$("#ei1crop2"),$("#ei1crop3")],0.2,{x:100},9)
    .to([$("#ei1crop4"),$("#ei1crop5"),$("#ei1crop6"),$("#ei1crop7"),$("#ei1crop8"),$("#ei1crop9")],0.2,{x:-100,onComplete: playInjusticia2},9)
    ;
  }
  //Injusticia2();
  function Injusticia2(){
    injusticia2.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Injusticia";
    document.getElementById("fuentes").innerHTML="The Guardian,<br>Al Jazeera America";
    $("#pagFuentes").prop("href", "datos.html#dinjusticia2");

    TweenMax.set($("#ei2txt1"), {opacity:0,x:-500});
    TweenMax.set($("#ei2txt2"), {opacity:0,x:500});

    TweenMax.set($("#ei2cadenas"), {y:-300,opacity:0,transformOrigin:"center top"});

    TweenMax.set($("#ei2chains"), {transformOrigin:"center top"});
    TweenMax.set($("#ei2txt3"), {y:250});


    new TimelineMax({delay:0.5})
    .staggerTo([$("#ei2txt1"),$("#ei2txt2")],0.5,{opacity:1},0.5)
    .staggerTo([$("#ei2txt1"),$("#ei2txt2")],1,{x:0,ease:Circ.easeOut},0.5,"-=1")
    .to($("#ei2cadenas"), 1,{opacity:1,y:0,ease:Bounce.easeOut})
    .to([$("#ei2txt3")], 1,{opacity:1,y:0,ease:Bounce.easeOut,onComplete: playInjusticia3})
    .to($("#ei2chains"), 1,{repeat:-1,yoyo:true,scaleY:1.1,ease:Sine.easeIn},"-=1");

  }
  //Injusticia3();
  function Injusticia3(){
    injusticia3.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Injusticia";
    document.getElementById("fuentes").innerHTML="Environmental Health Perspectives,<br>Hultin, Briggs, Sadoff, Dykema, y Hughes,.";
    $("#pagFuentes").prop("href", "datos.html#dinjusticia3");

    TweenMax.set($("#ei3txt1"), {opacity:0});
    TweenMax.set($("#ei3trabajador"),{opacity:0,scale:3,transformOrigin:"center center"})
    TweenMax.set($("#ei3txt2 > g"),{y:500,opacity:0});
    TweenMax.set($("#ei3pro"),  {x:150,y:200,opacity:0,scale:0.8,transformOrigin:"center center"});
    TweenMax.set($("#ei3mor"),  {x:-150,y:200,opacity:0,scale:0.8,transformOrigin:"center center"});
    TweenMax.set($("#ei3abuso"),{x:-250,y:-50,opacity:0,scale:0.8,transformOrigin:"center center"});
    TweenMax.set($("#ei3ptsd"), {x:0,y:-300,opacity:0,scale:0.8,transformOrigin:"center center"});
    TweenMax.set($("#ei3dol"),  {x:350,y:-50,opacity:0,scale:0.8,transformOrigin:"center center"});

    new TimelineMax({delay:0.2})
    .to($("#ei3trabajador"),1,{opacity:1})
    .to($("#ei3trabajador"),3,{scale:1,ease:Power4.easeOut},"-=1")
    .staggerTo($("#ei3txt2 > g"),2,{y:0,opacity:1,ease:Expo.easeOut},0.2,"-=3")
    .staggerTo([$("#ei3pro"),$("#ei3mor"),$("#ei3abuso"),$("#ei3ptsd"),$("#ei3dol")],1,{scale:1,opacity:1,x:0,y:0,ease: Back.easeOut.config(1),onComplete: playInjusticia4},0.3)
    ;

    new TimelineMax({delay:5}).staggerTo([$("#ei3pro"),$("#ei3mor"),$("#ei3abuso"),$("#ei3ptsd"),$("#ei3dol")],1,{repeat:-1,yoyo:true,scale:1.05,ease:Sine.easeInOut},0.3);
  }
  // Injusticia4();
  function Injusticia4(){
    injusticia4.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Injusticia";
    document.getElementById("fuentes").innerHTML="León, X., y Yumbla, M.,<br>National Association of Local Boards of Health";
    $("#pagFuentes").prop("href", "datos.html#dinjusticia4");

    TweenMax.set($("#ei4txt1"), {opacity:0,y:500});
    TweenMax.set($("#ei4farm"), {opacity:0,y:500});
    TweenMax.set($("#ei4casasd > g"), {x:620,scale:0,opacity:0,smoothOrigin:true,transformOrigin:"center center"});
    TweenMax.set($("#ei4casasi > g"), {x:-620,scale:0,opacity:0,smoothOrigin:true,transformOrigin:"center center"});
    TweenMax.set($("#ei4txt3"), {opacity:0});
    TweenMax.set([$("#ei4txt21"),$("#ei4txt23")], {transformOrigin:"bottom center",scaleY:0});
    TweenMax.set($("#ei4txt22"), {opacity:0,y:200});


    new TimelineMax({delay:0.5})
    .staggerTo([$("#ei4txt1"),$("#ei4farm")],1,{opacity:1,y:0,ease:Back.easeOut},0.5)
    .staggerTo($("#ei4casasd > g"),1,{opacity:1,scale:1,ease:Back.easeOut},0.1,1.5)
    .staggerTo($("#ei4casasi > g"),1,{opacity:1,scale:1,ease:Back.easeOut},0.1,1.5)
    .to($("#ei4txt3"),0.1,{opacity:1})
    .to($("#ei4txt21"),0.5,{scaleY:1,ease:Back.easeInOut})
    .staggerTo($("#ei4casasd > g"),1,{x:0,opacity:1,ease:Back.easeInOut},1.5)
    .to($("#ei4txt22"),0.5,{opacity:1,y:0,ease:Back.easeOut})
    .to($("#ei4txt23"),0.5,{scaleY:1,ease:Back.easeInOut})
    .staggerTo($("#ei4casasi > g"),1,{x:0,opacity:1,ease:Back.easeInOut, onComplete: playPuertas},1)
    ;
  }
  // Puertas();
  function Puertas(){

    var activarsalud = true;
    var activarmedio = true;
    var tlp1 = new TimelineMax();
    var tlp2 = new TimelineMax();
    escogeOtraPuerta.style.visibility = "visible";
    puertasalud.style.visibility = "visible";
    puertamedio.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="";
    document.getElementById("fuentes").innerHTML="";

    TweenMax.set([$("#lyr_txtsalud"), $("#lyr_txtmedio")], {rotationX: 90,opacity: 1,  transformOrigin: "center center",smoothOrigin: true});
    TweenMax.set($("#escogeOtraPuerta"), {opacity:0});

    TweenMax.set([$("#puertasalud"), $("#puertamedio")], {transformPerspective: 400, y:200,opacity:0});
    new TimelineMax().to([$("#puertasalud"), $("#puertamedio")],1, {opacity:1,ease:Power2.easeOut})
    .to([$("#puertasalud"), $("#puertamedio")],2, {y:0,ease:Elastic.easeOut.config(1, 0.3)}, '-=1')
    .to($("#escogeOtraPuerta"), 1, {opacity:1, ease:Power2.easeInOut}, '-=1')
    ;

    $("#puertasalud").hover(over_salud, out_salud);
    $("#puertamedio").hover(over_medio, out_medio);
    $("#puertasalud").click(function() {
      if (activarsalud == true) {
        activarmedio = false;
        new TimelineMax().set($("#puertasalud"), {scale: 1})
        .add('desaparecer')
        .to($("#lyr_txtsalud"),0.1,{rotationX:0})
        .to($("#puertasalud"), 1, {transformOrigin: "center left",rotationY: 90, ease: CustomEase.create("custom", "M0,0 C0.192,0 0.205,-0.133 0.406,-0.088 0.502,-0.066 0.624,0.252 1,1")})
        .to($("#puertamedio"), 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 1, {opacity:0, ease:Power2.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 0, {onComplete: startSalud}, '+=0.5');

      }
    });
    $("#puertamedio").click(function() {
      if (activarmedio == true) {
        activarsalud = false;
        new TimelineMax().set($("#puertamedio"), {scale: 1})
        .add('desaparecer')
        .to($("#lyr_txtmedio"),0.1,{rotationX:0})
        .to($("#puertamedio"), 1, {transformOrigin: "center left",rotationY: 90, ease: CustomEase.create("custom", "M0,0 C0.192,0 0.205,-0.133 0.406,-0.088 0.502,-0.066 0.624,0.252 1,1")})
        .to($("#puertasalud"), 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 1, {opacity:0, ease:Power2.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 0, {onComplete: startMedio}, '+=0.5');
      }
    });
    function over_salud() {
      console.log("over");
      TweenMax.to($("#puertasalud"), 0.2, {scale: 1.05,ease: Power2.easeInOut})
      tlp1.to($("#lyr_iconosalud"), 0.1, {rotationX: 90,transformOrigin: "center center"})
      .to($("#lyr_txtsalud"), 0.1, {rotationX: 0});
    }
    function out_salud() {
      console.log("out");
      TweenMax.to($("#puertasalud"), 0.2, {scale: 1,ease: Power2.easeInOut});
      tlp1.to($("#lyr_txtsalud"), 0.1, {rotationX: 90})
      .to($("#lyr_iconosalud"), 0.1, {rotationX: 0,transformOrigin: "center center"});
    }

    function over_medio() {
      console.log("over");
      TweenMax.to($("#puertamedio"), 0.2, {scale: 1.05,ease: Power2.easeInOut})
      tlp2.to($("#lyr_iconomedio"), 0.1, {rotationX: 90,transformOrigin: "center center"})
      .to($("#lyr_txtmedio"), 0.1, {rotationX: 0});
    }
    function out_medio() {
      console.log("out");
      TweenMax.to($("#puertamedio"), 0.2, {scale: 1,ease: Power2.easeInOut});
      tlp2.to($("#lyr_txtmedio"), 0.1, {rotationX: 90})
      .to($("#lyr_iconomedio"), 0.1, {rotationX: 0,transformOrigin: "center center"});
    }
    function startSalud(){
      window.open("salud.html", "_self");
    }
    function startMedio(){
      window.open("ambiente.html", "_self");
    }

  }
  function playCrueldad2(){
    console.log('completado');
    $("body").click(function(){
      if (Crueldad2playing == false) {
        Crueldad2playing = true;
        Crueldad2();
        crueldad1.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }
  function playCrueldad3(){
    console.log('completado');
    $("body").click(function(){
      if (Crueldad3playing == false) {
        Crueldad3playing = true;
        Crueldad3();
        crueldad2.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }
  function playCrueldad4(){
    console.log('completado');
    $("body").click(function(){
      if (Crueldad4playing == false) {
        Crueldad4playing = true;
        Crueldad4();
        crueldad3.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }
  function playCrueldad5(){
    console.log('completado');
    $("body").click(function(){
      if (Crueldad5playing == false) {
        Crueldad5playing = true;
        Crueldad5();
        crueldad4.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }
  function playCrueldad6(){
    console.log('completado');
    $("body").click(function(){
      if (Crueldad6playing == false) {
        Crueldad6playing = true;
        Crueldad6();
        crueldad5.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }
  function playCrueldad7(){
    console.log('completado');
    $("body").click(function(){
      if (Crueldad7playing == false) {
        Crueldad7playing = true;
        Crueldad7();
        crueldad6.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }
  function playInjusticia1(){
    console.log('completado');
    $("body").click(function(){
      if (Injusticia1playing == false) {
        Injusticia1playing = true;
        Injusticia1();
        crueldad7.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }
  function playInjusticia2(){
    console.log('completado');
    $("body").click(function(){
      if (Injusticia2playing == false) {
        Injusticia2playing = true;
        Injusticia2();
        injusticia1.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }
  function playInjusticia3(){
    console.log('completado');
    $("body").click(function(){
      if (Injusticia3playing == false) {
        Injusticia3playing = true;
        Injusticia3();
        injusticia2.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }
  function playInjusticia4(){
    console.log('completado');
    $("body").click(function(){
      if (Injusticia4playing == false) {
        Injusticia4playing = true;
        Injusticia4();
        injusticia3.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }
  function playPuertas(){
    console.log('completado');
    $("body").click(function(){
      if (Puertasplaying == false) {
        Puertasplaying = true;
        Puertas();
        injusticia4.style.visibility = "hidden";
        manoClick.style.visibility = "hidden";
      }
    });
    ManoClick();
  }

});
