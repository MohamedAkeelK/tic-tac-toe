let turn = 1;

let gameBoard = document.querySelector(".game-board");
let resetBtn = document.querySelector(".reset-btn");
let boxes = document.querySelectorAll(".box");
let p_turn = document.querySelector(".p-turn");

// let game_arr = [
//   ["X", "X", "X"],
//   ["X", "O", "X"],
//   ["X", "O", "X"],
// ];

// const WINNING_COMBOS = [];

function checkWinner() {
  for (let i = 0; i < boxes.length; i++) {
    // console.log(boxes[i].innerText);
    // if()
    // if(boxes[0])
  }
}

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
        boxes[i].innerText = "X";
        p_turn.innerText = "Player Turn: Blue";
        checkWinner();
      } else {
        boxes[i].classList.add("p2-clicked");
        p_turn.innerText = "Player Turn: Red";
        boxes[i].innerText = "O";
        checkWinner();
      }
      turn++;
    }
  });
}

resetBtn.addEventListener("click", (e) => {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].classList.contains("p1-clicked")) {
      boxes[i].classList.toggle("p1-clicked");
    }
    if (boxes[i].classList.contains("p2-clicked")) {
      boxes[i].classList.toggle("p2-clicked");
    }
  }
});
