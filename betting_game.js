$(document).ready(function(){
  $('#submit').on('click', gameStart);
});

$(document).ready(function(){
  update_bank();
})

var game = {
  bet: null,
  bank: 100,
  randNumber: null,
  NumberGuess: null,
  getBetAmount: function() {
    return this.bet = parseInt($('#bet').val());
  },
  getRandomNumber: function(min, max) {
    return this.randNumber = Math.floor(Math.random()*(max-min+1)+min);
  },
  getNumberGuess: function() {
    return this.NumberGuess = parseInt($('#guess').val());
  },
};

function update_bank(){
  document.querySelector('#balance').innerHTML = game.bank;
};


function gameStart() {
  game.getBetAmount();
  game.getRandomNumber(1,10);
  game.getNumberGuess();


  if(game.bet > game.bank) {
    alert("Bet amount cannot be larger than your bank!")
  }
  else{
    if (game.randNumber === game.NumberGuess) {
      game.bank += game.bet;
      window.alert ('Correct! You guessed ' + game.NumberGuess + '. The answer was ' + game.randNumber + '. You gained ' + game.bet +'.');
      update_bank();
    }
    else if ((game.randNumber === (game.NumberGuess + 1)) || (game.randNumber === (game.NumberGuess -1))){
       window.alert ('So close! You guessed ' + game.NumberGuess + '. The answer was ' + game.randNumber + '.');
       update_bank();
     }
    else {
      game.bank -= game.bet;
      window.alert ('Wrong! You guessed ' + game.NumberGuess + '. The answer was ' + game.randNumber + '. You lost ' + game.bet +'.');
      update_bank();
    }
  }
};
