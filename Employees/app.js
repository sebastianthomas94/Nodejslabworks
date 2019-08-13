var express=require("express")
const app=express();


app.listen(1234,function(req,res){
    console.log("server is running...");
});


app.set("view engine", "ejs");
app.set("views", "./views");     



/* var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true})); */


app.get("/", function(req,res){
    res.render("emp");
});



var emprouter=require("./routes/emp.js");

app.use("/emp",emprouter );   

