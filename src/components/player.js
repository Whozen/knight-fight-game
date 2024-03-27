module.exports = class Player {
  constructor(self, rival) {
    this.self = self;
    this.rival = rival;
    this.randomized = false;
    this.shielded = false;
    this.spearFlag = false;
    this.stolenDagger = 2;
    this.name = self;
  }

  setName(name) {
    this.name = name;
  }

  autoPlayGame() {
    var choice = Math.floor((Math.random() * 10) % 5);
    var player = document.getElementById(this.self);

    switch (choice) {
      case 0:
        this.swordAttack();
        break;
      case 1:
        if (player.children[1].children[1].disabled == true) {
          this.autoPlayGame();
        } else {
          this.daggerAttack();
        }
        break;
      case 2:
        this.shield();
        break;
      case 3:
        this.blackMagic();
        break;
      case 4:
        if (
          player.children[1].children[4].classList.contains("hidden-action") ==
          true
        ) {
          this.autoPlayGame();
        } else {
          this.fireSpearAttack();
        }
        break;
      default:
        break;
    }
  }

  swordAttack() {
    if (this.randomized == true) {
      this.randomMove();
    } else {
      this.hit(5);
      this.animatePlayer("hit-action");
      this.updateAction(this.name + " hit rival with sword.");
      this.showSlash();
      setTimeout(() => {
        this.endSlash();
      }, 500);
      this.playAudio("sword_audio.mp3");
      setTimeout(() => {
        this.removeAnimationClass("hit-action");
        if (checkWinner()) {
          return 0;
        }
        changeTurn();
      }, 500);
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
    var choice = Math.floor((Math.random() * 10) % 4);
    this.randomized = false;

    switch (choice) {
      case 0:
        this.swordAttack();
        break;
      case 1:
        this.daggerAttack();
        break;
      case 2:
        this.shield();
        break;
      case 3:
        this.blackMagic();
        break;
      default:
        break;
    }
  }

  daggerAttack() {
    if (this.randomized == true) {
      this.randomMove();
    } else {
      this.hit(10);
      this.movePlayer(10);
      this.animatePlayer("hit-action");
      this.updateAction(
        this.name + " moved closer and hit rival with a dagger.",
      );
      this.playAudio("sword_audio.mp3");
      setTimeout(() => {
        this.removeAnimationClass("hit-action");
        if (checkWinner()) {
          return 0;
        }
        changeTurn();
      }, 500);
    }
  }

  shield() {
    if (this.randomized == true) {
      this.randomMove();
    } else {
      this.setShielded(true);
      this.animatePlayer("shield-action");
      this.movePlayer(-15);
      this.updateAction(this.name + " moved farther and shielded yourself.");
      this.playAudio("shield_audio.mp3");
      setTimeout(() => {
        this.removeAnimationClass("shield-action");
      }, 500);
      changeTurn();
    }
  }

  blackMagic() {
    if (this.randomized == true) {
      this.randomMove();
    } else {
      var choice = Math.floor((Math.random() * 10) % 4);
      switch (choice) {
        case 0:
          this.exchangeHealthDistance();
          break;
        case 1:
          this.randomizeMoves();
          break;
        case 2:
          this.stealDagger();
          break;
        case 3:
          this.getFireSpear();
          break;
        default:
          break;
      }
      this.playAudio("magic_audio.mp3");
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

    this.updateAction(
      this.name +
        " used blackmagic. Satan gave you a spear that burns when used for two turns.",
    );
  }

  isShielded() {
    return this.shielded;
  }

  setShielded(value) {
    this.shielded = value;
  }

  hit(damage, rival = true) {
    if (rival == true) {
      var player = document.getElementById(this.rival);
    } else {
      var player = document.getElementById(this.self);
    }
    var health = player.children[2].children[1];
    var distance = player.children[2].children[3];

    var p;
    if (this.rival == "player2") {
      p = player2;
    } else {
      p = player1;
    }

    if (p.isShielded() == true) {
      if (damage >= 8) {
        damage = damage - 8;
      } else {
        damage = 0;
      }
      p.setShielded(false);
    }

    var total_damage;
    if (rival == true) {
      total_damage = damage + (100 - distance.value) / 4;
    } else {
      total_damage = damage;
    }

    health.value = health.value - total_damage;
  }

  movePlayer(moved) {
    var player = document.getElementById(this.self);
    var distance = player.children[2].children[3];
    distance.value = distance.value - moved;
    var x = 100 - distance.value;
    if (this.self == "player2") {
      player.children[0].children[0].style.margin =
        "0px " + x * 3 + "px 0px 0px";
    } else {
      player.children[0].children[0].style.margin =
        "0px 0px 0px " + x * 3 + "px";
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
    ptag.innerHTML = text;
  }

  exchangeHealthDistance() {
    var player = document.getElementById(this.self);
    var temp = player.children[2].children[1].value;
    player.children[2].children[1].value = player.children[2].children[3].value;
    player.children[2].children[3].value = temp;
    this.updateAction(
      this.name +
        " used blackmagic. Your health and distance values exchanged.",
    );
  }

  randomizeMoves() {
    if (this.rival == "player2") {
      player2.setRandomMoves();
    } else if (this.rival == "player1") {
      player1.setRandomMoves();
    }
    this.updateAction(this.name + " randomized opponents moves.");
  }

  setRandomMoves() {
    this.randomized = true;
  }

  stealDagger() {
    var player2 = document.getElementById(this.self);
    var player2 = document.getElementById(this.rival);
    player2.children[1].children[1].disabled = true;
    this.stolenDagger = 2;
    this.updateAction(
      this.name + " used blackmagic. You stole rivals dagger for two turns.",
    );
  }

  fireSpearAttack() {
    if (this.randomized == true) {
      this.randomMove();
    } else {
      this.hit(15);
      this.hit(5, false);
      this.animatePlayer("hit-action");
      this.showExplosion();
      setTimeout(() => {
        this.endExplosion();
      }, 1000);
      this.updateAction(
        this.name + " hit rival with fire spear but i burnt your hand.",
      );
      this.playAudio("fire_audio.mp3");
      this.checkFireSpear();
      setTimeout(() => {
        this.removeAnimationClass("hit-action");
        if (checkWinner()) {
          return 0;
        }
        changeTurn();
      }, 500);
    }
  }

  checkFireSpear() {
    var player = document.getElementById(this.self);
    var new_button = player.children[1].children[4];
    this.spearFlag--;
    if (this.spearFlag == 0) {
      new_button.classList.add("hidden-action");
    }
  }

  playAudio(audio) {
    new Audio("./assets/audio/" + audio).play();
  }

  isAlive() {
    var player = document.getElementById(this.self).children[2].children[1]
      .value;

    if (player <= 0) {
      return false;
    }
  }
};
