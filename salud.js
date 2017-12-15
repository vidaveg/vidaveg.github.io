$(document).ready(function() {

  CSSPlugin.defaultSmoothOrigin = true;

  var Corazon2playing = false;
  var Corazon3playing = false;
  var Cancer1playing = false;
  var Cancer2playing = false;
  var Cancer3playing = false;
  var Cancer4playing = false;
  var Diabetes1playing = false;
  var Diabetes2playing = false;
  var Diabetes3playing = false;
  var Diabetes4playing = false;
  var Otros1playing = false;
  var Otros2playing = false;
  var Puertasplaying = false;

  Corazon1();
  Titulo();
  // Diabetes1();

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

  //Animaciones
  function Puertas(){

    var activarmedio = true;
    var activaretica = true;
    var tlp1 = new TimelineMax();
    var tlp2 = new TimelineMax();
    escogeOtraPuerta.style.visibility = "visible";
    puertamedio.style.visibility = "visible";
    puertaetica.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="";
    document.getElementById("fuentes").innerHTML="";

    TweenMax.set([$("#lyr_txtmedio"), $("#lyr_txtetica")], {rotationX: 90,opacity: 1,  transformOrigin: "center center",smoothOrigin: true});
    TweenMax.set($("#escogeOtraPuerta"), {opacity:0});

    TweenMax.set([$("#puertamedio"), $("#puertaetica")], {transformPerspective: 400, y:200,opacity:0});
    new TimelineMax().to([$("#puertamedio"), $("#puertaetica")],1, {opacity:1,ease:Power2.easeOut})
    .to([$("#puertamedio"), $("#puertaetica")],2, {y:0,ease:Elastic.easeOut.config(1, 0.3)}, '-=1')
    .to($("#escogeOtraPuerta"), 1, {opacity:1, ease:Power2.easeInOut}, '-=1')
    ;

    $("#puertamedio").hover(over_medio, out_medio);
    $("#puertaetica").hover(over_etica, out_etica);
    $("#puertamedio").click(function() {
      if (activarmedio == true) {
        activaretica = false;
        new TimelineMax().set($("#puertamedio"), {scale: 1})
        .add('desaparecer')
        .to($("#lyr_txtmedio"),0.1,{rotationX:0})
        .to($("#puertamedio"), 1, {transformOrigin: "center left",rotationY: 90, ease: CustomEase.create("custom", "M0,0 C0.192,0 0.205,-0.133 0.406,-0.088 0.502,-0.066 0.624,0.252 1,1")})
        .to($("#puertaetica"), 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 1, {opacity:0, ease:Power2.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 0, {onComplete: startMedio}, '+=0.5');

      }
    });
    $("#puertaetica").click(function() {
      if (activaretica == true) {
        activarmedio = false;
        new TimelineMax().set($("#puertaetica"), {scale: 1})
        .add('desaparecer')
        .to($("#lyr_txtetica"),0.1,{rotationX:0})
        .to($("#puertaetica"), 1, {transformOrigin: "center left",rotationY: 90, ease: CustomEase.create("custom", "M0,0 C0.192,0 0.205,-0.133 0.406,-0.088 0.502,-0.066 0.624,0.252 1,1")})
        .to($("#puertamedio"), 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 1, {opacity:0, ease:Power2.easeInOut}, 'desaparecer')
        .to($("#escogeOtraPuerta"), 0, {onComplete: startEtica}, '+=0.5');
      }
    });
    function over_medio() {
      console.log("over");
      TweenMax.to($("#puertamedio"), 0.2, {scale: 1.05,ease: Power2.easeInOut})
      tlp1.to($("#lyr_iconomedio"), 0.1, {rotationX: 90,transformOrigin: "center center"})
      .to($("#lyr_txtmedio"), 0.1, {rotationX: 0});
    }
    function out_medio() {
      console.log("out");
      TweenMax.to($("#puertamedio"), 0.2, {scale: 1,ease: Power2.easeInOut});
      tlp1.to($("#lyr_txtmedio"), 0.1, {rotationX: 90})
      .to($("#lyr_iconomedio"), 0.1, {rotationX: 0,transformOrigin: "center center"});
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
    function startMedio(){
      window.open("ambiente.html", "_self");
    }
    function startEtica(){
      window.open("etica.html", "_self");
    }

  }

  function Otros2(){
    otros2.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Otros";
    document.getElementById("fuentes").innerHTML="Academy of Nutrition and Dietetics";
    $("#pagFuentes").prop("href", "datos.html#dotros2");

    TweenMax.set($("#so2txt1"),{y:210});
    TweenMax.set($("#so2plato"),{transformOrigin:"center center",scale:5,opacity:0});
    TweenMax.set($("#so2fork"),{y:-1000});
    TweenMax.set($("#so2txtgiros"),{transformOrigin:"center center",rotation:100});
    TweenMax.set($("#so2txtgiroi"),{transformOrigin:"center center",rotation:100});

    TweenMax.set([$("#so2mascarai"),$("#so2mascaras"),$("#so2txtgiroi"),$("#so2txtgiros")],{opacity:0});
    TweenMax.set([$("#so2tc1"),$("#so2tc3")],{opacity:0,x:-300});
    TweenMax.set($("#so2tc2"),{opacity:0,x:300});
    TweenMax.set($(".so2to"),{opacity:0});

    new TimelineMax().to($("#so2txt1"),0.5,{y:118,ease:Back.easeOut})
    .to($("#so2txt1"),0.5,{delay:0.5,y:0,ease:Back.easeOut},'+=0.8')
    .to($("#so2txt1"),0.5,{opacity:0,ease:Power2.easeInOut},'+=1.5')
    .to($("#so2plato"),0.5,{scale:1,opacity:1, ease:Power2.easeInOut},'-=0.5')
    .to([$("#so2mascarai"),$("#so2mascaras"),$("#so2txtgiroi"),$("#so2txtgiros")],0.01,{opacity:1})
    .to($("#so2fork"),0.5,{y:0,ease: CustomEase.create("custom", "M0,0 C0.454,0 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1")})
    .to($("#so2txtgiros"),1,{rotation:0, ease:Power2.easeOut})
    .to($("#so2mascaras"),0.1,{opacity:0})
    .staggerTo([$("#so2tc1"),$("#so2tc2"),$("#so2tc3")],0.8,{opacity:1,x:0, ease:Back.easeOut},1,'+=1')
    .staggerTo($(".so2to"),0.5,{delay:0.6,opacity:1, ease:Sine.easeOut},0.3)
    .to($("#so2txtgiroi"),1,{rotation:0, ease:Power2.easeOut, onComplete:playPuertas},'+=1')
    ;
  }
  function Otros1(){
    otros1.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Otros";
    document.getElementById("fuentes").innerHTML="Public Health Nutrition Journal,<br>Journal of the American Society of Nephrology";
    $("#pagFuentes").prop("href", "datos.html#dotros1");

    TweenMax.set($("#so1tambien"),{transformOrigin: "center center",opacity:0, scale:0.5});
    TweenMax.set($("#so1elimi"),{transformOrigin: "center center",scaleX:0});
    TweenMax.set($("#so1depr"),{transformOrigin: "center center",scaleY:0});
    TweenMax.set($("#so1puede > path"),{transformOrigin: "center center",opacity:0,y:30});

    TweenMax.set($("#so1reduce > g"),{transformOrigin: "center top",scaleY:0});
    TweenMax.set($("#so1reduce"),{transformOrigin: "right center"});
    TweenMax.set([$("#so1hiper"),$("#so1irc")],{x:200,opacity:0});
    TweenMax.set([$("#so1disf"),$("#so1obes")],{x:-200,opacity:0});

    TweenMax.set($("#so1cruz > path"),{transformOrigin: "center center"});
    TweenMax.set($("#so1cruz path:first-child"),{scaleY:0});
    TweenMax.set($("#so1cruz path:last-child"),{scaleX:0});

    new TimelineMax({delay:0.5}).to($("#so1tambien"),1,{opacity:1,scale:1,ease:Power4.easeOut})
    .to($("#so1tambien"),0.5,{delay:0.5,opacity:0,ease:Power4.easeIn})
    .to($("#so1elimi"), 0.8,{scaleX:0.98, ease: Back.easeOut})
    .to($("#so1depr"), 0.8,{scaleY:1, ease: Back.easeOut})
    .staggerTo($("#so1puede > path"), 0.5,{y:0, opacity:1, ease: Circ.easeInOut,ease: Back.easeOut},0.1)
    .to($("#so1elim"),1,{delay:0.5,scale:0.39,x:5,y:-30, ease:Sine.easeInOut})
    .staggerTo($("#so1reduce > g"),0.6,{delay:0.3, scaleY:1, ease:Back.easeOut},0.5)
    .to($("#so1reduce"),1,{delay:0.3,scale:0.71, x:370,y:-433,ease:Sine.easeInOut})
    .staggerTo($("#so1cruz > path"),0.5,{scaleX:1,scaleY:1,ease:Circ.easeOut},0.5)
    .staggerTo([$("#so1hiper"),$("#so1disf"),$("#so1irc"),$("#so1obes")],0.6,{x:0,opacity:1, onComplete: playOtros2},0.8,"-=0.5")
    .to($("#so1cruz > path"),0.5,{repeat:-1,yoyo:true,scale:1.02,ease:Sine.easeOut})
    ;
  }
  function Diabetes4(){
    diabetes4.style.visibility = "visible";
    TweenMax.set(maskBarrasDiabetes, {y:-500});
    document.getElementById("titulo").innerHTML="Diabetes";
    document.getElementById("fuentes").innerHTML="National Institute of Health,<br>Preventive Medicine Journal";
    $("#pagFuentes").prop("href", "datos.html#ddiabetes4");

    new TimelineMax()
    .from(losVegetarianosDiabetes, 0.5, {x:-1000, opacity:0, ease: Back.easeOut.config(1)})
    .from(barraRojaDiabetes, 0.5, {x:1000, opacity:0, ease: Back.easeOut.config(1)}, 0.3)
    .from(tienenDiabetes, 0.5, {x:-1000, opacity:0, ease: Back.easeOut.config(1)}, 0.5)
    .to(maskBarrasDiabetes, 2.5, {y:-180, ease: Power2.easeOut}, 1)
    .add(count53, 1)
    .from(menosRiesgoDiabetes, 0.5, {x:-1000, opacity:0, ease: Back.easeOut.config(0.7)}, 3.5)
    .from(deContraerDiabetes, 0.5, {x:-1000, opacity:0, ease: Back.easeOut.config(0.7)})
    .from(losVeganosDiabetes, 0.5, {x:-1000, opacity:0, ease: Back.easeOut.config(1)}, '+=1')
    .to(losVegetarianosDiabetes, 0.5, {x:1000, opacity:0, ease: Back.easeOut.config(1)}, '-=0.5')
    .to(tienenDiabetes, 0.2, {scale:1.05, transformOrigin: "center center", ease: Back.easeOut})
    .to(maskBarrasDiabetes, 2.5, {y:0, ease: Power2.easeOut})
    .add(count77, '-=2.6')
    .to(menosRiesgoDiabetes, 0.2, {scale:1.05, transformOrigin: "center center", ease: Back.easeOut}, '-=0.3')
    .to(deContraerDiabetes, 0.2, {scale:1.05, transformOrigin: "center center", ease: Back.easeOut,onComplete: playOtros1})
    ;
  }
  function Diabetes3 (){
    diabetes3.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Diabetes";
    document.getElementById("fuentes").innerHTML="Harvard Magazine";
    $("#pagFuentes").prop("href", "datos.html#ddiabetes3");

    TweenMax.set(aumenta51elriesgoDiabetes, {opacity:0});
    TweenMax.set(maskDiabetes3, {scaleY:0, transformOrigin:"top center"});
    TweenMax.staggerTo([iconoSalchichaDiabetes, iconoTocinoDiabetes], 0.8, {rotation:12, transformOrigin: "center center", repeat:-1, yoyo:true, ease: Sine.easeInOut}, 0.1);

    new TimelineMax()
    .set(groupTotalDiabetes3, {y:310, transformOrigin: "top center"})
    .from(unaPorcionDiariadeCarne, 0.5, {scale:0, ease: Back.easeOut, transformOrigin: "top center"})
    .to(groupTotalDiabetes3, 0.25, {y:150, ease: Power2.easeInOut}, '+=1')
    .to(maskDiabetes3, 0.25, {scaleY:1, ease: Power2.easeInOut}, '-=0.25')
    .to(groupTotalDiabetes3, 0.25, {y:0, ease: Power2.easeInOut}, '+=1')
    .to(aumenta51elriesgoDiabetes,0.25, {opacity:1, ease: Power2.easeInOut, onComplete: playDiabetes4}, '-=0.25')
    ;
  }
  function Diabetes2(){
    diabetes2_1.style.visibility = "visible";
    diabetes2_2.style.visibility = "visible";
    diabetesPancreas.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Diabetes";
    document.getElementById("fuentes").innerHTML="American Diabetes Association,<br>Universidad Federal de São Paulo";
    $("#pagFuentes").prop("href", "datos.html#ddiabetes2");

    TweenMax.set([lasGrasasSaturadas, grasasDer, grasasIzq, contribuyenALaMuerte], {opacity:1});
    TweenMax.set(diabetes2_2, {scale:0, rotation:-90});

    new TimelineMax()
    .from(lasGrasasSaturadas, 0.5, {y:-630, opacity:0, ease:Back.easeOut})
    .staggerFrom($("#grasasDer > g"), 0.5, {x:-630, opacity:0, ease:Back.easeOut.config(1)}, 0.3)
    .staggerFrom($("#grasasIzq > g"), 0.5, {x:630, opacity:0, ease:Back.easeOut.config(1)}, 0.3)
    .from(contribuyenALaMuerte, 0.5, {y:630, opacity:0, ease:Back.easeOut}, '+=0.5')
    .add(lowerParticles, '-=0.5')
    .to([diabetes2_1, diabetesPancreas], 0.5, {rotation:90, scale:0, ease:Back.easeIn.config(3)}, '+=3')
    .to(diabetes2_2, 0.5, {rotation:0, scale:1, ease:Back.easeOut.config(3)}, '-=0')
    .add(endParticles, '-=0.5')
    .staggerFrom($("#porEsoComerCarne:nth-of-type(1) tspan"), 0.2, {opacity:0}, 0.05)
    .staggerFrom($("#directamenteAsociado:nth-of-type(1) tspan"), 0.2, {opacity:0}, 0.05)
    .staggerFrom($("#aLaDiabetes:nth-of-type(1) tspan"), 0.2, {opacity:0}, 0.05)
    .to(diabetes2_2, 0, {onComplete: playDiabetes3})
    ;
  }
  function Diabetes1 (){
    diabetes1_1.style.visibility = "visible";
    diabetes1_2.style.visibility = "visible";
    diabetesPancreas.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Diabetes";
    document.getElementById("fuentes").innerHTML="Santos-Longhurst, A.,<br>Canadian Diabetes Association";
    $("#pagFuentes").prop("href", "datos.html#ddiabetes1");

    TweenMax.set([lasGrasasSaturadas, grasasDer, grasasIzq, contribuyenALaMuerte], {opacity:0});

    new TimelineMax({repeat:-1}).to(insulinaDiabetes1, 6, {y:630, ease:Power0.easeNone})
    .to(insulinaDiabetes1, 0, {y:0, ease:Power0.easeNone})
    ;

    new TimelineMax()
    .from(esquinaIzqDiabetes, 0.5, {scale:0, transformOrigin: "top left", ease:Power2.easeInOut}, 0)
    .from(esquinaDerDiabetes, 0.5, {scale:0, transformOrigin: "bottom right", ease:Power2.easeInOut}, 0)
    .from(diabetes1Mask, 0.3, {opacity:0, ease:Power2.easeIn}, 0.5)
    .from(diabetes1Mask, 1, {scale:0.16, transformOrigin: "center center", ease:Power2.easeInOut}, 0.5)
    .from(esquinaIzqDiabetes, 1, {x:487, y:289, ease:Power2.easeInOut}, 0.5)
    .from(esquinaDerDiabetes, 1, {x:-487, y:-289, ease:Power2.easeInOut}, 0.5)
    .from([cuerpoDiabetes1, insulinaDiabetes1], 1, {opacity:0, ease:Power2.easeInOut}, '-=1')
    .to(diabetes1_1, 0.5, {opacity:0, scale:0, transformOrigin: "center center", ease: Power2.easeInOut}, '+=3.5')
    .from(celulasBetaDelPancreas,0.5, {opacity:0, scale:3, transformOrigin: "center center", ease: Power2.easeInOut}, '-=0.5')
    .to(celulasBetaDelPancreas,0.5, {scale:0.5, y:-350, transformOrigin: "center center", ease: Power2.easeInOut}, '+=3.5')
    .from(iconoPancreas,0.5, {opacity:0, scale:3, transformOrigin: "center center", ease: Power2.easeInOut, onComplete: playDiabetes2}, '-=0.5')
    .add(drawParticle, '-=0.3')
    ;
  }
  function Cancer4(){
    cancer4.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Cáncer";
    document.getElementById("fuentes").innerHTML="Loma Linda University,<br>Critical Reviews in Food Science and Nutrition";
    $("#pagFuentes").prop("href", "datos.html#dcancer4");


    var num = num;
    TweenMax.set([$("#sc4lasp"),$("#sc4vege"),$('#sc4menos')],{transformOrigin:"center center",x:-200,opacity:0})
    TweenMax.set([$("#sc4tienen"),$("#sc4c1"),$("#sc4c2"),$("#sc4c3"),$("#sc4c4"),$("#sc4c5"),$("#sc4c6"),$("#sc4c7")],{x:100,opacity:0})

    new TimelineMax().staggerTo([$("#sc4lasp"),$("#sc4vege"),$("#sc4tienen")],1,{x:0,opacity:1, ease:Back.easeOut},0.8);

    TweenMax.set($("#sc4masc"),{transformOrigin: "center left", x:960});
    TweenMax.set([$('#sc4num'),$("#sc4")],{opacity:0});

    new TimelineMax({delay:2.6}).to([$('#sc4num'),$("#sc4")],0.5,{opacity:1})
    .call(sc4percentAnim,["23"])
    .to($("#sc4masc"), 1.5,{delay:0.5,x:518.4},'-=1')
    .to($("#sc4menos"),1,{x:0,opacity:1, ease:Back.easeOut},0.8,'-=2')
    .to($("#sc4c1"),0.5,{x:0,opacity:1, ease:Back.easeOut},'-=0.5');
    new TimelineMax({delay:6}).call(sc4percentAnim,["45"])
    .to($("#sc4masc"), 1.5,{x:96})
    .to($("#sc4c1"),0.5,{opacity:0},'-=2')
    .to($("#sc4c2"),0.5,{x:0,opacity:1, ease:Back.easeOut},'-=1.5');
    new TimelineMax({delay:9.5}).call(sc4percentAnim,["35"])
    .to($("#sc4masc"), 1.5,{x:288})
    .to($("#sc4c2"),0.5,{opacity:0},'-=2')
    .to($("#sc4c3"),0.5,{x:0,opacity:1, ease:Back.easeOut},'-=1.5');
    new TimelineMax({delay:13}).call(sc4percentAnim,["20"])
    .to($("#sc4masc"), 1.5,{x:576})
    .to($("#sc4c3"),0.5,{opacity:0},'-=2')
    .to($("#sc4c4"),0.5,{x:0,opacity:1, ease:Back.easeOut},'-=1.5');

    //veganas
    TweenMax.set($("#sc4veg"),{transformOrigin:"center center",opacity:0,scale:0});
    new TimelineMax({delay:16}).to($("#sc4vege"),0.5,{transformOrigin: "center center",scale:0,ease:Back.easeIn})
    .to($("#sc4veg"),0.5,{opacity:1,scale:1, ease:Back.easeOut});
    new TimelineMax({delay:17.5}).call(sc4percentAnim,["41"])
    .to($("#sc4masc"), 1.5,{x:172.8})
    .to($("#sc4c4"),0.5,{opacity:0},'-=2')
    .to($("#sc4c5"),0.5,{x:0,opacity:1, ease:Back.easeOut},'-=1.5');
    new TimelineMax({delay:21}).call(sc4percentAnim,["19"])
    .to($("#sc4masc"), 1.5,{x:595.2})
    .to($("#sc4c5"),0.5,{opacity:0},'-=2')
    .to($("#sc4c6"),0.5,{x:0,opacity:1, ease:Back.easeOut},'-=1.5');
    new TimelineMax({delay:24.5}).call(sc4percentAnim,["29"])
    .to($("#sc4masc"), 1.5,{x:403.2})
    .to($("#sc4c6"),0.5,{opacity:0},'-=2')
    .to($("#sc4c7"),0.5,{x:0,opacity:1, ease:Back.easeOut, onComplete: playDiabetes1},'-=1.5');
  }
  function sc4percentAnim(num){
    $('#sc4num').animateNumber({number: num
    },500);
  }

  function Cancer3(){
    cancer3.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Cáncer";
    document.getElementById("fuentes").innerHTML="CIIC,<br>Academy of Nutrition and Dietetics";
    $("#pagFuentes").prop("href", "datos.html#dcancer3");

    TweenMax.set($("#sc3ademas"), {opacity:0,y:50});
    TweenMax.set($("#sc3lospr"), {transformOrigin: "center center",opacity:0,rotationX:0});
    TweenMax.set([$("#sc3carne > g"), $("#sc3lact > g"),$("#sc3carneb > g")], {opacity:0});
    TweenMax.set([$("#sc3carne"), $("#sc3lact"),$("#sc3carneb")], {transformOrigin: "bottom center"});
    TweenMax.set([$("#sc3son"),$("#sc3en")],{y:190});
    TweenMax.set($("#sc3altos"),{transformOrigin: "bottom center",scaleY:0});
    TweenMax.set($("#sc3quep"), {transformOrigin: "center center",rotationX:-90});
    TweenMax.set($("#sc3tit > text"),{transformOrigin: "center center",scale:0, ease:Back.easeIn})
    TweenMax.set($("#sc3canc"),{y:50,transformOrigin: "top center",scaleX:0,scale:2,smoothOrigin:true});
    TweenMax.set($("#sc3sona"),{transformOrigin: "center center"});
    TweenMax.set($("#sc3line"),{opacity:0});
    new TimelineMax({delay:0.5}).to($("#sc3ademas"),0.8,{opacity:1,y:0, ease:Circ.easeOut})
    .to($("#sc3ademas"),0.8,{opacity:0,y:-50, ease:Circ.easeOut})
    .to($("#sc3lospr"),0.3,{opacity:1,scale:1.01})
    .staggerTo($("#sc3carneb > g"),0.5,{opacity:1,ease:Back.easeOut},0.05)
    .staggerTo($("#sc3lact > g"),  0.5,{opacity:1,ease:Back.easeOut},0.05,'-=0.4')
    .staggerTo($("#sc3carne > g"), 0.5,{opacity:1,ease:Back.easeOut},0.05,'-=0.4')
    .staggerTo([$("#sc3son"),$("#sc3en")],0.5,{y:0,ease:Back.easeOut},0.8)
    .to($("#sc3altos"),1,{scaleY:1,ease:Elastic.easeOut},'-=0.9')
    .staggerTo([$("#sc3carne"), $("#sc3lact"),$("#sc3carneb")], 0.5, {scale:0.3},0.1)
    .staggerTo($("#sc3tit > text"),0.5,{scale:1, ease:Back.easeOut},0.2)
    .to($("#sc3lospr"),0.3,{transformOrigin: "center center",rotationX:90},'+=1')
    .to($("#sc3quep"),0.3,{transformOrigin: "center center",rotationX:0})
    .to($("#sc3sona"),1,{scaleX:0,opacity:0, ease:Power1.easeIn},'-=1.5')
    .to($("#sc3canc"), 0.5, {scaleX:2, ease:Power1.easeOut, onComplete: playCancer4});
    new TimelineMax().to($("#sc3canc"),0.8,{y:40,repeat:-1,yoyo:true, ease: Sine.easeInOut, smoothOrigin:true});
  }
  function Cancer2() {
    cancer2.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Cáncer";
    document.getElementById("fuentes").innerHTML="OMS,<br>National Cancer Institute";
    $("#pagFuentes").prop("href", "datos.html#dcancer2");

    //set y anim texto 1
    TweenMax.set($("#sc2porcont"),{opacity:0,scale:4,transformOrigin: "center center",smoothOrigin: true});
    TweenMax.to($("#sc2porcont"),0.5,{delay:0.2,y:600,scale:1,opacity:1, ease: Power1.easeOut});
    //salida texto1
    new TimelineMax().to([$("#sc2porcont")],0.5,{delay:3,opacity:0,ease:Power1.easeOut})
    .to([$("#sc2porcont")],1.5,{y:-250,ease:Power1.easeOut},3);

    //set anim gotas celulas
    TweenMax.set([$("#sc2celm1c"),$("#sc2celm3c"),$("#sc2celm2c")],{transformOrigin: "center center",smoothOrigin: true,opacity:0,scale:0});
    TweenMax.set([$("#sc2n-nitroso"),$("#sc2ahc"),$("#sc2hap")],{opacity:0,y:-790,transformOrigin: "top center",smoothOrigin: true});
    TweenMax.set([$("#sc2celm1 > g"),$("#sc2celm3 > g"),$("#sc2celm2 > g")],{transformOrigin: "center center",smoothOrigin: true, scale:0});

    new TimelineMax({delay:0.8}).to([$("#sc2ahc"),$("#sc2hap"),$("#sc2n-nitroso")],3,{opacity:1,ease: Power1.easeIn})
    .to([$("#sc2ahc"),$("#sc2hap"),$("#sc2n-nitroso")],4,{y:-65,ease: Power1.easeInOut},0.1)
    .staggerTo([$("#sc2hap"),$("#sc2ahc"),$("#sc2n-nitroso")],1,{transformOrigin: "bottom center",opacity:0,scale:0,ease: Power1.easeInOut},0.3,'-=0.5')
    //anim celulas
    .staggerTo([$("#sc2cels1"),$("#sc2cels3"),$("#sc2cels2")],0.3,{transformOrigin: "center center",scale:0,ease:Back.easeIn},0.3,'-=1')
    .staggerTo([$("#sc2celm1c"),$("#sc2celm3c"),$("#sc2celm2c")],0.3,{opacity:1,scale:1.1,ease:Back.easeOut},0.3,'-=1')
    .staggerTo($("#sc2celm1 > g"),0.3,{scale:1.1,ease:Back.easeOut},0.05,'+=0.3')
    .staggerTo($("#sc2celm3 > g"),0.3,{scale:1.1,ease:Back.easeOut},0.05,'-=0.3')
    .staggerTo($("#sc2celm2 > g"),0.3,{scale:1.1,ease:Back.easeOut},0.05,'-=0.3')
    ;
    //yoyo celulas
    new TimelineMax()
    .staggerTo([$("#sc2celm1c"),$("#sc2celm1 > g"),$("#sc2celm3c"),$("#sc2celm3 > g"),$("#sc2celm2c"),$("#sc2celm2 > g")],0.5,{y:3, repeat:-1,yoyo:true, ease: Sine.easeInOut},0.1);
    //set y anim intestino
    TweenMax.set([$("#sc2intestino")],{y:850,opacity:0});
    new TimelineMax().to($("#sc2intestino"),1.5,{opacity:1,delay:3,y:0,ease:Power1.easeOut});

    //set y anim frases
    TweenMax.set([$("#sc2que"),$("#sc2ycausan")],{opacity:0,scale:0.8});
    TweenMax.set($("#sc2que"),{transformOrigin: "top center",y:-200});
    TweenMax.set($("#sc2ycausan"),{transformOrigin: "bottom center",y:200});
    new TimelineMax({delay:4.5})
    .to($("#sc2que"), 2, {y:0, opacity:1,scale:1,ease: CustomEase.create("custom", "M0,0,C0,0,0.054,0.744,0.084,0.79,0.102,0.82,0.122,0.843,0.138,0.846,0.424,0.898,0.9,1,1,1")})
    .to($("#sc2ycausan"),2,{y:0,opacity:1,scale:1,ease: CustomEase.create("custom", "M0,0,C0,0,0.054,0.744,0.084,0.79,0.102,0.82,0.122,0.843,0.138,0.846,0.424,0.898,0.9,1,1,1"), onComplete: playCancer3},'-=0.3');
  }
  function Cancer1() {
    cancer1.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Cáncer";
    document.getElementById("fuentes").innerHTML="Organización Mundial de la Salud (OMS),<br>Centro Internacional de Investigaciones<br>sobre el Cáncer (CIIC)";
    $("#pagFuentes").prop("href", "datos.html#dcancer1");

    var tltc1 = new TimelineMax({delay: 0.5});
    TweenMax.set($('#sc1textocancer1'), { y:250});
    TweenMax.set([$('#sc1txtc11'), $('#sc1txtc13'), $('#sc1txtc15')],{rotationX: -90,transformOrigin: "top center",smoothOrigin: true});
    TweenMax.set([$('#sc1tocino'), $('#sc1cigarrillo'),$('#sc1alcohol')], {autoAlpha: 1});
    //flotar
    TweenMax.staggerTo([$('#sc1txtc14'),$('#sc1txtc24'),$('#sc1tocino'), $('#sc1cigarrillo'), $('#sc1alcohol'), $('#sc1grupo1'),$('#sc1carne'),$('#sc1tijera'),$('#sc1esteroides'),$('#sc1grupo2a')], 0.6,{y:5, repeat:-1,yoyo:true, ease: Sine.easeInOut}, 0.1);

    tltc1.to($('#sc1txtc11'), 0.7, {transformOrigin: "top center",rotationX: 0,ease: Bounce.easeOut})
    .from($('#sc1txtc12'), 0.5,{autoAlpha: 0,transformOrigin: "center center",scale: 1.2,ease: Sine.easeOut}, '-=0.3')
    .from($('#sc1tocino'), 0.6,{transformOrigin: "center center",scaleX: 0,ease: Bounce.easeOut}, '-=0.6')
    .to($('#sc1txtc13'), 0.7, {transformOrigin: "top center",rotationX: 0,ease: Bounce.easeOut}, '+=0.2')
    .from($('#sc1txtc14'), 0.6,{autoAlpha: 0,transformOrigin: "center center",scale: 1.2,ease: Sine.easeOut}, '-=0.6')
    .to($('#sc1txtc15'), 0.7, {transformOrigin: "top center",rotationX: 0,ease: Bounce.easeOut}, '+=0.2')
    .from($('#sc1txtc16'), 0.5,{autoAlpha: 0,transformOrigin: "center center",scale: 1.2,ease: Sine.easeOut}, '-=0.3')
    .from($('#sc1cigarrillo'), 0.6,{transformOrigin: "center center",scaleX: 0,ease: Bounce.easeOut}, '-=0.6')
    .from($('#sc1circ1'), 0.7, {transformOrigin: "center center",autoAlpha:0, scale:0.8})
    .from($('#sc1alcohol'), 0.7, {autoAlpha:0}, '-=0.7')
    .from($('#sc1grupo1'), 0.7, {autoAlpha:0, scale: 0, ease:Back.easeOut}, '-=0.7')
    .to($('#sc1textocancer1'), 0.8, {y:0 ,ease: Sine.easeInOut}, '+=0.8')
    .from($('#sc1textocancer2'), 0.8, {autoAlpha:0, y:300, ease: Sine.easeInOut, onComplete: playCancer2},'-=0.8');
  }
  function Corazon3 (){
    corazon3_estadisticas.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Cardiovascular";
    document.getElementById("fuentes").innerHTML="Loma Linda University,<br>Journal of Clinical Nutrition";
    $("#pagFuentes").prop("href", "datos.html#dcorazon3");

    new TimelineMax().from(lineaHistogramaCorazonVertical, 0.5, {scaleY:0, transformOrigin: "top center"})
    .from(lineaHistogramaCorazonHorizontal, 0.5, {scaleX:0, transformOrigin: "top left"})
    .staggerFrom([_LOS_veganostienen, los_VEGANOS_tienen, losveganos_TIENEN_], 0.9,{opacity: 0, transformOrigin: "center center"}, 0.3)
    .from(barrasRojasCorazon, 1, {scaleY:0, transformOrigin: "top center"}, 0)
    .from(numero57, 1, {opacity:0}, 2.5)
    .from(maskBarrasCorazon1, 2.5, {y:-275, ease: Power2.easeOut}, 2.5)
    .add(count57, 2.5)
    .staggerFrom([_MENOS_enfermedades, menos_ENFERMEDADES_], 0.9,{opacity: 0, transformOrigin: "center center"}, 0.6)
    .from(_y_, 1, {opacity:0}, 7)
    .from(numero75, 1, {opacity:0}, 8)
    .from(maskBarrasCorazon2, 2.5, {y:-350, ease: Power2.easeOut}, 8)
    .add(count75, 8)
    .staggerFrom([_MENOS_hipertension, menos_HIPERTENSION_], 0.9,{opacity: 0, transformOrigin: "center center", onComplete:playCancer1}, 0.6)
    ;
  }
  function Corazon2(){
    corazon2_cerebro.style.visibility = "visible";
    corazon2_texto.style.visibility = "visible";
    document.getElementById("titulo").innerHTML="Cardiovascular";
    document.getElementById("fuentes").innerHTML="JAMA Internal Medicine,<br>Loma Linda University";
    $("#pagFuentes").prop("href", "datos.html#dcorazon2");

    new TimelineMax().staggerFrom([dejarDeConsumir, animales, ySusDerivados, ayudaAPrevenirLa, hipertension], 1, {rotationX: -90,transformPerspective: 1000,transformOrigin: "top center",smoothOrigin: true,ease: Back.easeOut.config(4)}, 0.6)
    .to(corazon2_texto, 0.6, {x: -1920, ease:Back.easeIn.config(2)}, '+=1')
    .from(corazon2_cerebro, 0.6, {x:1920, ease:Back.easeOut.config(2)}, '-=0.2')
    .add('transCerebro')
    .from(yTambien, 0.6, {y: 100, opacity:0, ease:Back.easeOut.config(2)})
    .staggerFrom([LOS_ataques, los_ATAQUES], 0.6, {scale: 0, transformOrigin: "center center", ease:Back.easeOut.config(1)}, 0.3)
    .from(cerebrovasculares, 0.6, {y: -100, opacity:0, ease:Back.easeOut.config(2)})
    .from(cerebroMask, 4, {y:-520, ease:Power2.easeInOut, onComplete: playCorazon3}, 'transCerebro')
    .to(cerebroIconRed, 1, {opacity:0, repeat:-1, yoyo:true, ease: Power2.easeInOut}, '-=0.5')
    ;

  }
  function Corazon1() {

    laUnicaFuente.style.visibility = "visible";
    corazon1.style.visibility = "visible";
    productosAnimales.style.visibility = "visible";
    productosAnimales.style.opacity = "1";
    document.getElementById("titulo").innerHTML="Cardiovascular";
    document.getElementById("fuentes").innerHTML="The Lancet,<br>American Journal of Epidemiology";
    $("#pagFuentes").prop("href", "datos.html#dcorazon1");


    //funciones de Corazon1

    function textoAnimCorazon1(){
      textCorazon1.style.visibility = "visible"; //esconder antes de tiempo
      textCorazon1.style.opacity = "1"; // esconder antes de tiempo
      textCorazon2.style.visibility = "visible"; //esconder antes de tiempo
      textCorazon2.style.opacity = "1"; // esconder antes de tiempo

      var text1 = new letteringText("#textCorazon1");
      var text2 = new letteringText("#textCorazon2");

      text1.animarC();
      text2.animarC();
    }
    function arteriaAnimCorazon1() {

      arteriaLarga.style.visibility = "visible";
      arteriaLarga.style.opacity = "1";
      arteriaLargaMotion.style.visibility = "visible";
      arteriaLargaMotion.style.opacity = "1";
      // aqui esta el parametro de la etiqueta <animateMotion> para animar el circulo rojo
      $( "#motionCircle" ).attr('begin', '11.5s');

      TweenMax.set($("#circuloRojo"), {opacity: 0, scale: 0, transformOrigin:"center center"});
      TweenMax.set(completoArteria, {scale:3, y:4320, transformOrigin:"center center"});
      TweenMax.set(completoMotion, {scale:3, y:4320-190, x:-860, transformOrigin:"center center"});
      new TimelineMax({repeat:-1})
      .to(corazonIcono, 0.2, {scale:1.15, transformOrigin:"center center"})
      .to(corazonIcono, 0.2, {scale:1, transformOrigin:"center center"})
      .to(corazonIcono, 0.13, {scale:1.15, transformOrigin:"center center"})
      .to(corazonIcono, 0.2, {scale:1, transformOrigin:"center center"})
      .to(corazonIcono, 0.6, {scale:1, transformOrigin:"center center"})
      ;

      new TimelineMax()
      .to(completoArteria, 1, {  y: 2650,ease: Back.easeOut.config(0.5)}, 0)
      .to(completoMotion, 1, {y: 2650-190,ease: Back.easeOut.config(0.5)}, 0)
      .to($("#circuloRojo"), 0.5, {opacity: 1,scale: 1, transformOrigin:"center center"}, 1)
      .to(completoArteria, 9, {  y: 100,ease: CustomEase.create("custom", "M0,0 C0.128,0.24 0.319,0.399 0.496,0.496 0.678,0.596 0.884,0.81 1,1")}, 2.5)
      .to(completoMotion, 9, {y: -90,ease: CustomEase.create("custom", "M0,0 C0.128,0.24 0.319,0.399 0.496,0.496 0.678,0.596 0.884,0.81 1,1")}, 2.5)
      .to(productosAnimales, 9, {y:-1800,ease: CustomEase.create("custom", "M0,0 C0.128,0.24 0.319,0.399 0.496,0.496 0.678,0.596 0.884,0.81 1,1"),onComplete: playCorazon2}, 2.5)
      .to(productosAnimales, 1, {opacity:0,}, 2.5)
      .from($("#porEsoElConsumoDe"), 2, {opacity:0, x:-30, ease: Power1.easeOut}, 4)
      .from($("#conLasEnfermedades"), 2, {opacity:0, x:30, ease: Power1.easeOut}, 7)
      ;
    }

    //loops de Corazon 1
    new TimelineMax({repeat: -1}).to([$("#cell1"), $("#cell2"), $("#cell3"), $("#cell4"), $("#cell5")], 10, {transformOrigin: "center center",rotation: 360,ease: Power0.easeNone});
    TweenMax.staggerTo([$("#cell1"), $("#cell2"), $("#cell3"), $("#cell4"), $("#cell5")], 0.8, {y: 25, repeat:-1, yoyo:true, ease: Sine.easeInOut}, 0.1);
    TweenMax.set([pollo, carne, leche], {rotation:-3, opacity:0});
    TweenMax.staggerTo([pollo, carne, leche], 0.8, {rotation:3, transformOrigin: "center center", repeat:-1, yoyo:true, ease: Sine.easeInOut}, 0.1);

    //timeline de Corazon 1
    new TimelineMax().from(corazon1, 1, {x: -1920,ease: Power2.easeInOut})
    .from([$("#cell1"), $("#cell2"), $("#cell3"), $("#cell4"), $("#cell5")], 2.5, {x: -1500}, 0)
    .from($("#laPrincipalCausa"), 2.5, {x: -1500,ease: Power1.easeOut}, 0)
    .from($("#laPrincipalCausa"), 1, {opacity: 0,ease: Power1.easeInOut}, 1)
    .fromTo($("#bottomCol"), 0.8, {scaleY: 0,transformOrigin: "left bottom",smoothOrigin: true}, {scaleY: 1,transformOrigin: "left bottom",smoothOrigin: true,ease: Back.easeOut}, 2)
    .fromTo($("#unAltoNivel"), 0.8, {scaleY: 0,transformOrigin: "left bottom",smoothOrigin: true}, {scaleY: 1,transformOrigin: "left bottom",smoothOrigin: true,ease: Back.easeOut}, 2.15)
    .fromTo(topCol, 0.8, {scaleY: 0,transformOrigin: "left top",smoothOrigin: true}, {scaleY: 1,  transformOrigin: "left top",smoothOrigin: true,ease: Back.easeOut}, 2)
    .to($("#vena"), 1, {transformOrigin: "left center",scaleX: 4,ease: Power2.easeIn}, 5)
    .to([$("#unAltoNivel"), $("#bottomCol"),$("#topCol"), $("#laPrincipalCausa"), $("#cell1"), $("#cell2"), $("#cell3"), $("#cell4"), $("#cell5")], 1, {x: -1920,ease: Power2.easeOut}, 5.5)
    .addCallback(textoAnimCorazon1, 6)
    .to(corazon1, 0.7, {top: "-200%",ease: Back.easeIn}, 9.7)
    .to(laUnicaFuente, 0.7, {opacity:0,ease: Power2.easeInOut}, 9)
    .set([pollo, carne, leche], {opacity:1}, 10.1)
    .add(arteriaAnimCorazon1, 11.2)
    ;
  }
  //funciones que no son timelines

  function letteringText(clase) {
    this.clase = clase;
    this.jqClase = $(this.clase);
    this.timeline = new TimelineLite({delay: 0});

    this.animarC = function() {
      this.jqClase.lettering('lines').children('span').lettering();
      TweenLite.set(this.clase, {perspective: 600,autoAlpha: 1});
      this.timeline.staggerFrom(this.clase + ">span:nth-child(1) span", 0.5, {opacity: 0,scale: 0,transformOrigin: "50% 50% 50%",autoAlpha: 1,ease: Back.easeInOut},0.05);
    }

    this.animarB = function() {
      this.jqClase.lettering('lines').children('span').lettering();
      TweenLite.set(this.clase, {perspective: 600,autoAlpha: 1});
      this.timeline = new TimelineLite({delay: 1});
      this.timeline.staggerFrom(this.clase + ">span:nth-child(1) span", 0.8, {y: 100,opacity: 0,transformOrigin: "50% 50% 50%",autoAlpha: 1,scale: 5,ease: Back.easeOut},0.1);
    }

  }


  function count75(){
    var percent_number_step = $.animateNumber.numberStepFactories.append('%');

    $('#numero75').animateNumber(
      {
        number: 75,
        easing: 'easeInOutQuart',
        numberStep: percent_number_step
      },
      2000
    );
  }

  function count57(){
    var percent_number_step = $.animateNumber.numberStepFactories.append('%');

    $('#numero57').animateNumber(
      {
        number: 57,
        easing: 'easeInOutQuart',
        numberStep: percent_number_step
      },
      2000
    );
  }

  function count53(){
    var percent_number_step = $.animateNumber.numberStepFactories.append('%');

    $('#numero54').animateNumber(
      {
        number: 54,
        easing: 'easeInOutQuart',
        numberStep: percent_number_step
      },
      2000
    );
  }

  function count77(){
    var percent_number_step = $.animateNumber.numberStepFactories.append('%');
    $('#numero54').animateNumber(
      {
        number: 77,
        easing: 'easeInOutQuart',
        numberStep: percent_number_step
      },
      2000
    );
  }

  //funciones interactivas

  function playCorazon2(){
    console.log('completado');
    $("body").click(function(){
      if (Corazon2playing == false) {
        Corazon2playing = true;
        Corazon2();
        arteriaLarga.style.visibility = "hidden";
      }
    });
  }

  function playCorazon3(){
    console.log('completado');
    $("body").click(function(){
      if (Corazon3playing == false) {
        Corazon3playing = true;
        Corazon3();
        corazon2_texto.style.visibility = "hidden";
        corazon2_cerebro.style.visibility = "hidden";
      }
    });
  }

  function playCancer1(){
    console.log('completado');
    $("body").click(function(){
      if (Cancer1playing == false) {
        Cancer1playing = true;
        Cancer1();
        corazon3_estadisticas.style.visibility = "hidden";
      }
    });
  }

  function playCancer2(){
    console.log('completado');
    $("body").click(function(){
      if (Cancer2playing == false) {
        Cancer2playing = true;
        Cancer2();
        cancer1.style.visibility = "hidden";
      }
    });
  }

  function playCancer3(){
    console.log('completado');
    $("body").click(function(){
      if (Cancer3playing == false) {
        Cancer3playing = true;
        Cancer3();
        cancer2.style.visibility = "hidden";
      }
    });
  }

  function playCancer4(){
    console.log('completado');
    $("body").click(function(){
      if (Cancer4playing == false) {
        Cancer4playing = true;
        Cancer4();
        cancer3.style.visibility = "hidden";
      }
    });
  }

  function playDiabetes1(){
    console.log('completado');
    $("body").click(function(){
      if (Diabetes1playing == false) {
        Diabetes1playing = true;
        Diabetes1();
        cancer4.style.visibility = "hidden";
      }
    });
  }

  function playDiabetes2(){
    console.log('completado');
    $("body").click(function(){
      if (Diabetes2playing == false) {
        Diabetes2playing = true;
        Diabetes2();
        diabetes1_1.style.visibility = "hidden";
        diabetes1_2.style.visibility = "hidden";
      }
    });
  }

  function playDiabetes3(){
    console.log('completado');
    $("body").click(function(){
      if (Diabetes3playing == false) {
        Diabetes3playing = true;
        Diabetes3();
        diabetes2_1.style.visibility = "hidden";
        diabetes2_2.style.visibility = "hidden";
      }
    });
  }

  function playDiabetes4(){
    console.log('completado');
    $("body").click(function(){
      if (Diabetes4playing == false) {
        Diabetes4playing = true;
        Diabetes4();
        diabetes3.style.visibility = "hidden";
      }
    });
  }

  function playOtros1(){
    console.log('completado');
    $("body").click(function(){
      if (Otros1playing == false) {
        Otros1playing = true;
        Otros1();
        diabetes4.style.visibility = "hidden";
      }
    });
  }

  function playOtros2(){
    console.log('completado');
    $("body").click(function(){
      if (Otros2playing == false) {
        Otros2playing = true;
        Otros2();
        otros1.style.visibility = "hidden";

      }
    });
  }

  function playPuertas(){
    console.log('completado');
    $("body").click(function(){
      if (Puertasplaying == false) {
        Puertasplaying = true;
        Puertas();
        otros2.style.visibility = "hidden";
      }
    });
  }
















  //PARTICULAS INSULINA

  function endParticles(){
    particles = 1;
    colorParticle = "#000000";
  }

  function lowerParticles(){
    particles = 10;
  }

  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var particles =200;
  var colorParticle = "#8C83EC";
  var array50 = false;
  var x;
  var y;

  var vy;
  var vx;

  var particleArray = [];

  generateParticle(particles);

  function generateParticle(conteoParticles){
    for(var i=0; i < conteoParticles; i++){
      particleArray.push(new createParticle);
    }
  }

  function createParticle(){

    this.x = Math.round(0.5*window.innerWidth);
    this.y = Math.round(0.5*window.innerHeight);
    this.vy = Math.round(Math.random()*64-32);
    this.vx = Math.round(Math.random()*64-32);

  }

  function drawParticle(){

    context.fillStyle = "#000";
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();

    for(var i=0; i<particles; i++){

      var f = particleArray[i];
      context.fillStyle = colorParticle;
      context.beginPath();
      context.arc(f.x, f.y, 0.005*window.innerWidth, 0, Math.PI*2, true);
      context.closePath();
      context.fill();
      f.x += f.vx/5;
      f.y += f.vy/5;

      if (f.y > canvas.height || f.y < 0){
        f.y = 0.5*window.innerHeight;
        f.x = 0.5*window.innerWidth;
      }

      if (f.x > canvas.width || f.x < 0){
        f.y = 0.5*window.innerHeight;
        f.x = 0.5*window.innerWidth;
      }
    }
    requestAnimationFrame(drawParticle);
  }




});
