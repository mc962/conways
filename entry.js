const Board = require('./board.js');
const Movement = require('./movement.js');




const init = () => {

  console.log('Init')

  let testBoardSize = 100;
  let boardContainer = document.getElementById('canvasLife');
  let lifeBoard = new Board(boardContainer, testBoardSize);
  const mover = new Movement(lifeBoard);
  let startButton = document.querySelector('.start-button');

  startButton.addEventListener('click', () => {mover.moveCells()});
  let pauseButton = document.querySelector('.pause-button');
  pauseButton.addEventListener('click', () => {mover.freezeCells()});
  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', () => {mover.clearCells()});
  let menuButton  = document.querySelector('.menu-button');
  let speedSlider = document.querySelector('.speed-slider');
  speedSlider.addEventListener('change', (e) => {mover.changeSpeed(e.currentTarget.value)})

  lifeBoard.constructGrid()
  lifeBoard.configureSpaces(1)
  lifeBoard.renderBoard()
}


document.addEventListener('DOMContentLoaded', init)
