export function Game() {
  this.cardValues = [];
  this.counter = 0;
  this.firstClick = null;
  this.firstClickId = null;
  this.correctCounter = 0;

  Game.prototype.makeMove = function(position){

    if(this.counter === 0){
      this.firstClick = this.cardValues[position - 1];
      this.firstClickId = position;
      this.counter++;
      return 0;
    }
    else{
      if(this.correctCounter === 9){
        return 4;
      }
      this.counter = 0;
      if(this.firstClick === this.cardValues[position - 1]){
        this.correctCounter++;

        return 1;
      }
      else {
        return -1;
      }
    }
  };

  Game.prototype.assignBoard = function(){
    var values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
    var j, x, i;
    for (i = values.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = values[i];
        values[i] = values[j];
        values[j] = x;
    }
    this.cardValues = values;
  };

  this.assignBoard();

}
