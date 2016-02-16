var express = require('express');
var app     = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
  var personOne = {
      name: 'One',
      email: 'one@one.com',
      number: '111'
    };

    var personTwo = {
      name: 'two',
      email: 'two@two.com',
      number: '222'
    };

    var contactList = [personOne, personTwo];
    res.json(contactList);
});

app.listen(3000);
console.log("running on port 3000");