const Cell = require('./cell.js');

class Board {
  constructor(boardContainer, size) {
    ////////////////////////
    this.startConfig = [[0, 0], [0, 1]]
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
      // this.board.append(this.buildRow(i));
      this.board.push(this.buildRow(i))
    }
    this.applyConfiguration()
  }

  applyConfiguration() {
    for (let i = 0; i < this.startConfig.length; i++) {
      let space = this.board[this.startConfig[i][0]][this.startConfig[i][1]]
      space.fillToggler(space.cell);
    }
  }

  buildRow(rowIdx) {
    // const $row = $('<ul>').addClass('row');
    const gridRow = []
    for (let colIdx = 0; colIdx < Math.sqrt(this.boardSize); colIdx++) {
      let square = new Cell([rowIdx, colIdx]);
      gridRow.push(square);
      // $row.append(square.cell);
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


//
// class Tile {
//   constructor(i, j, ctx) {
//
//     this.filled = this.setInitialFill([i,j])
//
//     this.filled ? ctx.fillStyle = '#7CC432' : ctx.fillStyle = '#B45002';
//     ctx.fill()
//   }
//
//   /// will later be used to preset certain fill configurations, for now
//   /// everything will start as false
//   setInitialFill(coords) {
//     return false;
//   }
//   toggleColor(e) {
//
//   }
// }


module.exports = Board;
