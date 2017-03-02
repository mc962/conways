class Board {
  constructor(ctx, size) {
    this.ctx = ctx;
    this.grid = this.constructGrid(size);
  }

  constructGrid(size) {
    let boardGrid = []
    for (let i = 0; i < size; i++) {
      let subArr = []
      for (let j = 0; j < size; j++) {
        subArr.push(new Tile(i, j, this.ctx));
      }
      boardGrid.push(subArr);
    }
  }

  drawBoard () {
    this.ctx.beginPath();
    this.ctx.lineWidth='6';
    this.ctx.strokeStyle='green';
    this.ctx.rect(0,0, 500, 500);
    this.ctx.stroke();

  }
}

class Tile {
  constructor(i, j, ctx) {
    this.ctx = ctx;
    this.pos = [i, j];
    this.ctx.beginPath();
    this.ctx.lineWidth='1';
    this.ctx.strokeStyle='grey';
    this.ctx.rect(i*10, j*10, 10, 10)
    this.ctx.stroke();
  }
}


module.exports = Board;
