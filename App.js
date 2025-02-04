const express = require('express')
const app = express()

//ejs
// app.set('view engine', 'ejs');

// app.get('/', function(req, res){
//   res.render("index")
// })

//middleware
// app.use(function(req, res, next){
//   console.log("Hey Hello!");
//   next(); //to go next function 
// })

// app.get('/', function (req, res) {
//   res.send('Something about main page')
// })

// app.get('/about', function(req, res){
//     res.send("Something about me!")
// })

//in every page will show this when use *, called universal route
// app.get('*', function(req, res){
//     res.send("Something star me!")
// })

//dynamic routing ..instaed of username we can write anything , doesn't matter
// app.get('/profile/:username', function(req, res){
//   res.send(req.params.username + " 's page");
// })

// app.get("/author/:username/:age", function(req, res){
//   res.send("username:" + req.params.username + " " + " age:" + req.params.age )
// })

// for get api
// app.get('/check', function(req, res){
//   res.send("Form submitted successfully!");
// });


// for post api
// app.post('/check', function(req, res){
//   res.send("Form submitted successfully!");
// });

//postman api request
// app.get('/check', function(req, res){
//   res.send("Working");
// })

// app.post('/check', function(req, res){
//   res.send("Working");
// })
// app.put('/check', function(req, res){
//   res.send("Working");
// })
// app.patch('/check', function(req, res){
//   res.send("Working");
// })
// app.delete('/check', function(req, res){
//   res.send("Working");
// })

//error handling
// app.get("/", function (req, res, next) {
//   try {
//     res.send("hey")
//   } catch (err) {
//     next(err)
//   }
// })

// app.use((err, req, res, next) =>{
//   res.status(500).send(err.message);
// })


//postman api develope & test

var data =[1,2,3,4,5]
app.get("/", function(req, res){
  res.send("hey");
})

app.get("/data", function(req, res){
  res.send(data)
})

app.post("/data/:number", function(req, res){
  // typeof(req.params.number);

  data.push(parseInt(req.params.number))
  res.send(data)
})

app.listen(3000)