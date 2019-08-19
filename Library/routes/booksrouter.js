var express=require("express");
const router=express.Router();


var mongoose = require('mongoose')
var url = "mongodb://localhost/Library";
var books = require("../model/library");
mongoose.connect(url,function(err,res){
    if(err) 
    throw err;
    else
    console.log("database connected");



});



module.exports=router;




router.get("/", function(req,res){
    console.log("Books");
    books.find({},function(err,result){
        if (err)
            throw(err);
        else
        res.render("Books",{ptitle:"Books", nav:[{link:"/books", ntitle:"Books"},{link:"/authors", ntitle:"Authors"}],books:result});
        console.log(result);
    });
   
}); 

router.get("/:id", function(req,res){
    var id=req.params.id;
    console.log(id);
    books.find({title: id},function(err,result){
        if (err)
            throw(err);
        else
            res.render("singlebook",{ptitle:"Book", nav:[{link:"/books", ntitle:"Books"},{link:"/authors", ntitle:"Authors"}],books:result});
    console.log(result);
}); }); 



 var bodyparser=require('body-parser');
router.use(bodyparser.urlencoded({extended:true})); 



/* 
var books=[
    {
        "title":"Broad Band",
        "id":"1",
        "author":"Claire L. Evans",
        "price":1,
        "category":"Science",
        "image":"https://raw.githubusercontent.com/sebastianthomas94/Assignment-Books/master/Broad%20Band%20-%20Science.jpg"
    },
    {
        "title":"Spying on Whales",
        "id":"2",
        "author":"Nick Pyenson",
        "price":1,
        "category":"Science",
        "image":"https://raw.githubusercontent.com/sebastianthomas94/Assignment-Books/master/Spying%20on%20Whales%20-%20Science.jpg"
    },
    {
        "title":"The Last Black Unicorn",
        "id":"3",
        "author":"Tiffany Haddish",
        "price":1,
        "category":"Humor",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81jfRGazQ6L.jpg"
    },
    {
        "title":"Calypso",
        "id":"4",
        "author":"David Sedaris",
        "price":1,
        "category":"Humor",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51YUhVyiGCL._SX329_BO1,204,203,200_.jpg"
    },
    {
        "title":"Year One",
        "id":"5",
        "author":"Nora Roberts",
        "price":1,
        "category":"Fantasy",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51OiGJ%2BU5xL.jpg"
    },    
    {
        "title":"Circe",
        "id":"6",
        "author":"Madeline Miller",
        "price":1,
        "category":"Fantasy",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51eaZ1mO9ML._SX321_BO1,204,203,200_.jpg"
    }, 
    {
        "title":"Elevation",
        "id":"7",
        "author":"Stephen King",
        "price":1,
        "category":"Horror",
        "image":"Elevation - Horror.jpg"
    }, 
    {
        "title":"Baby Teeth",
        "id":"8",
        "author":"Zoje Stage",
        "price":1,
        "category":"Horror",
        "image":"Baby Teeth - Horror.jpg"
    }, 
    {
        "title":"The Poet X",
        "id":"9",
        "author":"Elizabeth Acevedo",
        "price":1,
        "category":"Poetry",
        "image":"The Poet X- Poetry.jpg"
    }, 
    {
        "title":"Useless Magic",
        "id":"10",
        "author":"Florence Welch",
        "price":1,
        "category":"Poetry",
        "image":"Useless Magic - Poetry.jpg"
    }, 
    {
        "title":"Us Against You",
        "id":"11",
        "author":"Fredrick Backman",
        "price":1,
        "category":"Fiction",
        "image":"UsAgainstYou-fiction.jpg"
    }, 
    {
        "title":"Still me",
        "id":"12",
        "author":"Jojo Moyes",
        "price":1,
        "category":"Fiction",
        "image":"Stillme-fiction.jpg"
    } 
	   , {
        "title":"Khasakinnte Edihasam",
        "id":"13",
        "author":"O V Vijayan",
        "price":1,
        "category":"Fiction",
        "image":"Khasakinte Edihasam.jpg"
    } 
	  ,  {
        "title":"The Old Man And The Sea",
        "id":"14",
        "author":"Ernest Hemingway",
        "price":1,
        "category":"Fiction",
        "image":"the old man and the sea.jpg"
    } 
	  ,  {
        "title":"Immortals Of Meluha ",
        "id":"15",
        "author":"Amish Tripathi",
        "price":1,
        "category":"Fiction",
        "image":"immortals of meluha.jpg"
    } 
	 ,   {
        "title":"God Of Small Things",
        "id":"16",
        "author":"Arundhati Roy",
        "price":1,
        "category":"Fiction",
        "image":"god of small things.jpg"
    } 
	  ,  {
        "title":"PS I Love You",
        "id":"17",
        "author":"Cecelia Ahern",
        "price":1,
        "category":"Fiction",
        "image":"ps i love you.jpg"
    } 
    ]
 */




