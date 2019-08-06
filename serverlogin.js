var express=require("express");
const app=express();

app.set("view engine", "ejs");
app.set("views", "./views");

var book_array = [{name:"Book1",author:"Auth1",price:890},{name:"Book2",author:"Auth2",price:890},{name:"Book3",author:"Auth3",price:790}]

var bodyparser=require("body-parser");




app.listen(1234,function(req,res){
    console.log("server is running...");
});

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendfile(__dirname+"/views/login.html");
});

app.post("/home", function(req,res){ 
    if( req.body.password=="Pass@123"){ 
    res.render("home1");
   /*  if(res.body.books)
        res.render("books") */
    }
    else
        res.redirect("/");
});

app.get("/books", function(req,res){
    res.render("books",{books:book_array});
});