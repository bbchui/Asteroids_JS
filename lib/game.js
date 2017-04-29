const Util = require('./util.js');
const Asteroid = require('./asteroid.js');
const MovingObject = require('./moving_object.js');

Game.DIM_X = 600;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 10;

// const defaults = {
//   DIM_X: 400,
//   DIM_Y: 400,
//   NUM_ASTEROIDS: 10
// };

function Game () {
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    let asteroidPosition = [Math.random()*Game.DIM_X,
                            Math.random()*Game.DIM_Y];
    this.asteroids.push(new Asteroid({ pos: asteroidPosition }));
  }
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach(function(asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(function(asteroid){
    asteroid.move();
  });
};

module.exports = Game;
