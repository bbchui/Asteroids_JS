const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

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
