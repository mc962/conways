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
  function Board(boardContainer, size) {
    _classCallCheck(this, Board);

    this.board = $(boardContainer);
    this.boardSize = size;
  }

  _createClass(Board, [{
    key: 'constructGrid',
    value: function constructGrid() {

      for (var i = 0; i < Math.sqrt(this.boardSize); i++) {
        this.board.append(this.buildRow(i));
      }
    }
  }, {
    key: 'buildRow',
    value: function buildRow(rowIdx) {
      var $row = $('<ul>').addClass('row');
      for (var colIdx = 0; colIdx < Math.sqrt(this.boardSize); colIdx++) {
        var $square = $("<li>").addClass('square').attr('data-pos', [rowIdx, colIdx]);
        $square.on("click", this.fillToggler);

        $row.append($square);
      }
      return $row;
    }
  }, {
    key: 'fillToggler',
    value: function fillToggler(e) {

      $(e.currentTarget).toggleClass('filled');
    }
  }, {
    key: 'drawBoard',
    value: function drawBoard() {}
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


var Board = __webpack_require__(0);

var init = function init() {

  console.log('Init');
  var boardContainer = document.getElementById('canvasLife');

  var testBoardSize = 100;
  var lifeBoard = new Board(boardContainer, testBoardSize);
  lifeBoard.constructGrid();
};

document.addEventListener('DOMContentLoaded', init);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map