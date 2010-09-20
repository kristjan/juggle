function Juggle(canvas_id) {
  var canvas_id;
  var canvas = document.getElementById(canvas_id);
  var context = canvas.getContext('2d');
  var shapes = [];
  var batching = false;

  // Shapes
  this.rectangle = function(x, y, w, h) {
    var rectangle = new Rectangle(this, x, y, w, h);
    this.addShape(rectangle);
    this.redraw();
    return rectangle;
  };

  this.square = function(x, y, s) {
    var square = new Square(this, x, y, s);
    this.addShape(square);
    this.redraw();
    return square;
  };

  // Utilities
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
  this._juggle = juggle;
  this._x = x;
  this._y = y;
  this._w = w;
  this._h = h;

  this.draw = function(context) {
    context.fillRect(this._x, this._y, this._w, this._h);
  };

  this.x = function(value) {
    if (typeof (value) !== 'undefined') this._x = value;
    this._juggle.redraw();
    return this._x;
  };

  this.y = function(value) {
    if (typeof (value) !== 'undefined') this._y = value;
    this._juggle.redraw();
    return this._y;
  };

  this.w = function(value) {
    if (typeof (value) !== 'undefined') this._w = value;
    this._juggle.redraw();
    return this._w;
  };

  this.h = function(value) {
    if (typeof (value) !== 'undefined') this._h = value;
    this._juggle.redraw();
    return this._h;
  };

  return true
}

function Square(juggle, x, y, s) {
  this._juggle = juggle;
  this._x = x;
  this._y = y;
  this._s = s;

  this.draw = function(context) {
    context.fillRect(this._x, this._y, this._s, this._s);
  }

  this.w = this.h = this.s = function(value) {
    if (typeof (value) !== 'undefined') this._s = value;
    this._juggle.redraw();
    return this._s;
  };
}
Square.prototype = new Rectangle;
