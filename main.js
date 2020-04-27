window.addEventListener('load', function (event) {
  'use strict';

  var render = function () {
    display.renderColor(game.color);
    display.render();
  };

  var update = function () {
    game.update():
  }

  var controller = new Controller();
  var display = new Display(document.querySelector('canvas'));
  var game = new Game();
  var engine = new engine(1000 / 30, render, update);

});