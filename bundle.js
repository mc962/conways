/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board(ctx, size) {
    _classCallCheck(this, Board);

    this.ctx = ctx;
    this.grid = this.constructGrid(size);
  }

  _createClass(Board, [{
    key: 'constructGrid',
    value: function constructGrid(size) {
      var boardGrid = [];
      for (var i = 0; i < size; i++) {
        var subArr = [];
        for (var j = 0; j < size; j++) {
          subArr.push(new Tile(i, j, this.ctx));
        }
        boardGrid.push(subArr);
      }
    }
  }, {
    key: 'drawBoard',
    value: function drawBoard() {
      this.ctx.beginPath();
      this.ctx.lineWidth = '6';
      this.ctx.strokeStyle = 'green';
      this.ctx.rect(0, 0, 500, 500);
      this.ctx.stroke();
    }
  }]);

  return Board;
}();

var Tile = function Tile(i, j, ctx) {
  _classCallCheck(this, Tile);

  this.ctx = ctx;
  this.pos = [i, j];
  this.ctx.beginPath();
  this.ctx.lineWidth = '1';
  this.ctx.strokeStyle = 'grey';
  this.ctx.rect(i * 10, j * 10, 10, 10);
  this.ctx.stroke();
};

module.exports = Board;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Board = __webpack_require__(0);

var init = function init() {

  console.log('Init');
  var canvas = document.getElementById('canvasLife');
  var context = canvas.getContext('2d');
  var testBoardSize = 100;
  var lifeBoard = new Board(context, testBoardSize);
  lifeBoard.drawBoard();
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
};

document.addEventListener('DOMContentLoaded', init);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map