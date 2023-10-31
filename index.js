const express = require('express');
const greet = require('./export.js');

var app = express()
var port = 2001      // Port của localhost do mình chọn

app.use(express.static("public"))
app.set("views engine", "ejs")
app.set("views", "./views")

app.get('/', function (req, res) {
    res.render('home.ejs')
})

var server = require("http").Server(app)

server.listen(port, function () {
    console.log('Server listening on port ' + port) //Lắng nghe port
})

