(function() {
  'use strict';

  const remote = require('electron').remote;
  const dialog = remote.dialog;

  const BrowserWindow = remote.BrowserWindow;

  var win = new BrowserWindow({ width: 800, height: 600, show: false });
  win.on('closed', function() {
    win = null;
  });

  $("#projectPath").click(function() {
    dialog.showOpenDialog({
      properties: [ 'openDirectory' ]
    }, function(dir) {
      console.log(dir);

      return;
    });
  });
})();
