(function() {
  'use strict';

  const fs = require('fs');
  const path = require('path');

  var licensePath = path.join(__dirname, '..', 'LICENSE');

  fs.readFile(licensePath, 'utf-8', function(err, data) {
    if(err) {
      throw err;
    }

    $('#license').text(data);
  });

})();
