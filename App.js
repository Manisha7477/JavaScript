const express = require('express')
const app = express()

//middleware
app.use(function(req, res, next){
  console.log("Hey Hello!");
  next(); //to go next function 
})

app.get('/', function (req, res) {
  res.send('Something about main page')
})

app.get('/about', function(req, res){
    res.send("Something about me!")
})

//dynamic routing
app.get('/about/:username', function(req, res){
  res.send("Something about username!")
})
//in every page ill show this when use *, called universal route
// app.get('*', function(req, res){
//     res.send("Something star me!")
// })

app.listen(3000)