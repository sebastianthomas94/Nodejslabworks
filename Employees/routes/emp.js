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


router.get("/uemp/:id", function(req,res){
    console.log("update employess");console.log(req.params.id);
    /* res.render("updateemp",{empid:req.params.id,}); */
    emp.find({Eid:req.params.id},function(err,result){
        if(err)
            throw err;
        else
        {
            console.log(result);
            res.render("updateemp",{emp:result});
        }
    });


});



router.post("/uemp/submit", function(req,res){

    var name= req.body.nname;
    console.log("update employee detail");
    console.log(req.body.Eid);
    var myquery = { Eid: req.body.Eid};
    var newvalues = { $set: { Name: req.body.nname ,Salary:req.body.nsalary} };

    //console.log(req.body.nname+"--------------------------submit");
    emp.update(myquery, newvalues, function(err, result) 
    {
        if (err) 
            throw err;
        else
        {
            console.log(name+"--------------------------submit");
            console.log("1 document updated");
            emp.find({},function(err,result)
            {
                    if(err)
                        throw err;
                    else
                        res.render("viewemp",{emp:result});
            });
        }
    });
});
        
    
    /* e1.Name=req.body.nname;
    e1.Salary=req.body.nsal;
    e1.save(function(err){
        if(err)
            throw err
        else
            res.send("Data send...")
    }) */

