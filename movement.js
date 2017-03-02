const Cell = require('./cell.js');
const Board = require('./board.js');

class Movement {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
  }

  moveCells() {

  }

  checkCells() {

    for (let i = 0; i < this.gameBoard.board.length; i++) {
      let boardRow = this.gameBoard.board[i];
      for (let j = 0; j < boardRow.length; j++) {
        let currentCell = boardRow[j]
        this.countNeighbors(currentCell);
        console.log(`${currentCell.coord}, ${currentCell.neighbors}`)
      }
    }
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




  checkLife(cell) {
    if (cell.fillStatus) {
      if (cell.neighbors > 4 || cell.neighbors < 2) {
        cell.fillToggler(cell)
      }
    }
  }
}

module.exports = Movement
