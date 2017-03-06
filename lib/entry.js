const Board = require('./board.js');
const Movement = require('./movement.js');




const init = () => {

  let boardContainer = document.getElementById('canvasLife');

  let defaultBoardSize = 100;


  let lifeBoard = new Board(boardContainer, defaultBoardSize);


  const mover = new Movement(lifeBoard);

  let startButton = document.querySelector('.start-btn');
  startButton.addEventListener('click', () => {mover.moveCells()});
  mover.startButton = startButton

  let pauseButton = document.querySelector('.pause-btn');
  pauseButton.addEventListener('click', () => {mover.freezeCells()});
  mover.pauseButton = pauseButton

  $(mover.pauseButton).toggleClass('active-button')

  let clearButton = document.querySelector('.clear-btn');
  clearButton.addEventListener('click', () => {mover.clearCells()});

  let menuButton  = document.querySelector('.menu-btn');
  menuButton.addEventListener('input', (e) => {mover.changeShape(e.currentTarget.value)})


  let speedSlider = document.querySelector('.speed-slider');
  let sliderLabel = document.querySelector('.speed-slider-value');

  sliderLabel.value = speedSlider.value;
  speedSlider.addEventListener('input', (e) => {mover.changeSpeed(e.currentTarget.value, sliderLabel)})

  lifeBoard.constructGrid()
  lifeBoard.renderBoard()
  lifeBoard.configureSpaces()

  let sizeInput = document.querySelector('.board-size')
  sizeInput.addEventListener('input', (e) => {
    $(boardContainer).empty()
    const newBoardSize = e.currentTarget.value
    lifeBoard = new Board(boardContainer, newBoardSize);
    lifeBoard.constructGrid()
    lifeBoard.renderBoard();
    lifeBoard.configureSpaces();
    mover.freezeCells();
    mover.gameBoard = lifeBoard;
  })
}


document.addEventListener('DOMContentLoaded', init)
