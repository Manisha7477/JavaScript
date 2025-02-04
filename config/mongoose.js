const mongoose = require("mongoose");
const debuglog = require('debug');

mongoose.connect("mongodb+srv://testusername:OuHEn0XsDtTrUUIl@cluster0.b016r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

).then(function () {
    console.log("Connected to MongoDB")})
    .catch(err => console.error("MongoDB connection error:", err));
  

const db = mongoose.connection;

db.on("error", function(err){
    debuglog(err);
})

db.on("open", function(){
    debuglog("Connected to the database");
})

module.exports = db;