window.addEventListener('load', function(event) {
  'use strict';

  const render = function () {
    display.renderColor(game.color);
    display.render();
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