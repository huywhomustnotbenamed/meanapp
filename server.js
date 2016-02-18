var express           = require('express');
var app               = express();
var bodyParser        = require('body-parser');
var mongoose          = require('mongoose');
var meetupsController = require('./server/controllers/meetups-controllers.js');

app.use(bodyParser());

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/views/index.html')
});

app.post('/api/meetups', meetupsController.create);

app.use('/js', express.static(__dirname + '/client/js'));

app.listen(3000, function(){
  console.log('connected to 3000')
});