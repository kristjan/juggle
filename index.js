var rectangles = [];
var juggle = null;

var intervals = {}

$(document).ready(function() {
  juggle = new Juggle('juggle_canvas');
  init();
  $('button').click(goButtonGo);
  $('button#reset').click(init);
});

function init() {
  $('fieldset').each(function() {
    stopBehavior($(this).attr('id'));
  });
  juggle.removeAllShapes();
  for (var i=1; i <= 256; i*=2) {
    if (i < 128) {
      rectangles.push(juggle.rectangle(i, i, i, i));
    } else {
      rectangles.push(juggle.square(i, i, i, i));
    }
  }
}

function goButtonGo() {
  var button = $(this);
  var behavior = button.parent('fieldset').attr('id')
  if (button.hasClass('start')) {
    startBehavior(behavior);
  } else if (button.hasClass('stop')) {
    stopBehavior(behavior);
  }
}

function startBehavior(name) {
  var fn = eval(name);
  intervals[name] = setInterval(fn, 50);
}

function stopBehavior(name) {
  clearInterval(intervals[name]);
  intervals[name] = null;
}

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
