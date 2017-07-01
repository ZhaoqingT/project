const express = require('express')
const app = express()
const PORT_NUMBER = 8080
const path = require("path")

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/mymap.html'));
  //__dirname : It will resolve to your project folder.
});

//app.get('/', function (req, res) {
  //res.send('Hello World!')
//})

app.listen(PORT_NUMBER, function () {
  console.log('Example app listening on' +  PORT_NUMBER + ' !')
})
