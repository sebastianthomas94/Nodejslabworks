var express=require("express");
const router=express.Router();



module.exports=router;
/* router.set("view engine", "ejs");                    no need of this!
router.set("views", "../views");   */   

router.get("/", function(req,res){
    console.log("reached router!");
    res.render("../views/product");
});


router.get("/new", function(req,res){
    console.log("reached new product!");
    res.render("../views/newproduct");
});
router.get("/edit", function(req,res){
    console.log("reached edit product!");
    res.render("../views/editproduct");
});
router.get("/view", function(req,res){
    console.log("reached view!");
    res.render("../views/viewproduct",{pname:proname, price:proprice, qnty:proqtn, i:i });
});
router.post("/del", function(req,res){
    console.log("reached delete!");
    res.render("../views/delproduct");
});

/* router.get("/added", function(req,res){
    console.log("reached added!");
    res.render("../views/added");
});
 */





var i=0;
var proname=Array(), proprice=[""], proqtn=[""];
router.post("/added", function(req,res){
    proname[i]=req.body.pname;console.log(proname[i]);
    proprice[i]=req.body.price;console.log(proprice[i]);
    proqtn[i]=req.body.qnty; console.log(proqtn[i]);
    i++; 
    res.render("added",{pname:req.body.pname, price:req.body.price, qnty:req.body.qnty, i:i });
});

router.get("/del", function(req,res){
    console.log("reached delete!");
    res.render("../views/delproduct");
});

