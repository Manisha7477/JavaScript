const express = require('express')
const app = express()

//middleware
// app.use(function(req, res, next){
//   console.log("Hey Hello!");
//   next(); //to go next function 
// })

app.get('/', function (req, res) {
  res.send('Something about main page')
})

app.get('/about', function(req, res){
    res.send("Something about me!")
})

//in every page will show this when use *, called universal route
// app.get('*', function(req, res){
//     res.send("Something star me!")
// })

//dynamic routing ..instaed of username we can write anything , doesn't matter
// app.get('/profile/:username', function(req, res){
//   res.send(req.params.username + " 's page");
// })

app.get("/author/:username/:age", function(req, res){
  res.send("username:" + req.params.username + " " + " age:" + req.params.age )
})


app.listen(3000)