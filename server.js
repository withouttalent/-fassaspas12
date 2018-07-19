var express = require('express');
var app = express();
var path = require("path")

app.use(["/assets", "/user/assets", "/user/message/assets"], express.static(path.join(__dirname, "/assets")))
app.set('trust proxy', 'loopback')



app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
