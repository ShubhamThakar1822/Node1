var expres =require ("express");
var app =express();
app.get("/",function (req,res){
    res.send("<h1>Hello All</h1>");
})
app.listen(3000);
console.log("Server is ONNNNNN");