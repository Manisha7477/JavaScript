const express = require('express')
const app = express();

app.get("/", function(req, res){
    // console.log(req.params); //o/p : {}
    // console.log(req.body); //undefined
    console.log(req.cookies); // undefined
    console.log(req.body); //{}
    console.log(req.ip); //:1
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);



})
app.listen(3000);