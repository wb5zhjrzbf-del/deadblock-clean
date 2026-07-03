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
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 30,
  speed: 4
};

let target = {
  x: player.x,
  y: player.y
};

canvas.addEventListener("touchstart", (e) => {
  const t = e.touches[0];
  target.x = t.clientX;
  target.y = t.clientY;
});

canvas.addEventListener("touchmove", (e) => {
  e.preventDefault();
  const t = e.touches[0];
  target.x = t.clientX;
  target.y = t.clientY;
}, { passive: false });

function update() {
  const dx = target.x - player.x;
  const dy = target.y - player.y;
  const dist = Math.hypot(dx, dy);

  if (dist > player.speed) {
    player.x += (dx / dist) * player.speed;
    player.y += (dy / dist) * player.speed;
  }

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "lime";
  ctx.fillRect(
    player.x - player.size / 2,
    player.y - player.size / 2,
    player.size,
    player.size
  );

  ctx.fillStyle = "white";
  ctx.font = "22px Arial";
  ctx.fillText("DeadBlock Alpha 0.2", 20, 35);

  requestAnimationFrame(update);
}

update();