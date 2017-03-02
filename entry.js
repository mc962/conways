const Board = require('./board.js');

const init = () => {

  console.log('Init')
  let boardContainer = document.getElementById('canvasLife');

  let testBoardSize = 100;
  let lifeBoard = new Board(boardContainer, testBoardSize);
  lifeBoard.constructGrid()

}


document.addEventListener('DOMContentLoaded', init)
