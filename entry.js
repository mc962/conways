const Board = require('./board.js');
const Movement = require('./movement.js');




const init = () => {

  let testBoardSize = 3000;
  let boardContainer = document.getElementById('canvasLife');
  let lifeBoard = new Board(boardContainer, testBoardSize);
  const mover = new Movement(lifeBoard);

  let startButton = document.querySelector('.start-btn');
  startButton.addEventListener('click', () => {mover.moveCells()});

  let pauseButton = document.querySelector('.pause-btn');
  pauseButton.addEventListener('click', () => {mover.freezeCells()});

  let clearButton = document.querySelector('.clear-btn');
  clearButton.addEventListener('click', () => {mover.clearCells()});

  let menuButton  = document.querySelector('.menu-btn');
  menuButton.addEventListener('change', (e) => {

    mover.changeShape(e.currentTarget.value)
  })

  let speedSlider = document.querySelector('.speed-slider');
  let sliderLabel = document.querySelector('.speed-slider-value');

  sliderLabel.value = speedSlider.value;
  speedSlider.addEventListener('input', (e) => {mover.changeSpeed(e.currentTarget.value, sliderLabel)})


  lifeBoard.constructGrid()
  lifeBoard.configureSpaces()
  lifeBoard.renderBoard()
}


document.addEventListener('DOMContentLoaded', init)
