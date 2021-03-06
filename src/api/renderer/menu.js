(function() {
  'use strict';

  const electron = require('electron');
  const remote = electron.remote;
  const Menu = remote.Menu;

  var menu = new Menu();

  var template = [{
    label: 'File',
    submenu: [{
      label: 'Exit',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    }]
  }, {
    label: 'Developers',
    submenu: [{
      label: 'Release Page',
      click: function() {
        electron.shell.openExternal('https://github.com/Protocore-UI/protocore-studio/releases');
      }
    }, {
      label: 'Milestones',
      click: function() {
        electron.shell.openExternal('https://github.com/Protocore-UI/protocore-studio/milestones');
      }
    }, {
      type: 'separator'
    }, {
      label: 'Report Issues',
      click: function() {
        electron.shell.openExternal('https://github.com/Protocore-UI/protocore-studio/issues');
      }
    }, {
      label: 'Send Pull Requests',
      click: function() {
        electron.shell.openExternal('https://github.com/Protocore-UI/protocore-studio/pulls');
      }
    }]
  }, {
    label: 'Help',
    submenu: [{
      label: 'Documentation',
      accelerator: 'CmdOrCtrl+Shift+D',
      click: function() {
        electron.shell.openExternal('https://github.com/Protocore-UI/protocore-studio/wiki');
      }
    }, {
      type: 'separator'
    }, {
      label: 'Github Repository',
      click: function() {
        electron.shell.openExternal('https://github.com/Protocore-UI/protocore-studio');
      }
    }, {
      label: 'About Protocore Studio',
      click: function() {
        electron.shell.openExternal('http://protocore-ui.github.io/protocore-studio');
      }
    }]
  }];

  menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

})();
