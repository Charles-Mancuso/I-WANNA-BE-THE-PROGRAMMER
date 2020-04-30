window.addEventListener('load', function(event) {
  'use strict';

  const keyDownUp = function(event) {
    controller.keyDownUp(event.type, event.keyCode);
  }

  const resize = function(event) {
    display.resize(document.documentElement.clientWidth - 32,
                   document.documentElement.clientHeight - 32,
                   game.world.height / game.world.width);
    display.render();
  }

  const render = function() {
    display.fill(game.world.background_color);
    display.fillRectangle(game.world.player.x, game.world.player.y, 
                          game.world.player.width, game.world.player.height,
                          game.world.player.color)
    display.render();
  };

  const update = function() {
    if(controller.left.active) {game.world.player.moveLeft()}
    if(controller.right.active) {game.world.player.moveRight()}
    if(controller.up.active) {
      game.world.player.jump()
      controller.up.active = false;
    }
    game.update();
  };

  const controller = new Controller();
  const display = new Display(document.querySelector('canvas'));
  const game = new Game();
  const engine = new Engine(1000 / 30, render, update);

  window.addEventListener('resize', resize);
  window.addEventListener('keydown', keyDownUp);
  window.addEventListener('keyup', keyDownUp);

  resize();
  
  engine.start();
});