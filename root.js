const Asteroid = require('./lib/asteroid.js');
const Bullet = require('./lib/bullet.js');
const GameView = require('./lib/game_view.js');
const Game = require('./lib/game.js');

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");

  const newGame = new GameView(ctx);
  console.log("adjksfblkasdf");
  newGame.start();
});
