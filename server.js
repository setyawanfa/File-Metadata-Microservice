'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

var upload = multer();
app.post('/api/fileanalyse', upload.any(),function(req,res,next){
  //res.send(req.files);
  var filename = req.files[0]['originalname'];
  var size = req.files[0]['size'];
  res.send({"filename" : filename, " filesize" : size});
})
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
