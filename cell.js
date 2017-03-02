class Cell {
  constructor(dataPoints) {

    this.coord = dataPoints
    this.cell = this.constructSquare();
    this.fillStatus = false;
    this.neighbors = 0;
    // this.fillToggler = this.fillToggler.bind(this);
    this.squareClickHandler = this.squareClickHandler.bind(this);
  }

  constructSquare() {

    const $square = $("<li>").addClass('square').attr('data-pos', this.coord);
    $square.on("click", (e) => {this.squareClickHandler(e)});
    return $square;
  }

  squareClickHandler(e) {
    let clickedEl = $(e.currentTarget);


    this.fillToggler(clickedEl);
  }

  fillToggler(el) {
    
    el.toggleClass('filled');
    this.fillStatus = true;
  }
}

module.exports = Cell;
