console.log("hello");

let boxes = document.querySelectorAll(".box");

let currentPlayerIcon = document.querySelector(".current-player i");

let xIcon = "bi-x";
let oIcon = "bi-record";

let winningConditions = [
  [0, 1, 2][(3, 4, 5)][(7, 8, 9)][(1, 4, 7)][(2, 5, 8)][(0, 4, 8)][(2, 4, 6)],
];

for (let box of boxes) {
  box.addEventListener("click", function (event) {
    if (box.className === "box") {
      if (currentPlayerIcon.classList.contains(xIcon)) {
        box.innerHTML = `<i class="bi ${xIcon}"></i>`;
        box.classList.add("player-x");

        currentPlayerIcon.classList.remove(xIcon);
        document
          .querySelector(".players .player.player-x")
          .classList.remove("current");

        currentPlayerIcon.classList.add(oIcon);
        document
          .querySelector(".players .player.player-o")
          .classList.add("current");

        checkWinner("player-x");
      } else {
        box.innerHTML = `<i class="bi ${oIcon}"></i>`;
        box.classList.add("player-o");

        currentPlayerIcon.classList.add(xIcon);
        document
          .querySelector(".players .player.player-x")
          .classList.add("current");

        currentPlayerIcon.classList.remove(oIcon);
        document
          .querySelector(".players .player.player-o")
          .classList.remove("current");

        checkWinner("player-o");
      }
    }
  });
}

function placeStep(player, icon, box) {
  box.innerHTML = `<i class="bi ${icon}"></i>`;
  box.classList.add("player-o");

  currentPlayerIcon.classList.add(xIcon);
  document.querySelector(".players .player.player-x").classList.add("current");

  currentPlayerIcon.classList.remove(oIcon);
  document
    .querySelector(`.players .player.${player}`)
    .classList.remove("current");

  checkWinner("player-o");
}

function checkWinner(player) {}
