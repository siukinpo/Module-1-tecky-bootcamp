// document.querySelector("#box-1").addEventListener("click", function (event) {

//   // 1. Get the element itself by event.target or event.currentTarget

//   // 2. Check if the box is occupied

//   // 3, Put the X in if the box is not occupied.
// });

// const buttons = document.querySelectorAll("div#panelContainer > button");
// console.log(buttons);
// for (let button of buttons) {
//   const btnID = button.id;
//   const id = btnID.replace("but", "");
//   console.log(id);

//   if (isNaN(id)) {
//     setupCalculatorFunc(button);
//   } else {
//     button.addEventListener("click", function (event) {
//       //   if (shouldReset) {
//       //     display.innerHTML = id;
//       //     shouldReset = false;
//       //   } else {
//       display.innerHTML = display.innerHTML + id;
//     });
//   }

const boxes = document.querySelectorAll(".row .box");

console.log(boxes);

let i = 0;
for (let box of boxes) {
  const boxID = boxes.id;
  console.log(box);
  box.addEventListener("click", function (event) {
    if (i % 2 == 0) {
      box.innerHTML = "X";
    } else if (i % 2 == 1) {
      box.innerHTML = "O";
    }
    i++;
  });
}

// const boxes = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
// let i = 0;
// for (let v of boxes) {
//   const box = document.getElementById("box" + v);

//   box.addEventListener("click", () => {
//     if (i % 2 == 0) {
//       box.innerHTML = "O";
//     } else {
//       box.innerHTML = "X";
//     }
//     i++;
//   });
// }
