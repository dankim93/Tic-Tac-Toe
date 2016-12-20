const View = require('./ttt-view');// require appropriate file
const Game = require('../gameCode/game'); // require appropriate file

$( () => {
  // Your code here
  const grab = $("<ttt>");
  // grab.tßext("tick");
  const game = new Game();
  new View(game, grab);
});
