let board = document.querySelector(".board");
let cells = document.querySelectorAll(".box");
// console.log(board);

class TicTacToe {
  constructor() {
    this.local_board = ["", "", "", "", "", "", "", "", ""];
    this.winner = false;
    this.winning_mark = "";
    this.x = "X";
    this.o = "O";
    this.currentMark = this.x;
    this.addListeners();
    this.WinningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [6, 4, 2],
      [0, 4, 8],
    ];
  }
  addListeners() {
    cells.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        if (e.target.innerText === "") {
          this.placeMark(e.target);
          this.changePlayer();
        }
      });
    });
  }
  placeMark(target) {
    this.local_board[target.dataset.cell] = this.currentMark;
    target.innerText = this.currentMark;
    this.checkWinner();
  }
  changePlayer() {
    return this.currentMark === this.x
      ? (this.currentMark = this.o)
      : (this.currentMark = this.x);
  }
  checkWinner() {
    for (let i = 0; i < this.WinningCombos.length; i++) {
      let win = this.WinningCombos[i];
      let a = this.local_board[win[0]];
      let b = this.local_board[win[1]];
      let c = this.local_board[win[2]];
      console.log("a: ", a, "b: ", b, c, "c: ");
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        this.winning_mark = this.currentMark;
        this.winner = true;
        break;
      }
    }
  }
}
let game1 = new TicTacToe();
console.log(game1);
