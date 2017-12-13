$(document).ready(function() {

  //para no tener problemas son cambiar el anchorpoint
  CSSPlugin.defaultSmoothOrigin = true;

  //variables
  // var arrow1 = $("#arrow1");
  // var arrow2 = $("#arrow2");
  // var arrow3 = $("#arrow3");
  // var scrollButton = $("scrollButton");

  function dibujarMouse() {
    var tlmouse = new TimelineMax({repeat:-1});
    var tlarrows = new TimelineMax({repeat:-1});

    TweenMax.fromTo(mouseIcono, 2, {opacity:0}, {opacity:1});

    tlmouse.from(scrollButton, 0.5, {scaleY:0, transformOrigin: "center top", opacity:0, ease: Power2.easeInOut})
    .to(scrollButton, 0.5, {scaleY:0, transformOrigin: "center bottom", opacity:0, ease: Power2.easeOut}, 1)
    .from(arrow1, 0.3, {opacity:0, ease: Power2.easeIn}, 0.75)
    .from(arrow2, 0.3, {opacity:0, ease: Power2.easeInOut}, 1)
    .from(arrow3, 0.3, {opacity:0, ease: Power2.easeOut}, 1.25)
    .to(arrow1, 0.3, {opacity:0, ease: Power2.easeOut}, 1.25)
    .to(arrow2, 0.3, {opacity:0, ease: Power2.easeOut},1.5)
    .to(arrow3, 0.3, {opacity:0, ease: Power2.easeOut}, 1.75);

  }

});
