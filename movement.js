const Cell = require('./cell.js');
const Board = require('./board.js');

class Movement {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;

  }

  moveCells() {
    console.log("Let's get moving!")
    window.setInterval(() => {this.checkCells()}, 1000);
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
      let neighborCoordRow = (cell.coord[0] + deltas[i][0]);
      let neighborCoordColumn = (cell.coord[1] + deltas[i][1]);

      let wrappedRowCoord = this.wrapCoord(neighborCoordRow);
      let wrappedColCoord = this.wrapCoord(neighborCoordColumn);
      let neighborCell = this.gameBoard.board[wrappedRowCoord][wrappedColCoord]


      if (neighborCell && neighborCell.fillStatus) {
        neighborCounter += 1;
      }
    }
    cell.neighbors = neighborCounter;
  }

  wrapCoord(coord) {
    /////should consider making ivar for 10, the number of squares we can have


      if (coord < 0) {
        coord = 10 + coord
      } else if (coord >= 10) {
        coord = coord % 10;
      }

    return coord;
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
