var express=require("express")
const app=express();


app.listen(1234,function(req,res){
    console.log("server is running...");
});

app.set("view engine", "ejs");
app.set("views", "./views");                //Not needed if this is the directry


var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

var i=0;
var proname=Array(), proprice=[""], proqtn=[""];

app.get("/", function(req,res){
    res.render("main");
});

app.get("/npro", function(req,res){
    
    res.render("newproduct");
});

app.get("/vpro", function(req,res){
    res.render("viewproduct",);
});

app.get("/rpro", function(req,res){
    res.render("removeproduct");
});

app.post("/added", function(req,res){
    proname[i]=req.body.pname;console.log(proname[i]);
    proprice[i]=req.body.price;console.log(proprice[i]);
    proqtn[i]=req.body.qnty; console.log(proqtn[i]);
    i++; 
    res.render("added",{pname:req.body.pname, price:req.body.price, qnty:req.body.qnty });
});