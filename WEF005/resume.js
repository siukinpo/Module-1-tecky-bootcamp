const model = document.querySelector("div#model");
const showModelButton = document.querySelector("button#show");
const closeModelButton = document.querySelector("button#close");
console.log("start");
window.onload = () => {
  model.style.display = "none";
};

showModelButton.addEventListener("click", () => {
  console.log("click");
  model.style.display = "flex";
});

closeModelButton.addEventListener("click", () => {
  model.style.display = "none";
});
