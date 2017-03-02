const Board = require('./board.js');
const Movement = require('./movement.js');




const init = () => {

  console.log('Init')
  let boardContainer = document.getElementById('canvasLife');

  let testBoardSize = 100;
  let lifeBoard = new Board(boardContainer, testBoardSize);
  lifeBoard.constructGrid()
  lifeBoard.renderBoard()
  const mover = new Movement(lifeBoard);
  mover.checkCells()
}


document.addEventListener('DOMContentLoaded', init)
