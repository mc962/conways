class Board {
  constructor(boardContainer, size) {
    this.board = $(boardContainer)
    this.boardSize = size;

  }

  constructGrid() {

    for (let i = 0; i < Math.sqrt(this.boardSize); i++) {
      this.board.append(this.buildRow(i));
    }
  }

  buildRow(rowIdx) {
    const $row = $('<ul>').addClass('row');
    for (let colIdx = 0; colIdx < Math.sqrt(this.boardSize); colIdx++) {
      const $square = $("<li>").addClass('square').attr('data-pos', [rowIdx, colIdx]);
      $square.on("click", this.fillToggler)

      $row.append($square);
    }
    return $row;
  }

  fillToggler(e) {

    $(e.currentTarget).toggleClass('filled');
  }
  drawBoard () {

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
