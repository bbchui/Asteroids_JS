const MovingObject = require('./moving_object.js');
const Game = require('./game.js');

function GameView (ctx) {
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  this.game = new Game();
  let game = this.game;
  let ctx = this.ctx;
  setInterval(function() {
    game.moveObjects();
    game.draw(ctx);
  }, 20);
};

module.exports = GameView;


  // const myObject = new MovingObject({pos: [50, 50], vel: [50, 50], radius: 50, color: "#00FF00"});
