const Cell = require('./cell.js');

class Board {
  constructor(boardContainer, size) {
    ////////////////////////
    this.startConfig = [[4, 2], [2, 3], [4, 3], [3, 4], [4, 4]]
    // this.startConfig = [[2,2], [2,3], [2,4]]
    ////////////////////////
    this.containerEl = $(boardContainer);
    this.board = [];

    this.boardSize = size;

  }

// getSpace(pos) {
//   return this.grid[pos[0]][pos[1]]
// }
//
// setSpace(pos, val) {
//   this.grid[pos[0]][pos[1]] = val;
//   return val;
// }


  constructGrid() {

    for (let i = 0; i < Math.sqrt(this.boardSize); i++) {

      this.board.push(this.buildRow(i))
    }
    this.applyConfiguration()
  }

  applyConfiguration() {
    for (let i = 0; i < this.startConfig.length; i++) {
      let space = this.board[this.startConfig[i][0]][this.startConfig[i][1]]
      space.addFill(space.cell);
    }
  }

  buildRow(rowIdx) {

    const gridRow = []
    for (let colIdx = 0; colIdx < Math.sqrt(this.boardSize); colIdx++) {
      let square = new Cell([rowIdx, colIdx]);
      gridRow.push(square);

    }
    return gridRow;
  }

  renderBoard() {
      for (let i = 0; i < this.board.length; i++) {
        const $row = $('<ul>').addClass('row');
        for (let j = 0; j < this.board.length; j++) {
          $row.append(this.board[i][j].cell)
        }
        this.containerEl.append($row);
      }

  }

}

module.exports = Board;
