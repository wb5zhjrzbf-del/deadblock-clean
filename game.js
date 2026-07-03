const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
  // Fondo negro
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Cuadrado verde
  ctx.fillStyle = "lime";
  ctx.fillRect(100, 100, 40, 40);

  // Texto de prueba
  ctx.fillStyle = "white";
  ctx.font = "24px Arial";
  ctx.fillText("DeadBlock Clean funciona", 20, 50);
}

draw();
