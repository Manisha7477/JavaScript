const fs = require('fs');

//Folder created
fs.mkdir("NewFolder", function(err){
    if(err) console.log(err);
    else console.log("Folder Created");   
})             