let image = document.querySelector("img");
const button = document.querySelector("button");
let container = document.querySelector(".container");

button.addEventListener("click", function () {
  const imgaeName = image.src.split("/").pop();
  if (imgaeName == "5.jpg") {
    image.src = "2d.png";
    container.style.justifyContent = "end";
  } else {
    image.src = "5.jpg";
    container.style.justifyContent = "start";
  }
});
