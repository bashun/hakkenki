var express = require('express');
var app = express();

app.get('/getcount', function(req, res){
  res.json(g.c());
});

app.listen(3000);

var g = (function(){
  var c = 1;

  var cnt = function cnt(){
    c++;
    return JSON.stringify({"count" : c});
  }

  return {
    c : cnt
  };
}());
