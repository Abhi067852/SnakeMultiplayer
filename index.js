const BG_COLOR = "black";
const SNAKE_COLOR = "#c2c2c2";
const FOOD_COLOR = "#e66916";

const gamescreen = document.getElementById("gamescreen");
let canvas, ctx;
function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = canvas.height = 600;
  //   var grd = ctx.createLinearGradient(0, 0, 200, 0);
  //   grd.addColorStop(0, "red");
  //   grd.addColorStop(1, "white");

  // Fill with gradient
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //   ctx.fillstyle = BG_COLOR;
  //   ctx.fillrectangle = (0, 0, canvas.width, canvas.height);
  document.addEventListener("keydown", keydown);
}
function keydown(e) {
  console.log(e.keyCode);
}
init();
