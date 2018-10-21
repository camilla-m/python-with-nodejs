var express = require('express');
var app = express();
app.listen(3000, function () {
  console.log('rodando na porta 3000');
})
 app.get('/python', chamandoPython);
function chamandoPython(req, res) {
  var spawn = require('child_process').spawn;
  var process = spawn('python', ['./script.py', 
  req.query.firstname, 
  req.query.lastname]);
  process.stdout.on('data', function (data) {
    res.send(data.toString());
  });
}