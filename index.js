var rectangles = [];
var juggle = null;

window.onload = function() {
  juggle = new Juggle('juggle_canvas');
  for (var i=1; i <= 256; i*=2) {
    if (i < 128) {
      rectangles.push(juggle.rectangle(i, i, i, i));
    } else {
      rectangles.push(juggle.square(i, i, i, i));
    }
  }
  setInterval(wiggle, 1000/24);
};

function wiggle() {
  var len = rectangles.length;
  for(var i=0; i < len; i++) {
    var rectangle = rectangles[i];
    juggle.start_batch();
    rectangle.x(rectangle.x() + Math.random()*10-5);
    rectangle.y(rectangle.y() + Math.random()*10-5);
    rectangle.w(rectangle.w() + Math.random()*10-5);
    rectangle.h(rectangle.h() + Math.random()*10-5);
    juggle.end_batch();
  }
}
