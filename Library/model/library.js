var mongoose=require("mongoose");
var schema= mongoose.Schema;

var libschema=new schema({
    "title":String,
    "id":String,
    "author":String,
    "price":Number,
    "category":String,
    "image":String

});
var libmodel=mongoose.model("Books", libschema,"Books");

module.exports=libmodel;