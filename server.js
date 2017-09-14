var express = require('express');
var app = express();
var fs = require('fs');
var _ = require("lodash");
var bodyParser = require('body-parser');
var data = require("./users.json");

app.use(bodyParser());
app.use(express.static('public'));
app.get('/api',function (req,res) {
    res.json(data);
});
app.listen(8080,function () {
    console.log("express running")
});