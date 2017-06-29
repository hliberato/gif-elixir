'use strict';

var express = require('express');
var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(req, res){
  var random = Math.floor((Math.random() * 5) + 1);
  res.render('index', {
    gif: random+""
  });
});

app.use('/', express.static('views'));

app.listen(process.env.PORT || 5000, function () {
});
