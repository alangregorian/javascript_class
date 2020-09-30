/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
var player_one_score, player_two_score;


function reset_global_scores(player_one_score, player_two_score){
  player_one_score = 0;
  player_two_score = 0;
}


function play_round(player_score) {
  dice = Math.floor(math.random() + 1);
  
}

function start_game(player_one_score, player_two_score){
  reset_global_scores(player_one_score, player_two_score);
   
  while ((player_one_score < 100) && (player_two_score < 100)) {
    dice = Math.floor(math.random() + 1);
  
    
  } 
}
*/

var score, roundScore, activePlayer;

score = [0,0];
roundScore = 0;
activePlayer = 0;

//document.querySelector('#current-' + activePlayer).textContent = dice;
/*
var player_current_score = document.querySelector('#score-0').textContent;
console.log(player_current_score);



function btn() {
  //Do something here
}

//document.querySelector('.btn-roll').addEventListener('click', btn);
*/

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
  
  if (score[0] >= 50 || score[1] >= 50) {    
    document.querySelector('.dice').style.display = 'none';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('#name-0').textContent = 'PLayer 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    roundScore = 0;
    
    score[0] = 0;
    score[1] = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
  
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1; 
  }
  
  // 1. Get random number
  var dice = Math.floor((Math.random() *6 ) + 1);
  console.log(dice);
  
  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  
  
  // 3. update the round score if the rolled number was not a '1'.
  if (dice > 1) {
    //add score to current score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1; 
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    
    document.querySelector('.dice').style.display = 'none';
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  score[activePlayer] += roundScore;
  
  if (score[activePlayer] >= 50) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  }
  
  
  
  roundScore = 0;
  
  document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
  
  document.getElementById('current-' + activePlayer).textContent = '0';
    
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    
  activePlayer === 1 ? activePlayer = 0 : activePlayer = 1; 
    
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
  
  document.querySelector('.dice').style.display = 'none';
});

document.querySelector('.btn-new').addEventListener('click', function() {
  document.querySelector('.dice').style.display = 'none';
    
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('#name-0').textContent = 'PLayer 1';
  document.querySelector('#name-1').textContent = 'Player 2';
    
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
    
  roundScore = 0;
    
  score[0] = 0;
  score[1] = 0;
    
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
});






































