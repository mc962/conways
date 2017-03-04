
class Shapes {
  constructor(startPos) {
    this.startPos = startPos
    this.seeds = {
      'TETROMINO': this.tetromino(),
      'GLIDER': this.glider(),
      'GOSPERGLIDER': this.gosperGlider(),
      'SUNSHINE': this.sunshine(),
      'SUPERNOVA': this.supernova(),
    };

  }

 glider() {
  return (
    [
      this.startPos,
      [this.startPos[0]+2, this.startPos[1]-1],
      [this.startPos[0]+2, this.startPos[1]+0],
      [this.startPos[0]+1, this.startPos[1]+1],
      [this.startPos[0]+2, this.startPos[1]+1]
    ]
  )
}

 tetromino() {
  return (
    [
      this.startPos,
      [this.startPos[0]+0, this.startPos[1]-1],
      [this.startPos[0]+0, this.startPos[1]+1],
      [this.startPos[0]+1, this.startPos[1]+0]
    ]
  )
}

 gosperGlider() {
  return (
    [
    [this.startPos[0]-2, this.startPos[1]-17],
    [this.startPos[0]-3, this.startPos[1]-17],
    [this.startPos[0]-2, this.startPos[1]-18],
    [this.startPos[0]-3, this.startPos[1]-18],

    [this.startPos[0]-1, this.startPos[1]-9],
    [this.startPos[0]-1, this.startPos[1]-10],
    [this.startPos[0]-2, this.startPos[1]-10],
    [this.startPos[0]-3, this.startPos[1]-9],
    [this.startPos[0]-3, this.startPos[1]-8],
    [this.startPos[0]-2, this.startPos[1]-8],


    this.startPos,
    [this.startPos[0]-1, this.startPos[1]-1],
    [this.startPos[0]-1, this.startPos[1]-2],
    [this.startPos[0]+0, this.startPos[1]-2],
    [this.startPos[0]+1, this.startPos[1]-2],



    [this.startPos[0]-3, this.startPos[1]+4],
    [this.startPos[0]-4, this.startPos[1]+4],
    [this.startPos[0]-3, this.startPos[1]+5],
    [this.startPos[0]-5, this.startPos[1]+5],
    [this.startPos[0]-5, this.startPos[1]+6],
    [this.startPos[0]-4, this.startPos[1]+6],

    [this.startPos[0]+7, this.startPos[1]+6],
    [this.startPos[0]+8, this.startPos[1]+6],
    [this.startPos[0]+7, this.startPos[1]+7],
    [this.startPos[0]+9, this.startPos[1]+7],
    [this.startPos[0]+7, this.startPos[1]+8],



    [this.startPos[0]-5, this.startPos[0]+16],
    [this.startPos[0]-4, this.startPos[0]+16],
    [this.startPos[0]-5, this.startPos[0]+17],
    [this.startPos[0]-4, this.startPos[0]+17],

    [this.startPos[0]+2, this.startPos[0]+17],
    [this.startPos[0]+3, this.startPos[0]+17],
    [this.startPos[0]+4, this.startPos[0]+17],
    [this.startPos[0]+2, this.startPos[0]+18],
    [this.startPos[0]+3, this.startPos[0]+19]
    ]
  )
}

 sunshine() {
   return (
      [
        [this.startPos[0]+3,this.startPos[1]-7],
        [this.startPos[0]-3,this.startPos[1]-7],

        [this.startPos[0]+3,this.startPos[1]-6],
        [this.startPos[0]-3,this.startPos[1]-6],

        [this.startPos[0]+3,this.startPos[1]-5],
        [this.startPos[0]+2,this.startPos[1]-5],

        [this.startPos[0]-2,this.startPos[1]-5],
        [this.startPos[0]-3,this.startPos[1]-5],

        [this.startPos[0]-7,this.startPos[1]-3],
        [this.startPos[0]-6,this.startPos[1]-3],
        [this.startPos[0]-5,this.startPos[1]-3],
        [this.startPos[0]-2,this.startPos[1]-3],
        [this.startPos[0]-1,this.startPos[1]-3],
        [this.startPos[0]+1,this.startPos[1]-3],
        [this.startPos[0]+2,this.startPos[1]-3],
        [this.startPos[0]+5,this.startPos[1]-3],
        [this.startPos[0]+6,this.startPos[1]-3],
        [this.startPos[0]+7,this.startPos[1]-3],

        [this.startPos[0]-5,this.startPos[1]-2],
        [this.startPos[0]-3,this.startPos[1]-2],
        [this.startPos[0]-1,this.startPos[1]-2],
        [this.startPos[0]+1,this.startPos[1]-2],
        [this.startPos[0]+3,this.startPos[1]-2],
        [this.startPos[0]+5,this.startPos[1]-2],

        [this.startPos[0]-3,this.startPos[1]-1],
        [this.startPos[0]-2,this.startPos[1]-1],
        [this.startPos[0]+2,this.startPos[1]-1],
        [this.startPos[0]+3,this.startPos[1]-1],
        //////////////
        [this.startPos[0]+3,this.startPos[1]+7],
        [this.startPos[0]-3,this.startPos[1]+7],
        [this.startPos[0]+3,this.startPos[1]+6],
        [this.startPos[0]-3,this.startPos[1]+6],
        [this.startPos[0]+3,this.startPos[1]+5],
        [this.startPos[0]+2,this.startPos[1]+5],

        [this.startPos[0]-2,this.startPos[1]+5],
        [this.startPos[0]-3,this.startPos[1]+5],
        [this.startPos[0]-7,this.startPos[1]+3],
        [this.startPos[0]-6,this.startPos[1]+3],
        [this.startPos[0]-5,this.startPos[1]+3],
        [this.startPos[0]-2,this.startPos[1]+3],
        [this.startPos[0]-1,this.startPos[1]+3],
        [this.startPos[0]+1,this.startPos[1]+3],
        [this.startPos[0]+2,this.startPos[1]+3],
        [this.startPos[0]+5,this.startPos[1]+3],
        [this.startPos[0]+6,this.startPos[1]+3],
        [this.startPos[0]+7,this.startPos[1]+3],

        [this.startPos[0]-5,this.startPos[1]+2],
        [this.startPos[0]-3,this.startPos[1]+2],
        [this.startPos[0]-1,this.startPos[1]+2],
        [this.startPos[0]+1,this.startPos[1]+2],
        [this.startPos[0]+3,this.startPos[1]+2],
        [this.startPos[0]+5,this.startPos[1]+2],

        [this.startPos[0]-3,this.startPos[1]+1],
        [this.startPos[0]-2,this.startPos[1]+1],
        [this.startPos[0]+2,this.startPos[1]+1],
        [this.startPos[0]+3,this.startPos[1]+1]



      ]
    )
  }

  supernova() {
    return(
      [
        [this.startPos[0]+3,this.startPos[1]-7],
        [this.startPos[0]-3,this.startPos[1]-7],

        [this.startPos[0]+3,this.startPos[1]-6],
        [this.startPos[0]-3,this.startPos[1]-6],

        [this.startPos[0]+3,this.startPos[1]-5],
        [this.startPos[0]+2,this.startPos[1]-5],

        [this.startPos[0]-2,this.startPos[1]-5],
        [this.startPos[0]-3,this.startPos[1]-5],

        [this.startPos[0]-7,this.startPos[1]-3],
        [this.startPos[0]-6,this.startPos[1]-3],
        [this.startPos[0]-5,this.startPos[1]-3],
        [this.startPos[0]-2,this.startPos[1]-3],
        [this.startPos[0]-1,this.startPos[1]-3],
        [this.startPos[0]+1,this.startPos[1]-3],
        [this.startPos[0]+2,this.startPos[1]-3],
        [this.startPos[0]+5,this.startPos[1]-3],
        [this.startPos[0]+6,this.startPos[1]-3],
        [this.startPos[0]+7,this.startPos[1]-3],

        [this.startPos[0]-5,this.startPos[1]-2],
        [this.startPos[0]-3,this.startPos[1]-2],
        [this.startPos[0]-1,this.startPos[1]-2],
        [this.startPos[0]+1,this.startPos[1]-2],
        [this.startPos[0]+3,this.startPos[1]-2],
        [this.startPos[0]+5,this.startPos[1]-2],

        [this.startPos[0]-3,this.startPos[1]-1],
        [this.startPos[0]-2,this.startPos[1]-1],
        [this.startPos[0]+2,this.startPos[1]-1],
        [this.startPos[0]+3,this.startPos[1]-1],
        //////////////
        [this.startPos[0]+3,this.startPos[1]+7],
        [this.startPos[0]-3,this.startPos[1]+7],
        [this.startPos[0]+3,this.startPos[1]+6],
        [this.startPos[0]-3,this.startPos[1]+6],
        [this.startPos[0]+3,this.startPos[1]+5],
        [this.startPos[0]+2,this.startPos[1]+5],

        [this.startPos[0]-2,this.startPos[1]+5],
        [this.startPos[0]-3,this.startPos[1]+5],
        [this.startPos[0]-7,this.startPos[1]+3],
        [this.startPos[0]-6,this.startPos[1]+3],
        [this.startPos[0]-5,this.startPos[1]+3],
        [this.startPos[0]-2,this.startPos[1]+3],
        [this.startPos[0]-1,this.startPos[1]+3],
        [this.startPos[0]+1,this.startPos[1]+3],
        [this.startPos[0]+2,this.startPos[1]+3],
        [this.startPos[0]+5,this.startPos[1]+3],
        [this.startPos[0]+6,this.startPos[1]+3],
        [this.startPos[0]+7,this.startPos[1]+3],

        [this.startPos[0]-5,this.startPos[1]+2],
        [this.startPos[0]-3,this.startPos[1]+2],
        [this.startPos[0]-1,this.startPos[1]+2],
        [this.startPos[0]+1,this.startPos[1]+2],
        [this.startPos[0]+3,this.startPos[1]+2],
        [this.startPos[0]+5,this.startPos[1]+2],

        [this.startPos[0]-3,this.startPos[1]+1],
        [this.startPos[0]-2,this.startPos[1]+1],
        [this.startPos[0]+2,this.startPos[1]+1],
        [this.startPos[0]+3,this.startPos[1]+1],

        this.startPos,
        [this.startPos[0]+0, this.startPos[1]+5],
        [this.startPos[0]+0, this.startPos[1]-5],
        [this.startPos[0]-5, this.startPos[1]+0],
        [this.startPos[0]+5, this.startPos[1]+0],
      ]
    )
  }
}


module.exports = Shapes;
