const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3434, function(){
    console.log("Server Initiated. ");
});

app.get('/styles.css', function(req,res){
    res.sendFile(__dirname + "/" + "styles.css");
});
app.get('/script.js', function(req,res){
    res.sendFile(__dirname + "/" + "script.js");
});

app.use(express.static('public'));
app.use('/images', express.static('images'));