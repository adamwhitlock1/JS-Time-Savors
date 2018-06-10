var body = document.body;

var onResize = function(e) {
  //note i need to pass the event as an argument to the function
  var viewportWidth = e.target.outerWidth;

  if (viewportWidth > 768) {
    body.classList.remove("mobile", "tablet");
    body.classList.add("desktop");
  }

  if (viewportWidth <= 768 && viewportWidth >  480) {
    $("body").removeClass("mobile desktop").addClass("tablet");
  }

  if (viewportWidth <= 480) {
    $("body").removeClass("tablet desktop").addClass("mobile");
  }
};

onResize();
window.addEventListener("resize", onResize);
