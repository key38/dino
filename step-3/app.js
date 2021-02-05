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
