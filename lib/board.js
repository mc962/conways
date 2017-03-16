const Cell = require('./cell.js');
const Shapes = require('./shapes.js')
class Board {
  constructor(boardContainer, size) {
    this.containerEl = $(boardContainer);
    this.boardSize = size
    this.setupBoard()

  }

  setupBoard() {
    this.board = []
    let midPos = [Math.floor(Math.sqrt(this.boardSize)/2), Math.floor(Math.sqrt(this.boardSize)/2)]
    this.configuration = new Shapes(midPos)
  }
// getSpace(pos) {
//   return this.grid[pos[0]][pos[1]]
// }
//
// setSpace(pos, val) {
//   this.grid[pos[0]][pos[1]] = val;
//   return val;
// }

  resizeBoard(newSize, configChoice) {
    let selectButton = $('.board-size').val(newSize).change()
    selectButton.value = this.boardSize
    this.containerEl.empty();
    this.boardSize = newSize;
    this.setupBoard(newSize);
    this.constructGrid()
    this.renderBoard()
    this.configureSpaces(configChoice)
  }

  constructGrid() {


    for (let i = 0; i < Math.sqrt(this.boardSize); i++) {

      this.board.push(this.buildRow(i))
    }
  }

  configureSpaces(configChoice = 'cleared') {
    this.clearBoard();
    let directions;
    // start in center position

    switch (configChoice) {
      case 'cleared':
        directions = [];
        break;

      case 'glider':
        if (this.boardSize < 10) {

          const safeSize = 100;
          this.resizeBoard(safeSize);
        }
        directions = this.configuration.seeds['GLIDER']
        break;

      case 'tetromino':
        if (this.boardSize < 85) {

          const safeSize = 100;
          this.resizeBoard(safeSize);

        }
        directions = this.configuration.seeds['TETROMINO']
        break;

      case 'gosper-glider':
        if (this.boardSize < 1600) {

          const safeSize = 3000;
          this.resizeBoard(safeSize);
        }
        directions = this.configuration.seeds['GOSPERGLIDER']

        break;

        case 'sunshine':
        if (this.boardSize < 260) {

          const safeSize = 300;
          this.resizeBoard(safeSize);
        }
          directions = this.configuration.seeds['SUNSHINE']
          break;

        case 'supernova':
        if (this.boardSize < 260) {          

          const safeSize = 300;
          this.resizeBoard(safeSize);
        }
          directions = this.configuration.seeds['SUPERNOVA'];
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

  clearBoard() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {

        let space = this.board[i][j];
        space.removeFill(space)
      }
    }
  }

  renderBoard() {
      for (let i = 0; i < this.board.length; i++) {
        const $row = $('<ul>').addClass('row');
        for (let j = 0; j < this.board[i].length; j++) {
          $row.append(this.board[i][j].cell)
        }
        this.containerEl.append($row);
      }

  }

}

module.exports = Board;
