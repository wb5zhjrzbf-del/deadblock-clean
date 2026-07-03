const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.background = "black";

const player = {
  x: 200,
  y: 200,
  size: 30
};

function update() {ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ===== JUGADOR =====
ctx.fillStyle = "lime";
ctx.fillRect(player.x, player.y, player.size, player.size);

// ===== MOVIMIENTO CON JOYSTICK =====
if (isTouching) {
  const dx = touchX - joystick.baseX;
  const dy = touchY - joystick.baseY;

  player.x += dx * 0.05;
  player.y += dy * 0.05;
}

// ===== JOYSTICK (DIBUJO) =====
ctx.beginPath();
ctx.arc(
  joystick.baseX,
  joystick.baseY,
  joystick.radius,
  0,
  Math.PI * 2
);
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.arc(
  joystick.knobX,
  joystick.knobY,
  joystick.knobRadius,
  0,
  Math.PI * 2
);
ctx.fillStyle = "white";
ctx.fill();

// ===== LOOP =====
requestAnimationFrame(update);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "lime";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("DeadBlock TEST OK", 20, 40);
// JOYSTICK DRAW
ctx.beginPath();
ctx.arc(joystick.baseX, joystick.baseY, joystick.radius, 0, Math.PI * 2);
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.arc(joystick.knobX, joystick.knobY, joystick.knobRadius, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
  requestAnimationFrame(update);
}

update();