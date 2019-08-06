var express=require("express");
const router=express.Router();



module.exports=router;
/* router.set("view engine", "ejs");                    no need of this!
router.set("views", "../views");   */   

router.get("/", function(req,res){
    console.log("reached!");
    res.render("../views/product");
});