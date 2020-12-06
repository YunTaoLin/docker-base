
var express = require('express');


var app = express();


app.use(express.static(__dirname + "/"))

// 首頁
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.listen(3000,()=>{
  console.log('啟動成功')
  console.log('http://localhost:3000')
})