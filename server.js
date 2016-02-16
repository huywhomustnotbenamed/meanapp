var express = require('express');
var app     = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res){
  res.send('Hello');
});

app.listen(PORT, function() {
  console.log('Server running on ' + PORT);
});