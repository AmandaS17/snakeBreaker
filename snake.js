function Snake(){
  this.x = 0;
  this.y = 0;
  this.xSpeed = speed;
  this.ySpeed = 0;
  this.total = 10;
  this.height = 10;
  this.tail = [];

  //initialize tail
  for(c = 0; c < this.total - 1; c++){
    this.tail[c] = createVector(this.x + c*this.height, this.y);
  }

  this.movement = function(xDir, yDir){
    this.xSpeed = xDir;
    this.ySpeed = yDir;
  }

  /*this.newGame = function(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = speed;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    lose = false;

    backColorR += backChangeR;
    backColorG += backChangeG;

    while(Math.abs(backColorR - 19) < 30 && Math.abs(255 - backColorG) < 30){
      backColorR += backChangeR;
      backColorG += backChangeG;
      if(backColorR >= 255 - backChangeR || backColorR <= 0){
        backChangeR = -backChangeR;
      }
      if(backColorG >= 255 - backChangeG || backColorG <= 0){
        backChangeG = -backChangeG;
      }
    }

    if(backColorR >= 255 - backChangeR || backColorR <= 0){
      backChangeR = -backChangeR;
    }
    if(backColorG >= 255 - backChangeG || backColorG <= 0){
      backChangeG = -backChangeG;
    }
  }*/

  this.update = function(){

    for(var c = 0; c < this.tail.length - 1; c++){
      this.tail[c] = this.tail[c+1];
    }

    if(this.total > 0){
      this.tail[this.total-1] = createVector(this.x, this.y);
    }

    this.x += (this.xSpeed * this.height);
    this.y += (this.ySpeed * this.height);

    this.x = constrain(this.x, 0, (cnv.width-this.height));
    this.y = constrain(this.y, 0, cnv.height-this.height);

  }

  this.show = function(){
    fill(0, 100, 255);
    noStroke();
    rect(this.x, this.y, this.height, this.height);

    for(var c = 0; c < this.tail.length; c++){
      fill(19, 255, 255);
      rect(this.tail[c].x, this.tail[c].y, this.height, this.height);
    }

  }

  /*this.deathScreen = function(){
    lose = true;
    fill('#EAE8EE');
    rect(0, 0, cnv.width, cnv.height);
    textSize(20);
    textAlign(CENTER);
    fill('#5E46FF');
    text("You lose! Press ENTER for a new game.", cnv.width/2 - 100, cnv.height/2 -50, 200, 100)
    if(this.total > highScore){
      highScore = this.total;
      var theScore = document.getElementById("highscore");
      theScore.innerHTML = "Highscore: " + this.total;
    }
  }

  this.death = function(){
    if(this.x > cnv.width - this.height || this.x < 0){
      this.deathScreen();
    }
    if(this.y > cnv.height - this.height || this.y < 0){
      this.deathScreen();
    }

    for(var c = 0; c < this.tail.length - 1; c++){
        if(this.tail[c].x == this.x){
          if(this.tail[c].y == this.y){
            this.deathScreen();
          }
        }
    }
  }*/
}
