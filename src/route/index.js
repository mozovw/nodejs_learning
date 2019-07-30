var server = require("./server");
var router = require("./router");
 
server.start(router.route);
console.log("http://127.0.0.1:8888/");