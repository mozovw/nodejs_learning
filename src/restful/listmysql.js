
var mysql  = require('mysql');  
var express = require('express');
var app = express();


app.get('/getUser/:id', function (req, res) {
    var connection = mysql.createConnection({     
        host     : 'localhost',       
        user     : 'root',              
        password : '123456',       
        port: '3306',                   
        database: 'test' 
    }); 
    connection.connect();
    var  sql = 'SELECT * FROM t_user where id = ?';
    var  params = [req.params.id];
    //查
    connection.query(sql,params,function (err, result) {
            if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
            }
            // console.log('--------------------------SELECT----------------------------');
            console.log(result);
            // console.log('------------------------------------------------------------\n\n');  
            // console.log( result );
            // res.end( result);
            res.setHeader('Content-Type', 'text/html; charset=utf8');
            res.end( JSON.stringify(result).toString('utf8'));
    });
    connection.end();
    
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})