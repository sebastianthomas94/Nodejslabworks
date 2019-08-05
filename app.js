




var f=function hello()
{
    console.log("Hello World");
    return("return success!")
}
var a=f();


console.log(a);
var greet=require("./greetings");
/* greet.welcome(); */


for(var i =0;i<greet.lang.length;i++)
{
    console.log(greet.lang[i]);
}






