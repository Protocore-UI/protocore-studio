(function() {
  'use strict';

  const remote = require('electron').remote;
  const dialog = remote.dialog;

  $("#projPath").click(function() {
    dialog.showOpenDialog({
      properties: [ 'openDirectory' ],
      defaultPath: '/home/hegdeashwin/Documents'
    }, function(path) {
      $('#selectedProjPath').val(path);
    });
  });
})();
