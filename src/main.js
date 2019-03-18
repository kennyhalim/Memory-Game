import './styles.css';
import { Game } from './memory.js';

$(document).ready(function() {
  var memoryGame = new Game();
  $("#solution").text(memoryGame.cardValues);
  $("td").click(function(){
    // $(this).attr("id");
    var action = memoryGame.makeMove(parseInt(this.id));
    if(action === 0){
      $("#" + this.id).text(memoryGame.cardValues[this.id - 1]);
    }
    else if(action === 1){
      $("#" + this.id).text(memoryGame.cardValues[this.id - 1]);
    }
    else{
      alert(memoryGame.cardValues[this.id - 1] + " is under the card. It doesn't match.");
      $("#" + this.id).text("Card " + this.id);
      $("#" + memoryGame.firstClickId).text("Card " + memoryGame.firstClickId);
    }
  });
});
