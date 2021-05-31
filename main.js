let player1 = new Player('player1','player2');
let player2 = new Player('player2','player1');

var p1turn = true;
var p2turn = false;
var p2Type;

function p2Choice(p2) {
  p2Type = p2;
  document.getElementsByClassName("game-container")[0].style.display = "block";
  document.getElementsByClassName("game-intro")[0].style.display = "none";
}

//Toggle turn between users
function changeTurn() {
  var p1 = document.getElementById('player1').children[1];
  var p2 = document.getElementById('player2').children[1];
  var tt = document.getElementById('turn_text');
  
  if(p1turn == true) {
    p1turn = false;
    p2turn = true;

    p1.classList.add("disabled");
    p2.classList.remove("disabled");
    
    if(p2Type == "computer") {
      tt.innerHTML = "Computer Turn";
    } else {
      tt.innerHTML = "Player 2 turn";
    }

    if(player1.stolenDagger != 0) {
      player1.stolenDagger--;
    } else {
      p1.children[1].disabled = false;
    }

    if(p2Type == "computer") {
      setTimeout(() => {
        player2.autoPlayGame();
      }, 2000);
    }

  } else if(p2turn == true) {
    p1turn = true;
    p2turn = false;
    
    p2.classList.add("disabled");
    p1.classList.remove("disabled");

    tt.innerHTML = "Player 1 turn";

    if(player2.stolenDagger != 0) {
      player2.stolenDagger--;
    } else {
      p2.children[1].disabled = false;
    }
  }
}


function checkWinner() {
  var p1 = document.getElementById('player1').children[2].children[1].value;
  var p2 = document.getElementById('player2').children[2].children[1].value;

  if(p1 <= 0) {
    document.getElementsByClassName("game-content")[0].style.display = "none";
    document.getElementsByClassName("end-container")[0].style.display = "block";
    document.getElementById('winner_player2').style.display = "block";
    document.getElementById('turn_text').style.display = "none";
  } else if(p2 <= 0) {
    document.getElementsByClassName("game-content")[0].style.display = "none";
    document.getElementsByClassName("end-container")[0].style.display = "block";
    document.getElementById('winner_player1').style.display = "block";
    document.getElementById('turn_text').style.display = "none";
  }
}

// var player1 = 'player1';
// var player2 = 'player2';

// function p2Choice(p2) {
//   player2 = this.p2;
//   document.getElementsByClassName("game-background")[0].style.display = "block";
//   document.getElementsByClassName("game-into")[0].style.display = "none";
//   let game = new Game(player1, player2);
// }