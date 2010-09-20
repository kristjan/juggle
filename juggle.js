function Juggle(canvas_id) {
  var canvas_id;
  var canvas = document.getElementById(canvas_id);
  var context = canvas.getContext('2d');
  var shapes = [];
  var batching = false;

  this.rectangle = function(x, y, w, h) {
    var rect = new Rectangle(this, x, y, w, h);
    this.addShape(rect);
    this.redraw();
    return rect;
  };

  this.addShape = function(shape) {
    shapes.push(shape);
  };

  this.clear = function() {
    canvas.width = canvas.width;
  };

  this.draw = function() {
    var len = shapes.length;
    for (var i=0; i < len; i++) {
      shape = shapes[i];
      shape.draw(context);
    }
  };

  this.redraw = function() {
    if (batching) return;
    this.clear();
    this.draw();
  };

  this.start_batch = function() {
    batching = true;
  };

  this.end_batch = function() {
    batching = false;
    this.redraw();
  };

  return true;
}

function Rectangle(juggle, x, y, w, h) {
  var juggle, x, y, w, h;

  this.draw = function(context) {
    context.fillRect(x, y, w, h);
  };

  this.x = function(value) {
    if (typeof (value) !== 'undefined') x = value;
    juggle.redraw();
    return x;
  };

  this.y = function(value) {
    if (typeof (value) !== 'undefined') y = value;
    juggle.redraw();
    return y;
  };

  this.w = function(value) {
    if (typeof (value) !== 'undefined') w = value;
    juggle.redraw();
    return w;
  };

  this.h = function(value) {
    if (typeof (value) !== 'undefined') h = value;
    juggle.redraw();
    return h;
  };

  return true
}
