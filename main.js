var p1shield = false;
var p2shield = false;
var p1randomized = false;
var p2randomized = false;
var p1turn = true;
var p2turn = false;
var p1sword = 0;
var p2sword = 0;
var p1spearFlag = 0;
var p2spearFlag = 0;

function changeTurn() {
  var player1 = document.getElementById('player1').children[1];
  var player2 = document.getElementById('player2').children[1];
  var tt = document.getElementById('turn_text');
  
  if(p1turn == true) {
    p1turn = false;
    p2turn = true;

    player1.classList.add("disabled");
    player2.classList.remove("disabled");
    tt.innerHTML = "Player2 turn";

    if(p1sword != 0) {
      p1sword--;
    } else {
      player1.children[1].disabled = false;
    }

  } else if(p2turn == true) {
    p1turn = true;
    p2turn = false;
    
    player2.classList.add("disabled");
    player1.classList.remove("disabled");

    tt.innerHTML = "Player1 turn";

    if(p2sword != 0) {
      p2sword--;
    } else {
      player2.children[1].disabled = false;
    }
  }
}

function swordAttack(self, rival) {
  if( ((self == "player1") && (p1randomized == true)) || ((self == "player2") && (p2randomized == true)) ) {
    randomMove(self, rival);
  } else {
    hit(rival, 5);
    animatePlayer(self, "hit-action");
    updateAction(self, "You hit rival with sword.");
    setTimeout(() => {
      removeAnimationClass(self, "hit-action");
      checkWinner();
    }, 500);
    changeTurn();
  }
}

function randomMove(self, rival) {
  var choice = Math.floor((Math.random()*10)%4);
  if(self == "player1") {
    p1randomized = false;
  } else if(self == "player2") {
    p2randomized = false;
  }
  switch(choice) {
    case 0: swordAttack(self, rival);
      break;
    case 1: daggerAttack(self, rival);
      break;
    case 2: shield(self, rival);
      break;
    case 3: blackMagic(self, rival);
      break;
    default: break;
  }
}

function daggerAttack(self, rival) {
  if( ((self == "player1") && (p1randomized == true)) || ((self == "player2") && (p2randomized == true)) ) {
    randomMove(self, rival);
  } else {
    hit(rival, 10);
    movePlayer(self, 10);
    animatePlayer(self, "hit-action");
    updateAction(self, "You moved closer and hit rival with a dagger.");
    setTimeout(() => {
      removeAnimationClass(self, "hit-action");
      checkWinner();
    }, 500);
    changeTurn();
  }
}

function shield(self, rival) {
  if( ((self == "player1") && (p1randomized == true)) || ((self == "player2") && (p2randomized == true)) ) {
    randomMove(self, rival);
  } else {
    if(self == "player1") {
      p1shield = true;
    } else {
      p2shield = true;
    }
    animatePlayer(self, "shield-action");
    movePlayer(self, -15);
    updateAction(self, "You moved farther and shielded yourself.");
    setTimeout(() => {
      removeAnimationClass(self, "shield-action");
    }, 500);
    changeTurn();
  }
}

function blackMagic(self, rival) {
  if( ((self == "player1") && (p1randomized == true)) || ((self == "player2") && (p2randomized == true)) ) {
    randomMove(self, rival);
  } else {
    var choice = Math.floor((Math.random()*10)%4);
    switch(choice) {
      case 0: exchangeHealthDistance(self);
        break;
      case 1: randomizeMoves(self,rival);
        break;
      case 2: stealDagger(self,rival);
        break;
      case 3: getFireSpear(self);
        break;
      default: break;
    }
    changeTurn();
  }
}


function getFireSpear(self) {
  var player = document.getElementById(self);
  var new_button = player.children[1].children[4];
  
  if(self == "player1") {
    if(p1spearFlag == 0) {
      new_button.classList.remove("hidden-action");
      p1spearFlag = 1;
      updateAction(self, "You used blackmagic. Satan gave you a spear that burns when used.");
    } else if(p1spearFlag == 1) {
      new_button.classList.add("hidden-action");
      p1spearFlag = 0;
      updateAction(self, "You used blackmagic. Satan took away the spear cause you demanded too much.");
    }
  } else if(self == "player2") {
    if(p2spearFlag == 0) {
      new_button.classList.remove("hidden-action");
      p2spearFlag = 1;
      updateAction(self, "You used blackmagic. Satan gave you a spear that burns when used.");
    } else if(p2spearFlag == 1) {
      new_button.classList.add("hidden-action");
      p2spearFlag = 0;
      updateAction(self, "You used blackmagic. Satan took away the spear cause you demanded too much.");
    }
  }
}


function hit(rival, damage, dist = true) {
  var player = document.getElementById(rival);
  var health = player.children[2].children[1];
  var distance = player.children[2].children[3];
  
  if( ((rival == "player1") && (p1shield == true)) || ((rival == "player2") && (p2shield == true)) ) {
    damage = damage - 5;
    p1shield = false;
    p2shield = false;
  }

  var total_damage;
  if(dist == true) {
    total_damage = damage + ((100-distance.value)/4);
  } else {
    total_damage = damage;
  }
  console.log(total_damage);
  health.value = health.value - total_damage;
}

function movePlayer(self, moved) {
  var player = document.getElementById(self);
  var distance = player.children[2].children[3];
  distance.value = distance.value - moved;
  var x = 100 - distance.value;
  if(self == "player2") {
    player.children[0].children[0].style.padding = "0px " + (x*3) + "px 0px 0px";
  } else {
    player.children[0].children[0].style.padding = "0px 0px 0px " + (x*3) + "px";
  }
}

function animatePlayer(self, action) {
  var player = document.getElementById(self);
  var img = player.children[0].children[0];
  img.className = action;
}

function removeAnimationClass(self, action) {
  var player = document.getElementById(self);
  var img = player.children[0].children[0];
  img.classList.remove(action);
}

function updateAction(self, text) {
  var player = document.getElementById(self);
  var ptag = player.children[2].children[5];
  ptag.innerHTML  = text;
}

function checkWinner() {
  var player1 = document.getElementById('player1').children[2].children[1].value;
  var player2 = document.getElementById('player2').children[2].children[1].value;

  if(player1 <= 0) {
    //alert("Player 2 wins!!!");
    document.getElementsByClassName("game-content")[0].style.display = "none";
    document.getElementsByClassName("end-container")[0].style.display = "block";
    document.getElementById('winner_player2').style.display = "block";
  } else if(player2 <= 0) {
    //alert("Player 1 wins!!!");
    document.getElementsByClassName("game-content")[0].style.display = "none";
    document.getElementsByClassName("end-container")[0].style.display = "block";
    document.getElementById('winner_player1').style.display = "block";
  }
}

function exchangeHealthDistance(self) {
  var player = document.getElementById(self);
  var temp = player.children[2].children[1].value;
  player.children[2].children[1].value = player.children[2].children[3].value;
  player.children[2].children[3].value = temp;
  updateAction(self, "You used blackmagic. Your health and distance values exchanged.");
}

function randomizeMoves(self, rival) {
  if(rival == "player1") {
    p1randomized = true;
  } else if(rival == "player2") {
    p2randomized = true;
  }
  updateAction(self, "You randomized opponents moves.");
}

function stealDagger(self, rival) {
  var player1 = document.getElementById(self);
  var player2 = document.getElementById(rival);
  player2.children[1].children[1].disabled = true;
  if(rival == "player1") {
    p1sword = 1;
  } else if(rival == "player2") {
    p2sword = 1;
  }
  updateAction(self, "You used blackmagic. You stole rivals dagger for two turns.");
}

function fireSpearAttack(self, rival) {
  if( ((self == "player1") && (p1randomized == true)) || ((self == "player2") && (p2randomized == true)) ) {
    randomMove(self, rival);
  } else {
    hit(rival, 15);
    hit(self, 5, false);
    animatePlayer(self, "hit-action");
    updateAction(self, "You hit rival with fire spear but i burnt your hand.");
    setTimeout(() => {
      removeAnimationClass(self, "hit-action");
      checkWinner();
    }, 500);
    changeTurn();
  }
}