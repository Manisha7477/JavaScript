const fs = require('fs');

//crrated file
// fs.writeFile("abcd.txt", "My Name is Manisha", function(err){
//     if(err) console.log(err);
//     else console.log("File Created");  
// })

//file readig
// fs.readFile("abcd.txt","utf8", function(err, data){
//     if(err) console.log(err);
//     else console.log(data);   
// })

//data adding in file
// fs.append("abcd.txt","My passout year is 2023", function(err){
//     if(err) console.log(err);
//     else console.log("done");   
// })

//file renaming
// fs.rename("abcd.txt", "NewFileName.txt", function(err){
//     if(err) console.log(err);
//     else console.log("File rename done");  
// })

//file deleting
fs.unlink("NewFileName.txt", function(err){
    if(err) console.log(err);
    else console.log("File deleted");   
})