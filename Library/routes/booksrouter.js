var express=require("express");
const router=express.Router();



module.exports=router;




router.get("/books", function(req,res){
    console.log("Books");
    res.render("Books",{ptitle:"Library", nav:[{link:"/books", ntitle:"Books"},{link:"/authors", ntitle:"Authors"}],books:books});
}); 

router.get("/books/:id", function(req,res){
    var id=req.params.id;
    console.log(id);
    res.render("singlebook",{ptitle:"Library", nav:[{link:"/books", ntitle:"Books"},{link:"/authors", ntitle:"Authors"}],books:books[id]});

}); 