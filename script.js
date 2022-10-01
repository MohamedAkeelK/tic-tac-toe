let turn = 1;

// let gameBoard = document.querySelector(".game-board");
let resetBtn = document.querySelector(".reset-btn");
let boxes = document.querySelectorAll(".box");
let p_turn = document.querySelector(".p-turn");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    console.log("clicked");
    if (
      boxes[i].classList.contains("p1-clicked") ||
      boxes[i].classList.contains("p2-clicked")
    ) {
      return;
    } else {
      if (turn % 2 === 0) {
        boxes[i].classList.add("p1-clicked");
        p_turn.innerText = "Player Turn: Blue";
      } else {
        boxes[i].classList.add("p2-clicked");
        p_turn.innerText = "Player Turn: Red";
      }
      turn++;
    }
  });
}

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
