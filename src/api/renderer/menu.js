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
      role: 'close'
    }]
  }, {
    label: 'Developers',
    submenu: [{
      label: 'Release Page',
      click: function() {
        electron.shell.openExternal('https://github.com/hegdeashwin/protocore-studio/releases');
      }
    }, {
      label: 'Milestones',
      click: function() {
        electron.shell.openExternal('https://github.com/hegdeashwin/protocore-studio/milestones');
      }
    }, {
      type: 'separator'
    }, {
      label: 'Issues Page',
      click: function() {
        electron.shell.openExternal('https://github.com/hegdeashwin/protocore-studio/issues');
      }
    }, {
      label: 'Open Pull Requests',
      click: function() {
        electron.shell.openExternal('https://github.com/hegdeashwin/protocore-studio/pulls');
      }
    }]
  }, {
    label: 'Help',
    submenu: [{
      label: 'Documentation',
      click: function() {
        electron.shell.openExternal('https://github.com/hegdeashwin/protocore-studio');
      }
    }, {
      type: 'separator'
    }, {
      label: 'Github Repository',
      click: function() {
        electron.shell.openExternal('https://github.com/hegdeashwin/protocore-studio');
      }
    }, {
      label: 'About Protocore Studio',
      click: function() {
        electron.shell.openExternal('https://github.com/hegdeashwin/protocore-studio');
      }
    }]
  }];

  menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

})();
