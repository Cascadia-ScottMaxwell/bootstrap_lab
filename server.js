var connect = require('connect');
var http = require ('http');
var app = connect();

var compression = require('compression');
app.use(compression());

var static = require('serve-static');
app.use(static(__dirname + "/public"));

http.createServer(app).listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log(static);
});