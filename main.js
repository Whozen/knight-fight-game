var p1turn = true;
var p2turn = false;
var p1name, p2name, p2Type;

let player1 = new Player('player1','player2', p1name);
let player2 = new Player('player2','player1', p2name);

// Set Player 2 as human or computer according to parameter passed and display the game screen.
// function p2Choice(p2) {
//   p2Type = p2;
//   document.getElementsByClassName("game-container")[0].style.display = "block";
//   document.getElementsByClassName("game-intro")[0].style.display = "none";
// }

// Start the game
function startGame() {
  initPlayers();   
  
  if(validateData()) {
    return 0;
  }

  initState();
}

// Validate the data submitted by user in intro screen
function validateData() {
  var flag = 0;

  if(p1name.length < 1) {
    alert("Please enter Player 1's name");
    flag = 1;
  } else if(p1name.length > 15) {
    alert("Player 1's name too long");
    flag = 1;
  }
  
  if(p2name.length < 1) {
    alert("Please enter Player 2's name");
    flag = 1;
  } else if(p2name.length > 15) {
    alert("Player 2's name too long");
    flag = 1;
  } 

  if(flag == 1) {
    return true;
  } else {
    return false;
  }
}


// Initialize players data. Set name and player 2 type.
function initPlayers() {
  var selection = document.getElementsByName("opposition");

  p1name = document.getElementsByName("p1name")[0].value;
  p2name = document.getElementsByName("p2name")[0].value;

  for(var i = 0; i < selection.length; i++) {
    if(selection[i].checked) {
      p2Type = selection[i].value;
    }
  }

  player1.setName(p1name);
  player2.setName(p2name);
}


// Initialize the state of the game. 
// Hide intro screen and show game screen.
// Populate the text's with players name
function initState() {
  var player1, player2, p1tag, p2tag;

  document.getElementsByClassName("game-container")[0].style.display = "block";
  document.getElementsByClassName("game-intro")[0].style.display = "none";

  player1 = document.getElementById('player1');
  p1tag = player1.children[2].children[5];
  p1tag.innerHTML  = p1name +' is ready to fight.';

  player2 = document.getElementById('player2');
  p2tag = player2.children[2].children[5];
  p2tag.innerHTML  = p2name +' is ready to fight.';

  document.getElementById('turn_text').innerHTML = p1name + "'s turn";
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
    
    if(p2Type == "computer") {
      tt.innerHTML = p2name +"'s turn";
    } else {
      tt.innerHTML = p1name + "'s turn";
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
    } else {
      p2.classList.remove("disabled");
    }

  } else if(p2turn == true) {
    p1turn = true;
    p2turn = false;
    
    p2.classList.add("disabled");
    p1.classList.remove("disabled");

    tt.innerHTML = p1name + "'s turn";

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
    document.getElementById('winner_player2').children[1].innerHTML = p2name + " is the Winner!!!";
    document.getElementById('turn_text').style.display = "none";
    return true;
  } else if(p2 <= 0) {
    document.getElementsByClassName("game-content")[0].style.display = "none";
    document.getElementsByClassName("end-container")[0].style.display = "block";
    document.getElementById('winner_player1').style.display = "block";
    document.getElementById('winner_player1').children[1].innerHTML = p1name + " is the Winner!!!";
    document.getElementById('turn_text').style.display = "none";
    return true;
  }

  return false;
}

// var player1 = 'player1';
// var player2 = 'player2';

// function p2Choice(p2) {
//   player2 = this.p2;
//   document.getElementsByClassName("game-background")[0].style.display = "block";
//   document.getElementsByClassName("game-into")[0].style.display = "none";
//   let game = new Game(player1, player2);
// }