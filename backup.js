body {
  margin: 0;
}

* {
  box-sizing: border-box;
}
.game-background {
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08e09130-b992-41f9-bdf6-9ac116532ae6/d6fz3kg-e9884def-8bee-4e7b-b545-b2ac6d3cbf8a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wOGUwOTEzMC1iOTkyLTQxZjktYmRmNi05YWMxMTY1MzJhZTYvZDZmejNrZy1lOTg4NGRlZi04YmVlLTRlN2ItYjU0NS1iMmFjNmQzY2JmOGEuanBnIn1dXX0.0D6bGfGrZlSs4uVZ_hGWepjL9hly4LU-DAPc26TTnQU'); 
  background-position: center; 
  background-size: cover; 
  position: relative;
  overflow: auto;
} 

.game-background::after {
  content: "";
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.game-container {
  width: 1200px;
  margin: 35px auto;
  z-index: 5; 
  position: relative;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
}

.turn-text {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #FFF;
}

.player-img {
  position: relative;
}

.player-img .explosion-action, .player-img .thunder-action {
  display: none;
  position: absolute; 
  top: 0; 
  left: 50%; 
  transform: translateX(-50%);
}

.player-img .slash-action {
  display: none;
  position: absolute; 
  top: 50%; 
  transform: translateY(-50%);
  left: 50%; 
  transform: translateX(-50%);
}

.player2 .player-img .slash-action {
  display: none;
  position: absolute; 
  top: 50%; 
  /*transform: translateY(-50%);*/
  left: 50%; 
  /*transform: translateX(-50%);*/
  -webkit-transform: translate(-50%) rotate(180deg);
  -moz-transform: translate(-50%) rotate(180deg);
  -ms-transform: translate(-50%) rotate(180deg);
  -o-transform: translate(-50%) rotate(180deg);
  transform: translate(-50%) rotate(180deg);
}

.player2 .player-img {
  text-align: right;
}

.player-info {
  margin: 20px 0;
}

.player-info progress {
  display: block;
  height: 35px;
  width: 350px;
  margin-bottom: 20px;
}

/*progress::-moz-progress-bar { 
    background: red; 
} 

progress::-webkit-progress-value { 
    background: red; 
} 

progress { 
    background: red; 
} */


.player1 .player-img .hit-action {
  position: relative;
  animation-name: hit-action1;
  animation-duration: 0.2s;
}

@keyframes hit-action1 {
  0%   {left:0px; }
  25%  {left:25px; }
  50%  {left:50px; }
  75%  {left:75px; }
  100% {left:100px; }
}

.player-img .shield-action {
  position: relative;
  animation-name: shield-action;
  animation-duration: 0.2s;
}

/*@keyframes shield-action {
  0%   {width: 200px; height: 200px; }
  25%  {width:225px; height: 225px; }
  50%  {width:250px; height: 250px; }
  75%  {width:225px; height: 225px; }
  100% {width:200px; height: 200px; }
}*/

@keyframes shield-action {
  0%   {opacity: 1; }
  25%  {opacity: 0.75; }
  50%  {opacity: 0.5; }
  75%  {opacity: 0.75; }
  100% {opacity: 1; }
}

.player2 .player-img .hit-action {
  position: relative;
  animation-name: hit-action2;
  animation-duration: 0.2s;
}

@keyframes hit-action2 {
  0%   {right:0px; }
  25%  {right:25px; }
  50%  {right:50px; }
  75%  {right:75px; }
  100% {right:100px; }
}

.player-info {
  margin: 50px 0;
}

.player-info h3 {
  margin-top:0;
  margin-bottom: 5px;
  color: #FFF;
}

.player-info .action-text {
  color: #FFF;
}


.end-container {
  display: none;
}

.winner-content .winner-img {
  display: none;
  text-align: center;
}

.winner-content .winner-img p {
  font-size: 30px;
  font-weight: bold;
}

.end-container {
  text-align: center;
}

.play-again {
  padding: 15px 20px;
  cursor: pointer;
  font-size: 18px;
}

.play-again:hover {
  color: #FFF;
  background-color: black;
}

.btn-action {
  padding: 10px 15px;
  font-weight: bold;
  border-color: navy;
  background-color: #FFF;
  cursor: pointer;
}

.btn-action:hover {
  border-color: red;
  color: maroon;
}

.btn-action:disabled,
.btn-action[disabled]{
  pointer-events: none;
  border-color: lightgray;
  color: gray;
}

.player-moves.disabled .btn-action {
  cursor: not-allowed;
  pointer-events: none;
  border-color: lightgray;
  color: gray;
}

.btn-action.hidden-action {
  display: none;
}







class Player {
  constructor(self, rival) {
    this.self = self;
    this.rival = rival;
    this.randomized = false;
    this.shielded = false;
    this.spearFlag = false;
    this.stolenDagger = 2;
  }

  autoPlayGame() {
    var choice = Math.floor((Math.random()*10)%5);
    var player = document.getElementById(this.self);
    
    switch(choice) {
      case 0: this.swordAttack();
        break;
      case 1: 
        if(player.children[1].children[1].disabled == true) {
          this.autoPlayGame();
        } else {
          this.daggerAttack();
        }
        break;
      case 2: this.shield();
        break;
      case 3: this.blackMagic();
        break;
      case 4: 
        if(player.children[1].children[4].classList.contains("hidden-action") == true) {
          this.autoPlayGame();
        } else {
          this.fireSpearAttack();
        }
        break;
      default: break;
    }
  }

  swordAttack() {
    if( this.randomized == true ) {
      this.randomMove();
    } else {
      this.hit(5);
      this.animatePlayer("hit-action");
      this.updateAction("You hit rival with sword.");
      this.showSlash();
      setTimeout(() => {
        this.endSlash();
      }, 500);
      new Audio('sword_audio.mp3').play();
      setTimeout(() => {
        this.removeAnimationClass("hit-action");
        checkWinner();
      }, 500);
      changeTurn();
    }
  }

  showExplosion() {
    var player = document.getElementById(this.rival);
    var img = player.children[0].children[1];
    img.style.display = "block";
  }

  endExplosion() {
    var player = document.getElementById(this.rival);
    var img = player.children[0].children[1];
    img.style.display = "none";
  }

  showThunder() {
    var player = document.getElementById(this.self);
    var img = player.children[0].children[3];
    img.style.display = "block";
  }

  endThunder() {
    var player = document.getElementById(this.self);
    var img = player.children[0].children[3];
    img.style.display = "none";
  }

  showSlash() {
    var player = document.getElementById(this.rival);
    var img = player.children[0].children[2];
    img.style.display = "block";
  }

  endSlash() {
    var player = document.getElementById(this.rival);
    var img = player.children[0].children[2];
    img.style.display = "none";
  }

  randomMove() {
    var choice = Math.floor((Math.random()*10)%4);
    this.randomized = false;

    switch(choice) {
      case 0: this.swordAttack();
        break;
      case 1: this.daggerAttack();
        break;
      case 2: this.shield();
        break;
      case 3: this.blackMagic();
        break;
      default: break;
    }
  }

  daggerAttack() {
    if( this.randomized == true ) {
      this.randomMove();
    } else {
      this.hit(10);
      this.movePlayer(10);
      this.animatePlayer("hit-action");
      this.updateAction("You moved closer and hit rival with a dagger.");
      new Audio('sword_audio.mp3').play();
      setTimeout(() => {
        this.removeAnimationClass("hit-action");
        checkWinner();
      }, 500);
      changeTurn();
    }
  }

  shield() {
    if( this.randomized == true ) {
      this.randomMove();
    } else {
      this.setShielded(true);
      this.animatePlayer("shield-action");
      this.movePlayer(-15);
      this.updateAction("You moved farther and shielded yourself.");
      new Audio('shield_audio.mp3').play();
      setTimeout(() => {
        this.removeAnimationClass("shield-action");
      }, 500);
      changeTurn();
    }
  }

  blackMagic() {
    if( this.randomized == true ) {
      this.randomMove();
    } else {
      var choice = Math.floor((Math.random()*10)%4);
      switch(choice) {
        case 0: this.exchangeHealthDistance();
          break;
        case 1: this.randomizeMoves();
          break;
        case 2: this.stealDagger();
          break;
        case 3: this.getFireSpear();
          break;
        default: break;
      }
      new Audio('magic_audio.mp3').play();
      this.showThunder();
      setTimeout(() => {
        this.endThunder();
      }, 1000);
      changeTurn();
    }
  }


  getFireSpear() {
    var player = document.getElementById(this.self);
    var new_button = player.children[1].children[4];
    
    new_button.classList.remove("hidden-action");
    this.spearFlag = 2;

    this.updateAction("You used blackmagic. Satan gave you a spear that burns when used for two turns.");
  }

  isShielded() {
    return this.shielded;
  }

  setShielded(value) {
    this.shielded = value;
  }

  hit(damage, rival = true) {
    if(rival == true) {
      var player = document.getElementById(this.rival);
    } else {
      var player = document.getElementById(this.self);
    }
    var health = player.children[2].children[1];
    var distance = player.children[2].children[3];
    
    var p;
    if(this.rival == "player2") {
      p = player2;
    } else {
      p = player1;
    }

    if( p.isShielded() == true ) {
      if(damage >= 8) {
        damage = damage - 8;
      } else {
        damage = 0;
      }
      p.setShielded(false);
    }

    var total_damage;
    if(rival == true) {
      total_damage = damage + ((100-distance.value)/4);
    } else {
      total_damage = damage;
    }
    console.log(total_damage);
    health.value = health.value - total_damage;
  }

  movePlayer(moved) {
    var player = document.getElementById(this.self);
    var distance = player.children[2].children[3];
    distance.value = distance.value - moved;
    var x = 100 - distance.value;
    if(this.self == "player2") {
      player.children[0].children[0].style.margin = "0px " + (x*3) + "px 0px 0px";
    } else {
      player.children[0].children[0].style.margin = "0px 0px 0px " + (x*3) + "px";
    }
  }

  animatePlayer(action) {
    var player = document.getElementById(this.self);
    var img = player.children[0].children[0];
    img.className = action;
  }

  removeAnimationClass(action) {
    var player = document.getElementById(this.self);
    var img = player.children[0].children[0];
    img.classList.remove(action);
  }

  updateAction(text) {
    var player = document.getElementById(this.self);
    var ptag = player.children[2].children[5];
    ptag.innerHTML  = text;
  }

  exchangeHealthDistance() {
    var player = document.getElementById(this.self);
    var temp = player.children[2].children[1].value;
    player.children[2].children[1].value = player.children[2].children[3].value;
    player.children[2].children[3].value = temp;
    this.updateAction("You used blackmagic. Your health and distance values exchanged.");
  }

  randomizeMoves() {
    if(this.rival == "player2") {
      player2.setRandomMoves();
    } else if(this.rival == "player1") {
      player1.setRandomMoves();
    }
    this.updateAction("You randomized opponents moves.");
  }

  setRandomMoves() {
    this.randomized = true;
  }

  stealDagger() {
    var player2 = document.getElementById(this.self);
    var player2 = document.getElementById(this.rival);
    player2.children[1].children[1].disabled = true;
    this.stolenDagger = 2;
    this.updateAction("You used blackmagic. You stole rivals dagger for two turns.");
  }

  fireSpearAttack() {
    if( this.randomized == true ) {
      this.randomMove();
    } else {
      this.hit(15);
      this.hit(5, false);
      this.animatePlayer("hit-action");
      this.showExplosion();
      setTimeout(() => {
        this.endExplosion();
      }, 1000);
      this.updateAction("You hit rival with fire spear but i burnt your hand.");
      new Audio('fire_audio.mp3').play();
      this.checkFireSpear();
      setTimeout(() => {
        this.removeAnimationClass("hit-action");
        checkWinner();
      }, 500);
      changeTurn();
    }
  }

  checkFireSpear() {
    var player = document.getElementById(this.self);
    var new_button = player.children[1].children[4];
    this.spearFlag--;
    if(this.spearFlag == 0) {
      new_button.classList.add("hidden-action");
    }
  }

  isAlive() {
    var player1 = document.getElementById(this.self).children[2].children[1].value;

    if(player <= 0) {
      return false;
    }
  }
}


let player1 = new Player('player1','player2');
let player2 = new Player('player2','player1');

var p1turn = true;
var p2turn = false;

function changeTurn() {
  var p1 = document.getElementById('player1').children[1];
  var p2 = document.getElementById('player2').children[1];
  var tt = document.getElementById('turn_text');
  
  if(p1turn == true) {
    p1turn = false;
    p2turn = true;

    p1.classList.add("disabled");
    p2.classList.remove("disabled");
    tt.innerHTML = "Player2 turn";

    if(player1.stolenDagger != 0) {
      player1.stolenDagger--;
    } else {
      p1.children[1].disabled = false;
    }

    setTimeout(() => {
      player2.autoPlayGame();
    }, 2000);

  } else if(p2turn == true) {
    p1turn = true;
    p2turn = false;
    
    p2.classList.add("disabled");
    p1.classList.remove("disabled");

    tt.innerHTML = "Player1 turn";

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
    //alert("Player 2 wins!!!");
    document.getElementsByClassName("game-content")[0].style.display = "none";
    document.getElementsByClassName("end-container")[0].style.display = "block";
    document.getElementById('winner_player2').style.display = "block";
  } else if(p2 <= 0) {
    //alert("Player 1 wins!!!");
    document.getElementsByClassName("game-content")[0].style.display = "none";
    document.getElementsByClassName("end-container")[0].style.display = "block";
    document.getElementById('winner_player1').style.display = "block";
  }
}

=========================================================================================================================
=========================================================================================================================
=========================================================================================================================

<!DOCTYPE html>
<html>
<head>
  <title>Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="main-container">
    <!-- <div class="intro-background">
      <div class="intro-container">
        
      </div>
    </div> -->

    <div class="game-background">
      <div class="game-container">
        <p class="turn-text" id="turn_text">Player1 turn</p>
        <div class="game-content flex">
          <div class="player-container player1" id="player1">
            <div class="player-img">
              <img src="knight1.png" id="p1img" width="200" height="200">
              <img src="explosion.gif" class="explosion-action" width="200" height="200">
              <img src="slash.gif" class="slash-action" width="300">
              <img src="thunder.gif" class="thunder-action" height="200">
            </div>
            <div class="player-moves">
              <button onclick="player1.swordAttack()" class="btn-action">Sword Attack</button>
              <button onclick="player1.daggerAttack()" class="btn-action">Dagger Attack</button>
              <button onclick="player1.shield()" class="btn-action">Shield</button>
              <button onclick="player1.blackMagic()" class="btn-action">Black Magic</button>
              <button onclick="player1.fireSpearAttack()" class="btn-action hidden-action">Fire Spear</button>
            </div>
            <div class="player-info">
              <h3>Health</h3>
              <progress id="p1Health" value="100" max="100"></progress>

              <h3>Distance (Susceptibility)</h3>
              <progress id="p1Distance" value="100" max="100"></progress>

              <h3>Player 1 Actions</h3>
              <p class="action-text">Player 1 is ready to fight.</p>
            </div>
          </div>
          <div class="player-container player2" id="player2">
            <div class="player-img">
              <img src="knight2.png" id="p2img" width="200" height="200">
              <img src="explosion.gif" class="explosion-action" width="200" height="200">
              <img src="slash.gif" class="slash-action" width="300">
              <img src="thunder.gif" class="thunder-action" height="200">
            </div>
            <div class="player-moves disabled">
              <button onclick="player2.swordAttack()" class="btn-action">Sword Attack</button>
              <button onclick="player2.daggerAttack()" class="btn-action">Dagger Attack</button>
              <button onclick="player2.shield()" class="btn-action">Shield</button>
              <button onclick="player2.blackMagic()" class="btn-action">Black Magic</button>
              <button onclick="player2.fireSpearAttack()" class="btn-action hidden-action">Fire Spear</button>
            </div>
            <div class="player-info">
              <h3>Health</h3>
              <progress id="p2Health" value="100" max="100"></progress>

              <h3>Distance (Susceptibility)</h3>
              <progress id="p2Distance" value="100" max="100"></progress>

              <h3>Player 2 Actions</h3>
              <p class="action-text">Player 2 is ready to fight.</p>
            </div>
          </div>
        </div>

        <div class="end-container">
          <div class="winner-content" style=" background-image: url('winner.gif');">
            <div class="winner-img player1" id="winner_player1">
              <img src="knight1.png" width="350" height="350">
              <p>Player 1 Wins!!!</p>
            </div>
            <div class="winner-img player2" id="winner_player2">
              <img src="knight2.png" width="350" height="350">
              <p>Player 2 Wins!!!</p>
            </div>
          </div>
          <button onClick="window.location.reload(true)" class="play-again">Play Again</button>
        </div>
      </div>
    </div>
  </div>
  <script src="main.js"></script>
</body>
</html>


=========================================================================================================================
=========================================================================================================================
=========================================================================================================================


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

    setTimeout(() => {
      autoPlayGame();
    }, 2000);

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

function autoPlayGame() {
  var choice = Math.floor((Math.random()*10)%5);
  var player = document.getElementById('player2');
  
  switch(choice) {
    case 0: swordAttack('player2', 'player1');
      break;
    case 1: 
      if(player.children[1].children[1].disabled == true) {
        autoPlayGame();
      } else {
        daggerAttack('player2', 'player1');
      }
      break;
    case 2: shield('player2', 'player1');
      break;
    case 3: blackMagic('player2', 'player1');
      break;
    case 4: 
      if(player.children[1].children[4].classList.contains("hidden-action") == true) {
        autoPlayGame();
      } else {
        fireSpearAttack('player2', 'player1');
      }
      break;
    default: break;
  }
}

function swordAttack(self, rival) {
  if( ((self == "player1") && (p1randomized == true)) || ((self == "player2") && (p2randomized == true)) ) {
    randomMove(self, rival);
  } else {
    hit(rival, 5);
    animatePlayer(self, "hit-action");
    updateAction(self, "You hit rival with sword.");
    showSlash(rival);
    setTimeout(() => {
      endSlash(rival);
    }, 500);
    new Audio('sword_audio.mp3').play();
    setTimeout(() => {
      removeAnimationClass(self, "hit-action");
      checkWinner();
    }, 500);
    changeTurn();
  }
}

function showExplosion(rival) {
  var player = document.getElementById(rival);
  var img = player.children[0].children[1];
  img.style.display = "block";
}

function endExplosion(rival) {
  var player = document.getElementById(rival);
  var img = player.children[0].children[1];
  img.style.display = "none";
}

function showThunder(self) {
  var player = document.getElementById(self);
  var img = player.children[0].children[3];
  img.style.display = "block";
}

function endThunder(self) {
  var player = document.getElementById(self);
  var img = player.children[0].children[3];
  img.style.display = "none";
}

function showSlash(rival) {
  var player = document.getElementById(rival);
  var img = player.children[0].children[2];
  img.style.display = "block";
}

function endSlash(rival) {
  var player = document.getElementById(rival);
  var img = player.children[0].children[2];
  img.style.display = "none";
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
    new Audio('sword_audio.mp3').play();
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
    new Audio('shield_audio.mp3').play();
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
    new Audio('magic_audio.mp3').play();
    showThunder(self);
    setTimeout(() => {
      endThunder(self);
    }, 1000);
    changeTurn();
  }
}


function getFireSpear(self) {
  var player = document.getElementById(self);
  var new_button = player.children[1].children[4];
  
  if(self == "player1") {
    new_button.classList.remove("hidden-action");
    p1spearFlag = 2;
  } else if(self == "player2") {
    new_button.classList.remove("hidden-action");
    p2spearFlag = 2;
  }
  updateAction(self, "You used blackmagic. Satan gave you a spear that burns when used for two turns.");
}


function hit(rival, damage, dist = true) {
  var player = document.getElementById(rival);
  var health = player.children[2].children[1];
  var distance = player.children[2].children[3];
  
  if( ((rival == "player1") && (p1shield == true)) || ((rival == "player2") && (p2shield == true)) ) {
    damage = damage - 8;
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
    player.children[0].children[0].style.margin = "0px " + (x*3) + "px 0px 0px";
  } else {
    player.children[0].children[0].style.margin = "0px 0px 0px " + (x*3) + "px";
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
    showExplosion(rival);
    setTimeout(() => {
      endExplosion(rival);
    }, 1000);
    updateAction(self, "You hit rival with fire spear but i burnt your hand.");
    new Audio('fire_audio.mp3').play();
    checkFireSpear(self);
    setTimeout(() => {
      removeAnimationClass(self, "hit-action");
      checkWinner();
    }, 500);
    changeTurn();
  }
}

function checkFireSpear(self) {
  var player = document.getElementById(self);
  var new_button = player.children[1].children[4];
  if(self == "player1") {
    p1spearFlag--;
    if(p1spearFlag == 0) {
      new_button.classList.add("hidden-action");
    }
  } else if(self == "player2") {
    p2spearFlag--;
    if(p2spearFlag == 0) {
      new_button.classList.add("hidden-action");
    }
  }

}