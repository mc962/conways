const Board = require('./board.js');

const init = () => {

  console.log('Init')
  let canvas = document.getElementById('canvasLife');
  let context = canvas.getContext('2d');
  let testBoardSize = 100;
  let lifeBoard = new Board(context, testBoardSize);
  lifeBoard.drawBoard()
  // let centerX = canvas.width / 2;
  // let centerY = canvas.height / 2;
  // let radius = 70;
  // ctx.beginPath();
  // ctx.arc(centerX, centerY, radius, 0, 2*Math.PI, false)
  // ctx.fillStyle='green';
  // ctx.fill()
  // let stage = new createjs.Stage("canvasLife");
  // let circle = new createjs.Shape();
  // let lifeBoard = new Board;

  // circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 10);
  // circle.x = 100;
  // circle.y = 100;
  // stage.addChild(lifeBoard);
  // stage.addChild(circle);
  // stage.update();
}


document.addEventListener('DOMContentLoaded', init)
