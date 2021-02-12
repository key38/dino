const dino = document.getElementById("dino");

dino.style.backgroundColor = "green";

document.addEventListener("keyup", (e) => {
  console.log("La touche pressée est:", e.key);
  if (e.code === "ArrowUp") {
    jump();
  }
});

function jump() {
  let position = 0;
  let timerId = setInterval(function () {
    if (position === 150) {
      clearInterval(timerId);
      let timerDownId = setInterval(function () {
        position -= 30;
        dino.style.bottom = position + "px";
        if (position === 0) clearInterval(timerDownId);
      }, 20);
    }
    position += 30;
    dino.style.bottom = position + "px";
  }, 20);
}

function generateCactuses() {
  let randomTime = Math.random() * 3000;
  let cactusPosition = 500;
  const cactus = document.createElement("div");
  cactus.classList.add("cactus");
  playground.appendChild(cactus);
  cactus.style.left = cactusPosition + "px";
  let timeInterval = setInterval(function () {
    if (0 === 1) {
      clearInterval(timerId);
      alert("Game Over");
    }
    cactusPosition -= 10;
    cactus.style.left = cactusPosition + "px";
  }, 20);
  setTimeout(generateCactuses, randomTime);
}

generateCactuses();
