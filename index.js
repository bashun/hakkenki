var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.json(g.c());
});

app.get('/show', function(req, res){
  res.json(g.s());
});

app.listen(3000);

var g = (function(){
  var c = 1;

  var cnt = function cnt(){
    c++;
    return JSON.stringify({"count" : c});
  }

  var show = function show(){
    return JSON.stringify({"count" : c});
  }

  return {
    c : cnt,
    s : show
  };
}());
