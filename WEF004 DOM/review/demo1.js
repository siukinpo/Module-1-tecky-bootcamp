let box = document.querySelectorAll("#box-1");

box.addEventListener("click", function (event) {
  console.log(box);
  box.innerHTML = '<i class="bi bi-x"></i>';
});
