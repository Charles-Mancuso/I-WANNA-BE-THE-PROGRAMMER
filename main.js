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

  const render = function () {

  };

  const update = function () {
    game.update();
  }

  const controller = new Controller();
  const display = new Display(document.querySelector('canvas'));
  const game = new Game();
  const engine = new Engine(1000 / 30, render, update);

  window.addEventListener('resize', display.handleResize);
  window.addEventListener('keydown', controller.handleKeyDownUp);
  window.addEventListener('keyup', controller.handleKeyDownUp);

  display.resize();
  engine.start();
});