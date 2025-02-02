const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

//for form controll
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//api
app.get("/", (req, res) => {
    fs.readdir('./collection', function(err, files) {
        if (err) {
            return res.status(500).send("Error reading directory");
        }
        res.render("index", { files: files });
    });
});

app.get("/create", function(req, res){
    res.render("create")
})

app.post("/createcollection", function(req, res){
    var currentDate = new Date();
    var date = `${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`

   fs.writeFile(`./collection/${date}.txt`, req.body.content, function(err){
    if(err) return res.status(500).send(err);
    res.redirect("/")
   });
});

app.get("/edit/:filename", function(req, res){
    fs.readFile(`./collection/${req.params.filename}`, "utf-8" ,function(err, filedata)
{    
    if(err) return res.status(500).send(err);
    res.render("edit", {filedata, filename: req.params.filename});
})
})

app.post("/update/:filename", function(req, res){
fs.writeFile(`./collection/${req.params.filename}`, req.body.content, function(err){
    if(err) return res.status(500).send(err);
    res.redirect("/");
})
})


app.get("/collection/:filename", function(req, res){
    const filename = req.params.filename;
    fs.readFile(`./collection/${filename}`, "utf-8", function(err, filedata){
        if (err) return res.status(500).send(err);
        
        // Ensure to pass filename and filedata to the view
        res.render("collection", { filedata, filename });
    });
});

app.get("/delete/:filename", function(req, res){
    const filename = req.params.filename;
    fs.unlink(`./collection/${filename}`, function(err){
        if (err) return res.status(500).send(err);
        res.redirect("/")
    });
});
app.listen(3000);