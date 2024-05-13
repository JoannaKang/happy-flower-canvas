import drawFlower from "./flower";

drawFlower(1);
const selectBox = document.getElementById("size");
selectBox.addEventListener("change", function getSizeValue() {
  const sizeValue = this.value;
  drawFlower(sizeValue);
});
