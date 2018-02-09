// Deteccion de navegador
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var menuChromePlaying = false;
console.log(isChrome);
//cookiesSafari
function getcookie(cookiename) {
    var cookiestring = "" + document.cookie;
    var index1 = cookiestring.indexOf(cookiename);
    if (index1 == -1 || cookiename == "") return "";
    var index2 = cookiestring.indexOf(';', index1);
    if (index2 == -1) index2 = cookiestring.length;
    return unescape(cookiestring.substring(index1 + cookiename.length + 1, index2));
}
function getexpirydate(nodays) {
    var UTCstring;
    Today = new Date();
    nomilli = Date.parse(Today);
    Today.setTime(nomilli + nodays * 24 * 60 * 60 * 1000);
    UTCstring = Today.toUTCString();
    return UTCstring;
}
function setcookie(name, value, duration) {
    cookiestring = name + "=" + escape(value) + ";EXPIRES=" + getexpirydate(duration);
    document.cookie = cookiestring;
    if (!getcookie(name)) {
        return false;
    }
    else {
        return true;
    }
}

var contar_vistas = 0;
var count = getcookie("counter");
if (isNaN(count)) {
    contar_vistas = setcookie('counter', 0, 1);
    count = 0;
}
count++;

contar_vistas = setcookie('counter', count, 1);
if(count==1){
  if(isChrome == false && isOpera == false){
    // alert("Primera vista");
    ChromePopUp();
    menuChromePlaying = true;
  }
} else {
    if (count >= 1) {
        setcookie("counter", 0, 1);
    }
}

function ChromePopUp(){
  ChromeMenu.style.visibility = "visible";
  BotonesMenuChrome.style.visibility = "visible";
  TweenMax.set($("#inicio1frase"), {css:{"-webkit-filter": "blur(0.75vw)"}});
  TweenMax.set($("#inicio1frase"), {opacity:0.25});
  TweenMax.from($("#ChromeMenu"), 1.25, {y:500, ease: Power3.easeOut});
  TweenMax.from($("#ChromeMenu"), 0.5, {opacity:0, ease: Power3.easeOut, delay:0.5});
  $("#ChromeContinuar").click(function() {
   window.open("index.html", "_self");
   });
  $("#ChromeIrADatos").click(function() {
    window.open("datos.html", "_self");
    });
  $("#ChromeIcon").click(function() {
     window.open("https://www.google.ca/intl/en/chrome/", "_self");
    });
  $("#ChromeIcon").hover(function(){
      $("#ChromeDescargar").css("opacity", "1");
      }, function(){
      $("#ChromeDescargar").css("opacity", "0");
  });
  new TimelineMax({repeat:-1}).set($("#ChromePulse"), {scale:1, transformOrigin: "center center"})
  .to($("#ChromePulse"), 1, {scale:1.3});
  new TimelineMax({repeat:-1}).set($("#ChromePulse"), {opacity:0, transformOrigin: "center center"})
  .to($("#ChromePulse"), 0.5, {opacity:0.5})
  .to($("#ChromePulse"), 0.5, {opacity:0}, 0.5);
}

//documento
$(document).ready(function() {
  //para no tener problemas son cambiar el anchorpoint
  CSSPlugin.defaultSmoothOrigin = true;

  //variables
  var p_salud = $("#puertasalud");
  var i_salud = $("#lyr_iconosalud");
  var t_salud = $("#lyr_txtsalud");

  var p_medio = $("#puertamedio");
  var i_medio = $("#lyr_iconomedio");
  var t_medio = $("#lyr_txtmedio");

  var p_etica = $("#puertaetica");
  var i_etica = $("#lyr_iconoetica");
  var t_etica = $("#lyr_txtetica");

  var tlp1 = new TimelineMax();
  var tlp2 = new TimelineMax();
  var tlp3 = new TimelineMax();
  var tlback = new TimelineMax();
  var tlpuertas = new TimelineMax();
  //booleans

  var activarsalud = true;
  var activarmedio = true;
  var activaretica = true;
  var activarmouse = false;
  var dibujarPuertasplaying=false;

  InicioFrase();

  function InicioFrase(){
    inicio1frase.style.visibility = "visible";
    TweenMax.set($("#if1sit"),{transformOrigin: "center bottom",opacity:0, scale:0.95,y:30});
    TweenMax.set([$("#if1amb"),$("#if1sal"),$("#if1anim")],{opacity:0,y:50});
    TweenMax.set($("#if1latomarias > path"),{scale:1.5,transformOrigin: "center top",opacity:0,y:30});
    TweenMax.set($("#if1mano"),{transformOrigin: "center center",scale:0,opacity:0});

    new TimelineMax({delay:0.5}).to($("#if1sit"),1,{y:0,opacity:1,scale:1,ease:Back.easeOut})
    .staggerTo([$("#if1amb"),$("#if1sal"),$("#if1anim")],1,{delay:0.4,y:0,opacity:1,ease: Back.easeOut},1.4)
    .staggerTo($("#if1latomarias > path"),0.6,{delay:0.4,opacity:1,scale:1,y:0,ease:Back.easeOut,onComplete: startPuertas},0.1)
    .to($("#if1txt"),0.8,{delay:0.4,y:-140,ease:Back.easeInOut})
    .to($("#if1mano"),0.5,{opacity:1,scale:1,ease:Back.easeOut},"-=0.3")
    ;
    new TimelineMax({repeat:-1}).from($('#if1circ'), 2,{transformOrigin: "center center",smoothOrigin: true,scale:0, ease: Power0.easeNone})
    .to($('#if1circ'), 0.5,{opacity:0},'-=0.7');
  }

  function startPuertas(){
    console.log('completado');
    $("body").click(function() {
      if(dibujarPuertasplaying==false && menuChromePlaying==false){
        dibujarPuertasplaying=true;
        dibujarPuertas();
        inicio1frase.style.visibility = "hidden";
      }
    });
  }

  function dibujarPuertas() {
    //Sets dependiendo del navegador
    if (isChrome==false||isOpera==false){
    TweenMax.set([t_salud, t_medio, t_etica], {css:{"-webkit-transform":"rotateX(90deg)", transformOrigin: "center center"}});
    }
    if (isChrome==true||isOpera==true){
    TweenMax.set([t_salud, t_medio, t_etica], {rotationX:90, transformOrigin: "center center"});
    }
    //Sets
    puertasalud.style.visibility = "visible";
    puertamedio.style.visibility = "visible";
    puertaetica.style.visibility = "visible";
    escogeUnaPuerta.style.visibility = "visible";
    TweenMax.set($("#escogeUnaPuerta"), {scale:0.85});
    TweenMax.set($("#escogeUnaPuerta > g"), {opacity:0, y:-50,scale:0.8,transformOrigin:"center center"});

    TweenMax.set([t_salud, t_medio, t_etica], {opacity: 1,smoothOrigin: true});

    TweenMax.set([p_salud, p_medio, p_etica], {transformPerspective: 400, y:-200,opacity:0});
    new TimelineMax().to([p_salud, p_medio, p_etica],1, {opacity:1,ease:Power2.easeOut})
    .to([p_salud, p_medio, p_etica],1, {y:0,ease:Elastic.easeOut.config(1, 0.3)},0.1)
    .staggerTo($("#escogeUnaPuerta > g"), 1, {opacity:1,scale:1, ease:Back.easeOut},0.05);

// Hover Chrome y Safari
  if (isChrome==true||isOpera==true){
    p_salud.hover(over_saludChrome, out_saludChrome);
    p_medio.hover(over_medioChrome, out_medioChrome);
    p_etica.hover(over_eticaChrome, out_eticaChrome);
  }
  if (isChrome==false||isOpera==false){
    p_salud.hover(over_saludSafari, out_saludSafari);
    p_medio.hover(over_medioSafari, out_medioSafari);
    p_etica.hover(over_eticaSafari, out_eticaSafari);
  }
  //Clicks Puertas
    p_salud.click(function() {
      if (activarsalud == true) {
        activaretica = false;
        activarmedio = false;
        TweenMax.set(backsalud, {opacity:1});
        tlback.set(p_salud, {scale: 1})
        .add('desaparecer')
        .to(t_salud,0.1,{rotationX:0})
        .to(p_salud, 1, {transformOrigin: "center left",rotationY: 90, ease: CustomEase.create("custom", "M0,0 C0.192,0 0.205,-0.133 0.406,-0.088 0.502,-0.066 0.624,0.252 1,1")})
        .to(p_medio, 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to(p_etica, 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to(backsalud, 1, {scale: 50,ease: Power3.easeInOut})
        .add(frase1saludAnim, 2);
      }
    });
    p_medio.click(function() {
      if (activarmedio == true){
        activarsalud = false;
        activaretica = false;
        TweenMax.set(backmedio, {opacity: 1})
        tlback.set(p_medio, {scale: 1})
        .add('desaparecer')
        .to(p_medio, 1, {transformOrigin: "center left",rotationY: 90,ease: CustomEase.create("custom", "M0,0 C0.192,0 0.205,-0.133 0.406,-0.088 0.502,-0.066 0.624,0.252 1,1")})
        .to(p_salud, 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to(p_etica, 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to(backmedio, 1, {scale: 50,left: "45%",ease: Power3.easeInOut})
        .to($("#puertamedio"), 0, {onComplete: startMedio})
        ;
      }
    });
    p_etica.click(function() {
      if (activaretica == true) {
        activarsalud = false;
        activarmedio = false;

        TweenMax.set(backetica, {opacity: 1});
        TweenMax.set(t_etica, {rotationX:0});
        tlback.set(p_etica, {scale: 1})
        .add('desaparecer')
        .to(p_etica, 1, {transformOrigin: "center left",rotationY: 90,ease: CustomEase.create("custom", "M0,0 C0.192,0 0.205,-0.133 0.406,-0.088 0.502,-0.066 0.624,0.252 1,1")})
        .to(p_salud, 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to(p_medio, 1, {opacity: 0,ease: Power1.easeInOut}, 'desaparecer')
        .to(backetica, 1, {scale: 50,left: "45%",ease: Power3.easeInOut})
        .to($("#puertaetica"), 0, {onComplete: startEtica})
        ;
      }
    });

    //puertainteractiva SALUD
    function over_saludChrome() {
      console.log("over");
      TweenMax.to(p_salud, 0.2, {scale: 1.05,ease: Power2.easeInOut})
      tlp1.to(i_salud, 0.1, {rotationX:90, transformOrigin: "center center"})
      .to(t_salud, 0.1, {rotationX:0});
    }
    function out_saludChrome() {
      console.log("out");
      TweenMax.to(p_salud, 0.2, {scale: 1,ease: Power2.easeInOut});
      tlp1.to(t_salud, 0.1, {rotationX:90})
      .to(i_salud, 0.1, {rotationX:0, transformOrigin: "center center"});
    }
    function over_saludSafari() {
      console.log("over");
      TweenMax.to(p_salud, 0.2, {scale: 1.05,ease: Power2.easeInOut})
      tlp1.to(i_salud, 0.1, {css:{"-webkit-transform":"rotateX(90deg)", transformOrigin: "center center"}})
      .to(t_salud, 0.1, {css:{"-webkit-transform":"rotateX(0deg)"}});
    }
    function out_saludSafari() {
      console.log("out");
      TweenMax.to(p_salud, 0.2, {scale: 1,ease: Power2.easeInOut});
      tlp1.to(t_salud, 0.1, {css:{"-webkit-transform":"rotateX(90deg)"}})
      .to(i_salud, 0.1, {css:{"-webkit-transform":"rotateX(0deg)", transformOrigin: "center center"}});
    }
    //puertainteractiva MEDIO
    function over_medioChrome() {
      console.log("over");
      TweenMax.to(p_medio, 0.2, {scale: 1.05,ease: Power2.easeInOut})
      tlp2.to(i_medio, 0.1, {rotationX: 90,transformOrigin: "center center"})
      .to(t_medio, 0.1, {rotationX: 0});
    }
    function out_medioChrome() {
      console.log("out");
      TweenMax.to(p_medio, 0.2, {scale: 1,ease: Power2.easeInOut});
      tlp2.to(t_medio, 0.1, {rotationX: 90})
      .to(i_medio, 0.1, {rotationX: 0,transformOrigin: "center center"});
    }
    function over_medioSafari() {
      console.log("over");
      TweenMax.to(p_medio, 0.2, {scale: 1.05,ease: Power2.easeInOut})
      tlp2.to(i_medio, 0.1, {css:{"-webkit-transform":"rotateX(90deg)",transformOrigin: "center center"}})
      .to(t_medio, 0.1, {css:{"-webkit-transform":"rotateX(0deg)"}});
    }
    function out_medioSafari() {
      console.log("out");
      TweenMax.to(p_medio, 0.2, {scale: 1,ease: Power2.easeInOut});
      tlp2.to(t_medio, 0.1, {css:{"-webkit-transform":"rotateX(90deg)"}})
      .to(i_medio, 0.1, {css:{"-webkit-transform":"rotateX(0deg)",transformOrigin: "center center"}});
    }
    //puertainteractiva ETICA
    function over_eticaChrome() {
      console.log("over");
      TweenMax.to(p_etica, 0.2, {scale: 1.05,ease: Power2.easeInOut})
      tlp3.to(i_etica, 0.1, {rotationX: 90,transformOrigin: "center center"})
      .to(t_etica, 0.1, {rotationX: 0});
    }
    function out_eticaChrome() {
      console.log("out");
      TweenMax.to(p_etica, 0.2, {scale: 1,ease: Power2.easeInOut});
      tlp3.to(t_etica, 0.1, {rotationX: 90})
      .to(i_etica, 0.1, {rotationX: 0,  transformOrigin: "center center"});
    }
    function over_eticaSafari() {
      console.log("over");
      TweenMax.to(p_etica, 0.2, {scale: 1.05,ease: Power2.easeInOut})
      tlp3.to(i_etica, 0.1, {css:{"-webkit-transform":"rotateX(90deg)",transformOrigin: "center center"}})
      .to(t_etica, 0.1, {css:{"-webkit-transform":"rotateX(0deg)"}});
    }
    function out_eticaSafari() {
      console.log("out");
      TweenMax.to(p_etica, 0.2, {scale: 1,ease: Power2.easeInOut});
      tlp3.to(t_etica, 0.1, {css:{"-webkit-transform":"rotateX(90deg)"}})
      .to(i_etica, 0.1, {css:{"-webkit-transform":"rotateX(0deg)",transformOrigin: "center center"}});
    }
  }

// Abrir HTML de cada puerta
  function startSalud(){
    $(document).on('click','body *',function(){
      window.open("salud.html", "_self");
    });
  }
  function startMedio(){
      window.open("ambiente.html", "_self");
    }
  function startEtica(){
      window.open("etica.html", "_self");
    }

  function frase1saludAnim(){
    fs1frase.style.visibility = "visible";

    TweenMax.set($("#fs1_sonprev > path"),{ transformOrigin: "center center",scale:0,opacity: 0,y:0});
    TweenMax.set($('#fs1_lasenfer'),{opacity: 0,y:30});
    TweenMax.set([$('#fs1sabias'),$('#fs1que')], {opacity:1,y:200});

    TweenMax.staggerTo([$('#fs1sabias'),$('#fs1que')], 0.6, {delay: 0.5, y:0, ease: Back.easeOut},0.3);

    TweenMax.set($("#fs1mano"),{transformOrigin: "center center",scale:0,opacity:0});

    new TimelineMax().to($('#fs1sabiasque'), 0.3,{delay:2, opacity:0})
    .to($('#fs1_lasenfer'), 0.5,{opacity:1,y:0})
    .staggerTo($("#fs1_sonprev > path"), 0.8,{delay:1,opacity: 1,scale: 1,ease: Back.easeOut,onComplete:startSalud},0.05)
    .to($("#fs1mano"),0.5,{delay:3,opacity:1,scale:1,ease:Back.easeOut},"-=0.3");

    new TimelineMax().to($("#fs1_sonprev"),0.8,{repeat:-1,yoyo:true,y:10,ease: Power0.easeNone});

    new TimelineMax({repeat:-1}).from($('#fs1circ'), 2,{transformOrigin: "center center",smoothOrigin: true,scale:0, ease: Power0.easeNone})
    .to($('#fs1circ'), 0.5,{opacity:0},'-=0.7');
  }

});
