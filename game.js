const Game = function() {
  this.world = {
    background_color: 'rgba(40, 48, 56, 0.25)',
    friction: 0.9,
    gravity: 3,
    player: new Game.Player(),
    height: 72,
    width: 128,

  }
}