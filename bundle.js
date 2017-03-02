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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = __webpack_require__(1);

var Board = function () {
  function Board(boardContainer, size) {
    _classCallCheck(this, Board);

    ////////////////////////
    this.startConfig = [[0, 0], [0, 1]];
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
        // this.board.append(this.buildRow(i));
        this.board.push(this.buildRow(i));
      }
      this.applyConfiguration();
    }
  }, {
    key: 'applyConfiguration',
    value: function applyConfiguration() {
      for (var i = 0; i < this.startConfig.length; i++) {
        var space = this.board[this.startConfig[i][0]][this.startConfig[i][1]];
        space.fillToggler(space.cell);
      }
    }
  }, {
    key: 'buildRow',
    value: function buildRow(rowIdx) {
      // const $row = $('<ul>').addClass('row');
      var gridRow = [];
      for (var colIdx = 0; colIdx < Math.sqrt(this.boardSize); colIdx++) {
        var square = new Cell([rowIdx, colIdx]);
        gridRow.push(square);
        // $row.append(square.cell);
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

//
// class Tile {
//   constructor(i, j, ctx) {
//
//     this.filled = this.setInitialFill([i,j])
//
//     this.filled ? ctx.fillStyle = '#7CC432' : ctx.fillStyle = '#B45002';
//     ctx.fill()
//   }
//
//   /// will later be used to preset certain fill configurations, for now
//   /// everything will start as false
//   setInitialFill(coords) {
//     return false;
//   }
//   toggleColor(e) {
//
//   }
// }


module.exports = Board;

/***/ }),
/* 1 */
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
    // this.fillToggler = this.fillToggler.bind(this);
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

      this.fillToggler(clickedEl);
    }
  }, {
    key: 'fillToggler',
    value: function fillToggler(el) {

      el.toggleClass('filled');
      this.fillStatus = true;
    }
  }]);

  return Cell;
}();

module.exports = Cell;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Board = __webpack_require__(0);
var Movement = __webpack_require__(3);

var init = function init() {

  console.log('Init');
  var boardContainer = document.getElementById('canvasLife');

  var testBoardSize = 100;
  var lifeBoard = new Board(boardContainer, testBoardSize);
  lifeBoard.constructGrid();
  lifeBoard.renderBoard();
  var mover = new Movement(lifeBoard);
  mover.checkCells();
};

document.addEventListener('DOMContentLoaded', init);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = __webpack_require__(1);
var Board = __webpack_require__(0);

var Movement = function () {
  function Movement(gameBoard) {
    _classCallCheck(this, Movement);

    this.gameBoard = gameBoard;
  }

  _createClass(Movement, [{
    key: 'moveCells',
    value: function moveCells() {}
  }, {
    key: 'checkCells',
    value: function checkCells() {

      for (var i = 0; i < this.gameBoard.board.length; i++) {
        var boardRow = this.gameBoard.board[i];
        for (var j = 0; j < boardRow.length; j++) {
          var currentCell = boardRow[j];
          this.countNeighbors(currentCell);
          console.log(currentCell.coord + ', ' + currentCell.neighbors);
        }
      }
    }
  }, {
    key: 'countNeighbors',
    value: function countNeighbors(cell) {
      var neighborCounter = 0;
      var validDeltas = this.isValidSurrounding(cell.coord);

      for (var i = 0; i < validDeltas.length; i++) {
        var neighborCoordRow = cell.coord[0] + validDeltas[i][0];
        var neighborCoordColumn = cell.coord[1] + validDeltas[i][1];

        var neighborCell = this.gameBoard.board[neighborCoordRow][neighborCoordColumn];

        if (neighborCell && neighborCell.fillStatus) {
          neighborCounter += 1;
        }
      }
      cell.neighbors = neighborCounter;
    }
    // check if in bounds of the grid

  }, {
    key: 'isValidSurrounding',
    value: function isValidSurrounding(pos) {

      var goodDeltas = [];
      var deltas = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
      for (var i = 0; i < deltas.length; i++) {

        var xCoord = pos[0] + deltas[i][0];
        var yCoord = pos[1] + deltas[i][1];
        if (xCoord >= 0 && xCoord < this.gameBoard.board.length && yCoord >= 0 && yCoord < this.gameBoard.board.length) {
          goodDeltas.push(deltas[i]);
        }
      }
      return goodDeltas;
    }
  }, {
    key: 'checkLife',
    value: function checkLife(cell) {
      if (cell.fillStatus) {
        if (cell.neighbors > 4 || cell.neighbors < 2) {
          cell.fillToggler(cell);
        }
      }
    }
  }]);

  return Movement;
}();

module.exports = Movement;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map