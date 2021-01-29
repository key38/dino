const dino = document.getElementById("dino");

dino.style.backgroundColor = "green";

document.addEventListener("keyup", (e) => {
  console.log("La touche pressée est:", e.key);
  if (e.code === "ArrowUp") {
    console.log("On monte!");
    dino.style.backgroundColor = "red";
    dino.style.bottom = "150px";
  }
});
