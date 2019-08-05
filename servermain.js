var express=require("express");
const app= express();

app.listen(1234,function(req,res){
    console.log("server is running...");
});

app.get("/", function(req,res){
    res.sendfile(__dirname+"/views/home.html");
});


app.get("/emp",function(seq,res){
    res.sendfile(__dirname+"/views/employee.html");
});

app.get("/prd", function(req,res){
    res.sendfile(__dirname+"/views/product.html");
});

app.get("/emp/pemp", function(req,res){
    res.sendfile(__dirname+"/views/permanent.html");
});
app.get("/emp/demp", function(req,res){
    res.sendfile(__dirname+"/views/daily.html");
});
app.get("/emp/pemp/:id", function(req,res){
    res.send("Selected employee is "+req.params.id);
});



app.get("/emp/demp/:id", function(req,res){
    res.send("Selected employee is "+req.params.id);
});

app.get("/prd/wsle", function(req,res){
    res.sendfile(__dirname+"/views/wholesale.html");
});
app.get("/prd/rsle", function(req,res){
    res.sendfile(__dirname+"/views/retail.html");
});



app.get("/prd/wsle/:id", function(req,res){
    res.send("Selected product is "+req.params.id);
});





/* app.get("/ab?cd", function(req,res){
    res.send("AB?CD")
}); */


/* app.get("/ab+cd", function(req,res){
    res.send("AB+CD")
}); */


/* app.get("/ab*cd", function(req,res){
    res.send("AB*CD")
}); */

/* app.get("/ab(cd)?e", function(req,res){
    res.send("AB(CD)?E")
}); */


/* app.get(/a/, function(req,res){
    res.send("/a/")
});

 */




/* app.get(/.*fly$/, function(req,res){
    res.send("/.*fly$/")
});


app.get(/fly/, function(req,res){
    res.send("/fly/")
}); */


app.get("/books/poems", function(req,res){
    res.send("Poems...");
    //res.send("malayalam poems...")
});

/* app.get("/books", function(req,res){
    res.sendfile(__dirname+"/views/home.html");
    
}); */