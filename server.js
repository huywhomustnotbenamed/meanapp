var express = require('express');
var app     = express();

app.get('/', function(req, res){
  res.sendfile(__dirname + '/client/view/index.html')
});

app.listen(3000, function(){
  console.log('connected to 3000')
})