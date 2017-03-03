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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = __webpack_require__(2);

var Board = function () {
  function Board(boardContainer, size) {
    _classCallCheck(this, Board);

    ////////////////////////
    this.startConfig = [[4, 1], [2, 2], [4, 2], [3, 3], [4, 3]];
    // this.startConfig = [[2,2], [2,3], [2,4]]
    // this.startConfig = [[3,3], [2,3], [2,4], [2,5]]
    // this.startConfig = [[3, 3], [3, 4], [2, 5], [4, 4]]
    ////////////////////////
    this.containerEl = $(boardContainer);
    this.board = [];

    this.boardSize = size;
  }

  // getSpace(pos) {
  //   return this.grid[pos[0]][pos[1]]
  // }
  //
  // setSpace(pos, val) {
  //   this.grid[pos[0]][pos[1]] = val;
  //   return val;
  // }


  _createClass(Board, [{
    key: 'constructGrid',
    value: function constructGrid() {

      for (var i = 0; i < Math.sqrt(this.boardSize); i++) {

        this.board.push(this.buildRow(i));
      }
      this.applyConfiguration();
    }
  }, {
    key: 'applyConfiguration',
    value: function applyConfiguration() {
      for (var i = 0; i < this.startConfig.length; i++) {
        var space = this.board[this.startConfig[i][0]][this.startConfig[i][1]];
        space.addFill(space.cell);
      }
    }
  }, {
    key: 'buildRow',
    value: function buildRow(rowIdx) {

      var gridRow = [];
      for (var colIdx = 0; colIdx < Math.sqrt(this.boardSize); colIdx++) {
        var square = new Cell([rowIdx, colIdx]);
        gridRow.push(square);
      }
      return gridRow;
    }
  }, {
    key: 'renderBoard',
    value: function renderBoard() {
      for (var i = 0; i < this.board.length; i++) {
        var $row = $('<ul>').addClass('row');
        for (var j = 0; j < this.board.length; j++) {
          $row.append(this.board[i][j].cell);
        }
        this.containerEl.append($row);
      }
    }
  }]);

  return Board;
}();

module.exports = Board;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = __webpack_require__(2);
var Board = __webpack_require__(0);

var Movement = function () {
  function Movement(gameBoard) {
    _classCallCheck(this, Movement);

    this.gameBoard = gameBoard;
  }

  _createClass(Movement, [{
    key: 'moveCells',
    value: function moveCells() {
      var _this = this;

      console.log("Let's get moving!");
      window.setInterval(function () {
        _this.checkCells();
      }, 100);
    }
  }, {
    key: 'checkCells',
    value: function checkCells() {
      this.willDieCells = [];
      this.willLiveCells = [];
      for (var i = 0; i < this.gameBoard.board.length; i++) {
        var boardRow = this.gameBoard.board[i];
        for (var j = 0; j < boardRow.length; j++) {
          var currentCell = boardRow[j];
          this.countNeighbors(currentCell);
          this.checkLife(currentCell);
          if (currentCell.neighbors === 3) {
            this.makeLife(currentCell);
          }
        }
      }
      this.updateBoard();
    }
  }, {
    key: 'countNeighbors',
    value: function countNeighbors(cell) {
      var neighborCounter = 0;
      var deltas = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];

      for (var i = 0; i < deltas.length; i++) {
        var neighborCoordRow = cell.coord[0] + deltas[i][0];
        var neighborCoordColumn = cell.coord[1] + deltas[i][1];

        var wrappedRowCoord = this.wrapCoord(neighborCoordRow);
        var wrappedColCoord = this.wrapCoord(neighborCoordColumn);
        var neighborCell = this.gameBoard.board[wrappedRowCoord][wrappedColCoord];

        if (neighborCell && neighborCell.fillStatus) {
          neighborCounter += 1;
        }
      }
      cell.neighbors = neighborCounter;
    }
  }, {
    key: 'wrapCoord',
    value: function wrapCoord(coord) {
      /////should consider making ivar for 10, the number of squares we can have


      if (coord < 0) {
        coord = 10 + coord;
      } else if (coord >= 10) {
        coord = coord % 10;
      }

      return coord;
    }
  }, {
    key: 'checkLife',
    value: function checkLife(square) {

      console.log('Checking for a pulse...');

      if (square.neighbors >= 4 || square.neighbors < 2) {
        this.willDieCells.push(square);
      }
    }
  }, {
    key: 'makeLife',
    value: function makeLife(square) {

      console.log('Undergoing mitosis...');
      this.willLiveCells.push(square);
    }
  }, {
    key: 'updateBoard',
    value: function updateBoard() {
      for (var i = 0; i < this.willLiveCells.length; i++) {

        var liveSquare = this.willLiveCells[i];
        liveSquare.addFill(liveSquare.cell);
      }

      for (var _i = 0; _i < this.willDieCells.length; _i++) {
        var dieSquare = this.willDieCells[_i];
        dieSquare.removeFill(dieSquare.cell);
      }
    }
  }]);

  return Movement;
}();

module.exports = Movement;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function () {
  function Cell(dataPoints) {
    _classCallCheck(this, Cell);

    this.coord = dataPoints;
    this.cell = this.constructSquare();
    this.fillStatus = false;
    this.neighbors = 0;

    this.squareClickHandler = this.squareClickHandler.bind(this);
  }

  _createClass(Cell, [{
    key: 'constructSquare',
    value: function constructSquare() {
      var _this = this;

      var $square = $("<li>").addClass('square').attr('data-pos', this.coord);
      $square.on("click", function (e) {
        _this.squareClickHandler(e);
      });
      return $square;
    }
  }, {
    key: 'squareClickHandler',
    value: function squareClickHandler(e) {
      var clickedEl = $(e.currentTarget);

      clickedEl.toggleClass('filled');
      this.fillStatus = !this.fillStatus;
    }
  }, {
    key: 'addFill',
    value: function addFill(el) {
      el.addClass('filled');
      this.fillStatus = true;
    }
  }, {
    key: 'removeFill',
    value: function removeFill(el) {
      el.removeClass('filled');
      this.fillStatus = false;
    }
  }]);

  return Cell;
}();

module.exports = Cell;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Board = __webpack_require__(0);
var Movement = __webpack_require__(1);

var init = function init() {

  console.log('Init');
  var boardContainer = document.getElementById('canvasLife');

  var testBoardSize = 100;
  var lifeBoard = new Board(boardContainer, testBoardSize);
  lifeBoard.constructGrid();
  lifeBoard.renderBoard();
  var mover = new Movement(lifeBoard);
  mover.moveCells();
};

document.addEventListener('DOMContentLoaded', init);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map