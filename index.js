console.log("Loading");
window.onload = function() {
  console.log("Onload");
  juggle = new Juggle('juggle_canvas');
  console.log(juggle);
  juggle.drawRectangle(10, 10, 10, 10);
  juggle.drawRectangle(20, 20, 20, 20);
};
