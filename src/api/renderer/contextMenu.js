(function() {
  'use strict';

  const electron = require('electron');
  const remote = electron.remote;
  const Menu = remote.Menu;
  const MenuItem = remote.MenuItem;

  var menu = new Menu();

  menu.append(new MenuItem({
    label: 'File',
    submenu: [{
      label: 'Exit',
      role: 'close'
    }]
  }));

  menu.append(new MenuItem({
    type: 'separator'
  }));

  menu.append(new MenuItem({
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
      label: 'Issues Page',
      click: function() {
        electron.shell.openExternal('https://github.com/Protocore-UI/protocore-studio/issues');
      }
    }, {
      label: 'Open Pull Requests',
      click: function() {
        electron.shell.openExternal('https://github.com/Protocore-UI/protocore-studio/pulls');
      }
    }]
  }));

  menu.append(new MenuItem({
    type: 'separator'
  }));

  menu.append(new MenuItem({
    label: 'Help',
    submenu: [{
      label: 'Documentation (Wiki)',
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
  }));

  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    menu.popup(remote.getCurrentWindow());
  }, false);

})();
