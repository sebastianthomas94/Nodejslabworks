var express=require("express")
const app=express();


var prdrouter=require("./routes/product.js");


app.listen(1234,function(req,res){
    console.log("server is running...");
});

 app.set("view engine", "ejs");
app.set("views", "./views");               //Not needed if this is the directry


var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));


app.use("/prd",prdrouter );                           //Sending to router

app.get("/", function(req,res){
    res.render("main");
});