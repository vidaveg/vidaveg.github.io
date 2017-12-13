$(document).ready(function() {

  CSSPlugin.defaultSmoothOrigin = true;
  var Gases2playing = false;
  var Gases3playing = false;
  var Gases4playing = false;
  var Oceanos1playing = false;
  var Oceanos2playing = false;
  var Oceanos3playing = false;
  var Oceanos4playing = false;
  var Oceanos5playing = false;
  var Deforestacion1playing = false;
  var Deforestacion2playing = false;
  var Deforestacion3playing = false;
  var Deforestacion4playing = false;
  var Recursos1playing = false;
  var Recursos2playing = false;
  var Recursos3playing = false;
  var Recursos4playing = false;
  var Extincion1playing = false;
  var Extincion2playing = false;
  var Extincion3playing = false;
  var Puertasplaying = false;

  Gases1();
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

  //Gases1();
  function Gases1(){
    gases1.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Gases de Invernadero";
    document.getElementById("fuentes").innerHTML="Worldwatch Institute,<br>Organización de las Naciones Unidas para la<br>Alimentación y la Agricultura (FAO)";
    $("#pagFuentes").prop("href", "datos.html#dgases1");

    new TimelineMax()
    .set($('#ag1grupoNullGases1'), {x:150, y:150})
    .from($('#ag1elSectorGanadero'), 1, {rotationX: 90, transformOrigin: "top center", ease: Bounce.easeOut})
    .from($('#ag1emiteMas'), 1, {rotationX: 90, transformOrigin: "top center", ease: Bounce.easeOut})
    .from($('#ag1gasesDeEfecto1'), 1, {rotationX: 90, transformOrigin: "top center", ease: Bounce.easeOut})
    .to($('#ag1grupoNullGases1'), 0.5, {x:0, ease: Power2.easeInOut})
    .to($('#ag1grupoNullGases1'), 1, {y:0, ease: Power2.easeInOut})
    .from(ag1barraGases1, 1, {scaleY:0, ease: Power2.easeInOut, transformOrigin: "bottom center"}, '-=1')
    .from($('#ag1_51porcientoGases'), 1, {opacity:0, ease: Power2.easeInOut}, '-=1')
    .add(count51, '-=1')
    .from($('#ag1queTodoel'), 1, {rotationX: 90, transformOrigin: "top center", ease: Bounce.easeOut}, '+=0.5')
    .from($('#ag1transporteGlobalCombinado'), 1.5, {rotationX: 90, transformOrigin: "top center", ease: Bounce.easeOut}, '-=0.5')
    .from(ag1barraGases2, 1, {scaleY:0, ease: Power2.easeInOut, transformOrigin: "bottom center"}, '-=0.5')
    .from($('#ag1_13porcientoGases'), 1, {opacity:0, ease: Power2.easeInOut, onComplete: playGases2}, '-=1')
    .add(count13, '-=1')
    ;

    function count51(){
      var percent_number_step = $.animateNumber.numberStepFactories.append('%');

      $('#numero51').animateNumber(
        {
          number: 51,
          easing: 'easeInOutQuart',
          numberStep: percent_number_step
        },
        1000
      );
    }

    function count13(){
      var percent_number_step = $.animateNumber.numberStepFactories.append('%');

      $('#numero13').animateNumber(
        {
          number: 13,
          easing: 'easeInOutQuart',
          numberStep: percent_number_step
        },
        1000
      );
    }
  }
  //Gases2();
  function Gases2(){
    gases2.style.visibility = "visible";
    TweenMax.set($('#ag2flechasMask'), {scaleY:0, transformOrigin: "bottom center"});
    document.getElementById("titulo").innerHTML="Gases de Invernadero";
    document.getElementById("fuentes").innerHTML="FAO,<br>International Livestock Research Institute";
    $("#pagFuentes").prop("href", "datos.html#dgases2");

    new TimelineMax()
    .from($('#ag2laGanaderia'), 0.6, {x:-1000, ease: Back.easeOut})
    .from($('#ag2iconoVaca'), 0.6, {scaleY:0, transformOrigin: "top center", ease: Power3.easeIn}, '-=0.1')
    .from($('#ag2noSoloProduce'), 0.5, {y:-100, opacity:0, ease: Back.easeOut})
    .to($('#ag2flechasMask'), 1.5, {scaleY:1, transformOrigin: "bottom center", ease: Power2.easeInOut}, '+=0.2')
    .from([$('#ag2nubeVerde'), $('#ag2nubeCeleste')], 0.8, {scale:0, transformOrigin: "bottom center", ease: Back.easeOut}, '-=0.4')
    .from($('#ag2sinoTambien'), 0.5, {x:-250, opacity:0, ease:Power3.easeOut}, '+=0.2')
    .to([$('#ag2flechasCelestes'), $('#ag2nubeCeleste')], 1, {opacity:0}, '+=0.3')
    .from($('#ag2metano'), 0.5, {y:-50, opacity:0, ease:Back.easeOut}, '-=0.5')

    .add('eventoNube')
    .to($('#ag2nubesArray'), 3, {scale:1.75, transformOrigin: "center center"}, 'eventoNube+=1')
    .staggerFrom($('#ag2nubesArray > path'), 1, {scale:0, opacity:0, transformOrigin: "center center", ease: Power3.easeInOut}, 0.2, 'eventoNube+=1')
    .staggerTo($('#ag2nubesArray > path'), 2, {scale:0.9, opacity:0, transformOrigin: "center center", ease: Power3.easeInOut}, 0.1, '-=1')
    .from([$('#ag2queEsHasta'), $('#ag2100'), $('#ag2vecesMasDanino')], 0.5, {opacity:0}, 'eventoNube+=3.5')
    .to([$('#ag2laGanaderia'), $('#ag2iconoVaca'), $('#ag2noSoloProduce'), $('#ag2nubeVerde'), $('#ag2flechasVerdes'), $('#ag2sinoTambien'), $('#ag2metano')]
    , 0.5, {opacity:0, onComplete: playGases3}, 'eventoNube+=3.5')
    .fromTo($('#ag2100Verde'), 1, {opacity:0}, {opacity:1, repeat:-1, yoyo:true, ease: Power2.easeInOut})
    ;
  }
  //Gases3();
  function Gases3(){
    gases3.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Gases de Invernadero";
    document.getElementById("fuentes").innerHTML="Universidad de Oxford";
    $("#pagFuentes").prop("href", "datos.html#dgases3");

    new TimelineMax()
    .from($('#ag3unOmnivoro'), 0.6, {scaleY:0, transformOrigin: "bottom center", ease: Back.easeOut})
    .from($('#ag3produce'), 0.6, {x:-1000, ease: Power2.easeInOut}, '-=0.3')
    .from($('#ag3alDiaPor'), 0.6, {y:-70, ease: Power2.easeInOut}, '+=0.9')
    .staggerFrom($("#ag3iconosOmni > g"), 0.5, {scale:0, opacity:0, transformOrigin: "center center", ease:Back.easeOut.config(1)}, 0.3)
    .from($('#ag3flechasOmni'), 1, {opacity:0}, '-=0.5')
    .from($('#ag3unVegano'), 0.6, {scaleY:0, transformOrigin: "bottom center", ease: Back.easeOut}, '+=1.5')
    .from($('#ag3tanSolo'), 0.6, {x:-800, ease: Power2.easeInOut}, '-=0.3')
    .staggerFrom($("#ag3iconosVeg > g"), 0.5, {scale:0, opacity:0, transformOrigin: "center center", ease:Back.easeOut.config(1)}, 0.3, '+=0.5')
    .from($('#ag3flechasVeg'), 1, {opacity:0, onComplete: playGases4}, '-=0.5')
    ;

    new TimelineMax({repeat:-1})
    .staggerFrom($("#ag3flechasOmni > path"), 0.8, {scale:0.5, opacity:0, y:100, transformOrigin: "center center", ease:Power0.easeNone}, 0.3)
    .staggerTo($("#ag3flechasOmni > path"), 0.8, {scale:0.5, opacity:0, y:-100, transformOrigin: "center center", ease:Power0.easeNone}, 0.3, '-=1.2')
    ;

    new TimelineMax({repeat:-1})
    .staggerFrom($("#ag3flechasVeg > path"), 0.8, {scale:0.5, opacity:0, y:100, transformOrigin: "center center", ease:Power0.easeNone}, 2)
    .staggerTo($("#ag3flechasVeg > path"), 0.8, {scale:0.5, opacity:0, y:-100, transformOrigin: "center center", ease:Power0.easeNone}, 2, '-=2')
    ;

  }
  //Gases4();
  function Gases4(){
    gases4.style.visibility = "visible";
    TweenMax.set($('#ag4puedesReducirHasta'), {scale:1.5, transformOrigin: "top center", perspective:600, y:100});
    document.getElementById("titulo").innerHTML="Gases de Invernadero";
    document.getElementById("fuentes").innerHTML="Grupo Intergubernamental de Expertos<br>sobre el Cambio Climático (IPCC)";
    $("#pagFuentes").prop("href", "datos.html#dgases4");

    new TimelineMax()
    .from($('#ag4puedesReducirHasta'), 1, {rotationX:90, transformOrigin: "top center", perspective:600, ease:Bounce.easeOut})
    .to($('#ag4puedesReducirHasta'), 0.6, {scale:1, y:0, transformOrigin: "top center", ease:Power2.easeInOut}, '+=0.7')
    .from($('#ag464porciento'), 0.6, {scale:0, transformOrigin: "bottom center", ease:Power2.easeInOut}, '-=0.6')
    .add(count64, '1.2')
    .from($('#ag4tuHuella'), 1, {rotationY:90, transformOrigin: "left", perspective:1000, ease:Bounce.easeOut}, '+=0.6')
    .from($('#ag4gasesDeEfecto'), 1, {rotationY:90, transformOrigin: "right", perspective:1000, ease:Bounce.easeOut}, '+=0.6')
    .from($('#ag4tanSoloDejando'), 1, {rotationY:90, transformOrigin: "left", perspective:1000, ease:Bounce.easeOut}, '+=0.6')
    .from($('#ag4AnimalesYSusDerivados'), 1, {rotationY:90, transformOrigin: "right", perspective:1000, ease:Bounce.easeOut}, '+=0.6')
    .staggerFrom($("#ag4iconosCarne1 > g"), 0.5, {x:-1000, opacity:0, ease:Back.easeOut}, 0.3)
    .staggerFrom($("#ag4iconosCarne2 > g"), 0.5, {x:1000, opacity:0, ease:Back.easeOut,onComplete:playOceanos1}, 0.3)
    ;

    new TimelineMax()
    .to($('#ag4maskPie'), 3, {scaleY:0, transformOrigin: "bottom center"}, '3')
    .to($('#ag4maskPie'), 1, {scaleX:0, transformOrigin: "bottom center"}, '-=1.5')
    ;

    TweenMax.staggerTo($("#ag4iconosCarne1 > g"), 0.8, {rotation:12, transformOrigin: "center center", repeat:-1, yoyo:true, ease: Sine.easeInOut}, 0.1);
    TweenMax.staggerTo($("#ag4iconosCarne2 > g"), 0.8, {rotation:12, transformOrigin: "center center", repeat:-1, yoyo:true, ease: Sine.easeInOut}, 0.1);

    function count64(){
      var percent_number_step = $.animateNumber.numberStepFactories.append('%');

      $('#numero64').animateNumber(
        {
          number: 64,
          easing: 'easeInOutQuart',
          numberStep: percent_number_step
        },
        2000
      );
    }

  }
  // Oceanos1();
  function Oceanos1(){
    oceanos1.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Océanos";
    document.getElementById("fuentes").innerHTML="FAO,<br>Science Magazine";
    $("#pagFuentes").prop("href", "datos.html#doceanos1");

    TweenMax.set([$("#ao1txt1"),$("#ao1txt75")],{y:400,opacity:0});
    TweenMax.set($("#ao1mundo"),{scale:0.5,opacity:0,transformOrigin: "center center"});
    TweenMax.set($("#ao1oceano"),{x:10,y:0});
    TweenMax.set($("#ao1txt2 > g"),{opacity:0,x:500})

    new TimelineMax().to($("#ao1txt1"),0.5,{delay:0.3,opacity:1})
    .to($("#ao1txt1"),3,{y:-400,ease: SlowMo.ease.config(0.7, 0.7, false)},"-=0.5")
    .to($("#ao1txt1"),0.3,{opacity:0},"-=0.3")
    .to($("#ao1mundo"),0.5,{opacity:1,scale:1,ease:Circ.easeOut},0.3)
    .to($("#ao1txt75"),0.5,{opacity:1})
    .to($("#ao1txt75"),1,{y:0,ease: Back.easeOut},"-=0.5")
    .to($("#ao1oceano"),3,{y:500},"-=1")
    .to($("#ao1txt75"),0.5,{delay:0.8,opacity:0,y:-400,ease: Back.easeIn},"+=1.2")
    .to($("#ao1mundo"),0.5,{x:-890,ease:Back.easeInOut})
    .staggerTo($("#ao1txt2 > g"),0.5,{opacity:1,x:0,ease:Power4.easeOut},0.5)
    .to($("#ao1oceano"),1,{y:600,onComplete: playOceanos2})
    ;
    new TimelineMax().to($("#ao1oceano"),1,{yoyo:true,repeat:-1,x:-10,ease:Sine.easeInOut});
    TweenMax.set([$("#ao1margen")],{opacity:0});
  }
  //Oceanos2();
  function Oceanos2(){
    oceanos2.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Océanos";
    document.getElementById("fuentes").innerHTML="World Wildlife Fund (WWF)";
    $("#pagFuentes").prop("href", "datos.html#doceanos2");

    TweenMax.set($("#ao2redanimales"),{y:880});
    TweenMax.set([$("#ao2-5libras"),$("#ao2libra")],{transformOrigin:"center bottom"});
    TweenMax.set([$("#ao2txt1"),$("#ao2txt2")],{opacity:0, y:100});

    new TimelineMax({delay:0.5}).to($("#ao2txt1"),1,{y:0,opacity:1,ease:Sine.easeOut})
    .to($("#ao2redanimales"),1,{y:540,ease:Sine.easeOut},"-=1")
    .to($("#ao2txt2"),1,{delay:1,y:0,opacity:1,ease:Sine.easeOut})
    .to($("#ao2redanimales"),1,{y:0,ease:Power3.easeInOut,onComplete: playOceanos3},"-=1")
    .staggerTo([$("#ao2pecesazul"),$("#ao2pecesver")],1,{y:3,yoyo:true,repeat:-1,ease:Sine.easeInOut},0.2);

    new TimelineMax().to([$("#ao2-5libras"),$("#ao2libra")],0.8,{scale:1.07,yoyo:true,repeat:-1,ease:Sine.easeInOut});

  }
  //Oceanos3();
  function Oceanos3(){
    oceanos3.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Océanos";
    document.getElementById("fuentes").innerHTML="WWF,<br>The Safina Center";
    $("#pagFuentes").prop("href", "datos.html#doceanos3");

    TweenMax.set([$("#ao3corales"),$("#ao3txt2")],{opacity:0});
    TweenMax.set([$("#ao3txt1")],{y:300, opacity:0, transformOrigin:"center bottom"});
    TweenMax.set([$("#ao3red")],{x:0, transformOrigin:"center bottom"});
    TweenMax.set($("#ao3tumble"),{x:390,transformOrigin:"center center"})

    new TimelineMax().to($("#ao3tumble"),3,{repeat:-1,opacity:1, rotation:-360, ease:Power0.easeNone},8)
    .to($("#ao3tumble"),1,{repeat:-1,yoyo:true,y:-80,ease:Sine.easeInOut},8)
    .to($("#ao3tumble"),10,{x:-1760,ease:Power0.easeNone},9);


    new TimelineMax().to($("#ao3corales"),1,{opacity:1})
    .to($("#ao3txt1"),5,{opacity:1,y:0,ease: CustomEase.create("custom", "M0,0 C0.08,0 0.12,0.956 0.206,0.956 0.32,0.956 0.321,0.9 0.4,0.9 0.458,0.9 0.526,0.988 0.61,0.988 0.689,0.988 0.707,0.956 0.798,0.956 0.88,0.956 0.938,0.998 1,1")},"=-1")
    .to($("#ao3red"),12,{x:-2934,ease:Power0.easeNone,onComplete: playOceanos4},1)
    .to($("#ao3mascara"),12,{x:-2934,ease:Power0.easeNone},1)
    .to($("#ao3mascpiso"),12,{x:-2934,ease:Power0.easeNone},1)
    .to($("#ao3txt2"),0.01,{opacity:1,},7.5)
    .to($("#ao3txt1"),0.01,{opacity:0},8.8)
    ;
  }
  // Oceanos4();
  function Oceanos4(){
    oceanos4.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Océanos";
    document.getElementById("fuentes").innerHTML="National Ocean Service (NOAA),<br>United States Environmental<br>Protection Agency (EPA)";
    $("#pagFuentes").prop("href", "datos.html#doceanos4");

    TweenMax.set([$("#ao4txt2"),$("#ao4margen")],{transformOrigin:"center bottom",scale:0.8,opacity:0});
    TweenMax.set($("#ao4vacas > path"),{transformOrigin:"center center",scale:0.5,opacity:0});
    TweenMax.set($("#ao4txt1 > g"),{transformOrigin:"center bottom",scaleY:0.5,opacity:0});
    TweenMax.set($("#ao4riomasc"),{transformOrigin:"center bottom",scaleY:1});
    TweenMax.set($("#ao4poop > g"),{scale:1,y:0,opacity:0});
    TweenMax.set($("#ao4peces > path"),{opacity:0});
    TweenMax.set($("#ao4peces > path"),{transformOrigin:"center center"})

    //poop izquierda
    TweenMax.set($("#ao4poop :nth-child(1)"),{transformOrigin:"right top"});
    //derecha
    TweenMax.set($("#ao4poop :nth-child(2)"),{transformOrigin:"left top"});
    //medio
    TweenMax.set($("#ao4poop :nth-child(3)"),{transformOrigin:"center top"});

    new TimelineMax().staggerTo($("#ao4txt1 > g"),1,{scaleY:1,opacity:1,ease:Back.easeOut},1)
    .staggerTo($("#ao4vacas > path"),0.5,{opacity:1,scale:1,ease:Back.easeOut},0.05,0.1)
    .to($("#ao4riomasc"),4,{scaleY:0,ease:Sine.easeInOut},2.5)
    .to($("#ao4peces > path"),0.5,{opacity:1},"+=1")
    .staggerTo($("#ao4peces > path"),2,{rotationX:180,ease:Back.easeInOut,onComplete:playOceanos5},0.2,"+=3")
    .to($("#ao4txt2"),1,{scale:1,opacity:1,ease:Back.easeOut},10)
    ;
    //timeline escala todo
    new TimelineMax().to($("#ao4anim"),7.5,{transformOrigin:"center top",scale:0.345,ease:Power2.easeIn})
    ;
    //timeline poop
    new TimelineMax().to($("#ao4poop > g"),0.1,{opacity:1});
    new TimelineMax({delay:6}).staggerTo($("#ao4poop > g"),0.5,{opacity:1})
    .staggerTo($("#ao4poop > g"),6,{y:650,ease:Sine.easeInOut},0.05,"-=0.3")
    .to($("#ao4poop > g"),3,{scale:3,opacity:0,ease: CustomEase.create("custom", "M0,0,C0.132,0,0.492,1,1,1")},"-=3")
    .to($("#ao4poopi"),3,{x:-200},"-=3")
    .to($("#ao4poopd"),3,{x:200},"-=3")
    .to($("#ao4poopc"),3,{x:0},"-=3")
    .to($("#ao4poop > g"),0.3,{scale:1})
    ;
    //timeline peces float
    new TimelineMax({delay:4}).staggerTo($("#ao4peces > path"),1,{repeat:6,y:30,yoyo:true,ease:Sine.easeInOut},0.1)
    .to($("#ao4peces"),1,{repeat:-1,opacity:0.5,yoyo:true,ease:Sine.easeInOut},10);


  }
  //Oceanos5();
  function Oceanos5(){
    oceanos5.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Océanos";
    document.getElementById("fuentes").innerHTML="TreeHugger";
    $("#pagFuentes").prop("href", "datos.html#doceanos5");

    TweenMax.set([$("#ao5txt21"),$("#ao5txt22")],{opacity:0});
    TweenMax.set($("#ao5txt21"),{x:300});
    TweenMax.set($("#ao5txt22"),{x:-300});
    TweenMax.set($("#ao5prob > g"),{opacity:0,scale:0.8,transformOrigin:"center center"});
    TweenMax.set($("#ao5circ > path"),{transformOrigin:"center center",opacity:0,scale:3});
    TweenMax.set($("#ao5txt1"),{y:400,opacity:0});

    new TimelineMax().to($("#ao5txt1"),1,{delay:0.5,y:370,opacity:1})
    .to($("#ao5txt1"),1,{delay:1,y:0,ease:Back.easeInOut})
    .staggerTo($("#ao5prob > g"),0.3,{scale:1,opacity:1,ease:Back.easeOut},0.1)
    .staggerTo([$("#ao5txt21"),$("#ao5txt22")],3,{delay:0.1,x:0,ease:Circ.easeOut,onComplete: playDeforestacion1},1)
    .staggerTo([$("#ao5txt21"),$("#ao5txt22")],0.5,{opacity:1},1,"-=3.3")
    .staggerTo($("#ao5circ > path"),1,{scale:1,opacity:0.8,ease: CustomEase.create("custom", "M0,0 C0.542,0.502 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1")},0.1,"-=2")
    .staggerTo($("#ao5circ > path"),1.5,{opacity:0,yoyo:true,repeat:-1,ease:Sine.easeInOut})
    ;
  }
  // Deforestacion1();
  function Deforestacion1(){
    deforestacion1.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Deforestación";
    document.getElementById("fuentes").innerHTML="WWF,<br>National Aeronautics and<br>Space Administration (NASA)";
    $("#pagFuentes").prop("href", "datos.html#ddeforestacion1");

    TweenMax.set([$("#ad1tallTrees > path"), $("#ad1shortTrees > path")], {scale:0, transformOrigin: "bottom center"});
    TweenMax.set($("#ad1iconosPlantas > path"), {skewX:-2.5 ,transformOrigin: "bottom center"});
    new TimelineMax()
    .from($("#ad1sePierde"), 0.5, {scale:0, opacity:0, transformOrigin: "bottom center", ease:Back.easeOut})
    .to($("#ad1sePierde"), 0.5, {y:-400, scale:0.5, ease:Power2.easeInOut}, "+=0.2")
    .staggerTo($("#ad1tallTrees > path"), 0.2, {scale:1, ease:Back.easeOut.config(1)}, 0.1, "-=0.2")
    .staggerTo($("#ad1shortTrees > path"), 0.2, {scale:1, ease:Back.easeOut.config(1)}, 0.1, '-=0.5')
    .from($("#ad1textoKilometros"), 0.4, {y:150, ease:Back.easeOut})
    .to([$("#ad1sePierde"), $("#ad1textoKilometros")], 0.5,  {scale:0, ease:Back.easeIn, transformOrigin: "center center"}, '+=2.5')
    .add('talarArboles')
    .staggerTo($("#ad1tallTrees > path"), 0.8, {rotationX:90, ease: Power4.easeIn}, 0.4, 'talarArboles')
    .staggerTo($("#ad1shortTrees > path"), 0.8, {rotationX:90, ease: Power4.easeIn}, 0.4, '-=2.2')
    .fromTo($("#ad1tractor"), 5, {x:-1850}, {x:1500, ease:Power0.easeNone}, "talarArboles+=0.1")
    .to([$("#ad1sePierde"), $("#ad1textoKilometros")], 0.5,  {scale:0, ease:Back.easeIn, transformOrigin: "center center"})
    .from([$("#ad1podriamosPerder"), $("#ad1plantas")], 0.5, {y:1000, ease:Back.easeOut, transformOrigin: "center center", onComplete:playDeforestacion2}, '-=1.5')
    ;
    new TimelineMax({repeat:-1})
    .from([$("#ad1tractorWheelBack"), $("#ad1tractorWheelFront")], 2, {rotationZ: -360, transformOrigin: "center center", ease:Power0.easeNone})
    ;
    TweenMax.staggerTo($("#ad1iconosPlantas > path"), 1, {repeat:-1,yoyo:true, skewX:2.5, ease:Sine.easeInOut}, 0.2);

  }
  //Deforestacion2();
  function Deforestacion2(){
    deforestacion2.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Deforestación";
    document.getElementById("fuentes").innerHTML="Planetsave,<br>Banco Mundial";
    $("#pagFuentes").prop("href", "datos.html#ddeforestacion2");

    new TimelineMax()
    .from($("#ad2groupSudamerica"), 0.5, {x:600, opacity:0, transformOrigin: "top left", ease:Back.easeOut})
    .from($("#ad280"), 0.5, {x:-600, opacity:0, transformOrigin: "top center", ease:Back.easeOut.config(0.7)}, '+=0.4')
    .from($("#ad2deLaDestruccion"), 0.5, {x:-600, opacity:0, transformOrigin: "top center", ease:Back.easeOut.config(0.7)}, '+=0.8')
    .to($("#ad2groupSudamerica"), 0.5, {scale:2, transformOrigin: "top left", ease:Power2.easeInOut}, '+=1')
    .from($("#ad2areasDestruidas"), 1, {opacity:0, ease:Power2.easeInOut})
    .from($("#ad2seDebe"), 0.5, {x:-600, opacity:0, transformOrigin: "top center", ease:Back.easeOut.config(0.7)}, '+=0.4')
    .staggerFrom($("#ad2vacas > path"), 0.2, {scale:0, transformOrigin: "center center", ease:Back.easeOut,onComplete:playDeforestacion3}, 0.1, '+=1')

    ;
  }
  //Deforestacion3();
  function Deforestacion3(){
    deforestacion3.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Deforestación";
    document.getElementById("fuentes").innerHTML="Rainforest Rescue,<br>International Institute for Applied<br>Systems Analysis (IIASA)";
    $("#pagFuentes").prop("href", "datos.html#ddeforestacion3");

    new TimelineMax()
    .from($("#ad3iconoMundo"), 0.5, {scale:0, transformOrigin: "center center", ease:Back.easeOut})
    .from($("#ad3enElMundo"), 0.5, {x:-100, opacity:0, transformOrigin: "top left", ease:Back.easeOut})
    .from($("#ad3seUsan18"), 0.5, {y:-100, opacity:0, ease:Back.easeOut}, '+=0.3')
    .from($("#ad3paraProducir"), 0.5, {y:-100, opacity:0, ease:Back.easeOut}, '+=0.5')
    .to($("#ad3maskBarraAceite"), 1.5, {scaleY:0, transformOrigin: "top center", ease:Power2.easeInOut}, '+=0.5')
    .from($("#ad3iconoSudamerica"), 0.5, {scale:0, transformOrigin: "center center", ease:Back.easeOut}, '+=1')
    .from($("#ad3tanSoloEn"), 0.5, {x:100, opacity:0, transformOrigin: "top left", ease:Back.easeOut})
    .from($("#ad3seHaDestruido"), 0.5, {y:100, opacity:0, ease:Back.easeOut}, '+=0.3')
    .from($("#ad3debidoA"), 0.5, {y:100, opacity:0, ease:Back.easeOut}, '+=1')
    .to($("#ad3maskBarraGanaderia"), 1.5, {scaleY:0, transformOrigin: "top center", ease:Power2.easeInOut,onComplete:playDeforestacion4}, '+=1')
    ;
  }
  // Deforestacion4();
  function Deforestacion4(){
    deforestacion4.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Deforestación";
    document.getElementById("fuentes").innerHTML="FAO,<br>Science of the Total Environment Journal";
    $("#pagFuentes").prop("href", "datos.html#ddeforestacion4");

    TweenMax.set($("#ad4laTalaDeBosques"), {y:-300});
    TweenMax.set($("#ad4esLaPrincipal"), {y:300});
    TweenMax.set($("#ad4maskCultivo"), {scaleX:0, transformOrigin: "top right"});
    TweenMax.set($("#ad4maskBosque"), {scaleX:0});
    TweenMax.set($("#ad4tractores"), {x:-350});
    TweenMax.set($("#ad4ganado"), {x:350});
    TweenMax.set($("#ad4cultivo > g"), {scale:0, transformOrigin: "bottom center"});
    TweenMax.set($("#ad4bosque > path"), {y:-800, opacity:0});


    //timeline principal
    new TimelineMax()
    .staggerTo($("#ad4bosque > path"), 0.1, {y:0, opacity:1, ease:Power2.easeInOut}, 0.05)
    .to($("#ad4laTalaDeBosques"), 1, {y:0, transformOrigin: "center center", ease:Bounce.easeOut})
    .to($("#ad4tractores"), 4, {x:1900, ease:Power0.easeNone}, '+=1.5')
    .to($("#ad4maskBosque"), 2, {scaleX:1, ease:Power0.easeNone}, '-=3.1')
    .staggerTo($("#ad4cultivo > g"), 0.05, {scale:1}, 0.025, '-=2.5')
    .to($("#ad4ganado"), 4, {x:-1900, ease:Power0.easeNone})
    .to($("#ad4maskCultivo"), 2, {scaleX:1, ease:Power0.easeNone}, '-=3.1')
    .to($("#ad4esLaPrincipal"), 0.5, {y:0, transformOrigin: "center center", ease:Bounce.easeOut,onComplete:playRecursos1})
    .add(repeatAnimation, '+=1')
    ;

    new TimelineMax({repeat:-1})
    .from([$("#ad4tractorWheelBack"), $("#ad4tractorWheelFront"), $("#ad4tractorWheelBack1"), $("#ad4tractorWheelFront1"), $("#ad4tractorWheelBack2"), $("#ad4tractorWheelFront2")], 2, {rotationZ: -360, transformOrigin: "center center", ease:Power0.easeNone})
    ;

    function repeatAnimation(){
      TweenMax.set($("#ad4maskCultivo"), {scaleX:0, transformOrigin: "top right"});
      TweenMax.set($("#ad4maskBosque"), {scaleX:0});
      TweenMax.set($("#ad4tractores"), {x:-350});
      TweenMax.set($("#ad4ganado"), {x:350});
      TweenMax.set($("#ad4cultivo > g"), {scale:0, transformOrigin: "bottom center"});
      TweenMax.set($("#ad4bosque"), {x:1500});

      //timeline repetido
      var timelineRepeat= new TimelineMax({repeat: -1});
      timelineRepeat.timeScale(3);
      timelineRepeat.staggerTo($("#ad4bosque"), 2, {x:0, ease:Power2.easeInOut})
      .to($("#ad4tractores"), 4, {x:1900, ease:Power0.easeNone})
      .to($("#ad4maskBosque"), 2, {scaleX:1, ease:Power0.easeNone}, '-=3.1')
      .staggerTo($("#ad4cultivo > g"), 0.05, {scale:1}, 0.025, '-=2.5')
      .to($("#ad4ganado"), 4, {x:-1900, ease:Power0.easeNone})
      .to($("#ad4maskCultivo"), 2, {scaleX:1, ease:Power0.easeNone}, '-=3.1')
      ;

    }
  }
  // Recursos1();
  function Recursos1(){
    recursos1.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Gasto de Recursos";
    document.getElementById("fuentes").innerHTML="International Livestock Research Institute,<br>Council for Agricultural Science and Technology";
    $("#pagFuentes").prop("href", "datos.html#drecursos1");

    TweenMax.set([$('#ar1iconoTierra'), $('#ar1fillTierra')], {y:800, opacity:0});
    TweenMax.set([$('#ar1aPesar'), $('#ar1elGanado'), $('#ar1consume')], {y:-800, opacity:0});
    TweenMax.set([$('#ar1fillHumano'), $('#ar1iconoHumano')], {scale:0, transformOrigin: "center center"});
    TweenMax.set([$('#ar1maskFillTierra'), $('#ar1maskFillHumano')], {scaleY:1})

    new TimelineMax()
    .to([$('#ar1iconoTierra'), $('#ar1fillTierra')], 0.5, {y:0, opacity:1, ease:Power2.easeOut})
    .to($('#ar1elGanado'), 0.5, {y:0, opacity:1, ease:Power2.easeOut})
    .add(count30)
    .to($('#ar1maskFillTierra'), 1, {scaleY:0, ease:Power2.easeOut})
    .to($('#ar1consume'), 0.5, {y:0, opacity:1, ease:Power2.easeOut}, '+=2')
    .to($('#ar1aPesar'), 0.5, {y:0, opacity:1, ease:Power2.easeOut}, '+=1.5')
    .to([$('#ar1aPesar'), $('#ar1elGanado'), $('#ar1consume')], 0.5, {x:-200, ease:Back.easeOut})
    .to([$('#ar1iconoTierra'), $('#ar1fillTierra')], 0.5, {x:250, ease:Back.easeOut}, '-=0.5')
    .to([$('#ar1fillHumano'), $('#ar1iconoHumano')], 0.5, {scale:1, ease:Back.easeOut})
    .add(count17)
    .to($('#ar1maskFillHumano'), 1, {scaleY:0, ease:Power2.easeOut,onComplete:playRecursos2})
    ;

    function count30(){
      var percent_number_step = $.animateNumber.numberStepFactories.append('%');

      $('#numero30').animateNumber(
        {
          number: 30,
          easing: 'easeInOutQuart',
          numberStep: percent_number_step
        },
        1000
      );
    }
    function count17(){
      var percent_number_step = $.animateNumber.numberStepFactories.append('%');

      $('#numero17').animateNumber(
        {
          number: 17,
          easing: 'easeInOutQuart',
          numberStep: percent_number_step
        },
        1000
      );
    }
  }
  //Recursos2();
  function Recursos2(){
    recursos2.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Gasto de Recursos";
    document.getElementById("fuentes").innerHTML="EarthSave International,<br>Proceedings of the National Academy of Sciences";
    $("#pagFuentes").prop("href", "datos.html#drecursos2");

    TweenMax.set($('#ar2GrupoEscaleable'), {scale:2.5});
    TweenMax.set($('#ar2alAno'), {scaleY:0, opacity:0, transformOrigin: "top center"});
    TweenMax.set($('#ar2647m'), {y:-100, opacity:0});
    TweenMax.set($('#ar2vegano'), {scaleX:0, opacity:0, transformOrigin: "top left"});
    TweenMax.set($('#ar2rectVegano'), {scaleY:0, transformOrigin: "bottom center"});
    TweenMax.set([$('#ar2rectVegetariano'), $('#ar2vegetariano')], {scaleY:0, transformOrigin: "top center"});
    TweenMax.set($('#ar2seNecesita'), {x:-500});
    TweenMax.set($('#ar2rectOmni'), {scaleX:0, transformOrigin: "bottom left"});
    TweenMax.set([$('#ar2y18Veces'), $('#ar2omni')], {y:-200, opacity:0});
    new TimelineMax()
    .to($('#ar2alAno'), 0.5, {scaleY:1, opacity:1, ease:Power2.easeInOut})
    .to($('#ar2647m'), 0.4, {y:0, opacity:1, ease:Power2.easeInOut}, '+=1')
    .to($('#ar2vegano'), 0.4, {scaleX:1, opacity:1, ease:Power2.easeInOut}, '+=1.5')
    .to($('#ar2rectVegano'), 0.5, {scaleY:1, ease:Back.easeOut})
    .to($('#ar2GrupoEscaleable'), 1, {scale:1.4, ease:Power2.easeInOut}, '+=1.5')
    .to($('#ar2rectVegetariano'), 0.8, {scaleY:1, ease:Back.easeOut.config(0.6)}, '-=0.5')
    .to($('#ar2vegetariano'), 0.5, {scaleY:1, ease:Back.easeOut.config(0.6)})
    .to($('#ar2seNecesita'), 0.5, {x:0, ease:Back.easeOut.config(0.6)})
    .to($('#ar2GrupoEscaleable'), 1, {scale:1, ease:Power2.easeInOut}, '+=2')
    .to($('#ar2rectOmni'), 0.8, {scaleX:1, ease:Back.easeOut.config(0.6)}, '-=0.5')
    .staggerTo([$('#ar2y18Veces'), $('#ar2omni')], 0.5, {y:0, opacity:1, ease:Power2.easeInOut,onComplete:playRecursos3}, 0.5)
    ;

  }
  // Recursos3();
  function Recursos3(){
    recursos3.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Gasto de Recursos";
    document.getElementById("fuentes").innerHTML="Truth or Drought,<br>The Water Footprint Network";
    $("#pagFuentes").prop("href", "datos.html#drecursos3");

    TweenMax.set([$('#ar3grifo'), $('#ar3iconosVegano > g')], {x:-1000});
    TweenMax.set([$('#ar3gotaVegano'), $('#ar3gotaVege'), $('#ar3gotaOmni')], {scale:0, transformOrigin:"top center"});
    TweenMax.set($('#ar3paraUna'), {y:-300, opacity:0});
    TweenMax.set([$('#ar3vegano'), $('#ar3vege'), $('#ar3omni')], {scale:0, transformOrigin:"top left"});
    TweenMax.set($('#ar3seUsa'), {y:-100, opacity:0});
    TweenMax.set($('#ar3galones'), {y:-300, opacity:0});
    TweenMax.set($('#ar3agua'), {scale:0, transformOrigin:"top right"});
    TweenMax.set($('#ar3alDia'), {y:-100, opacity:0});
    TweenMax.set([$('#ar3iconosOmni > g'), $('#ar3iconosVege > g')], {scale:0, transformOrigin: "center center"});
    TweenMax.set($('#ar3omni'), {x:-50});

    new TimelineMax()
    .to($('#ar3grifo'), 0.5, {x:0, ease:Back.easeOut})
    .staggerTo($('#ar3iconosVegano > g'), 0.3, {x:0, ease:Power2.easeInOut}, 0.2, '-=0.2')
    .to($('#ar3paraUna'), 0.5, {y:0, opacity:1, ease:Back.easeOut})
    .to($('#ar3vegano'), 0.5, {scale:1, ease:Power2.easeInOut})
    .to($('#ar3seUsa'), 0.5, {y:0, opacity:1, ease:Back.easeOut})
    .to($('#ar3gotaVegano'), 0.5, {scale:1})
    .to($('#ar3galones'), 0.5, {y:0, opacity:1, ease:Back.easeOut})
    .to($('#ar3agua'), 0.5, {scale:1, ease:Power2.easeInOut})
    .to($('#ar3alDia'), 0.5, {y:0, opacity:1, ease:Back.easeOut})
    .to($('#ar3gotaVegano'), 0.5, {y:900, ease:Power4.easeIn})
    .staggerTo($('#ar3iconosVegano > g'), 0.5, {scale:0, ease:Back.easeIn, transformOrigin: "center center"}, 0.2)
    .staggerTo($('#ar3iconosVege > g'), 0.5, {scale:1, ease:Back.easeOut}, 0.2)
    .to($('#ar3vegano'), 0.5, {scale:0, ease:Back.easeIn, transformOrigin:"top right"})
    .to($('#ar3vege'), 0.5, {scale:1, ease:Power2.easeInOut, transformOrigin:"top left", smoothOrigin:true}, '-=0.25')
    .to([$('#ar3paraUna'), $('#ar3vege'), $('#ar3seUsa')], 0.5, {x:-50, ease:Power2.easeInOut})
    .to([$('#ar3alDia'), $('#ar3galones'), $('#ar3agua')], 0.5, {x:50, ease:Power2.easeInOut}, '-=0.5')
    .to($('#ar3gotaVege'), 0.5, {scale:1})
    .to($('#ar3gotaVege'), 0.5, {y:900, ease:Power4.easeIn}, '+=1')
    .staggerTo($('#ar3iconosVege > g'), 0.5, {scale:0, ease:Back.easeIn}, 0.2)
    .staggerTo($('#ar3iconosOmni > g'), 0.5, {scale:1, ease:Back.easeOut}, 0.2)
    .to($('#ar3vege'), 0.5, {scale:0, ease:Back.easeIn, transformOrigin:"top right"})
    .to($('#ar3omni'), 0.5, {scale:1, ease:Power2.easeInOut, transformOrigin:"top left", smoothOrigin:true}, '-=0.25')
    .to([$('#ar3paraUna'), $('#ar3omni'), $('#ar3seUsa')], 0.5, {x:-150, ease:Power2.easeInOut})
    .to([$('#ar3alDia'), $('#ar3galones'), $('#ar3agua')], 0.5, {x:150, ease:Power2.easeInOut}, '-=0.5')
    .to($('#ar3gotaOmni'), 0.5, {scale:1, onComplete:playRecursos4})
    .to($("#ar3gotaOmni"),1,{repeat:-1,yoyo:true,scale:0.95,ease:Sine.easeInOut})
    ;
    new TimelineMax()
    .staggerTo($('#ar3iconosVegano > g'),1,{repeat:-1,yoyo:true,y:-20,ease:Sine.easeInOut}, 0.2, 0)
    .staggerTo($('#ar3iconosVege > g'),1,{repeat:-1,yoyo:true,y:-20,ease:Sine.easeInOut}, 0.2, 1)
    .staggerTo($('#ar3iconosOmni > g'),1,{repeat:-1,yoyo:true,y:-20,ease:Sine.easeInOut}, 0.2, 2)
    ;
  }
  // Recursos4();
  function Recursos4(){
    recursos4.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Gasto de Recursos";
    document.getElementById("fuentes").innerHTML="Worldwatch Institute";
    $("#pagFuentes").prop("href", "datos.html#drecursos4");

    TweenMax.set([$('#ar41Caloria'), $('#ar4proteinaAnimal'), $('#ar4usa'), $('#ar4combustibles'), $('#ar4que1Caloria'), $('#ar4granos')], {rotationX:-90, x:-400});
    TweenMax.set([$('#ar4iconoCarne'), $('#ar4iconoGranos'), $('#ar48gotas > g'), $('#ar41gota')], {scale:0, transformOrigin: "center center"});
    TweenMax.set([$('#ar4igualCarne'), $('#ar4igualGranos')], {scaleX:0, transformOrigin: "top right"});
    new TimelineMax()
    .staggerTo([$('#ar41Caloria'), $('#ar4proteinaAnimal'), $('#ar4usa'), $('#ar4combustibles'), $('#ar4que1Caloria'), $('#ar4granos')], 1, {rotationX:0, transformPerspective: 100, transformOrigin: "top center", smoothOrigin: true, ease: Back.easeOut.config(4)}, 0.8)
    .to([$('#ar41Caloria'), $('#ar4proteinaAnimal'), $('#ar4usa'), $('#ar4combustibles'), $('#ar4que1Caloria'), $('#ar4granos')], 0.8, {x:0, ease: Back.easeInOut})
    .to([$('#ar4iconoCarne'), $('#ar4iconoGranos')], 0.5, {scale:1, ease: Back.easeOut}, '-=0.4')
    .to([$('#ar4igualCarne'), $('#ar4igualGranos')], 0.5, {scaleX:1, ease: Power4.easeInOut})
    .staggerTo($('#ar41gota'), 0.4, {scale:1, ease: Back.easeOut})
    .staggerTo($('#ar48gotas > g'), 0.4, {scale:1, ease: Back.easeOut,onComplete:playExtincion1}, 0.2, '-=0.4');
  }
  // Extincion1();
  function Extincion1(){
    extincion1.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Extinción";
    document.getElementById("fuentes").innerHTML="National Geographic,<br>Center for Biological Diversity";
    $("#pagFuentes").prop("href", "datos.html#dextincion1");

    TweenMax.set($("#ae1margen"),{opacity:0});

    TweenMax.set($("#ae1txt1"),{opacity:0, y:300,transformOrigin:"left bottom"});
    TweenMax.set($("#ae1animales > g"),{transformOrigin:"center bottom",opacity:0, y:-300});
    TweenMax.set($("#ae1td"),{transformOrigin:"center center",y:-50,opacity:0,scale:5});
    TweenMax.set($("#ae1dino"),{transformOrigin:"center bottom"});
    TweenMax.set($("#ae1txt3"),{opacity:0, scale:5,transformOrigin:"center center"});
    TweenMax.set($("#ae1human > g"),{y:-300,opacity:0});

    new TimelineMax().to([$("#ae1animales > g"),$("#ae1txt1")],0.5,{opacity:1})
    .to([$("#ae1animales > g"),$("#ae1txt1")],0.8,{y:0,ease:Back.easeOut},"-=0.5")
    .to($("#ae1txt1"),1,{x:-265,y:220,scale:0.805,ease:Power2.easeInOut},"+=1")
    .to($("#ae1td"),0.8,{scale:0.9,opacity:1,ease:Power4.easeOut})
    .to($("#ae1dino"),1,{rotationX:90,ease:Bounce.easeOut},"+=1.5")
    .to($("#ae1txt2"),1,{transformOrigin:"bottom right",x:270,y:285,scale:0.77,ease:Power2.easeInOut},"+=0.5")
    .to($("#ae1txt3"),0.8,{scale:1,opacity:1,ease:Power4.easeOut})
    .staggerTo($("#ae1animales > g"),1,{rotationX:90,ease:Bounce.easeOut},0.1)
    .staggerTo($("#ae1human > g"),0.5,{opacity:1,y:0,ease:Power4.easeIn,onComplete:playExtincion2},0.1,"-=1.5")
    ;
  }
  //Extincion2();
  function Extincion2(){
    extincion2.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Extinción";
    document.getElementById("fuentes").innerHTML="WWF,<br>Oppenlander, Richard.";
    $("#pagFuentes").prop("href", "datos.html#dextincion2");

    TweenMax.set($("#ae2txt1 > g"),{transformOrigin:"center center",opacity:0,x:300});
    TweenMax.set($("#ae2crops > g"),{transformOrigin:"center bottom",scale:0});
    TweenMax.set($("#ae2arboles > path"),{transformOrigin:"center bottom",scale:0});
    TweenMax.set($("#ae2coral > path"),{transformOrigin:"center top",scale:0});


    new TimelineMax({delay:0.5})
    .to([$("#ae2coral > path"),$("#ae2arboles > path")],1,{scale:1,opacity:1,ease:Back.easeOut})
    .staggerTo($("#ae2txt1 > g"),1,{x:0,scale:1,opacity:1,ease:Back.easeOut},0.5)
    .staggerTo($("#ae2coral > path"),0.3,{rotationX:90},0.3)
    .staggerTo($("#ae2arboles > path"),0.2,{rotationX:-90},0.05,"-=1.6")
    .staggerTo($("#ae2crops > g"),0.2,{scale:1},0.05,"-=1.5")
    .to($("#ae2vaca"),8,{x:2447,ease:Power0.easeNone,onComplete:playExtincion3},5)
    ;

    //tumbleweed
    TweenMax.set($("#ae2tumble"),{y:20,transformOrigin:"center center"})
    new TimelineMax({delay:5}).to($("#ae2tumble"),4,{repeat:-1,opacity:1, rotation:360, ease:Power0.easeNone})
    .to($("#ae2tumble"),0.8,{repeat:-1,yoyo:true,y:-30,ease:Sine.easeInOut},0)
    .to($("#ae2tumble"),8,{x:-2155,ease:Power0.easeNone},0);
  }
  // Extincion3();
  function Extincion3(){
    extincion3.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Extinción";
    document.getElementById("fuentes").innerHTML="Machovina, Feeley, y Ripple.,<br>Take Extinction off your plate";
    $("#pagFuentes").prop("href", "datos.html#dextincion3");

    TweenMax.set([$("#ae3color"),$("#ae3outline")],{x:-90,transformOrigin:"center center",opacity:0,scale:0.7});
    TweenMax.set([$("#ae3txt1"),$("#ae3txt2"),$("#ae3txt3")],{rotationX:90,transformOrigin: "top center",smoothOrigin: true});
    TweenMax.set([$("#ae3txt4"),$("#ae3txt6")],{x:-300,transformOrigin: "left center",smoothOrigin: true, opacity:0});
    TweenMax.set([$("#ae3txt5"),$("#ae3txt7")],{x:300,transformOrigin: "left center",smoothOrigin: true,opacity:0});

    new TimelineMax()
    .staggerTo([$("#ae3txt1"),$("#ae3txt2"),$("#ae3txt3")],1.3,{rotationX:0,ease: Back.easeOut.config(4)},0.5)
    .staggerTo([$("#ae3txt4"),$("#ae3txt5"),$("#ae3txt6"),$("#ae3txt7")],1,{x:0,ease: Back.easeOut,opacity:1},0.5)
    .to([$("#ae3txt1"),$("#ae3txt2"),$("#ae3txt3")],0.1,{transformOrigin: "left center",smoothOrigin: true})
    .to($("#ae3txt > g"),0.5,{x:-200},5)
    .to($("#ae3txt2"),0.5,{scale:0.95},5)
    .to($("#ae3txt3"),0.5,{scale:0.9},5)
    .to($("#ae3txt4"),0.5,{scale:0.85},5)
    .to($("#ae3txt5"),0.5,{scale:0.88},5)
    .to($("#ae3txt6"),0.5,{scale:0.95},5)
    .to([$("#ae3color"),$("#ae3outline")],1,{opacity:1,scale:1,ease:Back.easeOut,onComplete:playPuertas},5)
    ;

    new TimelineMax({delay:6}).to($("#ae3color"),2,{yoyo:true,repeat:-1,opacity:0,ease:Sine.easeOut})
    ;
  }
  // Puertas();
  function Puertas(){

    var activarsalud = true;
    var activaretica = true;
    var tlp1 = new TimelineMax();
    var tlp2 = new TimelineMax();
    escogeOtraPuerta.style.visibility = "visible";
    puertasalud.style.visibility = "visible";
    puertaetica.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="";
    document.getElementById("fuentes").innerHTML="";

    TweenMax.set([$("#lyr_txtsalud"), $("#lyr_txtetica")], {rotationX: 90,opacity: 1,  transformOrigin: "center center",smoothOrigin: true});
    TweenMax.set($("#escogeOtraPuerta"), {opacity:0});

    TweenMax.set([$("#puertasalud"), $("#puertaetica")], {transformPerspective: 400, y:200,opacity:0});
    new TimelineMax().to([$("#puertasalud"), $("#puertaetica")],1, {opacity:1,ease:Power2.easeOut})
    .to([$("#puertasalud"), $("#puertaetica")],2, {y:0,ease:Elastic.easeOut.config(1, 0.3)}, '-=1')
    .to($("#escogeOtraPuerta"), 1, {opacity:1, ease:Power2.easeInOut}, '-=1')
    ;

    $("#puertasalud").hover(over_salud, out_salud);
    $("#puertaetica").hover(over_etica, out_etica);
    $("#puertasalud").click(function() {
      if (activarsalud == true) {
        activarmedio = false;
        new TimelineMax().set($("#puertasalud"), {scale: 1})
        .add('desaparecer')
        .to($("#lyr_txtsalud"),0.1,{rotationX:0})
        .to($("#puertasalud"), 1, {transformOrigin: "center left",rotationY: 90, ease: CustomEase.create("custom", "M0,0 C0.192,0 0.205,-0.133 0.406,-0.088 0.502,-0.066 0.624,0.252 1,1")})
        .to($("#puertaetica"), 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 1, {opacity:0, ease:Power2.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 0, {onComplete: startSalud}, '+=0.5');

      }
    });
    $("#puertaetica").click(function() {
      if (activaretica == true) {
        activarsalud = false;
        new TimelineMax().set($("#puertaetica"), {scale: 1})
        .add('desaparecer')
        .to($("#lyr_txtetica"),0.1,{rotationX:0})
        .to($("#puertaetica"), 1, {transformOrigin: "center left",rotationY: 90, ease: CustomEase.create("custom", "M0,0 C0.192,0 0.205,-0.133 0.406,-0.088 0.502,-0.066 0.624,0.252 1,1")})
        .to($("#puertasalud"), 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 1, {opacity:0, ease:Power2.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 0, {onComplete: startEtica}, '+=0.5');
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

    function over_etica() {
      console.log("over");
      TweenMax.to($("#puertaetica"), 0.2, {scale: 1.05,ease: Power2.easeInOut})
      tlp2.to($("#lyr_iconoetica"), 0.1, {rotationX: 90,transformOrigin: "center center"})
      .to($("#lyr_txtetica"), 0.1, {rotationX: 0});
    }
    function out_etica() {
      console.log("out");
      TweenMax.to($("#puertaetica"), 0.2, {scale: 1,ease: Power2.easeInOut});
      tlp2.to($("#lyr_txtetica"), 0.1, {rotationX: 90})
      .to($("#lyr_iconoetica"), 0.1, {rotationX: 0,transformOrigin: "center center"});
    }
    function startSalud(){
      window.open("salud.html", "_self");
    }
    function startEtica(){
      window.open("etica.html", "_self");
    }

  }
  //funcionesInteractivas
  function playGases2(){
    console.log('completado');
    $("body").click(function(){
      if (Gases2playing == false) {
        Gases2playing = true;
        Gases2();
        gases1.style.visibility = "hidden";
      }
    });
  }
  function playGases3(){
    console.log('completado');
    $("body").click(function(){
      if (Gases3playing == false) {
        Gases3playing = true;
        Gases3();
        gases2.style.visibility = "hidden";
      }
    });
  }
  function playGases4(){
    console.log('completado');
    $("body").click(function(){
      if (Gases4playing == false) {
        Gases4playing = true;
        Gases4();
        gases3.style.visibility = "hidden";
      }
    });
  }
  function playOceanos1(){
    console.log('completado');
    $("body").click(function(){
      if (Oceanos1playing == false) {
        Oceanos1playing = true;
        Oceanos1();
        gases4.style.visibility = "hidden";
      }
    });
  }
  function playOceanos2(){
    console.log('completado');
    $("body").click(function(){
      if (Oceanos2playing == false) {
        Oceanos2playing = true;
        Oceanos2();
        oceanos1.style.visibility = "hidden";
      }
    });
  }
  function playOceanos3(){
    console.log('completado');
    $("body").click(function(){
      if (Oceanos3playing == false) {
        Oceanos3playing = true;
        Oceanos3();
        oceanos2.style.visibility = "hidden";
      }
    });
  }
  function playOceanos4(){
    console.log('completado');
    $("body").click(function(){
      if (Oceanos4playing == false) {
        Oceanos4playing = true;
        Oceanos4();
        oceanos3.style.visibility = "hidden";
      }
    });
  }
  function playOceanos5(){
    console.log('completado');
    $("body").click(function(){
      if (Oceanos5playing == false) {
        Oceanos5playing = true;
        Oceanos5();
        oceanos4.style.visibility = "hidden";
      }
    });
  }
  function playDeforestacion1(){
    console.log('completado');
    $("body").click(function(){
      if (Deforestacion1playing == false) {
        Deforestacion1playing = true;
        Deforestacion1();
        oceanos5.style.visibility = "hidden";
      }
    });
  }
  function playDeforestacion2(){
    console.log('completado');
    $("body").click(function(){
      if (Deforestacion2playing == false) {
        Deforestacion2playing = true;
        Deforestacion2();
        deforestacion1.style.visibility = "hidden";
      }
    });
  }
  function playDeforestacion3(){
    console.log('completado');
    $("body").click(function(){
      if (Deforestacion3playing == false) {
        Deforestacion3playing = true;
        Deforestacion3();
        deforestacion2.style.visibility = "hidden";
      }
    });
  }
  function playDeforestacion4(){
    console.log('completado');
    $("body").click(function(){
      if (Deforestacion4playing == false) {
        Deforestacion4playing = true;
        Deforestacion4();
        deforestacion3.style.visibility = "hidden";
      }
    });
  }
  function playRecursos1(){
    console.log('completado');
    $("body").click(function(){
      if (Recursos1playing == false) {
        Recursos1playing = true;
        Recursos1();
        deforestacion4.style.visibility = "hidden";
      }
    });
  }
  function playRecursos2(){
    console.log('completado');
    $("body").click(function(){
      if (Recursos2playing == false) {
        Recursos2playing = true;
        Recursos2();
        recursos1.style.visibility = "hidden";
      }
    });
  }
  function playRecursos3(){
    console.log('completado');
    $("body").click(function(){
      if (Recursos3playing == false) {
        Recursos3playing = true;
        Recursos3();
        recursos2.style.visibility = "hidden";
      }
    });
  }
  function playRecursos4(){
    console.log('completado');
    $("body").click(function(){
      if (Recursos4playing == false) {
        Recursos4playing = true;
        Recursos4();
        recursos3.style.visibility = "hidden";
      }
    });
  }
  function playExtincion1(){
    console.log('completado');
    $("body").click(function(){
      if (Extincion1playing == false) {
        Extincion1playing = true;
        Extincion1();
        recursos4.style.visibility = "hidden";
      }
    });
  }
  function playExtincion2(){
    console.log('completado');
    $("body").click(function(){
      if (Extincion2playing == false) {
        Extincion2playing = true;
        Extincion2();
        extincion1.style.visibility = "hidden";
      }
    });
  }
  function playExtincion3(){
    console.log('completado');
    $("body").click(function(){
      if (Extincion3playing == false) {
        Extincion3playing = true;
        Extincion3();
        extincion2.style.visibility = "hidden";
      }
    });
  }
  function playPuertas(){
    console.log('completado');
    $("body").click(function(){
      if (Puertasplaying == false) {
        Puertasplaying = true;
        Puertas();
        extincion3.style.visibility = "hidden";
      }
    });
  }

});
