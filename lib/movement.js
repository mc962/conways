const Cell = require('./cell.js');
const Board = require('./board.js');

class Movement {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.isMoving = false;
    this.timing = 1000;
    this.startButton = ''
    this.pauseButton = ''
  }

  moveCells() {
    if (!this.isMoving) {
      this.cycler = window.setInterval(() => {this.checkCells()}, this.timing);
      this.isMoving = true;
      this.toggleActiveButton()
    }
  }

  toggleActiveButton() {

    $(this.startButton).toggleClass('active-button')
    $(this.pauseButton).toggleClass('active-button')
  }

  changeSpeed(speedMagnitude, sliderLabel) {
    let speed = 1000-(100*speedMagnitude - 100);
    this.timing = speed;
    if (this.isMoving) {
      // look into better way than clearing interval and setting a new one
      window.clearInterval(this.cycler);
      this.cycler = window.setInterval(() => {this.checkCells()}, this.timing);
    }
    sliderLabel.value = speedMagnitude;
  }

  changeShape(newShape) {
    if (this.isMoving) {

      this.freezeCells();
    }

    window.clearInterval(this.cycler);
    this.gameBoard.configureSpaces(newShape);
  }

  freezeCells() {
    if (this.isMoving) {
      window.clearInterval(this.cycler);
      this.isMoving = false;
      this.toggleActiveButton()
    }

  }

  clearCells() {
    this.gameBoard.clearBoard()
    if (this.isMoving) {
      this.freezeCells();      
    }
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


      if (coord < 0) {
        coord = Math.floor(Math.sqrt(this.gameBoard.boardSize)) + coord
      } else if (coord >= Math.floor(Math.sqrt(this.gameBoard.boardSize))) {
        coord = coord % Math.floor(Math.sqrt(this.gameBoard.boardSize));
      }

    return coord;
  }
  checkLife(square) {

      if (square.neighbors >= 4 || square.neighbors < 2) {
        this.willDieCells.push(square);

    }
  }

  makeLife(square) {
      this.willLiveCells.push(square)

  }

  updateBoard() {
    for (let i = 0; i < this.willLiveCells.length; i++) {

      let liveSquare = this.willLiveCells[i]
      liveSquare.addFill(liveSquare.cell)
    }

    for (let i = 0; i < this.willDieCells.length; i++) {
      let dieSquare = this.willDieCells[i]
      dieSquare.removeFill(dieSquare)
    }
  }

}

module.exports = Movement
