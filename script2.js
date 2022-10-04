// selectors
const boxes = document.querySelectorAll(".box");
const p_turn = document.querySelector(".p-turn");
const resetBtn = document.querySelector(".reset-btn");

let turn = 1;

const game_arr = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
];
// check for winner
function checkWinner(mark) {
  console.log(boxes[0].innerText, boxes[1].innerText, boxes[2].innerText);
  if (
    (boxes[0].innerText === "X" &&
      boxes[1].innerText === "X" &&
      boxes[2].innerText === "X") ||
    (boxes[0].innerText === "O" &&
      boxes[1].innerText === "O" &&
      boxes[2].innerText === "O")
  ) {
    // console.log("hitt");
    return "Winner" + boxes[0].innerText;
  }
  // if (mark) {
  //   for (let i = 0; i < game_arr.length; i++) {
  //     for (let j = 0; j < game_arr.length; j++) {
  //       if (
  //         game_arr[i][j] === game_arr[i][j + 1] &&
  //         game_arr[i][j + 1] === game_arr[i][j + 2]
  //       ) {
  //         console.log("winner");
  //       }
  //     }
}

// add marker to game_arr
function addMarker(mark, i) {
  if (i >= 0 && i <= 2) {
    game_arr[0][i] = mark;
  } else if (i >= 3 && i <= 5) {
    game_arr[1][i - 3] = mark;
  } else if (i >= 6 && i <= 8) {
    game_arr[2][i - 6] = mark;
  } else {
    return;
  }
}

// box event listeners
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (
      boxes[i].classList.contains("p1-clicked") ||
      boxes[i].classList.contains("p2-clicked")
    ) {
      return;
    } else {
      if (turn % 2 === 0) {
        console.log("x called ");
        boxes[i].classList.add("p2-clicked");
        boxes[i].innerText = "O";
        addMarker(boxes[i].innerText, i);
        p_turn.innerText = "Player Turn: Red";
        console.log(checkWinner("X"));
      } else if (turn % 2 != 0) {
        console.log("O called ");
        boxes[i].classList.add("p1-clicked");
        boxes[i].innerText = "X";
        addMarker(boxes[i].innerText, i);
        checkWinner(boxes[i].innerText);
        p_turn.innerText = "Player Turn: Blue";
        console.log(checkWinner("O"));
        // checkWinner("O");
      } else {
        console.log("WTF");
      }
      turn++;
    }
  });
}

// reset button
resetBtn.addEventListener("click", (e) => {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].classList.contains("p1-clicked")) {
      boxes[i].classList.toggle("p1-clicked");
      boxes[i].innerText = "";
      // game_arr[]
    }
    if (boxes[i].classList.contains("p2-clicked")) {
      boxes[i].classList.toggle("p2-clicked");
      boxes[i].innerText = " ";
    }
  }
});
