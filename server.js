var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.resolve(__dirname, './build')));

app.listen(port, function(err) {
  console.log(err || ('Express listening on port ' + port));
});
