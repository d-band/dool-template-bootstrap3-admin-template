import tpl from './dialog.atpl';

(function(win) {
  function showDialog(title, msg, type, callback) {
    $('#J_globalDialog').remove();
    let html = tpl({
      title: title ? title : '',
      msg: msg ? msg : '',
      btns: type === 'alert' ? [{
        text: 'OK',
        class_: 'btn-primary'
      }] : [{
        text: 'Cancel',
        class_: 'btn-default'
      }, {
        text: 'OK',
        class_: 'btn-primary'
      }]
    });

    let container = $(html).appendTo('body');
    container.on('click', '.J_button', function(ev) {
      ev.preventDefault();
      let id = $(this).data('id');
      callback && callback(id);
    }).modal('show');
  }

  win.dialog = {
    alert: function(title, content, callback) {
      showDialog(title, content, 'alert', callback);
    },
    confirm: function(title, content, callback) {
      showDialog(title, content, 'confirm', callback);
    }
  };
}(typeof window !== "undefined" ? window : this));
