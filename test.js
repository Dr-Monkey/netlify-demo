var http = require('http');  //含入http模組
var server = http.createServer(function (req, res) {  //建立伺服器
    res.end("This is my first node.js program.");
});
server.listen(8080);  //「3000」是埠號,使用者可自修改
console.log("listeming at http://localhost:8080");