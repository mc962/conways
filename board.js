const Cell = require('./cell.js');

class Board {
  constructor(boardContainer, size) {
    ////////////////////////

    // this.startConfig = [[2,2], [2,3], [2,4]]
    // this.startConfig = [[3,3], [2,3], [2,4], [2,5]]
    // this.startConfig = [[3, 3], [3, 4], [2, 5], [4, 4]]
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
  }




  configureSpaces(configChoice) {
    let directions;
    switch (configChoice) {
      case 1:
        directions = [[4, 1], [2, 2], [4, 2], [3, 3], [4, 3]]
        break;
      default:

    }
    this.applyConfiguration(directions)
  }

  applyConfiguration(directions) {
    for (let i = 0; i < directions.length; i++) {
      let space = this.board[directions[i][0]][directions[i][1]]
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
