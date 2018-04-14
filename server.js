var express = require('express');
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'oE9MlGHXuhoY80lTsFB1Odkw-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'JU4a5fm9ltMgQ7D3BeXDYehV',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || '0Tq6dJNvYA9a8lUSeMs1gBHU'
});
var app = express();
app.use(AV.express());
app.get("/",function(req,res){
    res.end('123');
})
app.listen(process.env.LEANCLOUD_APP_PORT);