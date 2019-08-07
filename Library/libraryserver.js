var express=require("express")
const app=express();

const path=require('path');









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












app.set("view engine", "ejs");
app.set("views", "./src/views");               //Not needed if this is the directry



app.listen(1234,function(req,res){
    console.log("server is running...");
});


var booksrouter=require("./routes/booksrouter");
app.use("/books",booksrouter);    


app.use(express.static(path.join(__dirname,"/public")));


app.get("/", function(req,res){
    res.render("index",{ptitle:"Library", nav:[{link:"/books", ntitle:"Books"},{link:"/authors", ntitle:"Authors"}]});
});

 /* app.get("/books", function(req,res){
    console.log("Books");
    res.render("Books",{ptitle:"Library", nav:[{link:"/books", ntitle:"Books"},{link:"/authors", ntitle:"Authors"}],books:books});
});  */


app.get("/authors", function(req,res){
    console.log("Authors");
    res.render("Authors",{ptitle:"Library", nav:[{link:"/books", ntitle:"Books"},{link:"/authors", ntitle:"Authors"}]});
}); 



/* app.get("/book/:id", function(req,res){
    var id=req.params.id;
    console.log(id);
    res.render("singlebook",{ptitle:"Library", nav:[{link:"/books", ntitle:"Books"},{link:"/authors", ntitle:"Authors"}],books:books[id]});

});  */