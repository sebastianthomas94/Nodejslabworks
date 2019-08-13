var express=require("express");
var mongoose=require("mongoose");
const router=express.Router();

var url="mongodb://localhost/emp";  //--------------------------emps?
var emp=require("../model/employees");


var bodyparser=require('body-parser');
router.use(bodyparser.urlencoded({extended:true}));



mongoose.connect(url,function(err){
    if(err)
        throw err;
    else 
        console.log("database connected");
})



module.exports=router;

router.get("/nemp", function(req,res){
    res.render("newemp");
});

router.post("/aemp", function(req,res){
    var e1=new emp();
    console.log("new employees");
    e1.Eid=req.body.eid;
    e1.Name=req.body.ename;
    e1.Salary=req.body.sal;
    e1.save(function(err){
        if(err)
            throw err
        else
            res.send("Data send...")
    })
  
});

router.get("/vemp", function(req,res){
    console.log("view employess");
    emp.find({},function(err,result){
        if(err)
            throw err;
        else
        {
            console.log(result);
            res.render("viewemp",{emp:result});
        }
    });


    /* res.render("viewemp"); */
});




