let turn = 1;

let gameBoard = document.querySelector(".game-board");
let resetBtn = document.querySelector(".reset-btn");
let boxes = document.querySelectorAll(".box");

gameBoard.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("p1-clicked") ||
    e.target.classList.contains("p2-clicked")
  ) {
    return;
  } else {
    if (turn % 2 === 0) {
      e.target.classList.add("p1-clicked");
    } else {
      e.target.classList.add("p2-clicked");
    }
    turn++;
  }
});

resetBtn.addEventListener("click", (e) => {
  // get all boxes and set the style to
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].classList.contains("p1-clicked")) {
      boxes[i].classList.toggle("p1-clicked");
    }
    if (boxes[i].classList.contains("p2-clicked")) {
      boxes[i].classList.toggle("p2-clicked");
    }
  }
});
