'use strict';

var express = require('express');
var app = express();
var request = require('request');

setInterval(function(){
  request.post(
    'https://graph.facebook.com',
    {
      json: {
        id: "https://gif-elixir.herokuapp.com/",
        scrape: true
      }
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body)
      }
    }
  );
}, 2000);


setInterval(function(){
  request.post(
    'https://graph.facebook.com',
    {
      json: {
        id: "http://bit.ly/b-a-r-b-a",
        scrape: true
      }
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body)
      }
    }
  );
}, 2000);

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(req, res){
  var random = Math.floor((Math.random() * 18) + 6);
  res.render('index', {
    gif: random+""
  });
});

app.use('/', express.static('views'));

app.listen(process.env.PORT || 5000, function () {
});
