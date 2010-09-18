function Juggle(canvas_id) {
  this.canvas_id = canvas_id;
  this.canvas = document.getElementById(canvas_id);
  this.context = this.canvas.getContext('2d');

  this.drawRectangle = function(x, y, w, h) {
    this.context.fillRect(x, y, w, h);
  };

  return true;
}
