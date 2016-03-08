import tpl from './mods/table.atpl';
import data from './mods/data';

const main = {
  init: function() {
    $('#J_main')
      .hide()
      .html(tpl(data))
      .fadeIn();
  }
};

$(function() {
  main.init();
});