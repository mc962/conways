const Cell = require('./cell.js');
const Board = require('./board.js');

class Movement {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;

  }

  moveCells() {
    console.log("Let's get moving!")
    window.setInterval(() => {this.checkCells()}, 100);
  }

  checkCells() {
    this.willDieCells = [];
    this.willLiveCells = [];
    for (let i = 0; i < this.gameBoard.board.length; i++) {
      let boardRow = this.gameBoard.board[i];
      for (let j = 0; j < boardRow.length; j++) {
        let currentCell = boardRow[j]
        this.countNeighbors(currentCell);
        this.checkLife(currentCell);
        if (currentCell.neighbors === 3) {
          this.makeLife(currentCell);
        }
      }
    }
    this.updateBoard();
  }

  countNeighbors(cell) {
    let neighborCounter = 0;
    const validDeltas = this.isValidSurrounding(cell.coord);

    for (let i = 0; i < validDeltas.length; i++) {
      let neighborCoordRow = cell.coord[0] + validDeltas[i][0];
      let neighborCoordColumn = cell.coord[1] + validDeltas[i][1];

      let neighborCell = this.gameBoard.board[neighborCoordRow][neighborCoordColumn]


      if (neighborCell && neighborCell.fillStatus) {
        neighborCounter += 1;
      }
    }
    cell.neighbors = neighborCounter;
  }
// check if in bounds of the grid
  isValidSurrounding(pos) {

    let goodDeltas = []
    const deltas = [
                      [1, 0],
                      [1, 1],
                      [0, 1],
                      [-1, 1],
                      [-1, 0],
                      [-1, -1],
                      [0, -1],
                      [1, -1]
                   ]
    for (let i = 0; i < deltas.length; i++) {

      let xCoord = pos[0] + deltas[i][0];
      let yCoord = pos[1] + deltas[i][1]
      if ((xCoord >= 0 && xCoord < this.gameBoard.board.length) && (yCoord >= 0 && yCoord < this.gameBoard.board.length)) {
        goodDeltas.push(deltas[i]);
      }
    }
    return goodDeltas;
  }


  checkLife(square) {

    console.log('Checking for a pulse...')

      if (square.neighbors >= 4 || square.neighbors < 2) {
        this.willDieCells.push(square);

    }
  }

  makeLife(square) {


      console.log('Undergoing mitosis...');
      this.willLiveCells.push(square)

  }

  updateBoard() {
    // gets stuck in a 2x2 at the end of the board
    debugger
    for (let i = 0; i < this.willLiveCells.length; i++) {

      let liveSquare = this.willLiveCells[i]
      liveSquare.addFill(liveSquare.cell)
    }

    for (let i = 0; i < this.willDieCells.length; i++) {
      let dieSquare = this.willDieCells[i]
      dieSquare.removeFill(dieSquare.cell)
    }
  }
}

module.exports = Movement
