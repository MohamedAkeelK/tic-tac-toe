let board = document.querySelector(".board");
let cells = document.querySelectorAll(".box");
let message = document.querySelector(".msg");
let resetBtn = document.querySelector(".reset-btn");

class TicTacToe {
  constructor() {
    this.local_board = ["", "", "", "", "", "", "", "", ""];
    this.winner = false;
    this.winning_mark = "";
    this.x = "X";
    this.o = "O";
    this.currentMark = this.x;
    this.message = "";
    this.handleCellClick();
    this.handleMessage();
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
  handleMessage() {
    message.innerText = `its ${this.currentMark}'s Turn`;
  }

  handleWinningMessage(winner) {
    message.innerText = `${winner} Wins!`;
  }

  handleCellClick() {
    cells.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        if (e.target.innerText === "" && this.winner === false) {
          this.placeMark(e.target);
          this.handleMessage();
          this.checkWinner();
          this.changePlayer();
        }
      });
    });

    resetBtn.addEventListener("click", () => {
      console.log("clicked");
      this.local_board = ["", "", "", "", "", "", "", "", ""];
      this.winner = false;
      this.winning_mark = "";
      this.currentMark = this.x;
      message.innerText = "";
      for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
      }
      this.handleMessage();
    });
  }
  placeMark(target) {
    this.local_board[target.dataset.cell] = this.currentMark;
    target.innerText = this.currentMark;
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
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        this.winning_mark = this.currentMark;
        this.winner = true;
        this.handleWinningMessage(this.currentMark);
        break;
      }
    }
  }
}

let game1 = new TicTacToe();
console.log(game1);
