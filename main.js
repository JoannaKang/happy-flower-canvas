import drawFlower from "./flower";

let flowers = [];
function drawFlowers() {
  const canvas = document.getElementById("canvas");
  canvas.width = 2000;
  canvas.height = 2000;
  const ctx = canvas.getContext("2d");
  for (let i = 0; i < flowers.length; i++) {
    drawFlower(flowers[i].c, flowers[i].radius, ctx);
  }
}
drawFlowers();
const selectBox = document.getElementById("size");
selectBox.addEventListener("change", function getSize() {
  const sizeValue = this.value;
  flowers.push({
    c: [
      canvas.width / 2 + (Math.random() - 0.5) * 400,
      canvas.height / 2 + (Math.random() - 0.5) * 400,
    ],
    radius: canvas.width * 0.5 * sizeValue * 0.4 * 0.15,
  });
  drawFlowers();
});
