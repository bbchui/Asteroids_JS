/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(4);
const Util = __webpack_require__(5);

const asteroidDefaults = {
  COLOR: 'blue',
  RADIUS: 10
};



function Asteroid(options) {
  MovingObject.call(this, { pos: options.pos,
                            vel: Util.randomVec(5),
                            radius: options.radius || asteroidDefaults.RADIUS,
                            color: options.color || asteroidDefaults.COLOR });

}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(0);
const Bullet = __webpack_require__(2);
const GameView = __webpack_require__(3);
const Game = __webpack_require__(6);

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");

  const newGame = new GameView(ctx);
  console.log("adjksfblkasdf");
  newGame.start();
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(4);
const Game = __webpack_require__(6);

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  return this.pos;
};

module.exports = MovingObject;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const Util = {
  inherits (childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  },
  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(5);
const Asteroid = __webpack_require__(0);
const MovingObject = __webpack_require__(4);

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


/***/ })
/******/ ]);