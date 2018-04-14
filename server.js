var express = require('express');

var app = express();

app.get("/",function(req,res){
    res.end('123');
})

app.listen(3000);