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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = __webpack_require__(1);
var Shapes = __webpack_require__(3);

var Board = function () {
  function Board(boardContainer, size) {
    _classCallCheck(this, Board);

    this.containerEl = $(boardContainer);
    this.boardSize = size;
    this.setupBoard();
  }

  _createClass(Board, [{
    key: 'setupBoard',
    value: function setupBoard() {
      this.board = [];
      var midPos = [Math.floor(Math.sqrt(this.boardSize) / 2), Math.floor(Math.sqrt(this.boardSize) / 2)];
      this.configuration = new Shapes(midPos);
    }
    // getSpace(pos) {
    //   return this.grid[pos[0]][pos[1]]
    // }
    //
    // setSpace(pos, val) {
    //   this.grid[pos[0]][pos[1]] = val;
    //   return val;
    // }

  }, {
    key: 'resizeBoard',
    value: function resizeBoard(newSize, configChoice) {
      var selectButton = $('.board-size').val(newSize).change();
      selectButton.value = this.boardSize;
      this.containerEl.empty();
      this.boardSize = newSize;
      this.setupBoard(newSize);
      this.constructGrid();
      this.renderBoard();
      this.configureSpaces(configChoice);
    }
  }, {
    key: 'constructGrid',
    value: function constructGrid() {

      for (var i = 0; i < Math.sqrt(this.boardSize); i++) {

        this.board.push(this.buildRow(i));
      }
    }
  }, {
    key: 'configureSpaces',
    value: function configureSpaces() {
      var configChoice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cleared';

      this.clearBoard();
      var directions = void 0;
      // start in center position

      switch (configChoice) {
        case 'cleared':
          directions = [];
          break;

        case 'glider':
          if (this.boardSize < 10) {
            alert('Board too small for this configuration. Board will resize on close.');

            var safeSize = 100;
            this.resizeBoard(safeSize);
          }
          directions = this.configuration.seeds['GLIDER'];
          break;

        case 'tetromino':
          if (this.boardSize < 85) {
            alert('Board too small for this configuration. Board will resize on close.');

            var _safeSize = 100;
            this.resizeBoard(_safeSize);
          }
          directions = this.configuration.seeds['TETROMINO'];
          break;

        case 'gosper-glider':
          if (this.boardSize < 1600) {
            alert('Board too small for this configuration. Board will resize on close.');

            var _safeSize2 = 3000;
            this.resizeBoard(_safeSize2);
          }
          directions = this.configuration.seeds['GOSPERGLIDER'];

          break;

        case 'sunshine':
          if (this.boardSize < 260) {
            alert('Board too small for this configuration. Board will resize on close.');

            var _safeSize3 = 300;
            this.resizeBoard(_safeSize3);
          }
          directions = this.configuration.seeds['SUNSHINE'];
          break;

        case 'supernova':
          if (this.boardSize < 260) {
            alert('Board too small for this configuration. Board will resize on close.');

            var _safeSize4 = 300;
            this.resizeBoard(_safeSize4);
          }
          directions = this.configuration.seeds['SUPERNOVA'];
          break;

        default:

      }

      this.applyConfiguration(directions);
    }
  }, {
    key: 'applyConfiguration',
    value: function applyConfiguration(directions) {
      for (var i = 0; i < directions.length; i++) {
        var space = this.board[directions[i][0]][directions[i][1]];
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
    key: 'clearBoard',
    value: function clearBoard() {
      for (var i = 0; i < this.board.length; i++) {
        for (var j = 0; j < this.board.length; j++) {

          var space = this.board[i][j];
          space.removeFill(space);
        }
      }
    }
  }, {
    key: 'renderBoard',
    value: function renderBoard() {
      for (var i = 0; i < this.board.length; i++) {
        var $row = $('<ul>').addClass('row');
        for (var j = 0; j < this.board[i].length; j++) {
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

      el.cell.removeClass('filled');
      this.fillStatus = false;
    }
  }]);

  return Cell;
}();

module.exports = Cell;

/***/ }),
/* 2 */
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
    this.isMoving = false;
    this.timing = 1000;
    this.startButton = '';
    this.pauseButton = '';
  }

  _createClass(Movement, [{
    key: 'moveCells',
    value: function moveCells() {
      var _this = this;

      if (!this.isMoving) {
        this.cycler = window.setInterval(function () {
          _this.checkCells();
        }, this.timing);
        this.isMoving = true;
        this.toggleActiveButton();
      }
    }
  }, {
    key: 'toggleActiveButton',
    value: function toggleActiveButton() {

      $(this.startButton).toggleClass('active-button');
      $(this.pauseButton).toggleClass('active-button');
    }
  }, {
    key: 'changeSpeed',
    value: function changeSpeed(speedMagnitude, sliderLabel) {
      var _this2 = this;

      var speed = 1000 - (100 * speedMagnitude - 100);
      this.timing = speed;
      if (this.isMoving) {
        // look into better way than clearing interval and setting a new one
        window.clearInterval(this.cycler);
        this.cycler = window.setInterval(function () {
          _this2.checkCells();
        }, this.timing);
      }
      sliderLabel.value = speedMagnitude;
    }
  }, {
    key: 'changeShape',
    value: function changeShape(newShape) {
      if (this.isMoving) {

        this.freezeCells();
      }

      window.clearInterval(this.cycler);
      this.gameBoard.configureSpaces(newShape);
    }
  }, {
    key: 'freezeCells',
    value: function freezeCells() {
      if (this.isMoving) {
        window.clearInterval(this.cycler);
        this.isMoving = false;
        this.toggleActiveButton();
      }
    }
  }, {
    key: 'clearCells',
    value: function clearCells() {
      this.gameBoard.clearBoard();
      if (this.isMoving) {
        this.freezeCells();
      }
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

      if (coord < 0) {
        coord = Math.floor(Math.sqrt(this.gameBoard.boardSize)) + coord;
      } else if (coord >= Math.floor(Math.sqrt(this.gameBoard.boardSize))) {
        coord = coord % Math.floor(Math.sqrt(this.gameBoard.boardSize));
      }

      return coord;
    }
  }, {
    key: 'checkLife',
    value: function checkLife(square) {

      if (square.neighbors >= 4 || square.neighbors < 2) {
        this.willDieCells.push(square);
      }
    }
  }, {
    key: 'makeLife',
    value: function makeLife(square) {
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
        dieSquare.removeFill(dieSquare);
      }
    }
  }]);

  return Movement;
}();

module.exports = Movement;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shapes = function () {
  function Shapes(startPos) {
    _classCallCheck(this, Shapes);

    this.startPos = startPos;
    this.seeds = {
      'TETROMINO': this.tetromino(),
      'GLIDER': this.glider(),
      'GOSPERGLIDER': this.gosperGlider(),
      'SUNSHINE': this.sunshine(),
      'SUPERNOVA': this.supernova()
    };
  }

  _createClass(Shapes, [{
    key: 'glider',
    value: function glider() {
      return [this.startPos, [this.startPos[0] + 2, this.startPos[1] - 1], [this.startPos[0] + 2, this.startPos[1] + 0], [this.startPos[0] + 1, this.startPos[1] + 1], [this.startPos[0] + 2, this.startPos[1] + 1]];
    }
  }, {
    key: 'tetromino',
    value: function tetromino() {
      return [this.startPos, [this.startPos[0] + 0, this.startPos[1] - 1], [this.startPos[0] + 0, this.startPos[1] + 1], [this.startPos[0] + 1, this.startPos[1] + 0]];
    }
  }, {
    key: 'gosperGlider',
    value: function gosperGlider() {
      return [[this.startPos[0] - 2, this.startPos[1] - 17], [this.startPos[0] - 3, this.startPos[1] - 17], [this.startPos[0] - 2, this.startPos[1] - 18], [this.startPos[0] - 3, this.startPos[1] - 18], [this.startPos[0] - 1, this.startPos[1] - 9], [this.startPos[0] - 1, this.startPos[1] - 10], [this.startPos[0] - 2, this.startPos[1] - 10], [this.startPos[0] - 3, this.startPos[1] - 9], [this.startPos[0] - 3, this.startPos[1] - 8], [this.startPos[0] - 2, this.startPos[1] - 8], this.startPos, [this.startPos[0] - 1, this.startPos[1] - 1], [this.startPos[0] - 1, this.startPos[1] - 2], [this.startPos[0] + 0, this.startPos[1] - 2], [this.startPos[0] + 1, this.startPos[1] - 2], [this.startPos[0] - 3, this.startPos[1] + 4], [this.startPos[0] - 4, this.startPos[1] + 4], [this.startPos[0] - 3, this.startPos[1] + 5], [this.startPos[0] - 5, this.startPos[1] + 5], [this.startPos[0] - 5, this.startPos[1] + 6], [this.startPos[0] - 4, this.startPos[1] + 6], [this.startPos[0] + 7, this.startPos[1] + 6], [this.startPos[0] + 8, this.startPos[1] + 6], [this.startPos[0] + 7, this.startPos[1] + 7], [this.startPos[0] + 9, this.startPos[1] + 7], [this.startPos[0] + 7, this.startPos[1] + 8], [this.startPos[0] - 5, this.startPos[0] + 16], [this.startPos[0] - 4, this.startPos[0] + 16], [this.startPos[0] - 5, this.startPos[0] + 17], [this.startPos[0] - 4, this.startPos[0] + 17], [this.startPos[0] + 2, this.startPos[0] + 17], [this.startPos[0] + 3, this.startPos[0] + 17], [this.startPos[0] + 4, this.startPos[0] + 17], [this.startPos[0] + 2, this.startPos[0] + 18], [this.startPos[0] + 3, this.startPos[0] + 19]];
    }
  }, {
    key: 'sunshine',
    value: function sunshine() {
      return [[this.startPos[0] + 3, this.startPos[1] - 7], [this.startPos[0] - 3, this.startPos[1] - 7], [this.startPos[0] + 3, this.startPos[1] - 6], [this.startPos[0] - 3, this.startPos[1] - 6], [this.startPos[0] + 3, this.startPos[1] - 5], [this.startPos[0] + 2, this.startPos[1] - 5], [this.startPos[0] - 2, this.startPos[1] - 5], [this.startPos[0] - 3, this.startPos[1] - 5], [this.startPos[0] - 7, this.startPos[1] - 3], [this.startPos[0] - 6, this.startPos[1] - 3], [this.startPos[0] - 5, this.startPos[1] - 3], [this.startPos[0] - 2, this.startPos[1] - 3], [this.startPos[0] - 1, this.startPos[1] - 3], [this.startPos[0] + 1, this.startPos[1] - 3], [this.startPos[0] + 2, this.startPos[1] - 3], [this.startPos[0] + 5, this.startPos[1] - 3], [this.startPos[0] + 6, this.startPos[1] - 3], [this.startPos[0] + 7, this.startPos[1] - 3], [this.startPos[0] - 5, this.startPos[1] - 2], [this.startPos[0] - 3, this.startPos[1] - 2], [this.startPos[0] - 1, this.startPos[1] - 2], [this.startPos[0] + 1, this.startPos[1] - 2], [this.startPos[0] + 3, this.startPos[1] - 2], [this.startPos[0] + 5, this.startPos[1] - 2], [this.startPos[0] - 3, this.startPos[1] - 1], [this.startPos[0] - 2, this.startPos[1] - 1], [this.startPos[0] + 2, this.startPos[1] - 1], [this.startPos[0] + 3, this.startPos[1] - 1],
      //////////////
      [this.startPos[0] + 3, this.startPos[1] + 7], [this.startPos[0] - 3, this.startPos[1] + 7], [this.startPos[0] + 3, this.startPos[1] + 6], [this.startPos[0] - 3, this.startPos[1] + 6], [this.startPos[0] + 3, this.startPos[1] + 5], [this.startPos[0] + 2, this.startPos[1] + 5], [this.startPos[0] - 2, this.startPos[1] + 5], [this.startPos[0] - 3, this.startPos[1] + 5], [this.startPos[0] - 7, this.startPos[1] + 3], [this.startPos[0] - 6, this.startPos[1] + 3], [this.startPos[0] - 5, this.startPos[1] + 3], [this.startPos[0] - 2, this.startPos[1] + 3], [this.startPos[0] - 1, this.startPos[1] + 3], [this.startPos[0] + 1, this.startPos[1] + 3], [this.startPos[0] + 2, this.startPos[1] + 3], [this.startPos[0] + 5, this.startPos[1] + 3], [this.startPos[0] + 6, this.startPos[1] + 3], [this.startPos[0] + 7, this.startPos[1] + 3], [this.startPos[0] - 5, this.startPos[1] + 2], [this.startPos[0] - 3, this.startPos[1] + 2], [this.startPos[0] - 1, this.startPos[1] + 2], [this.startPos[0] + 1, this.startPos[1] + 2], [this.startPos[0] + 3, this.startPos[1] + 2], [this.startPos[0] + 5, this.startPos[1] + 2], [this.startPos[0] - 3, this.startPos[1] + 1], [this.startPos[0] - 2, this.startPos[1] + 1], [this.startPos[0] + 2, this.startPos[1] + 1], [this.startPos[0] + 3, this.startPos[1] + 1]];
    }
  }, {
    key: 'supernova',
    value: function supernova() {
      return [[this.startPos[0] + 3, this.startPos[1] - 7], [this.startPos[0] - 3, this.startPos[1] - 7], [this.startPos[0] + 3, this.startPos[1] - 6], [this.startPos[0] - 3, this.startPos[1] - 6], [this.startPos[0] + 3, this.startPos[1] - 5], [this.startPos[0] + 2, this.startPos[1] - 5], [this.startPos[0] - 2, this.startPos[1] - 5], [this.startPos[0] - 3, this.startPos[1] - 5], [this.startPos[0] - 7, this.startPos[1] - 3], [this.startPos[0] - 6, this.startPos[1] - 3], [this.startPos[0] - 5, this.startPos[1] - 3], [this.startPos[0] - 2, this.startPos[1] - 3], [this.startPos[0] - 1, this.startPos[1] - 3], [this.startPos[0] + 1, this.startPos[1] - 3], [this.startPos[0] + 2, this.startPos[1] - 3], [this.startPos[0] + 5, this.startPos[1] - 3], [this.startPos[0] + 6, this.startPos[1] - 3], [this.startPos[0] + 7, this.startPos[1] - 3], [this.startPos[0] - 5, this.startPos[1] - 2], [this.startPos[0] - 3, this.startPos[1] - 2], [this.startPos[0] - 1, this.startPos[1] - 2], [this.startPos[0] + 1, this.startPos[1] - 2], [this.startPos[0] + 3, this.startPos[1] - 2], [this.startPos[0] + 5, this.startPos[1] - 2], [this.startPos[0] - 3, this.startPos[1] - 1], [this.startPos[0] - 2, this.startPos[1] - 1], [this.startPos[0] + 2, this.startPos[1] - 1], [this.startPos[0] + 3, this.startPos[1] - 1],
      //////////////
      [this.startPos[0] + 3, this.startPos[1] + 7], [this.startPos[0] - 3, this.startPos[1] + 7], [this.startPos[0] + 3, this.startPos[1] + 6], [this.startPos[0] - 3, this.startPos[1] + 6], [this.startPos[0] + 3, this.startPos[1] + 5], [this.startPos[0] + 2, this.startPos[1] + 5], [this.startPos[0] - 2, this.startPos[1] + 5], [this.startPos[0] - 3, this.startPos[1] + 5], [this.startPos[0] - 7, this.startPos[1] + 3], [this.startPos[0] - 6, this.startPos[1] + 3], [this.startPos[0] - 5, this.startPos[1] + 3], [this.startPos[0] - 2, this.startPos[1] + 3], [this.startPos[0] - 1, this.startPos[1] + 3], [this.startPos[0] + 1, this.startPos[1] + 3], [this.startPos[0] + 2, this.startPos[1] + 3], [this.startPos[0] + 5, this.startPos[1] + 3], [this.startPos[0] + 6, this.startPos[1] + 3], [this.startPos[0] + 7, this.startPos[1] + 3], [this.startPos[0] - 5, this.startPos[1] + 2], [this.startPos[0] - 3, this.startPos[1] + 2], [this.startPos[0] - 1, this.startPos[1] + 2], [this.startPos[0] + 1, this.startPos[1] + 2], [this.startPos[0] + 3, this.startPos[1] + 2], [this.startPos[0] + 5, this.startPos[1] + 2], [this.startPos[0] - 3, this.startPos[1] + 1], [this.startPos[0] - 2, this.startPos[1] + 1], [this.startPos[0] + 2, this.startPos[1] + 1], [this.startPos[0] + 3, this.startPos[1] + 1], this.startPos, [this.startPos[0] + 0, this.startPos[1] + 5], [this.startPos[0] + 0, this.startPos[1] - 5], [this.startPos[0] - 5, this.startPos[1] + 0], [this.startPos[0] + 5, this.startPos[1] + 0]];
    }
  }]);

  return Shapes;
}();

module.exports = Shapes;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Board = __webpack_require__(0);
var Movement = __webpack_require__(2);

var init = function init() {

  var boardContainer = document.getElementById('canvasLife');

  var defaultBoardSize = 1000;

  var lifeBoard = new Board(boardContainer, defaultBoardSize);

  var mover = new Movement(lifeBoard);

  var startButton = document.querySelector('.start-btn');
  startButton.addEventListener('click', function () {
    mover.moveCells();
  });
  mover.startButton = startButton;

  var pauseButton = document.querySelector('.pause-btn');
  pauseButton.addEventListener('click', function () {
    mover.freezeCells();
  });
  mover.pauseButton = pauseButton;

  $(mover.pauseButton).toggleClass('active-button');

  var menuButton = document.querySelector('.menu-btn');
  menuButton.addEventListener('input', function (e) {
    mover.changeShape(e.currentTarget.value);
  });

  var clearButton = document.querySelector('.clear-btn');
  clearButton.addEventListener('click', function () {
    mover.freezeCells();
    lifeBoard.configureSpaces(menuButton.value);
  });

  var speedSlider = document.querySelector('.speed-slider');
  var sliderLabel = document.querySelector('.speed-slider-value');

  sliderLabel.value = speedSlider.value;
  speedSlider.addEventListener('input', function (e) {
    mover.changeSpeed(e.currentTarget.value, sliderLabel);
  });

  var defaultBoardShape = 'sunshine';
  lifeBoard.constructGrid();
  lifeBoard.renderBoard();
  lifeBoard.configureSpaces(defaultBoardShape);

  var sizeInput = document.querySelector('.board-size');
  sizeInput.addEventListener('input', function (e) {
    $(boardContainer).empty();
    var newBoardSize = e.currentTarget.value;
    lifeBoard = new Board(boardContainer, newBoardSize);
    lifeBoard.constructGrid();
    lifeBoard.renderBoard();
    lifeBoard.configureSpaces();
    mover.freezeCells();
    mover.gameBoard = lifeBoard;
  });

  var popoverButton = $('.popover-launcher');

  popoverButton.on('click', revealPopover);
  var xButton = $('.x-button');
  xButton.on('click', hidePopover);
  var closeButton = $('.close-button');
  closeButton.on('click', hidePopover);

  var popoverMask = $('.popover');
  popoverMask.on('click', hidePopover);

  var rulesBox = $('.rules-container');
  var controlsBox = $('.controls-container');
  var leftButton = $('.left-arrow-nav-btn');
  var rightButton = $('.right-arrow-nav-btn');
  leftButton.on('click', function () {
    return revealRules(rulesBox, controlsBox, leftButton, rightButton);
  });
  rightButton.on('click', function () {
    return revealControls(rulesBox, controlsBox, leftButton, rightButton);
  });

  // /////////////////////////////////////////
  var progenitorCell = $('#cell1');
  progenitorCell.on('click', function () {
    return replicateCell(progenitorCell);
  });
};

var replicateCell = function replicateCell(parentCell) {
  var cellImageContainer = $('.petri-dish');
  var parentCellIdNum = parentCell.attr('id').slice(-1);
  var childCellIdNum = parseInt(parentCellIdNum) + 1;
  var childCellId = 'cell' + childCellIdNum;
  var babyCell = $('<img src="assets/images/cartoon-germ-virus.jpg" alt="germ" class=\'cell-picture\' id=' + childCellId + '/>');
  cellImageContainer.append(babyCell);
  babyCell.on('click', function () {
    return replicateCell(babyCell);
  });
};

var revealPopover = function revealPopover() {

  var popoverMask = $('.popover');
  var instructions = $('.instructions');
  // popoverMask.toggle('hidden-popover');
  popoverMask.addClass('transparent-popover');
  popoverMask.removeClass('hidden-popover');
  // instructions.toggle('hidden-instructions');
  instructions.addClass('instructions-display');
  instructions.removeClass('hidden-instructions');
};

var revealRules = function revealRules(rules, controls, leftBtn, rightBtn) {
  rules.removeClass('hideable-container');
  controls.addClass('hideable-container');
  leftBtn.addClass('hideable-btn');
  rightBtn.removeClass('hideable-btn');
};

var revealControls = function revealControls(rules, controls, leftBtn, rightBtn) {
  rules.addClass('hideable-container');
  controls.removeClass('hideable-container');
  leftBtn.removeClass('hideable-btn');
  rightBtn.addClass('hideable-btn');
};

var hidePopover = function hidePopover() {
  var popoverMask = $('.popover');
  var instructions = $('.instructions');
  popoverMask.addClass('hidden-popover');
  popoverMask.removeClass('transparent-popover');
  // instructions.toggle('hidden-instructions');
  instructions.addClass('hidden-instructions');
  instructions.removeClass('instructions-display');

  var cellHorde = $('.cell-picture');
  cellHorde.slice(1).remove();
};

document.addEventListener('DOMContentLoaded', init);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map