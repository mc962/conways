const Board = require('./board.js');
const Movement = require('./movement.js');




const init = () => {

  let boardContainer = document.getElementById('canvasLife');

  const defaultBoardSize = 1000;

  let lifeBoard = new Board(boardContainer, defaultBoardSize);


  const mover = new Movement(lifeBoard);

  let startButton = document.querySelector('.start-btn');
  startButton.addEventListener('click', () => {mover.moveCells()});
  mover.startButton = startButton

  let pauseButton = document.querySelector('.pause-btn');
  pauseButton.addEventListener('click', () => {mover.freezeCells()});
  mover.pauseButton = pauseButton

  $(mover.pauseButton).toggleClass('active-button')

  let menuButton  = document.querySelector('.menu-btn');
  menuButton.addEventListener('input', (e) => {mover.changeShape(e.currentTarget.value)})


  let clearButton = document.querySelector('.clear-btn');
  clearButton.addEventListener('click', () => {
    mover.freezeCells()
    lifeBoard.configureSpaces(menuButton.value)
  });

  let speedSlider = document.querySelector('.speed-slider');
  let sliderLabel = document.querySelector('.speed-slider-value');

  sliderLabel.value = speedSlider.value;
  speedSlider.addEventListener('input', (e) => {mover.changeSpeed(e.currentTarget.value, sliderLabel)})

  const defaultBoardShape = 'sunshine';
  lifeBoard.constructGrid();
  lifeBoard.renderBoard();
  lifeBoard.configureSpaces(defaultBoardShape);

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

  const popoverButton = $('.popover-launcher');


  popoverButton.on('click', revealPopover)
  const xButton = $('.x-button')
  xButton.on('click', hidePopover)
  const closeButton = $('.close-button')
  closeButton.on('click', hidePopover)

  let popoverMask = $('.popover')
  popoverMask.on('click', hidePopover)


  let progenitorCell = $('#cell1')
  progenitorCell.on('click', () => replicateCell(progenitorCell))
}

const replicateCell = (parentCell) => {
  let cellImageContainer = $('.petri-dish')
  let parentCellIdNum = parentCell.attr('id').slice(-1);
  const childCellIdNum = parseInt(parentCellIdNum) + 1
  const childCellId = `cell${childCellIdNum}`;
  let babyCell = $(`<img src="assets/images/cartoon-germ-virus.jpg" alt="germ" class='cell-picture' id=${childCellId}/>`)
  cellImageContainer.append(babyCell)
  babyCell.on('click', () => replicateCell(babyCell))
}

const revealPopover = () => {

  let popoverMask = $('.popover')
  let instructions = $('.instructions')
  // popoverMask.toggle('hidden-popover');
  popoverMask.addClass('transparent-popover');
  popoverMask.removeClass('hidden-popover');
  // instructions.toggle('hidden-instructions');
  instructions.addClass('instructions-display')
  instructions.removeClass('hidden-instructions');
}

const hidePopover = () => {
  let popoverMask = $('.popover')
  let instructions = $('.instructions')
  popoverMask.addClass('hidden-popover')
  popoverMask.removeClass('transparent-popover');
  // instructions.toggle('hidden-instructions');
  instructions.addClass('hidden-instructions')
  instructions.removeClass('instructions-display')

  let cellHorde = $('.cell-picture');
  cellHorde.slice(1).remove();
}


document.addEventListener('DOMContentLoaded', init)
