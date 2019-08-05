var express=require("express");
const app=express();

app.listen(1234,function(req,res){
    console.log("server is running...");
});


app.get("/", function(req,res){
    res.sendfile(__dirname+"/views/login.html");
});

app.post("/home", function(req,res){
    res.sendfile(__dirname+"/views/home1.html");
});