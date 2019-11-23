const fs = require('fs');

module.exports = (app, authenticate, axios) => {
  fs.readdirSync(__dirname + '/routes/').forEach(file => {
    if (file[0] === '_') {
      return;
    } else {
      const fileName = file.substr(0, file.indexOf('.'));
      console.log(fileName);
      require('./routes/' + fileName)(app, authenticate, axios);
    }
  });
};
