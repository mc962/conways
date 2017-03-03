class Cell {
  constructor(dataPoints) {

    this.coord = dataPoints
    this.cell = this.constructSquare();
    this.fillStatus = false;
    this.neighbors = 0;
    
    this.squareClickHandler = this.squareClickHandler.bind(this);
  }

  constructSquare() {

    const $square = $("<li>").addClass('square').attr('data-pos', this.coord);
    $square.on("click", (e) => {this.squareClickHandler(e)});
    return $square;
  }

  squareClickHandler(e) {
    let clickedEl = $(e.currentTarget);

    clickedEl.toggleClass('filled');
    this.fillStatus = !this.fillStatus

  }

  addFill(el) {
    el.addClass('filled')
    this.fillStatus = true;
  }
  removeFill(el) {
    el.removeClass('filled');
    this.fillStatus = false;
  }

}

module.exports = Cell;
